var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CjWizardStepComponent } from './../cj-wizard-step/cj-wizard-step.component';
import { trigger, style, state, animate, transition } from '@angular/animations';
import { coerceBooleanProperty } from './../../utility/lib-utility';
/** intero autogenerato usato per id unici per cjWizardPage component */
var nextId = 0;
var CjWizardPageComponent = (function () {
    function CjWizardPageComponent(wizardStep) {
        this.wizardStep = wizardStep;
        /**
         * Identificativo univoco per il cjWizardPage.
         * Se nessun id è fornito e' auto-generato.
         */
        this.id = "cj-wizard-page-" + ++nextId;
        /**
         * Abilita/disabilita l'invocazione dell'aggiornamento
         * del context all'uscita dalla pagina.
         */
        this.cjContextUpdate = true;
        /**
         * Tipoligia del pulsante Action, posizionato in basso a destra del wizard:
         * 'next':(Default) definisce un pulsante standard per spostarsi avanti nelle pagine
         * 'submit': definisce il pulsante di completamento del wizard
         */
        this.cjActionButtonType = 'next';
        /**
         * Label da visualizzare all'interno del pulsante Action
         */
        this.cjActionButtonLabel = 'Avanti';
        this._cjDisableActionButton = false;
        this._cjDisablePrevButton = false;
        this._cjShowActionButton = false;
        this._cjShowPrevButton = false;
        /**
         * Evento sollevato nel momento in cui il componente cjWizard entra nella pagina
         */
        this.cjOnPageEnter = new EventEmitter();
        /**
         * Evento sollevato nel momento il cjWizard esce dalla pagina
         */
        this.cjOnPageLeave = new EventEmitter();
    }
    Object.defineProperty(CjWizardPageComponent.prototype, "cjDisableActionButton", {
        /**
         * Permette di disabilitare il pulsante di Action
         */
        get: function () { return this._cjDisableActionButton; },
        set: function (value) { this._cjDisableActionButton = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CjWizardPageComponent.prototype, "cjDisablePrevButton", {
        /**
         * Permette di disabilitare il pulsante Prev
         */
        get: function () { return this._cjDisablePrevButton; },
        set: function (value) { this._cjDisablePrevButton = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(CjWizardPageComponent.prototype, "cjShowActionButton", {
        /**
         * Permette di nascondere il pulsante di Action
         */
        get: function () { return this._cjShowActionButton; },
        set: function (value) { this._cjShowActionButton = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(CjWizardPageComponent.prototype, "cjShowPrevButton", {
        /**
         * Permette di nascondere il pulsante Prev
         */
        get: function () { return this._cjShowPrevButton; },
        set: function (value) { this._cjShowPrevButton = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    ;
    CjWizardPageComponent.prototype._iAmActive = function () {
        var wizardCurrentState = this.wizardStep.getWizardCurrentState();
        if (!wizardCurrentState) {
            return false;
        }
        var parentStepId = this.wizardStep.getStepId();
        return parentStepId === wizardCurrentState.currentStepId && this.id === wizardCurrentState.currentPageId;
    };
    CjWizardPageComponent.prototype.ngOnInit = function () {
        this._pageInfo = {
            id: this.id,
            label: this.cjLabel,
            configuration: this,
            events: {
                cjOnPageEnter: this.cjOnPageEnter,
                cjOnPageLeave: this.cjOnPageLeave
            }
        };
        this.wizardStep.addPage(this._pageInfo);
    };
    /**
     * Consente di eseguire il toggle sulla visibilità del pulsante di tipo Action
     */
    CjWizardPageComponent.prototype.toggleActionButtonVisibility = function () {
        this.cjShowActionButton = !this.cjShowActionButton;
    };
    /**
     * Consente di impostare la visibilità del pulsante Action
     * - true --> pulsante visibile
     * - false --> pulsante nascosto
     * @param {boolean} value valore della visibilità del pulsante
     */
    CjWizardPageComponent.prototype.setActionButtonVisibility = function (value) {
        this.cjShowActionButton = value;
    };
    /**
     * Consente di eseguire il toggle sulla visibilità del pulsante di tipo PREV
     */
    CjWizardPageComponent.prototype.togglePrevButtonVisibility = function () {
        this.cjShowPrevButton = !this.cjShowPrevButton;
    };
    /**
     * Consente di impostare la visibilità del pulsante PREV
     * - true --> pulsante visibile
     * - false --> pulsante nascosto
     * @param {boolean} value valore della visibilità del pulsante
     */
    CjWizardPageComponent.prototype.setPrevButtonVisibility = function (value) {
        this.cjShowPrevButton = value;
    };
    CjWizardPageComponent.prototype._emitOnPageEnterEvent = function () {
        console.log('Emessa onPageEnter per la page' + this._pageInfo);
        this.cjOnPageEnter.emit();
    };
    return CjWizardPageComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], CjWizardPageComponent.prototype, "id", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CjWizardPageComponent.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CjWizardPageComponent.prototype, "cjLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CjWizardPageComponent.prototype, "cjContextUpdate", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CjWizardPageComponent.prototype, "cjActionButtonType", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CjWizardPageComponent.prototype, "cjActionButtonLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], CjWizardPageComponent.prototype, "cjDisableActionButton", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], CjWizardPageComponent.prototype, "cjDisablePrevButton", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], CjWizardPageComponent.prototype, "cjShowActionButton", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], CjWizardPageComponent.prototype, "cjShowPrevButton", null);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjWizardPageComponent.prototype, "cjOnPageEnter", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjWizardPageComponent.prototype, "cjOnPageLeave", void 0);
CjWizardPageComponent = __decorate([
    Component({
        selector: 'cj-wizard-page',template: "<div [@changePageTrigger]=\"_iAmActive() ? 'enter' : 'leave'\"><ng-content *ngIf=\"_iAmActive()\"></ng-content></div>",
        styles: [" /*# sourceMappingURL=cj-wizard-page.component.css.map */ "],
        animations: [
            trigger('changePageTrigger', [
                state('enter', style({ opacity: 1 })),
                state('leave', style({ opacity: .5 })),
                transition('enter => leave', animate('1s ease-in')),
                transition('leave => enter', animate('1s ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [CjWizardStepComponent])
], CjWizardPageComponent);
export { CjWizardPageComponent };
