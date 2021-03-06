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
import { Component, Input, Output, Optional, Inject, EventEmitter, forwardRef, HostBinding, ViewChild } from '@angular/core';
import { coerceBooleanProperty } from './../../utility/lib-utility';
import { NbpInputElementBase } from './../nbp-commons/nbp-input-element-base';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { NgModel } from '@angular/forms';
/** intero autogenerato usato per id unici per nbpDatepicker component */
var nextId = 0;
/**
 * Provider Expression that allows nbp-input to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
export var NBP_DATE_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NbpDatepickerHtml5Component; }),
    multi: true
};
export var NBP_INPUT_ELEMENT_BASE = {
    provide: NbpInputElementBase,
    useExisting: forwardRef(function () { return NbpDatepickerHtml5Component; }),
    multi: true
};
var NbpDatepickerHtml5Component = (function (_super) {
    __extends(NbpDatepickerHtml5Component, _super);
    // @HostListener('input', ['$event.target.valueAsDate']) onChange = (_: any) => { };
    function NbpDatepickerHtml5Component(validatori, asyncValidatori) {
        var _this = _super.call(this, validatori, asyncValidatori) || this;
        _this.validatori = validatori;
        _this.asyncValidatori = asyncValidatori;
        /**
         * Identificativo univoco per il text field.
         * Se nessun id è fornito e' auto-generato.
         */
        _this.id = "nbp-datepicker-" + ++nextId;
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
        /**
        * (Opzionale) Evento emesso per la validazione
        */
        _this.nbpValidation = new EventEmitter();
        /**
        * Evento sollevato al modifica del model associato al campo di input.
        */
        _this.nbpOnDateChange = new EventEmitter();
        return _this;
    }
    Object.defineProperty(NbpDatepickerHtml5Component.prototype, "disabled", {
        /**
         * Flag che abilita/disabilita il campo di input-date.
         */
        get: function () { return this._nbpDisabled; },
        set: function (value) { this._nbpDisabled = value != null && "" + value !== 'false'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbpDatepickerHtml5Component.prototype, "required", {
        /**
         * Flag che abilita/disabilita il required sul campo di input.
         */
        get: function () { return this._nbpRequired; },
        set: function (value) { this._nbpRequired = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbpDatepickerHtml5Component.prototype, "nbpHighlightedDefault", {
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
    NbpDatepickerHtml5Component.prototype.ngOnInit = function () {
    };
    return NbpDatepickerHtml5Component;
}(NbpInputElementBase));
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpDatepickerHtml5Component.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpDatepickerHtml5Component.prototype, "id", void 0);
__decorate([
    HostBinding('class.nbp-show-validation'),
    Input(),
    __metadata("design:type", Boolean)
], NbpDatepickerHtml5Component.prototype, "nbpShowValidation", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpDatepickerHtml5Component.prototype, "disabled", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpDatepickerHtml5Component.prototype, "required", null);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpDatepickerHtml5Component.prototype, "placeholder", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpDatepickerHtml5Component.prototype, "nbpHighlightedDefault", null);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpDatepickerHtml5Component.prototype, "nbpErrorMessage", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpDatepickerHtml5Component.prototype, "nbpValidation", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpDatepickerHtml5Component.prototype, "nbpOnDateChange", void 0);
__decorate([
    ViewChild(NgModel),
    __metadata("design:type", NgModel)
], NbpDatepickerHtml5Component.prototype, "model", void 0);
NbpDatepickerHtml5Component = __decorate([
    Component({
        selector: 'nbp-datepicker-html5',template: "<input type=\"date\" [name]=\"name\" [id]=\"id\" [(ngModel)]=\"value\" [disabled]=\"disabled\" [required]=\"required\">",
        styles: [":host{position:relative;display:block}:host(.ng-invalid.nbp-show-validation) .textfield-box{border:2px solid #c63200!important;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}:host(.ng-invalid.nbp-show-validation) .textfield-box:focus{border:2px solid #c63200}.dropdown-menu{box-shadow:none!important}.uib-datepicker-popup{z-index:9999!important;overflow:hidden}.uib-datepicker-popup .btn:focus{outline:0!important}.data-green{border:2px solid #89bc72!important}.datepicker-container{position:relative;max-width:300px;margin-bottom:1.563em}.datepicker-label{color:#6f6f6f;font-size:.75em;margin:0 0 0 .75em!important}.datepicker-input-box{margin:.625em 0 .625em 0;padding:.375em 1em .375em 1em;color:#6f6f6f;border:1px solid #ccc;border-radius:3px}.datepicker-input-box::-ms-clear{display:none}.datepicker-input-box:focus{border:2px solid #89bc72;outline:0;box-shadow:none!important}.datepicker-input-box[disabled]{cursor:auto;background-color:#fff;opacity:.5}.has-error .datepicker-input-box{border:2px solid #c63200;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-error .datepicker-input-box:focus{border:2px solid #c63200}.datepicker-error-message{color:#c63200;font-size:.75em;margin-top:0;margin-bottom:.625em;opacity:1}.datepicker-error-message.ng-hide-add{transition:all ease-out .25s}.datepicker-error-message.ng-hide-remove{transition:all ease-out .25s}.datepicker-error-message.ng-hide{opacity:0;margin-top:-.625em}.datepicker-button{display:inline-block;position:absolute;cursor:pointer;font-size:1.5em;color:#6f6f6f;margin-top:-1.65em;right:.625em}.datepicker-button[role=\"\"]{cursor:default;opacity:.5}.uib-datepicker-popup.dropdown-menu{border:none!important;border-radius:0!important;padding:0!important}.uib-day{min-width:42px;max-width:42px}.uib-daypicker{width:300px!important}.uib-daypicker .btn{border-radius:0!important}.uib-daypicker #datepicker-header{border-top:1px solid #ccc}.uib-daypicker #datepicker-header .btn:focus{background-color:#323232;color:#fff;border-color:#323232}.uib-daypicker #datepicker-header .btn:active{background-color:#323232;color:#fff;border-color:#323232}.uib-daypicker #datepicker-header .btn:hover{background-color:#323232;color:#fff;border-color:#323232}.uib-daypicker .pull-left{padding-top:8px;padding-bottom:8px;min-width:auto;color:#6f6f6f;border-top:none;border-bottom:none;border-left:none;border-right:none}.uib-daypicker .border-r-l{border-left:1px solid #ccc!important;border-right:1px solid #ccc!important}.uib-daypicker .border-r{border-right:1px solid #ccc!important}.uib-daypicker .uib-title{padding-top:8px;padding-bottom:8px;min-width:auto;border:none;color:#6f6f6f;font-size:.84em;cursor:default;pointer-events:none;text-transform:uppercase}.uib-daypicker .uib-title strong{font-weight:400!important}.uib-daypicker .pull-right{padding-top:8px;padding-bottom:8px;min-width:auto;color:#6f6f6f;border-top:none;border-bottom:none;border-left:none;border-right:none}.uib-daypicker .border-l{border-left:1px solid #ccc!important}.uib-daypicker .icon-arrow-left{display:block;margin-top:4px}.uib-daypicker .icon-arrow-right{display:block;margin-top:4px}.uib-daypicker .size-icon{font-size:20px}.uib-daypicker #datepicker-weeks{text-transform:uppercase;color:#6f6f6f;height:2.625em;background-color:#dfdfdf;border:1px solid #ccc;border-right:2px solid #ccc}.uib-weeks{border-right:1px solid #ccc}.uib-weeks .btn{color:#6f6f6f;background-color:#f2f2f2;padding:0;height:42px;border-top:none;border-right:none}.uib-weeks .btn:focus{background-color:#323232;color:#fff;border-color:#323232}.uib-weeks .btn:active{background-color:#323232;color:#fff;border-color:#323232}.uib-weeks .btn:hover{background-color:#323232;color:#fff;border-color:#323232}.uib-weeks .btn-info{border-color:#ccc}.uib-weeks .current{color:#fff;background-color:#6f6f6f;border:1px solid #6f6f6f}.uib-weeks .text-info{color:#fff}.uib-weeks .secondary{color:#ccc;background-color:#fff}.uib-weeks .secondary .text-muted{color:#ccc}.uib-weeks .last-day{border-right:1px solid #ccc}.uib-weeks .btn.active{background-color:#258900;border-color:#258900;box-shadow:none;color:#fff}.uib-weeks .btn.active .text-info{color:#fff}.uib-datepicker-popup.ng-enter{-webkit-transition:opacity .25s ease-in-out;-o-transition:opacity .25s ease-in-out;transition:opacity .25s ease-in-out;opacity:0}.uib-datepicker-popup.ng-leave{-webkit-transition:opacity .25s ease-in-out;-o-transition:opacity .25s ease-in-out;transition:opacity .25s ease-in-out;opacity:1}.uib-datepicker-popup.ng-enter.ng-enter-active{opacity:1}.uib-datepicker-popup.ng-leave.ng-leave-active{opacity:0}.yellow-border{border:2px solid #fce07f}.rightDate .uib-datepicker-popup.dropdown-menu{padding:15px 28px!important;top:-114px!important;overflow:visible}.rightDate .container-row{border-right:1px solid #6f6f6f}.rightDate .uib-daypicker::after{bottom:82px;left:-43px!important;right:auto!important;transform:rotate(-45deg)!important}.leftDate .uib-datepicker-popup.dropdown-menu{padding:15px 28px!important;top:-114px!important;overflow:visible}.leftDate .container-row{border-right:1px solid #6f6f6f}@media (min-width:1200px){.rightDate .uib-datepicker-popup.dropdown-menu{left:277px!important}.leftDate .uib-datepicker-popup.dropdown-menu{left:-360px!important}}@media (max-width:1199px){.rightDate .uib-datepicker-popup.dropdown-menu{left:309px!important}.leftDate .uib-datepicker-popup.dropdown-menu{left:-360px!important}}@media (max-width:991px){.rightDate .uib-datepicker-popup.dropdown-menu{left:356px!important}.leftDate .uib-datepicker-popup.dropdown-menu{left:-360px!important}}.contrasto-on .data-green{border:2px solid #000!important}.contrasto-on .datepicker-label{color:#000}.contrasto-on .datepicker-input-box{color:#000;border:1px solid #000}.contrasto-on .datepicker-input-box::-webkit-input-placeholder{color:#000}.contrasto-on .datepicker-input-box:focus{border:2px solid #000;outline:0;box-shadow:none!important}.contrasto-on .datepicker-input-box[disabled]{cursor:auto;background-color:#000;color:#fff;opacity:1}.contrasto-on .has-error .datepicker-input-box{border:2px solid #000;-webkit-box-shadow:inset 0 0 0 #000;box-shadow:inset 0 0 0 #000}.contrasto-on .has-error .datepicker-input-box:focus{border:2px solid #000}.contrasto-on .datepicker-error-message{color:#000}.contrasto-on .datepicker-button{cursor:pointer;color:#000}.contrasto-on .datepicker-button[role=\"\"]{color:#fff;cursor:default;opacity:1}.contrasto-on .uib-datepicker-popup.dropdown-menu{border:none!important;border-radius:0!important;padding:0!important}.contrasto-on .uib-day{min-width:42px;max-width:42px}.contrasto-on .uib-daypicker{width:300px!important}.contrasto-on .uib-daypicker .btn{border-radius:0!important}.contrasto-on .uib-daypicker #datepicker-header{border-top:1px solid #000}.contrasto-on .uib-daypicker #datepicker-header .btn:focus{background-color:#000;color:#fff;border-color:#000}.contrasto-on .uib-daypicker #datepicker-header .btn:active{background-color:#000;color:#fff;border-color:#000}.contrasto-on .uib-daypicker #datepicker-header .btn:hover{background-color:#000;color:#fff;border-color:#000}.contrasto-on .uib-daypicker .pull-left{padding-top:8px;padding-bottom:8px;min-width:auto;color:#000;border-top:none;border-bottom:none;border-left:none;border-right:none}.contrasto-on .uib-daypicker .border-r-l{border-left:1px solid #000!important;border-right:1px solid #000!important}.contrasto-on .uib-daypicker .border-r{border-right:1px solid #000!important}.contrasto-on .uib-daypicker .uib-title{padding-top:8px;padding-bottom:8px;min-width:auto;border:none;color:#000;font-size:.84em;cursor:default;pointer-events:none;text-transform:uppercase}.contrasto-on .uib-daypicker .uib-title strong{font-weight:400!important}.contrasto-on .uib-daypicker .pull-right{padding-top:8px;padding-bottom:8px;min-width:auto;color:#000;border-top:none;border-bottom:none;border-left:none;border-right:none}.contrasto-on .uib-daypicker .border-l{border-left:1px solid #000!important}.contrasto-on .uib-daypicker #datepicker-weeks{color:#fff;background-color:#000;border:1px solid #000;border-right:2px solid #000}.contrasto-on .uib-weeks{border-right:1px solid #ccc}.contrasto-on .uib-weeks .btn{color:#fff;background-color:#000;border-top:none;border-right:none}.contrasto-on .uib-weeks .btn:focus{background-color:#fff;color:#000;border-color:#fff}.contrasto-on .uib-weeks .btn:active{background-color:#fff;color:#000;border-color:#fff}.contrasto-on .uib-weeks .btn:hover{background-color:#fff;color:#000;border-color:#fff}.contrasto-on .uib-weeks .btn-info{border-color:#ccc}.contrasto-on .uib-weeks .current{color:#000;background-color:#fff;border:1px solid #fff}.contrasto-on .uib-weeks .text-info{color:#000}.contrasto-on .uib-weeks .secondary{color:#000;background-color:#fff}.contrasto-on .uib-weeks .secondary .text-muted{color:#000}.contrasto-on .uib-weeks .last-day{border-right:1px solid #ccc}.contrasto-on .uib-weeks .btn.active{background-color:#fff;border-color:#fff;box-shadow:none;color:#000}.contrasto-on .uib-weeks .btn.active .text-info{color:#000}.contrasto-on .yellow-border{border:2px solid #000}.contrasto-on .rightDate .uib-datepicker-popup.dropdown-menu{padding:15px 28px!important;top:-114px!important;overflow:visible}.contrasto-on .rightDate .container-row{border-right:1px solid #6f6f6f}.contrasto-on .rightDate .uib-daypicker::after{bottom:82px;left:-43px!important;right:auto!important;transform:rotate(-45deg)!important}.contrasto-on .leftDate .uib-datepicker-popup.dropdown-menu{padding:15px 28px!important;top:-114px!important;overflow:visible}.contrasto-on .leftDate .container-row{border-right:1px solid #6f6f6f}@media (min-width:1200px){.contrasto-on .rightDate .uib-datepicker-popup.dropdown-menu{left:277px!important}.contrasto-on .leftDate .uib-datepicker-popup.dropdown-menu{left:-360px!important}}@media (max-width:1199px){.contrasto-on .rightDate .uib-datepicker-popup.dropdown-menu{left:309px!important}.contrasto-on .leftDate .uib-datepicker-popup.dropdown-menu{left:-360px!important}}@media (max-width:991px){.contrasto-on .rightDate .uib-datepicker-popup.dropdown-menu{left:356px!important}.contrasto-on .leftDate .uib-datepicker-popup.dropdown-menu{left:-360px!important}} /*# sourceMappingURL=nbp-datepicker-html5.component.css.map */ "],
        providers: [NBP_DATE_CONTROL_VALUE_ACCESSOR, NBP_INPUT_ELEMENT_BASE]
    }),
    __param(0, Optional()), __param(0, Inject(NG_VALIDATORS)),
    __param(1, Optional()), __param(1, Inject(NG_ASYNC_VALIDATORS)),
    __metadata("design:paramtypes", [Array, Array])
], NbpDatepickerHtml5Component);
export { NbpDatepickerHtml5Component };
