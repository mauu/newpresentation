var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { coerceBooleanProperty } from './../../utility/lib-utility';
var nextId = 0;
/**
 * @export
 * @class NbpDividingLineComponent
 * @implements {OnInit}
 * Visualizza una linea di separazione, con un pulsante opzionale e un titolo opzionale
 */
var NbpDividingLineComponent = (function () {
    function NbpDividingLineComponent() {
        this._showButton = false;
        /**
         * Identificativo univoco per il cjWizardPage.
         * Se nessun id è fornito e' auto-generato.
         */
        this.id = "nbp-dividing-line-" + ++nextId;
        /**
         * (Opzionale) Evento emesso al click sul pulsante.
         * @param {EventEmitter<any>} nbpClick
         */
        this.nbpClick = new EventEmitter();
    }
    Object.defineProperty(NbpDividingLineComponent.prototype, "showButton", {
        /**
         * (Opzionale) Booleano che mostra/nasconde il pulsante. Default: false
         */
        get: function () { return this._showButton; },
        set: function (value) { this._showButton = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    NbpDividingLineComponent.prototype._onClick = function () {
        if (this.nbpClick) {
            this.nbpClick.emit();
        }
    };
    NbpDividingLineComponent.prototype.ngOnInit = function () {
    };
    return NbpDividingLineComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], NbpDividingLineComponent.prototype, "id", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpDividingLineComponent.prototype, "nbpTitle", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpDividingLineComponent.prototype, "nbpTitleIcon", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpDividingLineComponent.prototype, "showButton", null);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpDividingLineComponent.prototype, "npbButtonLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpDividingLineComponent.prototype, "nbpButtonIcon", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpDividingLineComponent.prototype, "nbpClick", void 0);
NbpDividingLineComponent = __decorate([
    Component({
        selector: 'nbp-dividing-line',template: "<div class=\"dividing-line-container\"><div class=\"dividing-line\"></div><nbp-button class=\"dividing-line-button\" *ngIf=\"showButton\" [nbpLabel]=\"npbButtonLabel\" [nbpIcon]=\"nbpButtonIcon\" (nbpClick)=\"_onClick()\"></nbp-button><div *ngIf=\"nbpTitleIcon || nbpTitle\" class=\"icon-title-separator\"><span *ngIf=\"nbpTitleIcon\" class=\"icon dividing-line-title button-icon\" [ngClass]=\"nbpTitleIcon\"></span><h4 class=\"dividing-line-title\" *ngIf=\"nbpTitle\">{{nbpTitle}}</h4></div></div>",
        styles: [".dividing-line-container{margin:10px 0;height:44px;display:flex;align-items:center;position:relative;background-color:#f2f2f2}.dividing-line-container .dividing-line{height:1px;margin:15px 0;background-color:#ccc;flex:0 1 100%}.dividing-line-container .dividing-line-button ::ng-deep button{color:#258900;background-color:#f2f2f2;border-color:#f2f2f2!important}.dividing-line-container .dividing-line-button ::ng-deep button:hover{color:#258900;background-color:#f2f2f2!important;border-color:#f2f2f2!important}.dividing-line-container .dividing-line-title{display:inline-block}.dividing-line-container .icon-title-separator{position:absolute;left:0;top:0;right:0;bottom:0;background-color:#f2f2f2;color:#323232;text-align:center;width:fit-content;padding:0 20px;font-size:18px;margin-left:auto;margin-right:auto}.dividing-line-container span+h4:before{content:\"\";padding-left:10px}.dividing-line-container span.dividing-line-title{line-height:44px} /*# sourceMappingURL=nbp-dividing-line.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [])
], NbpDividingLineComponent);
export { NbpDividingLineComponent };
