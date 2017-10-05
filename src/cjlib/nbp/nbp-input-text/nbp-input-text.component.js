var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { Component, Input, Output, Optional, Inject, EventEmitter, forwardRef, ViewChild, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { NbpInputElementBase } from './../nbp-commons/nbp-input-element-base';
import { coerceBooleanProperty } from './../../utility/lib-utility';
/**
 * Provider Expression that allows nbp-input to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
export var NBP_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NbpInputTextComponent; }),
    multi: true
};
export var NBP_INPUT_ELEMENT_BASE = {
    provide: NbpInputElementBase,
    useExisting: forwardRef(function () { return NbpInputTextComponent; }),
    multi: true
};
/** intero autogenerato usato per id unici per nbpInput component */
var nextId = 0;
/**
 * Componente per la implementazione dei textfield, supporta tutti gli attributi standard html per il tag input.
 * personalizzabile per la gestione di currency grazie all'applicaizone di opportuni pipes
 * definiti dalla libreria.
 */
var NbpInputTextComponent = (function (_super) {
    __extends(NbpInputTextComponent, _super);
    // tslint:enable
    function NbpInputTextComponent(validatori, asyncValidatori) {
        var _this = _super.call(this, validatori, asyncValidatori) || this;
        _this.validatori = validatori;
        _this.asyncValidatori = asyncValidatori;
        /**
         * Identificativo univoco per il text field.
         * Se nessun id è fornito e' auto-generato.
         */
        _this.id = "nbp-input-" + ++nextId;
        /**
         * (Opzionale)
         * Booleano che consente di visualizzare i messaggi di feedback relativi alla validazione.
         * Valore di default false
         */
        _this.nbpShowValidation = false;
        /**
         * testo del placeholder
         */
        _this.placeholder = '';
        _this._nbpRoundBorder = false;
        /**
         * (Opzionale) Funzione custom di validazione del campo
         */
        _this.nbpValidation = new EventEmitter();
        return _this;
    }
    Object.defineProperty(NbpInputTextComponent.prototype, "disabled", {
        /**
         * Flag che abilita/disabilita il campo di input.
         */
        get: function () { return this._nbpDisabled; },
        set: function (value) { this._nbpDisabled = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbpInputTextComponent.prototype, "required", {
        /**
         * Flag che abilita/disabilita il required sul campo di input.
         */
        get: function () { return this._nbpRequired; },
        set: function (value) { this._nbpRequired = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbpInputTextComponent.prototype, "nbpRoundBorder", {
        /**
         * Se presente, l’attributo abilita arrotondamento dei bordi del campo di input
         */
        get: function () { return this._nbpRoundBorder; },
        set: function (value) { this._nbpRoundBorder = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(NbpInputTextComponent.prototype, "nbpHighlightedDefault", {
        /**
         * (opzionale ) Booleano che gestisce  l’attributo  bordo giallo del campo di input.
         * Al primo click/focus tornerà alla versione di default.
         * valore default false
         */
        get: function () { return this._nbpHighlightedDefault; },
        set: function (value) { this._nbpHighlightedDefault = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    NbpInputTextComponent.prototype._onInputEvent = function (event) {
        this.nbpValidation.emit(this.model);
    };
    // tslint:disable
    NbpInputTextComponent.prototype._onFocusEvent = function () {
        if (this._nbpHighlightedDefault) {
            this._nbpHighlightedDefault = false;
        }
    };
    return NbpInputTextComponent;
}(NbpInputElementBase));
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpInputTextComponent.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpInputTextComponent.prototype, "id", void 0);
__decorate([
    HostBinding('class.nbp-show-validation'),
    Input(),
    __metadata("design:type", Boolean)
], NbpInputTextComponent.prototype, "nbpShowValidation", void 0);
__decorate([
    Input(),
    __metadata("design:type", RegExp)
], NbpInputTextComponent.prototype, "pattern", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpInputTextComponent.prototype, "disabled", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpInputTextComponent.prototype, "required", null);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpInputTextComponent.prototype, "placeholder", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpInputTextComponent.prototype, "nbpRoundBorder", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpInputTextComponent.prototype, "nbpHighlightedDefault", null);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpInputTextComponent.prototype, "nbpFormat", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpInputTextComponent.prototype, "nbpIcon", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpInputTextComponent.prototype, "nbpErrorMessage", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpInputTextComponent.prototype, "nbpValidation", void 0);
__decorate([
    ViewChild(NgModel),
    __metadata("design:type", NgModel)
], NbpInputTextComponent.prototype, "model", void 0);
NbpInputTextComponent = __decorate([
    Component({
        selector: 'nbp-input-text',template: "<input class=\"textfield-box form-control\" [ngClass]=\"{'round-borders':nbpRoundBorder, 'highlight-default':nbpHighlightedDefault}\" type=\"text\" [name]=\"name\" [id]=\"id\" [(ngModel)]=\"value\" [disabled]=\"disabled\" [required]=\"required\" [placeholder]=\"placeholder\" (input)=\"_onInputEvent($event)\" (focus)=\"_onFocusEvent()\"> <span *ngIf=\"!!nbpIcon\" class=\"icon icon-inside\" [ngClass]=\"nbpIcon\"></span>",
        styles: [":host{position:relative;display:block}.textfield-box{margin:0 0 .625em 0;padding:.375em 1em .375em 1em;color:#6f6f6f;border:1px solid #323232;border-radius:3px;font-size:1em;height:3.125em;box-shadow:none!important}.textfield-box:focus{border:2px solid #89bc72;outline:0;box-shadow:none!important}.textfield-box[disabled]{opacity:.5;background-color:#fff}:host(.ng-dirty.ng-invalid.nbp-show-validation) .textfield-box{border:2px solid #c63200!important;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}:host(.ng-dirty.ng-invalid.nbp-show-validation) .textfield-box:focus{border:2px solid #c63200}.highlight-default{border:2px solid #fce07f}.round-borders{border-radius:25px}.icon-inside{position:absolute;top:50%;right:25px;font-size:26px;transform:translateY(-50%)}.icon-inside:before{color:#258900}.contrasto-on .input-label{color:#000}.contrasto-on .input-box{color:#000;border:1px solid #000}.contrasto-on .input-box:focus{border:2px solid #000}.contrasto-on .input-box::-webkit-input-placeholder{color:#000}.contrasto-on .input-box[disabled]{color:#fff;background-color:#000;opacity:1}.contrasto-on .has-error .input-box{border:2px solid #000;-webkit-box-shadow:inset 0 0 0 #000;box-shadow:inset 0 0 0 #000}.contrasto-on .has-error .input-box:focus{border:2px solid #000}.contrasto-on .yellow-border{border:2px solid #000} /*# sourceMappingURL=nbp-input-text.component.css.map */ "],
        providers: [NBP_INPUT_CONTROL_VALUE_ACCESSOR, NBP_INPUT_ELEMENT_BASE]
    }),
    __param(0, Optional()), __param(0, Inject(NG_VALIDATORS)),
    __param(1, Optional()), __param(1, Inject(NG_ASYNC_VALIDATORS)),
    __metadata("design:paramtypes", [Array, Array])
], NbpInputTextComponent);
export { NbpInputTextComponent };
