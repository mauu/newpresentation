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
/** intero autogenerato usato per id unici per nbpInput component */
var nextId = 0;
var NbpSwitchComponent = (function () {
    function NbpSwitchComponent() {
        /**
         * Identificativo univoco per il text field.
         * Se nessun id è fornito e' auto-generato.
         */
        this.id = "nbp-switch-" + ++nextId;
        /**
         * Funzione associata all’evento di click su un pulsante di switch.
         */
        this.nbpClickFn = new EventEmitter();
    }
    Object.defineProperty(NbpSwitchComponent.prototype, "disabled", {
        /**
         * Booleano che abilita/disabilita le funzionalità del pulsante
         * Attributo "disabled" standard di HTML element
         */
        get: function () { return this._nbpDisabled; },
        set: function (value) { this._nbpDisabled = value != null && "" + value !== 'false'; },
        enumerable: true,
        configurable: true
    });
    NbpSwitchComponent.prototype.ngOnInit = function () {
        if (!(this.defaultValue === null ||
            typeof this.defaultValue === 'undefined')) {
            for (var index in this.nbpOptionList) {
                if (this.nbpOptionList[index].value === this.defaultValue) {
                    this.onSelectButton(Number(index), this.nbpOptionList[index].value);
                }
            }
        }
    };
    NbpSwitchComponent.prototype.onSelectButton = function (index, selectedValue) {
        this.buttonSelectedIndex = index;
        this.nbpClickFn.emit(selectedValue);
        this.nbpSelected = selectedValue;
    };
    NbpSwitchComponent.prototype.checkIcon = function () {
        if (this.nbpDisplayType === NpbSwitchDispalyType.ICON ||
            this.nbpDisplayType === NpbSwitchDispalyType.ICON_TEXT) {
            return true;
        }
        else {
            return false;
        }
    };
    NbpSwitchComponent.prototype.checkText = function () {
        if (this.nbpDisplayType === NpbSwitchDispalyType.TEXT ||
            this.nbpDisplayType === NpbSwitchDispalyType.ICON_TEXT) {
            return true;
        }
        else {
            return false;
        }
    };
    NbpSwitchComponent.prototype.checkTextUp = function () {
        var textUp = false;
        if ((this.nbpDisplayType === NpbSwitchDispalyType.ICON ||
            this.nbpDisplayType === NpbSwitchDispalyType.ICON_TEXT) && (this.nbpTextUp)) {
            textUp = true;
        }
        return textUp;
    };
    return NbpSwitchComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], NbpSwitchComponent.prototype, "defaultValue", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpSwitchComponent.prototype, "id", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], NbpSwitchComponent.prototype, "nbpOptionList", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NbpSwitchComponent.prototype, "nbpDisplayType", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpSwitchComponent.prototype, "disabled", null);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpSwitchComponent.prototype, "nbpSelected", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpSwitchComponent.prototype, "nbpClickFn", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NbpSwitchComponent.prototype, "nbpTextUp", void 0);
NbpSwitchComponent = __decorate([
    Component({
        selector: 'nbp-switch',
        template: "<div class=\"switch-container btn-group\"><button *ngFor=\"let current of nbpOptionList; let i = index;\" [id]=\"id\" class=\"btn switch-button\" [class.primary]=\"buttonSelectedIndex == i\" [class.default]=\"buttonSelectedIndex !== i\" [disabled]=\"disabled\" (click)=\"onSelectButton(i , current.value)\"><span *ngIf=\"this.checkIcon()\" class=\"icon button-icon\" [ngClass]=\"current.icon\"></span><br *ngIf=\"this.checkTextUp()\"><span *ngIf=\"this.checkText()\">{{current.name | uppercase}}</span></button></div>",styles: [".switch-button{position:relative;font-weight:700;font-size:.75em;margin:0!important;padding-top:1em;padding-bottom:1em;line-height:1;outline:0!important;min-width:6.875em;height:4.125em;z-index:0}.switch-button:active{box-shadow:1px #ccc}.switch-button.primary{color:#fff;background-color:#258900;border-color:#258900;box-shadow:inset 0 0 .938em 0 rgba(0,0,0,.2)}.switch-button.default{color:#6f6f6f;background-color:#fff;border-color:#ccc}.switch-button[disabled]{box-shadow:none}.switch-button.default[disabled]{cursor:not-allowed}.switch-button.default[disabled]:hover{cursor:not-allowed;background-color:#fff!important;border-color:#ccc!important}.switch-button.primary[disabled]:hover{background-color:#258900!important;border-color:#258900!important}.switch-label{margin-right:.625em}.switch-label-icon{padding-bottom:5px;display:table-cell!important;vertical-align:middle}.switch-icon{font-size:2em!important;display:table-cell!important}.switch-icon-text-up{display:block!important}.btn{border-radius:2px!important}.btn[disabled]:hover{cursor:default}.contrasto-on .switch-button.primary{color:#fff;background-color:#000;border-color:#000;box-shadow:inset 0 0 .938em 0 rgba(0,0,0,.2)}.contrasto-on .switch-button.default{color:#000;background-color:#fff;border-color:#000}.contrasto-on .switch-button[disabled]{box-shadow:none}.contrasto-on .switch-button.default[disabled]:hover{color:#000!important;background-color:#fff!important;border-color:#000!important}.contrasto-on .switch-button.primary[disabled]:hover{background-color:#000!important;border-color:#000!important;color:#fff!important} /*# sourceMappingURL=nbp-switch.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [])
], NbpSwitchComponent);
export { NbpSwitchComponent };
export var NpbSwitchDispalyType;
(function (NpbSwitchDispalyType) {
    NpbSwitchDispalyType[NpbSwitchDispalyType["TEXT"] = 0] = "TEXT";
    NpbSwitchDispalyType[NpbSwitchDispalyType["ICON"] = 1] = "ICON";
    NpbSwitchDispalyType[NpbSwitchDispalyType["ICON_TEXT"] = 2] = "ICON_TEXT";
})(NpbSwitchDispalyType || (NpbSwitchDispalyType = {}));
