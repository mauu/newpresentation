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
import { Component, Input, Output, Optional, Inject, forwardRef, EventEmitter, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { NbpInputElementBase } from './../nbp-commons/nbp-input-element-base';
import { coerceBooleanProperty } from './../../utility/lib-utility';
/** intero autogenerato usato per id unici per checkbox component */
var nextId = 0;
/**
 * Provider Expression that allows nbp-checkbox to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
export var NBP_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NbpCheckboxComponent; }),
    multi: true
};
/**
 * <nbp-checkbox> provides the same functionality as a native <input type="checkbox">
 */
var NbpCheckboxComponent = (function (_super) {
    __extends(NbpCheckboxComponent, _super);
    function NbpCheckboxComponent(validatori, asyncValidatori) {
        var _this = _super.call(this, validatori, asyncValidatori) || this;
        _this.validatori = validatori;
        _this.asyncValidatori = asyncValidatori;
        /**
         * Nome che sara' applicato all'elemento di input se presente
         */
        _this.name = null;
        /**
         * Identificativo univoco per la checkbox.
         * Se nessun id è fornito e' auto-generato.
         */
        _this.id = "nbp-checkbox-" + ++nextId;
        _this._checked = false;
        /**
         * Evento emesso quando il valore `checked` della checkbox cambia.
         */
        _this.change = new EventEmitter(); // TODO definire tipo specifico dell'evento
        _this.propagateChange = function (value) {
            console.log('NbpCheckbox: eseguita funzione propagateChange');
        };
        return _this;
    }
    Object.defineProperty(NbpCheckboxComponent.prototype, "disabled", {
        /**
         * Se la checkbox è disabled.
         */
        get: function () { return this._nbpDisabled; },
        set: function (value) { this._nbpDisabled = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbpCheckboxComponent.prototype, "nbpDisplayInline", {
        /**
         * Booleano che imposta, se presente, la proprietà CSS display dell’elemento
         * a inline-block
         */
        get: function () { return this._nbpDisplayInline; },
        set: function (value) { this._nbpDisplayInline = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NbpCheckboxComponent.prototype, "nbpYellowBorder", {
        /**
         * (Opzionale) Booleano che abilita il bordo giallo della checkbox. Al primo
         * click/focus tornerà alla versione di default.
         * Valore default false
         */
        get: function () { return this._nbpYellowBorder; },
        set: function (value) { this._nbpYellowBorder = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(NbpCheckboxComponent.prototype, "required", {
        /** Whether the checkbox is required. */
        get: function () { return this._required; },
        set: function (value) { this._required = value != null && "" + value !== 'false'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbpCheckboxComponent.prototype, "checked", {
        /**
         * Se la checkbox e' checked.
         */
        get: function () { return this._checked; },
        set: function (checked) { if (checked !== this.checked) {
            this._checked = checked;
        } },
        enumerable: true,
        configurable: true
    });
    NbpCheckboxComponent.prototype.ngOnInit = function () {
        if (!this.nbpShowValidation) {
            this.nbpShowValidation = false;
        }
        if (!this.nbpDisplayInline) {
            this.nbpDisplayInline = false;
        }
        if (!this.nbpYellowBorder) {
            this.nbpYellowBorder = false;
        }
    };
    NbpCheckboxComponent.prototype.writeValue = function (value) {
        this.checked = !!value;
    };
    NbpCheckboxComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    NbpCheckboxComponent.prototype._onChangeEvent = function (event) {
        event.stopPropagation();
        this.change.next(event);
    };
    NbpCheckboxComponent.prototype._onClickEvent = function (event) {
        event.stopPropagation();
        if (!this.disabled) {
            this.checked = !this.checked;
        }
        if (this._nbpYellowBorder) {
            this._nbpYellowBorder = false;
        }
        this._emitChangeEvent(event);
    };
    NbpCheckboxComponent.prototype._emitChangeEvent = function (event) {
        this.propagateChange(this.checked);
    };
    return NbpCheckboxComponent;
}(NbpInputElementBase));
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpCheckboxComponent.prototype, "nbpLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpCheckboxComponent.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NbpCheckboxComponent.prototype, "id", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpCheckboxComponent.prototype, "disabled", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NbpCheckboxComponent.prototype, "nbpShowValidation", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpCheckboxComponent.prototype, "nbpDisplayInline", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpCheckboxComponent.prototype, "nbpYellowBorder", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpCheckboxComponent.prototype, "required", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Boolean])
], NbpCheckboxComponent.prototype, "checked", null);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpCheckboxComponent.prototype, "value", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpCheckboxComponent.prototype, "change", void 0);
__decorate([
    ViewChild(NgModel),
    __metadata("design:type", NgModel)
], NbpCheckboxComponent.prototype, "model", void 0);
NbpCheckboxComponent = __decorate([
    Component({
        selector: 'nbp-checkbox',template: "<div class=\"icheckbox-container\" [ngStyle]=\"{'display': nbpDisplayInline ? 'inline-block' : 'block'}\" [ngClass]=\"{'checked': checked && !disabled, 'disabled': disabled }\"><div class=\"icheckbox_intesa\" [ngClass]=\"{'checked': checked, 'disabled': disabled ,'yellowborder': nbpYellowBorder}\"><input class=\"input-checkbox\" [id]=\"id\" [name]=\"name\" [(ngModel)]=\"value\" type=\"checkbox\" [checked]=\"checked\" [disabled]=\"disabled\" (change)=\"_onChangeEvent($event)\" (click)=\"_onClickEvent($event)\"></div><label *ngIf=\"nbpLabel\" class=\"checkbox-label\" [innerHTML]=\"required ? nbpLabel + ' * ' : nbpLabel\"></label><label *ngIf=\"!nbpLabel\" class=\"checkbox-label\"><ng-content></ng-content></label></div>",
        styles: [".icheckbox-container{margin-right:.625em}.icheckbox-container.checked .checkbox-label{color:#258900!important}.icheckbox-container.disabled .checkbox-label{color:#ccc!important}.icheckbox_intesa{position:relative;display:inline-block;vertical-align:middle;margin:0;padding:0;width:16px;height:17px;background:url(/cjlib/assets/images/intesa.png) no-repeat;border:none;background-position:-36px 0}.icheckbox_intesa input[type=checkbox]{margin:4px 4px 0 0!important;cursor:pointer;opacity:0}.icheckbox_intesa input[type=checkbox]:disabled{cursor:auto}.icheckbox_intesa.yellowborder{background-position:-215px 0}.icheckbox_intesa.checked{background-position:-18px 0}.icheckbox_intesa.checked.yellowborder{background-position:-233px 0}.icheckbox_intesa.disabled{background-position:-36px 0;cursor:default}.icheckbox_intesa.disabled.yellowborder{background-position:-180px 0}.icheckbox_intesa.checked.disabled{background-position:-54px 0}.icheckbox_intesa.checked.disabled.yellowborder{background-position:-197px 0}.checkbox-label{color:#6f6f6f;font-size:.75em;margin:0 0 0 5px!important}.input-checkbox{position:absolute;left:-1px;top:-2px}@media (-o-min-device-pixel-ratio:5/4){.icheckbox_intesa{background-image:url(/cjlib/asets/images/intesa@2x.png);-webkit-background-size:645px 19px;background-size:645px 19px}}@media (-webkit-min-device-pixel-ratio:1.25){.icheckbox_intesa{background-image:url(/cjlib/asets/images/intesa@2x.png);-webkit-background-size:645px 19px;background-size:645px 19px}}@media (min-resolution:120dpi){.icheckbox_intesa{background-image:url(/cjlib/asets/images/intesa@2x.png);-webkit-background-size:645px 19px;background-size:645px 19px}}@media (min-resolution:1.25dppx){.icheckbox_intesa{background-image:url(/cjlib/asets/images/intesa@2x.png);-webkit-background-size:645px 19px;background-size:645px 19px}}.contrasto-on .icheckbox-container.checked .checkbox-label{color:#000!important}.contrasto-on .icheckbox-container.disabled .checkbox-label{color:#000!important}.contrasto-on .icheckbox_intesa{background:url(/cjlib/asets/images/intesa.png) no-repeat;border:none;background-position:-538px 0}.contrasto-on .icheckbox_intesa.yellowborder{background-position:-538px 0}.contrasto-on .icheckbox_intesa.checked{background-position:-556px 0}.contrasto-on .icheckbox_intesa.checked.yellowborder{background-position:-556px 0}.contrasto-on .icheckbox_intesa.disabled{background-position:-538px 0;cursor:default}.contrasto-on .icheckbox_intesa.disabled.yellowborder{background-position:-538px 0}.contrasto-on .icheckbox_intesa.checked.disabled{background-position:-556px 0}.contrasto-on .icheckbox_intesa.checked.disabled.yellowborder{background-position:-556px 0}.contrasto-on .checkbox-label{color:#000}@media (-o-min-device-pixel-ratio:5/4){.contrasto-on .icheckbox_intesa{background-image:url(/cjlib/asets/images/intesa@2x.png);-webkit-background-size:645px 17px;background-size:645px 17px}}@media (-webkit-min-device-pixel-ratio:1.25){.contrasto-on .icheckbox_intesa{background-image:url(/cjlib/asets/images/intesa@2x.png);-webkit-background-size:645px 17px;background-size:645px 17px}}@media (min-resolution:120dpi){.contrasto-on .icheckbox_intesa{background-image:url(/cjlib/asets/images/intesa@2x.png);-webkit-background-size:645px 17px;background-size:645px 17px}}@media (min-resolution:1.25dppx){.contrasto-on .icheckbox_intesa{background-image:url(/cjlib/asets/images/intesa@2x.png);-webkit-background-size:645px 17px;background-size:645px 17px}} /*# sourceMappingURL=nbp-checkbox.component.css.map */ "],
        providers: [NBP_CHECKBOX_CONTROL_VALUE_ACCESSOR]
    }),
    __param(0, Optional()), __param(0, Inject(NG_VALIDATORS)),
    __param(1, Optional()), __param(1, Inject(NG_ASYNC_VALIDATORS)),
    __metadata("design:paramtypes", [Array, Array])
], NbpCheckboxComponent);
export { NbpCheckboxComponent };
