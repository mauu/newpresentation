var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, EventEmitter, Input, Output, Optional } from '@angular/core';
import { coerceBooleanProperty } from './../../utility/lib-utility';
import { CjWizardHelper } from './cj-wizard-helper.service';
import { NbpStyle } from './../../nbp/nbp-commons/nbp-commons.enums';
import { CjBodyComponent } from './../cj-body/cj-body.component';
import { stickyElementToggleTrigger } from './cj-wizard.animations';
/** intero autogenerato usato per id unici per cjWizard component */
var nextId = 0;
var CjWizardComponent = (function () {
    function CjWizardComponent(helper, cjBody) {
        this.helper = helper;
        this.cjBody = cjBody;
        /**
         * Identificativo univoco per il cjWizard.
         * Se nessun id e' fornito e' auto-generato.
         */
        this.id = "cj-wizard-" + ++nextId;
        // --------------------------------------------- //
        // ------     ICjWizardLifecycleEvent     ------ //
        // --------------------------------------------- //
        /**
         * Evento che notifica quando si inizia un nuovo wizard da zero
         */
        this.cjOnWizardStart = new EventEmitter();
        /**
         * Evento che notifica quando si ripristina un wizard con stato
         */
        this.cjOnWizardRestore = new EventEmitter();
        /**
        * Evento che notifica l’abbandono del wizard
        */
        this.cjOnWizardCancel = new EventEmitter();
        /**
        * Evento che notifica il completamento dell’intero wizard
        * Es pressione del tasto continua (tasto finale del wiard)
        */
        this.cjOnWizardComplete = new EventEmitter();
        // ----------------------------------------------//
        // ------    ICjWizardNavigationEvent     ------ //
        // --------------------------------------------- //
        /**
         * Evento che notifica l’aggiornamento della struttura dati che il wizard sta componendo
         */
        this.cjOnDataChange = new EventEmitter();
        /**
         * Evento che notifica l’aggiornamento dello step corrente
         */
        this.cjOnWizardPageChange = new EventEmitter(); // TODO refine type
        /**
        * Evento che notifica l’aggiornamento del modello di avanzamento del wizard
        */
        this.cjOnWizardStateChange = new EventEmitter();
        /**
         * Evento che notifica il toggle della visualizzazione della sidebar del wizard
         * parametro eventEmitter:
         *   TRUE -> wizardSideBar visualizzata,
         *   FALSE -> wizardSideBar non visualizzata
         *
         */
        this.cjOnToggleSideBarView = new EventEmitter();
        this._currentStateIndexes = { stepIndex: -1, pageIndex: -1 };
        this._showSideBar = false;
        this._isWizardInsideBody = false;
        this._buttonsStyles = NbpStyle;
        this._showLoading = false;
        this.wizardReady = false;
        this._hideBorder = false;
        this.cjConfiguration = {
            id: this.id,
            name: this.name,
            steps: new Array()
        };
    }
    Object.defineProperty(CjWizardComponent.prototype, "cjShowPaging", {
        /**
         * (Opzionale) Proprieta' che consente di non visualizzare la seziona relativa ai sotto-step/pagine degli step.
         * Valore di default false.
        */
        get: function () { return this._cjShowPaging; },
        set: function (value) { this._cjShowPaging = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(CjWizardComponent.prototype, "_cjShowSideBar", {
        get: function () { return this._showSideBar; },
        set: function (value) { this._showSideBar = coerceBooleanProperty(value); this.cjOnToggleSideBarView.emit(this._showSideBar); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    /**
     * funzione privata che calcola la percentuale di riempimento dello step nel componente
     * nbpProgress
     * @param number currentStepIndex indice dello step corrente
     * @param ICjWizardStep    currentStep      struttura dati dello step corrente
     */
    CjWizardComponent.prototype._getFillPercentByIndex = function (currentStepIndex, currentStep) {
        var fillPercent;
        if (currentStepIndex < this._currentStateIndexes.stepIndex) {
            fillPercent = 100;
        }
        else if (currentStepIndex > this._currentStateIndexes.stepIndex) {
            fillPercent = 0;
        }
        else {
            var increment = 100 / currentStep.pages.length;
            fillPercent = (this.helper.getCurrentStateIndexById(currentStep.pages, this._pages[this._currentStateIndexes.pageIndex].id) + 1) * increment;
        }
        return fillPercent;
    };
    /**
     * Popola la struttura dati necessaria al componente nbpPaging
     * nbpPaging è visualizzato come secondo elemento del cjWizard sotto al componente
     * nbpProgress
     */
    CjWizardComponent.prototype._fillPagingStructure = function () {
        this._pagingStructure = {
            currentParentLabel: this.cjConfiguration.steps[this._currentStateIndexes.stepIndex].label,
            pages: []
        };
        for (var pageIndex = 0; pageIndex < this._pages.length; pageIndex++) {
            var status_1 = (pageIndex === this._currentStateIndexes.pageIndex
                ? 'active'
                : (pageIndex < this._currentStateIndexes.pageIndex ? 'done' : 'todo'));
            var pagingElem = {
                label: this._pages[pageIndex].label,
                status: status_1
            };
            this._pagingStructure.pages.push(pagingElem);
        }
    };
    /**
     * Aggiorna la struttura dati che contiene lo stato corrente del wizard
     * - step corrente
     * - pagina corrente
     */
    CjWizardComponent.prototype._updateCurrentState = function () {
        this.cjCurrentState.currentStepId = this.cjConfiguration.steps[this._currentStateIndexes.stepIndex].id;
        this.cjCurrentState.currentPageId = this._pages[this._currentStateIndexes.pageIndex].id;
        this._emitCjOnWizardStateChange(this.cjCurrentState);
        this._updateCurrentPageConfig();
    };
    /**
     * Aggiorna la struttura dati che contiene lo stato precedente del wizard
     * - step corrente
     * - pagina corrente
     */
    CjWizardComponent.prototype._updatePreviousState = function () {
        this.cjCurrentState.previousStepId = this.cjConfiguration.steps[this._currentStateIndexes.stepIndex].id;
        this.cjCurrentState.previousPageId = this._pages[this._currentStateIndexes.pageIndex].id;
        console.groupCollapsed("_updatePreviousState Debug Info");
        console.log("state index - step: " + this._currentStateIndexes.stepIndex);
        console.log("stepId: " + this.cjCurrentState.previousStepId);
        console.log("state index - page: " + this._currentStateIndexes.pageIndex);
        console.log("pageId: " + this.cjCurrentState.previousPageId);
        console.groupEnd();
    };
    CjWizardComponent.prototype._updateCurrentPageConfig = function () {
        this._currentPageConfig = this._pages[this._currentStateIndexes.pageIndex].configuration;
        // console.log(JSON.stringify(this._currentPageConfig));
    };
    /**
     * metodo privato utilizzato per:
     * - aggiornare lo stato del wizard (state & data)
     * - emettere gli eventi di lifecycle
     * @param {ICjWizardContext<T>} context
     */
    CjWizardComponent.prototype._resotreWizardStateAndData = function (context) {
        console.log('Wizard ' + context.id + ' restore state and data');
        console.dir(context);
        this.cjCurrentState = context.state;
        this._emitCjOnWizardStateChange(this.cjCurrentState);
        this._emitCjOnWizardRestore(context.data);
    };
    /**
     * Aggiorna il contesto utilizzando la funzione messa a disposizione da
     * ICjWizardContextSource
     */
    CjWizardComponent.prototype._updateWizardContext = function () {
        var _this = this;
        if (this.cjWizardContextSource && this._currentPageConfig.cjContextUpdate) {
            var updatedContext = {
                id: this.cjConfiguration.id,
                state: this.cjCurrentState,
                data: this.cjWizardDataContainer.getWizardData()
            };
            this.cjWizardContextSource.updateWizardContext(updatedContext).subscribe(function (context) {
                _this._handleLoadingSpinner(false);
            }, function (error) {
                console.log('Update wizard context error!!');
                _this._handleLoadingSpinner(false);
            });
        }
    };
    /**
     * Eseguita alla pressione del pulsante AVANTI del wizard
     * @param {Event} event AVANTI button click
     */
    CjWizardComponent.prototype._onAction = function (event) {
        if (this._currentPageConfig.cjActionButtonType === 'next') {
            this._updateProgressStructureOnDirection('next');
        }
        else if (this._currentPageConfig.cjActionButtonType === 'submit') {
            this._handleLoadingSpinner(true);
            this.cjOnWizardComplete.emit();
        }
    };
    /**
     * Disabilita il pulsante AVANTI quando non ci sono più pagine da visualizzare
     * successive a quella corrente
     */
    CjWizardComponent.prototype._isActionDisabled = function () {
        return this._currentStateIndexes.pageIndex === this._pages.length - 1
            || (this._currentPageConfig && this._currentPageConfig.cjDisableActionButton);
    };
    /**
     * Eseguita alla pressione del pulsante INDIETRO del wizard
     * Aggiorna la struttura degli indici del currentState, il currentState, la struttura dati per la
     * progress bar la struttura dati per il paging
     * @param {Event} event INDIETRO/PREV button click
     */
    CjWizardComponent.prototype._onPrev = function (event) {
        this._updateProgressStructureOnDirection('prev');
    };
    /**
     * Disabilita il pulsante INDIETRO quando non ci sono pagine da visualizzare
     * precedenti a quella corrente
     */
    CjWizardComponent.prototype._isPrevDisabled = function () {
        return this._currentStateIndexes.pageIndex === 0
            || (this._currentPageConfig && this._currentPageConfig.cjDisablePrevButton);
    };
    /**
     * Popola la struttura dati necessaria al componente nbpProgress
     * nbpProgress è visualizzato come primo elemento del cjWizard
     */
    CjWizardComponent.prototype._fillProgressStructure = function () {
        if (!this._progressStructure) {
            this._createProgressStructure();
        }
        for (var progressIndex = 0; progressIndex < this._progressStructure.length; progressIndex++) {
            this._progressStructure[progressIndex].active = (this._currentStateIndexes.stepIndex === progressIndex);
            this._progressStructure[progressIndex].fillPercent =
                this._getFillPercentByIndex(progressIndex, this.cjConfiguration.steps[progressIndex]);
        }
    };
    /**
     * Popola la struttura dati necessaria al componente nbpProgress
     * nbpProgress è visualizzato come primo elemento del cjWizard
     */
    CjWizardComponent.prototype._createProgressStructure = function () {
        var _this = this;
        this._progressStructure = this.cjConfiguration.steps.map(function (step, index) {
            var isActive = _this._currentStateIndexes.stepIndex === index;
            var fillPercent = _this._getFillPercentByIndex(index, step);
            return { label: step.label, fillPercent: fillPercent, active: isActive };
        });
    };
    /**
     * Aggiorna la struttura dati necessaria al componente nbpProgress quando
     * si naviga il wizard usando il metodo navigateToPage
     * @param {string} stepId id dello step
     * @param {string} pageId id della page
     */
    CjWizardComponent.prototype._updateProgressStructure = function (stepId, pageId) {
        this._handleLoadingSpinner(true);
        // check se stepId e pageId sono validi
        var step = this.helper.getCurrentStateById(this.cjConfiguration.steps, stepId);
        var page = this.helper.getCurrentStateById(this._pages, pageId);
        if (this.helper.stepContainsPage(step, page)) {
            console.groupCollapsed('Wizard navigate to page');
            if (this._currentStateIndexes.pageIndex !== this._pages.length) {
                this._updatePreviousState();
                this._emitEventsForPageLeave();
                this._currentStateIndexes.stepIndex = this.helper.getCurrentStateIndexById(this.cjConfiguration.steps, stepId);
                this._currentStateIndexes.pageIndex = this.helper.getCurrentStateIndexById(this._pages, pageId);
                this._updateWizardStructures();
                this._handleLoadingSpinner(false);
            }
            console.groupEnd();
        }
        else {
            this._handleLoadingSpinner(false);
            console.log('Lo step con id ' + stepId + ' non contiene una page con id ' + pageId);
        }
    };
    CjWizardComponent.prototype._goToDirection = function (direction) {
        console.groupCollapsed('Wizard navigate to ' + direction + ' page');
        this._updatePreviousState();
        this._emitEventsForPageLeave();
        this._currentStateIndexes.pageIndex = (direction === 'next')
            ? ++this._currentStateIndexes.pageIndex
            : --this._currentStateIndexes.pageIndex;
        if (!this.helper.stepContainsPage(this.cjConfiguration.steps[this._currentStateIndexes.stepIndex], this._pages[this._currentStateIndexes.pageIndex])) {
            this._currentStateIndexes.stepIndex = (direction === 'next')
                ? ++this._currentStateIndexes.stepIndex
                : --this._currentStateIndexes.stepIndex;
        }
        this._updateWizardStructures();
        this._handleLoadingSpinner(false);
        console.groupEnd();
    };
    /**
     * Aggiorna la struttura dati necessaria al componente nbpProgress quando
     * si naviga il wizard usando i pulsanti ACTION (next o submit) e INDIETRO (prev)
     * @param {'next' | 'prev'} direction indica quale pulsante è stato premuto
     */
    CjWizardComponent.prototype._updateProgressStructureOnDirection = function (direction) {
        this._handleLoadingSpinner(true);
        switch (direction) {
            case 'next':
                if (this._currentStateIndexes.pageIndex !== this._pages.length) {
                    this._goToDirection(direction);
                }
                break;
            case 'prev':
                if (this._currentStateIndexes.pageIndex !== 0) {
                    this._goToDirection(direction);
                }
                break;
            default:
                this._handleLoadingSpinner(false);
                break;
        }
    };
    /**
     * metodo pubblico con cui gli step si registrano sul wizard
     * @param ICjWizardStep step step dello wizard
     */
    CjWizardComponent.prototype.addStep = function (step) {
        this.cjConfiguration.steps.push(step);
    };
    CjWizardComponent.prototype.ngOnDestroy = function () {
        if (this.cjBody) {
            this.cjBody.setNavigationHeaderSlim(false);
        }
        if (this._wizardContextStreamSubscribe) {
            this._wizardContextStreamSubscribe.unsubscribe();
        }
    };
    CjWizardComponent.prototype.ngAfterContentInit = function () {
        if (this.cjBody) {
            this.cjBody.setNavigationHeaderSlim(true);
            this._isWizardInsideBody = true;
        }
        if (!this.cjHeaderIcon) {
            this.cjHeaderIcon = {
                icon: 'icomoon-Acquisto_carrello4',
                hide: true
            };
        }
        else if (this.cjHeaderIcon.hide === null || this.cjHeaderIcon.hide === undefined) {
            this.cjHeaderIcon.hide = true;
        }
        this._handleLoadingSpinner(true);
        this.cjConfiguration.id = this.id;
        // creates a flatten array containing all pages of all steps
        this._pages = this.cjConfiguration.steps.reduce(function (prev, curr) { return (prev).concat(curr.pages); }, []);
        if (this.cjWizardContextSource) {
            this._initWizardWithContextSource();
        }
        else {
            this._initWizardWithoutContextSource();
        }
    };
    CjWizardComponent.prototype._handleLoadingSpinner = function (show) {
        if (show !== this._showLoading) {
            this._showLoading = show;
            console.log('Show loading? ' + this._showLoading + ' timestamp: ' + new Date().getTime());
        }
    };
    CjWizardComponent.prototype._initWizardWithContextSource = function () {
        var _this = this;
        // Recupero contesto dal wizardContextSource
        this._wizardContextStream = this.cjWizardContextSource.getWizardContext();
        this._wizardContextStream.subscribe(function (context) {
            console.groupCollapsed('Ricevo context del Wizard ');
            console.dir(context);
            if (context && context.data) {
                _this._resotreWizardStateAndData(context);
            }
            else {
                console.groupCollapsed('Ricevo context null del Wizard ');
                _this._setDefaultState();
            }
            _this.initializeWizardViewModel();
            _this._handleLoadingSpinner(false);
            console.groupEnd();
        }, function (error) {
            // TODO gestire anche eventuali errori
            console.log(JSON.stringify(error));
            _this._handleLoadingSpinner(false);
        });
    };
    CjWizardComponent.prototype._initWizardWithoutContextSource = function () {
        console.groupCollapsed('Wizard without contextSource ');
        if (!this.cjCurrentState) {
            console.log('Wizard without cjCurrentState.');
            this._setDefaultState();
        }
        else {
            console.log('Wizard with cjCurrentState.');
            console.dir(this.cjCurrentState);
            this._emitCjOnWizardRestore(this.cjWizardDataContainer.getWizardData());
            // this._emitCjOnPageEnter();
        }
        this.initializeWizardViewModel();
        this._handleLoadingSpinner(false);
        console.groupEnd();
    };
    CjWizardComponent.prototype._setDefaultState = function () {
        console.log('Wizard si posiziona sul primo step e la prima pagina.');
        this.cjCurrentState = {
            id: this.cjConfiguration.id,
            currentStepId: this.cjConfiguration.steps[0].id,
            currentPageId: this._pages[0].id,
            previousStepId: null,
            previousPageId: null
        };
        this._currentStateIndexes = {
            stepIndex: 0,
            pageIndex: 0
        };
        this._emitCjOnWizardStart(this.cjWizardDataContainer.getWizardData());
        this._emitCjOnWizardStateChange(this.cjCurrentState);
    };
    CjWizardComponent.prototype._emitCjOnWizardStart = function (cjData) {
        this.cjOnWizardStart.emit(cjData);
        console.log('Emit event: cjOnWizardStart');
        console.dir(cjData);
    };
    CjWizardComponent.prototype._emitCjOnWizardRestore = function (cjData) {
        this.cjWizardDataContainer.setWizardData(cjData);
        this.cjOnWizardRestore.emit(cjData);
        console.log('Emit event: cjOnWizardRestore');
        console.dir(cjData);
    };
    CjWizardComponent.prototype._emitCjOnWizardStateChange = function (state) {
        this.cjOnWizardStateChange.emit(state);
        console.log('Emit event: cjOnWizardStateChange');
        console.dir(state);
    };
    CjWizardComponent.prototype._emitCjOnWizardPageChange = function () {
        var page = this._pages[this._currentStateIndexes.pageIndex];
        this.cjOnWizardPageChange.emit(page);
        console.log('Emit event: _emitCjOnWizardPageChange');
        console.dir(page);
    };
    CjWizardComponent.prototype._emitCjOnPageEnter = function () {
        this._emitPageEvent('ENTER');
    };
    CjWizardComponent.prototype._emitEventsForPageLeave = function () {
        this._emitPageEvent('LEAVE');
    };
    CjWizardComponent.prototype._emitPageEvent = function (type) {
        var _this = this;
        if (!type || (type !== 'ENTER' && type !== 'LEAVE')) {
            return;
        }
        var event = type === 'ENTER' ? 'cjOnPageEnter' : 'cjOnPageLeave';
        var currentPageIndex = this._currentStateIndexes.pageIndex;
        if (type === 'ENTER') {
            setTimeout(function () {
                console.log('Emit event: ' + event);
                console.dir(_this._pages[currentPageIndex]);
                _this._pages[currentPageIndex].events.cjOnPageEnter.emit(_this._pages[currentPageIndex]);
            });
        }
        else {
            this._emitCjOnWizardPageChange();
            setTimeout(function () {
                console.log('Emit event: ' + event);
                console.dir(_this._pages[currentPageIndex]);
                _this._pages[currentPageIndex].events.cjOnPageLeave.emit(_this._pages[currentPageIndex]);
            });
        }
    };
    CjWizardComponent.prototype.obtainStateIndexesFromConfiguration = function () {
        this._currentStateIndexes.stepIndex = this.helper.getCurrentStateIndexById(this.cjConfiguration.steps, this.cjCurrentState.currentStepId);
        this._currentStateIndexes.pageIndex = this.helper.getCurrentStateIndexById(this._pages, this.cjCurrentState.currentPageId);
    };
    /**
     * Aggiorna le strutture dati utilizzate nella View per il layout del componente wizard
     */
    CjWizardComponent.prototype.initializeWizardViewModel = function () {
        this.wizardReady = false;
        this.obtainStateIndexesFromConfiguration();
        if (this.helper.currentStatusValid(this._currentStateIndexes) && this.helper.configurationValid(this.cjConfiguration)) {
            this._fillProgressStructure();
            this._fillPagingStructure();
            this._updateCurrentPageConfig();
            this._emitCjOnPageEnter();
        }
        else {
            console.warn('Error configuration Valid: currentStatus invalido o (stepId, pageId) non univoche per wizard');
        }
        this.wizardReady = true;
    };
    CjWizardComponent.prototype._updateWizardStructures = function () {
        this.wizardReady = false;
        this._updateCurrentState();
        this._updateWizardContext();
        this._fillProgressStructure();
        this._fillPagingStructure();
        this._emitCjOnPageEnter();
        this.wizardReady = true;
    };
    CjWizardComponent.prototype._toggleSideBar = function () {
        this._cjShowSideBar = !this._cjShowSideBar;
    };
    /**
     * Funzione pubblica invocabile dall'esterno per andare sulla pagina successiva
     * Aggiorna la struttura degli indici del currentState, il currentState, la struttura dati per la
     * progress bar la struttura dati per il paging
     */
    CjWizardComponent.prototype.navigateToNext = function () {
        this._updateProgressStructureOnDirection('next');
    };
    /**
     * Funzione pubblica invocabile dall'esterno per andare sulla pagina precedente
     * Aggiorna la struttura degli indici del currentState, il currentState, la struttura dati per la
     * progress bar la struttura dati per il paging
     *
     */
    CjWizardComponent.prototype.navigateToPrev = function () {
        this._updateProgressStructureOnDirection('prev');
    };
    CjWizardComponent.prototype.navigateToPage = function (stepId, pageId) {
        this._updateProgressStructure(stepId, pageId);
    };
    CjWizardComponent.prototype.showHeaderIcon = function () {
        this.cjHeaderIcon.hide = false;
    };
    CjWizardComponent.prototype.hideHeaderIcon = function () {
        this.cjHeaderIcon.hide = true;
    };
    CjWizardComponent.prototype.showWizardSideBar = function () {
        this._showSideBar = true;
    };
    CjWizardComponent.prototype.hideWizardSideBar = function () {
        this._showSideBar = false;
    };
    CjWizardComponent.prototype.toggleWizardSideBar = function () {
        this._showSideBar = !this._showSideBar;
    };
    CjWizardComponent.prototype.metodoForDebug = function (data) {
        console.log('metodo for debug wizard...');
        console.dir(data);
    };
    return CjWizardComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], CjWizardComponent.prototype, "id", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CjWizardComponent.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CjWizardComponent.prototype, "cjCurrentState", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CjWizardComponent.prototype, "cjWizardDataContainer", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CjWizardComponent.prototype, "cjHeaderIcon", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], CjWizardComponent.prototype, "cjShowPaging", null);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CjWizardComponent.prototype, "cjWizardContextSource", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjWizardComponent.prototype, "cjOnWizardStart", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjWizardComponent.prototype, "cjOnWizardRestore", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjWizardComponent.prototype, "cjOnWizardCancel", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjWizardComponent.prototype, "cjOnWizardComplete", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjWizardComponent.prototype, "cjOnDataChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjWizardComponent.prototype, "cjOnWizardPageChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjWizardComponent.prototype, "cjOnWizardStateChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjWizardComponent.prototype, "cjOnToggleSideBarView", void 0);
CjWizardComponent = __decorate([
    Component({
        selector: 'cj-wizard',template: "<div class=\"row\"><nbp-loading [nbpShowAnimation]=\"_showLoading\"></nbp-loading><section [hidden]=\"_showLoading\"><nbp-progress [nbpConfiguration]=\"_progressStructure\"><ng-content select=\"nbp-progress-sticky-content\"></ng-content></nbp-progress><a [hidden]=\"cjHeaderIcon.hide\" class=\"sidebar-button__structure sidebar-button__layout\" [ngClass]=\"{'transfrom-slim': !_isWizardInsideBody}\"><i [class]=\"cjHeaderIcon.icon\" (click)=\"_toggleSideBar()\"></i></a><div class=\"row paging-container\" *ngIf=\"cjShowPaging\"><nbp-paging [nbpConfiguration]=\"_pagingStructure\"></nbp-paging></div><div id=\"wizard-content\" class=\"row\"><div id=\"component-container\" [ngClass]=\"{ 'col-md-20': _cjShowSideBar , 'col-md-24': !_cjShowSideBar }\"><ng-content select=\"cj-wizard-step\"></ng-content></div><div class=\"sidebar__layout\" [style.visibility]=\"!_cjShowSideBar ? 'hidden' : 'visible'\" [@stickyElementToggleTrigger]=\"!_cjShowSideBar ? 'disappear' : 'appear'\"><ng-content select=\"cj-shopping-cart\"></ng-content></div></div><div class=\"row\"><div class=\"col-md-offset-1 col-md-4\"><nbp-button *ngIf=\"_currentPageConfig?.cjShowPrevButton\" [nbpLabel]=\"'Indietro'\" (nbpClick)=\"_onPrev($event)\" [disabled]=\"_isPrevDisabled()\"></nbp-button></div><div class=\"col-md-offset-14 col-md-4\"><nbp-button *ngIf=\"_currentPageConfig?.cjShowActionButton\" class=\"pull-right\" [nbpLabel]=\"_currentPageConfig?.cjActionButtonLabel\" [nbpStyle]=\"_buttonsStyles.PRIMARY\" (nbpClick)=\"_onAction($event)\" [disabled]=\"_isActionDisabled()\"></nbp-button></div></div></section></div>",
        styles: [".paging-container{border-bottom:2px solid #f2f2f2;margin-left:-25px;margin-right:-25px}.sidebar-button__structure{font-size:50px;color:#337a79;text-decoration:none!important;cursor:pointer}.sidebar-button__layout{position:fixed;top:60px;z-index:99999;right:100px}.transfrom-slim{top:50px!important;font-size:35px!important}.sidebar__layout{position:fixed;right:100px}#wizard-content{padding-top:3.125em}#wizard-content #component-container{min-height:55vh}::ng-deep .shopping-cart--content{max-height:50vh!important;overflow:hidden!important}::ng-deep cj-shopping-cart cj-shopping-cart-element:not([cjItemStyle]) nbp-tooltip .nbp-popover .popover-content.left{position:fixed!important;top:inherit!important;right:450px!important;margin-top:-40px!important;margin-right:0!important;transform:inherit!important}::ng-deep cj-shopping-cart cj-shopping-cart-element[cjItemStyle] nbp-tooltip .nbp-popover .popover-content.left{position:fixed!important;top:inherit!important;right:450px!important;margin-top:-40px!important;margin-right:-7px!important;transform:inherit!important} /*# sourceMappingURL=cj-wizard.component.css.map */ "],
        animations: [stickyElementToggleTrigger]
    }),
    __param(1, Optional()),
    __metadata("design:paramtypes", [CjWizardHelper,
        CjBodyComponent])
], CjWizardComponent);
export { CjWizardComponent };
