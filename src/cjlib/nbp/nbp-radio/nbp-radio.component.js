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
/** intero autogenerato usato per id unici per radio component */
var nextId = 0;
/**
 * Provider Expression that allows nbp-radio to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
export var NBP_RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NbpRadioComponent; }),
    multi: true
};
/**
 * <nbp-radio> provides the same functionality as a native <input type="radio">
 */
var NbpRadioComponent = (function (_super) {
    __extends(NbpRadioComponent, _super);
    function NbpRadioComponent(validatori, asyncValidatori) {
        var _this = _super.call(this, validatori, asyncValidatori) || this;
        _this.validatori = validatori;
        _this.asyncValidatori = asyncValidatori;
        /**
         * Identificativo univoco per il radio button. Se non viene passato un valore, l'id viene autogenerato.
         */
        _this.id = "nbp-radio-" + ++nextId;
        _this._nbpChecked = false;
        /**
         * Event emitted when the radio's `checked` value changes.
         */
        _this.change = new EventEmitter(); // TODO definire tipo specifico dell'evento
        _this.propagateChange = function (value) {
            console.log('NbpRadio: eseguita funzione propagateChange ' + value);
        };
        return _this;
    }
    Object.defineProperty(NbpRadioComponent.prototype, "value", {
        /**
         * Il valore assegnato al model quando viene selezionato il radio button
         */
        get: function () { return this._nbpValue; },
        set: function (newValue) {
            if (this._nbpValue !== newValue) {
                // Set this before proceeding to ensure no circular loop occurs with selection.
                this._nbpValue = newValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbpRadioComponent.prototype, "disabled", {
        /**
         *Booleano che abilita/disabilita le funzionalità del radio button
         */
        get: function () { return this._nbpDisabled; },
        set: function (value) { this._nbpDisabled = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbpRadioComponent.prototype, "required", {
        /**
        * (Opzionale) Booleano che imposta come obbligatorio o meno del campo associato al radio button.
        * Valore di dafault false.
        */
        get: function () { return this._nbpRequired; },
        set: function (value) { this._nbpRequired = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbpRadioComponent.prototype, "checked", {
        /**
        * (Opzionale) Booleano che imposta come 'checked' o meno il radio button.
        * Valore di dafault false.
        */
        get: function () {
            return this._nbpChecked;
        },
        set: function (value) {
            this._nbpChecked = coerceBooleanProperty(value);
            /*old code
            if (this._nbpChecked !== checked) {
              this._nbpChecked = checked;
            }*/
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbpRadioComponent.prototype, "nbpDisplayInline", {
        /**
         *(opzionale)Booleano che imposta, se presente, la proprietà CSS display dell’elemento a inline-block
         *valore default false
         */
        get: function () { return this._nbpDisplayInline; },
        set: function (value) { this._nbpDisplayInline = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbpRadioComponent.prototype, "nbpYellowBorder", {
        /**
        * (Opzionale) Booleano, se presente, l’attributo abilita il bordo giallo della radio-button.
        * Al primo click/focus tornerà alla versione di default.
        * Valore di default false.
        * Se usato nel componente container nbpForm il valore della proprietà sarà automaticamente
        * ereditato da nbpForm.
        */
        get: function () {
            return this._nbpYellowBorder;
        },
        set: function (value) {
            this._nbpYellowBorder = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    NbpRadioComponent.prototype.ngOnInit = function () {
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
    NbpRadioComponent.prototype._onFocusEvent = function (event) {
        // event.stopPropagation();
        this.nbpYellowBorder = false;
    };
    NbpRadioComponent.prototype.writeValue = function (value) {
        this.checked = this.value === value;
        // this.value = value;
    };
    NbpRadioComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    NbpRadioComponent.prototype._onChangeEvent = function (event) {
        event.stopPropagation();
        this.change.next(event);
    };
    NbpRadioComponent.prototype._onClickEvent = function (event) {
        event.stopPropagation();
        if (!this.disabled) {
            this.checked = true;
            this.model = this.value;
            if (this._nbpYellowBorder) {
                this._nbpYellowBorder = false;
            }
        }
        this._emitChangeEvent(event);
    };
    NbpRadioComponent.prototype._emitChangeEvent = function (event) {
        this.change.emit(this.value);
        this.propagateChange(this.value);
    };
    return NbpRadioComponent;
}(NbpInputElementBase));
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpRadioComponent.prototype, "id", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpRadioComponent.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NbpRadioComponent.prototype, "value", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpRadioComponent.prototype, "disabled", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpRadioComponent.prototype, "required", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpRadioComponent.prototype, "checked", null);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpRadioComponent.prototype, "nbpLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NbpRadioComponent.prototype, "nbpShowValidation", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpRadioComponent.prototype, "nbpDisplayInline", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpRadioComponent.prototype, "nbpYellowBorder", null);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpRadioComponent.prototype, "nbpIcon", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpRadioComponent.prototype, "nbpSelectionSign", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpRadioComponent.prototype, "nbpErrorMessage", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpRadioComponent.prototype, "change", void 0);
__decorate([
    ViewChild(NgModel),
    __metadata("design:type", NgModel)
], NbpRadioComponent.prototype, "model", void 0);
NbpRadioComponent = __decorate([
    Component({
        selector: 'nbp-radio',template: "<div class=\"iradio-container\" [ngStyle]=\"{'display': nbpDisplayInline ? 'inline-block' : 'block'}\" [ngClass]=\"{'checked': checked && !disabled, 'disabled': disabled}\"><div class=\"iradio_intesa\" [ngClass]=\"{'checked': checked, 'iradio_intesa_spunta': nbpSelectionSign === 'spunta', 'yellowborder': nbpYellowBorder, 'disabled': disabled}\"><input [id]=\"id\" [name]=\"name\" [checked]=\"checked\" type=\"radio\" [value]=\"value\" [disabled]=\"disabled\" [required]=\"required\" (click)=\"_onClickEvent($event)\" (change)=\"_onChangeEvent($event)\"></div><span *ngIf=\"!!nbpIcon\" class=\"icon radio-icon\" [ngClass]=\"nbpIcon\"></span><label *ngIf=\"nbpLabel\" [ngClass]=\"{'radio-label-icon': nbpIcon , 'radio-label': !nbpIcon}\" [for]=\"id\">{{nbpLabel}}</label><label *ngIf=\"!nbpLabel\" [ngClass]=\"{'radio-label-icon': nbpIcon , 'radio-label': !nbpIcon}\" [for]=\"id\"><ng-content></ng-content></label></div>",
        styles: [".iradio-container{margin-right:.625em}.iradio-container.checked .radio-label{color:#258900!important}.iradio-container.checked .radio-label-icon{color:#258900!important}.iradio-container.checked .radio-icon{color:#258900!important}.iradio-container.disabled .radio-label{color:#ccc!important}.iradio_intesa{position:relative;display:inline-block;vertical-align:middle;margin:0;padding:0;width:16px;height:17px;background:url(/cjlib/assets/images/intesa.png) no-repeat;border:none;background-position:-72px 0}.iradio_intesa input[type=radio]{margin:4px 4px 0 0!important;cursor:pointer;opacity:0}.iradio_intesa input[type=radio]:disabled{cursor:auto}.iradio_intesa.yellowborder{background-position:-269px 0}.iradio_intesa_spunta.checked{background-position:-162px 0!important}.iradio_intesa_spunta.checked.yellowborder{background-position:-305px 0!important}.iradio_intesa_spunta.checked.disabled{background-position:-144px 0!important}.iradio_intesa_spunta.checked.disabled.yellowborder{background-position:-340px 0!important}.iradio_intesa.checked{background-position:-90px 0}.iradio_intesa.checked.yellowborder{background-position:-287px 0}.iradio_intesa.disabled{background-position:-72px 0;cursor:default}.iradio_intesa.disabled.yellowborder{background-position:-251px 0}.iradio_intesa.checked.disabled{background-position:-126px 0}.iradio_intesa.checked.disabled.yellowborder{background-position:-322px 0}.radio-label{color:#6f6f6f;font-size:.75em;margin:0 0 0 5px!important}.radio-label-icon{padding-left:.825em;padding-bottom:.8125em;display:table-cell!important;vertical-align:middle}.radio-icon{font-size:2em!important;vertical-align:middle;margin:5px 0 0 15px!important}.radio-error-message{color:#c63200;font-size:.75em;margin-top:0;margin-bottom:.625em;opacity:1}.radio-error-message.ng-hide-add{transition:all ease-out .25s}.radio-error-message.ng-hide-remove{transition:all ease-out .25s}.radio-error-message.ng-hide{opacity:0;margin-top:-.625em}@media (-o-min-device-pixel-ratio:5/4){.iradio_intesa{background-image:url(/cjlib/assets/images/intesa@2x.png);-webkit-background-size:645px 19px;background-size:645px 19px}}@media (-webkit-min-device-pixel-ratio:1.25){.iradio_intesa{background-image:url(/cjlib/assets/images/intesa@2x.png);-webkit-background-size:645px 19px;background-size:645px 19px}}@media (min-resolution:120dpi){.iradio_intesa{background-image:url(/cjlib/assets/images/intesa@2x.png);-webkit-background-size:645px 19px;background-size:645px 19px}}@media (min-resolution:1.25dppx){.iradio_intesa{background-image:url(/cjlib/assets/images/intesa@2x.png);-webkit-background-size:645px 19px;background-size:645px 19px}}.contrasto-on .iradio-container{margin-right:.625em}.contrasto-on .iradio-container.checked .radio-label{color:#000!important}.contrasto-on .iradio-container.disabled .radio-label{color:#000!important}.contrasto-on .iradio_intesa{background:url(/cjlib/assets/images/intesa.png) no-repeat;background-position:-574px 0}.contrasto-on .iradio_intesa.yellowborder{background-position:-574px 0}.contrasto-on .iradio_intesa_spunta.checked{background-position:-610px 0!important}.contrasto-on .iradio_intesa_spunta.checked.yellowborder{background-position:-610px 0!important}.contrasto-on .iradio_intesa_spunta.checked.disabled{background-position:-610px 0!important}.contrasto-on .iradio_intesa_spunta.checked.disabled.yellowborder{background-position:-610px 0!important}.contrasto-on .iradio_intesa.checked{background-position:-592px 0}.contrasto-on .iradio_intesa.checked.yellowborder{background-position:-592px 0}.contrasto-on .iradio_intesa.disabled{background-position:-574px 0;cursor:default}.contrasto-on .iradio_intesa.disabled.yellowborder{background-position:-574px 0}.contrasto-on .iradio_intesa.checked.disabled{background-position:-592px 0}.contrasto-on .iradio_intesa.checked.disabled.yellowborder{background-position:-592px 0}.contrasto-on .radio-label{color:#000}.contrasto-on .radio-error-message{color:#000}@media (-o-min-device-pixel-ratio:5/4){.contrasto-on .iradio_intesa{background-image:url(/cjlib/assets/images/intesa@2x.png);-webkit-background-size:645px 17px;background-size:645px 17px}}@media (-webkit-min-device-pixel-ratio:1.25){.contrasto-on .iradio_intesa{background-image:url(/cjlib/assets/images/intesa@2x.png);-webkit-background-size:645px 17px;background-size:645px 17px}}@media (min-resolution:120dpi){.contrasto-on .iradio_intesa{background-image:url(/cjlib/assets/images/intesa@2x.png);-webkit-background-size:645px 17px;background-size:645px 17px}}@media (min-resolution:1.25dppx){.contrasto-on .iradio_intesa{background-image:url(/cjlib/assets/images/intesa@2x.png);-webkit-background-size:645px 17px;background-size:645px 17px}} /*# sourceMappingURL=nbp-radio.component.css.map */ "],
        providers: [NBP_RADIO_CONTROL_VALUE_ACCESSOR]
    }),
    __param(0, Optional()), __param(0, Inject(NG_VALIDATORS)),
    __param(1, Optional()), __param(1, Inject(NG_ASYNC_VALIDATORS)),
    __metadata("design:paramtypes", [Array, Array])
], NbpRadioComponent);
export { NbpRadioComponent };
