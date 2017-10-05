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
import { ActivatedRoute } from '@angular/router';
import { CjContextService } from './../cj-context/cj-context.service';
import { coerceBooleanProperty } from './../../utility/lib-utility';
import { NbpChannel } from './../../nbp/nbp-commons/nbp-commons.enums';
var CjBodyComponent = (function () {
    function CjBodyComponent(contextService, route) {
        this.contextService = contextService;
        this.route = route;
        /**
         * Evento lanciato sul click del pulsante "Pagina Precedente"
         */
        this.cjOnPrevPageButtonClicked = new EventEmitter();
        /**
         * Evento emesso quando il contesto applicativo è disponibile.
         * @param {EventEmitter<ICjContext>}  cjOnContextReady
         */
        this.cjOnContextReady = new EventEmitter();
        this._nbpChannel = NbpChannel;
    }
    Object.defineProperty(CjBodyComponent.prototype, "cjShowPrevPageButton", {
        /**
         * Booleano per abilitare il pulsante “Pagina precedente”
         */
        get: function () {
            return this._cjShowPrevPageButton;
        },
        set: function (value) {
            this._cjShowPrevPageButton = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CjBodyComponent.prototype, "disabled", {
        /**
         * Booleano che abilita/disabilita il contenuto ng-content del componente.
         * Header e footer sono sempre abilitati.
         * Attributo "disabled" standard di HTML element
         */
        get: function () { return this._cjDisabled; },
        set: function (value) { this._cjDisabled = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    CjBodyComponent.prototype.ngOnInit = function () {
        this._getCjContextFromToken();
        this.cjChannel = this.cjChannel ? this.cjChannel : NbpChannel.ABC;
    };
    CjBodyComponent.prototype.setNavigationHeaderSlim = function (isNavigationHeaderSlim) {
        this._isNavigationHeaderSlim = isNavigationHeaderSlim;
    };
    CjBodyComponent.prototype._getCjContextFromToken = function () {
        var _this = this;
        if (!this.cjToken) {
            if (this.cjTokenNameParam) {
                this.sub = this.route.params.subscribe(function (params) {
                    _this.cjToken = params[_this.cjTokenNameParam];
                    _this._obtainContext();
                });
            }
            else {
                console.log('WARNING - Componente CjBody - senza cjToken e senza cjTokenNameParam.');
            }
        }
        else {
            this._obtainContext();
        }
    };
    CjBodyComponent.prototype._obtainContext = function () {
        var _this = this;
        this.contextService.getCjContextByToken(this.cjToken).subscribe(function (context) {
            _this._contextInfo = context;
            _this.contextService.setCurrentCjContext(_this._contextInfo);
            /**
             * se cjApplicationName non presente è popolato con i dato preso dal cjContext
             */
            if (!_this.cjApplicationName) {
                _this.cjApplicationName = _this._contextInfo.application;
            }
            _this.cjOnContextReady.emit(_this._contextInfo);
        });
    };
    CjBodyComponent.prototype._onPrevPageButtonClicked = function () {
        this.cjOnPrevPageButtonClicked.emit('cjOnPrevPageButtonClickedEvent');
    };
    return CjBodyComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], CjBodyComponent.prototype, "cjToken", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CjBodyComponent.prototype, "cjTokenNameParam", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CjBodyComponent.prototype, "cjApplicationName", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CjBodyComponent.prototype, "cjSectionTitle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CjBodyComponent.prototype, "cjChannel", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Boolean])
], CjBodyComponent.prototype, "cjShowPrevPageButton", null);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjBodyComponent.prototype, "cjOnPrevPageButtonClicked", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], CjBodyComponent.prototype, "disabled", null);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjBodyComponent.prototype, "cjOnContextReady", void 0);
CjBodyComponent = __decorate([
    Component({
        selector: 'cj-body',template: "<nbp-header [nbpName]=\"cjApplicationName\" [nbpChannel]=\"cjChannel\" nbpLogo=\"./cjlib/assets/images/sprite.png\"><nbp-customer-name [nbpCustomer]=\"_contextInfo?.cliente.intestazione\"></nbp-customer-name></nbp-header><div id=\"body-container\" class=\"container-fluid\" [ngClass]=\"{'other-header' : cjChannel !== _nbpChannel.ABC, 'abc-header' : cjChannel === _nbpChannel.ABC}\"><div class=\"row navigation-header-container\"><nbp-navigation-header [ngClass]=\"{'nav-header-slim':_isNavigationHeaderSlim}\" [nbpTitle]=\"cjApplicationName\" [nbpSectionTitle]=\"cjSectionTitle\" [nbpShowPrevPage]=\"cjShowPrevPageButton\" (nbpPrevPage)=\"_onPrevPageButtonClicked()\"></nbp-navigation-header></div><div id=\"body-content\" [ngClass]=\"{'nav-header-slim':_isNavigationHeaderSlim}\"><ng-content></ng-content></div></div><nbp-footer></nbp-footer>",
        styles: [".navigation-header-container{margin-right:-40px;margin-left:-40px}.sticky-default{position:fixed!important;left:0!important;z-index:9999!important}#body-container.other-header ::ng-deep nbp-navigation-header .header-overlay.sticky{top:4.375em!important}#body-container.abc-header ::ng-deep nbp-navigation-header .header-overlay.sticky{top:3.125em!important}#body-container.other-header ::ng-deep cj-wizard nbp-progress .row.nbp-progress-container{position:fixed!important;left:0!important;z-index:9999!important;top:6.6875em!important;width:100%;margin:0!important}#body-container.abc-header ::ng-deep cj-wizard nbp-progress .row.nbp-progress-container{position:fixed!important;left:0!important;z-index:9999!important;top:5.4375em!important;width:100%;margin:0!important}#body-container.other-header #body-content.nav-header-slim ::ng-deep cj-wizard #wizard-content{padding-top:10.75em!important}#body-container.abc-header #body-content.nav-header-slim ::ng-deep cj-wizard #wizard-content{padding-top:9.5em!important}#body-container nbp-navigation-header.nav-header-slim ::ng-deep #navigation-header-title{border-bottom:none!important;height:2em!important;padding-top:.3125em!important}#body-container #body-content.nav-header-slim ::ng-deep cj-wizard #progress-container{border-top:none!important}#body-container #body-content.nav-header-slim ::ng-deep cj-wizard nbp-progress #step-container{height:3.125em!important}#body-container.other-header #body-content:not(.nav-header-slim){padding-top:9.0625em!important}#body-container.abc-header #body-content:not(.nav-header-slim){padding-top:7.8125em!important} /*# sourceMappingURL=cj-body.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [CjContextService, ActivatedRoute])
], CjBodyComponent);
export { CjBodyComponent };
