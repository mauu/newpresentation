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
import { Component, EventEmitter, forwardRef, HostBinding, Inject, Input, Optional, Output, ViewChild, } from '@angular/core';
import { NG_ASYNC_VALIDATORS, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';
import { NbpInputElementBase } from './../nbp-commons/nbp-input-element-base';
import { coerceBooleanProperty } from './../../utility/lib-utility';
export var NBP_SPINNER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NbpSpinnerComponent; }),
    multi: true
};
export var NBP_INPUT_ELEMENT_BASE = {
    provide: NbpInputElementBase,
    useExisting: forwardRef(function () { return NbpSpinnerComponent; }),
    multi: true
};
/** intero autogenerato usato per id unici */
var nextId = 0;
var NbpSpinnerComponent = (function (_super) {
    __extends(NbpSpinnerComponent, _super);
    function NbpSpinnerComponent(validatori, asyncValidatori) {
        var _this = _super.call(this, validatori, asyncValidatori) || this;
        _this.validatori = validatori;
        _this.asyncValidatori = asyncValidatori;
        /**
         * Identificativo univoco per il componente NbpSpinner. Se non viene passato un valore, l'id viene autogenerato.
         */
        _this.id = "nbp-radio-" + ++nextId;
        _this._nbpDisabled = false;
        _this._nbpRequired = false;
        /**
         * (Opzionale)
         * Booleano che consente di visualizzare i messaggi di feedback relativi alla validazione.
         * Valore di default false
         */
        _this.nbpShowValidation = false;
        // TODO usare libreria coercboolean
        /**
         * (Opzionale) Messaggio di errore da visualizzare in caso di campo non valido
         * Valore di Default: "Campo obbligatorio o invalido"
         */
        _this.nbpErrorMessage = 'Campo obbligatorio o invalido';
        /**
         * Evento sollevato quando il valore del componente cambia
         */
        _this.nbpValueChange = new EventEmitter();
        /**
         * (Opzionale) Funzione custom di validazione del campo
         */
        _this.nbpValidation = new EventEmitter();
        return _this;
    }
    Object.defineProperty(NbpSpinnerComponent.prototype, "disabled", {
        /**
         * (Opzionale)
         * Flag che abilita/disabilita il componente.
         * Valore di default false
         */
        get: function () { return this._nbpDisabled; },
        set: function (value) { this._nbpDisabled = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbpSpinnerComponent.prototype, "required", {
        /**
         * (Opzionale)
         * Flag che abilita/disabilita il required sul componente.
         * Valore di default false
         */
        get: function () { return this._nbpRequired; },
        set: function (value) { this._nbpRequired = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    NbpSpinnerComponent.prototype._onSubtractClick = function (event) {
        if (this.value > this.min) {
            this.value--;
            this._emitChangeEvent(event);
        }
    };
    NbpSpinnerComponent.prototype._onAddClick = function (event) {
        if (this.value < this.max) {
            this.value++;
            this._emitChangeEvent(event);
        }
    };
    NbpSpinnerComponent.prototype._emitChangeEvent = function (event) {
        this.nbpValueChange.emit(this.value);
        this.nbpValidation.emit(this.model);
    };
    NbpSpinnerComponent.prototype.ngOnInit = function () {
        if (!this.nbpShowValidation) {
            this.nbpShowValidation = false;
        }
        if (this.min === undefined) {
            this.min = 0;
        }
        if (this.max === undefined) {
            this.max = 99;
        }
    };
    return NbpSpinnerComponent;
}(NbpInputElementBase));
__decorate([
    Input(),
    __metadata("design:type", Object)
], NbpSpinnerComponent.prototype, "id", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpSpinnerComponent.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NbpSpinnerComponent.prototype, "min", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NbpSpinnerComponent.prototype, "max", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpSpinnerComponent.prototype, "disabled", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpSpinnerComponent.prototype, "required", null);
__decorate([
    HostBinding('class.nbp-show-validation'),
    Input(),
    __metadata("design:type", Object)
], NbpSpinnerComponent.prototype, "nbpShowValidation", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NbpSpinnerComponent.prototype, "nbpErrorMessage", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpSpinnerComponent.prototype, "nbpValueChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpSpinnerComponent.prototype, "nbpValidation", void 0);
__decorate([
    ViewChild(NgModel),
    __metadata("design:type", NgModel)
], NbpSpinnerComponent.prototype, "model", void 0);
NbpSpinnerComponent = __decorate([
    Component({
        selector: 'nbp-spinner',
        template: "<div class=\"spinner-container\"><button class=\"spinner-button left\" (click)=\"_onSubtractClick($event)\" [disabled]=\"value <= min || disabled\">-</button> <input type=\"number\" name=\"spinnerValue\" class=\"spinner-input\" [(ngModel)]=\"value\" [min]=\"min\" [max]=\"max\" readonly=\"readonly\"> <button class=\"spinner-button right\" (click)=\"_onAddClick($event)\" [disabled]=\"value >= max || disabled\">+</button></div>",
        styles: [":host(.ng-dirty.ng-invalid.nbp-show-validation) .spinner-container{background-color:#fff;border:2px solid #c63200;border-radius:2px}.spinner-container{background-color:#fff;border:2px solid #323232;border-radius:2px;overflow:auto;padding:4px;height:50px}.spinner-container:disabled{background-color:#ccc}.spinner-container .spinner-button{width:30px;height:38px;background-color:#258900;font-size:24px;line-height:24px;color:#fff;border:none;border-radius:2px}.spinner-container .spinner-button:disabled{background-color:#ccc}.spinner-container .spinner-button.left{float:left}.spinner-container .spinner-button.right{float:right}.spinner-container .spinner-input{width:calc(100% - 64px);border:none;height:32px;text-align:center;font-size:15px;color:#323232;font-weight:700} /*# sourceMappingURL=nbp-spinner.component.css.map */ "],providers: [NBP_SPINNER_CONTROL_VALUE_ACCESSOR, NBP_INPUT_ELEMENT_BASE]
    }),
    __param(0, Optional()), __param(0, Inject(NG_VALIDATORS)),
    __param(1, Optional()), __param(1, Inject(NG_ASYNC_VALIDATORS)),
    __metadata("design:paramtypes", [Array, Array])
], NbpSpinnerComponent);
export { NbpSpinnerComponent };
