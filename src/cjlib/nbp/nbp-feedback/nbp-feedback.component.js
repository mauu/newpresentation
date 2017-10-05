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
import { NbpFeedbackType } from './nbp-feedback.enums';
var NbpFeedbackComponent = (function () {
    function NbpFeedbackComponent() {
        this.nbpOnButtonClick = new EventEmitter();
    }
    NbpFeedbackComponent.prototype.ngOnInit = function () {
        if (this.nbpButtons && this.nbpButtons.length) {
            this._evaluateShadowedButtons();
            this._populateButtonStyles();
        }
    };
    NbpFeedbackComponent.prototype._evaluateShadowedButtons = function () {
        this._shadowButtons = this.nbpButtons.length > 3 ? this.nbpButtons.slice(0, 3) : this.nbpButtons.slice();
    };
    NbpFeedbackComponent.prototype._populateButtonStyles = function () {
        switch (this._shadowButtons.length) {
            case 1:
                this._shadowButtons.map(function (button) {
                    button.layout = 'col-md-24';
                });
                break;
            case 2:
                this._shadowButtons.map(function (button, index) {
                    button.layout = 'col-md-12';
                });
                break;
            case 3:
                this._shadowButtons.map(function (button, index) {
                    button.layout = 'col-md-8';
                });
                break;
        }
    };
    NbpFeedbackComponent.prototype._isSuccess = function () {
        return this.nbpFeedbackType === NbpFeedbackType.SUCCESS;
    };
    NbpFeedbackComponent.prototype._isWarning = function () {
        return this.nbpFeedbackType === NbpFeedbackType.WARNING;
    };
    NbpFeedbackComponent.prototype._isError = function () {
        return this.nbpFeedbackType === NbpFeedbackType.ERROR;
    };
    NbpFeedbackComponent.prototype._onFeedbackButtonClick = function (button) {
        this.nbpOnButtonClick.emit(button);
    };
    return NbpFeedbackComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpFeedbackComponent.prototype, "nbpTitle", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpFeedbackComponent.prototype, "nbpErrorCode", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpFeedbackComponent.prototype, "nbpMainMessage", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpFeedbackComponent.prototype, "nbpBoxMessage", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], NbpFeedbackComponent.prototype, "nbpButtons", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NbpFeedbackComponent.prototype, "nbpFeedbackType", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpFeedbackComponent.prototype, "nbpOnButtonClick", void 0);
NbpFeedbackComponent = __decorate([
    Component({
        selector: 'nbp-feedback',template: "<div class=\"row col-md-24 padding-bottom\"><div class=\"text-center row col-md-offset-6 col-md-12\"><span id=\"icon\" class=\"icon-size\" [ngClass]=\"{ 'ico-comuni-esito-face-ok success' : _isSuccess() , 'ico-comuni-esito-face-ko error' : _isError() , 'ico-pfm-isp-font-cross-006-faceneutral warning' : _isWarning()  }\"></span></div><div class=\"row col-md-offset-6 col-md-12 padding-bottom\"><div id=\"title\" class=\"title\">{{nbpTitle}}</div></div><div *ngIf=\"_isWarning()\" class=\"row col-md-offset-6 col-md-12 padding-bottom\"><div id=\"error-code\" class=\"code-warning\">Codice Errore: {{nbpErrorCode}}</div></div><div class=\"row col-md-offset-6 col-md-12 padding-bottom\"><div id=\"main-message\" class=\"message\">{{nbpMainMessage}}</div></div><div class=\"col-md-24 box padding-bottom\"><div class=\"row col-md-offset-2 col-md-20 text-center button-row\"><div *ngFor=\"let button of _shadowButtons\" class=\"text-center\" [ngClass]=\"button.layout\"><nbp-button [nbpLabel]=\"button.label\" [nbpStyle]=\"button.style\" [nbpIcon]=\"button.icon\" [disabled]=\"button.disabled\" (nbpClick)=\"_onFeedbackButtonClick(button)\"></nbp-button></div></div><div id=\"box-message\" class=\"row col-md-offset-6 col-md-12 text-center message\">{{nbpBoxMessage}}</div></div></div>",
        styles: [".icon-size{font-size:6.25em}.title{font-size:1.5em;color:#000;text-align:center;word-wrap:break-word}.code-warning{font-family:\"Arial Bold\",Arial;font-weight:700;font-style:normal;font-size:16px;color:#6f6f6f;text-align:center;word-wrap:break-word}.message{font-weight:400;font-style:normal;color:#333;text-align:center;line-height:normal}.padding-bottom{padding-bottom:20px}.box{border-width:0;background:inherit;background-color:#f8f8f8;border:none;border-radius:0;box-shadow:none;padding:20px}.button-row{padding-bottom:20px}.feedback-face-size{font-size:12em}.success{color:#258900;font-size:12em}.warning{color:#fa9600;font-size:12em}.error{color:#c63200;font-size:12em} /*# sourceMappingURL=nbp-feedback.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [])
], NbpFeedbackComponent);
export { NbpFeedbackComponent };
