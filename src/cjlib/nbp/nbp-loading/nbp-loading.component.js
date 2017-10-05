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
import { NbpLoadingService } from './nbp-loading.service';
import { coerceBooleanProperty } from './../../utility/lib-utility';
/** intero autogenerato usato per id unici per nbpInput component */
var nextId = 0;
var NbpLoadingComponent = (function () {
    function NbpLoadingComponent(loadingService) {
        this.loadingService = loadingService;
        /**
         * Identificativo univoco per il text field.
         * Se nessun id è fornito e' auto-generato.
         */
        this.id = "nbp-input-" + ++nextId;
        this._animationModeAuto = false;
        /**
         * Evento lanciato allo stop del loading.
         */
        this.nbpOnStopAnimation = new EventEmitter();
        /**
         * Evento lanciato allo start del laoding.
         */
        this.nbpOnStartAnimation = new EventEmitter();
    }
    Object.defineProperty(NbpLoadingComponent.prototype, "nbpShowAnimation", {
        /**
         * Flag che definisce la visibilità dell’animazione di caricamento
         */
        get: function () { return this._showAnimation; },
        set: function (value) { this._showAnimation = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbpLoadingComponent.prototype, "nbpAnimationModeAuto", {
        /**
         * Flag che definisce la modalità automatica di visualizzazione dell'animazione
         * quando presente il componente ignora il parametro nbpShowAnimation e l'invocazione
         * dei metodi pubblici, ma si restistra al servizio NbpLoadingService
         */
        get: function () { return this._animationModeAuto; },
        set: function (value) {
            this._animationModeAuto = coerceBooleanProperty(value);
            if (this._showAnimation) {
                console.log("NbpLoadingComponent - Emitting event: nbpOnStartAnimation");
                this.nbpOnStartAnimation.emit();
            }
            else {
                console.log("NbpLoadingComponent - Emitting event: nbpOnStopAnimation");
                this.nbpOnStopAnimation.emit();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 	metodo per far visualizzare il loading
     */
    NbpLoadingComponent.prototype.startAnimation = function () {
        this.nbpShowAnimation = true;
        this.nbpOnStartAnimation.emit();
    };
    /**
     * metodo per spegnere il loading
     */
    NbpLoadingComponent.prototype.stopAnimation = function () {
        this.nbpShowAnimation = false;
        this.nbpOnStopAnimation.emit();
    };
    NbpLoadingComponent.prototype.ngOnInit = function () {
        if (this._animationModeAuto) {
            // registra al servizio
            this._showAutoAnimation = this.loadingService.getLoadingSpinnerStatus(this.id);
        }
    };
    NbpLoadingComponent.prototype.ngOnChanges = function (changes) {
        if (!this._animationModeAuto) {
            if (changes.nbpShowAnimation) {
                if (changes.nbpShowAnimation.currentValue) {
                    this.nbpOnStartAnimation.emit();
                }
                else {
                    this.nbpOnStopAnimation.emit();
                }
            }
        }
    };
    return NbpLoadingComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpLoadingComponent.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpLoadingComponent.prototype, "id", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpLoadingComponent.prototype, "nbpShowAnimation", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpLoadingComponent.prototype, "nbpAnimationModeAuto", null);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpLoadingComponent.prototype, "nbpOnStopAnimation", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpLoadingComponent.prototype, "nbpOnStartAnimation", void 0);
NbpLoadingComponent = __decorate([
    Component({
        selector: 'nbp-loading',template: "<div *ngIf=\"(!nbpAnimationModeAuto && nbpShowAnimation) || (nbpAnimationModeAuto &&  (_showAutoAnimation | async)?.status)\" id=\"id\"><div class=\"nbp-spinner-overlay\"></div><div class=\"nbp-spinner-wrapper\"><div class=\"nbp-spinner\"></div></div></div>",
        styles: [".nbp-spinner-wrapper{position:fixed;width:100%;height:100vh;display:flex;align-items:center;background-color:transparent;top:0;left:0;z-index:99999}.nbp-spinner-overlay{position:fixed;width:100%;height:100%;display:flex;align-items:center;top:0;left:0;background-color:rgba(0,0,0,.5);z-index:99999}.nbp-spinner{display:flex;width:90px;height:90px;background-image:url(/cjlib/assets/images/ISP-loading-spinner.gif);margin:0 auto} /*# sourceMappingURL=nbp-loading.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [NbpLoadingService])
], NbpLoadingComponent);
export { NbpLoadingComponent };
