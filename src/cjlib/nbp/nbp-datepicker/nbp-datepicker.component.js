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
import { Component, ElementRef, Input, Output, EventEmitter, HostBinding, ViewChild, Optional, Inject, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { coerceBooleanProperty } from './../../utility/lib-utility';
import { NbpInputElementBase } from './../nbp-commons/nbp-input-element-base';
import { NbpDatepickerItI18n, I18n, NbpItDateParserFormatter, NbpDatepickerConfiguration } from './nbp-datepicker.services';
import { NgbInputDatepicker, NgbDatepickerI18n, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
/**
 * Provider Expression that allows nbp-datepicker to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
export var NBP_DATEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NbpDatepickerComponent; }),
    multi: true
};
export var NBP_INPUT_ELEMENT_BASE = {
    provide: NbpInputElementBase,
    useExisting: forwardRef(function () { return NbpDatepickerComponent; }),
    multi: true
};
/** intero autogenerato usato per id unici per nbpCombo component */
var nextId = 0;
var NbpDatepickerComponent = (function (_super) {
    __extends(NbpDatepickerComponent, _super);
    function NbpDatepickerComponent(validatori, asyncValidatori, element) {
        var _this = _super.call(this, validatori, asyncValidatori) || this;
        _this.validatori = validatori;
        _this.asyncValidatori = asyncValidatori;
        _this.element = element;
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
         * Valore di Default: "dd.mm.yyyy"
         */
        _this.placeholder = 'dd.mm.yyyy';
        _this.ngbMaxDate = { day: 1, month: 1, year: 2050 };
        _this.nbpMaxDate = new Date(_this.ngbMaxDate.year, (_this.ngbMaxDate.month - 1), _this.ngbMaxDate.day);
        _this.ngbMinDate = { day: 1, month: 1, year: 1970 };
        _this.nbpMinDate = new Date(_this.ngbMinDate.year, (_this.ngbMinDate.month - 1), _this.ngbMinDate.day);
        _this.nbpOnNavigate = new EventEmitter();
        return _this;
    }
    Object.defineProperty(NbpDatepickerComponent.prototype, "maxDate", {
        /**
         * La massima data accettata dal componente e visualizzata nel calendario
         * Valore di Default: 01.01.2050
         */
        get: function () {
            return this.nbpMaxDate;
        },
        set: function (maxDate) {
            this.nbpMaxDate = maxDate;
            this.ngbMaxDate = this.parseDateStructFromDate(maxDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbpDatepickerComponent.prototype, "minDate", {
        /**
         * La minima data accettata dal componente e visualizzata nel calendario
         * Valore di Default: 01.01.1970
         */
        get: function () {
            return this.nbpMinDate;
        },
        set: function (minDate) {
            this.nbpMinDate = minDate;
            this.ngbMinDate = this.parseDateStructFromDate(minDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbpDatepickerComponent.prototype, "disabled", {
        /**
         * Flag che abilita/disabilita le funzionalità associate al datepicker
         */
        get: function () { return this._nbpDisabled; },
        set: function (value) { this._nbpDisabled = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbpDatepickerComponent.prototype, "required", {
        /**
         * Flag che imposta come obbligatorio o meno il campo di input (disabilitato) associato al datepicker
         */
        get: function () { return this._nbpRequired; },
        set: function (value) { this._nbpRequired = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    NbpDatepickerComponent.prototype.toggleOpening = function () {
        if (this.ngbDatepicker.isOpen()) {
            this.ngbDatepicker.close();
        }
        else {
            this.ngbDatepicker.open();
            // EVENTUALE HOOK PER AGGIUNGERE I PULSANTI PER AVANTI\INDIETRO  ANNO
            // let buttons = document.querySelector('ngb-datepicker-navigation > button');
        }
    };
    NbpDatepickerComponent.prototype._ngbModelChanged = function (event) {
        this.value = this.parseDateFromDateStruct(event);
    };
    NbpDatepickerComponent.prototype.parseDateFromDateStruct = function (event) {
        return event ? new Date(event.year, (event.month - 1), event.day) : event;
    };
    NbpDatepickerComponent.prototype.parseDateStructFromDate = function (value) {
        return (value && value instanceof Date)
            ? { day: value.getUTCDate(), month: (value.getUTCMonth() + 1), year: value.getUTCFullYear() }
            : value;
    };
    NbpDatepickerComponent.prototype.writeValue = function (value) {
        this._ngbModel = this.parseDateStructFromDate(value);
        this.value = value;
    };
    NbpDatepickerComponent.prototype._onNavigate = function (navigateEvent) {
        var _current = navigateEvent.current
            ? new Date(navigateEvent.current.year, (navigateEvent.current.month - 1), 1)
            : navigateEvent.current;
        var _next = navigateEvent.next.year
            ? new Date(navigateEvent.next.year, (navigateEvent.next.month - 1), 1)
            : navigateEvent.next.year;
        this.nbpOnNavigate.emit({ current: _current, next: _next });
    };
    return NbpDatepickerComponent;
}(NbpInputElementBase));
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpDatepickerComponent.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpDatepickerComponent.prototype, "id", void 0);
__decorate([
    HostBinding('class.nbp-show-validation'),
    Input(),
    __metadata("design:type", Boolean)
], NbpDatepickerComponent.prototype, "nbpShowValidation", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpDatepickerComponent.prototype, "placeholder", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpDatepickerComponent.prototype, "nbpErrorMessage", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Date])
], NbpDatepickerComponent.prototype, "maxDate", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Date])
], NbpDatepickerComponent.prototype, "minDate", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpDatepickerComponent.prototype, "disabled", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpDatepickerComponent.prototype, "required", null);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpDatepickerComponent.prototype, "nbpOnNavigate", void 0);
__decorate([
    ViewChild('ngbDatepicker'),
    __metadata("design:type", NgbInputDatepicker)
], NbpDatepickerComponent.prototype, "ngbDatepicker", void 0);
__decorate([
    ViewChild(NgModel),
    __metadata("design:type", NgModel)
], NbpDatepickerComponent.prototype, "model", void 0);
NbpDatepickerComponent = __decorate([
    Component({
        selector: 'nbp-datepicker',
        template: "<div class=\"form-group\"><div class=\"input-group\"><input #ngbDatepicker=\"ngbDatepicker\" ngbDatepicker [id]=\"id\" [name]=\"name\" [ngModel]=\"_ngbModel\" (ngModelChange)=\"_ngbModelChanged($event)\" [required]=\"required\" [disabled]=\"disabled\" [maxDate]=\"ngbMaxDate\" [minDate]=\"ngbMinDate\" (navigate)=\"_onNavigate($event)\" navigation=\"arrows\" class=\"form-control\" placeholder=\"dd.mm.yyyy\" required> <i class=\"icon-calendar button-icon\" [ngClass]=\"{'disabled': disabled}\" (click)=\"toggleOpening()\"></i></div></div>",
        styles: [":host::ng-deep .form-inline{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:1em}:host::ng-deep .form-inline .form-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-flow:row wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:0}:host::ng-deep .input-group{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}:host::ng-deep .input-group .form-control,:host::ng-deep .input-group-addon,:host::ng-deep .input-group-btn{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host::ng-deep .form-control{display:block;width:100%;height:3.125em;color:#464a4c;background-color:#fff;background-image:none;background-clip:padding-box;border-radius:.15em!important;transition:none!important;-webkit-box-shadow:none!important;box-shadow:none!important;border:1px solid #323232!important}:host::ng-deep .form-control:active:not([disabled]),:host::ng-deep .form-control:focus:not([disabled]){border:1px solid #258900!important}:host::ng-deep .form-control[disabled]{border:1px solid #ccc!important;color:#ccc;user-select:none}:host(.ng-dirty.ng-invalid.nbp-show-validation)::ng-deep .form-control:not([disabled]){border:1px solid #c63200!important}:host::ng-deep .input-group-addon{padding:.5em .75em;margin-bottom:0;font-size:1em;font-weight:400;line-height:1.25;color:#258900;text-align:center;background-color:#fff!important;border-top-color:rgba(0,0,0,.15);border-top-style:solid;border-top-width:1px;border-right-color:rgba(0,0,0,.15);border-right-style:solid;border-right-width:1px;border-bottom-color:rgba(0,0,0,.15);border-bottom-style:solid;border-bottom-width:1px;border-left-style:none!important;border-left-width:0!important;border-left-color:none!important}:host::ng-deep .input-group-addon img{width:1.2em;height:1em;cursor:pointer}:host::ng-deep .form-control+.input-group-addon:not(:first-child){border-left:0}:host::ng-deep .button-calendar{background-color:#fff;border-bottom:1px solid #d3d3d3;border-top:1px solid #d3d3d3;border-right:1px solid #d3d3d3;border-left:none;color:#258900;right:21px;position:relative;z-index:2;margin-right:-21px}:host::ng-deep .dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10em;padding:.5em 0;margin:.125em 0 0;font-size:1em;color:#1d1d1d;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;padding:0;top:24px;left:0;border-radius:0!important;border:none!important}:host::ng-deep .d-inline-block{display:inline-block!important}:host::ng-deep .rounded{border-radius:.25em}:host::ng-deep .ngb-dp-header{height:4em!important;margin-bottom:-1.5em!important;border-bottom:none!important}:host::ng-deep .pt-1{padding-top:0!important;height:4.25em;margin-bottom:-2em}:host::ng-deep .rounded-top{border-top-right-radius:.25em;border-top-left-radius:.25em;border-radius:0!important}:host::ng-deep .bg-faded{background-color:#fff!important}:host::ng-deep ngb-datepicker-navigation{height:2em;line-height:1.85em}:host::ng-deep .justify-content-between{-webkit-box-pack:justify!important;-ms-flex-pack:justify!important;justify-content:space-between!important}:host::ng-deep .d-flex{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}:host::ng-deep .btn-link{cursor:pointer;outline:#d3d3d3 solid 1px!important}:host::ng-deep .btn-link,:host::ng-deep .btn-link:active,:host::ng-deep .btn-link:focus{border-color:transparent}:host::ng-deep .btn-link,:host::ng-deep .btn-link.active,:host::ng-deep .btn-link:active,:host::ng-deep .btn-link:disabled{background-color:transparent}:host::ng-deep .btn-link{font-weight:400;color:#258900;border-radius:0}:host::ng-deep button,:host::ng-deep input,:host::ng-deep select,:host::ng-deep textarea{line-height:inherit}:host::ng-deep [role=button],:host::ng-deep a,:host::ng-deep area,:host::ng-deep button,:host::ng-deep input,:host::ng-deep label,:host::ng-deep select,:host::ng-deep summary,:host::ng-deep textarea{-ms-touch-action:manipulation;touch-action:manipulation}:host::ng-deep button{-webkit-appearance:button}:host::ng-deep button,:host::ng-deep select{text-transform:none}:host::ng-deep button,:host::ng-deep input{overflow:visible}:host::ng-deep button,:host::ng-deep input,:host::ng-deep optgroup,:host::ng-deep select,:host::ng-deep textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}:host::ng-deep .ngb-dp-navigation-chevron::before{border-style:solid;border-width:.1em .1em 0 0!important;content:'';display:inline-block;height:.75em!important;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);-ms-transform:rotate(-135deg);width:.75em!important;margin:0 0 0 .5em!important;color:grey}:host::ng-deep .ngb-dp-navigation-chevron.right:before{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);margin:0 .5em 0 0!important}:host::ng-deep .d-block{display:block!important}:host::ng-deep ngb-datepicker-navigation-select.d-block{width:9em!important}:host::ng-deep select{padding:.25em .5em;font-size:.875em;line-height:1.25;height:inherit;width:50%}:host::ng-deep .d-inline-block{display:inline-block!important}:host::ng-deep select.custom-select.d-inline-block{padding:.25em .5rem!important;font-size:.875em!important;line-height:1.25;height:inherit;width:50%}:host::ng-deep .custom-select{display:inline-block;max-width:100%;height:calc(4.25em);padding:.375em 1.75em .375em .75em;line-height:1.25;color:#464a4c;vertical-align:middle;border:1px solid rgba(0,0,0,.15);border-radius:.25em;-moz-appearance:none;-webkit-appearance:none}:host::ng-deep .px-1{padding-left:0!important;padding-right:0!important}:host::ng-deep .pb-1{padding-bottom:.25em!important}:host::ng-deep .ngb-dp-month:first-child{margin-left:0!important}:host::ng-deep .ngb-dp-month{pointer-events:none}:host::ng-deep .ml-3{margin-left:1em!important}:host::ng-deep .ngb-dp-day,:host::ng-deep .ngb-dp-week-number,:host::ng-deep .ngb-dp-weekday{width:2em!important;height:2em!important}:host::ng-deep .ngb-dp-day{position:relative;box-sizing:border-box}:host::ng-deep .ngb-dp-week.d-flex:not(:first-child){border-top:.5px solid #d3d3d3;border-bottom:.5px solid #d3d3d3;border-right:1px solid #d3d3d3;border-left:1px solid #d3d3d3}:host::ng-deep .ngb-dp-week.d-flex:first-child{border-top:1px solid #d3d3d3;border-right:1px solid #d3d3d3;border-bottom:.5px solid #d3d3d3;border-left:1px solid #d3d3d3}:host::ng-deep ngb-datepicker-navigation.d-flex{height:2.5em!important;line-height:1.8em!important;border-top:1px solid #d3d3d3;border-right:1px solid #d3d3d3;border-left:1px solid #d3d3d3}:host::ng-deep .ngb-dp-week-number,:host::ng-deep .ngb-dp-weekday{line-height:2em!important}:host::ng-deep .text-info{color:#5bc0de!important}:host::ng-deep .font-italic{font-style:italic}:host::ng-deep .outside{opacity:.5}:host::ng-deep ngb-dp-day>div{text-align:center;width:2em;height:2em;line-height:2em;border-radius:0!important}:host::ng-deep div[ngbdatepickerdayview]{border-radius:0!important;box-sizing:border-box;text-align:center;width:inherit!important;height:inherit!important;line-height:2.6em!important;vertical-align:middle}:host::ng-deep .text-muted{color:#636c72!important}:host::ng-deep .btn-secondary{color:#258900;background-color:#fff;border-color:#ccc;font-weight:700;font-size:.8em}:host::ng-deep .text-white{color:#fff!important}:host::ng-deep .bg-primary{background-color:#258900!important}:host::ng-deep .bg-primary::before{border-bottom:8px solid #fff;border-left:8px solid transparent;border-right:8px solid transparent;position:absolute;top:0;right:-8px;content:'';display:inline-block;width:0;height:0;margin:0;padding:0;transform:rotate(45deg);transform-origin:top}:host::ng-deep .text-center{text-align:center!important}:host::ng-deep .small,:host::ng-deep small{font-size:80%;font-weight:400}:host::ng-deep .ngb-dp-months.pb-1{padding:0!important}:host::ng-deep .input-group>input.form-control{padding-left:.625em;padding-right:2.5em}:host::ng-deep .ngb-dp-day:not(:first-child)>.btn-secondary{border-left:1px solid #d3d3d3}:host::ng-deep .ngb-dp-weekday.font-italic{font-family:'Arial Bold',Arial;font-weight:700;font-style:normal!important;font-size:.75em;color:#6f6f6f!important;text-align:center;text-transform:uppercase}:host::ng-deep button.btn-link{color:#258900!important}:host::ng-deep .collapsed{margin-bottom:-2em!important}:host::ng-deep .ngb-dp-month-name{font-size:.8em!important;padding-top:1em!important;font-weight:700;text-transform:uppercase;color:#258900;position:absolute;text-align:center!important;top:0;left:3.1em!important;height:3.2em!important;width:11.4em;line-height:1.42857143em!important;word-wrap:break-word;word-break:break-word}:host::ng-deep .ngb-dp-weekday{width:2.666666666666667em!important}.button-icon{cursor:pointer;position:relative;top:.001em;right:1.6em;z-index:3;color:#258900;font-size:1.5em;line-height:2.083em}.button-icon.disabled{cursor:not-allowed;pointer-events:none;color:#ccc} /*# sourceMappingURL=nbp-datepicker.component.css.map */ "],
        providers: [
            I18n,
            NbpDatepickerConfiguration,
            { provide: NgbDatepickerI18n, useClass: NbpDatepickerItI18n },
            { provide: NgbDateParserFormatter, useClass: NbpItDateParserFormatter },
            NBP_DATEPICKER_CONTROL_VALUE_ACCESSOR,
            NBP_INPUT_ELEMENT_BASE
        ]
    }),
    __param(0, Optional()), __param(0, Inject(NG_VALIDATORS)),
    __param(1, Optional()), __param(1, Inject(NG_ASYNC_VALIDATORS)),
    __metadata("design:paramtypes", [Array, Array, ElementRef])
], NbpDatepickerComponent);
export { NbpDatepickerComponent };
