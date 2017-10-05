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
import { NbpSize } from './../nbp-commons/nbp-commons.enums';
var nextId = 0;
/**
 * La Finestra Modale è una pagina che viene visualizzata al di sopra della pagina
 * corrente, la quale viene disabilitata.
 */
var NbpModalComponent = (function () {
    function NbpModalComponent() {
        this.id = "nbp-modal-" + ++nextId;
        this.nbpOpenedChange = new EventEmitter();
        /**
         * Proprietà che definisce la grandezza della modale, tramite l'enum NbpSize
         * valore di default: NbpSize.MD
         */
        this.nbpSize = NbpSize.MD;
        /**
         * Array che descrive i pulsanti
         * da visualizzare nella modale
         */
        this.nbpButtons = [];
        /**
         * Evento lanciato alla pressione di ogni pulsante.
         * Viene passato come parametro il pulsante cliccato.
         */
        this.nbpOnButtonClicked = new EventEmitter();
        /**
         * Evento lanciato alla chusura della modale.
         */
        this.nbpOnClose = new EventEmitter();
        /**
         * Evento lanciato all'apertura della modale.
         */
        this.nbpOnOpen = new EventEmitter();
        this._modalSize = NbpSize;
    }
    Object.defineProperty(NbpModalComponent.prototype, "nbpOpened", {
        /**
         * Flag che controlla la visibilità della modale.
         */
        get: function () {
            return this._nbpOpened;
        },
        set: function (nbpOpenendValue) {
            if (this._nbpOpened !== nbpOpenendValue) {
                this._nbpOpened = nbpOpenendValue;
                this.nbpOpenedChange.emit(nbpOpenendValue);
                if (this._nbpOpened) {
                    this.nbpOnOpen.emit();
                }
                else {
                    this.nbpOnClose.emit();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    NbpModalComponent.prototype.ngOnInit = function () { this._evaluateButtonsAndLayout(); };
    NbpModalComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nbpOpened) {
            if (changes.nbpOpened.currentValue) {
                this.nbpOnOpen.emit();
                console.debug('Opened');
            }
            else {
                this.nbpOnClose.emit();
                console.debug('Closed');
            }
        }
    };
    NbpModalComponent.prototype._populateShadowButtons = function () {
        this._shadowButtons = this.nbpButtons.length > 5 ? this.nbpButtons.slice(0, 5) : this.nbpButtons.slice();
    };
    NbpModalComponent.prototype._populateStyles = function () {
        switch (this._shadowButtons.length) {
            case 1:
                this._shadowButtons.map(function (button) {
                    button.layout = 'col-md-offset-10 col-md-6 text-center';
                });
                break;
            case 2:
                this._shadowButtons.map(function (button, index) {
                    button.layout = 'col-md-12 text-center';
                });
                break;
            case 3:
                this._shadowButtons.map(function (button, index) {
                    button.layout = 'col-md-8 text-center';
                });
                break;
            case 4:
                this._shadowButtons.map(function (button, index) {
                    button.layout = 'col-md-4 text-center';
                });
                break;
            case 5:
                this._shadowButtons.map(function (button, index) {
                    button.layout = 'col-md-offset-2 col-md-4 text-center';
                });
                break;
        }
    };
    NbpModalComponent.prototype._evaluateButtonsAndLayout = function () {
        this._populateShadowButtons();
        this._populateStyles();
    };
    NbpModalComponent.prototype._getDisplayStyleValue = function () {
        // block => Visibile / none => Invisibile
        var displayStyle = this._nbpOpened ? 'block' : 'none';
        return displayStyle;
    };
    NbpModalComponent.prototype._onClick = function (button) {
        this.nbpOnButtonClicked.emit(button);
    };
    NbpModalComponent.prototype.open = function () {
        this.nbpOpened = true;
    };
    NbpModalComponent.prototype.close = function () {
        this.nbpOpened = false;
    };
    return NbpModalComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpModalComponent.prototype, "id", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NbpModalComponent.prototype, "nbpOpened", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NbpModalComponent.prototype, "nbpOpenedChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpModalComponent.prototype, "nbpTitle", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpModalComponent.prototype, "nbpSubTitle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NbpModalComponent.prototype, "nbpSize", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], NbpModalComponent.prototype, "nbpButtons", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpModalComponent.prototype, "nbpOnButtonClicked", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpModalComponent.prototype, "nbpOnClose", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpModalComponent.prototype, "nbpOnOpen", void 0);
NbpModalComponent = __decorate([
    Component({
        selector: 'nbp-modal',template: "<div class=\"nbp-modal\" [style.display]=\"_getDisplayStyleValue()\"><div class=\"nbp-modal-container\" [ngClass]=\"{'container__large': nbpSize === _modalSize.LG , 'container__medium': nbpSize === _modalSize.MD , 'container__small': nbpSize === _modalSize.SM}\"><div class=\"row\"><div class=\"col-md-24 text-center\"><div *ngIf=\"!!nbpTitle\" class=\"col-md-24 nbp-modal-title text-center\">{{nbpTitle | uppercase}}</div><div *ngIf=\"!!nbpSubTitle\" class=\"col-md-24 nbp-modal-sub-title text-center\">{{nbpSubTitle}}</div><div class=\"close-icon-container\"><span class=\"ico-azioni-elimina pull-right\" (click)=\"close()\"></span></div></div></div><div class=\"row\"><div class=\"col-md-24\" [ngClass]=\"{ 'nbp-modal-body-with-title': nbpTitle, 'nbp-modal-body-without-title': !nbpTitle }\"><ng-content></ng-content></div></div><div class=\"row mrg-t-10\"><ng-container *ngFor=\"let button of _shadowButtons\"><div *ngIf=\"button.visible\" [class]=\"button.layout\"><nbp-button [nbpLabel]=\"button.label\" (nbpClick)=\"_onClick(button)\" [disabled]=\"button.disabled\" [nbpStyle]=\"button.style\"></nbp-button></div></ng-container></div></div></div>",
        styles: [".nbp-modal{display:none;position:fixed;z-index:10000;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.5)}.nbp-modal.no-static-backdrop__small{width:34.375em}.nbp-modal.container__medium{width:64em}.nbp-modal.container__large{width:85.375em}.nbp-modal-title{color:#323232;font-size:18px;padding-top:20px}.nbp-modal-sub-title{text-transform:capitalize;color:#323232;padding-top:20px}.close-icon-container{position:relative}.close-icon-container>.ico-azioni-elimina{position:absolute;right:20px;top:20px;z-index:10;color:#258900;cursor:pointer}.nbp-modal-body-with-title{padding:20px}.nbp-modal-body-without-title{padding:40px}.nbp-modal-container{background-color:#fefefe;margin:auto;padding:0 20px 20px 20px;border:1px solid #888}.nbp-modal-container.container__small{max-width:34.375em;min-width:17.375em}.nbp-modal-container.container__medium{max-width:64em;min-width:32em}.nbp-modal-container.container__large{max-width:85.375em;min-width:42.375em}.nbp-close-modal{color:#aaa;font-size:28px;font-weight:700}.nbp-close-modal:focus,.nbp-close-modal:hover{color:#000;text-decoration:none;cursor:pointer} /*# sourceMappingURL=nbp-modal.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [])
], NbpModalComponent);
export { NbpModalComponent };
