/**
  * @license Customer journey v0.0.7
  */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/platform-browser/animations'), require('@angular/forms'), require('@ng-bootstrap/ng-bootstrap'), require('rxjs/Observable'), require('rxjs/add/observable/of'), require('rxjs/add/operator/map'), require('@angular/platform-browser'), require('@angular/animations'), require('rxjs/BehaviorSubject'), require('rxjs/add/operator/concatMap'), require('rxjs/add/operator/catch'), require('rxjs/add/operator/debounceTime'), require('rxjs/add/operator/filter'), require('@angular/common/http'), require('@angular/router'), require('rxjs/ReplaySubject'), require('rxjs/add/observable/fromEvent'), require('rxjs/add/operator/do')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/platform-browser/animations', '@angular/forms', '@ng-bootstrap/ng-bootstrap', 'rxjs/Observable', 'rxjs/add/observable/of', 'rxjs/add/operator/map', '@angular/platform-browser', '@angular/animations', 'rxjs/BehaviorSubject', 'rxjs/add/operator/concatMap', 'rxjs/add/operator/catch', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/filter', '@angular/common/http', '@angular/router', 'rxjs/ReplaySubject', 'rxjs/add/observable/fromEvent', 'rxjs/add/operator/do'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.cjlib = global.ng.cjlib || {}),global.ng.core,global.ng.common,global.ng['platform-browser'].animations,global.ng.forms,global.ng.bootstrap,global.Rx,global.Rx.Observable,global.Rx.Observable.prototype,global.ng.platformBrowser,global.ng.animations,global.Rx,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.ng.common.http,global.ng.router,global.Rx));
}(this, (function (exports,_angular_core,_angular_common,_angular_platformBrowser_animations,_angular_forms,_ngBootstrap_ngBootstrap,rxjs_Observable,rxjs_add_observable_of,rxjs_add_operator_map,_angular_platformBrowser,_angular_animations,rxjs_BehaviorSubject,rxjs_add_operator_concatMap,rxjs_add_operator_catch,rxjs_add_operator_debounceTime,rxjs_add_operator_filter,_angular_common_http,_angular_router,rxjs_ReplaySubject) { 'use strict';

var APP_CONFIG = new _angular_core.InjectionToken('app.config');

/**
 * Enum per la definizione del colore dei componenti della libreria
 * PRIMARY - Green
 * SECONDARY - White
 * DEFAULT - Grey
 * OUTLINE - Background transparent
 */
/**
 * Enum per la definizione del colore dei componenti della libreria
 * PRIMARY - Green
 * SECONDARY - White
 * DEFAULT - Grey
 * OUTLINE - Background transparent
 */ 
(function (NbpStyle) {
    NbpStyle[NbpStyle["PRIMARY"] = 0] = "PRIMARY";
    NbpStyle[NbpStyle["SECONDARY"] = 1] = "SECONDARY";
    NbpStyle[NbpStyle["DEFAULT"] = 2] = "DEFAULT";
    NbpStyle[NbpStyle["OUTLINE"] = 3] = "OUTLINE";
})(exports.NbpStyle || (exports.NbpStyle = {}));
/**
 * Enum per la definizione della dimensione dei componenti della libreria
 * LG - Large
 * MD - Medium
 */

(function (NbpSize) {
    NbpSize[NbpSize["SM"] = 0] = "SM";
    NbpSize[NbpSize["LG"] = 1] = "LG";
    NbpSize[NbpSize["MD"] = 2] = "MD";
})(exports.NbpSize || (exports.NbpSize = {}));

(function (NbpPipe) {
    NbpPipe[NbpPipe["CURRENCY"] = 0] = "CURRENCY";
    NbpPipe[NbpPipe["DATE"] = 1] = "DATE";
    NbpPipe[NbpPipe["DECIMAL"] = 2] = "DECIMAL";
    NbpPipe[NbpPipe["LOWERCASE"] = 3] = "LOWERCASE";
    NbpPipe[NbpPipe["PERCENT"] = 4] = "PERCENT";
    NbpPipe[NbpPipe["UPPERCASE"] = 5] = "UPPERCASE";
})(exports.NbpPipe || (exports.NbpPipe = {}));
/**
 * Enum per la definizione del canale applicativo
 */

(function (NbpChannel) {
    NbpChannel[NbpChannel["ABC"] = 0] = "ABC";
    NbpChannel[NbpChannel["INTRANET"] = 1] = "INTRANET";
    NbpChannel[NbpChannel["IB"] = 2] = "IB";
})(exports.NbpChannel || (exports.NbpChannel = {}));

/**
 * Enum necessaria per la definizione del tipo di pulsante
 */
/**
 * Enum necessaria per la definizione del tipo di pulsante
 */ 
(function (NbpButtonType) {
    NbpButtonType[NbpButtonType["ACTION"] = 0] = "ACTION";
    NbpButtonType[NbpButtonType["SELECT"] = 1] = "SELECT";
    NbpButtonType[NbpButtonType["GENERATIVE"] = 2] = "GENERATIVE";
})(exports.NbpButtonType || (exports.NbpButtonType = {}));

/** Coerces a data-bound value (typically a string) to a boolean. */
/** Coerces a data-bound value (typically a string) to a boolean. */ function coerceBooleanProperty(value) {
    return value != null && "" + value !== 'false';
}
function getPropertyValueByPath(obj, stringPath) {
    return stringPath.split('.').reduce(function (objectPartialData, property) { return objectPartialData[property]; }, obj);
}

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Componente per l’inserimento di pulsanti nella pagina. La prima versione del
 * componente conterrà un insieme minimale delle funzionalità, ad esempio sarà possibile
 * utilizzare solo button senza icona.
 *
 */
exports.NbpButtonComponent = (function () {
    function NbpButtonComponent() {
        /**
         * (Opzionale) Enum per impostare lo stile del pulsante.
         * "DEFAULT" | "PRIMARY" | "SECONDRY" | "OUTLINE"
         *  Valore default: "DEFAULT"
         */
        this.nbpStyle = exports.NbpStyle.DEFAULT;
        /**
          * (Opzionale) Enum, che indica la dimensione dei pulsanti.
          * Proprietà che agisce solo sui pulsanti di tipo SELECT (vedi Style Guide)
          * “LG” | “MD”
          * Valore default : “MD”
          */
        this.nbpSize = exports.NbpSize.MD;
        /**
         * (Opzionale) Enum, che indica la tipologia dei pulsanti.
         * "ACTION" | "SELECT" | "GENERATIVE"
         * Valore default : “ACTION”
         */
        this.nbpType = exports.NbpButtonType.ACTION;
        /**
         * Evento emesso al click sul pulsante.
         * @param {EventEmitter<any>}  nbpClick
         */
        this.nbpClick = new _angular_core.EventEmitter();
        this._isSelectButtonChecked = false;
        this._style = exports.NbpStyle;
        this._type = exports.NbpButtonType;
        this._size = exports.NbpSize;
        this._isSelectButtonSizeLarge = false;
    }
    Object.defineProperty(NbpButtonComponent.prototype, "disabled", {
        get: function () { return this._nbpDisabled; },
        set: function (value) { this._nbpDisabled = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbpButtonComponent.prototype, "nbpChecked", {
        /**
         * (Opzionale) Agiste solo sui button con nbpType = 'SELECT'
         */
        get: function () { return this._isSelectButtonChecked; },
        set: function (value) { this._isSelectButtonChecked = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    NbpButtonComponent.prototype.ngOnInit = function () {
        this.nbpSize = this.nbpSize !== exports.NbpSize.SM ? this.nbpSize : exports.NbpSize.MD;
        this._configureButton();
    };
    NbpButtonComponent.prototype._onClickButton = function () {
        this._isSelectButtonChecked = exports.NbpButtonType.SELECT === this.nbpType ? !this._isSelectButtonChecked : false;
        this.nbpClick.emit();
    };
    NbpButtonComponent.prototype._configureButton = function () {
        this._ifSelectButtonPrimarySetDefault();
    };
    NbpButtonComponent.prototype._ifSelectButtonPrimarySetDefault = function () {
        if (this.nbpStyle === this._style.PRIMARY && this.nbpType === this._type.SELECT) {
            this.nbpStyle = this._style.DEFAULT;
        }
    };
    return NbpButtonComponent;
}());
__decorate$2([
    _angular_core.Input(),
    __metadata("design:type", String)
], exports.NbpButtonComponent.prototype, "nbpLabel", void 0);
__decorate$2([
    _angular_core.Input(),
    __metadata("design:type", String)
], exports.NbpButtonComponent.prototype, "nbpIcon", void 0);
__decorate$2([
    _angular_core.HostBinding('class.nbp-global-disable'),
    _angular_core.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], exports.NbpButtonComponent.prototype, "disabled", null);
__decorate$2([
    _angular_core.Input(),
    __metadata("design:type", Number)
], exports.NbpButtonComponent.prototype, "nbpStyle", void 0);
__decorate$2([
    _angular_core.Input(),
    __metadata("design:type", Number)
], exports.NbpButtonComponent.prototype, "nbpSize", void 0);
__decorate$2([
    _angular_core.Input(),
    __metadata("design:type", Number)
], exports.NbpButtonComponent.prototype, "nbpType", void 0);
__decorate$2([
    _angular_core.Output(),
    __metadata("design:type", _angular_core.EventEmitter)
], exports.NbpButtonComponent.prototype, "nbpClick", void 0);
__decorate$2([
    _angular_core.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], exports.NbpButtonComponent.prototype, "nbpChecked", null);
exports.NbpButtonComponent = __decorate$2([
    _angular_core.Component({
        selector: 'nbp-button',template: "<button class=\"btn button\" (click)=\"_onClickButton()\" [disabled]=\"disabled\" [ngClass]=\"{'default': nbpStyle === _style.DEFAULT, 'primary':  nbpStyle === _style.PRIMARY, 'secondary':  nbpStyle === _style.SECONDARY, 'outline' : nbpStyle === _style.OUTLINE, 'select' : nbpType === _type.SELECT, 'lg' : nbpSize === _size.LG,  'on': nbpChecked }\"><div [ngClass]=\"{'allineamento-select':nbpType === _type.SELECT}\"><span *ngIf=\"!!nbpIcon\" class=\"icon button-icon\" [ngClass]=\"nbpIcon\"></span> <span [ngClass]=\"{'button-label-icon': nbpIcon , 'button-label': !nbpIcon}\">{{nbpLabel}}</span></div></button>",
        styles: [".btn{border-radius:2px!important}.button{font-weight:700;font-size:.75em;padding-top:1em;padding-bottom:1em;line-height:1;outline:0!important;text-transform:uppercase;height:3.3334em;min-width:6.875em;box-shadow:none!important}.button.primary{color:#fff;background-color:#258900;border-color:#258900}.button.primary:hover:not(.select){background-color:#323232;color:#fff;border-color:#323232}.button.default{color:#6f6f6f;background-color:#f8f8f8;border-color:#f2f2f2}.button.default:hover:not(.select){background-color:#323232;color:#fff;border-color:#323232}.button.secondary{color:#6f6f6f;background-color:#fff;border-color:#6f6f6f}.button.secondary:hover:not(.select){background-color:#323232;color:#fff;border-color:#323232}.button.outline{color:#f2f2f2;background-color:Transparent;background-repeat:no-repeat;border-color:#f2f2f2}.button.outline:hover:not(.select){background-color:#258900;color:#f2f2f2;border-color:#258900}.btn.primary[disabled]:hover{color:#fff;background-color:#258900!important;border-color:#258900!important;cursor:not-allowed}.btn.default[disabled]{opacity:1!important;background-color:#fff!important;color:#ccc}.btn.default[disabled]:hover{color:#ccc;background-color:#fff!important;border-color:#f2f2f2!important;cursor:not-allowed}.btn.secondary[disabled]:hover{color:#6f6f6f;background-color:#fff!important;border-color:#f2f2f2!important;cursor:not-allowed}.btn.outline[disabled]{color:#ccc;background-color:Transparent!important;border-color:#ccc!important;cursor:not-allowed}.btn.outline[disabled]:hover{color:#ccc;background-color:Transparent!important;border-color:#ccc!important;cursor:not-allowed}.button-icon{font-size:2em!important;display:table-cell!important;top:-.2125em;position:relative}.button-label-icon{padding-left:.625em;padding-bottom:.8125em;display:table-cell!important;vertical-align:middle}.button.selection-button{width:29.6875em;height:5.625em;background-color:#f2f2f2;border:none;border-radius:1.5625em!important;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;font-size:1em;color:#258900;text-align:left}.button.selection-button:hover{background-color:#258900;color:#fff}.button.selection-button .button-label-icon{padding-bottom:0;padding-left:4.8em;text-transform:none;font-weight:400}.button.selection-button .button-icon{top:.12em;left:1em}.button.action{color:#323232;background-color:#f2f2f2;border-color:#f2f2f2}.button.action .button-icon{color:#258900}.button.action:hover{background-color:#323232;color:#fff;border:none}.button.action:hover .button-icon{color:#fff}.btn.action[disabled]{color:#6f6f6f;background-color:#f8f8f8!important;border-color:#f2f2f2!important;opacity:.5}.btn.action[disabled]:hover{color:#6f6f6f;background-color:#f8f8f8!important;border:1px solid #f2f2f2!important;cursor:default}.btn.action[disabled]:hover .button-icon{color:#258900}.btn.action[disabled].green .button-icon{color:#258900!important}.button.select{height:4.167em;min-width:7em;border-radius:2.5625em!important}.button.select.on{background-color:#258900!important;color:#fff!important}.button.select .button-icon{left:1em;top:0}.button.select .button-label-icon{padding-bottom:.1125em;padding-left:3.225em;padding-right:3.225em}.button.select .button-label{padding-bottom:.1125em;padding-left:3.225em;padding-right:3.225em}.button.select[disabled]{opacity:1!important;background-color:#fff!important;color:#ccc}.button.select[disabled]:hover{opacity:1!important;background-color:#fff!important;color:#ccc}.button.select[disabled] .button-icon{color:#f2f2f2}.button.select.lg{color:#258900;height:5.625em!important;min-width:14.375em!important;border-radius:1.5625em!important;font-weight:400;font-size:1em;text-transform:uppercase;box-shadow:none!important}.button.select.lg.outline{color:#f2f2f2;background-color:Transparent;background-repeat:no-repeat;border-color:#f2f2f2}.button.select.lg.outline:hover{color:#f2f2f2;background-color:Transparent;background-repeat:no-repeat;border-color:#f2f2f2}.button.select.lg.outline .button-icon{color:#f2f2f2}.button.select.lg.on{background-color:#258900!important;color:#fff!important}.button.select.lg.on .button-icon{color:#fff!important}.button.select.lg .button-icon{left:0;top:0;font-size:1.875em!important;color:#258900}.button.select.lg .button-label-icon{padding-left:2.225em;white-space:normal;width:.0625em;padding-bottom:0;text-transform:capitalize}.button.select.lg .allineamento-select{text-align:justify;vertical-align:middle!important;display:inline-block!important}.button.select.lg[disabled]{opacity:1!important;background-color:#fff!important;color:#ccc}.button.select.lg[disabled] .button-icon{color:#f2f2f2}.button.select.outline{color:#f2f2f2;background-color:Transparent;background-repeat:no-repeat;border-color:#f2f2f2}.button.select.outline:hover{color:#f2f2f2;background-color:Transparent;background-repeat:no-repeat;border-color:#f2f2f2}.button.select.outline[disabled]{color:#6f6f6f!important;background-color:Transparent!important;background-repeat:no-repeat;border-color:#6f6f6f!important}.button.select.outline[disabled]:hover{color:#6f6f6f;background-color:Transparent!important;background-repeat:no-repeat;border-color:#6f6f6f}.button.select.outline[disabled] .button-icon{color:#6f6f6f!important}.button.select.outline .button-icon{color:#f2f2f2}.button.select-profile{height:8.75em;width:14.375em;color:#258900;background-color:#fff;border:1px solid #ccc;font-weight:400!important;font-size:1em!important;text-transform:capitalize!important}.button.select-profile.on{background-color:#258900;color:#fff}.button.select-profile.on .checkbox-label{color:#fff!important}.button.select-profile .icheckbox-container{display:block;top:-3.0625em;position:relative}.button.select-profile .checkbox-label{color:#258900;font-weight:400!important;font-size:1em!important;text-transform:initial;display:block;white-space:normal;word-wrap:break-word;width:4.375em;text-align:left;margin-top:.625em!important}.button.select-profile .icheckbox_intesa{display:block}.button.select-profile .button-icon{top:0;left:1.7em;font-size:4.375em!important}.button.select-icon-text{height:3em;min-width:18.75em;border-radius:1.5em!important;color:#323232;background-color:#f2f2f2;font-weight:700;font-size:1em;text-transform:uppercase}.button.select-icon-text.on{background-color:#c4dbbc;color:#258900}.button.select-icon-text.on .button-icon{background-color:#258900;color:#fff}.button.select-icon-text .button-icon{top:-.5125em;left:-.3em;font-size:1.625em!important;padding:.225em .425em;display:inline-block;-moz-border-radius:6.25em;-webkit-border-radius:6.25em;border-radius:6.25em;border-color:#ccc;background-color:#ccc}.button.select-icon-text .button-icon:before{top:2px;position:relative}.button.select-icon-text .button-label-icon{padding-bottom:1.3125em;padding-left:2.225em}.button.select-icon-text.white{background-color:#fff;border:1px solid #ccc}.button.select-icon-text.white.on{background-color:#c4dbbc}.button.select-icon-text.white.on .button-icon{background-color:#258900;color:#fff}.button.generative-1{height:3.334em;width:18.334em;background-color:#f2f2f2;color:#323232}.button.generative-1:hover{background-color:#323232;color:#fff}.button.generative-1:hover .button-icon{color:#fff}.button.generative-1 .button-icon{color:#258900;font-size:2.001em!important}.button.generative-2{height:3.334em;width:18.334em;border:1px dashed #ccc;border-radius:1.5625em!important;background-color:#fff;color:#6f6f6f}.button.generative-2:hover{color:#258900;border:1px dashed #258900}.button.generative-2:hover .button-icon{color:#258900}.button.generative-2 .button-icon{color:#6f6f6f;font-size:1.425em!important}.button.generative-3{color:#258900;background-color:#fff}.button.generative-3:hover .button-icon{color:#fff;-moz-box-shadow:0 0 2px #258900;-webkit-box-shadow:0 0 2px #258900;box-shadow:0 0 2px #258900;background-color:#258900}.button.generative-3 .button-icon{color:#ccc;padding:1px 3px;display:inline-block;-moz-border-radius:6.25em;-webkit-border-radius:6.25em;border-radius:6.25em;-moz-box-shadow:0 0 2px #ccc;-webkit-box-shadow:0 0 2px #ccc;box-shadow:0 0 2px #ccc}.button.generative-3 .button-icon.ico-comuni-aggiungi:before{content:\"\e01f\";position:relative;top:2px}.allineamento-generative{display:inline-block!important;text-align:center}.green-event{background-color:#258900!important;color:#fff!important}.gray-event{background-color:#f2f2f2!important;color:#6f6f6f!important;border-color:#f2f2f2!important}.contrasto-on .button{font-weight:700;font-size:.75em;padding-top:1em;padding-bottom:1em;line-height:1;outline:0!important;text-transform:uppercase;height:3.3334em;min-width:6.875em;box-shadow:none!important}.contrasto-on .button.default,.contrasto-on .button.primary{color:#fff;background-color:#000;border-color:#000}.contrasto-on .button.default:focus,.contrasto-on .button.primary:focus{background-color:#fff;color:#000;border-color:#000}.contrasto-on .button.default:active,.contrasto-on .button.primary:active{background-color:#fff;color:#000;border-color:#000}.contrasto-on .button.default:hover,.contrasto-on .button.primary:hover{background-color:#fff;color:#000;border-color:#000}.contrasto-on .btn{border-radius:2px!important}.contrasto-on .btn.default[disabled],.contrasto-on .btn.primary[disabled]{opacity:1}.contrasto-on .btn.default[disabled]:hover,.contrasto-on .btn.primary[disabled]:hover{color:#fff;background-color:#000!important;border-color:#000!important;cursor:default}.contrasto-on .button.selection-button{width:29.6875em;height:5.625em;background-color:#fff;border:none;border-radius:1.5625em!important;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;font-size:1em;color:#000;text-align:left;border:1px solid #000}.contrasto-on .button.selection-button:hover{background-color:#000;color:#fff}.contrasto-on .button.selection-button .button-label-icon{padding-bottom:0;padding-left:4.8em;text-transform:none;font-weight:400}.contrasto-on .button.selection-button .button-icon{top:.12em;left:1em}.contrasto-on .button.action{color:#fff;background-color:#000;border-color:#000}.contrasto-on .button.action .button-icon{color:#fff}.contrasto-on .button.action:hover{background-color:#fff;color:#000;border:1px solid #000}.contrasto-on .button.action:hover .button-icon{color:#000}.contrasto-on .button.action:active{background-color:#fff!important;border:1px solid #000}.contrasto-on .button.action:focus{background-color:#fff!important;border:1px solid #000}.contrasto-on .button.action:focus .button-icon{color:#000}.contrasto-on .button.action.white{background-color:#fff;border-color:#000;color:#000}.contrasto-on .button.action.white .button-icon{color:#000}.contrasto-on .button.action.white:hover{background-color:#000;color:#fff;border-color:#fff}.contrasto-on .button.action.white:hover .button-icon{color:#fff}.contrasto-on .button.action.white:active{background-color:#000!important;color:#fff}.contrasto-on .button.action.white:focus{background-color:#000!important;color:#fff}.contrasto-on .button.action.white:focus .button-icon{color:#fff}.contrasto-on .button.action.green{background-color:#000;border-color:#000;color:#fff}.contrasto-on .button.action.green .button-icon{color:#fff}.contrasto-on .button.action.green:hover{background-color:#fff;color:#000;border-color:#000}.contrasto-on .button.action.green:hover .button-icon{color:#000}.contrasto-on .button.action.green:active{background-color:#000!important;color:#fff;border:none}.contrasto-on .button.action.green:focus{background-color:#000!important;color:#fff;border:none}.contrasto-on .button.action.green:focus .button-icon{color:#fff}.contrasto-on .btn.action[disabled]{color:#fff;background-color:#000!important;border-color:#000!important;opacity:1}.contrasto-on .btn.action[disabled]:hover{color:#fff;background-color:#000!important;border:1px solid #000!important;cursor:default}.contrasto-on .btn.action[disabled]:hover .button-icon{color:#fff}.contrasto-on .btn.action[disabled].green .button-icon{color:#fff!important}.contrasto-on .btn.action[disabled].white{color:#000;background-color:#fff!important;border:1px solid #000!important;cursor:default}.contrasto-on .btn.action[disabled].white .button-icon{color:#000!important}.contrasto-on .button.action-black{color:#000;background-color:#fff;border-color:#000}.contrasto-on .button.action-black .button-icon{color:#000}.contrasto-on .button.action-black:hover{background-color:#000;color:#fff;border:1px solid #fff}.contrasto-on .button.action-black:hover .button-icon{color:#fff}.contrasto-on .button.action-black:active{background-color:#000!important;color:#fff;border:1px solid #fff}.contrasto-on .button.action-black:focus{background-color:#000!important;color:#fff;border:1px solid #fff}.contrasto-on .button.action-black:focus .button-icon{color:#fff}.contrasto-on .button.action-black.white{background-color:#fff;border-color:#000}.contrasto-on .button.action-black.white .button-icon{color:#000}.contrasto-on .button.action-black.white:hover{background-color:#000;color:#fff;border-color:#fff}.contrasto-on .button.action-black.white:hover .button-icon{color:#fff}.contrasto-on .button.action-black.white:active{background-color:#000!important;color:#fff;border:1px solid #fff}.contrasto-on .button.action-black.white:focus{background-color:#000!important;border:1px solid #fff;color:#fff}.contrasto-on .button.action-black.white:focus .button-icon{color:#fff}.contrasto-on .button.action-black.outline{background-color:#000;border:1px solid #fff;color:#fff}.contrasto-on .button.action-black.outline .button-icon{color:#fff;border-width:none}.contrasto-on .button.action-black.outline:hover{background-color:#fff;color:#000;border-color:#fff}.contrasto-on .button.action-black.outline:hover .button-icon{color:#000}.contrasto-on .button.action-black.outline:active{background-color:#fff!important;color:#000;border:none}.contrasto-on .button.action-black.outline:focus{background-color:#fff!important;border:none;color:#000}.contrasto-on .button.action-black.outline:focus .button-icon{color:#000}.contrasto-on .btn.action-black[disabled]{color:#fff;background-color:#000!important;border-color:#fff!important;opacity:1}.contrasto-on .btn.action-black[disabled]:hover{color:#fff;background-color:#000!important;border:1px solid #fff!important;cursor:default}.contrasto-on .btn.action-black[disabled]:hover .button-icon{color:#fff}.contrasto-on .button.select{height:4.167em;min-width:25em;border-radius:2.5625em!important;color:#fff;background-color:#000;font-weight:700;font-size:.75em;text-transform:uppercase;box-shadow:none!important}.contrasto-on .button.select.on{background-color:#fff;color:#000;border:1px solid #000}.contrasto-on .button.select .button-icon{left:1.38em;top:0}.contrasto-on .button.select .button-label-icon{padding-bottom:.1125em;padding-left:5.225em}.contrasto-on .button.select.white{background-color:#fff;border:1px solid #000;color:#000}.contrasto-on .button.select.white.on{background-color:#000;color:#fff}.contrasto-on .button.select-alto{height:5.625em;width:14.375em;border-radius:1.5625em!important;color:#fff;background-color:#000;font-weight:400;font-size:1em;text-transform:uppercase;box-shadow:none!important}.contrasto-on .button.select-alto.on{background-color:#fff;color:#000;border:1px solid #000}.contrasto-on .button.select-alto.on .button-icon{color:#000}.contrasto-on .button.select-alto .button-icon{top:0;font-size:1.875em!important;color:#fff}.contrasto-on .button.select-alto .button-label-icon{padding-left:2.225em;white-space:normal;width:.0625em;padding-bottom:0;text-transform:capitalize}.contrasto-on .button.select-alto.white{background-color:#fff;border:.0625em solid #000;color:#000}.contrasto-on .button.select-alto.white.on{background-color:#000;color:#fff}.contrasto-on .button.select-alto.white.on .button-icon{color:#fff}.contrasto-on .button.select-alto.white .button-icon{color:#000}.contrasto-on .button.select-alto .allineamento-select{text-align:justify;vertical-align:middle!important;display:inline-block!important}.contrasto-on .button.select-profile{height:8.75em;width:14.375em;color:#000;background-color:#fff;border:1px solid #000;font-weight:400!important;font-size:1em!important;text-transform:capitalize!important}.contrasto-on .button.select-profile.on{background-color:#000;color:#fff}.contrasto-on .button.select-profile.on .checkbox-label{color:#fff!important}.contrasto-on .button.select-profile .icheckbox-container{display:block;top:-3.0625em;position:relative}.contrasto-on .button.select-profile .checkbox-label{color:#000;font-weight:400!important;font-size:1em!important;text-transform:initial;display:block;white-space:normal;word-wrap:break-word;width:4.375em;text-align:left;margin-top:.625em!important}.contrasto-on .button.select-profile .icheckbox_intesa{display:block}.contrasto-on .button.select-profile .button-icon{top:0;left:1.7em;font-size:4.375em!important}.contrasto-on .button.select-icon-text{height:3em;min-width:18.75em;border-radius:1.5em!important;color:#000;background-color:#fff;border:1px solid #000;font-weight:700;font-size:1em;text-transform:uppercase}.contrasto-on .button.select-icon-text.on{background-color:#000;color:#fff}.contrasto-on .button.select-icon-text.on .button-icon{background-color:#fff;color:#000}.contrasto-on .button.select-icon-text .button-icon{top:-.5125em;left:-.3em;font-size:1.625em!important;padding:.225em .425em;display:inline-block;-moz-border-radius:6.25em;-webkit-border-radius:6.25em;border-radius:6.25em;border-color:#000;background-color:#000;color:#fff}.contrasto-on .button.select-icon-text .button-icon:before{top:2px;position:relative}.contrasto-on .button.select-icon-text .button-label-icon{padding-bottom:1.3125em;padding-left:2.225em}.contrasto-on .button.select-icon-text.white{background-color:#fff;border:1px solid #000}.contrasto-on .button.select-icon-text.white.on{background-color:#000}.contrasto-on .button.select-icon-text.white.on .button-icon{background-color:#fff;color:#000}.contrasto-on .button.generative-1{height:3.334em;width:18.334em;background-color:#000;color:#fff}.contrasto-on .button.generative-1:hover{background-color:#fff;color:#000;border:1px solid #000}.contrasto-on .button.generative-1:hover .button-icon{color:#000}.contrasto-on .button.generative-1 .button-icon{color:#fff;font-size:2.001em!important}.contrasto-on .button.generative-2{height:3.334em;width:18.334em;border:1px dashed #000;border-radius:1.5625em!important;background-color:#fff;color:#000}.contrasto-on .button.generative-2:hover{color:#fff;background-color:#000;border:1px dashed #fff}.contrasto-on .button.generative-2:hover .button-icon{color:#fff}.contrasto-on .button.generative-2 .button-icon{color:#000;font-size:1.425em!important}.contrasto-on .button.generative-3{color:#000;background-color:#fff}.contrasto-on .button.generative-3:hover .button-icon{color:#fff;-moz-box-shadow:0 0 2px #fff;-webkit-box-shadow:0 0 2px #fff;box-shadow:0 0 2px #fff;background-color:#000}.contrasto-on .button.generative-3 .button-icon{color:#000;padding:1px 3px;display:inline-block;-moz-border-radius:6.25em;-webkit-border-radius:6.25em;border-radius:6.25em;-moz-box-shadow:0 0 2px #000;-webkit-box-shadow:0 0 2px #000;box-shadow:0 0 2px #000}.contrasto-on .button.generative-3 .button-icon.ico-comuni-aggiungi:before{content:\"\e01f\";position:relative;top:2px}.contrasto-on .allineamento-generative{display:inline-block!important;text-align:center}.contrasto-on .green-event{background-color:#258900!important;color:#fff!important}.contrasto-on .gray-event{background-color:#f2f2f2!important;color:#6f6f6f!important;border-color:#f2f2f2!important} /*# sourceMappingURL=nbp-button.component.css.map */ "],
    }),
    __metadata("design:paramtypes", [])
], exports.NbpButtonComponent);

var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.NbpLabelComponent = (function () {
    function NbpLabelComponent() {
    }
    NbpLabelComponent.prototype.ngOnInit = function () {
    };
    return NbpLabelComponent;
}());
__decorate$3([
    _angular_core.Input(),
    __metadata$1("design:type", String)
], exports.NbpLabelComponent.prototype, "nbpText", void 0);
__decorate$3([
    _angular_core.Input(),
    __metadata$1("design:type", Boolean)
], exports.NbpLabelComponent.prototype, "nbpRequired", void 0);
__decorate$3([
    _angular_core.Input(),
    __metadata$1("design:type", String)
], exports.NbpLabelComponent.prototype, "for", void 0);
exports.NbpLabelComponent = __decorate$3([
    _angular_core.Component({selector: 'nbp-label',
        template: "<label [for]=\"for\">{{nbpText}}</label><span *ngIf=\"nbpRequired\">*</span>",
        styles: [".nbp-label{background-color:#ff0} /*# sourceMappingURL=nbp-label.component.css.map */ "]
    }),
    __metadata$1("design:paramtypes", [])
], exports.NbpLabelComponent);

/**
 *  Implements the Control Value Accessor pattern from Angular
 */
var NbpValueAccessorBase = (function () {
    function NbpValueAccessorBase() {
        this.changed = new Array();
        this.touched = new Array();
    }
    Object.defineProperty(NbpValueAccessorBase.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (value) {
            if (this.innerValue !== value) {
                this.innerValue = value;
                this.changed.forEach(function (f) { return f(value); });
            }
        },
        enumerable: true,
        configurable: true
    });
    NbpValueAccessorBase.prototype.touch = function () {
        this.touched.forEach(function (f) { return f(); });
    };
    /**
     * Used to update the value of our control
     * @param {T} value argument of our control
     */
    NbpValueAccessorBase.prototype.writeValue = function (value) {
        this.innerValue = value;
    };
    NbpValueAccessorBase.prototype.registerOnChange = function (fn) {
        this.changed.push(fn);
    };
    NbpValueAccessorBase.prototype.registerOnTouched = function (fn) {
        this.touched.push(fn);
    };
    return NbpValueAccessorBase;
}());

// Observable operators
var normalizeValidator = function (validator) {
    var func = validator.validate.bind(validator);
    if (typeof func === 'function') {
        return function (c) { return func(c); };
    }
    else {
        return validator;
    }
};
var composeValidators = function (validators) {
    if (validators == null || validators.length === 0) {
        return null;
    }
    return _angular_forms.Validators.compose(validators.map(normalizeValidator));
};
var validate = function (validators, asyncValidators) {
    return function (control) {
        var synchronousValid = function () { return composeValidators(validators)(control); };
        if (asyncValidators) {
            var asyncValidator = composeValidators(asyncValidators);
            return asyncValidator(control).map(function (v) {
                var secondary = synchronousValid();
                if (secondary || v) {
                    return Object.assign({}, secondary, v);
                }
            });
        }
        if (validators) {
            return rxjs_Observable.Observable.of(synchronousValid());
        }
        return rxjs_Observable.Observable.of(null);
    };
};
/**
 * message list for standard validation error
 */
var message = function (validator, key) {
    switch (key) {
        case 'required':
            return 'Campo obbligatorio';
        case 'pattern':
            return 'Campo non valido';
        case 'minlength':
            return 'Il campo non rispetta la lunghezza minima';
        case 'maxlength':
            return 'Il campo non rispetta la lunghezza massima';
    }
    switch (typeof validator[key]) {
        case 'string':
            return validator[key];
        default:
            return "Validazione fallita: " + key;
    }
};

var __extends$1 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Observable operators
/**
 *  Provides observable values to its parent about its validity state.
 *  Each element will need to know its validity state for rendering purposes.
 */
var NbpInputElementBase = (function (_super) {
    __extends$1(NbpInputElementBase, _super);
    // we will ultimately get these arguments from @Inject on the derived class
    function NbpInputElementBase(validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this.validators = validators;
        _this.asyncValidators = asyncValidators;
        return _this;
    }
    /**
     * Can be used in the control and it works off of validators
     * injected through hierarchical dependency injection
     * (eg. a required or minlength directive).
     * @return {Observable<ValidationResult>} result of validation chain
     */
    NbpInputElementBase.prototype.validate = function () {
        return validate(this.validators, this.asyncValidators)(this.model.control);
    };
    Object.defineProperty(NbpInputElementBase.prototype, "invalid", {
        /**
         * Array of validator
         * @return Observable<boolean>
         */
        get: function () {
            return this.validate().map(function (v) { return Object.keys(v || {}).length > 0; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbpInputElementBase.prototype, "failures", {
        /**
         * Array of validation error messages
         * @return { Observable<Array<string>> }
         */
        get: function () {
            return this.validate().map(function (v) { return Object.keys(v).map(function (k) { return message(v, k); }); });
        },
        enumerable: true,
        configurable: true
    });
    return NbpInputElementBase;
}(NbpValueAccessorBase));

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
var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Provider Expression that allows nbp-input to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
var NBP_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.NbpInputTextComponent; }),
    multi: true
};
var NBP_INPUT_ELEMENT_BASE = {
    provide: NbpInputElementBase,
    useExisting: _angular_core.forwardRef(function () { return exports.NbpInputTextComponent; }),
    multi: true
};
/** intero autogenerato usato per id unici per nbpInput component */
var nextId = 0;
/**
 * Componente per la implementazione dei textfield, supporta tutti gli attributi standard html per il tag input.
 * personalizzabile per la gestione di currency grazie all'applicaizone di opportuni pipes
 * definiti dalla libreria.
 */
exports.NbpInputTextComponent = (function (_super) {
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
        _this.nbpValidation = new _angular_core.EventEmitter();
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
__decorate$4([
    _angular_core.Input(),
    __metadata$2("design:type", String)
], exports.NbpInputTextComponent.prototype, "name", void 0);
__decorate$4([
    _angular_core.Input(),
    __metadata$2("design:type", String)
], exports.NbpInputTextComponent.prototype, "id", void 0);
__decorate$4([
    _angular_core.HostBinding('class.nbp-show-validation'),
    _angular_core.Input(),
    __metadata$2("design:type", Boolean)
], exports.NbpInputTextComponent.prototype, "nbpShowValidation", void 0);
__decorate$4([
    _angular_core.Input(),
    __metadata$2("design:type", RegExp)
], exports.NbpInputTextComponent.prototype, "pattern", void 0);
__decorate$4([
    _angular_core.Input(),
    __metadata$2("design:type", Boolean),
    __metadata$2("design:paramtypes", [Object])
], exports.NbpInputTextComponent.prototype, "disabled", null);
__decorate$4([
    _angular_core.Input(),
    __metadata$2("design:type", Boolean),
    __metadata$2("design:paramtypes", [Object])
], exports.NbpInputTextComponent.prototype, "required", null);
__decorate$4([
    _angular_core.Input(),
    __metadata$2("design:type", String)
], exports.NbpInputTextComponent.prototype, "placeholder", void 0);
__decorate$4([
    _angular_core.Input(),
    __metadata$2("design:type", Boolean),
    __metadata$2("design:paramtypes", [Object])
], exports.NbpInputTextComponent.prototype, "nbpRoundBorder", null);
__decorate$4([
    _angular_core.Input(),
    __metadata$2("design:type", Boolean),
    __metadata$2("design:paramtypes", [Object])
], exports.NbpInputTextComponent.prototype, "nbpHighlightedDefault", null);
__decorate$4([
    _angular_core.Input(),
    __metadata$2("design:type", String)
], exports.NbpInputTextComponent.prototype, "nbpFormat", void 0);
__decorate$4([
    _angular_core.Input(),
    __metadata$2("design:type", String)
], exports.NbpInputTextComponent.prototype, "nbpIcon", void 0);
__decorate$4([
    _angular_core.Input(),
    __metadata$2("design:type", String)
], exports.NbpInputTextComponent.prototype, "nbpErrorMessage", void 0);
__decorate$4([
    _angular_core.Output(),
    __metadata$2("design:type", _angular_core.EventEmitter)
], exports.NbpInputTextComponent.prototype, "nbpValidation", void 0);
__decorate$4([
    _angular_core.ViewChild(_angular_forms.NgModel),
    __metadata$2("design:type", _angular_forms.NgModel)
], exports.NbpInputTextComponent.prototype, "model", void 0);
exports.NbpInputTextComponent = __decorate$4([
    _angular_core.Component({
        selector: 'nbp-input-text',template: "<input class=\"textfield-box form-control\" [ngClass]=\"{'round-borders':nbpRoundBorder, 'highlight-default':nbpHighlightedDefault}\" type=\"text\" [name]=\"name\" [id]=\"id\" [(ngModel)]=\"value\" [disabled]=\"disabled\" [required]=\"required\" [placeholder]=\"placeholder\" (input)=\"_onInputEvent($event)\" (focus)=\"_onFocusEvent()\"> <span *ngIf=\"!!nbpIcon\" class=\"icon icon-inside\" [ngClass]=\"nbpIcon\"></span>",
        styles: [":host{position:relative;display:block}.textfield-box{margin:0 0 .625em 0;padding:.375em 1em .375em 1em;color:#6f6f6f;border:1px solid #323232;border-radius:3px;font-size:1em;height:3.125em;box-shadow:none!important}.textfield-box:focus{border:2px solid #89bc72;outline:0;box-shadow:none!important}.textfield-box[disabled]{opacity:.5;background-color:#fff}:host(.ng-dirty.ng-invalid.nbp-show-validation) .textfield-box{border:2px solid #c63200!important;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}:host(.ng-dirty.ng-invalid.nbp-show-validation) .textfield-box:focus{border:2px solid #c63200}.highlight-default{border:2px solid #fce07f}.round-borders{border-radius:25px}.icon-inside{position:absolute;top:50%;right:25px;font-size:26px;transform:translateY(-50%)}.icon-inside:before{color:#258900}.contrasto-on .input-label{color:#000}.contrasto-on .input-box{color:#000;border:1px solid #000}.contrasto-on .input-box:focus{border:2px solid #000}.contrasto-on .input-box::-webkit-input-placeholder{color:#000}.contrasto-on .input-box[disabled]{color:#fff;background-color:#000;opacity:1}.contrasto-on .has-error .input-box{border:2px solid #000;-webkit-box-shadow:inset 0 0 0 #000;box-shadow:inset 0 0 0 #000}.contrasto-on .has-error .input-box:focus{border:2px solid #000}.contrasto-on .yellow-border{border:2px solid #000} /*# sourceMappingURL=nbp-input-text.component.css.map */ "],
        providers: [NBP_INPUT_CONTROL_VALUE_ACCESSOR, NBP_INPUT_ELEMENT_BASE]
    }),
    __param(0, _angular_core.Optional()), __param(0, _angular_core.Inject(_angular_forms.NG_VALIDATORS)),
    __param(1, _angular_core.Optional()), __param(1, _angular_core.Inject(_angular_forms.NG_ASYNC_VALIDATORS)),
    __metadata$2("design:paramtypes", [Array, Array])
], exports.NbpInputTextComponent);

var __decorate$5 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.NbpInputContainerComponent = (function () {
    function NbpInputContainerComponent() {
    }
    return NbpInputContainerComponent;
}());
__decorate$5([
    _angular_core.Input(),
    __metadata$3("design:type", String)
], exports.NbpInputContainerComponent.prototype, "nbpLabel", void 0);
__decorate$5([
    _angular_core.ContentChild(NbpInputElementBase),
    __metadata$3("design:type", Object)
], exports.NbpInputContainerComponent.prototype, "innerNgInput", void 0);
exports.NbpInputContainerComponent = __decorate$5([
    _angular_core.Component({
        selector: 'nbp-input-container',template: "<div><label [for]=\"innerNgInput?.name\">{{nbpLabel}}<span *ngIf=\"innerNgInput?.required\">*</span></label><ng-content></ng-content><div class=\"error-message\" *ngIf=\"innerNgInput?.nbpShowValidation && (innerNgInput?.invalid | async)\"><span *ngIf=\"innerNgInput?.nbpErrorMessage\">{{innerNgInput?.nbpErrorMessage}}</span> <span *ngIf=\"!innerNgInput?.nbpErrorMessage\">{{innerNgInput?.failures | async}}</span></div></div>",
        styles: [".error-message{color:#c63200;font-size:.75em;margin-top:.625em;margin-bottom:.625em;opacity:1;transition:all ease-out .25s} /*# sourceMappingURL=nbp-input-container.component.css.map */ "]
    }),
    __metadata$3("design:paramtypes", [])
], exports.NbpInputContainerComponent);

var __extends$2 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$6 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$1 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/** intero autogenerato usato per id unici per checkbox component */
var nextId$1 = 0;
/**
 * Provider Expression that allows nbp-checkbox to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
var NBP_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.NbpCheckboxComponent; }),
    multi: true
};
/**
 * <nbp-checkbox> provides the same functionality as a native <input type="checkbox">
 */
exports.NbpCheckboxComponent = (function (_super) {
    __extends$2(NbpCheckboxComponent, _super);
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
        _this.id = "nbp-checkbox-" + ++nextId$1;
        _this._checked = false;
        /**
         * Evento emesso quando il valore `checked` della checkbox cambia.
         */
        _this.change = new _angular_core.EventEmitter(); // TODO definire tipo specifico dell'evento
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
__decorate$6([
    _angular_core.Input(),
    __metadata$4("design:type", String)
], exports.NbpCheckboxComponent.prototype, "nbpLabel", void 0);
__decorate$6([
    _angular_core.Input(),
    __metadata$4("design:type", String)
], exports.NbpCheckboxComponent.prototype, "name", void 0);
__decorate$6([
    _angular_core.Input(),
    __metadata$4("design:type", Object)
], exports.NbpCheckboxComponent.prototype, "id", void 0);
__decorate$6([
    _angular_core.Input(),
    __metadata$4("design:type", Boolean),
    __metadata$4("design:paramtypes", [Object])
], exports.NbpCheckboxComponent.prototype, "disabled", null);
__decorate$6([
    _angular_core.Input(),
    __metadata$4("design:type", Boolean)
], exports.NbpCheckboxComponent.prototype, "nbpShowValidation", void 0);
__decorate$6([
    _angular_core.Input(),
    __metadata$4("design:type", Boolean),
    __metadata$4("design:paramtypes", [Object])
], exports.NbpCheckboxComponent.prototype, "nbpDisplayInline", null);
__decorate$6([
    _angular_core.Input(),
    __metadata$4("design:type", Boolean),
    __metadata$4("design:paramtypes", [Object])
], exports.NbpCheckboxComponent.prototype, "nbpYellowBorder", null);
__decorate$6([
    _angular_core.Input(),
    __metadata$4("design:type", Boolean),
    __metadata$4("design:paramtypes", [Object])
], exports.NbpCheckboxComponent.prototype, "required", null);
__decorate$6([
    _angular_core.Input(),
    __metadata$4("design:type", Object),
    __metadata$4("design:paramtypes", [Boolean])
], exports.NbpCheckboxComponent.prototype, "checked", null);
__decorate$6([
    _angular_core.Input(),
    __metadata$4("design:type", String)
], exports.NbpCheckboxComponent.prototype, "value", void 0);
__decorate$6([
    _angular_core.Output(),
    __metadata$4("design:type", _angular_core.EventEmitter)
], exports.NbpCheckboxComponent.prototype, "change", void 0);
__decorate$6([
    _angular_core.ViewChild(_angular_forms.NgModel),
    __metadata$4("design:type", _angular_forms.NgModel)
], exports.NbpCheckboxComponent.prototype, "model", void 0);
exports.NbpCheckboxComponent = __decorate$6([
    _angular_core.Component({
        selector: 'nbp-checkbox',template: "<div class=\"icheckbox-container\" [ngStyle]=\"{'display': nbpDisplayInline ? 'inline-block' : 'block'}\" [ngClass]=\"{'checked': checked && !disabled, 'disabled': disabled }\"><div class=\"icheckbox_intesa\" [ngClass]=\"{'checked': checked, 'disabled': disabled ,'yellowborder': nbpYellowBorder}\"><input class=\"input-checkbox\" [id]=\"id\" [name]=\"name\" [(ngModel)]=\"value\" type=\"checkbox\" [checked]=\"checked\" [disabled]=\"disabled\" (change)=\"_onChangeEvent($event)\" (click)=\"_onClickEvent($event)\"></div><label *ngIf=\"nbpLabel\" class=\"checkbox-label\" [innerHTML]=\"required ? nbpLabel + ' * ' : nbpLabel\"></label><label *ngIf=\"!nbpLabel\" class=\"checkbox-label\"><ng-content></ng-content></label></div>",
        styles: [".icheckbox-container{margin-right:.625em}.icheckbox-container.checked .checkbox-label{color:#258900!important}.icheckbox-container.disabled .checkbox-label{color:#ccc!important}.icheckbox_intesa{position:relative;display:inline-block;vertical-align:middle;margin:0;padding:0;width:16px;height:17px;background:url(/cjlib/assets/images/intesa.png) no-repeat;border:none;background-position:-36px 0}.icheckbox_intesa input[type=checkbox]{margin:4px 4px 0 0!important;cursor:pointer;opacity:0}.icheckbox_intesa input[type=checkbox]:disabled{cursor:auto}.icheckbox_intesa.yellowborder{background-position:-215px 0}.icheckbox_intesa.checked{background-position:-18px 0}.icheckbox_intesa.checked.yellowborder{background-position:-233px 0}.icheckbox_intesa.disabled{background-position:-36px 0;cursor:default}.icheckbox_intesa.disabled.yellowborder{background-position:-180px 0}.icheckbox_intesa.checked.disabled{background-position:-54px 0}.icheckbox_intesa.checked.disabled.yellowborder{background-position:-197px 0}.checkbox-label{color:#6f6f6f;font-size:.75em;margin:0 0 0 5px!important}.input-checkbox{position:absolute;left:-1px;top:-2px}@media (-o-min-device-pixel-ratio:5/4){.icheckbox_intesa{background-image:url(/cjlib/asets/images/intesa@2x.png);-webkit-background-size:645px 19px;background-size:645px 19px}}@media (-webkit-min-device-pixel-ratio:1.25){.icheckbox_intesa{background-image:url(/cjlib/asets/images/intesa@2x.png);-webkit-background-size:645px 19px;background-size:645px 19px}}@media (min-resolution:120dpi){.icheckbox_intesa{background-image:url(/cjlib/asets/images/intesa@2x.png);-webkit-background-size:645px 19px;background-size:645px 19px}}@media (min-resolution:1.25dppx){.icheckbox_intesa{background-image:url(/cjlib/asets/images/intesa@2x.png);-webkit-background-size:645px 19px;background-size:645px 19px}}.contrasto-on .icheckbox-container.checked .checkbox-label{color:#000!important}.contrasto-on .icheckbox-container.disabled .checkbox-label{color:#000!important}.contrasto-on .icheckbox_intesa{background:url(/cjlib/asets/images/intesa.png) no-repeat;border:none;background-position:-538px 0}.contrasto-on .icheckbox_intesa.yellowborder{background-position:-538px 0}.contrasto-on .icheckbox_intesa.checked{background-position:-556px 0}.contrasto-on .icheckbox_intesa.checked.yellowborder{background-position:-556px 0}.contrasto-on .icheckbox_intesa.disabled{background-position:-538px 0;cursor:default}.contrasto-on .icheckbox_intesa.disabled.yellowborder{background-position:-538px 0}.contrasto-on .icheckbox_intesa.checked.disabled{background-position:-556px 0}.contrasto-on .icheckbox_intesa.checked.disabled.yellowborder{background-position:-556px 0}.contrasto-on .checkbox-label{color:#000}@media (-o-min-device-pixel-ratio:5/4){.contrasto-on .icheckbox_intesa{background-image:url(/cjlib/asets/images/intesa@2x.png);-webkit-background-size:645px 17px;background-size:645px 17px}}@media (-webkit-min-device-pixel-ratio:1.25){.contrasto-on .icheckbox_intesa{background-image:url(/cjlib/asets/images/intesa@2x.png);-webkit-background-size:645px 17px;background-size:645px 17px}}@media (min-resolution:120dpi){.contrasto-on .icheckbox_intesa{background-image:url(/cjlib/asets/images/intesa@2x.png);-webkit-background-size:645px 17px;background-size:645px 17px}}@media (min-resolution:1.25dppx){.contrasto-on .icheckbox_intesa{background-image:url(/cjlib/asets/images/intesa@2x.png);-webkit-background-size:645px 17px;background-size:645px 17px}} /*# sourceMappingURL=nbp-checkbox.component.css.map */ "],
        providers: [NBP_CHECKBOX_CONTROL_VALUE_ACCESSOR]
    }),
    __param$1(0, _angular_core.Optional()), __param$1(0, _angular_core.Inject(_angular_forms.NG_VALIDATORS)),
    __param$1(1, _angular_core.Optional()), __param$1(1, _angular_core.Inject(_angular_forms.NG_ASYNC_VALIDATORS)),
    __metadata$4("design:paramtypes", [Array, Array])
], exports.NbpCheckboxComponent);

/**
 * Enum utilizzabile per la definizione della grandezza del font da utilizzare
 */
/**
 * Enum utilizzabile per la definizione della grandezza del font da utilizzare
 */ var NbpFontSize;
(function (NbpFontSize) {
    NbpFontSize[NbpFontSize["SMALL"] = 0] = "SMALL";
    NbpFontSize[NbpFontSize["MEDIUM"] = 1] = "MEDIUM";
    NbpFontSize[NbpFontSize["LARGE"] = 2] = "LARGE";
})(NbpFontSize || (NbpFontSize = {}));

var __decorate$7 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$5 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$2 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.NbpFooterComponent = (function () {
    function NbpFooterComponent(document) {
        this.document = document;
        /**
         * (Opzionale) Evento emesso alla seleziona della lingua
         */
        this.nbpLanguageChange = new _angular_core.EventEmitter();
        /**
         * (Opzionale) Booleano che mostra/nasconde i pulsanti per la gestione del contrasto
         * valore di default false
         */
        this.nbpContrastEnable = false;
        /**
         *  (Opzionale) Booleano che abilita la visualizzazione della dimensione del font
         *  Valore di default false
         */
        this.nbpFontDimensionEnable = false;
        /**
         *  Emissione di un evento per lo zoom del testo
         */
        this.nbpZoom = new _angular_core.EventEmitter();
        this._zoom = NbpFontSize;
        /**
         * Booleano per l'attivazione del contrasto, agisce sui colore nel css della libreria
         */
        this.nbpContrastOn = false;
        /**
         *  Emissione di un evento per l'attivazione del contrasto
         */
        this.nbpContrast = new _angular_core.EventEmitter();
    }
    NbpFooterComponent.prototype._zoomSelected = function (size) {
        this.nbpZoomSize = size;
        if (size === NbpFontSize.SMALL) {
            this.document.body.style.fontSize = '16px';
        }
        else if (size === NbpFontSize.MEDIUM) {
            this.document.body.style.fontSize = '19px';
        }
        else if (size === NbpFontSize.LARGE) {
            this.document.body.style.fontSize = '22px';
        }
        this.nbpZoom.emit(this.document.body.style.fontSize);
    };
    
    NbpFooterComponent.prototype._languageChange = function (lang) {
        this.nbpLanguage = lang;
        // console.log(lang.target.innerText);
        this.nbpLanguageChange.emit(this.nbpLanguage);
    };
    
    NbpFooterComponent.prototype._changeContrast = function (contrastOn) {
        this.nbpContrastOn = contrastOn;
        /*
        if (contrastOn === true) {
           this.document.getElementsByTagName('body')[0].className = 'contrasto-on';
           console.log("contrast-on");
         } else {
           this.document.getElementsByTagName('body')[0].classList.remove('contrasto-on');
           console.log("contrast-off");
         }
         */
        this.nbpContrast.emit(this.nbpContrastOn);
    };
    
    NbpFooterComponent.prototype._isFooterEmpty = function () {
        return !this.nbpLinks
            && !this.nbpLanguages
            && !this.nbpShowCentralBtn
            && !this.nbpFontDimensionEnable
            && !this.nbpContrastEnable;
    };
    return NbpFooterComponent;
}());
__decorate$7([
    _angular_core.Input(),
    __metadata$5("design:type", Array)
], exports.NbpFooterComponent.prototype, "nbpLinks", void 0);
__decorate$7([
    _angular_core.Input(),
    __metadata$5("design:type", Array)
], exports.NbpFooterComponent.prototype, "nbpLanguages", void 0);
__decorate$7([
    _angular_core.Input(),
    __metadata$5("design:type", Boolean)
], exports.NbpFooterComponent.prototype, "nbpShowCentralBtn", void 0);
__decorate$7([
    _angular_core.Input(),
    __metadata$5("design:type", Number)
], exports.NbpFooterComponent.prototype, "nbpZoomSize", void 0);
__decorate$7([
    _angular_core.Input(),
    __metadata$5("design:type", Object)
], exports.NbpFooterComponent.prototype, "nbpCentralBtn", void 0);
__decorate$7([
    _angular_core.Output(),
    __metadata$5("design:type", _angular_core.EventEmitter)
], exports.NbpFooterComponent.prototype, "nbpLanguageChange", void 0);
__decorate$7([
    _angular_core.Input(),
    __metadata$5("design:type", String)
], exports.NbpFooterComponent.prototype, "nbpLanguage", void 0);
__decorate$7([
    _angular_core.Input(),
    __metadata$5("design:type", Boolean)
], exports.NbpFooterComponent.prototype, "nbpContrastEnable", void 0);
__decorate$7([
    _angular_core.Input(),
    __metadata$5("design:type", Boolean)
], exports.NbpFooterComponent.prototype, "nbpFontDimensionEnable", void 0);
__decorate$7([
    _angular_core.Output(),
    __metadata$5("design:type", _angular_core.EventEmitter)
], exports.NbpFooterComponent.prototype, "nbpZoom", void 0);
__decorate$7([
    _angular_core.Input(),
    __metadata$5("design:type", Boolean)
], exports.NbpFooterComponent.prototype, "nbpContrastOn", void 0);
__decorate$7([
    _angular_core.Output(),
    __metadata$5("design:type", _angular_core.EventEmitter)
], exports.NbpFooterComponent.prototype, "nbpContrast", void 0);
exports.NbpFooterComponent = __decorate$7([
    _angular_core.Component({
        selector: 'nbp-footer',template: "<footer class=\"footer\" [ngClass]=\"{'contrasto-on':nbpContrastOn,'empty-footer':_isFooterEmpty()}\"><div [ngClass]=\"{'footer-content':!_isFooterEmpty(),'empty-footer':_isFooterEmpty()}\"><div class=\"footer-content-left col-md-6 col-sm-12 col-xs-24\" [ngClass]=\"{'bottom-right-border':(!!nbpLinks && !nbpLanguages)}\"><div *ngIf=\"!!nbpLinks\"><span *ngFor=\"let link of nbpLinks;let i=index;\"><span class=\"footer-link truncate-link\" [innerText]=\"link.name\" (click)=\"redirectTo(link)\"></span> <span *ngIf=\"i !== nbpLinks.length - 1\">|</span></span></div></div><div class=\"footer-content-center-l col-md-6 col-sm-12 col-xs-24\" [ngClass]=\"{'top-left-border':!nbpLinks && !!nbpLanguages||(!!nbpLinks && !!nbpLanguages),'bottom-right-border':(!!nbpLanguages && !nbpShowCentralBtn) }\"><div class=\"footer-languages\" *ngIf=\"!!nbpLanguages\"><div *ngFor=\"let lang of nbpLanguages; let i=index; let l=last\" (click)=\"_languageChange($event)\"><div><span class=\"footer-lang\" [innerText]=\"lang\"></span> <span class=\"footer-lang\" *ngIf=\"i !== nbpLanguages.length - 1\">|</span> <span class=\"footer-lang\" *ngIf=\"i === nbpLanguages.length - 1\">&nbsp;</span></div><div [ngStyle]=\"{opacity: nbpLanguage === lang ? 1 : 0}\" class=\"footer-languages-selection\">&#9679;</div></div></div></div><div class=\"footer-content-center-r col-md-6 col-sm-12 col-xs-24\" [ngClass]=\"{'top-left-border':(!!nbpShowCentralBtn && !nbpLanguages) || ( !!nbpShowCentralBtn && !!nbpLanguages ), 'bottom-right-border':(!(!!nbpContrastEnable || !!nbpFontDimensionEnable) && !!nbpShowCentralBtn) }\"><div *ngIf=\"nbpShowCentralBtn\"><button (click)=\"nbpCentralBtn.action\" class=\"btn button\"><span class=\"icon button-icon\" [ngClass]=\"nbpCentralBtn.icon\"></span>{{nbpCentralBtn.name}}</button></div></div><div class=\"footer-content-right col-md-6 col-sm-12 col-xs-24\" [ngClass]=\"{'top-left-border':((!!nbpContrastEnable || !!nbpFontDimensionEnable) && !nbpShowCentralBtn)||((!!nbpContrastEnable || !!nbpFontDimensionEnable) && !!nbpShowCentralBtn) }\"><div class=\"footer-contrasto\" *ngIf=\"nbpContrastEnable\"><div (click)=\"_changeContrast(false)\"><div class=\"icon ico-footer-contrasto-1\"></div><div [ngStyle]=\"{opacity: nbpContrastOn === false ? 1 : 0}\" class=\"footer-contrasto-selection\">&#9679;</div></div><div (click)=\"_changeContrast(true)\"><div class=\"icon ico-footer-contrasto-2\"></div><div [ngStyle]=\"{opacity: nbpContrastOn === true ? 1 : 0}\" class=\"footer-contrasto-selection\">&#9679;</div></div></div><div class=\"footer-testo\" *ngIf=\"nbpFontDimensionEnable\"><div (click)=\"_zoomSelected(_zoom.SMALL)\"><div class=\"icon ico-footer-testo-1\"></div><div [ngStyle]=\"{opacity: nbpZoomSize === _zoom.SMALL ? 1 : 0}\" class=\"footer-contrasto-selection\">&#9679;</div></div><div (click)=\"_zoomSelected(zoom.MEDIUM)\"><div class=\"icon ico-footer-testo-2\"></div><div [ngStyle]=\"{opacity: nbpZoomSize === _zoom.MEDIUM ? 1 : 0}\" class=\"footer-contrasto-selection\">&#9679;</div></div><div (click)=\"_zoomSelected(zoom.LARGE)\"><div class=\"icon ico-footer-testo-3\"></div><div [ngStyle]=\"{opacity: nbpZoomSize === _zoom.LARGE ? 1 : 0}\" class=\"footer-contrasto-selection\">&#9679;</div></div></div></div></div></footer>",
        styles: [".footer-content{height:6.25em}.empty-footer{height:3.125em}.top-left-border{border-top:none;border-bottom:none;border-left:1px solid #6f6f6f}.bottom-right-border{border-top:none;border-right:1px solid #6f6f6f;border-bottom:none}.footer-content-center-l,.footer-content-center-r,.footer-content-left,.footer-content-right{display:table;height:inherit;color:#fff}.footer-content-center-l>div,.footer-content-center-r>div,.footer-content-left>div,.footer-content-right>div{display:table-cell;vertical-align:middle;text-align:center}.footer-content-left{padding-left:10px;padding-right:10px;text-transform:uppercase}.footer-content-left span{cursor:pointer}.footer-content-center-r button{background-color:#323232!important;border:none!important}.footer-content-center-r button:hover{background-color:#fff!important;color:#323232!important}.footer-content-right{border-right:none}.footer-link{font-family:Arial;font-size:12px;white-space:nowrap}.footer-link:hover{text-decoration:underline}.truncate-link{display:inline-block;vertical-align:middle;max-width:10em;text-overflow:ellipsis;overflow:hidden}.footer-languages{font-size:1.5em}.footer-languages .ico-footer-contrasto-1{cursor:pointer}.footer-languages .footer-lang{cursor:pointer;font-family:Arial;font-size:12px;margin-left:0 .313em 0 0}.footer-languages .ico-footer-contrasto-2{cursor:pointer}.footer-languages>div{display:inline-block;padding:0 .313em 0 .313em}.footer-contrasto{font-size:1.5em}.footer-contrasto .ico-footer-contrasto-1{cursor:pointer}.footer-contrasto .ico-footer-contrasto-2{cursor:pointer}.footer-contrasto>div{display:inline-block;padding-left:0 .313em 0 .313em}.footer-contrasto>div:hover{background-color:#fff;color:#323232}.footer-testo{font-size:1.5em;cursor:pointer}.footer-testo .ico-footer-testo-1{font-size:.5em}.footer-testo .ico-footer-testo-2{font-size:.8em}.footer-testo>div{display:inline-block;padding:0 .313em 0 .313em}.footer-testo>div:hover{background-color:#fff;color:#323232}.footer-contrasto-selection,.footer-languages-selection,.footer-testo-selection{cursor:pointer;font-size:.625em;margin-top:-.625em}.footer-languages-selection{margin:-.625em 1.313em 0 .313em}.footer{background-color:#323232;margin-top:1.875em!important;color:#fff;border-bottom:.375em solid #000;width:100%;z-index:2;bottom:0;box-sizing:content-box}@media (min-width:768px){.footer{margin-bottom:0;margin-right:2.5em}}@media (min-width:992px){.footer{margin-top:1.25em;margin-right:12.5em}}@media (max-width:767px){.top-left-border{border-top:1px solid #6f6f6f;border-right:none;border-bottom:none;border-left:none}.bottom-right-border{border-top:none;border-right:none;border-bottom:1px solid #6f6f6f;border-left:none}.footer{height:25em}.footer .row{padding:0 15px 0 15px}.empty-footer{height:3.125em!important}.empty-footer>div{display:none}.footer-content-right{padding-top:15px}}@media (min-width:768px) and (max-width:991px){.top-left-border{border-top:1px solid #6f6f6f;border-right:none;border-bottom:none;border-left:1px solid #6f6f6f}.bottom-right-border{border-top:none;border-right:1px solid #6f6f6f;border-bottom:1px solid #6f6f6f;border-left:none}.footer-content-left.bottom-right-border{border-bottom:none!important}.footer-content-center-l.top-left-border{border-top:none!important;border-right:none!important}.footer-content-center-r.top-left-border{border-bottom:none!important;border-left:none!important}.footer-content-right{border-right:none!important;border-bottom:none!important}.footer{height:12.5em}.footer .row{padding:0 15px 0 15px}.empty-footer{height:3.125em!important}.empty-footer>div{display:none}}.contrasto-on{background-color:#000}.contrasto-on .footer-content-left{color:#fff}.contrasto-on .footer-content-center-r button{background-color:#000!important}.contrasto-on .footer-content-center-r button:hover{background-color:#fff!important;color:#6f6f6f!important}.contrasto-on .footer-contrasto{color:#ccc}.contrasto-on .footer-contrasto>div:hover{background-color:#000;color:#fff}.contrasto-on .footer-testo{color:#ccc}.contrasto-on .footer-testo>div:hover{background-color:#000;color:#fff}.button-icon{font-size:1.7em!important;display:inline-block;vertical-align:middle;padding-right:.2em}.button{font-weight:700;font-size:.75em;padding-top:1em;padding-bottom:1em;line-height:1;outline:0!important;text-transform:uppercase;height:3.3334em;min-width:6.875em;box-shadow:none!important} /*# sourceMappingURL=nbp-footer.component.css.map */ "]
    }),
    __param$2(0, _angular_core.Inject(_angular_platformBrowser.DOCUMENT)),
    __metadata$5("design:paramtypes", [Object])
], exports.NbpFooterComponent);

var __decorate$9 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$7 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.NbpBurgerMenuComponent = (function () {
    function NbpBurgerMenuComponent() {
        /**
         * (Opzionale) booleano per disabilitare la possibilità di fare logout.
         * Valore default false
         */
        this.nbpDisableLogout = false;
        /**
         * Evento emesso sulla pressione del logout.
         * @param {EventEmitter<INbpUser>}  nbpOnLogout
         */
        this.nbpOnLogout = new _angular_core.EventEmitter();
        /**
         * Evento emesso sulla pressione di ogni voce di menu'.
         * @param {EventEmitter<INbpItemMenu>}  nbpOnItemClick
         */
        this.nbpOnItemClick = new _angular_core.EventEmitter();
        /**
         * Evento emesso all'apertura del burgerMenu.
         * @param {EventEmitter<any>}  nbpOnOpen
         */
        this.nbpOnOpen = new _angular_core.EventEmitter();
        /**
         * Evento emesso alla chiusure del burgerMenu.
         * @param {EventEmitter<any>}  nbpOnOpen
         */
        this.nbpOnClose = new _angular_core.EventEmitter();
        this._isOpen = false; // true in test phase
        this._showSecondLevelMenu = false; // false in test phase
    }
    NbpBurgerMenuComponent.prototype.ngOnInit = function () {
    };
    NbpBurgerMenuComponent.prototype._onClick = function (item) {
        console.log('click item menu: ' + JSON.stringify(item));
        this.nbpOnItemClick.emit(item);
        if (item.secondLevelMenu && item.secondLevelMenu.sections && item.secondLevelMenu.sections.length > 0) {
            this._selectedItem = item;
            this._showSecondLevelMenu = true;
        }
    };
    NbpBurgerMenuComponent.prototype._goBack = function () {
        this._showSecondLevelMenu = false;
        this._selectedItem = null;
    };
    // Metodi Pubblici del componente
    /**
     * Permette apertura programmatica del BurgerMenu
     */
    NbpBurgerMenuComponent.prototype.open = function () {
        this._isOpen = true;
        this.nbpOnOpen.emit();
    };
    /**
     * Permette la chiusura programmatica del BurgerMenu
     */
    NbpBurgerMenuComponent.prototype.close = function () {
        this._isOpen = false;
        this.nbpOnClose.emit();
    };
    /**
     * Permette di eseguire il toggle del BurgerMenu
     */
    NbpBurgerMenuComponent.prototype.toggle = function () {
        this._isOpen ? this.close() : this.open();
    };
    return NbpBurgerMenuComponent;
}());
__decorate$9([
    _angular_core.Input(),
    __metadata$7("design:type", Object)
], exports.NbpBurgerMenuComponent.prototype, "nbpMenu", void 0);
__decorate$9([
    _angular_core.Input(),
    __metadata$7("design:type", Object)
], exports.NbpBurgerMenuComponent.prototype, "nbpUser", void 0);
__decorate$9([
    _angular_core.Input(),
    __metadata$7("design:type", Boolean)
], exports.NbpBurgerMenuComponent.prototype, "nbpDisableLogout", void 0);
__decorate$9([
    _angular_core.Output(),
    __metadata$7("design:type", _angular_core.EventEmitter)
], exports.NbpBurgerMenuComponent.prototype, "nbpOnLogout", void 0);
__decorate$9([
    _angular_core.Output(),
    __metadata$7("design:type", _angular_core.EventEmitter)
], exports.NbpBurgerMenuComponent.prototype, "nbpOnItemClick", void 0);
__decorate$9([
    _angular_core.Output(),
    __metadata$7("design:type", _angular_core.EventEmitter)
], exports.NbpBurgerMenuComponent.prototype, "nbpOnOpen", void 0);
__decorate$9([
    _angular_core.Output(),
    __metadata$7("design:type", _angular_core.EventEmitter)
], exports.NbpBurgerMenuComponent.prototype, "nbpOnClose", void 0);
exports.NbpBurgerMenuComponent = __decorate$9([
    _angular_core.Component({
        selector: 'nbp-burger-menu',template: "<div class=\"menu\" [ngClass]=\"{'closed': !_isOpen, 'open': _isOpen}\"><div class=\"container first-level-menu\" [ngClass]=\"{'open': !_showSecondLevelMenu}\" [hidden]=\"_showSecondLevelMenu\"><div class=\"row\"><div class=\"col-sm-16\"><div><div class=\"col-sm-12 section-menu\" *ngFor=\"let section of nbpMenu.sections; let i = index\"><ul class=\"main-menu\"><li><a *ngFor=\"let item of section.items\" (click)=\"_onClick(item)\"><span *ngIf=\"item.icon\" class=\"icon {{item.icon}}\"></span> <span>{{item.label}}</span></a></li></ul></div></div></div><div class=\"col-sm-8\"><ng-content selector=\"nbp-logged-user\"></ng-content></div></div></div><div class=\"container second-level-menu\" [ngClass]=\"{'open': _showSecondLevelMenu}\" *ngIf=\"_showSecondLevelMenu\"><div class=\"row upper-bar\"><div class=\"menu-principale pull-left\"><span class=\"glyphicon icon icon-arrow-left\"></span> <span class=\"menu-principale-title\" (click)=\"_goBack()\">Men&ugrave; principale</span></div><div class=\"selected-first-level-menu pull-right\"><span class=\"icon {{_selectedItem.icon}}\"></span> <span>{{_selectedItem.label}}</span></div></div><div class=\"row second-level-buttons\"><div class=\"col-sm-8\" *ngFor=\"let section of _selectedItem.secondLevelMenu.sections; let i = index\" [ngClass]=\"{'main-menu-container-pad-l': i > 0, 'main-menu-container-pad-r': i !== _selectedItem.secondLevelMenu.sections.length - 1}\"><ul class=\"main-menu\"><li><a *ngFor=\"let item of section.items\" (click)=\"_onClick(item)\"><span *ngIf=\"item.icon\" class=\"icon {{item.icon}}\"></span> <span>{{item.label}}</span></a></li></ul></div></div></div></div>",
        styles: [".menu{position:relative;width:100%;height:0;overflow-x:hidden;overflow-y:auto;background-color:#323232;-moz-transition:height .25s ease-out;-o-transition:height .25s ease-out;transition:height .25s ease-out}.menu .icon{margin-right:.313em;font-size:1.75em;vertical-align:middle}.menu.closed{height:0}.menu.open{height:22em}.main-menu-container{padding:0}.section-menu:nth-child(2n+3){clear:left}.main-menu{list-style:none;padding:0 .313em 0 .313em;margin:0}.main-menu a{color:#ccc;display:table;width:100%;padding:.313em 1.25em .313em 1.25em;margin:1.25em 0 1.25em 0;text-decoration:none;cursor:pointer;height:3.75em}.main-menu a:active,.main-menu a:focus,.main-menu a:hover{background-color:#258900;color:#fff}.main-menu a span{display:table-cell;vertical-align:middle;text-align:left}.main-menu a span:nth-child(1){width:1.563em}.main-menu .select{background-color:#258900;color:#fff;border:1px solid #258900}.upper-bar{border-bottom:1px solid #6f6f6f}.menu-principale{color:#ccc;font-size:.875em;padding:1em .625em .625em .625em;cursor:pointer}.menu-principale .icon{font-size:.875em}.menu-principale-title{vertical-align:top}.selected-first-level-menu{color:#6f6f6f;padding:.625em}.first-level-menu{position:absolute;left:0;right:0;opacity:0;left:-6.25em;padding:0 .625em 0 .625em;-moz-transition:all .25s ease-out;-o-transition:all .25s ease-out;transition:all .25s ease-out}.first-level-menu.open{opacity:1;left:0}.second-level-menu{position:absolute;left:0;right:0;opacity:0;left:6.25em;-moz-transition:all .25s ease-out;-o-transition:all .25s ease-out;transition:all .25s ease-out}.second-level-menu.open{opacity:1;left:0}.contrasto-on .menu{background-color:#000}.contrasto-on .menu.open{border-bottom:2px solid #fff}.contrasto-on .main-menu a{color:#fff;border:1px solid #fff}.contrasto-on .main-menu a:active,.contrasto-on .main-menu a:focus,.contrasto-on .main-menu a:hover{background-color:#fff;color:#000;border:1px solid #fff}.contrasto-on .main-menu .select{background-color:#fff;color:#000;border:1px solid #fff}.contrasto-on .upper-bar{border-bottom:1px solid #000}.contrasto-on .menu-principale{color:#fff}.contrasto-on .selected-first-level-menu{color:#fff}.contrasto-on .user-button a{color:#fff;border:1px solid #fff}.contrasto-on .user-button a:active,.contrasto-on .user-button a:focus,.contrasto-on .user-button a:hover{background-color:#fff;color:#000;border:1px solid #fff} /*# sourceMappingURL=nbp-burger-menu.component.css.map */ "]
    }),
    __metadata$7("design:paramtypes", [])
], exports.NbpBurgerMenuComponent);

var __decorate$8 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$6 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.NbpHeaderComponent = (function () {
    function NbpHeaderComponent() {
        /**
         * Booleano che mantiene lo stato del Menu
         */
        this._nbpMenuOpen = false;
        /**
         * Booleano che permette di mostrare il Menu
         */
        this._nbpHideMenu = false;
        /**
         * Variabile di appoggio per enum NbpChannel
         */
        this._nbpChannel = exports.NbpChannel;
    }
    Object.defineProperty(NbpHeaderComponent.prototype, "nbpDisableSticky", {
        /**
         * Booleano che abilita/disabilita il posizionamento sticky
         * al top della pagina
         */
        get: function () { return this._nbpDisableSticky; },
        set: function (value) { this._nbpDisableSticky = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    
    
    NbpHeaderComponent.prototype._toogleMenu = function () {
        this._nbpMenuOpen = !this._nbpMenuOpen;
        if (this.innerMenu) {
            this.innerMenu.toggle();
        }
    };
    NbpHeaderComponent.prototype.ngAfterContentInit = function () {
        if (!this.nbpChannel) {
            this.nbpChannel = exports.NbpChannel.ABC;
        }
        this._checkMenuPresence();
    };
    NbpHeaderComponent.prototype._checkMenuPresence = function () {
        this._nbpHideMenu = this.nbpChannel === exports.NbpChannel.ABC || !this.innerMenu;
    };
    return NbpHeaderComponent;
}());
__decorate$8([
    _angular_core.Input(),
    __metadata$6("design:type", String)
], exports.NbpHeaderComponent.prototype, "nbpName", void 0);
__decorate$8([
    _angular_core.Input(),
    __metadata$6("design:type", Number)
], exports.NbpHeaderComponent.prototype, "nbpChannel", void 0);
__decorate$8([
    _angular_core.Input(),
    __metadata$6("design:type", Boolean),
    __metadata$6("design:paramtypes", [Object])
], exports.NbpHeaderComponent.prototype, "nbpDisableSticky", null);
__decorate$8([
    _angular_core.ContentChild(exports.NbpBurgerMenuComponent),
    __metadata$6("design:type", exports.NbpBurgerMenuComponent)
], exports.NbpHeaderComponent.prototype, "innerMenu", void 0);
exports.NbpHeaderComponent = __decorate$8([
    _angular_core.Component({
        selector: 'nbp-header',template: "<div class=\"header\" [ngClass]=\"{'navbar-fixed-top':!_nbpDisableSticky}\"><div class=\"navbar\" id=\"header-navbar\"><div class=\"container\" [ngClass]=\"{'container-slim': (nbpChannel===_nbpChannel.ABC)}\"><div class=\"navbar-logo\" *ngIf=\"nbpName\"><label *ngIf=\"nbpChannel!==_nbpChannel.ABC\" class=\"nome-applicativo\" [innerHTML]=\"nbpName\"></label><a class=\"navbar-logo-brand-small\" href=\"#/\"><span class=\"sr-only\">Intesa San Paolo</span></a></div><div class=\"navbar-logo\" *ngIf=\"!nbpName && nbpChannel!==_nbpChannel.ABC\"><a class=\"navbar-logo-brand\" href=\"#/\"><span class=\"sr-only\">Intesa San Paolo</span></a></div><div class=\"navbar-logo\" *ngIf=\"!nbpName && (nbpChannel===_nbpChannel.ABC)\"><a class=\"navbar-logo-brand-small\" href=\"#/\"><span class=\"sr-only\">Intesa San Paolo</span></a></div><div *ngIf=\"nbpChannel!==_nbpChannel.ABC\" class=\"navbar-hole\"><div><ng-content></ng-content></div></div><div *ngIf=\"nbpChannel===_nbpChannel.ABC\" class=\"navbar-info-cliente pull-right\"><div><ng-content select=\"nbp-customer-name\"></ng-content></div></div><div *ngIf=\"!_nbpHideMenu\" class=\"navbar-toggle\" (click)=\"_toogleMenu()\" ng-class=\"{'navbar-toggle-open': _nbpMenuOpen}\"><button type=\"button\"><span class=\"icon {{_nbpMenuOpen ? 'ico-comuni-chiudi' : 'ico-navbar-menu'}}\"></span></button></div></div></div></div><ng-content select=\"nbp-burger-menu\"></ng-content>",
        styles: [".header{width:100%;background-color:#f2f2f2;box-shadow:0 0 1.25em -.625em rgba(0,0,0,.8)}.header .navbar{position:relative;border:0!important;border-radius:0!important;margin:0!important;left:0;right:0;width:100%;background-color:#258900}.header .navbar .container{display:table;position:relative;padding-right:0;background-color:#258900;height:4.375em}.header .navbar .container-slim{height:3.125em!important}.header .row{margin:0}.header-overlay{position:relative;top:0;left:0;width:100%;height:100%;background:#f2f2f2}.navbar .container .navbar-logo{display:table-cell;vertical-align:middle;width:17em}.navbar .container .navbar-toggle{display:table-cell;vertical-align:middle;width:5em;height:4.375em;background-color:transparent;border:0;border-radius:0;margin:0;padding:0;text-align:center;cursor:pointer}.navbar .container .navbar-toggle:hover{background:#323232}.navbar .container .navbar-toggle:focus{background:#323232}.navbar .container .navbar-toggle:active{background:#323232}.navbar .container .navbar-info-cliente{display:table-cell;vertical-align:middle;width:22.25em;height:3.125em;background-color:transparent;text-align:left;color:#fff;line-height:1em}.navbar .container .navbar-info-cliente .container-arrow{float:right;padding-top:1.25em;padding-right:1.5625em}.navbar .container .navbar-info-cliente .accordion-arrow{cursor:pointer;font-size:1.6em}.navbar .container .navbar-info-cliente .info-cliente-open{position:absolute;background-color:#323232;z-index:1000;width:22.25em;height:9.8125em;border:0;border-radius:0;text-align:center;margin-top:.5625em;display:table}.navbar .container .navbar-info-cliente .info-cliente-open .container-nsg-title{vertical-align:middle;height:2.3125em;display:table-cell}.navbar .container .navbar-info-cliente .info-cliente-open .container-nsg-cliente{vertical-align:middle;height:3.75em;border-top:1px solid #6f6f6f;display:table-cell;cursor:pointer;text-align:left}.navbar .container .navbar-info-cliente .info-cliente-open .container-nsg-cliente-select{vertical-align:middle;height:3.75em;border-top:1px solid #6f6f6f;display:table-cell;cursor:pointer;text-align:left;background-color:#3f3f3f;font-weight:700}.navbar .container .navbar-info-cliente .info-cliente-open .container-nsg-cliente-select .icon{float:right;color:#258900;padding-right:10px}.navbar .container .navbar-info-cliente .info-cliente-open .title-nsg-label{color:#ccc;text-transform:uppercase}.navbar .container .navbar-info-cliente .info-cliente-open .nsg-cliente{margin-left:1em;color:#ccc}.navbar .container .navbar-info-cliente .info-cliente-open .nsg-cliente-selected{margin-left:1em;color:#fff}.navbar .container .navbar-hole{display:table-cell;vertical-align:middle;margin-top:5px;margin-bottom:5px}.navbar-logo-brand{display:block;width:250px;height:30px;background-image:url(/cjlib/assets/images/sprite.png);background-repeat:no-repeat}.navbar-logo-brand-small{display:block;width:225px;height:25px;background-image:url(/cjlib/assets/images/sprite.png);background-repeat:no-repeat}.navbar-toggle button{position:relative;top:50%;transform:translateY(-50%);border:none;background:0 0;outline:0}.navbar-toggle .icon-bar{width:1.875em;height:.125em;margin:.313em auto;background-color:#fff!important}.navbar-toggle .ico-comuni-chiudi,.navbar-toggle .ico-navbar-menu{color:#fff;font-size:1.5em;margin:.313em auto}.navbar-toggle-operation button{position:relative;top:50%;transform:translateY(-50%);border:none;background:0 0;outline:0}.navbar-toggle-operation .icon-bar{width:1.875em;height:.125em;margin:.313em auto;background-color:#fff!important}.navbar-toggle-operation .icomoon-Modifica_matita{color:#fff;font-size:1.5em;margin:.313em auto}.navbar-toggle-operation span.labelOperazioni{color:#fff;font-size:.75em}.navbar-toggle-open{background:#323232!important}.nome-applicativo{position:relative;font-size:1.5em;margin-bottom:-.417em;color:#fff;font-weight:400}.header-paging-container,.header-progress-container{border-bottom:1px solid #ccc}@media (max-width:768px){.navbar .container{width:100%}}@media (-webkit-min-device-pixel-ratio:2){.navbar-logo-brand{background-image:url(/cjlib/assets/images/sprite-x2.png)}}@media (min-resolution:192dpi){.navbar-logo-brand{background-image:url(/cjlib/assets/images/sprite-x2.png)}}.triangolo{width:0;height:0;z-index:100;border-left:.625em solid transparent;border-right:.625em solid transparent;border-bottom:.625em solid #323232;float:right;margin-right:1.75em}.triangolo-hide{width:0;height:0;z-index:100;border-left:.625em solid transparent;border-right:.625em solid transparent;border-bottom:.625em solid transparent;float:right}.container-row{display:table-row}.container-ident-cliente{margin-top:0;margin-bottom:0;font-size:.875em;color:inherit;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:78%;padding-left:.625em;font-weight:400;float:left}.voce-ident-cliente{margin-top:0;margin-bottom:0;font-size:.875em;color:inherit;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-weight:400}.testo-ident-cliente{margin-top:0;margin-bottom:0;font-size:.875em;color:inherit;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-weight:700}@media (max-width:970px){.nome-applicativo{font-size:1.2em}}.contrasto-on .header{background-color:#fff}.contrasto-on .header .navbar .container{background-color:#000}.contrasto-on .header .navbar-tape{background-color:#000}.contrasto-on .header-overlay{background:#fff}.contrasto-on .navbar .container .navbar-toggle{background-color:transparent}.contrasto-on .navbar .container .navbar-toggle:hover{background:#000}.contrasto-on .navbar .container .navbar-toggle:focus{background:#000}.contrasto-on .navbar .container .navbar-toggle:active{background:#000}.contrasto-on .navbar .container .navbar-toggle-operation{background-color:transparent}.contrasto-on .navbar .container .navbar-toggle-operation:hover{background:#fff;color:#000}.contrasto-on .navbar .container .navbar-toggle-operation:hover .icomoon-Modifica_matita{color:#000}.contrasto-on .navbar .container .navbar-toggle-operation:hover span{color:#000}.contrasto-on .navbar .container .navbar-toggle-operation:focus{background:#fff;color:#000}.contrasto-on .navbar .container .navbar-toggle-operation:focus .icomoon-Modifica_matita{color:#000}.contrasto-on .navbar .container .navbar-toggle-operation:focus span{color:#000}.contrasto-on .navbar .container .navbar-toggle-operation:active{background:#fff;color:#000}.contrasto-on .navbar .container .navbar-toggle-operation:active .icomoon-Modifica_matita{color:#000}.contrasto-on .navbar .container .navbar-toggle-operation:active span{color:#000}.contrasto-on .navbar .container .navbar-toggle-operation.navbar-toggle-open{background:#fff!important;color:#000}.contrasto-on .navbar .container .navbar-toggle-operation.navbar-toggle-open .icomoon-Modifica_matita{color:#000}.contrasto-on .navbar .container .navbar-toggle-operation.navbar-toggle-open span{color:#000}.contrasto-on .navbar .container .navbar-info-cliente{background-color:transparent;border-left:1px solid #fff;border-right:1px solid #fff;color:#fff}.contrasto-on .navbar .container .navbar-info-cliente .info-cliente-open{background-color:#000}.contrasto-on .navbar .container .navbar-info-cliente .info-cliente-open .container-nsg-title{border-bottom:1px solid #fff;border-top:1px solid #fff}.contrasto-on .navbar .container .navbar-info-cliente .info-cliente-open .container-nsg-cliente{border-bottom:1px solid #fff;border-top:none}.contrasto-on .navbar .container .navbar-info-cliente .info-cliente-open .container-nsg-cliente-select{border-bottom:1px solid #000;border-top:none;background-color:#fff}.contrasto-on .navbar .container .navbar-info-cliente .info-cliente-open .container-nsg-cliente-select .icon{color:#000}.contrasto-on .navbar .container .navbar-info-cliente .info-cliente-open .title-nsg-label{color:#fff}.contrasto-on .navbar .container .navbar-info-cliente .info-cliente-open .nsg-cliente{color:#fff}.contrasto-on .navbar .container .navbar-info-cliente .info-cliente-open .nsg-cliente-selected{color:#000}.contrasto-on .navbar-toggle .icon-bar{background-color:#fff!important}.contrasto-on .navbar-toggle .ico-comuni-chiudi,.contrasto-on .navbar-toggle .ico-navbar-menu,.contrasto-on .navbar-toggle .icomoon-Modifica_matita{color:#fff}.contrasto-on .navbar-toggle-open{background:#000!important}.contrasto-on .prev-page-btn-container .prev-page-btn{color:#000}.contrasto-on .page-title-container{border-bottom:1px solid #000}.contrasto-on .nome-applicativo{color:#fff}.contrasto-on .header-paging-container,.contrasto-on .header-progress-container{border-bottom:1px solid #000}.contrasto-on .triangolo{position:absolute;-webkit-transform:rotate(45deg);transform:rotate(45deg);content:\" \";width:15px;height:15px;border:0 solid #fff;border-width:1px 0 0 1px;background:#000;right:112px;z-index:1001;bottom:-8px;margin:0 auto}.contrasto-on .container-ident-cliente{color:inherit}.contrasto-on .voce-ident-cliente{color:inherit}.contrasto-on .testo-ident-cliente{color:inherit} /*# sourceMappingURL=nbp-header.component.css.map */ "]
    }),
    __metadata$6("design:paramtypes", [])
], exports.NbpHeaderComponent);

var __decorate$10 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$8 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.NbpNavigationHeaderComponent = (function () {
    function NbpNavigationHeaderComponent() {
        /**
         * Booleano per abilitare il tasto “Pagina precedente”
         */
        this.nbpShowPrevPage = false;
        /**
         * Evento emesso sul click dell'elemento nbpShowPrevPage
         */
        this.nbpPrevPage = new _angular_core.EventEmitter();
    }
    Object.defineProperty(NbpNavigationHeaderComponent.prototype, "nbpDisableSticky", {
        /**
         * Booleano che abilita/disabilita il posizionamento sticky
         * al top della pagina
         */
        get: function () { return this._nbpDisableSticky; },
        set: function (value) { this._nbpDisableSticky = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    
    
    NbpNavigationHeaderComponent.prototype.ngOnInit = function () {
    };
    NbpNavigationHeaderComponent.prototype.onClick = function () {
        this.nbpPrevPage.emit('nbpPrevPage');
    };
    return NbpNavigationHeaderComponent;
}());
__decorate$10([
    _angular_core.Input(),
    __metadata$8("design:type", String)
], exports.NbpNavigationHeaderComponent.prototype, "nbpTitle", void 0);
__decorate$10([
    _angular_core.Input(),
    __metadata$8("design:type", String)
], exports.NbpNavigationHeaderComponent.prototype, "nbpSectionTitle", void 0);
__decorate$10([
    _angular_core.Input(),
    __metadata$8("design:type", Object)
], exports.NbpNavigationHeaderComponent.prototype, "nbpShowPrevPage", void 0);
__decorate$10([
    _angular_core.Input(),
    __metadata$8("design:type", Boolean),
    __metadata$8("design:paramtypes", [Object])
], exports.NbpNavigationHeaderComponent.prototype, "nbpDisableSticky", null);
__decorate$10([
    _angular_core.Output(),
    __metadata$8("design:type", _angular_core.EventEmitter)
], exports.NbpNavigationHeaderComponent.prototype, "nbpPrevPage", void 0);
exports.NbpNavigationHeaderComponent = __decorate$10([
    _angular_core.Component({
        selector: 'nbp-navigation-header',
        template: "<div class=\"header-overlay\" [ngClass]=\"{'sticky': !_nbpDisableSticky}\" id=\"header-overlay\"><div id=\"navigation-header-title\" class=\"page-title-container row\" [hidden]=\"!nbpSectionTitle || !nbpTitle\"><div class=\"titles\"><div class=\"page-overtitle\" [innerHTML]=\"nbpSectionTitle \" [hidden]=\"!nbpSectionTitle\"></div><div class=\"page-title\" [innerHTML]=\"nbpTitle \" [hidden]=\"!nbpTitle\"></div></div></div><div class=\"prev-page-btn-container\" [hidden]=\"!nbpShowPrevPage\"><div class=\"container\"><div class=\"prev-page-btn\"><span (click)=\"onClick()\" role=\"button\"><span class=\"prev-page-btn-arrow icomoon-Simboli_Risorsa-12\"></span> <span class=\"prev-page-btn-text\" [innerHTML]=\"'Pagina Precedente'\"></span></span></div></div></div></div>",styles: [".header-overlay{position:relative;top:0;left:0;width:100%;height:100%;background:#f2f2f2}.prev-page-btn-container{position:absolute;top:0;left:0;right:0;margin:0 auto}.prev-page-btn-container .container{display:table}.prev-page-btn-container .prev-page-btn{display:table-cell;height:3.125em;vertical-align:middle;color:#258900}.prev-page-btn-container .prev-page-btn .prev-page-btn-arrow{font-size:1.25em;vertical-align:middle}.prev-page-btn-container .prev-page-btn .prev-page-btn-text{font-size:.875em}.page-title-container{height:3.125em;display:table-cell;vertical-align:middle;border-bottom:1px solid #ccc}.page-title-container .titles{display:table;table-layout:fixed;width:100%}.page-overtitle{position:relative;font-size:.75em;text-align:center;margin-bottom:-.417em;text-transform:uppercase}.page-title{position:relative;font-size:1.125em;text-align:center;font-weight:700;margin:0;text-transform:uppercase}.page-subtitle{position:relative;font-size:.75em;text-align:center;margin-top:-.417em}.header-overlay.sticky{position:fixed;top:0;left:0!important;z-index:9999!important;height:inherit!important;width:inherit!important} /*# sourceMappingURL=nbp-navigation-header.component.css.map */ "]
    }),
    __metadata$8("design:paramtypes", [])
], exports.NbpNavigationHeaderComponent);

var __decorate$12 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$10 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NbpTableUtilService = (function () {
    function NbpTableUtilService() {
        this.disablePaginationStatus = {
            first: false,
            last: false,
            next: false,
            page: false,
            prev: false
        };
    }
    NbpTableUtilService.prototype.setColumns = function (columns) {
        this.columns = columns;
    };
    
    NbpTableUtilService.prototype.getCurrentPageStatus = function () {
        return this.currentPageStatus;
    };
    NbpTableUtilService.prototype.setCurrentPageStatus = function (currentPageStatus) {
        if (currentPageStatus.totalRecords > 0) {
            this.disablePaginationStatus.last = false;
        }
        else {
            this.disablePaginationStatus.last = true;
        }
        this.currentPageStatus = currentPageStatus;
        if (currentPageStatus.totalRecords && (currentPageStatus.pageNumber) * currentPageStatus.pageSize > currentPageStatus.totalRecords) {
            this.disablePaginationStatus.next = true;
        }
        else {
            this.disablePaginationStatus.next = false;
        }
    };
    
    NbpTableUtilService.prototype.setCurrentPageNumber = function (pageNumber) {
        this.currentPageStatus.pageNumber = pageNumber;
    };
    NbpTableUtilService.prototype.getColumns = function () {
        return this.columns;
    };
    NbpTableUtilService.prototype.setColumnOrdering = function (columnField, orderingType) {
        this.columns.map(function (element) {
            element.currentOrder = null;
            if (element.field === columnField) {
                element.currentOrder = orderingType === undefined ? '' : orderingType;
            }
        });
    };
    NbpTableUtilService.prototype.getCurrentOrdering = function () {
        var filteredOrders = this.columns.filter(function (column) { return column.currentOrder !== null; });
        var orders = filteredOrders.map(function (column) { return column.currentOrder + column.field; });
        return orders;
    };
    
    NbpTableUtilService.prototype.findGlobalIndex = function (rowIndex) {
        return this.currentPageStatus ? (this.currentPageStatus.pageSize * (this.currentPageStatus.pageNumber - 1)) + (rowIndex) : -1;
    };
    NbpTableUtilService.prototype.findIndexOfSelectedByItem = function (item, selectedRows) {
        var itemSelectedId = -1;
        selectedRows.map(function (row, index) {
            if (row === item) {
                itemSelectedId = index;
            }
        });
        return itemSelectedId;
    };
    NbpTableUtilService.prototype.getColumnsFromChildren = function (children) {
        var columns = children.map(function (child) {
            var column = {
                id: child.nbpId,
                field: child.nbpField,
                title: child.nbpTitle,
                visible: child.nbpVisible,
                sortable: child.nbpSortable,
                filter: child.nbpFilter,
                filterArg: child.nbpFilterArg,
                currentOrder: null
            };
            return column;
        });
        return columns;
    };
    return NbpTableUtilService;
}());
NbpTableUtilService = __decorate$12([
    _angular_core.Injectable(),
    __metadata$10("design:paramtypes", [])
], NbpTableUtilService);

var CjlibSettings = (function () {
    function CjlibSettings() {
    }
    return CjlibSettings;
}());
CjlibSettings.DATE_FORMAT = 'dd-MM-yyyy';
CjlibSettings.DECIMAL_FORMAT = '1.2';
CjlibSettings.PERCENT_FORMAT = '1.2';

var __decorate$13 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$11 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NbpFormatterService = (function () {
    function NbpFormatterService(currencyPipe, datePipe, decimalPipe, lowercasePipe, percentPipe, uppercasePipe) {
        this.currencyPipe = currencyPipe;
        this.datePipe = datePipe;
        this.decimalPipe = decimalPipe;
        this.lowercasePipe = lowercasePipe;
        this.percentPipe = percentPipe;
        this.uppercasePipe = uppercasePipe;
    }
    NbpFormatterService.prototype.displayValueTransformation = function (value, pipe, arg) {
        var transformedValue = value;
        var format;
        switch (pipe) {
            case exports.NbpPipe.CURRENCY:
                transformedValue = this.currencyPipe.transform(value, arg);
                break;
            case exports.NbpPipe.DATE:
                format = arg ? arg : CjlibSettings.DATE_FORMAT;
                transformedValue = this.datePipe.transform(value, format);
                break;
            case exports.NbpPipe.DECIMAL:
                format = arg ? arg : CjlibSettings.DECIMAL_FORMAT;
                transformedValue = this.decimalPipe.transform(value, format);
                break;
            case exports.NbpPipe.LOWERCASE:
                transformedValue = this.lowercasePipe.transform(value);
                break;
            case exports.NbpPipe.PERCENT:
                format = arg ? arg : CjlibSettings.DECIMAL_FORMAT;
                transformedValue = this.percentPipe.transform(value, format);
                break;
            case exports.NbpPipe.UPPERCASE:
                transformedValue = this.uppercasePipe.transform(value);
                break;
            default:
                transformedValue = value;
                break;
        }
        return transformedValue;
    };
    return NbpFormatterService;
}());
NbpFormatterService = __decorate$13([
    _angular_core.Injectable(),
    __metadata$11("design:paramtypes", [_angular_common.CurrencyPipe,
        _angular_common.DatePipe,
        _angular_common.DecimalPipe,
        _angular_common.LowerCasePipe,
        _angular_common.PercentPipe,
        _angular_common.UpperCasePipe])
], NbpFormatterService);

var SortingDirection;
(function (SortingDirection) {
    SortingDirection[SortingDirection["ASCENDING"] = 1] = "ASCENDING";
    SortingDirection[SortingDirection["DESCENDING"] = -1] = "DESCENDING";
})(SortingDirection || (SortingDirection = {}));
var CompareStatus;
(function (CompareStatus) {
    CompareStatus[CompareStatus["HIGHER"] = 1] = "HIGHER";
    CompareStatus[CompareStatus["EQUAL"] = 0] = "EQUAL";
    CompareStatus[CompareStatus["LOWER"] = -1] = "LOWER";
})(CompareStatus || (CompareStatus = {}));
var Actions;
(function (Actions) {
    Actions[Actions["CLICKED"] = 0] = "CLICKED";
    Actions[Actions["SELECTED"] = 1] = "SELECTED";
})(Actions || (Actions = {}));

var __decorate$14 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$12 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var nextId$3 = 0;
exports.NbpTableColumnComponent = (function () {
    function NbpTableColumnComponent() {
        /**
         * Identificativo univoco per la colonna. Se non viene passato un valore, l'id viene autogenerato.
         */
        this.nbpId = "nbp-table-column-" + ++nextId$3;
        /**
          * Proprietà booleana rappresentante la visualizzazione della colonna nella tabella.
          * Default: true;
          */
        this.nbpVisible = true;
    }
    return NbpTableColumnComponent;
}());
__decorate$14([
    _angular_core.Input(),
    __metadata$12("design:type", String)
], exports.NbpTableColumnComponent.prototype, "nbpId", void 0);
__decorate$14([
    _angular_core.Input(),
    __metadata$12("design:type", String)
], exports.NbpTableColumnComponent.prototype, "nbpTitle", void 0);
__decorate$14([
    _angular_core.Input(),
    __metadata$12("design:type", String)
], exports.NbpTableColumnComponent.prototype, "nbpField", void 0);
__decorate$14([
    _angular_core.Input(),
    __metadata$12("design:type", Boolean)
], exports.NbpTableColumnComponent.prototype, "nbpSortable", void 0);
__decorate$14([
    _angular_core.Input(),
    __metadata$12("design:type", Boolean)
], exports.NbpTableColumnComponent.prototype, "nbpVisible", void 0);
__decorate$14([
    _angular_core.Input(),
    __metadata$12("design:type", Number)
], exports.NbpTableColumnComponent.prototype, "nbpFilter", void 0);
__decorate$14([
    _angular_core.Input(),
    __metadata$12("design:type", Object)
], exports.NbpTableColumnComponent.prototype, "nbpFilterArg", void 0);
exports.NbpTableColumnComponent = __decorate$14([
    _angular_core.Component({
        selector: 'nbp-table-column',
        template: '<span></span>',
    }),
    __metadata$12("design:paramtypes", [])
], exports.NbpTableColumnComponent);

var __decorate$11 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$9 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { DatePipe, DecimalPipe, CurrencyPipe } from '@angular/common';
var NbpOnRowActionEvent = (function () {
    function NbpOnRowActionEvent(item, action, rowIndex, globalIndex) {
        this.item = item;
        this.action = action;
        this.rowIndex = rowIndex;
        this.globalIndex = globalIndex;
    }
    return NbpOnRowActionEvent;
}());
var NbpOnRowsActionEvent = (function () {
    function NbpOnRowsActionEvent(items, lastSelectedItem) {
        this.items = items;
        this.lastSelectedItem = lastSelectedItem;
    }
    return NbpOnRowsActionEvent;
}());
/** intero autogenerato usato per id unici per checkbox component */
var nextId$2 = 0;
exports.NbpTableComponent = (function () {
    function NbpTableComponent(_tableUtilService, _nbpFormatter) {
        this._tableUtilService = _tableUtilService;
        this._nbpFormatter = _nbpFormatter;
        /**
         * Stringa che definisce l'id della tabella del cmponente
         */
        this.nbpId = "nbp-table-" + ++nextId$2;
        /**
         * Rappresenta la possibilità di decidere se bindare i dati al momento dell'inizializzazione del componente o no.
         * In caso di nbpAutoBind = false, è necessario richiamare il metodo pubblico "datasourceRead" per popolare la tabella.
         */
        this.nbpAutoBind = true;
        /**
         * Stringa che rappresenta la tipologia di selezione della griglia tra:
         * 'single' | 'multi' | 'none'
         * Default: 'none'
         */
        this.nbpSelectionType = 'none';
        /**
         * Evento che viene emesso al click su una riga singola della tabella (solo nbpSelectionType = 'none').
         * L'evento emesso contiene un insieme di metadati definiti nella INbpClickRowEvent.
         * @param {EventEmitter<INbpOnRowActionEvent<T>>}  nbpOnClickRow
         */
        this.nbpOnClickRow = new _angular_core.EventEmitter();
        /**
         * Evento che viene emesso alla selezione singola di un record della table (solo nbpSelectionType = 'single').
         * L'evento emesso contiene il dato selezionato del tipo definito.
         * @param {EventEmitter<INbpOnRowActionEvent<T>>}  nbpOnSelectRow
         */
        this.nbpOnSelectRow = new _angular_core.EventEmitter();
        /**
         * Evento che viene emesso al click su una singola della tabella (solo nbpSelectionType = 'multi').
         * L'evento emesso contiene la lista dei record selezionati
         * e l'ultimo elemento selezionato definiti nella INbpClickRowsEvent.
         * @param {EventEmitter<INbpOnRowActionEvent<T>>}  nbpOnMultiSelectRows
         */
        this.nbpOnMultiSelectRow = new _angular_core.EventEmitter();
        /**
         * Evento lanciato ad ogni cambio pagina (utile per il servizio di
         * paginazione lato BE)
         * @param {EventEmitter<any> = new EventEmitter(} ) nbpChangePage
         */
        this.nbpChangePage = new _angular_core.EventEmitter();
        this._selectedRowsIndexes = new Array();
        this._selectedRows = new Array();
    }
    NbpTableComponent.prototype._initializeTableByChildren = function (children) {
        this._tableUtilService.setColumns(this._tableUtilService.getColumnsFromChildren(children));
        this.nbpOptions.columns = this._tableUtilService.getColumns();
        this._tableUtilService.setCurrentPageStatus({ pageNumber: 1, pageSize: -1, totalRecords: -1 });
        this._firstPageNavigation();
    };
    // TODO IMPLEMENTARE POSSIBILITà DI INIZIALIZZARE VIA OPTIONS LE COLONNE
    /*initializeTableFromOptions() {
       this.tableUtilService.setColumns(this.nbpOptions.columns);
       this.tableUtilService.setCurrentPageStatus({ pageNumber: 1, pageSize: null, totalRecords: null });
       this.firstPageNavigation();
     }*/
    NbpTableComponent.prototype._onOrder = function (columnField, orderingType) {
        this._tableUtilService.setColumnOrdering(columnField, orderingType);
        var currentPageStatus = this._tableUtilService.getCurrentPageStatus();
        this.navigateToPage(currentPageStatus.pageNumber, this._tableUtilService.getCurrentOrdering(), this.nbpOptions.pageSize);
    };
    NbpTableComponent.prototype._firstPageNavigation = function () {
        this.navigateToPage(1, this._tableUtilService.getCurrentOrdering(), this.nbpOptions.pageSize);
    };
    NbpTableComponent.prototype._clearRowsSelections = function () {
        this._selectedRowsIndexes.splice(0);
        this._selectedRows.splice(0);
    };
    NbpTableComponent.prototype._emitEmptySelectionEvents = function () {
        this.nbpOnSelectRow.emit();
        this.nbpOnMultiSelectRow.emit();
    };
    NbpTableComponent.prototype._singleRowSelection = function (item, rowIndex) {
        var globalIndex = this._tableUtilService.findGlobalIndex(rowIndex);
        var eventDataSingle = new NbpOnRowActionEvent(item, Actions.SELECTED, rowIndex, globalIndex);
        this.nbpOnSelectRow.emit(eventDataSingle);
        this._clearRowsSelections();
        this._selectedRowsIndexes.push(rowIndex);
        console.debug('singleselect');
    };
    NbpTableComponent.prototype._removeItemFromSelectedRows = function (item) {
        var itemSelectedId = this._tableUtilService.findIndexOfSelectedByItem(item, this._selectedRows);
        this._selectedRows.splice(itemSelectedId, 1);
        console.debug('remove element');
    };
    NbpTableComponent.prototype._insertItemIntoSelectedRows = function (item) {
        this._selectedRows.push(item);
        console.debug('add element');
    };
    NbpTableComponent.prototype._sendMultiSelectionEvent = function () {
        var eventDataMulti = new NbpOnRowsActionEvent(this._selectedRows, this._selectedRows[this._selectedRows.length - 1]);
        this.nbpOnMultiSelectRow.emit(eventDataMulti);
    };
    NbpTableComponent.prototype._onSelectRow = function (item, rowIndex, checkboxValue) {
        switch (this.nbpSelectionType) {
            case 'single':
                this._singleRowSelection(item, rowIndex);
                break;
            case 'multi':
                var eventDataMulti = void 0;
                switch (checkboxValue) {
                    case false:
                        this._removeItemFromSelectedRows(item);
                        break;
                    case true:
                        this._insertItemIntoSelectedRows(item);
                        break;
                }
                this._sendMultiSelectionEvent();
                break;
            case 'none':
                this._onClickRow(item, rowIndex);
                console.debug('none');
                break;
        }
    };
    NbpTableComponent.prototype._onClickRow = function (item, rowIndex) {
        var globalIndex = this._tableUtilService.findGlobalIndex(rowIndex);
        var eventData = new NbpOnRowActionEvent(item, Actions.CLICKED, rowIndex, globalIndex);
        this.nbpOnClickRow.emit(eventData);
    };
    NbpTableComponent.prototype._getCellValueForColumn = function (obj, column) {
        var cellValue = getPropertyValueByPath(obj, column.field);
        var formatteCellValue = this._nbpFormatter.displayValueTransformation(cellValue, column.filter, column.filterArg);
        return formatteCellValue;
    };
    NbpTableComponent.prototype._isCurrentIndexIntoSelected = function (currentIndex) {
        var result = this._selectedRowsIndexes.indexOf(currentIndex);
        return result === -1 ? false : true;
    };
    NbpTableComponent.prototype._onNextPage = function (requestedState) {
        this._clearRowsSelections();
        this._emitEmptySelectionEvents();
        var currentOrder = this._tableUtilService.getCurrentOrdering();
        this.navigateToPage(requestedState.pageNumber, currentOrder, this.nbpOptions.pageSize);
    };
    NbpTableComponent.prototype._onPrevPage = function (requestedState) {
        this._clearRowsSelections();
        this._emitEmptySelectionEvents();
        var currentOrder = this._tableUtilService.getCurrentOrdering();
        this.navigateToPage(requestedState.pageNumber, currentOrder, this.nbpOptions.pageSize);
    };
    NbpTableComponent.prototype._onFirstPage = function () {
        this._clearRowsSelections();
        this._emitEmptySelectionEvents();
        this._tableUtilService.setCurrentPageNumber(1);
        this._firstPageNavigation();
    };
    NbpTableComponent.prototype._onLastPage = function (requestedState) {
        var currentPageStatus = this._tableUtilService.getCurrentPageStatus();
        if (currentPageStatus.totalRecords && currentPageStatus.pageSize) {
            this._clearRowsSelections();
            this._emitEmptySelectionEvents();
            var currentOrder = this._tableUtilService.getCurrentOrdering();
            var lastPage = this._evaluateLastPage(currentPageStatus);
            this.navigateToPage(lastPage, currentOrder, this.nbpOptions.pageSize);
        }
    };
    NbpTableComponent.prototype._evaluateLastPage = function (currentPageStatus) {
        var partialPages = Math.floor((currentPageStatus.totalRecords) / currentPageStatus.pageSize);
        var lastPage = (currentPageStatus.totalRecords) % currentPageStatus.pageSize ? partialPages + 1 : partialPages;
        return lastPage;
    };
    NbpTableComponent.prototype._onGoToPage = function (requestedState) {
        this._clearRowsSelections();
        this._emitEmptySelectionEvents();
        var currentOrder = this._tableUtilService.getCurrentOrdering();
        var currentPageStatus = this._tableUtilService.getCurrentPageStatus();
        if (currentPageStatus && currentPageStatus.totalRecords) {
            var lastPage = this._evaluateLastPage(currentPageStatus);
            var pageToGo = lastPage < requestedState.pageNumber ? lastPage : requestedState.pageNumber;
            this.navigateToPage(pageToGo, currentOrder, this.nbpOptions.pageSize);
        }
    };
    NbpTableComponent.prototype._onPageChange = function () {
        this.nbpChangePage.emit();
        console.debug('changed page');
    };
    NbpTableComponent.prototype._initializePaginationGap = function () {
        if (this.nbpOptions.pageGapSize) {
            this._pageGapSize = this.nbpOptions.pageGapSize;
        }
    };
    NbpTableComponent.prototype.ngOnInit = function () {
        this._shadowAutoBind = this.nbpAutoBind;
    };
    NbpTableComponent.prototype.ngAfterContentInit = function () {
        if (!this.nbpSelectionType) {
            this.nbpSelectionType = 'none';
        }
        if (this.contentChildren) {
            this._initializeTableByChildren(this.contentChildren);
        }
        this._initializePaginationGap();
    };
    NbpTableComponent.prototype.ngOnDestroy = function () {
        if (this._datasourceSubscription) {
            this._datasourceSubscription.unsubscribe();
        }
    };
    /**
     * Permette di navigare la paginazione della tabella programmaticamente.
     * @param pageNumber (Obbligatotio) Numero della pagina da visualizzare
     * @param sortingFields (Opzionale) array contenente i nomi delle proprietà su cui fare il sorting
     * (e.g. [name]->(ASC name) oppure [-name]->(DESC name) )
     * @param pageSize (Opzionale) serve per il set di un pageSize differente dal defaultPageSize della DataSource
     */
    NbpTableComponent.prototype.navigateToPage = function (pageNumber, sortingFields, pageSize) {
        var _this = this;
        if (this.nbpDataSource && this._shadowAutoBind) {
            var currentPageStream = this.nbpDataSource.getPage(pageNumber, sortingFields, pageSize); // TODO prendere i parametri
            this._datasourceSubscription = currentPageStream.subscribe(function (value) {
                _this._tableUtilService.setCurrentPageStatus(value.status);
                _this._clearRowsSelections();
                _this._emitEmptySelectionEvents();
                _this._overridePaginationDisable = value.status.pageSize === value.status.totalRecords;
                if (value.data && value.data.length) {
                    _this._shadowNbpDataSource = value.data.slice();
                    // console.log('Resolve Subscribe');
                }
                else {
                    var pageNumber_1 = _this._tableUtilService.getCurrentPageStatus().pageNumber - 1;
                    _this._tableUtilService.setCurrentPageNumber(pageNumber_1);
                }
                
            }, function (error) {
                console.debug(JSON.stringify(error));
            });
        }
    };
    /**
     * Permette di bindare i dati alla tabella oppure in caso di dati già bindati di ricaricare i dati e riportare alla prima pagina.
     */
    NbpTableComponent.prototype.datasourceRead = function () {
        if (this.nbpDataSource && !this._shadowAutoBind) {
            this._shadowAutoBind = true;
        }
        this.navigateToPage(1);
    };
    return NbpTableComponent;
}());
__decorate$11([
    _angular_core.Input(),
    __metadata$9("design:type", String)
], exports.NbpTableComponent.prototype, "nbpId", void 0);
__decorate$11([
    _angular_core.Input(),
    __metadata$9("design:type", Object)
], exports.NbpTableComponent.prototype, "nbpOptions", void 0);
__decorate$11([
    _angular_core.Input(),
    __metadata$9("design:type", Object)
], exports.NbpTableComponent.prototype, "nbpDataSource", void 0);
__decorate$11([
    _angular_core.Input(),
    __metadata$9("design:type", Boolean)
], exports.NbpTableComponent.prototype, "nbpAutoBind", void 0);
__decorate$11([
    _angular_core.Input(),
    __metadata$9("design:type", String)
], exports.NbpTableComponent.prototype, "nbpSelectionType", void 0);
__decorate$11([
    _angular_core.Output(),
    __metadata$9("design:type", _angular_core.EventEmitter)
], exports.NbpTableComponent.prototype, "nbpOnClickRow", void 0);
__decorate$11([
    _angular_core.Output(),
    __metadata$9("design:type", _angular_core.EventEmitter)
], exports.NbpTableComponent.prototype, "nbpOnSelectRow", void 0);
__decorate$11([
    _angular_core.Output(),
    __metadata$9("design:type", _angular_core.EventEmitter)
], exports.NbpTableComponent.prototype, "nbpOnMultiSelectRow", void 0);
__decorate$11([
    _angular_core.Output(),
    __metadata$9("design:type", _angular_core.EventEmitter)
], exports.NbpTableComponent.prototype, "nbpChangePage", void 0);
__decorate$11([
    _angular_core.ContentChildren(exports.NbpTableColumnComponent),
    __metadata$9("design:type", _angular_core.QueryList)
], exports.NbpTableComponent.prototype, "contentChildren", void 0);
exports.NbpTableComponent = __decorate$11([
    _angular_core.Component({
        selector: 'nbp-table',
        template: "<div class=\"table-container\"><table [id]=\"nbpId\" class=\"fixed-width\"><thead><tr id=\"headerRow\" class=\"row-nowrap\"><th *ngIf=\"nbpSelectionType === 'multi'\" class=\"table-label with-checkbox\"></th><th class=\"table-label\" *ngFor=\"let column of nbpOptions?.columns\" [hidden]=\"!column.visible\">{{column.title}}<div class=\"sort-button\" [hidden]=\"!nbpOptions.sortable || !column.sortable\"><div class=\"arrow-down\" (click)=\"_onOrder(column.field,'-');\" [ngClass]=\"{'active':column && column.currentOrder === '-'}\"></div><div class=\"arrow-up\" (click)=\"_onOrder(column.field);\" [ngClass]=\"{'active':column && column.currentOrder === '' }\"></div></div></th></tr></thead><tbody><tr *ngFor=\"let data of _shadowNbpDataSource; let rowIndex=index;\" class=\"table-row\" [ngClass]=\"{'highlighted': _isCurrentIndexIntoSelected(rowIndex), 'clickable': nbpSelectionType === 'single'}\" (click)=\"_onSelectRow(data,rowIndex);\"><td *ngIf=\"nbpSelectionType === 'multi'\" class=\"table-cell text-center selection-cell\"><input type=\"checkbox\" (click)=\"_onSelectRow(data, rowIndex, $event.target.checked);\"></td><td *ngFor=\"let column of nbpOptions?.columns\" class=\"table-cell text-center data-cell\" [hidden]=\"!column.visible\">{{ _getCellValueForColumn(data , column) }}</td></tr></tbody></table><nbp-pagination *ngIf=\"_shadowAutoBind && (!nbpOptions.disablePagination && !_overridePaginationDisable)\" [nbpPaginationStatus]=\"_tableUtilService.currentPageStatus\" [nbpDisablePaginationStatus]=\"_tableUtilService.disablePaginationStatus\" [nbpPageWindowSize]=\"_pageGapSize\" (nbpOnFirst)=\"_onFirstPage($event)\" (nbpOnLast)=\"_onLastPage($event)\" (nbpOnNext)=\"_onNextPage($event)\" (nbpOnGoToPage)=\"_onGoToPage($event)\" (nbpOnPrev)=\"_onPrevPage($event)\" (nbpOnPageChange)=\"_onPageChange()\"></nbp-pagination></div><ng-content selector=\"nbp-table-column\"></ng-content>",
        viewProviders: [NbpTableUtilService, NbpFormatterService],styles: [".table-container{margin-bottom:20px}.table-container table{width:100%}.table-select{border-collapse:separate}.table-scrollbar{overflow-x:scroll}.table-label{padding:10px;color:#6f6f6f;font-weight:700;font-size:.75em;text-transform:uppercase;text-align:center;white-space:normal;height:3.333em;border:1px solid #ccc;background-color:#f2f2f2}.table-label.with-checkbox{width:4.167em;padding:0}.table-label.with-accordion{width:4.167em;padding:0}.table-label .icheckbox-container{margin-right:0!important;display:inline-table!important}.table-label.label-select{color:#6f6f6f;font-weight:700;font-size:.75em;text-transform:uppercase;height:1.875em;text-align:left;padding-left:.625em;border:1px solid #ccc;background-color:#fff}.table-label.label-select.select{background-color:#c4dbbc;border:1px solid #6f6f6f}.table-label.label-select .radio-label{font-size:100%}.table-row{font-size:.875em;height:3.429em;background-color:#fff;color:#323232;border:1px solid #ccc}.table-row.clickable{border-top:0;cursor:pointer}.table-row.clickable:hover{background-color:#89bc72}.table-row.with-checkbox{width:3.429em;padding:0;text-align:center;cursor:auto}.table-row.bold{font-weight:700}.table-row.highlighted{background-color:#89bc72}.table-row .icheckbox-container{margin-right:0!important;display:inline-table!important}.table-row.with-accordion{width:3.429em;padding:0;text-align:center;cursor:auto}.table-row .accordion-arrow{position:relative;font-size:2em;margin-top:-.156em;cursor:pointer}.row-yellow{background-color:#ff0}.cell-red{background-color:red}.content-accordion{background-color:#f8f8f8}.content-accordion .accordion-panel{text-align:center;font-size:.75em;font-family:Arial;font-style:normal;height:6.25em}.table-cell{position:relative;padding:0 .688em 0 .688em}.table-cell.with-borders{border:1px solid #ccc}.table-cell.with-checkbox{width:3.429em;padding:0;text-align:center}.table-cell.with-accordion{width:3.429em;padding:0;text-align:center}.table-cell.cell-select{color:#6f6f6f;height:4.375em;border:1px solid #ccc;background-color:#f2f2f2}.table-cell.cell-select.select{background-color:#c4dbbc;border:1px solid #6f6f6f;border-top:none}.table-cell a{text-overflow:ellipsis;word-wrap:break-word}.table-cell img{width:100%}.table-pagination{margin-top:.625em}.table-pagination table{width:100%;table-layout:fixed}.table-pagination .table-page-btn{display:inline-block;color:#258900;cursor:pointer;margin-top:.313em}.table-pagination .table-page-btn.disabled{color:#6f6f6f;cursor:auto}.table-pagination .table-page-btn .page-btn-arrow{font-size:1.25em;vertical-align:middle}.table-pagination .table-page-btn .page-btn-text{padding:0 .625em 0 .625em;font-size:.813em;font-weight:700}.table-pagination .table-page-btn .table-page-number{display:inline-block;border:1px solid #258900;font-weight:700;color:#258900;background:#fff;text-align:center;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;width:2em;height:2em;font-size:.938em;line-height:2em;margin:0 .125em 0 .125em;cursor:pointer}.table-pagination .table-page-btn .table-page-number.backward{margin-right:-.125em}.table-pagination .table-page-btn .table-page-number.forward{margin-left:-.125em}.table-pagination .table-page-btn .table-page-number.active{color:#fff;background:#258900}.table-pagination .table-pagination-center{text-align:center}.table-pagination .table-pagination-center .table-page-btn{margin-top:0}.sort-button{cursor:pointer}.arrow-up{display:inline-block;position:relative;width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #258900;margin-right:-.125em}.arrow-up::before{content:'';position:absolute;top:1px;left:-5px;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #fff}.arrow-down{display:inline-block;position:relative;width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #258900;margin-left:-.125em}.arrow-down::before{content:'';position:absolute;top:auto;bottom:1px;left:-5px;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #fff}.arrow-up.active::before{display:none}.arrow-down.active::before{display:none}.annulla-check{display:inline-block;color:#258900;cursor:pointer;margin-top:.313em}.annulla-check .page-btn-text{padding:0 .625em 0 .625em;font-size:.813em;font-weight:700}.row-nowrap{white-space:nowrap}.horizontal-scrollbar{overflow-x:scroll;overflow-y:hidden}.table-full-width{width:100%}.auto-width{table-layout:auto!important}.fixed-width{table-layout:fixed!important}.table-image{text-align:center;padding:10px!important}[tooltip-hover]:before{content:attr(tooltip-hover);position:absolute;overflow:none;opacity:0;padding:20px;color:#fff;border-radius:2px;background:#323232;margin-top:0;margin-left:0}[tooltip-hover]:hover:before{opacity:1;overflow:none;background:#323232;margin-top:-50px}[tooltip-hover]:not([tooltip-persistent]):before{pointer-events:none}[tooltip-click]:before{content:attr(tooltip-click);position:absolute;opacity:0;padding:20px;color:#fff;border-radius:2px;background:#323232;margin-top:0;margin-left:0}[tooltip-click]:visited:before{opacity:1;background:#323232;margin-top:-50px}[tooltip-click]:not([tooltip-persistent]):before{pointer-events:none}.tooltipClickLabel{position:absolute;padding:20px;color:#fff;border-radius:2px;background:#323232;margin-top:0;margin-left:0;bottom:40px;z-index:1000}.tooltipClickLabel:after{content:\"\A\";color:#323232;width:0;height:0;border-left:.625em solid transparent;border-right:.625em solid transparent;border-top:.625em solid;position:absolute;margin-top:2.813em;left:50%}.tooltipClickLabel .closeTip{position:absolute;top:2px;right:5px;z-index:1000;color:#fa9600;cursor:pointer}.green-link{color:#258900}.contrasto-on .table-container td{border:1px solid #000}.contrasto-on .table-label{color:#fff;border:1px solid #fff;background-color:#000}.contrasto-on .table-label.label-select{color:#000;border:1px solid #000;background-color:#fff}.contrasto-on .table-label.label-select.select{background-color:#000;border:1px solid #fff}.contrasto-on .table-label.label-select.select .iradio-container.checked .radio-label{color:#fff!important}.contrasto-on .table-row{background-color:#fff;color:#000}.contrasto-on .table-row.clickable{border:1px solid #000}.contrasto-on .table-row.clickable:hover{background-color:#fff;color:#000;border:2px solid #000!important}.contrasto-on .table-row.highlighted{background-color:#fff;color:#000;border:2px solid #000!important}.contrasto-on .content-accordion{background-color:#000;color:#fff}.contrasto-on .content-accordion .table-cell.with-borders{border:1px solid #fff}.contrasto-on .table-cell.with-borders{border:1px solid #000}.contrasto-on .table-cell.cell-select{color:#000;border:2px solid #000;background-color:#fff}.contrasto-on .table-cell.cell-select.select{background-color:#000;border:2px solid #fff;color:#fff}.contrasto-on .table-pagination .table-page-btn{color:#000}.contrasto-on .table-pagination .table-page-btn.disabled{color:#6f6f6f}.contrasto-on .table-pagination .table-page-btn .table-page-number{border:1px solid #000;color:#000;background:#fff}.contrasto-on .table-pagination .table-page-btn .table-page-number.active{color:#fff;background:#000}.contrasto-on .arrow-up{display:inline-block;position:relative;width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #fff;margin-right:-.125em}.contrasto-on .arrow-up::before{content:'';position:absolute;top:1px;left:-5px;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #000}.contrasto-on .arrow-down{display:inline-block;position:relative;width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #fff;margin-left:-.125em}.contrasto-on .arrow-down::before{content:'';position:absolute;top:auto;bottom:1px;left:-5px;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #000}.contrasto-on .arrow-up.active::before{display:none}.contrasto-on .arrow-down.active::before{display:none}.contrasto-on .annulla-check{color:#000}.contrasto-on [tooltip-hover]:before{content:attr(tooltip-hover);position:absolute;overflow:none;opacity:0;padding:20px;color:#fff;border-radius:2px;background:#000;margin-top:0;margin-left:0}.contrasto-on [tooltip-hover]:hover:before{opacity:1;overflow:none;background:#000;margin-top:-50px}.contrasto-on [tooltip-hover]:not([tooltip-persistent]):before{pointer-events:none}.contrasto-on [tooltip-click]:before{content:attr(tooltip-click);position:absolute;opacity:0;padding:20px;color:#fff;border-radius:2px;background:#000;margin-top:0;margin-left:0}.contrasto-on [tooltip-click]:visited:before{opacity:1;background:#000;margin-top:-50px}.contrasto-on [tooltip-click]:not([tooltip-persistent]):before{pointer-events:none}.contrasto-on .tooltipClickLabel{position:absolute;padding:20px;color:#fff;border-radius:2px;background:#323232;margin-top:0;margin-left:0;bottom:40px;z-index:1000}.contrasto-on .tooltipClickLabel:after{content:\"\A\";color:#fff;width:0;height:0;border-left:.625em solid transparent;border-right:.625em solid transparent;border-top:.625em solid;position:absolute;margin-top:2.813em;left:50%}.contrasto-on .tooltipClickLabel .closeTip{position:absolute;top:2px;right:5px;z-index:1000;color:#fff;cursor:pointer}.contrasto-on .green-link{color:#000} /*# sourceMappingURL=nbp-table.component.css.map */ "]
    }),
    __metadata$9("design:paramtypes", [NbpTableUtilService,
        NbpFormatterService])
], exports.NbpTableComponent);

var __decorate$15 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$13 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var nextId$4 = 0;
/**
 * La Finestra Modale è una pagina che viene visualizzata al di sopra della pagina
 * corrente, la quale viene disabilitata.
 */
exports.NbpModalComponent = (function () {
    function NbpModalComponent() {
        this.id = "nbp-modal-" + ++nextId$4;
        this.nbpOpenedChange = new _angular_core.EventEmitter();
        /**
         * Proprietà che definisce la grandezza della modale, tramite l'enum NbpSize
         * valore di default: NbpSize.MD
         */
        this.nbpSize = exports.NbpSize.MD;
        /**
         * Array che descrive i pulsanti
         * da visualizzare nella modale
         */
        this.nbpButtons = [];
        /**
         * Evento lanciato alla pressione di ogni pulsante.
         * Viene passato come parametro il pulsante cliccato.
         */
        this.nbpOnButtonClicked = new _angular_core.EventEmitter();
        /**
         * Evento lanciato alla chusura della modale.
         */
        this.nbpOnClose = new _angular_core.EventEmitter();
        /**
         * Evento lanciato all'apertura della modale.
         */
        this.nbpOnOpen = new _angular_core.EventEmitter();
        this._modalSize = exports.NbpSize;
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
__decorate$15([
    _angular_core.Input(),
    __metadata$13("design:type", String)
], exports.NbpModalComponent.prototype, "id", void 0);
__decorate$15([
    _angular_core.Input(),
    __metadata$13("design:type", Boolean),
    __metadata$13("design:paramtypes", [Boolean])
], exports.NbpModalComponent.prototype, "nbpOpened", null);
__decorate$15([
    _angular_core.Output(),
    __metadata$13("design:type", Object)
], exports.NbpModalComponent.prototype, "nbpOpenedChange", void 0);
__decorate$15([
    _angular_core.Input(),
    __metadata$13("design:type", String)
], exports.NbpModalComponent.prototype, "nbpTitle", void 0);
__decorate$15([
    _angular_core.Input(),
    __metadata$13("design:type", String)
], exports.NbpModalComponent.prototype, "nbpSubTitle", void 0);
__decorate$15([
    _angular_core.Input(),
    __metadata$13("design:type", Number)
], exports.NbpModalComponent.prototype, "nbpSize", void 0);
__decorate$15([
    _angular_core.Input(),
    __metadata$13("design:type", Array)
], exports.NbpModalComponent.prototype, "nbpButtons", void 0);
__decorate$15([
    _angular_core.Output(),
    __metadata$13("design:type", _angular_core.EventEmitter)
], exports.NbpModalComponent.prototype, "nbpOnButtonClicked", void 0);
__decorate$15([
    _angular_core.Output(),
    __metadata$13("design:type", _angular_core.EventEmitter)
], exports.NbpModalComponent.prototype, "nbpOnClose", void 0);
__decorate$15([
    _angular_core.Output(),
    __metadata$13("design:type", _angular_core.EventEmitter)
], exports.NbpModalComponent.prototype, "nbpOnOpen", void 0);
exports.NbpModalComponent = __decorate$15([
    _angular_core.Component({
        selector: 'nbp-modal',template: "<div class=\"nbp-modal\" [style.display]=\"_getDisplayStyleValue()\"><div class=\"nbp-modal-container\" [ngClass]=\"{'container__large': nbpSize === _modalSize.LG , 'container__medium': nbpSize === _modalSize.MD , 'container__small': nbpSize === _modalSize.SM}\"><div class=\"row\"><div class=\"col-md-24 text-center\"><div *ngIf=\"!!nbpTitle\" class=\"col-md-24 nbp-modal-title text-center\">{{nbpTitle | uppercase}}</div><div *ngIf=\"!!nbpSubTitle\" class=\"col-md-24 nbp-modal-sub-title text-center\">{{nbpSubTitle}}</div><div class=\"close-icon-container\"><span class=\"ico-azioni-elimina pull-right\" (click)=\"close()\"></span></div></div></div><div class=\"row\"><div class=\"col-md-24\" [ngClass]=\"{ 'nbp-modal-body-with-title': nbpTitle, 'nbp-modal-body-without-title': !nbpTitle }\"><ng-content></ng-content></div></div><div class=\"row mrg-t-10\"><ng-container *ngFor=\"let button of _shadowButtons\"><div *ngIf=\"button.visible\" [class]=\"button.layout\"><nbp-button [nbpLabel]=\"button.label\" (nbpClick)=\"_onClick(button)\" [disabled]=\"button.disabled\" [nbpStyle]=\"button.style\"></nbp-button></div></ng-container></div></div></div>",
        styles: [".nbp-modal{display:none;position:fixed;z-index:10000;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.5)}.nbp-modal.no-static-backdrop__small{width:34.375em}.nbp-modal.container__medium{width:64em}.nbp-modal.container__large{width:85.375em}.nbp-modal-title{color:#323232;font-size:18px;padding-top:20px}.nbp-modal-sub-title{text-transform:capitalize;color:#323232;padding-top:20px}.close-icon-container{position:relative}.close-icon-container>.ico-azioni-elimina{position:absolute;right:20px;top:20px;z-index:10;color:#258900;cursor:pointer}.nbp-modal-body-with-title{padding:20px}.nbp-modal-body-without-title{padding:40px}.nbp-modal-container{background-color:#fefefe;margin:auto;padding:0 20px 20px 20px;border:1px solid #888}.nbp-modal-container.container__small{max-width:34.375em;min-width:17.375em}.nbp-modal-container.container__medium{max-width:64em;min-width:32em}.nbp-modal-container.container__large{max-width:85.375em;min-width:42.375em}.nbp-close-modal{color:#aaa;font-size:28px;font-weight:700}.nbp-close-modal:focus,.nbp-close-modal:hover{color:#000;text-decoration:none;cursor:pointer} /*# sourceMappingURL=nbp-modal.component.css.map */ "]
    }),
    __metadata$13("design:paramtypes", [])
], exports.NbpModalComponent);

var __extends$3 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$16 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$14 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$3 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Provider Expression that allows nbp-combo to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
var NBP_COMBO_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.NbpComboComponent; }),
    multi: true
};
var NBP_INPUT_ELEMENT_BASE$1 = {
    provide: NbpInputElementBase,
    useExisting: _angular_core.forwardRef(function () { return exports.NbpComboComponent; }),
    multi: true
};
/** intero autogenerato usato per id unici per nbpCombo component */
var nextId$5 = 0;
/**
 * Componente per la implementazione della combobox, supporta tutti gli attributi standard html per il tag input.
 * Personalizzabile per la gestione di currency grazie all'applicaizone di opportuni pipes
 * definiti dalla libreria.
 */
exports.NbpComboComponent = (function (_super) {
    __extends$3(NbpComboComponent, _super);
    function NbpComboComponent(validatori, asyncValidatori, formatterService, element) {
        var _this = _super.call(this, validatori, asyncValidatori) || this;
        _this.validatori = validatori;
        _this.asyncValidatori = asyncValidatori;
        _this.formatterService = formatterService;
        _this.element = element;
        /**
         * Identificativo univoco per il text field.
         * Se nessun id è fornito e' auto-generato.
         */
        _this.id = "nbp-combo-" + ++nextId$5;
        /**
         * (Opzionale)
         * Booleano che consente di visualizzare i messaggi di feedback relativi alla validazione.
         * Valore di default false
         */
        _this.nbpShowValidation = false;
        /**
         * Il testo del placeholder.
         */
        _this.placeholder = '';
        /**
         * Evento emesso quando è selezionato un elemento della combobox.
         */
        _this.select = new _angular_core.EventEmitter();
        /**
         * Evento emesso quando la dropdown viene chiuda
         */
        _this.dropdownClosed = new _angular_core.EventEmitter();
        /**
         * Evento emesso quando la dropdown viene aperta
         */
        _this.dropdownOpened = new _angular_core.EventEmitter();
        /**
          * (Opzionale) Funzione custom di validazione del campo
          */
        _this.nbpValidation = new _angular_core.EventEmitter();
        _this._dropdownVisible = false;
        _this._arrowClicked = false;
        _this._nbpPipe = exports.NbpPipe;
        return _this;
    }
    Object.defineProperty(NbpComboComponent.prototype, "disabled", {
        /**
         * Flag che abilita/disabilita le funzionalità associate alla combobox
         */
        get: function () { return this._nbpDisabled; },
        set: function (value) { this._nbpDisabled = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbpComboComponent.prototype, "required", {
        /**
         * Flag che imposta come obbligatorio o meno il campo di input (disabilitato) associato alla combobox
         */
        get: function () { return this._nbpRequired; },
        set: function (value) { this._nbpRequired = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbpComboComponent.prototype, "nbpShowEmptyValue", {
        /**
         * Flag che imposta come obbligatorio o meno il campo di input (disabilitato) associato alla combobox
         */
        get: function () { return this._nbpShowEmptyValue; },
        set: function (value) { this._nbpShowEmptyValue = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbpComboComponent.prototype, "nbpHighlightedDefault", {
        /**
         * (opzionale ) Booleano che gestisce l’attributo  bordo giallo della combobox.
         * Al primo click/focus tornerà alla versione di default.
         * valore default false
         */
        get: function () { return this._nbpHighlightedDefault; },
        set: function (value) { this._nbpHighlightedDefault = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    
    
    Object.defineProperty(NbpComboComponent.prototype, "nbpBindingToKeyField", {
        /**
         * Definisce quando il binding del ngModel deve essere fatto sull'attributo nbpKeyField
         *
         */
        get: function () { return this._nbpBindingToKeyField; },
        set: function (value) { this._nbpBindingToKeyField = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    
    
    NbpComboComponent.prototype._getDropdownState = function () {
        return this._dropdownVisible ? 'expanded' : 'collapsed';
    };
    NbpComboComponent.prototype.ngOnInit = function () {
        this._prepareDataSource();
    };
    NbpComboComponent.prototype._prepareDataSource = function () {
        var _this = this;
        if (this.nbpDataSource) {
            var currentPageStream = this.nbpDataSource.getPage();
            this.datasourceSubscription = currentPageStream.subscribe(function (value) {
                if (value.data && value.data.length) {
                    _this._nbpShadowData = value.data.slice();
                    if (_this.nbpShowEmptyValue) {
                        _this._nbpShadowData.unshift(null);
                    }
                    // console.log('Resolve Subscribe');
                }
                else {
                    _this._nbpShadowData = new Array();
                }
                
            }, function (error) {
                console.log(JSON.stringify(error));
            });
        }
    };
    NbpComboComponent.prototype._getViewValue = function (item) {
        if (!item) {
            return null;
        }
        return this.formatterService.displayValueTransformation(this._getViewModelElement(item), this.nbpFilter, this.nbpFilterArg);
    };
    NbpComboComponent.prototype._getValue = function (item) {
        return (this._nbpBindingToKeyField && this.nbpKeyField) ? getPropertyValueByPath(item, this.nbpKeyField) : item;
    };
    NbpComboComponent.prototype._getDropDownLabel = function (item) {
        return this.formatterService.displayValueTransformation((this.nbpViewField ? getPropertyValueByPath(item, this.nbpViewField) : item), this.nbpFilter, this.nbpFilterArg);
    };
    NbpComboComponent.prototype._onSelectEvent = function (item) {
        if (item) {
            this._nbpViewValue = this._getViewModelElement(item);
            this.value = this._getValue(item);
            this.nbpValidation.emit(this.model);
            this._dropdownVisible = !this._dropdownVisible;
            // TODO validazione anche su set programmatica del value
            event.stopPropagation();
            this.select.emit(item);
        }
    };
    NbpComboComponent.prototype._getViewModelElement = function (item) {
        if (this._nbpBindingToKeyField) {
            return this.nbpKeyField ? this._getSelectedElement(item) : item;
        }
        return this.nbpViewField ? getPropertyValueByPath(item, this.nbpViewField) : item;
    };
    NbpComboComponent.prototype._getSelectedElement = function (item) {
        var _this = this;
        var elems = this._nbpShadowData.filter(function (elem) {
            return getPropertyValueByPath(elem, _this.nbpKeyField) === item;
        });
        if (elems.length > 0) {
            var selectedElem = elems[0];
            return this.nbpViewField ? getPropertyValueByPath(selectedElem, this.nbpViewField) : item;
        }
        else {
            return item;
        }
    };
    NbpComboComponent.prototype._isOptionSelected = function (item) {
        if (!item || !this.value) {
            return false;
        }
        if (this.nbpKeyField && item && getPropertyValueByPath(item, this.nbpKeyField)) {
            var currentValue = this.value;
            if (this._nbpBindingToKeyField) {
                return getPropertyValueByPath(item, this.nbpKeyField) === currentValue;
            }
            else {
                return getPropertyValueByPath(item, this.nbpKeyField) === getPropertyValueByPath(currentValue, this.nbpKeyField);
            }
        }
        if (item) {
            return item === this.value;
        }
        return false;
    };
    NbpComboComponent.prototype._onInputFocus = function (event) {
        if (!this._nbpDisabled
            && this._nbpShadowData
            && this._nbpShadowData.length > 0 && !this._arrowClicked) {
            this._dropdownVisible = !this._dropdownVisible;
            this._dropdownVisible ? this.dropdownOpened.emit() : this.dropdownClosed.emit();
        }
    };
    NbpComboComponent.prototype._onInputClick = function (event) {
        if (!this._nbpDisabled
            && this._nbpShadowData
            && this._nbpShadowData.length > 0) {
            this._dropdownVisible = !this._dropdownVisible;
            this._arrowClicked = !this._arrowClicked;
        }
    };
    NbpComboComponent.prototype._closeDropDown = function (target) {
        if (!this._dropdownVisible) {
            return;
        }
        var parentFound = false;
        while (target != null && !parentFound) {
            if (target === this.element.nativeElement) {
                parentFound = true;
            }
            target = target.parentElement;
        }
        if (!parentFound) {
            this._dropdownVisible = false;
            this._arrowClicked = false;
            this.dropdownClosed.emit();
        }
    };
    NbpComboComponent.prototype.onFocusout = function (target) {
        this._closeDropDown(target);
    };
    NbpComboComponent.prototype.onClick = function (target) {
        this._closeDropDown(target);
    };
    return NbpComboComponent;
}(NbpInputElementBase));
__decorate$16([
    _angular_core.Input(),
    __metadata$14("design:type", String)
], exports.NbpComboComponent.prototype, "name", void 0);
__decorate$16([
    _angular_core.Input(),
    __metadata$14("design:type", Object)
], exports.NbpComboComponent.prototype, "id", void 0);
__decorate$16([
    _angular_core.HostBinding('class.nbp-show-validation'),
    _angular_core.Input(),
    __metadata$14("design:type", Boolean)
], exports.NbpComboComponent.prototype, "nbpShowValidation", void 0);
__decorate$16([
    _angular_core.Input(),
    __metadata$14("design:type", String)
], exports.NbpComboComponent.prototype, "nbpErrorMessage", void 0);
__decorate$16([
    _angular_core.Input(),
    __metadata$14("design:type", Boolean),
    __metadata$14("design:paramtypes", [Object])
], exports.NbpComboComponent.prototype, "disabled", null);
__decorate$16([
    _angular_core.Input(),
    __metadata$14("design:type", Boolean),
    __metadata$14("design:paramtypes", [Object])
], exports.NbpComboComponent.prototype, "required", null);
__decorate$16([
    _angular_core.Input(),
    __metadata$14("design:type", String)
], exports.NbpComboComponent.prototype, "placeholder", void 0);
__decorate$16([
    _angular_core.Input(),
    __metadata$14("design:type", Boolean),
    __metadata$14("design:paramtypes", [Object])
], exports.NbpComboComponent.prototype, "nbpShowEmptyValue", null);
__decorate$16([
    _angular_core.Input(),
    __metadata$14("design:type", Object)
], exports.NbpComboComponent.prototype, "nbpDataSource", void 0);
__decorate$16([
    _angular_core.Input(),
    __metadata$14("design:type", String)
], exports.NbpComboComponent.prototype, "nbpViewField", void 0);
__decorate$16([
    _angular_core.Input(),
    __metadata$14("design:type", String)
], exports.NbpComboComponent.prototype, "nbpKeyField", void 0);
__decorate$16([
    _angular_core.Input(),
    __metadata$14("design:type", Boolean),
    __metadata$14("design:paramtypes", [Object])
], exports.NbpComboComponent.prototype, "nbpHighlightedDefault", null);
__decorate$16([
    _angular_core.Input(),
    __metadata$14("design:type", Number)
], exports.NbpComboComponent.prototype, "nbpFilter", void 0);
__decorate$16([
    _angular_core.Input(),
    __metadata$14("design:type", Object)
], exports.NbpComboComponent.prototype, "nbpFilterArg", void 0);
__decorate$16([
    _angular_core.Input(),
    __metadata$14("design:type", Boolean),
    __metadata$14("design:paramtypes", [Object])
], exports.NbpComboComponent.prototype, "nbpBindingToKeyField", null);
__decorate$16([
    _angular_core.Output(),
    __metadata$14("design:type", _angular_core.EventEmitter)
], exports.NbpComboComponent.prototype, "select", void 0);
__decorate$16([
    _angular_core.Output(),
    __metadata$14("design:type", Object)
], exports.NbpComboComponent.prototype, "dropdownClosed", void 0);
__decorate$16([
    _angular_core.Output(),
    __metadata$14("design:type", Object)
], exports.NbpComboComponent.prototype, "dropdownOpened", void 0);
__decorate$16([
    _angular_core.Output(),
    __metadata$14("design:type", _angular_core.EventEmitter)
], exports.NbpComboComponent.prototype, "nbpValidation", void 0);
__decorate$16([
    _angular_core.ViewChild(_angular_forms.NgModel),
    __metadata$14("design:type", _angular_forms.NgModel)
], exports.NbpComboComponent.prototype, "model", void 0);
__decorate$16([
    _angular_core.HostListener('document: focusout', ['$event.target']),
    __metadata$14("design:type", Function),
    __metadata$14("design:paramtypes", [HTMLElement]),
    __metadata$14("design:returntype", void 0)
], exports.NbpComboComponent.prototype, "onFocusout", null);
__decorate$16([
    _angular_core.HostListener('document: click', ['$event.target']),
    __metadata$14("design:type", Function),
    __metadata$14("design:paramtypes", [HTMLElement]),
    __metadata$14("design:returntype", void 0)
], exports.NbpComboComponent.prototype, "onClick", null);
exports.NbpComboComponent = __decorate$16([
    _angular_core.Component({
        selector: 'nbp-combo',template: "<div class=\"dropdown-container\"><input type=\"hidden\" [(ngModel)]=\"value\"><div class=\"dropdown-inner-container\"><input type=\"text\" [id]=\"id\" [name]=\"name\" [placeholder]=\"placeholder\" class=\"dropdown-input-box form-control\" [ngClass]=\"{ 'dropdown-input-box-green': _dropdownVisible || _focusActive, 'highlight-default':nbpHighlightedDefault, 'input-box-disabled': disabled}\" [value]=\"_getViewValue(value)\" [required]=\"required\" disabled=\"disabled\"> <button class=\"dropdown-button\" [ngClass]=\"{'collapse-disabled' : disabled}\" (click)=\"_onInputClick($event)\" (focus)=\"_focusActive = true;\" (focusout)=\"_focusActive = false;\"><span class=\"dropdown-button-border\"></span> <span [ngClass]=\"{'triangolo-bottom' : !_dropdownVisible, 'triangolo-top' : _dropdownVisible}\"></span></button></div><ul [@dropdownAnimationState]=\"_getDropdownState()\" [style.visibility]=\"_dropdownVisible ? 'visible' : 'hidden'\"><li *ngFor=\"let item of _nbpShadowData; let i = index\" (click)=\"_onSelectEvent(item)\" [ngClass]=\"{'active': _isOptionSelected(item), 'last': i === _nbpShadowData.length - 1  }\"><span>{{_getDropDownLabel(item) }}</span></li></ul></div>",
        styles: [":host{position:relative;display:block}:host(.ng-invalid.nbp-show-validation) .dropdown-input-box{border:2px solid #c63200!important;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}:host(.ng-invalid.nbp-show-validation) .dropdown-input-box:focus{border:2px solid #c63200!important}.highlight-default{border:2px solid #fce07f!important;outline:0;box-shadow:none!important}.dropdown-container{display:inline-block;position:relative;width:100%}.dropdown-container ul{opacity:1;background:#fff;border-top-width:0;border-right-color:#323232;border-right-style:solid;border-right-width:1px;border-bottom-color:#323232;border-bottom-style:solid;border-bottom-width:1px;border-left-color:#323232;border-left-style:solid;border-left-width:1px;border-radius:0 0 2px 2px;list-style:none;margin:0 0 .625em 0;padding:0;position:absolute;width:100%;z-index:1000;overflow-y:auto}.dropdown-container ul>li{cursor:pointer;min-height:3.125em;padding:17px 12px;border-bottom:1px solid #f2f2f2}.dropdown-container ul>li:hover{background:#c4dbbc}.dropdown-container ul>li.active{background:#89bc72}.dropdown-container ul>li.last{border-bottom:none}.dropdown-container ul.ng-hide-add{transition:all ease-out .25s}.dropdown-container ul.ng-hide-remove{transition:all ease-out .25s}.dropdown-container ul.ng-hide{opacity:0;max-height:0}.dropdown-inner-container{position:relative;z-index:999}.dropdown-label{color:#6f6f6f;font-size:1em;margin:0 0 0 .75em!important}.dropdown-input-box{margin:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:.375em 2.3em .375em 1em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#6f6f6f;border:1px solid #323232;border-radius:2px;font-size:1em!important;height:3.125em}.dropdown-input-box:focus{border:2px solid #89bc72;outline:0;box-shadow:none!important}.dropdown-input-box::-ms-clear{display:none}.dropdown-input-box:disabled{background-color:#fff!important;cursor:default;box-shadow:none!important}.dropdown-input-box.input-box-disabled{background-color:#fff!important;border:1px solid #6f6f6f;opacity:.5!important;cursor:not-allowed}.dropdown-input-box-green{border:2px solid #89bc72;outline:0;box-shadow:none!important}.dropdown-input-box-disabled{background-color:#fff!important;opacity:.5!important}.dropdown-button{display:table;position:absolute;top:0;right:0;width:2.5em;height:3.125em;text-align:center;color:#ccc;border-color:transparent;background-color:transparent!important}.dropdown-button span{display:table-cell;vertical-align:middle}.dropdown-button[role=\"\"]{cursor:default;opacity:.5}.dropdown-button.collapse-disabled{pointer-events:none}.dropdown-button.collapse-disabled .dropdown-button-border{border-left:1px solid #6f6f6f!important}.dropdown-button.collapse-disabled .triangolo-bottom{border-style:solid;border-width:8px 6.5px 0 6.5px;border-color:#6f6f6f transparent transparent transparent}.dropdown-button.collapse-disabled .triangolo-top{border-style:solid;border-width:0 6.5px 8px 6.5px;border-color:transparent transparent #6f6f6f transparent}.dropdown-button-border{position:absolute;display:inline-block;height:60%;top:20%;left:0;border-left:1px solid #323232}.has-error .dropdown-input-box{border:2px solid #c63200;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-error .dropdown-input-box:focus{border:2px solid #c63200}.dropdown-error-message{color:#c63200;font-size:1em;margin-top:.625em;margin-bottom:.625em;opacity:1}.dropdown-error-message.ng-hide-add{transition:all ease-out .25s}.dropdown-error-message.ng-hide-remove{transition:all ease-out .25s}.dropdown-error-message.ng-hide{opacity:0;margin-top:-.625em}.triangolo-top{width:0;height:0;border-style:solid;border-width:0 10px 10px 10px;border-color:transparent transparent #258900 transparent;display:inline-block!important}.triangolo-bottom{width:0;height:0;border-style:solid;border-width:10px 10px 0 10px;border-color:#258900 transparent transparent transparent;display:inline-block!important}.yellow-border{border:2px solid #fce07f} /*# sourceMappingURL=nbp-combo.component.css.map */ "],
        viewProviders: [NbpFormatterService],
        providers: [NBP_COMBO_CONTROL_VALUE_ACCESSOR, NBP_INPUT_ELEMENT_BASE$1],
        animations: [
            _angular_animations.trigger('dropdownAnimationState', [
                _angular_animations.state('expanded', _angular_animations.style({ opacity: 1, visibility: 'visible' })),
                _angular_animations.state('collapsed, void', _angular_animations.style({ opacity: 0, visibility: 'hidden' })),
                _angular_animations.transition('expanded => collapsed', _angular_animations.animate('100ms ease-in')),
                _angular_animations.transition('collapsed => expanded', _angular_animations.animate('100ms ease-out'))
            ])
        ]
    }),
    __param$3(0, _angular_core.Optional()), __param$3(0, _angular_core.Inject(_angular_forms.NG_VALIDATORS)),
    __param$3(1, _angular_core.Optional()), __param$3(1, _angular_core.Inject(_angular_forms.NG_ASYNC_VALIDATORS)),
    __metadata$14("design:paramtypes", [Array, Array, NbpFormatterService,
        _angular_core.ElementRef])
], exports.NbpComboComponent);

var __extends$4 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$17 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$15 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$4 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/** intero autogenerato usato per id unici per nbpDatepicker component */
var nextId$6 = 0;
/**
 * Provider Expression that allows nbp-input to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
var NBP_DATE_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.NbpDatepickerHtml5Component; }),
    multi: true
};
var NBP_INPUT_ELEMENT_BASE$2 = {
    provide: NbpInputElementBase,
    useExisting: _angular_core.forwardRef(function () { return exports.NbpDatepickerHtml5Component; }),
    multi: true
};
exports.NbpDatepickerHtml5Component = (function (_super) {
    __extends$4(NbpDatepickerHtml5Component, _super);
    // @HostListener('input', ['$event.target.valueAsDate']) onChange = (_: any) => { };
    function NbpDatepickerHtml5Component(validatori, asyncValidatori) {
        var _this = _super.call(this, validatori, asyncValidatori) || this;
        _this.validatori = validatori;
        _this.asyncValidatori = asyncValidatori;
        /**
         * Identificativo univoco per il text field.
         * Se nessun id è fornito e' auto-generato.
         */
        _this.id = "nbp-datepicker-" + ++nextId$6;
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
        _this.nbpValidation = new _angular_core.EventEmitter();
        /**
        * Evento sollevato al modifica del model associato al campo di input.
        */
        _this.nbpOnDateChange = new _angular_core.EventEmitter();
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
    
    
    NbpDatepickerHtml5Component.prototype.ngOnInit = function () {
    };
    return NbpDatepickerHtml5Component;
}(NbpInputElementBase));
__decorate$17([
    _angular_core.Input(),
    __metadata$15("design:type", String)
], exports.NbpDatepickerHtml5Component.prototype, "name", void 0);
__decorate$17([
    _angular_core.Input(),
    __metadata$15("design:type", String)
], exports.NbpDatepickerHtml5Component.prototype, "id", void 0);
__decorate$17([
    _angular_core.HostBinding('class.nbp-show-validation'),
    _angular_core.Input(),
    __metadata$15("design:type", Boolean)
], exports.NbpDatepickerHtml5Component.prototype, "nbpShowValidation", void 0);
__decorate$17([
    _angular_core.Input(),
    __metadata$15("design:type", Boolean),
    __metadata$15("design:paramtypes", [Object])
], exports.NbpDatepickerHtml5Component.prototype, "disabled", null);
__decorate$17([
    _angular_core.Input(),
    __metadata$15("design:type", Boolean),
    __metadata$15("design:paramtypes", [Object])
], exports.NbpDatepickerHtml5Component.prototype, "required", null);
__decorate$17([
    _angular_core.Input(),
    __metadata$15("design:type", String)
], exports.NbpDatepickerHtml5Component.prototype, "placeholder", void 0);
__decorate$17([
    _angular_core.Input(),
    __metadata$15("design:type", Boolean),
    __metadata$15("design:paramtypes", [Object])
], exports.NbpDatepickerHtml5Component.prototype, "nbpHighlightedDefault", null);
__decorate$17([
    _angular_core.Input(),
    __metadata$15("design:type", String)
], exports.NbpDatepickerHtml5Component.prototype, "nbpErrorMessage", void 0);
__decorate$17([
    _angular_core.Output(),
    __metadata$15("design:type", _angular_core.EventEmitter)
], exports.NbpDatepickerHtml5Component.prototype, "nbpValidation", void 0);
__decorate$17([
    _angular_core.Output(),
    __metadata$15("design:type", _angular_core.EventEmitter)
], exports.NbpDatepickerHtml5Component.prototype, "nbpOnDateChange", void 0);
__decorate$17([
    _angular_core.ViewChild(_angular_forms.NgModel),
    __metadata$15("design:type", _angular_forms.NgModel)
], exports.NbpDatepickerHtml5Component.prototype, "model", void 0);
exports.NbpDatepickerHtml5Component = __decorate$17([
    _angular_core.Component({
        selector: 'nbp-datepicker-html5',template: "<input type=\"date\" [name]=\"name\" [id]=\"id\" [(ngModel)]=\"value\" [disabled]=\"disabled\" [required]=\"required\">",
        styles: [":host{position:relative;display:block}:host(.ng-invalid.nbp-show-validation) .textfield-box{border:2px solid #c63200!important;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}:host(.ng-invalid.nbp-show-validation) .textfield-box:focus{border:2px solid #c63200}.dropdown-menu{box-shadow:none!important}.uib-datepicker-popup{z-index:9999!important;overflow:hidden}.uib-datepicker-popup .btn:focus{outline:0!important}.data-green{border:2px solid #89bc72!important}.datepicker-container{position:relative;max-width:300px;margin-bottom:1.563em}.datepicker-label{color:#6f6f6f;font-size:.75em;margin:0 0 0 .75em!important}.datepicker-input-box{margin:.625em 0 .625em 0;padding:.375em 1em .375em 1em;color:#6f6f6f;border:1px solid #ccc;border-radius:3px}.datepicker-input-box::-ms-clear{display:none}.datepicker-input-box:focus{border:2px solid #89bc72;outline:0;box-shadow:none!important}.datepicker-input-box[disabled]{cursor:auto;background-color:#fff;opacity:.5}.has-error .datepicker-input-box{border:2px solid #c63200;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-error .datepicker-input-box:focus{border:2px solid #c63200}.datepicker-error-message{color:#c63200;font-size:.75em;margin-top:0;margin-bottom:.625em;opacity:1}.datepicker-error-message.ng-hide-add{transition:all ease-out .25s}.datepicker-error-message.ng-hide-remove{transition:all ease-out .25s}.datepicker-error-message.ng-hide{opacity:0;margin-top:-.625em}.datepicker-button{display:inline-block;position:absolute;cursor:pointer;font-size:1.5em;color:#6f6f6f;margin-top:-1.65em;right:.625em}.datepicker-button[role=\"\"]{cursor:default;opacity:.5}.uib-datepicker-popup.dropdown-menu{border:none!important;border-radius:0!important;padding:0!important}.uib-day{min-width:42px;max-width:42px}.uib-daypicker{width:300px!important}.uib-daypicker .btn{border-radius:0!important}.uib-daypicker #datepicker-header{border-top:1px solid #ccc}.uib-daypicker #datepicker-header .btn:focus{background-color:#323232;color:#fff;border-color:#323232}.uib-daypicker #datepicker-header .btn:active{background-color:#323232;color:#fff;border-color:#323232}.uib-daypicker #datepicker-header .btn:hover{background-color:#323232;color:#fff;border-color:#323232}.uib-daypicker .pull-left{padding-top:8px;padding-bottom:8px;min-width:auto;color:#6f6f6f;border-top:none;border-bottom:none;border-left:none;border-right:none}.uib-daypicker .border-r-l{border-left:1px solid #ccc!important;border-right:1px solid #ccc!important}.uib-daypicker .border-r{border-right:1px solid #ccc!important}.uib-daypicker .uib-title{padding-top:8px;padding-bottom:8px;min-width:auto;border:none;color:#6f6f6f;font-size:.84em;cursor:default;pointer-events:none;text-transform:uppercase}.uib-daypicker .uib-title strong{font-weight:400!important}.uib-daypicker .pull-right{padding-top:8px;padding-bottom:8px;min-width:auto;color:#6f6f6f;border-top:none;border-bottom:none;border-left:none;border-right:none}.uib-daypicker .border-l{border-left:1px solid #ccc!important}.uib-daypicker .icon-arrow-left{display:block;margin-top:4px}.uib-daypicker .icon-arrow-right{display:block;margin-top:4px}.uib-daypicker .size-icon{font-size:20px}.uib-daypicker #datepicker-weeks{text-transform:uppercase;color:#6f6f6f;height:2.625em;background-color:#dfdfdf;border:1px solid #ccc;border-right:2px solid #ccc}.uib-weeks{border-right:1px solid #ccc}.uib-weeks .btn{color:#6f6f6f;background-color:#f2f2f2;padding:0;height:42px;border-top:none;border-right:none}.uib-weeks .btn:focus{background-color:#323232;color:#fff;border-color:#323232}.uib-weeks .btn:active{background-color:#323232;color:#fff;border-color:#323232}.uib-weeks .btn:hover{background-color:#323232;color:#fff;border-color:#323232}.uib-weeks .btn-info{border-color:#ccc}.uib-weeks .current{color:#fff;background-color:#6f6f6f;border:1px solid #6f6f6f}.uib-weeks .text-info{color:#fff}.uib-weeks .secondary{color:#ccc;background-color:#fff}.uib-weeks .secondary .text-muted{color:#ccc}.uib-weeks .last-day{border-right:1px solid #ccc}.uib-weeks .btn.active{background-color:#258900;border-color:#258900;box-shadow:none;color:#fff}.uib-weeks .btn.active .text-info{color:#fff}.uib-datepicker-popup.ng-enter{-webkit-transition:opacity .25s ease-in-out;-o-transition:opacity .25s ease-in-out;transition:opacity .25s ease-in-out;opacity:0}.uib-datepicker-popup.ng-leave{-webkit-transition:opacity .25s ease-in-out;-o-transition:opacity .25s ease-in-out;transition:opacity .25s ease-in-out;opacity:1}.uib-datepicker-popup.ng-enter.ng-enter-active{opacity:1}.uib-datepicker-popup.ng-leave.ng-leave-active{opacity:0}.yellow-border{border:2px solid #fce07f}.rightDate .uib-datepicker-popup.dropdown-menu{padding:15px 28px!important;top:-114px!important;overflow:visible}.rightDate .container-row{border-right:1px solid #6f6f6f}.rightDate .uib-daypicker::after{bottom:82px;left:-43px!important;right:auto!important;transform:rotate(-45deg)!important}.leftDate .uib-datepicker-popup.dropdown-menu{padding:15px 28px!important;top:-114px!important;overflow:visible}.leftDate .container-row{border-right:1px solid #6f6f6f}@media (min-width:1200px){.rightDate .uib-datepicker-popup.dropdown-menu{left:277px!important}.leftDate .uib-datepicker-popup.dropdown-menu{left:-360px!important}}@media (max-width:1199px){.rightDate .uib-datepicker-popup.dropdown-menu{left:309px!important}.leftDate .uib-datepicker-popup.dropdown-menu{left:-360px!important}}@media (max-width:991px){.rightDate .uib-datepicker-popup.dropdown-menu{left:356px!important}.leftDate .uib-datepicker-popup.dropdown-menu{left:-360px!important}}.contrasto-on .data-green{border:2px solid #000!important}.contrasto-on .datepicker-label{color:#000}.contrasto-on .datepicker-input-box{color:#000;border:1px solid #000}.contrasto-on .datepicker-input-box::-webkit-input-placeholder{color:#000}.contrasto-on .datepicker-input-box:focus{border:2px solid #000;outline:0;box-shadow:none!important}.contrasto-on .datepicker-input-box[disabled]{cursor:auto;background-color:#000;color:#fff;opacity:1}.contrasto-on .has-error .datepicker-input-box{border:2px solid #000;-webkit-box-shadow:inset 0 0 0 #000;box-shadow:inset 0 0 0 #000}.contrasto-on .has-error .datepicker-input-box:focus{border:2px solid #000}.contrasto-on .datepicker-error-message{color:#000}.contrasto-on .datepicker-button{cursor:pointer;color:#000}.contrasto-on .datepicker-button[role=\"\"]{color:#fff;cursor:default;opacity:1}.contrasto-on .uib-datepicker-popup.dropdown-menu{border:none!important;border-radius:0!important;padding:0!important}.contrasto-on .uib-day{min-width:42px;max-width:42px}.contrasto-on .uib-daypicker{width:300px!important}.contrasto-on .uib-daypicker .btn{border-radius:0!important}.contrasto-on .uib-daypicker #datepicker-header{border-top:1px solid #000}.contrasto-on .uib-daypicker #datepicker-header .btn:focus{background-color:#000;color:#fff;border-color:#000}.contrasto-on .uib-daypicker #datepicker-header .btn:active{background-color:#000;color:#fff;border-color:#000}.contrasto-on .uib-daypicker #datepicker-header .btn:hover{background-color:#000;color:#fff;border-color:#000}.contrasto-on .uib-daypicker .pull-left{padding-top:8px;padding-bottom:8px;min-width:auto;color:#000;border-top:none;border-bottom:none;border-left:none;border-right:none}.contrasto-on .uib-daypicker .border-r-l{border-left:1px solid #000!important;border-right:1px solid #000!important}.contrasto-on .uib-daypicker .border-r{border-right:1px solid #000!important}.contrasto-on .uib-daypicker .uib-title{padding-top:8px;padding-bottom:8px;min-width:auto;border:none;color:#000;font-size:.84em;cursor:default;pointer-events:none;text-transform:uppercase}.contrasto-on .uib-daypicker .uib-title strong{font-weight:400!important}.contrasto-on .uib-daypicker .pull-right{padding-top:8px;padding-bottom:8px;min-width:auto;color:#000;border-top:none;border-bottom:none;border-left:none;border-right:none}.contrasto-on .uib-daypicker .border-l{border-left:1px solid #000!important}.contrasto-on .uib-daypicker #datepicker-weeks{color:#fff;background-color:#000;border:1px solid #000;border-right:2px solid #000}.contrasto-on .uib-weeks{border-right:1px solid #ccc}.contrasto-on .uib-weeks .btn{color:#fff;background-color:#000;border-top:none;border-right:none}.contrasto-on .uib-weeks .btn:focus{background-color:#fff;color:#000;border-color:#fff}.contrasto-on .uib-weeks .btn:active{background-color:#fff;color:#000;border-color:#fff}.contrasto-on .uib-weeks .btn:hover{background-color:#fff;color:#000;border-color:#fff}.contrasto-on .uib-weeks .btn-info{border-color:#ccc}.contrasto-on .uib-weeks .current{color:#000;background-color:#fff;border:1px solid #fff}.contrasto-on .uib-weeks .text-info{color:#000}.contrasto-on .uib-weeks .secondary{color:#000;background-color:#fff}.contrasto-on .uib-weeks .secondary .text-muted{color:#000}.contrasto-on .uib-weeks .last-day{border-right:1px solid #ccc}.contrasto-on .uib-weeks .btn.active{background-color:#fff;border-color:#fff;box-shadow:none;color:#000}.contrasto-on .uib-weeks .btn.active .text-info{color:#000}.contrasto-on .yellow-border{border:2px solid #000}.contrasto-on .rightDate .uib-datepicker-popup.dropdown-menu{padding:15px 28px!important;top:-114px!important;overflow:visible}.contrasto-on .rightDate .container-row{border-right:1px solid #6f6f6f}.contrasto-on .rightDate .uib-daypicker::after{bottom:82px;left:-43px!important;right:auto!important;transform:rotate(-45deg)!important}.contrasto-on .leftDate .uib-datepicker-popup.dropdown-menu{padding:15px 28px!important;top:-114px!important;overflow:visible}.contrasto-on .leftDate .container-row{border-right:1px solid #6f6f6f}@media (min-width:1200px){.contrasto-on .rightDate .uib-datepicker-popup.dropdown-menu{left:277px!important}.contrasto-on .leftDate .uib-datepicker-popup.dropdown-menu{left:-360px!important}}@media (max-width:1199px){.contrasto-on .rightDate .uib-datepicker-popup.dropdown-menu{left:309px!important}.contrasto-on .leftDate .uib-datepicker-popup.dropdown-menu{left:-360px!important}}@media (max-width:991px){.contrasto-on .rightDate .uib-datepicker-popup.dropdown-menu{left:356px!important}.contrasto-on .leftDate .uib-datepicker-popup.dropdown-menu{left:-360px!important}} /*# sourceMappingURL=nbp-datepicker-html5.component.css.map */ "],
        providers: [NBP_DATE_CONTROL_VALUE_ACCESSOR, NBP_INPUT_ELEMENT_BASE$2]
    }),
    __param$4(0, _angular_core.Optional()), __param$4(0, _angular_core.Inject(_angular_forms.NG_VALIDATORS)),
    __param$4(1, _angular_core.Optional()), __param$4(1, _angular_core.Inject(_angular_forms.NG_ASYNC_VALIDATORS)),
    __metadata$15("design:paramtypes", [Array, Array])
], exports.NbpDatepickerHtml5Component);

var __decorate$18 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$16 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** intero autogenerato usato per id unici per nbpInput component */
var nextId$7 = 0;
exports.NbpSwitchComponent = (function () {
    function NbpSwitchComponent() {
        /**
         * Identificativo univoco per il text field.
         * Se nessun id è fornito e' auto-generato.
         */
        this.id = "nbp-switch-" + ++nextId$7;
        /**
         * Funzione associata all’evento di click su un pulsante di switch.
         */
        this.nbpClickFn = new _angular_core.EventEmitter();
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
__decorate$18([
    _angular_core.Input(),
    __metadata$16("design:type", Object)
], exports.NbpSwitchComponent.prototype, "defaultValue", void 0);
__decorate$18([
    _angular_core.Input(),
    __metadata$16("design:type", String)
], exports.NbpSwitchComponent.prototype, "id", void 0);
__decorate$18([
    _angular_core.Input(),
    __metadata$16("design:type", Array)
], exports.NbpSwitchComponent.prototype, "nbpOptionList", void 0);
__decorate$18([
    _angular_core.Input(),
    __metadata$16("design:type", Number)
], exports.NbpSwitchComponent.prototype, "nbpDisplayType", void 0);
__decorate$18([
    _angular_core.Input(),
    __metadata$16("design:type", Boolean),
    __metadata$16("design:paramtypes", [Object])
], exports.NbpSwitchComponent.prototype, "disabled", null);
__decorate$18([
    _angular_core.Input(),
    __metadata$16("design:type", String)
], exports.NbpSwitchComponent.prototype, "nbpSelected", void 0);
__decorate$18([
    _angular_core.Output(),
    __metadata$16("design:type", _angular_core.EventEmitter)
], exports.NbpSwitchComponent.prototype, "nbpClickFn", void 0);
__decorate$18([
    _angular_core.Input(),
    __metadata$16("design:type", Boolean)
], exports.NbpSwitchComponent.prototype, "nbpTextUp", void 0);
exports.NbpSwitchComponent = __decorate$18([
    _angular_core.Component({
        selector: 'nbp-switch',
        template: "<div class=\"switch-container btn-group\"><button *ngFor=\"let current of nbpOptionList; let i = index;\" [id]=\"id\" class=\"btn switch-button\" [class.primary]=\"buttonSelectedIndex == i\" [class.default]=\"buttonSelectedIndex !== i\" [disabled]=\"disabled\" (click)=\"onSelectButton(i , current.value)\"><span *ngIf=\"this.checkIcon()\" class=\"icon button-icon\" [ngClass]=\"current.icon\"></span><br *ngIf=\"this.checkTextUp()\"><span *ngIf=\"this.checkText()\">{{current.name | uppercase}}</span></button></div>",styles: [".switch-button{position:relative;font-weight:700;font-size:.75em;margin:0!important;padding-top:1em;padding-bottom:1em;line-height:1;outline:0!important;min-width:6.875em;height:4.125em;z-index:0}.switch-button:active{box-shadow:1px #ccc}.switch-button.primary{color:#fff;background-color:#258900;border-color:#258900;box-shadow:inset 0 0 .938em 0 rgba(0,0,0,.2)}.switch-button.default{color:#6f6f6f;background-color:#fff;border-color:#ccc}.switch-button[disabled]{box-shadow:none}.switch-button.default[disabled]{cursor:not-allowed}.switch-button.default[disabled]:hover{cursor:not-allowed;background-color:#fff!important;border-color:#ccc!important}.switch-button.primary[disabled]:hover{background-color:#258900!important;border-color:#258900!important}.switch-label{margin-right:.625em}.switch-label-icon{padding-bottom:5px;display:table-cell!important;vertical-align:middle}.switch-icon{font-size:2em!important;display:table-cell!important}.switch-icon-text-up{display:block!important}.btn{border-radius:2px!important}.btn[disabled]:hover{cursor:default}.contrasto-on .switch-button.primary{color:#fff;background-color:#000;border-color:#000;box-shadow:inset 0 0 .938em 0 rgba(0,0,0,.2)}.contrasto-on .switch-button.default{color:#000;background-color:#fff;border-color:#000}.contrasto-on .switch-button[disabled]{box-shadow:none}.contrasto-on .switch-button.default[disabled]:hover{color:#000!important;background-color:#fff!important;border-color:#000!important}.contrasto-on .switch-button.primary[disabled]:hover{background-color:#000!important;border-color:#000!important;color:#fff!important} /*# sourceMappingURL=nbp-switch.component.css.map */ "]
    }),
    __metadata$16("design:paramtypes", [])
], exports.NbpSwitchComponent);
var NpbSwitchDispalyType;
(function (NpbSwitchDispalyType) {
    NpbSwitchDispalyType[NpbSwitchDispalyType["TEXT"] = 0] = "TEXT";
    NpbSwitchDispalyType[NpbSwitchDispalyType["ICON"] = 1] = "ICON";
    NpbSwitchDispalyType[NpbSwitchDispalyType["ICON_TEXT"] = 2] = "ICON_TEXT";
})(NpbSwitchDispalyType || (NpbSwitchDispalyType = {}));

(function (NpbSwitchDispalyType) {
    NpbSwitchDispalyType[NpbSwitchDispalyType["TEXT"] = 0] = "TEXT";
    NpbSwitchDispalyType[NpbSwitchDispalyType["ICON"] = 1] = "ICON";
    NpbSwitchDispalyType[NpbSwitchDispalyType["ICON_TEXT"] = 2] = "ICON_TEXT";
})(exports.NpbSwitchDispalyType || (exports.NpbSwitchDispalyType = {}));

var __decorate$19 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$17 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.NbpCustomerInfoComponent = (function () {
    function NbpCustomerInfoComponent() {
        /**
         * Booleano che pilota la visualizzazione iniziale dell’accordion collassato o espanso.
         */
        this._isCollapsed = true;
    }
    NbpCustomerInfoComponent.prototype._toggleCollapse = function () {
        this._isCollapsed = !this._isCollapsed;
    };
    return NbpCustomerInfoComponent;
}());
__decorate$19([
    _angular_core.Input(),
    __metadata$17("design:type", Object)
], exports.NbpCustomerInfoComponent.prototype, "nbpCustomer", void 0);
exports.NbpCustomerInfoComponent = __decorate$19([
    _angular_core.Component({
        selector: 'nbp-customer-info',template: "<div class=\"container-ident-cliente\" nowrap=\"nowrap\"><span class=\"voce-ident-cliente\">CLIENTE</span> <span class=\"testo-ident-cliente\">{{nbpCustomer?.intestazione}}</span><br><span class=\"voce-ident-cliente\">NSG</span> <span class=\"testo-ident-cliente\" [innerHTML]=\"nbpCustomer?.nsg\"></span><br><span class=\"voce-ident-cliente\">GESTORE PORTAFOGLIAZIONE</span> <span class=\"testo-ident-cliente\" [innerHTML]=\"nbpCustomer?.gestore\"></span></div><div class=\"container-arrow\"><span class=\"accordion-arrow\" [ngClass]=\"{'icon ico-comuni-freccia-accordion-apri':_isCollapsed , 'icon ico-comuni-freccia-accordion-chiudi':!_isCollapsed}\" (click)=\"_toggleCollapse()\"></span></div><div class=\"container-row\"><div [ngClass]=\"{'triangolo':!_isCollapsed,'triangolo-hide':_isCollapsed}\"></div><div class=\"info-cliente-open\" [hidden]=\"_isCollapsed\"><div class=\"container-row\"><div class=\"collapse\" [ngClass]=\"{'in':!_isCollapsed}\"><div class=\"panel-body\"><span>CLIENTE</span> <span>{{nbpCustomer?.intestazione}}</span><br><span>NSG</span> <span [innerHTML]=\"nbpCustomer?.nsg\"></span><br><span>GESTORE PORTAFOGLIAZIONE</span> <span [innerHTML]=\"nbpCustomer?.gestore\"></span></div></div></div></div></div>",
        styles: [".accordion-arrow{cursor:pointer;font-size:1.6em}.container-row{display:table-row}.container-ident-cliente{margin-top:0;margin-bottom:0;font-size:.875em;color:inherit;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:78%;padding-left:.625em;font-weight:400;float:left}.voce-ident-cliente{margin-top:0;margin-bottom:0;font-size:.875em;color:inherit;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-weight:400}.testo-ident-cliente{margin-top:0;margin-bottom:0;font-size:.875em;color:inherit;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-weight:700}.panel-body{vertical-align:middle;display:table-cell;cursor:pointer;text-align:left}.info-cliente-open{position:relative;background-color:#323232;z-index:90;border:0;border-radius:0;text-align:center;margin-top:.5625em;display:table}.container-arrow{float:right;padding-top:1.25em;padding-right:1.5625em}.triangolo{width:0;height:0;z-index:90;border-left:.563em solid transparent;border-right:.563em solid transparent;border-bottom:.563em solid #323232;float:right;margin-right:1.75em}.triangolo-hide{width:0;height:0;z-index:90;border-left:.563em solid transparent;border-right:.563em solid transparent;border-bottom:.563em solid transparent;float:right;margin-right:1.75em} /*# sourceMappingURL=nbp-customer-info.component.css.map */ "],
    }),
    __metadata$17("design:paramtypes", [])
], exports.NbpCustomerInfoComponent);

/**
 * Evento custom emesso dal componente NbpAccordion
 * sull'operazione di toggle
 */
var NbpAccordionEvent = (function () {
    function NbpAccordionEvent() {
    }
    return NbpAccordionEvent;
}());

var __decorate$20 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$18 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var nextId$8 = 0;
exports.NbpAccordionComponent = (function () {
    function NbpAccordionComponent() {
        this.id = "nbp-accordion-" + ++nextId$8;
        /**
         * (Opzionale) Booleano che pilota la visualizzazione iniziale dell’accordion collassato o espanso.
         *Default accordion collassato.
         */
        this.nbpCollapsed = true;
        /**
         * (Opzionale) definisce lo stile del componente
         * “DEFAULT” background grigio
         * “PRIMARY” backgroun verde (valore usato come default)
         * @Type NbpStyle
         */
        this.nbpStyle = exports.NbpStyle.PRIMARY;
        /**
         * Evento emesso sul toggle del componente.
         * @param {EventEmitter<NbpAccordionEvent>}  nbpOnToggle
         */
        this.nbpOnToggle = new _angular_core.EventEmitter();
        this._style = exports.NbpStyle;
    }
    //     Methods
    /**
     * metodo utilizzabile per l’apertura programmatica
     */
    NbpAccordionComponent.prototype.open = function () {
        this.nbpCollapsed = false;
    };
    /**
     * metodo utilizzabile per la chiusura programmatica
     */
    NbpAccordionComponent.prototype.close = function () {
        this.nbpCollapsed = true;
    };
    /**
     * metodo utilizzabile per verificare se il componente è collassato
     */
    NbpAccordionComponent.prototype.isCollapsed = function () {
        return this.nbpCollapsed;
    };
    NbpAccordionComponent.prototype.ngOnInit = function () {
        this._configureAccordion();
    };
    NbpAccordionComponent.prototype._toggleCollapse = function () {
        this.nbpCollapsed = !this.nbpCollapsed;
        this._onToggle();
    };
    NbpAccordionComponent.prototype._onToggle = function () {
        var acordionEvent = new NbpAccordionEvent();
        acordionEvent.source = this;
        acordionEvent.isCollapsed = this.nbpCollapsed;
        this.nbpOnToggle.emit(acordionEvent);
    };
    NbpAccordionComponent.prototype._configureAccordion = function () {
        this._configureAccordionStyles();
    };
    NbpAccordionComponent.prototype._configureAccordionStyles = function () {
        if (this.nbpStyle === exports.NbpStyle.SECONDARY || this.nbpStyle === exports.NbpStyle.OUTLINE) {
            this.nbpStyle = exports.NbpStyle.PRIMARY;
        }
    };
    return NbpAccordionComponent;
}());
__decorate$20([
    _angular_core.Input(),
    __metadata$18("design:type", String)
], exports.NbpAccordionComponent.prototype, "id", void 0);
__decorate$20([
    _angular_core.Input(),
    __metadata$18("design:type", String)
], exports.NbpAccordionComponent.prototype, "nbpTitle", void 0);
__decorate$20([
    _angular_core.Input(),
    __metadata$18("design:type", Boolean)
], exports.NbpAccordionComponent.prototype, "nbpCollapsed", void 0);
__decorate$20([
    _angular_core.Input(),
    __metadata$18("design:type", Number)
], exports.NbpAccordionComponent.prototype, "nbpStyle", void 0);
__decorate$20([
    _angular_core.Input(),
    __metadata$18("design:type", String)
], exports.NbpAccordionComponent.prototype, "nbpIcon", void 0);
__decorate$20([
    _angular_core.Output(),
    __metadata$18("design:type", _angular_core.EventEmitter)
], exports.NbpAccordionComponent.prototype, "nbpOnToggle", void 0);
exports.NbpAccordionComponent = __decorate$20([
    _angular_core.Component({
        selector: 'nbp-accordion',template: "<div class=\"panel nbp-panel-primary\" [ngClass]=\"{'panel-default': _style.DEFAULT === nbpStyle }\"><div class=\"panel-heading\" [ngClass]=\"{'panel-heading-round': isCollapsed()}\" role=\"tab\" [id]=\"id\" (click)=\"_toggleCollapse()\"><h4 class=\"panel-title\"><span class=\"icon accordion-icon\" [ngClass]=\"nbpIcon\" *ngIf=\"!!nbpIcon\"></span> <span class=\"title\" [ngClass]=\"{'accordion-title-icon':!!nbpIcon}\">{{nbpTitle}}</span> <a role=\"button\" class=\"collapsed pull-right\"><span [ngClass]=\"{'icon ico-comuni-freccia-accordion-apri':isCollapsed() , 'icon ico-comuni-freccia-accordion-chiudi':!isCollapsed()}\"></span></a></h4></div><div class=\"panel-collapse\" [ngClass]=\"{'in panel-open':!isCollapsed()}\"><div class=\"panel-body\"><ng-content></ng-content></div></div></div>",
        animations: [],
        styles: [".panel{border:none!important;border-radius:0!important;box-shadow:none}.panel .panel-open{background-color:#6f6f6f!important}.panel-heading{border:none!important;border-radius:2px 2px 0 0!important;box-shadow:none;background-color:#ccc!important;padding:1em 1.25em 1em 1.25em!important}.panel-heading:hover{background-color:#6f6f6f!important}.panel-heading.panel-heading-round{border-radius:2px 2px 2px 2px!important}.panel-heading .panel-title{color:#fff;font-weight:700;font-size:.875em!important;text-transform:uppercase}.panel-heading .accordion-arrow{color:#fff;position:relative;font-size:2em;margin-top:-.156em}.panel-heading .stringa{color:#fff;font-size:.875em!important;margin-right:1.875em;font-weight:700;font-family:arial}.panel-heading h4{margin:0;font-size:1em}.panel-body{border:none!important;box-shadow:none;background-color:#f2f2f2!important;border-radius:0 0 2px 2px!important}.panel-collapse{border:none!important;box-shadow:none;background-color:#f2f2f2!important;border-radius:0 0 2px 2px!important;max-height:0;transition:max-height .15s ease-out;overflow:hidden}.panel-collapse.in{max-height:1000em;transition:max-height .25s ease-in}.panelTitle{font-size:.875em;font-weight:700;text-transform:uppercse}.accordionIcon{font-size:32px;position:absolute;top:9px}.nbp-panel-primary>.panel-heading{background-color:#258900!important;position:relative}.nbp-panel-primary>.panel-heading:hover{background-color:#5ca740!important}.nbp-panel-primary>.panel-heading .accordion-icon{font-size:32px;position:absolute;top:9px}.nbp-panel-primary>.panel-heading>.panel-title{font-size:.875em;font-weight:700;text-transform:uppercse}.nbp-panel-primary>.panel-heading>.panel-title>.title{padding:2px 2px 2px 0}.nbp-panel-primary>.panel-heading>.panel-title .accordion-title-icon{padding:2px 2px 2px 52px!important;margin-bottom:10px}.nbp-panel-primary>.panel-heading>.panel-open{background-color:#5ca740!important}.panel-default>.panel-heading{background-color:#ccc!important}.panel-default>.panel-heading:hover{background-color:#6f6f6f!important}.panel-default>.panel-heading .accordion-icon{font-size:32px;position:absolute;top:9px}.panel-default>.panel-heading>.panel-title{font-size:.875em;font-weight:700;text-transform:uppercse}.panel-default>.panel-heading>.panel-title>.title{padding:2px 2px 2px 20px}.panel-default>.panel-heading>.panel-title .accordion-title-icon{padding:2px 2px 2px 52px!important;margin-bottom:10px}.panel-default>.panel-open{background-color:#6f6f6f!important}.contrasto-on .panel .panel-open{background-color:#fff!important;color:#000;border:1px solid #000!important}.contrasto-on .panel .panel-open .panel-title{color:#000}.contrasto-on .panel .panel-open .stringa{color:#000}.contrasto-on .panel .panel-open .accordion-arrow{color:#000}.contrasto-on .panel-heading{background-color:#000!important}.contrasto-on .panel-heading:hover{background-color:#fff!important;color:#000;border:1px solid #000!important}.contrasto-on .panel-heading:hover .panel-title{color:#000}.contrasto-on .panel-heading:hover .stringa{color:#000}.contrasto-on .panel-heading:hover .accordion-arrow{color:#000}.contrasto-on .panel-heading .panel-title{color:#fff}.contrasto-on .panel-heading .accordion-arrow{color:#fff}.contrasto-on .panel-heading .stringa{color:#fff}.contrasto-on .panel-body{background-color:#fff!important;border-top:none!important;border-right:2px solid #000!important;border-bottom:2px solid #000!important;border-left:2px solid #000!important;color:#000}.contrasto-on .accordion-green-header>.panel-heading{background-color:#000!important}.contrasto-on .accordion-green-header>.panel-heading:hover{background-color:#fff!important;color:#000;border:1px solid #000}.contrasto-on .accordion-green-header>.panel-open{background-color:#fff!important;color:#000;border:1px solid #000!important} /*# sourceMappingURL=nbp-accordion.component.css.map */ "]
    }),
    __metadata$18("design:paramtypes", [])
], exports.NbpAccordionComponent);

var __extends$5 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$21 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$19 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$5 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/** intero autogenerato usato per id unici per radio component */
var nextId$9 = 0;
/**
 * Provider Expression that allows nbp-radio to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
var NBP_RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.NbpRadioComponent; }),
    multi: true
};
/**
 * <nbp-radio> provides the same functionality as a native <input type="radio">
 */
exports.NbpRadioComponent = (function (_super) {
    __extends$5(NbpRadioComponent, _super);
    function NbpRadioComponent(validatori, asyncValidatori) {
        var _this = _super.call(this, validatori, asyncValidatori) || this;
        _this.validatori = validatori;
        _this.asyncValidatori = asyncValidatori;
        /**
         * Identificativo univoco per il radio button. Se non viene passato un valore, l'id viene autogenerato.
         */
        _this.id = "nbp-radio-" + ++nextId$9;
        _this._nbpChecked = false;
        /**
         * Event emitted when the radio's `checked` value changes.
         */
        _this.change = new _angular_core.EventEmitter(); // TODO definire tipo specifico dell'evento
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
__decorate$21([
    _angular_core.Input(),
    __metadata$19("design:type", String)
], exports.NbpRadioComponent.prototype, "id", void 0);
__decorate$21([
    _angular_core.Input(),
    __metadata$19("design:type", String)
], exports.NbpRadioComponent.prototype, "name", void 0);
__decorate$21([
    _angular_core.Input(),
    __metadata$19("design:type", Object),
    __metadata$19("design:paramtypes", [Object])
], exports.NbpRadioComponent.prototype, "value", null);
__decorate$21([
    _angular_core.Input(),
    __metadata$19("design:type", Boolean),
    __metadata$19("design:paramtypes", [Object])
], exports.NbpRadioComponent.prototype, "disabled", null);
__decorate$21([
    _angular_core.Input(),
    __metadata$19("design:type", Boolean),
    __metadata$19("design:paramtypes", [Object])
], exports.NbpRadioComponent.prototype, "required", null);
__decorate$21([
    _angular_core.Input(),
    __metadata$19("design:type", Boolean),
    __metadata$19("design:paramtypes", [Object])
], exports.NbpRadioComponent.prototype, "checked", null);
__decorate$21([
    _angular_core.Input(),
    __metadata$19("design:type", String)
], exports.NbpRadioComponent.prototype, "nbpLabel", void 0);
__decorate$21([
    _angular_core.Input(),
    __metadata$19("design:type", Boolean)
], exports.NbpRadioComponent.prototype, "nbpShowValidation", void 0);
__decorate$21([
    _angular_core.Input(),
    __metadata$19("design:type", Boolean),
    __metadata$19("design:paramtypes", [Object])
], exports.NbpRadioComponent.prototype, "nbpDisplayInline", null);
__decorate$21([
    _angular_core.Input(),
    __metadata$19("design:type", Boolean),
    __metadata$19("design:paramtypes", [Object])
], exports.NbpRadioComponent.prototype, "nbpYellowBorder", null);
__decorate$21([
    _angular_core.Input(),
    __metadata$19("design:type", String)
], exports.NbpRadioComponent.prototype, "nbpIcon", void 0);
__decorate$21([
    _angular_core.Input(),
    __metadata$19("design:type", String)
], exports.NbpRadioComponent.prototype, "nbpSelectionSign", void 0);
__decorate$21([
    _angular_core.Input(),
    __metadata$19("design:type", String)
], exports.NbpRadioComponent.prototype, "nbpErrorMessage", void 0);
__decorate$21([
    _angular_core.Output(),
    __metadata$19("design:type", _angular_core.EventEmitter)
], exports.NbpRadioComponent.prototype, "change", void 0);
__decorate$21([
    _angular_core.ViewChild(_angular_forms.NgModel),
    __metadata$19("design:type", _angular_forms.NgModel)
], exports.NbpRadioComponent.prototype, "model", void 0);
exports.NbpRadioComponent = __decorate$21([
    _angular_core.Component({
        selector: 'nbp-radio',template: "<div class=\"iradio-container\" [ngStyle]=\"{'display': nbpDisplayInline ? 'inline-block' : 'block'}\" [ngClass]=\"{'checked': checked && !disabled, 'disabled': disabled}\"><div class=\"iradio_intesa\" [ngClass]=\"{'checked': checked, 'iradio_intesa_spunta': nbpSelectionSign === 'spunta', 'yellowborder': nbpYellowBorder, 'disabled': disabled}\"><input [id]=\"id\" [name]=\"name\" [checked]=\"checked\" type=\"radio\" [value]=\"value\" [disabled]=\"disabled\" [required]=\"required\" (click)=\"_onClickEvent($event)\" (change)=\"_onChangeEvent($event)\"></div><span *ngIf=\"!!nbpIcon\" class=\"icon radio-icon\" [ngClass]=\"nbpIcon\"></span><label *ngIf=\"nbpLabel\" [ngClass]=\"{'radio-label-icon': nbpIcon , 'radio-label': !nbpIcon}\" [for]=\"id\">{{nbpLabel}}</label><label *ngIf=\"!nbpLabel\" [ngClass]=\"{'radio-label-icon': nbpIcon , 'radio-label': !nbpIcon}\" [for]=\"id\"><ng-content></ng-content></label></div>",
        styles: [".iradio-container{margin-right:.625em}.iradio-container.checked .radio-label{color:#258900!important}.iradio-container.checked .radio-label-icon{color:#258900!important}.iradio-container.checked .radio-icon{color:#258900!important}.iradio-container.disabled .radio-label{color:#ccc!important}.iradio_intesa{position:relative;display:inline-block;vertical-align:middle;margin:0;padding:0;width:16px;height:17px;background:url(/cjlib/assets/images/intesa.png) no-repeat;border:none;background-position:-72px 0}.iradio_intesa input[type=radio]{margin:4px 4px 0 0!important;cursor:pointer;opacity:0}.iradio_intesa input[type=radio]:disabled{cursor:auto}.iradio_intesa.yellowborder{background-position:-269px 0}.iradio_intesa_spunta.checked{background-position:-162px 0!important}.iradio_intesa_spunta.checked.yellowborder{background-position:-305px 0!important}.iradio_intesa_spunta.checked.disabled{background-position:-144px 0!important}.iradio_intesa_spunta.checked.disabled.yellowborder{background-position:-340px 0!important}.iradio_intesa.checked{background-position:-90px 0}.iradio_intesa.checked.yellowborder{background-position:-287px 0}.iradio_intesa.disabled{background-position:-72px 0;cursor:default}.iradio_intesa.disabled.yellowborder{background-position:-251px 0}.iradio_intesa.checked.disabled{background-position:-126px 0}.iradio_intesa.checked.disabled.yellowborder{background-position:-322px 0}.radio-label{color:#6f6f6f;font-size:.75em;margin:0 0 0 5px!important}.radio-label-icon{padding-left:.825em;padding-bottom:.8125em;display:table-cell!important;vertical-align:middle}.radio-icon{font-size:2em!important;vertical-align:middle;margin:5px 0 0 15px!important}.radio-error-message{color:#c63200;font-size:.75em;margin-top:0;margin-bottom:.625em;opacity:1}.radio-error-message.ng-hide-add{transition:all ease-out .25s}.radio-error-message.ng-hide-remove{transition:all ease-out .25s}.radio-error-message.ng-hide{opacity:0;margin-top:-.625em}@media (-o-min-device-pixel-ratio:5/4){.iradio_intesa{background-image:url(/cjlib/assets/images/intesa@2x.png);-webkit-background-size:645px 19px;background-size:645px 19px}}@media (-webkit-min-device-pixel-ratio:1.25){.iradio_intesa{background-image:url(/cjlib/assets/images/intesa@2x.png);-webkit-background-size:645px 19px;background-size:645px 19px}}@media (min-resolution:120dpi){.iradio_intesa{background-image:url(/cjlib/assets/images/intesa@2x.png);-webkit-background-size:645px 19px;background-size:645px 19px}}@media (min-resolution:1.25dppx){.iradio_intesa{background-image:url(/cjlib/assets/images/intesa@2x.png);-webkit-background-size:645px 19px;background-size:645px 19px}}.contrasto-on .iradio-container{margin-right:.625em}.contrasto-on .iradio-container.checked .radio-label{color:#000!important}.contrasto-on .iradio-container.disabled .radio-label{color:#000!important}.contrasto-on .iradio_intesa{background:url(/cjlib/assets/images/intesa.png) no-repeat;background-position:-574px 0}.contrasto-on .iradio_intesa.yellowborder{background-position:-574px 0}.contrasto-on .iradio_intesa_spunta.checked{background-position:-610px 0!important}.contrasto-on .iradio_intesa_spunta.checked.yellowborder{background-position:-610px 0!important}.contrasto-on .iradio_intesa_spunta.checked.disabled{background-position:-610px 0!important}.contrasto-on .iradio_intesa_spunta.checked.disabled.yellowborder{background-position:-610px 0!important}.contrasto-on .iradio_intesa.checked{background-position:-592px 0}.contrasto-on .iradio_intesa.checked.yellowborder{background-position:-592px 0}.contrasto-on .iradio_intesa.disabled{background-position:-574px 0;cursor:default}.contrasto-on .iradio_intesa.disabled.yellowborder{background-position:-574px 0}.contrasto-on .iradio_intesa.checked.disabled{background-position:-592px 0}.contrasto-on .iradio_intesa.checked.disabled.yellowborder{background-position:-592px 0}.contrasto-on .radio-label{color:#000}.contrasto-on .radio-error-message{color:#000}@media (-o-min-device-pixel-ratio:5/4){.contrasto-on .iradio_intesa{background-image:url(/cjlib/assets/images/intesa@2x.png);-webkit-background-size:645px 17px;background-size:645px 17px}}@media (-webkit-min-device-pixel-ratio:1.25){.contrasto-on .iradio_intesa{background-image:url(/cjlib/assets/images/intesa@2x.png);-webkit-background-size:645px 17px;background-size:645px 17px}}@media (min-resolution:120dpi){.contrasto-on .iradio_intesa{background-image:url(/cjlib/assets/images/intesa@2x.png);-webkit-background-size:645px 17px;background-size:645px 17px}}@media (min-resolution:1.25dppx){.contrasto-on .iradio_intesa{background-image:url(/cjlib/assets/images/intesa@2x.png);-webkit-background-size:645px 17px;background-size:645px 17px}} /*# sourceMappingURL=nbp-radio.component.css.map */ "],
        providers: [NBP_RADIO_CONTROL_VALUE_ACCESSOR]
    }),
    __param$5(0, _angular_core.Optional()), __param$5(0, _angular_core.Inject(_angular_forms.NG_VALIDATORS)),
    __param$5(1, _angular_core.Optional()), __param$5(1, _angular_core.Inject(_angular_forms.NG_ASYNC_VALIDATORS)),
    __metadata$19("design:paramtypes", [Array, Array])
], exports.NbpRadioComponent);

var __decorate$22 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$20 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.NbpProgressComponent = (function () {
    function NbpProgressComponent() {
        var _this = this;
        /**
         * Proprietà che indica lo step corrente
         * Oggetto strutturato che contiene stepId e pageId
         */
        // @Input() nbpCurrentStep: object;
        this._nbpWidth = 'col-xs-8';
        this._nbpOffset = 'col-xs-offset-0';
        this.initializeProgressBar = function () {
            if (_this.nbpConfiguration) {
                switch (_this.nbpConfiguration.length) {
                    case 2:
                        _this._nbpWidth = 'col-xs-16 col-md-4';
                        _this._nbpOffset = 'col-xs-offset-0 col-md-offset-8';
                        break;
                    case 3:
                        _this._nbpWidth = 'col-xs-16 col-md-4';
                        _this._nbpOffset = 'col-xs-offset-0 col-md-offset-6';
                        break;
                    case 4:
                        _this._nbpWidth = 'col-xs-16 col-md-3';
                        _this._nbpOffset = 'col-xs-offset-4 col-md-offset-4';
                        break;
                    case 5:
                        _this._nbpWidth = 'col-xs-16 col-md-4';
                        _this._nbpOffset = 'col-xs-offset-0 col-md-offset-2';
                        break;
                    default:
                        _this._nbpWidth = 'col-xs-16';
                        _this._nbpOffset = 'col-xs-offset-0';
                        break;
                }
            }
        };
    }
    Object.defineProperty(NbpProgressComponent.prototype, "nbpDisableSticky", {
        /**
         * Booleano che abilita/disabilita il posizionamento sticky
         * al top della pagina
         */
        get: function () { return this._nbpDisableSticky; },
        set: function (value) { this._nbpDisableSticky = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    
    
    NbpProgressComponent.prototype.ngDoCheck = function () {
        this.initializeProgressBar();
    };
    return NbpProgressComponent;
}());
__decorate$22([
    _angular_core.Input(),
    __metadata$20("design:type", Array)
], exports.NbpProgressComponent.prototype, "nbpConfiguration", void 0);
__decorate$22([
    _angular_core.Input(),
    __metadata$20("design:type", Boolean),
    __metadata$20("design:paramtypes", [Object])
], exports.NbpProgressComponent.prototype, "nbpDisableSticky", null);
exports.NbpProgressComponent = __decorate$22([
    _angular_core.Component({
        selector: 'nbp-progress',template: "<div id=\"progress-container\" class=\"row nbp-progress-container\" [ngClass]=\"{'sticky':!_nbpDisableSticky}\"><div class=\"progress-container container\"><div id=\"step-container\" class=\"progress-steps-container\"><div *ngFor=\"let stepConf of nbpConfiguration; let stepIndex = index\" class=\"{{_nbpWidth}} pad-l-5 pad-r-5 {{stepIndex === 0 ? _nbpOffset : null}}\"><div class=\"progress\" [ngClass]=\"{'active': stepConf.active || stepConf.fillPercent === 100}\"><div class=\"progress-bar\" [ngStyle]=\"{ width: stepConf.fillPercent + '%' }\"></div></div><div class=\"progress-step-name\" [ngClass]=\"{'active': stepConf.active || stepConf.fillPercent === 100}\">{{stepConf.label}}</div></div></div></div><ng-content></ng-content></div>",
        styles: [".row.nbp-progress-container{background-color:#f2f2f2;margin-left:-25px;margin-right:-25px;border-bottom:1px solid #ccc;border-top:1px solid #ccc}.row.nbp-progress-container.sticky{position:fixed!important;top:0;width:100%!important;z-index:9999!important}.progress-container{display:table}.progress-steps-container{height:5em;display:table-cell;vertical-align:middle}.progress{height:.875em;background-color:#f2f2f2;border-radius:.875em;border:.125em solid #ccc;margin-bottom:.25em;box-shadow:none;overflow:hidden}.progress.active{border:.125em solid #258900}.progress-bar{border-radius:.875em;background-color:#258900;box-shadow:none}.progress-step-name{position:relative;text-align:center;font-size:.625em;font-weight:700;text-transform:uppercase;color:#6f6f6f}.progress-step-name.arrowStep:after{position:absolute;-webkit-transform:rotate(45deg);transform:rotate(45deg);content:\" \";width:15px;height:15px;border:0 solid #ccc;border-width:1px 0 0 1px;background:#fff;left:0;right:0;bottom:-32px;margin:0 auto}.progress-step-name.active{color:#258900}.contrasto-on .progress{background-color:#fff;border:.125em solid #000}.contrasto-on .progress.active{border:.125em solid #000}.contrasto-on .progress-bar{background-color:#000}.contrasto-on .progress-step-name{color:#000}.contrasto-on .progress-step-name.arrowStep:after{transform:rotate(45deg);content:\" \";width:15px;height:15px;border:0 solid #000;border-width:1px 0 0 1px;background:#fff;left:0;right:0;bottom:-32px;margin:0 auto}.contrasto-on .progress-step-name.active{color:#000} /*# sourceMappingURL=nbp-progress.component.css.map */ "]
    }),
    __metadata$20("design:paramtypes", [])
], exports.NbpProgressComponent);

var __decorate$23 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.NbpProgressStickyContentComponent = (function () {
    function NbpProgressStickyContentComponent() {
    }
    return NbpProgressStickyContentComponent;
}());
exports.NbpProgressStickyContentComponent = __decorate$23([
    _angular_core.Component({
        selector: 'nbp-progress-sticky-content',template: "<ng-content></ng-content>"
    })
], exports.NbpProgressStickyContentComponent);

var __decorate$24 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$21 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.NbpFormComponent = (function () {
    function NbpFormComponent() {
        /**
         * evento che notifica il submit della form
         */
        this.nbpFormSubmit = new _angular_core.EventEmitter();
    }
    // Methods
    /**
     * metodo per riportare la form allo stato iniziale
  
     */
    NbpFormComponent.prototype.resetForm = function () { };
    NbpFormComponent.prototype.ngOnInit = function () {
    };
    return NbpFormComponent;
}());
__decorate$24([
    _angular_core.Input(),
    __metadata$21("design:type", String)
], exports.NbpFormComponent.prototype, "nbpFormName", void 0);
__decorate$24([
    _angular_core.Input(),
    __metadata$21("design:type", Boolean)
], exports.NbpFormComponent.prototype, "nbpShowValidation", void 0);
__decorate$24([
    _angular_core.Input(),
    __metadata$21("design:type", Boolean)
], exports.NbpFormComponent.prototype, "disabled", void 0);
__decorate$24([
    _angular_core.Output(),
    __metadata$21("design:type", _angular_core.EventEmitter)
], exports.NbpFormComponent.prototype, "nbpFormSubmit", void 0);
exports.NbpFormComponent = __decorate$24([
    _angular_core.Component({
        selector: 'nbp-form',template: "<p>nbp-form works!</p>",
        styles: [" /*# sourceMappingURL=nbp-form.component.css.map */ "]
    }),
    __metadata$21("design:paramtypes", [])
], exports.NbpFormComponent);

var __decorate$25 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$22 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.NbpPagingComponent = (function () {
    function NbpPagingComponent() {
    }
    return NbpPagingComponent;
}());
__decorate$25([
    _angular_core.Input(),
    __metadata$22("design:type", Object)
], exports.NbpPagingComponent.prototype, "nbpConfiguration", void 0);
exports.NbpPagingComponent = __decorate$25([
    _angular_core.Component({
        selector: 'nbp-paging',template: "<div class=\"page-steps-container col-md-24 border-top-white\"><div class=\"container pad-t-12 pad-b-12 pad-l-10 pad-r-10\"><ul class=\"page-steps pull-left\"><ng-container *ngFor=\"let page of nbpConfiguration?.pages; let pageIndex= index\"><li class=\"page-step\" *ngIf=\"page.status !== 'todo'\"><div class=\"col\"><span class=\"page-steps-number\" [ngClass]=\"{'active': page.status === 'active', 'done': page.status === 'done'}\">{{pageIndex + 1}}</span><div class=\"row\"><label class=\"page-step-label\" *ngIf=\"page.status === 'active'\">{{nbpConfiguration.currentParentLabel}}</label><br><label class=\"page-steps-label\" *ngIf=\"page.status === 'active'\">{{page.label}}</label></div></div></li></ng-container></ul><ul class=\"page-steps pull-right\"><ng-container *ngFor=\"let page of nbpConfiguration?.pages; let pageIndex = index\"><li class=\"page-step\" *ngIf=\"page.status === 'todo'\"><span class=\"page-steps-number\" [ngClass]=\"{'active': page.status === 'active', 'done': page.status === 'done'}\">{{pageIndex + 1}}</span><label class=\"page-steps-label\" *ngIf=\"page.status === 'active'\">{{page.label}}</label></li></ng-container></ul></div></div>",
        styles: [".page-steps{list-style:none;padding:0;margin:0;height:2em}.page-steps li{display:inline-block;height:2em;line-height:2em}.page-steps li .row{line-height:0}.page-steps .page-step .col{display:inline-table}.page-steps .page-step .row{display:table-cell}.page-steps .page-steps-number{display:inline-block;border:1px solid #6f6f6f;font-weight:700;color:#6f6f6f;text-align:center;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;width:2em;height:2em;font-size:.785em;line-height:2em;margin:0 .125em 0 .125em}.page-steps .page-steps-number.active{color:#258900;border:1px solid #258900}.page-steps .page-steps-number.done{color:#fff;background-color:#258900;border-color:#258900}.page-steps .page-step-label{font-weight:400;color:#258900;font-size:.6875em;line-height:.5em;text-transform:uppercase;margin-left:.5em;margin-top:.4em}.page-steps .page-steps-label{font-weight:700;color:#258900;font-size:.785em;line-height:1em;text-transform:uppercase;margin-left:.5em}.page-steps-container{background-color:#fff}@media (min-width:768px){.page-steps .page-steps-label{font-size:.938em}.page-steps .page-steps-number{font-size:.938em}}@-moz-document url-prefix(){.page-steps .page-step .col{display:inline-flex}}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){.page-steps .page-step .col .row{top:-10px}}.contrasto-on .page-steps .page-steps-number{color:#000}.contrasto-on .page-steps .page-steps-number.active{color:#000;border:1px solid #000}.contrasto-on .page-steps .page-steps-number.done{color:#fff;background-color:#000;border-color:#000}.contrasto-on .page-steps .page-step-label{color:#000}.contrasto-on .page-steps .page-steps-label{color:#000}.contrasto-on .page-steps-container{background-color:#fff} /*# sourceMappingURL=nbp-paging.component.css.map */ "]
    }),
    __metadata$22("design:paramtypes", [])
], exports.NbpPagingComponent);

var NpbPaginationDispalyType;
(function (NpbPaginationDispalyType) {
    NpbPaginationDispalyType[NpbPaginationDispalyType["DISABLED"] = 0] = "DISABLED";
    NpbPaginationDispalyType[NpbPaginationDispalyType["ENABLED"] = 1] = "ENABLED";
})(NpbPaginationDispalyType || (NpbPaginationDispalyType = {}));
var PaginationActions;
(function (PaginationActions) {
    PaginationActions[PaginationActions["ON_PAGE_CLICK"] = 0] = "ON_PAGE_CLICK";
    PaginationActions[PaginationActions["ON_WINDOW_NEXT_CLICK"] = 1] = "ON_WINDOW_NEXT_CLICK";
    PaginationActions[PaginationActions["ON_WINDOW_PREV_CLICK"] = 2] = "ON_WINDOW_PREV_CLICK";
})(PaginationActions || (PaginationActions = {}));

var __decorate$26 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$23 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.NbpPaginationComponent = (function () {
    function NbpPaginationComponent() {
        /**
         * Configurazione numerica degli stati del paginatore.
         * Di tipo: IPaginationStatus
         * Valore di default: {pageNumber: 1, pageSize: -1, totalRecords: -1};
         */
        this.nbpPaginationStatus = { pageNumber: 1, pageSize: -1, totalRecords: -1 };
        /**
         * Configurazione per la visualizzazione dei pulsanti del paginatore.
         * Di tipo : INbpPaginationConfiguration
         * Valore di default: { next: true, prev: true, page: true, last: true, first: true };
         */
        this.nbpShowPaginationStatus = { next: true, prev: true, page: true, last: true, first: true };
        /**
         * Configurazione per la disabilitazione dei pulsanti del paginatore.
         * Di tipo : INbpPaginationConfiguration
         * Valore di default: { next: false, prev: false, page: false, last: false, first: false };
         */
        this.nbpDisablePaginationStatus = { next: false, prev: false, page: false, last: false, first: false };
        /**
         * Evento di notifica per pagina cambiata
         */
        this.nbpOnPageChange = new _angular_core.EventEmitter();
        /**
        * Evento di notifica per passaggio alla pagina successiva
        */
        this.nbpOnNext = new _angular_core.EventEmitter();
        /**
        * Evento di notifica per passaggio ad una pagina qualsiasi
        */
        this.nbpOnGoToPage = new _angular_core.EventEmitter();
        /**
        * Evento di notifica per passaggio alla pagina precedente
        */
        this.nbpOnPrev = new _angular_core.EventEmitter();
        /**
        * Evento di notifica per passaggio alla prima pagina
        */
        this.nbpOnFirst = new _angular_core.EventEmitter();
        /**
        * Evento di notifica per passaggio all'ultima pagina
        */
        this.nbpOnLast = new _angular_core.EventEmitter();
        this._windowPages = [];
        this._paginationActions = PaginationActions;
        this._showTooltip = false;
    }
    NbpPaginationComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nbpPaginationStatus) {
            this.nbpPageWindowSize = this.nbpPageWindowSize ? this.nbpPageWindowSize : 5;
            this._internalPageNumber = changes.nbpPaginationStatus.currentValue.pageNumber - 1;
            if (this._isTotalRecordsProvided() && this.nbpPageWindowSize) {
                this._lastPageModelNumber = this._getTotalPages(this.nbpPaginationStatus.pageSize, this.nbpPaginationStatus.totalRecords) - 1;
                this._evaluateWindowPages(this._internalPageNumber);
            }
            else {
                this._setShowTooltipCondition();
            }
        }
    };
    NbpPaginationComponent.prototype._getTotalPages = function (pageSize, totalSize) {
        return Math.trunc(totalSize / pageSize) + (totalSize % pageSize > 0 ? 1 : 0);
    };
    NbpPaginationComponent.prototype._isTotalRecordsProvided = function () {
        return this.nbpPaginationStatus && this.nbpPaginationStatus.totalRecords && this.nbpPaginationStatus.totalRecords !== -1;
    };
    NbpPaginationComponent.prototype._setShowTooltipCondition = function (pagesWindowLimits) {
        if (this._isTotalRecordsProvided()) {
            this._showTooltip = (pagesWindowLimits.min >= 999 || pagesWindowLimits.max >= 999) ? true : false;
        }
        else {
            this._showTooltip = this.nbpPaginationStatus.pageNumber >= 999 ? true : false;
        }
    };
    NbpPaginationComponent.prototype._evaluateTooltipText = function (pageNumber) {
        return this._showTooltip ? pageNumber : null;
    };
    NbpPaginationComponent.prototype._generateRange = function (pageNumber) {
        var min = (Math.floor(pageNumber / this.nbpPageWindowSize) * this.nbpPageWindowSize);
        var max = min + this.nbpPageWindowSize - 1;
        var pagesWindowLimits = { min: min, max: max };
        this._setShowTooltipCondition(pagesWindowLimits);
        return pagesWindowLimits;
    };
    NbpPaginationComponent.prototype._evaluateWindowPages = function (pageNumber) {
        this._windowPages = [];
        var range = this._generateRange(pageNumber);
        for (var i = range.min; i <= range.max; i++) {
            if (i > this._lastPageModelNumber) {
                break;
            }
            this._windowPages.push({ model: i, view: i + 1 });
        }
    };
    NbpPaginationComponent.prototype._isNextPageWindowButtonVisible = function () {
        var _this = this;
        var lastPageFromWindow = this._windowPages.filter(function (page) { return page.model === _this._lastPageModelNumber; });
        return !lastPageFromWindow.length;
    };
    NbpPaginationComponent.prototype._isPrevPageWindowButtonVisible = function () {
        var firstPageFromWindow = this._windowPages.filter(function (page) { return page.model === 0; });
        return !firstPageFromWindow.length;
    };
    NbpPaginationComponent.prototype._getPrevPageNumber = function () {
        var page;
        if (this.nbpPaginationStatus.pageNumber !== 1 && this.nbpPaginationStatus.pageNumber) {
            page = this.nbpPaginationStatus.pageNumber - 1;
        }
        else {
            page = this.nbpPaginationStatus.pageNumber;
        }
        return page;
    };
    NbpPaginationComponent.prototype._setPageNumber = function (windowPage) {
        this._internalPageNumber = windowPage.model;
        this.nbpPaginationStatus.pageNumber = windowPage.view;
    };
    NbpPaginationComponent.prototype.onNext = function () {
        this.nbpPaginationStatus.pageNumber = this.nbpPaginationStatus.pageNumber + 1;
        this.nbpOnNext.emit(this.nbpPaginationStatus);
        this.nbpOnPageChange.emit();
    };
    NbpPaginationComponent.prototype.onPrev = function () {
        this.nbpPaginationStatus.pageNumber = this._getPrevPageNumber();
        this.nbpOnPrev.emit(this.nbpPaginationStatus);
        this.nbpOnPageChange.emit();
    };
    NbpPaginationComponent.prototype.onLast = function () {
        this.nbpOnLast.emit(this.nbpPaginationStatus);
        this.nbpOnPageChange.emit();
    };
    NbpPaginationComponent.prototype.onFirst = function () {
        this.nbpOnFirst.emit(this.nbpPaginationStatus);
        this.nbpOnPageChange.emit();
    };
    NbpPaginationComponent.prototype.onGoToPage = function (action, page) {
        var partialPage;
        var currentPageOnWindow;
        switch (action) {
            case this._paginationActions.ON_WINDOW_NEXT_CLICK:
                partialPage = this._internalPageNumber + this.nbpPageWindowSize;
                this._evaluateWindowPages(partialPage);
                currentPageOnWindow = this._windowPages[0];
                break;
            case this._paginationActions.ON_WINDOW_PREV_CLICK:
                partialPage = this._internalPageNumber - this.nbpPageWindowSize;
                if (partialPage >= 0) {
                    this._evaluateWindowPages(partialPage);
                    currentPageOnWindow = this._windowPages[this._windowPages.length - 1];
                }
                else {
                    partialPage = this._internalPageNumber;
                    this._evaluateWindowPages(partialPage);
                    currentPageOnWindow = { model: this._internalPageNumber, view: this.nbpPaginationStatus.pageNumber };
                }
                break;
            case this._paginationActions.ON_PAGE_CLICK:
                currentPageOnWindow = this._windowPages.filter(function (window) { return window.model === page; })[0];
                partialPage = currentPageOnWindow.model;
                this._evaluateWindowPages(partialPage);
                break;
        }
        this._setPageNumber(currentPageOnWindow);
        this.nbpOnGoToPage.emit(this.nbpPaginationStatus);
        this.nbpOnPageChange.emit();
    };
    return NbpPaginationComponent;
}());
__decorate$26([
    _angular_core.Input(),
    __metadata$23("design:type", Object)
], exports.NbpPaginationComponent.prototype, "nbpPaginationStatus", void 0);
__decorate$26([
    _angular_core.Input(),
    __metadata$23("design:type", Object)
], exports.NbpPaginationComponent.prototype, "nbpShowPaginationStatus", void 0);
__decorate$26([
    _angular_core.Input(),
    __metadata$23("design:type", Object)
], exports.NbpPaginationComponent.prototype, "nbpDisablePaginationStatus", void 0);
__decorate$26([
    _angular_core.Input(),
    __metadata$23("design:type", Number)
], exports.NbpPaginationComponent.prototype, "nbpPageWindowSize", void 0);
__decorate$26([
    _angular_core.Output(),
    __metadata$23("design:type", _angular_core.EventEmitter)
], exports.NbpPaginationComponent.prototype, "nbpOnPageChange", void 0);
__decorate$26([
    _angular_core.Output(),
    __metadata$23("design:type", _angular_core.EventEmitter)
], exports.NbpPaginationComponent.prototype, "nbpOnNext", void 0);
__decorate$26([
    _angular_core.Output(),
    __metadata$23("design:type", _angular_core.EventEmitter)
], exports.NbpPaginationComponent.prototype, "nbpOnGoToPage", void 0);
__decorate$26([
    _angular_core.Output(),
    __metadata$23("design:type", _angular_core.EventEmitter)
], exports.NbpPaginationComponent.prototype, "nbpOnPrev", void 0);
__decorate$26([
    _angular_core.Output(),
    __metadata$23("design:type", _angular_core.EventEmitter)
], exports.NbpPaginationComponent.prototype, "nbpOnFirst", void 0);
__decorate$26([
    _angular_core.Output(),
    __metadata$23("design:type", _angular_core.EventEmitter)
], exports.NbpPaginationComponent.prototype, "nbpOnLast", void 0);
exports.NbpPaginationComponent = __decorate$26([
    _angular_core.Component({
        selector: 'nbp-pagination',template: "<div class=\"pagination-container\"><div class=\"row\"><div class=\"col-md-5\"><button id=\"firstButton\" class=\"table-page-btn pull-left\" type=\"button\" (click)=\"onFirst()\" *ngIf=\"nbpShowPaginationStatus.first\" [disabled]=\"nbpDisablePaginationStatus.first\"><span class=\"page-btn-arrow icomoon-Simboli_freccia_sinistra\"></span> <span class=\"page-btn-text\">PRIMO</span></button></div><div class=\"col-md-14\" style=\"text-align:center\"><button id=\"prevButton\" class=\"table-page-btn\" type=\"button\" (click)=\"onPrev()\" *ngIf=\"nbpShowPaginationStatus.prev\" [disabled]=\"nbpDisablePaginationStatus.prev\"><span class=\"page-btn-arrow icomoon-Simboli_Risorsa-12\"></span></button><ng-container *ngIf=\"_isTotalRecordsProvided() && nbpShowPaginationStatus.page\"><button id=\"windowPrevButton\" *ngIf=\"_isPrevPageWindowButtonVisible()\" [disabled]=\"nbpDisablePaginationStatus.page\" class=\"table-page-btn\" type=\"button\" (click)=\"onGoToPage(_paginationActions.ON_WINDOW_PREV_CLICK)\">...</button><ng-container *ngFor=\"let page of _windowPages; let i = index\"><button id=\"windowPageButton\" class=\"table-page-btn\" type=\"button\" [disabled]=\"nbpDisablePaginationStatus.page\" (click)=\"onGoToPage(_paginationActions.ON_PAGE_CLICK, page.model)\"><span class=\"table-page-number\" [ngClass]=\"{'active': nbpPaginationStatus && page.model === _internalPageNumber}\" [attr.tooltip]=\"_evaluateTooltipText(page.view)\">{{page.view}}</span></button></ng-container><button id=\"windowNextButton\" *ngIf=\"_isNextPageWindowButtonVisible()\" [disabled]=\"nbpDisablePaginationStatus.page\" class=\"table-page-btn\" type=\"button\" (click)=\"onGoToPage(_paginationActions.ON_WINDOW_NEXT_CLICK)\">...</button></ng-container><button *ngIf=\"!_isTotalRecordsProvided() && nbpShowPaginationStatus.page\" class=\"table-page-btn\" type=\"button\"><span class=\"table-page-number active\" [attr.tooltip]=\"_evaluateTooltipText(nbpPaginationStatus.pageNumber)\">{{nbpPaginationStatus.pageNumber}}</span></button> <button id=\"nextButton\" class=\"table-page-btn\" type=\"button\" (click)=\"onNext()\" *ngIf=\"nbpShowPaginationStatus.next\" [disabled]=\"nbpDisablePaginationStatus.next\"><span class=\"page-btn-arrow icomoon-Simboli_Risorsa-13\"></span></button></div><div class=\"col-md-5\"><button id=\"lastButton\" class=\"table-page-btn pull-right\" *ngIf=\"_isTotalRecordsProvided() && nbpShowPaginationStatus.last\" (click)=\"onLast()\" [disabled]=\"nbpDisablePaginationStatus.last\"><span class=\"page-btn-text\">ULTIMO</span> <span class=\"page-btn-arrow icomoon-Simboli_freccia_destra\"></span></button></div></div></div>",
        styles: [".truncate{display:inline-block;width:2em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pagination-container{margin-top:.625em}.pagination-container table{width:100%;table-layout:fixed}.pagination-container .table-page-btn{display:inline-block;color:#258900;cursor:pointer;margin-top:.313em;background-color:transparent;border:none}.pagination-container .table-page-btn.disabled{color:#6f6f6f;cursor:auto}.pagination-container .table-page-btn .page-btn-arrow{font-size:1.25em;vertical-align:middle}.pagination-container .table-page-btn .page-btn-text{padding:0 .625em 0 .625em;font-size:.813em;font-weight:700}.pagination-container .table-page-btn .table-page-number{display:inline-block;border:1px solid #258900;font-weight:700;color:#258900;background:#fff;text-align:center;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;width:2em;height:2em;font-size:.938em;line-height:2em;margin:0 .125em 0 .125em}.pagination-container .table-page-btn .table-page-number.backward{margin-right:-.125em}.pagination-container .table-page-btn .table-page-number.forward{margin-left:-.125em}.pagination-container .table-page-btn .table-page-number.active{color:#fff;background:#258900;cursor:default}.pagination-container .pagination-container-center{text-align:center}.pagination-container .pagination-container-center .table-page-btn{margin-top:0}span.table-page-number[tooltip]:hover{position:relative}span.table-page-number[tooltip]:hover:after{content:attr(tooltip);padding:4px 8px;color:#258900;position:absolute;left:0;top:100%;white-space:nowrap;z-index:1000;border-radius:5px;background-image:transparent}.contrasto-on .pagination-container .table-page-btn{color:#000}.contrasto-on .pagination-container .table-page-btn.disabled{color:#6f6f6f}.contrasto-on .pagination-container .table-page-btn .table-page-number{border:1px solid #000;color:#000;background:#fff}.contrasto-on .pagination-container .table-page-btn .table-page-number.active{color:#fff;background:#000} /*# sourceMappingURL=nbp-pagination.component.css.map */ "]
    }),
    __metadata$23("design:paramtypes", [])
], exports.NbpPaginationComponent);

var __decorate$28 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.NbpLoadingService = (function () {
    function NbpLoadingService() {
        /**
         * ReplaySubject -> manda a ogni subscriber anche se si registra dopo tutta la storia dello stream dall'inizio
         *
         * BehaviorSubject -> manda a ogni subscriver solo l'item più recente presente nello stream
         */
        this._loadingSpinnerStatus = new rxjs_BehaviorSubject.BehaviorSubject({ id: null, status: false });
        this.statusArray = new Array();
    }
    // private handleMultipleActivationStatus = (value: INbpLoadingStatus) => {
    //   console.log(id)
    //   if (value.status ) {
    //     this.statusArray.push(value.id);
    //     let statusForId = this.statusArray.filter((elem) => elem === value.id);
    //     if (statusForId.length === 1) {
    //       return true;
    //     }
    //   } else {
    //     let statusIndex = this.statusArray.indexOf(value.id);
    //     if (statusIndex !== -1) {
    //       this.statusArray.splice(statusIndex, 1);
    //     }
    //     statusIndex = this.statusArray.indexOf(value.id);
    //      if (statusIndex === -1) {
    //        return true;
    //      }
    //   }
    //   return false;
    // }
    NbpLoadingService.prototype.handleMultipleActivationStatus = function (key) {
        var _this = this;
        return function (value) {
            console.log(key);
            if (value.id === key) {
                if (value.status) {
                    _this.statusArray.push(value.id);
                    var statusForId = _this.statusArray.filter(function (elem) { return elem === value.id; });
                    if (statusForId.length === 1) {
                        return true;
                    }
                }
                else {
                    var statusIndex = _this.statusArray.indexOf(value.id);
                    if (statusIndex !== -1) {
                        _this.statusArray.splice(statusIndex, 1);
                    }
                    statusIndex = _this.statusArray.indexOf(value.id);
                    if (statusIndex === -1) {
                        return true;
                    }
                }
            }
            return false;
        };
    };
    /**
     * Permette di settare la visibilità del componente loadingSpinner
     */
    NbpLoadingService.prototype.setLoadingSpinnerStatus = function (id, showLoadingSpinner) {
        var loadingStatus = {
            id: id,
            status: showLoadingSpinner
        };
        this._loadingSpinnerStatus.next(loadingStatus);
    };
    /**
     * Recupera la visibilità del componente loadingSpinner
     */
    NbpLoadingService.prototype.getLoadingSpinnerStatus = function (id) {
        return this._loadingSpinnerStatus.filter(this.handleMultipleActivationStatus(id));
    };
    return NbpLoadingService;
}());
exports.NbpLoadingService = __decorate$28([
    _angular_core.Injectable()
], exports.NbpLoadingService);

var __decorate$27 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$24 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** intero autogenerato usato per id unici per nbpInput component */
var nextId$10 = 0;
exports.NbpLoadingComponent = (function () {
    function NbpLoadingComponent(loadingService) {
        this.loadingService = loadingService;
        /**
         * Identificativo univoco per il text field.
         * Se nessun id è fornito e' auto-generato.
         */
        this.id = "nbp-input-" + ++nextId$10;
        this._animationModeAuto = false;
        /**
         * Evento lanciato allo stop del loading.
         */
        this.nbpOnStopAnimation = new _angular_core.EventEmitter();
        /**
         * Evento lanciato allo start del laoding.
         */
        this.nbpOnStartAnimation = new _angular_core.EventEmitter();
    }
    Object.defineProperty(NbpLoadingComponent.prototype, "nbpShowAnimation", {
        /**
         * Flag che definisce la visibilità dell’animazione di caricamento
         */
        get: function () { return this._showAnimation; },
        set: function (value) { this._showAnimation = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbpLoadingComponent.prototype, "nbpAnimationModeAuto", {
        /**
         * Flag che definisce la modalità automatica di visualizzazione dell'animazione
         * quando presente il componente ignora il parametro nbpShowAnimation e l'invocazione
         * dei metodi pubblici, ma si restistra al servizio NbpLoadingService
         */
        get: function () { return this._animationModeAuto; },
        set: function (value) {
            this._animationModeAuto = coerceBooleanProperty(value);
            if (this._showAnimation) {
                console.log("NbpLoadingComponent - Emitting event: nbpOnStartAnimation");
                this.nbpOnStartAnimation.emit();
            }
            else {
                console.log("NbpLoadingComponent - Emitting event: nbpOnStopAnimation");
                this.nbpOnStopAnimation.emit();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 	metodo per far visualizzare il loading
     */
    NbpLoadingComponent.prototype.startAnimation = function () {
        this.nbpShowAnimation = true;
        this.nbpOnStartAnimation.emit();
    };
    /**
     * metodo per spegnere il loading
     */
    NbpLoadingComponent.prototype.stopAnimation = function () {
        this.nbpShowAnimation = false;
        this.nbpOnStopAnimation.emit();
    };
    NbpLoadingComponent.prototype.ngOnInit = function () {
        if (this._animationModeAuto) {
            // registra al servizio
            this._showAutoAnimation = this.loadingService.getLoadingSpinnerStatus(this.id);
        }
    };
    NbpLoadingComponent.prototype.ngOnChanges = function (changes) {
        if (!this._animationModeAuto) {
            if (changes.nbpShowAnimation) {
                if (changes.nbpShowAnimation.currentValue) {
                    this.nbpOnStartAnimation.emit();
                }
                else {
                    this.nbpOnStopAnimation.emit();
                }
            }
        }
    };
    return NbpLoadingComponent;
}());
__decorate$27([
    _angular_core.Input(),
    __metadata$24("design:type", String)
], exports.NbpLoadingComponent.prototype, "name", void 0);
__decorate$27([
    _angular_core.Input(),
    __metadata$24("design:type", String)
], exports.NbpLoadingComponent.prototype, "id", void 0);
__decorate$27([
    _angular_core.Input(),
    __metadata$24("design:type", Boolean),
    __metadata$24("design:paramtypes", [Object])
], exports.NbpLoadingComponent.prototype, "nbpShowAnimation", null);
__decorate$27([
    _angular_core.Input(),
    __metadata$24("design:type", Boolean),
    __metadata$24("design:paramtypes", [Object])
], exports.NbpLoadingComponent.prototype, "nbpAnimationModeAuto", null);
__decorate$27([
    _angular_core.Output(),
    __metadata$24("design:type", _angular_core.EventEmitter)
], exports.NbpLoadingComponent.prototype, "nbpOnStopAnimation", void 0);
__decorate$27([
    _angular_core.Output(),
    __metadata$24("design:type", _angular_core.EventEmitter)
], exports.NbpLoadingComponent.prototype, "nbpOnStartAnimation", void 0);
exports.NbpLoadingComponent = __decorate$27([
    _angular_core.Component({
        selector: 'nbp-loading',template: "<div *ngIf=\"(!nbpAnimationModeAuto && nbpShowAnimation) || (nbpAnimationModeAuto &&  (_showAutoAnimation | async)?.status)\" id=\"id\"><div class=\"nbp-spinner-overlay\"></div><div class=\"nbp-spinner-wrapper\"><div class=\"nbp-spinner\"></div></div></div>",
        styles: [".nbp-spinner-wrapper{position:fixed;width:100%;height:100vh;display:flex;align-items:center;background-color:transparent;top:0;left:0;z-index:99999}.nbp-spinner-overlay{position:fixed;width:100%;height:100%;display:flex;align-items:center;top:0;left:0;background-color:rgba(0,0,0,.5);z-index:99999}.nbp-spinner{display:flex;width:90px;height:90px;background-image:url(/cjlib/assets/images/ISP-loading-spinner.gif);margin:0 auto} /*# sourceMappingURL=nbp-loading.component.css.map */ "]
    }),
    __metadata$24("design:paramtypes", [exports.NbpLoadingService])
], exports.NbpLoadingComponent);

var __decorate$29 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$25 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.NbpBreadcrumbComponent = (function () {
    function NbpBreadcrumbComponent() {
    }
    NbpBreadcrumbComponent.prototype.ngOnInit = function () {
    };
    return NbpBreadcrumbComponent;
}());
__decorate$29([
    _angular_core.Input(),
    __metadata$25("design:type", Array)
], exports.NbpBreadcrumbComponent.prototype, "nbpBreadcrumbStructure", void 0);
__decorate$29([
    _angular_core.Input(),
    __metadata$25("design:type", Object)
], exports.NbpBreadcrumbComponent.prototype, "nbpCurrentPosition", void 0);
exports.NbpBreadcrumbComponent = __decorate$29([
    _angular_core.Component({
        selector: 'nbp-breadcrumb',template: "<div class=\"breadcrumb-container\"><ul class=\"nbp-breadcrumb container\"><li *ngFor=\"let route of nbpBreadcrumbStructure; let last = last\"><a><span [ngClass]=\"{'nbp-breadcrumb-current': route === nbpCurrentPosition}\">{{route.name}} <span *ngIf=\"!last\" class=\"icon ico-comuni-freccia-dx\" [style.verticalAlign]=\"'middle'\"></span></span></a></li></ul></div>",
        styles: [".breadcrumb-container{background-color:#f2f2f2;border-bottom:1px solid #ccc}.breadcrumb-container .nbp-breadcrumb{padding:10px 16px;list-style:none;background-color:#f2f2f2;font-size:17px;margin-bottom:0!important}.breadcrumb-container .nbp-breadcrumb li{display:inline-block}.breadcrumb-container .nbp-breadcrumb li a{color:#5ca740;text-decoration:none}.breadcrumb-container .nbp-breadcrumb li a:hover{color:#258900;text-decoration:underline}.nbp-breadcrumb-current{font-weight:700} /*# sourceMappingURL=nbp-breadcrumb.component.css.map */ "]
    }),
    __metadata$25("design:paramtypes", [])
], exports.NbpBreadcrumbComponent);

var __decorate$30 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$26 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.NbpTooltipComponent = (function () {
    function NbpTooltipComponent(element) {
        this.element = element;
        this._tooltipSize = exports.NbpSize;
        this._isVisible = false;
        /**
         * Strategia di apertura tooltip, 'click' o 'hover':
         * click -> comportamento popover con apertura e chiusura su click (più pulsante x all'interno del tooltip)
         * hover -> comportamento tooltip classico apertura su hover , chiusura sulla perdita dell'hover
         * Valore di default: hover
        */
        this.nbpVisibilityStrategy = 'hover';
        /**
         * (Opzionale) Enum che definisce il tipo di icona da visualizzare nel tooltip:
         * “Warning” | “Help” | ”Info”
         * Default: nessuna icona
         * Funzionante solo se non presente nbpTemplate
         */
        // TODO NON VIENE MAI USATA QUESTA PROPERTY -- COMMENTATA PER EVITARE REFUSI
        /*@Input() nbpType: object; // enum; Non presente nelle nuove StyleGuide: nuovo componente icona (?)/(!)/(i) -> tooltip?*/
        /**
         * Proprietà che definisce la grandezza del tooltip, tramite l'enum NbpSize
         * valore di default: NbpSize.SM
         */
        this.nbpSize = exports.NbpSize.SM;
        this._nbpHidden = false;
    }
    Object.defineProperty(NbpTooltipComponent.prototype, "hidden", {
        /**
         * Booleano che abilita/disabilita la visualizzazione del tooltip.
        * Attributo "hidden" standard di HTML5 element
         */
        get: function () { return this._nbpHidden; },
        set: function (value) { this._nbpHidden = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    
    
    NbpTooltipComponent.prototype.onClick = function (target) {
        if (!this._isVisibilityStrategyHover()) {
            this._closePopover(target);
        }
    };
    NbpTooltipComponent.prototype._open = function () {
        this._isVisible = true;
    };
    NbpTooltipComponent.prototype._close = function () {
        this._isVisible = false;
    };
    NbpTooltipComponent.prototype._closePopover = function (target) {
        var parentFound = false;
        while (target != null && !parentFound) {
            if (target === this.element.nativeElement) {
                parentFound = true;
            }
            target = target.parentElement;
        }
        if (!parentFound) {
            this._isVisible = false;
        }
    };
    NbpTooltipComponent.prototype._toggleVisibility = function () {
        if (this.nbpVisibilityStrategy === 'hover') {
            return;
        }
        if (this._isVisible) {
            this._close();
        }
        else {
            this._open();
        }
    };
    NbpTooltipComponent.prototype._isVisibilityStrategyHover = function () {
        return this.nbpVisibilityStrategy === 'hover';
    };
    return NbpTooltipComponent;
}());
__decorate$30([
    _angular_core.Input(),
    __metadata$26("design:type", String)
], exports.NbpTooltipComponent.prototype, "nbpVisibilityStrategy", void 0);
__decorate$30([
    _angular_core.Input(),
    __metadata$26("design:type", String)
], exports.NbpTooltipComponent.prototype, "nbpPosition", void 0);
__decorate$30([
    _angular_core.Input(),
    __metadata$26("design:type", Number)
], exports.NbpTooltipComponent.prototype, "nbpSize", void 0);
__decorate$30([
    _angular_core.Input(),
    __metadata$26("design:type", String)
], exports.NbpTooltipComponent.prototype, "nbpText", void 0);
__decorate$30([
    _angular_core.Input(),
    __metadata$26("design:type", _angular_core.TemplateRef)
], exports.NbpTooltipComponent.prototype, "nbpTemplate", void 0);
__decorate$30([
    _angular_core.Input(),
    __metadata$26("design:type", Object)
], exports.NbpTooltipComponent.prototype, "nbpTemplateData", void 0);
__decorate$30([
    _angular_core.Input(),
    __metadata$26("design:type", Boolean),
    __metadata$26("design:paramtypes", [Object])
], exports.NbpTooltipComponent.prototype, "hidden", null);
__decorate$30([
    _angular_core.HostListener('document: click', ['$event.target']),
    __metadata$26("design:type", Function),
    __metadata$26("design:paramtypes", [HTMLElement]),
    __metadata$26("design:returntype", void 0)
], exports.NbpTooltipComponent.prototype, "onClick", null);
exports.NbpTooltipComponent = __decorate$30([
    _angular_core.Component({
        selector: 'nbp-tooltip',template: "<span [ngClass]=\"{ 'nbp-tooltip': _isVisibilityStrategyHover(), 'nbp-popover': !_isVisibilityStrategyHover() }\"><span (click)=\"_toggleVisibility()\" [class.clickable]=\"!_isVisibilityStrategyHover()\"><ng-content></ng-content></span><span [hidden]=\"hidden\" [ngClass]=\"{ 'tooltip-content': _isVisibilityStrategyHover(), 'popover-content': !_isVisibilityStrategyHover(), 'top':nbpPosition=='Top', 'bottom':nbpPosition=='Bottom', 'right':nbpPosition=='Right', 'left':nbpPosition=='Left', 'top-left':nbpPosition=='Top-Left', 'top-right':nbpPosition=='Top-Right', 'bottom-left':nbpPosition=='Bottom-Left', 'bottom-right':nbpPosition=='Bottom-Right',  'sm':nbpSize === _tooltipSize.SM,  'md':nbpSize === _tooltipSize.MD,  'lg':nbpSize === _tooltipSize.LG,  'opened': !_isVisibilityStrategyHover() && _isVisible }\"><span *ngIf=\"!nbpTemplate; else nbpTemplateContainer\" [ngClass]=\"{ 'tooltip-text': _isVisibilityStrategyHover() ,  'popover-text': !_isVisibilityStrategyHover() }\"><div class=\"row\"><div class=\"col-md-24\" [ngClass]=\"{'pad-b-12': !_isVisibilityStrategyHover()}\">{{nbpText}}</div></div></span><ng-template #nbpTemplateContainer [ngTemplateOutlet]=\"nbpTemplate\" [ngTemplateOutletContext]=\"nbpTemplateData\"></ng-template><div class=\"icon-position clickable\" *ngIf=\"!_isVisibilityStrategyHover()\"><span class=\"ico-azioni-elimina\" (click)=\"_close()\"></span></div></span></span>",
        styles: [".bottom .icon-position,.bottom-left .icon-position,.bottom-right .icon-position,.right .icon-position,.top .icon-position,.top-left .icon-position,.top-right .icon-position{position:absolute;top:5px;right:5px;color:#daa520;font-weight:700}.left .icon-position{position:absolute;top:5px;left:5px;color:#daa520;font-weight:700}.nbp-popover,.nbp-tooltip{position:relative;display:inline-block}.clickable{cursor:pointer}.nbp-popover .popover-content,.nbp-tooltip .tooltip-content{visibility:hidden;background-color:#323232;color:#fff;padding:5px 0;position:absolute;z-index:1;display:inline-block!important}.nbp-popover .popover-content .tooltip-text,.nbp-tooltip .tooltip-content .tooltip-text{text-align:center}.nbp-popover .popover-content .popover-text,.nbp-tooltip .tooltip-content .popover-text{text-align:center}.nbp-popover .popover-content.md,.nbp-tooltip .tooltip-content.md{width:350px}.nbp-popover .popover-content.sm,.nbp-tooltip .tooltip-content.sm{width:200px}.nbp-popover .popover-content.lg,.nbp-tooltip .tooltip-content.lg{width:500px}.nbp-popover .popover-content.right,.nbp-tooltip .tooltip-content.right{top:50%!important;left:100%!important;margin-left:10px;transform:translateY(-50%)}.nbp-popover .popover-content.right::after,.nbp-tooltip .tooltip-content.right::after{content:\"\";position:absolute;top:50%;right:100%;transform:translateY(-50%);border-top-width:10px;border-right-width:9px;border-bottom-width:10px;border-left-width:9px;border-style:solid;border-color:transparent #323232 transparent transparent}.nbp-popover .popover-content.left,.nbp-tooltip .tooltip-content.left{top:50%;right:100%;margin-right:10px;transform:translateY(-50%)}.nbp-popover .popover-content.left::after,.nbp-tooltip .tooltip-content.left::after{content:\"\";position:absolute;top:50%;left:100%;transform:translateY(-50%);border-top-width:10px;border-right-width:9px;border-bottom-width:10px;border-left-width:9px;border-style:solid;border-color:transparent transparent transparent #323232}.nbp-popover .popover-content.top,.nbp-tooltip .tooltip-content.top{bottom:100%;left:50%;margin-bottom:13px;transform:translateX(-50%)}.nbp-popover .popover-content.top::after,.nbp-tooltip .tooltip-content.top::after{content:\"\";position:absolute;top:100%;left:50%;transform:translateX(-50%);border-top-width:10px;border-right-width:12px;border-bottom-width:10px;border-left-width:12px;border-style:solid;border-color:#323232 transparent transparent transparent}.nbp-popover .popover-content.bottom,.nbp-tooltip .tooltip-content.bottom{top:100%;left:50%;margin-top:15px;transform:translateX(-50%)}.nbp-popover .popover-content.bottom::after,.nbp-tooltip .tooltip-content.bottom::after{content:\"\";position:absolute;bottom:100%;left:50%;transform:translateX(-50%);border-top-width:10px;border-right-width:12px;border-bottom-width:10px;border-left-width:12px;border-style:solid;border-color:transparent transparent #323232 transparent}.nbp-popover .popover-content.top-left,.nbp-tooltip .tooltip-content.top-left{bottom:100%;left:0;margin-bottom:15px}.nbp-popover .popover-content.top-left::after,.nbp-tooltip .tooltip-content.top-left::after{content:\"\";position:absolute;top:100%;left:5%;border-top-width:10px;border-right-width:12px;border-bottom-width:10px;border-left-width:12px;border-style:solid;border-color:#323232 transparent transparent transparent}.nbp-popover .popover-content.top-right,.nbp-tooltip .tooltip-content.top-right{bottom:100%;right:0;margin-bottom:15px}.nbp-popover .popover-content.top-right::after,.nbp-tooltip .tooltip-content.top-right::after{content:\"\";position:absolute;top:100%;right:5%;border-top-width:10px;border-right-width:12px;border-bottom-width:10px;border-left-width:12px;border-style:solid;border-color:#323232 transparent transparent transparent}.nbp-popover .popover-content.bottom-left,.nbp-tooltip .tooltip-content.bottom-left{top:100%;left:0;margin-top:15px}.nbp-popover .popover-content.bottom-left::after,.nbp-tooltip .tooltip-content.bottom-left::after{content:\"\";position:absolute;bottom:100%;left:5%;border-top-width:10px;border-right-width:12px;border-bottom-width:10px;border-left-width:12px;border-style:solid;border-color:transparent transparent #323232 transparent}.nbp-popover .popover-content.bottom-right,.nbp-tooltip .tooltip-content.bottom-right{top:100%;right:0;margin-top:15px}.nbp-popover .popover-content.bottom-right::after,.nbp-tooltip .tooltip-content.bottom-right::after{content:\"\";position:absolute;bottom:100%;right:5%;border-top-width:10px;border-right-width:12px;border-bottom-width:10px;border-left-width:12px;border-style:solid;border-color:transparent transparent #323232 transparent}.nbp-popover .popover-content.opened,.nbp-tooltip:hover .tooltip-content{visibility:visible} /*# sourceMappingURL=nbp-tooltip.component.css.map */ "]
    }),
    __metadata$26("design:paramtypes", [_angular_core.ElementRef])
], exports.NbpTooltipComponent);

var __decorate$31 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$27 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.NbpIconComponent = (function () {
    function NbpIconComponent() {
    }
    Object.defineProperty(NbpIconComponent.prototype, "buttonIcon", {
        get: function () { return this._buttonIcon; },
        set: function (value) { this._buttonIcon = value != null && "" + value !== 'false'; },
        enumerable: true,
        configurable: true
    });
    NbpIconComponent.prototype.ngOnInit = function () { };
    return NbpIconComponent;
}());
__decorate$31([
    _angular_core.Input(),
    __metadata$27("design:type", String)
], exports.NbpIconComponent.prototype, "nbpName", void 0);
__decorate$31([
    _angular_core.Input(),
    __metadata$27("design:type", Boolean),
    __metadata$27("design:paramtypes", [Object])
], exports.NbpIconComponent.prototype, "buttonIcon", null);
exports.NbpIconComponent = __decorate$31([
    _angular_core.Component({
        selector: 'nbp-icon',template: "<span class=\"icon\" [ngClass]=\"nbpName\" [class.button-icon]=\"buttonIcon\"></span>",
        styles: [" /*# sourceMappingURL=nbp-icon.component.css.map */ "]
    }),
    __metadata$27("design:paramtypes", [])
], exports.NbpIconComponent);

var __decorate$32 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$28 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// DA IMPLEMENTARE TOTALMENTE PER NON FAR FALLIRE I TEST
exports.NbpLoggedUserComponent = (function () {
    function NbpLoggedUserComponent() {
        this.nbpLogout = new _angular_core.EventEmitter();
    }
    Object.defineProperty(NbpLoggedUserComponent.prototype, "disableLogout", {
        /**
         * Flag che abilita/disabilita la possibilità di eseguire il logout
         */
        get: function () { return this._nbpDisableLogout; },
        set: function (value) { this._nbpDisableLogout = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    NbpLoggedUserComponent.prototype.ngOnInit = function () { };
    NbpLoggedUserComponent.prototype._onLogoutClick = function () {
        this.nbpLogout.emit();
    };
    return NbpLoggedUserComponent;
}());
__decorate$32([
    _angular_core.Input(),
    __metadata$28("design:type", Object)
], exports.NbpLoggedUserComponent.prototype, "nbpUser", void 0);
__decorate$32([
    _angular_core.Input(),
    __metadata$28("design:type", Boolean),
    __metadata$28("design:paramtypes", [Object])
], exports.NbpLoggedUserComponent.prototype, "disableLogout", null);
__decorate$32([
    _angular_core.Input(),
    __metadata$28("design:type", Boolean)
], exports.NbpLoggedUserComponent.prototype, "nbpDisableLogout", void 0);
__decorate$32([
    _angular_core.Output(),
    __metadata$28("design:type", _angular_core.EventEmitter)
], exports.NbpLoggedUserComponent.prototype, "nbpLogout", void 0);
exports.NbpLoggedUserComponent = __decorate$32([
    _angular_core.Component({
        selector: 'nbp-logged-user',
        template: "<div class=\"user-button-container\"><span class=\"user-button\"><a (click)=\"_onLogoutClick()\"><table *ngIf=\"!largeUserImage\"><tr><th class=\"user-image-container\"><div class=\"icon ico-navbar-gestore-01\" [hidden]=\"imageLoaded\"></div><img [src]=\"nbpUser.image\" isp-onload=\"imageLoaded = true\" [hidden]=\"imageError\"></th><th class=\"user-info\"><span [innerText]=\"nbpUser.name + ' ' + nbpUser.surname\"></span><br><span class=\"user-info-subtitle\">Utente: <span class=\"user-info-subtitle--content\">{{nbpUser.id}}</span> &#124; </span><span class=\"user-info-subtitle\">Ruolo: <span class=\"user-info-subtitle--content\">{{nbpUser.role}}</span></span></th></tr></table></a></span></div>",
        styles: [".user-button-container{padding:0}[class*=\" ico-\"]:before{vertical-align:middle}.user-button{margin:0}.user-button a{color:#fa9600;display:table;padding:.313em 1.25em .313em 1.25em;margin:1.25em 0 1.25em 0;text-decoration:none;cursor:pointer;width:100%;height:3.75em}.user-button a:active,.user-button a:focus,.user-button a:hover{background-color:#fa9600;color:#323232}.user-button a table{width:100%;display:table-cell;vertical-align:middle}.user-image-container{width:1.75em;height:1.75em}.user-image-container div{vertical-align:middle;font-size:1.75em!important;margin:0!important}.user-image-container img{position:relative;border-radius:50%;width:100%}.user-info{padding-left:.625em;vertical-align:middle;line-height:1;font-weight:400}.user-info-subtitle{display:inline-block;font-size:.75em}.user-info-subtitle .user-info-subtitle--content{text-transform:uppercase;font-weight:700} /*# sourceMappingURL=nbp-logged-user.component.css.map */ "]
    }),
    __metadata$28("design:paramtypes", [])
], exports.NbpLoggedUserComponent);

var __decorate$33 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$29 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.NbpPanelComponent = (function () {
    function NbpPanelComponent() {
        /**
        * Label visualizzata come titolo del panel. Se non è presente
        * non viene visualizzato l'header del panel.
        */
        this.nbpTitle = '';
    }
    NbpPanelComponent.prototype.ngOnInit = function () { };
    return NbpPanelComponent;
}());
__decorate$33([
    _angular_core.Input(),
    __metadata$29("design:type", String)
], exports.NbpPanelComponent.prototype, "nbpTitle", void 0);
exports.NbpPanelComponent = __decorate$33([
    _angular_core.Component({selector: 'nbp-panel',
        template: "<div class=\"panel panel-default\"><div class=\"panel-heading\" *ngIf=\"nbpTitle\">{{nbpTitle}}</div><div [ngClass]=\"{'panel-body-border': nbpTitle, 'panel-body': !nbpTitle}\"><ng-content></ng-content></div></div>",
        styles: [".panel-default{border:none!important}.panel-default>.panel-heading{color:#5ca740;text-decoration:none;background-color:transparent;border:none!important}.panel-default>.panel-body-border{padding:15px;border-top:2px solid #ccc;background-color:#f2f2f2}.panel-default>.panel-body{padding:15px;background-color:#f2f2f2} /*# sourceMappingURL=nbp-panel.component.css.map */ "]
    }),
    __metadata$29("design:paramtypes", [])
], exports.NbpPanelComponent);

var __decorate$34 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$30 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.NbpCustomerNameComponent = (function () {
    function NbpCustomerNameComponent() {
    }
    return NbpCustomerNameComponent;
}());
__decorate$34([
    _angular_core.Input(),
    __metadata$30("design:type", String)
], exports.NbpCustomerNameComponent.prototype, "nbpCustomer", void 0);
exports.NbpCustomerNameComponent = __decorate$34([
    _angular_core.Component({
        selector: 'nbp-customer-name',template: "<div class=\"info-client-container\" *ngIf=\"nbpCustomer\"><div class=\"icon-client-container\"><span class=\"icon-client ico-navbar-gestore-01\"></span></div><div class=\"data-client-container\"><span class=\"nome-cliente\">{{nbpCustomer}}</span></div></div>",
        styles: [".info-client-container{display:table-row;height:50px;color:#fff}.data-client-container,.icon-client-container{display:table-cell;vertical-align:middle;padding-left:5px;padding-right:5px}.icon-client{display:inline-block;width:32px;height:32px;font-size:32px} /*# sourceMappingURL=nbp-customer-name.component.css.map */ "]
    }),
    __metadata$30("design:paramtypes", [])
], exports.NbpCustomerNameComponent);

(function (NbpFeedbackType) {
    NbpFeedbackType[NbpFeedbackType["SUCCESS"] = 0] = "SUCCESS";
    NbpFeedbackType[NbpFeedbackType["ERROR"] = 1] = "ERROR";
    NbpFeedbackType[NbpFeedbackType["WARNING"] = 2] = "WARNING";
})(exports.NbpFeedbackType || (exports.NbpFeedbackType = {}));

var __decorate$35 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$31 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.NbpFeedbackComponent = (function () {
    function NbpFeedbackComponent() {
        this.nbpOnButtonClick = new _angular_core.EventEmitter();
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
        return this.nbpFeedbackType === exports.NbpFeedbackType.SUCCESS;
    };
    NbpFeedbackComponent.prototype._isWarning = function () {
        return this.nbpFeedbackType === exports.NbpFeedbackType.WARNING;
    };
    NbpFeedbackComponent.prototype._isError = function () {
        return this.nbpFeedbackType === exports.NbpFeedbackType.ERROR;
    };
    NbpFeedbackComponent.prototype._onFeedbackButtonClick = function (button) {
        this.nbpOnButtonClick.emit(button);
    };
    return NbpFeedbackComponent;
}());
__decorate$35([
    _angular_core.Input(),
    __metadata$31("design:type", String)
], exports.NbpFeedbackComponent.prototype, "nbpTitle", void 0);
__decorate$35([
    _angular_core.Input(),
    __metadata$31("design:type", String)
], exports.NbpFeedbackComponent.prototype, "nbpErrorCode", void 0);
__decorate$35([
    _angular_core.Input(),
    __metadata$31("design:type", String)
], exports.NbpFeedbackComponent.prototype, "nbpMainMessage", void 0);
__decorate$35([
    _angular_core.Input(),
    __metadata$31("design:type", String)
], exports.NbpFeedbackComponent.prototype, "nbpBoxMessage", void 0);
__decorate$35([
    _angular_core.Input(),
    __metadata$31("design:type", Array)
], exports.NbpFeedbackComponent.prototype, "nbpButtons", void 0);
__decorate$35([
    _angular_core.Input(),
    __metadata$31("design:type", Number)
], exports.NbpFeedbackComponent.prototype, "nbpFeedbackType", void 0);
__decorate$35([
    _angular_core.Output(),
    __metadata$31("design:type", _angular_core.EventEmitter)
], exports.NbpFeedbackComponent.prototype, "nbpOnButtonClick", void 0);
exports.NbpFeedbackComponent = __decorate$35([
    _angular_core.Component({
        selector: 'nbp-feedback',template: "<div class=\"row col-md-24 padding-bottom\"><div class=\"text-center row col-md-offset-6 col-md-12\"><span id=\"icon\" class=\"icon-size\" [ngClass]=\"{ 'ico-comuni-esito-face-ok success' : _isSuccess() , 'ico-comuni-esito-face-ko error' : _isError() , 'ico-pfm-isp-font-cross-006-faceneutral warning' : _isWarning()  }\"></span></div><div class=\"row col-md-offset-6 col-md-12 padding-bottom\"><div id=\"title\" class=\"title\">{{nbpTitle}}</div></div><div *ngIf=\"_isWarning()\" class=\"row col-md-offset-6 col-md-12 padding-bottom\"><div id=\"error-code\" class=\"code-warning\">Codice Errore: {{nbpErrorCode}}</div></div><div class=\"row col-md-offset-6 col-md-12 padding-bottom\"><div id=\"main-message\" class=\"message\">{{nbpMainMessage}}</div></div><div class=\"col-md-24 box padding-bottom\"><div class=\"row col-md-offset-2 col-md-20 text-center button-row\"><div *ngFor=\"let button of _shadowButtons\" class=\"text-center\" [ngClass]=\"button.layout\"><nbp-button [nbpLabel]=\"button.label\" [nbpStyle]=\"button.style\" [nbpIcon]=\"button.icon\" [disabled]=\"button.disabled\" (nbpClick)=\"_onFeedbackButtonClick(button)\"></nbp-button></div></div><div id=\"box-message\" class=\"row col-md-offset-6 col-md-12 text-center message\">{{nbpBoxMessage}}</div></div></div>",
        styles: [".icon-size{font-size:6.25em}.title{font-size:1.5em;color:#000;text-align:center;word-wrap:break-word}.code-warning{font-family:\"Arial Bold\",Arial;font-weight:700;font-style:normal;font-size:16px;color:#6f6f6f;text-align:center;word-wrap:break-word}.message{font-weight:400;font-style:normal;color:#333;text-align:center;line-height:normal}.padding-bottom{padding-bottom:20px}.box{border-width:0;background:inherit;background-color:#f8f8f8;border:none;border-radius:0;box-shadow:none;padding:20px}.button-row{padding-bottom:20px}.feedback-face-size{font-size:12em}.success{color:#258900;font-size:12em}.warning{color:#fa9600;font-size:12em}.error{color:#c63200;font-size:12em} /*# sourceMappingURL=nbp-feedback.component.css.map */ "]
    }),
    __metadata$31("design:paramtypes", [])
], exports.NbpFeedbackComponent);

var __decorate$36 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$32 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.NbpDataContainerComponent = (function () {
    function NbpDataContainerComponent(formatterService) {
        this.formatterService = formatterService;
    }
    NbpDataContainerComponent.prototype.ngOnInit = function () {
        this._nbpViewValue = this._getViewValue(this.nbpData);
    };
    NbpDataContainerComponent.prototype._getViewValue = function (item) {
        if (!item) {
            return null;
        }
        return this.formatterService.displayValueTransformation(item, this.nbpFilter, this.nbpFilterArg);
    };
    return NbpDataContainerComponent;
}());
__decorate$36([
    _angular_core.Input(),
    __metadata$32("design:type", String)
], exports.NbpDataContainerComponent.prototype, "nbpLabel", void 0);
__decorate$36([
    _angular_core.Input(),
    __metadata$32("design:type", Object)
], exports.NbpDataContainerComponent.prototype, "nbpData", void 0);
__decorate$36([
    _angular_core.Input(),
    __metadata$32("design:type", Number)
], exports.NbpDataContainerComponent.prototype, "nbpFilter", void 0);
__decorate$36([
    _angular_core.Input(),
    __metadata$32("design:type", Object)
], exports.NbpDataContainerComponent.prototype, "nbpFilterArg", void 0);
exports.NbpDataContainerComponent = __decorate$36([
    _angular_core.Component({
        selector: 'nbp-data-container',template: "<div class=\"data-title\"><label>{{nbpLabel}}</label></div><div><p class=\"data-content\">{{_nbpViewValue}}</p><div></div></div>",
        styles: [".data-title{display:block!important;font-size:15px;font-weight:700;padding:10px 0 0 0}.data-title>label{margin:0!important}.data-content{display:block!important;font-size:15px;padding:20px 0 20px 0} /*# sourceMappingURL=nbp-data-container.component.css.map */ "],
        viewProviders: [NbpFormatterService]
    }),
    __metadata$32("design:paramtypes", [NbpFormatterService])
], exports.NbpDataContainerComponent);

var SortingDirection$1;
(function (SortingDirection) {
    SortingDirection[SortingDirection["ASCENDING"] = 1] = "ASCENDING";
    SortingDirection[SortingDirection["DESCENDING"] = -1] = "DESCENDING";
})(SortingDirection$1 || (SortingDirection$1 = {}));
var CompareStatus$1;
(function (CompareStatus) {
    CompareStatus[CompareStatus["HIGHER"] = 1] = "HIGHER";
    CompareStatus[CompareStatus["EQUAL"] = 0] = "EQUAL";
    CompareStatus[CompareStatus["LOWER"] = -1] = "LOWER";
})(CompareStatus$1 || (CompareStatus$1 = {}));

var NbpDataSource = (function () {
    /*
      Per usare il dataSource senza paginazione non va passato nulla nel defaultPagesize
       e nella get page non specificare valori per pageSize
    */
    function NbpDataSource(arrayData, defaultPageSize) {
        this.arrayData = arrayData;
        this.defaultPageSize = defaultPageSize;
    }
    NbpDataSource.prototype.getSortingDirections = function (sortFields) {
        var sortingDirections = sortFields.map(function (element) {
            var sortingDirection;
            if (element.charAt(0) === '-') {
                sortingDirection = SortingDirection$1.DESCENDING;
            }
            else {
                sortingDirection = SortingDirection$1.ASCENDING;
            }
            return sortingDirection;
        });
        return sortingDirections;
    };
    NbpDataSource.prototype.getPage = function (pageNumber, sortFields, pageSize) {
        var shadowData = this.arrayData.slice();
        var currentPageSize = pageSize ? pageSize : (this.defaultPageSize ? this.defaultPageSize : this.arrayData.length);
        var pageToreturn = pageNumber ? pageNumber : 1;
        var start = (pageToreturn - 1) * currentPageSize;
        var end = start + currentPageSize;
        if (sortFields && sortFields.length) {
            shadowData = this.sortData(this.arrayData.slice(), sortFields);
        }
        var data = shadowData.slice(start, end);
        var dataPage = {
            data: data,
            status: {
                pageNumber: pageNumber,
                pageSize: currentPageSize,
                totalRecords: this.arrayData.length
            }
        };
        return rxjs_Observable.Observable.of(dataPage);
    };
    NbpDataSource.prototype.sortData = function (data, sortFields) {
        var sortingDirections = this.getSortingDirections(sortFields);
        var sortField = sortFields[0];
        var sortDirection = sortingDirections[0];
        var sortedData = data.sort(this.dataSortComparator(sortDirection, sortField));
        return sortedData;
    };
    NbpDataSource.prototype.dataSortComparator = function (sortDirection, sortField) {
        return function (a, b) {
            var result;
            var field = sortDirection === SortingDirection$1.DESCENDING ? sortField.substr(1) : sortField;
            var currentTmp = getPropertyValueByPath(a, field);
            var nextTmp = getPropertyValueByPath(b, field);
            var current = currentTmp instanceof Date ? currentTmp.getTime() : currentTmp;
            var next = nextTmp instanceof Date ? nextTmp.getTime() : nextTmp;
            if (current === null || current === undefined) {
                result = CompareStatus$1.LOWER;
            }
            else if (next === null || next === undefined) {
                result = CompareStatus$1.HIGHER;
            }
            else {
                result = (current < next) ? CompareStatus$1.LOWER : ((current > next) ? CompareStatus$1.HIGHER : CompareStatus$1.EQUAL);
            }
            return result * sortDirection;
        };
    };
    NbpDataSource.prototype.refresh = function () {
    };
    return NbpDataSource;
}());

var __extends$7 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$38 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$34 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var I18N_VALUES = {
    'it': {
        weekdays: ['Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa', 'Do'],
        months: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
        fullMonths: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
            'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']
    }
    // other languages you would support
};
// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
// use the Angular LOCALE_ID value
var I18n = (function () {
    function I18n() {
        this.language = 'it';
    }
    return I18n;
}());
I18n = __decorate$38([
    _angular_core.Injectable()
], I18n);
// Define custom service providing the months and weekdays translations
var NbpDatepickerItI18n = (function (_super) {
    __extends$7(NbpDatepickerItI18n, _super);
    function NbpDatepickerItI18n(_i18n) {
        var _this = _super.call(this) || this;
        _this._i18n = _i18n;
        return _this;
    }
    NbpDatepickerItI18n.prototype.getWeekdayShortName = function (weekday) {
        return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
    };
    NbpDatepickerItI18n.prototype.getMonthShortName = function (month) {
        return I18N_VALUES[this._i18n.language].months[month - 1];
    };
    NbpDatepickerItI18n.prototype.getMonthFullName = function (month) {
        return I18N_VALUES[this._i18n.language].fullMonths[month - 1];
    };
    return NbpDatepickerItI18n;
}(_ngBootstrap_ngBootstrap.NgbDatepickerI18n));
NbpDatepickerItI18n = __decorate$38([
    _angular_core.Injectable(),
    __metadata$34("design:paramtypes", [I18n])
], NbpDatepickerItI18n);
var NbpDatepickerConfiguration = (function () {
    function NbpDatepickerConfiguration() {
        this.separator = '.';
    }
    return NbpDatepickerConfiguration;
}());
NbpDatepickerConfiguration = __decorate$38([
    _angular_core.Injectable()
], NbpDatepickerConfiguration);
var NbpItDateParserFormatter = (function (_super) {
    __extends$7(NbpItDateParserFormatter, _super);
    function NbpItDateParserFormatter(configuration) {
        var _this = _super.call(this) || this;
        _this.configuration = configuration;
        return _this;
    }
    NbpItDateParserFormatter.prototype.padNumber = function (value) {
        if (this.isNumber(value)) {
            return ("0" + value).slice(-2);
        }
        else {
            return '';
        }
    };
    NbpItDateParserFormatter.prototype.isNumber = function (value) {
        return !isNaN(this.toInteger(value));
    };
    NbpItDateParserFormatter.prototype.toInteger = function (value) {
        return parseInt("" + value, 10);
    };
    NbpItDateParserFormatter.prototype.parse = function (value) {
        if (value) {
            var dateParts = value.trim().split('.');
            if (dateParts.length === 1 && this.isNumber(dateParts[0])) {
                return { day: this.toInteger(dateParts[0]), month: null, year: null };
            }
            else if (dateParts.length === 2 && this.isNumber(dateParts[0]) && this.isNumber(dateParts[1])) {
                return { day: this.toInteger(dateParts[0]), month: this.toInteger(dateParts[1]), year: null };
            }
            else if (dateParts.length === 3 && this.isNumber(dateParts[0]) && this.isNumber(dateParts[1]) && this.isNumber(dateParts[2])) {
                return { day: this.toInteger(dateParts[0]), month: this.toInteger(dateParts[1]), year: this.toInteger(dateParts[2]) };
            }
        }
        return null;
    };
    NbpItDateParserFormatter.prototype.format = function (date) {
        return date ?
            "" + (this.isNumber(date.day) ? this.padNumber(date.day) : '') + this.configuration.separator + (this.isNumber(date.month) ? this.padNumber(date.month) : '') + this.configuration.separator + date.year : '';
    };
    return NbpItDateParserFormatter;
}(_ngBootstrap_ngBootstrap.NgbDateParserFormatter));
NbpItDateParserFormatter = __decorate$38([
    _angular_core.Injectable(),
    __metadata$34("design:paramtypes", [NbpDatepickerConfiguration])
], NbpItDateParserFormatter);

var __extends$6 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$37 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$33 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$6 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Provider Expression that allows nbp-datepicker to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
var NBP_DATEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.NbpDatepickerComponent; }),
    multi: true
};
var NBP_INPUT_ELEMENT_BASE$3 = {
    provide: NbpInputElementBase,
    useExisting: _angular_core.forwardRef(function () { return exports.NbpDatepickerComponent; }),
    multi: true
};
/** intero autogenerato usato per id unici per nbpCombo component */
var nextId$11 = 0;
exports.NbpDatepickerComponent = (function (_super) {
    __extends$6(NbpDatepickerComponent, _super);
    function NbpDatepickerComponent(validatori, asyncValidatori, element) {
        var _this = _super.call(this, validatori, asyncValidatori) || this;
        _this.validatori = validatori;
        _this.asyncValidatori = asyncValidatori;
        _this.element = element;
        /**
         * Identificativo univoco per il text field.
         * Se nessun id è fornito e' auto-generato.
         */
        _this.id = "nbp-datepicker-" + ++nextId$11;
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
        _this.nbpOnNavigate = new _angular_core.EventEmitter();
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
__decorate$37([
    _angular_core.Input(),
    __metadata$33("design:type", String)
], exports.NbpDatepickerComponent.prototype, "name", void 0);
__decorate$37([
    _angular_core.Input(),
    __metadata$33("design:type", String)
], exports.NbpDatepickerComponent.prototype, "id", void 0);
__decorate$37([
    _angular_core.HostBinding('class.nbp-show-validation'),
    _angular_core.Input(),
    __metadata$33("design:type", Boolean)
], exports.NbpDatepickerComponent.prototype, "nbpShowValidation", void 0);
__decorate$37([
    _angular_core.Input(),
    __metadata$33("design:type", String)
], exports.NbpDatepickerComponent.prototype, "placeholder", void 0);
__decorate$37([
    _angular_core.Input(),
    __metadata$33("design:type", String)
], exports.NbpDatepickerComponent.prototype, "nbpErrorMessage", void 0);
__decorate$37([
    _angular_core.Input(),
    __metadata$33("design:type", Object),
    __metadata$33("design:paramtypes", [Date])
], exports.NbpDatepickerComponent.prototype, "maxDate", null);
__decorate$37([
    _angular_core.Input(),
    __metadata$33("design:type", Object),
    __metadata$33("design:paramtypes", [Date])
], exports.NbpDatepickerComponent.prototype, "minDate", null);
__decorate$37([
    _angular_core.Input(),
    __metadata$33("design:type", Boolean),
    __metadata$33("design:paramtypes", [Object])
], exports.NbpDatepickerComponent.prototype, "disabled", null);
__decorate$37([
    _angular_core.Input(),
    __metadata$33("design:type", Boolean),
    __metadata$33("design:paramtypes", [Object])
], exports.NbpDatepickerComponent.prototype, "required", null);
__decorate$37([
    _angular_core.Output(),
    __metadata$33("design:type", _angular_core.EventEmitter)
], exports.NbpDatepickerComponent.prototype, "nbpOnNavigate", void 0);
__decorate$37([
    _angular_core.ViewChild('ngbDatepicker'),
    __metadata$33("design:type", _ngBootstrap_ngBootstrap.NgbInputDatepicker)
], exports.NbpDatepickerComponent.prototype, "ngbDatepicker", void 0);
__decorate$37([
    _angular_core.ViewChild(_angular_forms.NgModel),
    __metadata$33("design:type", _angular_forms.NgModel)
], exports.NbpDatepickerComponent.prototype, "model", void 0);
exports.NbpDatepickerComponent = __decorate$37([
    _angular_core.Component({
        selector: 'nbp-datepicker',
        template: "<div class=\"form-group\"><div class=\"input-group\"><input #ngbDatepicker=\"ngbDatepicker\" ngbDatepicker [id]=\"id\" [name]=\"name\" [ngModel]=\"_ngbModel\" (ngModelChange)=\"_ngbModelChanged($event)\" [required]=\"required\" [disabled]=\"disabled\" [maxDate]=\"ngbMaxDate\" [minDate]=\"ngbMinDate\" (navigate)=\"_onNavigate($event)\" navigation=\"arrows\" class=\"form-control\" placeholder=\"dd.mm.yyyy\" required> <i class=\"icon-calendar button-icon\" [ngClass]=\"{'disabled': disabled}\" (click)=\"toggleOpening()\"></i></div></div>",
        styles: [":host::ng-deep .form-inline{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:1em}:host::ng-deep .form-inline .form-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-flow:row wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:0}:host::ng-deep .input-group{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}:host::ng-deep .input-group .form-control,:host::ng-deep .input-group-addon,:host::ng-deep .input-group-btn{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host::ng-deep .form-control{display:block;width:100%;height:3.125em;color:#464a4c;background-color:#fff;background-image:none;background-clip:padding-box;border-radius:.15em!important;transition:none!important;-webkit-box-shadow:none!important;box-shadow:none!important;border:1px solid #323232!important}:host::ng-deep .form-control:active:not([disabled]),:host::ng-deep .form-control:focus:not([disabled]){border:1px solid #258900!important}:host::ng-deep .form-control[disabled]{border:1px solid #ccc!important;color:#ccc;user-select:none}:host(.ng-dirty.ng-invalid.nbp-show-validation)::ng-deep .form-control:not([disabled]){border:1px solid #c63200!important}:host::ng-deep .input-group-addon{padding:.5em .75em;margin-bottom:0;font-size:1em;font-weight:400;line-height:1.25;color:#258900;text-align:center;background-color:#fff!important;border-top-color:rgba(0,0,0,.15);border-top-style:solid;border-top-width:1px;border-right-color:rgba(0,0,0,.15);border-right-style:solid;border-right-width:1px;border-bottom-color:rgba(0,0,0,.15);border-bottom-style:solid;border-bottom-width:1px;border-left-style:none!important;border-left-width:0!important;border-left-color:none!important}:host::ng-deep .input-group-addon img{width:1.2em;height:1em;cursor:pointer}:host::ng-deep .form-control+.input-group-addon:not(:first-child){border-left:0}:host::ng-deep .button-calendar{background-color:#fff;border-bottom:1px solid #d3d3d3;border-top:1px solid #d3d3d3;border-right:1px solid #d3d3d3;border-left:none;color:#258900;right:21px;position:relative;z-index:2;margin-right:-21px}:host::ng-deep .dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10em;padding:.5em 0;margin:.125em 0 0;font-size:1em;color:#1d1d1d;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;padding:0;top:24px;left:0;border-radius:0!important;border:none!important}:host::ng-deep .d-inline-block{display:inline-block!important}:host::ng-deep .rounded{border-radius:.25em}:host::ng-deep .ngb-dp-header{height:4em!important;margin-bottom:-1.5em!important;border-bottom:none!important}:host::ng-deep .pt-1{padding-top:0!important;height:4.25em;margin-bottom:-2em}:host::ng-deep .rounded-top{border-top-right-radius:.25em;border-top-left-radius:.25em;border-radius:0!important}:host::ng-deep .bg-faded{background-color:#fff!important}:host::ng-deep ngb-datepicker-navigation{height:2em;line-height:1.85em}:host::ng-deep .justify-content-between{-webkit-box-pack:justify!important;-ms-flex-pack:justify!important;justify-content:space-between!important}:host::ng-deep .d-flex{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}:host::ng-deep .btn-link{cursor:pointer;outline:#d3d3d3 solid 1px!important}:host::ng-deep .btn-link,:host::ng-deep .btn-link:active,:host::ng-deep .btn-link:focus{border-color:transparent}:host::ng-deep .btn-link,:host::ng-deep .btn-link.active,:host::ng-deep .btn-link:active,:host::ng-deep .btn-link:disabled{background-color:transparent}:host::ng-deep .btn-link{font-weight:400;color:#258900;border-radius:0}:host::ng-deep button,:host::ng-deep input,:host::ng-deep select,:host::ng-deep textarea{line-height:inherit}:host::ng-deep [role=button],:host::ng-deep a,:host::ng-deep area,:host::ng-deep button,:host::ng-deep input,:host::ng-deep label,:host::ng-deep select,:host::ng-deep summary,:host::ng-deep textarea{-ms-touch-action:manipulation;touch-action:manipulation}:host::ng-deep button{-webkit-appearance:button}:host::ng-deep button,:host::ng-deep select{text-transform:none}:host::ng-deep button,:host::ng-deep input{overflow:visible}:host::ng-deep button,:host::ng-deep input,:host::ng-deep optgroup,:host::ng-deep select,:host::ng-deep textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}:host::ng-deep .ngb-dp-navigation-chevron::before{border-style:solid;border-width:.1em .1em 0 0!important;content:'';display:inline-block;height:.75em!important;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);-ms-transform:rotate(-135deg);width:.75em!important;margin:0 0 0 .5em!important;color:grey}:host::ng-deep .ngb-dp-navigation-chevron.right:before{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);margin:0 .5em 0 0!important}:host::ng-deep .d-block{display:block!important}:host::ng-deep ngb-datepicker-navigation-select.d-block{width:9em!important}:host::ng-deep select{padding:.25em .5em;font-size:.875em;line-height:1.25;height:inherit;width:50%}:host::ng-deep .d-inline-block{display:inline-block!important}:host::ng-deep select.custom-select.d-inline-block{padding:.25em .5rem!important;font-size:.875em!important;line-height:1.25;height:inherit;width:50%}:host::ng-deep .custom-select{display:inline-block;max-width:100%;height:calc(4.25em);padding:.375em 1.75em .375em .75em;line-height:1.25;color:#464a4c;vertical-align:middle;border:1px solid rgba(0,0,0,.15);border-radius:.25em;-moz-appearance:none;-webkit-appearance:none}:host::ng-deep .px-1{padding-left:0!important;padding-right:0!important}:host::ng-deep .pb-1{padding-bottom:.25em!important}:host::ng-deep .ngb-dp-month:first-child{margin-left:0!important}:host::ng-deep .ngb-dp-month{pointer-events:none}:host::ng-deep .ml-3{margin-left:1em!important}:host::ng-deep .ngb-dp-day,:host::ng-deep .ngb-dp-week-number,:host::ng-deep .ngb-dp-weekday{width:2em!important;height:2em!important}:host::ng-deep .ngb-dp-day{position:relative;box-sizing:border-box}:host::ng-deep .ngb-dp-week.d-flex:not(:first-child){border-top:.5px solid #d3d3d3;border-bottom:.5px solid #d3d3d3;border-right:1px solid #d3d3d3;border-left:1px solid #d3d3d3}:host::ng-deep .ngb-dp-week.d-flex:first-child{border-top:1px solid #d3d3d3;border-right:1px solid #d3d3d3;border-bottom:.5px solid #d3d3d3;border-left:1px solid #d3d3d3}:host::ng-deep ngb-datepicker-navigation.d-flex{height:2.5em!important;line-height:1.8em!important;border-top:1px solid #d3d3d3;border-right:1px solid #d3d3d3;border-left:1px solid #d3d3d3}:host::ng-deep .ngb-dp-week-number,:host::ng-deep .ngb-dp-weekday{line-height:2em!important}:host::ng-deep .text-info{color:#5bc0de!important}:host::ng-deep .font-italic{font-style:italic}:host::ng-deep .outside{opacity:.5}:host::ng-deep ngb-dp-day>div{text-align:center;width:2em;height:2em;line-height:2em;border-radius:0!important}:host::ng-deep div[ngbdatepickerdayview]{border-radius:0!important;box-sizing:border-box;text-align:center;width:inherit!important;height:inherit!important;line-height:2.6em!important;vertical-align:middle}:host::ng-deep .text-muted{color:#636c72!important}:host::ng-deep .btn-secondary{color:#258900;background-color:#fff;border-color:#ccc;font-weight:700;font-size:.8em}:host::ng-deep .text-white{color:#fff!important}:host::ng-deep .bg-primary{background-color:#258900!important}:host::ng-deep .bg-primary::before{border-bottom:8px solid #fff;border-left:8px solid transparent;border-right:8px solid transparent;position:absolute;top:0;right:-8px;content:'';display:inline-block;width:0;height:0;margin:0;padding:0;transform:rotate(45deg);transform-origin:top}:host::ng-deep .text-center{text-align:center!important}:host::ng-deep .small,:host::ng-deep small{font-size:80%;font-weight:400}:host::ng-deep .ngb-dp-months.pb-1{padding:0!important}:host::ng-deep .input-group>input.form-control{padding-left:.625em;padding-right:2.5em}:host::ng-deep .ngb-dp-day:not(:first-child)>.btn-secondary{border-left:1px solid #d3d3d3}:host::ng-deep .ngb-dp-weekday.font-italic{font-family:'Arial Bold',Arial;font-weight:700;font-style:normal!important;font-size:.75em;color:#6f6f6f!important;text-align:center;text-transform:uppercase}:host::ng-deep button.btn-link{color:#258900!important}:host::ng-deep .collapsed{margin-bottom:-2em!important}:host::ng-deep .ngb-dp-month-name{font-size:.8em!important;padding-top:1em!important;font-weight:700;text-transform:uppercase;color:#258900;position:absolute;text-align:center!important;top:0;left:3.1em!important;height:3.2em!important;width:11.4em;line-height:1.42857143em!important;word-wrap:break-word;word-break:break-word}:host::ng-deep .ngb-dp-weekday{width:2.666666666666667em!important}.button-icon{cursor:pointer;position:relative;top:.001em;right:1.6em;z-index:3;color:#258900;font-size:1.5em;line-height:2.083em}.button-icon.disabled{cursor:not-allowed;pointer-events:none;color:#ccc} /*# sourceMappingURL=nbp-datepicker.component.css.map */ "],
        providers: [
            I18n,
            NbpDatepickerConfiguration,
            { provide: _ngBootstrap_ngBootstrap.NgbDatepickerI18n, useClass: NbpDatepickerItI18n },
            { provide: _ngBootstrap_ngBootstrap.NgbDateParserFormatter, useClass: NbpItDateParserFormatter },
            NBP_DATEPICKER_CONTROL_VALUE_ACCESSOR,
            NBP_INPUT_ELEMENT_BASE$3
        ]
    }),
    __param$6(0, _angular_core.Optional()), __param$6(0, _angular_core.Inject(_angular_forms.NG_VALIDATORS)),
    __param$6(1, _angular_core.Optional()), __param$6(1, _angular_core.Inject(_angular_forms.NG_ASYNC_VALIDATORS)),
    __metadata$33("design:paramtypes", [Array, Array, _angular_core.ElementRef])
], exports.NbpDatepickerComponent);

var __decorate$39 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$35 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var nextId$12 = 0;
/**
 * @export
 * @class NbpDividingLineComponent
 * @implements {OnInit}
 * Visualizza una linea di separazione, con un pulsante opzionale e un titolo opzionale
 */
exports.NbpDividingLineComponent = (function () {
    function NbpDividingLineComponent() {
        this._showButton = false;
        /**
         * Identificativo univoco per il cjWizardPage.
         * Se nessun id è fornito e' auto-generato.
         */
        this.id = "nbp-dividing-line-" + ++nextId$12;
        /**
         * (Opzionale) Evento emesso al click sul pulsante.
         * @param {EventEmitter<any>} nbpClick
         */
        this.nbpClick = new _angular_core.EventEmitter();
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
__decorate$39([
    _angular_core.Input(),
    __metadata$35("design:type", Object)
], exports.NbpDividingLineComponent.prototype, "id", void 0);
__decorate$39([
    _angular_core.Input(),
    __metadata$35("design:type", String)
], exports.NbpDividingLineComponent.prototype, "nbpTitle", void 0);
__decorate$39([
    _angular_core.Input(),
    __metadata$35("design:type", String)
], exports.NbpDividingLineComponent.prototype, "nbpTitleIcon", void 0);
__decorate$39([
    _angular_core.Input(),
    __metadata$35("design:type", Boolean),
    __metadata$35("design:paramtypes", [Object])
], exports.NbpDividingLineComponent.prototype, "showButton", null);
__decorate$39([
    _angular_core.Input(),
    __metadata$35("design:type", String)
], exports.NbpDividingLineComponent.prototype, "npbButtonLabel", void 0);
__decorate$39([
    _angular_core.Input(),
    __metadata$35("design:type", String)
], exports.NbpDividingLineComponent.prototype, "nbpButtonIcon", void 0);
__decorate$39([
    _angular_core.Output(),
    __metadata$35("design:type", _angular_core.EventEmitter)
], exports.NbpDividingLineComponent.prototype, "nbpClick", void 0);
exports.NbpDividingLineComponent = __decorate$39([
    _angular_core.Component({
        selector: 'nbp-dividing-line',template: "<div class=\"dividing-line-container\"><div class=\"dividing-line\"></div><nbp-button class=\"dividing-line-button\" *ngIf=\"showButton\" [nbpLabel]=\"npbButtonLabel\" [nbpIcon]=\"nbpButtonIcon\" (nbpClick)=\"_onClick()\"></nbp-button><div *ngIf=\"nbpTitleIcon || nbpTitle\" class=\"icon-title-separator\"><span *ngIf=\"nbpTitleIcon\" class=\"icon dividing-line-title button-icon\" [ngClass]=\"nbpTitleIcon\"></span><h4 class=\"dividing-line-title\" *ngIf=\"nbpTitle\">{{nbpTitle}}</h4></div></div>",
        styles: [".dividing-line-container{margin:10px 0;height:44px;display:flex;align-items:center;position:relative;background-color:#f2f2f2}.dividing-line-container .dividing-line{height:1px;margin:15px 0;background-color:#ccc;flex:0 1 100%}.dividing-line-container .dividing-line-button ::ng-deep button{color:#258900;background-color:#f2f2f2;border-color:#f2f2f2!important}.dividing-line-container .dividing-line-button ::ng-deep button:hover{color:#258900;background-color:#f2f2f2!important;border-color:#f2f2f2!important}.dividing-line-container .dividing-line-title{display:inline-block}.dividing-line-container .icon-title-separator{position:absolute;left:0;top:0;right:0;bottom:0;background-color:#f2f2f2;color:#323232;text-align:center;width:fit-content;padding:0 20px;font-size:18px;margin-left:auto;margin-right:auto}.dividing-line-container span+h4:before{content:\"\";padding-left:10px}.dividing-line-container span.dividing-line-title{line-height:44px} /*# sourceMappingURL=nbp-dividing-line.component.css.map */ "]
    }),
    __metadata$35("design:paramtypes", [])
], exports.NbpDividingLineComponent);

var __decorate$40 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$36 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var nextId$13 = 0;
exports.NbpTitledPanelComponent = (function () {
    function NbpTitledPanelComponent() {
        this.id = "nbp-titled-panel-" + ++nextId$13;
    }
    NbpTitledPanelComponent.prototype.ngOnInit = function () {
    };
    return NbpTitledPanelComponent;
}());
__decorate$40([
    _angular_core.Input(),
    __metadata$36("design:type", String)
], exports.NbpTitledPanelComponent.prototype, "id", void 0);
__decorate$40([
    _angular_core.Input(),
    __metadata$36("design:type", String)
], exports.NbpTitledPanelComponent.prototype, "nbpTitle", void 0);
exports.NbpTitledPanelComponent = __decorate$40([
    _angular_core.Component({
        selector: 'nbp-titled-panel',template: "<div class=\"titled-panel-container\"><div class=\"titled-panel-title\">{{nbpTitle}}</div><ng-content></ng-content></div>",
        styles: [".titled-panel-container{margin:15px;padding:15px 10px;border:1px solid #258900}.titled-panel-title{padding:0 10px;margin-top:-32px;margin-bottom:4px;background-color:#fff;margin-left:auto;margin-right:auto;width:fit-content;font-size:22px} /*# sourceMappingURL=nbp-titled-panel.component.css.map */ "]
    }),
    __metadata$36("design:paramtypes", [])
], exports.NbpTitledPanelComponent);

var __decorate$41 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$37 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var nextId$14 = 0;
exports.NbpSelectionPanelComponent = (function () {
    function NbpSelectionPanelComponent() {
        this.buttonStyle = exports.NbpStyle;
        this.buttonType = exports.NbpButtonType;
        this.id = "pos-selection-panel-" + ++nextId$14;
        this._selected = false;
        this._disabled = false;
        /**
         * (Opzionale) Evento emesso al click sul pulsante.
         * @param {EventEmitter<any>}  nbpClick
         */
        this.nbpClick = new _angular_core.EventEmitter();
    }
    Object.defineProperty(NbpSelectionPanelComponent.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (value) {
            this._selected = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(NbpSelectionPanelComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    
    NbpSelectionPanelComponent.prototype._onClick = function () {
        if (this.nbpClick) {
            this.selected = !this.selected;
            this.nbpClick.emit();
        }
    };
    NbpSelectionPanelComponent.prototype.ngOnInit = function () {
    };
    return NbpSelectionPanelComponent;
}());
__decorate$41([
    _angular_core.Input(),
    __metadata$37("design:type", String)
], exports.NbpSelectionPanelComponent.prototype, "id", void 0);
__decorate$41([
    _angular_core.Input(),
    __metadata$37("design:type", String)
], exports.NbpSelectionPanelComponent.prototype, "nbpTitle", void 0);
__decorate$41([
    _angular_core.Input(),
    __metadata$37("design:type", String)
], exports.NbpSelectionPanelComponent.prototype, "imageUrl", void 0);
__decorate$41([
    _angular_core.Input(),
    __metadata$37("design:type", Object),
    __metadata$37("design:paramtypes", [Boolean])
], exports.NbpSelectionPanelComponent.prototype, "selected", null);
__decorate$41([
    _angular_core.Input(),
    __metadata$37("design:type", Object),
    __metadata$37("design:paramtypes", [Boolean])
], exports.NbpSelectionPanelComponent.prototype, "disabled", null);
__decorate$41([
    _angular_core.Input(),
    __metadata$37("design:type", String)
], exports.NbpSelectionPanelComponent.prototype, "nbpButtonLabel", void 0);
__decorate$41([
    _angular_core.Input(),
    __metadata$37("design:type", String)
], exports.NbpSelectionPanelComponent.prototype, "nbpSelectedButtonLabel", void 0);
__decorate$41([
    _angular_core.Output(),
    __metadata$37("design:type", _angular_core.EventEmitter)
], exports.NbpSelectionPanelComponent.prototype, "nbpClick", void 0);
exports.NbpSelectionPanelComponent = __decorate$41([
    _angular_core.Component({
        selector: 'nbp-selection-panel',template: "<div class=\"selection-panel-container\" [class.selected]=\"selected\"><img class=\"selection-panel-image\" [src]=\"imageUrl\" *ngIf=\"imageUrl != null\"> <span class=\"selection-panel-title\">{{nbpTitle}}</span><nbp-button [nbpLabel]=\"selected == true ? nbpSelectedButtonLabel : nbpButtonLabel\" [nbpChecked]=\"selected\" [nbpStyle]=\"buttonStyle.SECONDARY\" [nbpType]=\"buttonType.SELECT\" (nbpClick)=\"_onClick()\" [disabled]=\"disabled\"></nbp-button></div>",
        styles: [".selection-panel-container{position:relative;padding:10px;height:350px;margin-bottom:25px;background-color:#fff;text-align:center;border-radius:0 0 5px 5px;border-right:1px solid rgba(50,50,50,.2);border-left:1px solid rgba(50,50,50,.2);border-bottom:1px solid rgba(50,50,50,.2);border-top:0 transparent;-webkit-box-shadow:0 30px 70px -9px rgba(50,50,50,.2);-moz-box-shadow:0 30px 70px -9px rgba(50,50,50,.2);box-shadow:0 30px 70px -9px rgba(50,50,50,.2)}.selection-panel-container .selection-panel-image{width:140px;height:140px;margin:10px}.selection-panel-container .selection-panel-title{display:block;font-weight:700;text-transform:uppercase}.selection-panel-container ::ng-deep nbp-button{position:absolute;bottom:20px;left:0;right:0}.selection-panel-container ::ng-deep nbp-button .btn.button.secondary.select{color:#258900;border-color:#258900!important}.selection-panel-container ::ng-deep nbp-button .btn.button.secondary.select:disabled{opacity:1!important;background-color:#fff!important;color:#ccc;border-color:#6f6f6f!important}.selection-panel-container.selected{height:375px;margin-bottom:0;border-right:1px solid rgba(50,50,50,.1);border-left:1px solid rgba(50,50,50,.1);border-bottom:1px solid rgba(50,50,50,.1);border-top:0 transparent;-webkit-box-shadow:0 30px 60px -30px rgba(127,201,31,.7);-moz-box-shadow:0 30px 60px -30px rgba(127,201,31,.7);box-shadow:0 30px 60px -30px rgba(127,201,31,.7)}.selection-panel-container.selected /deep/ nbp-button{bottom:45px} /*# sourceMappingURL=nbp-selection-panel.component.css.map */ "]
    }),
    __metadata$37("design:paramtypes", [])
], exports.NbpSelectionPanelComponent);

var __decorate$42 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$38 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.NbpShadowedPanelComponent = (function () {
    function NbpShadowedPanelComponent() {
    }
    NbpShadowedPanelComponent.prototype.ngOnInit = function () {
    };
    return NbpShadowedPanelComponent;
}());
exports.NbpShadowedPanelComponent = __decorate$42([
    _angular_core.Component({
        selector: 'nbp-shadowed-panel',template: "<div class=\"shadowed-panel-outer-container\"><div class=\"shadowed-panel-container\"><ng-content></ng-content></div></div>",
        styles: [".shadowed-panel-outer-container{width:100%}.shadowed-panel-outer-container .shadowed-panel-container{margin:10px;padding:10px;background-color:#fff;text-align:center;border-radius:5px;-webkit-box-shadow:0 30px 70px -9px rgba(50,50,50,.2);-moz-box-shadow:0 30px 70px -9px rgba(50,50,50,.2);box-shadow:0 30px 70px -9px rgba(50,50,50,.2)} /*# sourceMappingURL=nbp-shadowed-panel.component.css.map */ "]
    }),
    __metadata$38("design:paramtypes", [])
], exports.NbpShadowedPanelComponent);

var __extends$8 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$43 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$39 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$7 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var NBP_SPINNER_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.NbpSpinnerComponent; }),
    multi: true
};
var NBP_INPUT_ELEMENT_BASE$4 = {
    provide: NbpInputElementBase,
    useExisting: _angular_core.forwardRef(function () { return exports.NbpSpinnerComponent; }),
    multi: true
};
/** intero autogenerato usato per id unici */
var nextId$15 = 0;
exports.NbpSpinnerComponent = (function (_super) {
    __extends$8(NbpSpinnerComponent, _super);
    function NbpSpinnerComponent(validatori, asyncValidatori) {
        var _this = _super.call(this, validatori, asyncValidatori) || this;
        _this.validatori = validatori;
        _this.asyncValidatori = asyncValidatori;
        /**
         * Identificativo univoco per il componente NbpSpinner. Se non viene passato un valore, l'id viene autogenerato.
         */
        _this.id = "nbp-radio-" + ++nextId$15;
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
        _this.nbpValueChange = new _angular_core.EventEmitter();
        /**
         * (Opzionale) Funzione custom di validazione del campo
         */
        _this.nbpValidation = new _angular_core.EventEmitter();
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
__decorate$43([
    _angular_core.Input(),
    __metadata$39("design:type", Object)
], exports.NbpSpinnerComponent.prototype, "id", void 0);
__decorate$43([
    _angular_core.Input(),
    __metadata$39("design:type", String)
], exports.NbpSpinnerComponent.prototype, "name", void 0);
__decorate$43([
    _angular_core.Input(),
    __metadata$39("design:type", Number)
], exports.NbpSpinnerComponent.prototype, "min", void 0);
__decorate$43([
    _angular_core.Input(),
    __metadata$39("design:type", Number)
], exports.NbpSpinnerComponent.prototype, "max", void 0);
__decorate$43([
    _angular_core.Input(),
    __metadata$39("design:type", Boolean),
    __metadata$39("design:paramtypes", [Object])
], exports.NbpSpinnerComponent.prototype, "disabled", null);
__decorate$43([
    _angular_core.Input(),
    __metadata$39("design:type", Boolean),
    __metadata$39("design:paramtypes", [Object])
], exports.NbpSpinnerComponent.prototype, "required", null);
__decorate$43([
    _angular_core.HostBinding('class.nbp-show-validation'),
    _angular_core.Input(),
    __metadata$39("design:type", Object)
], exports.NbpSpinnerComponent.prototype, "nbpShowValidation", void 0);
__decorate$43([
    _angular_core.Input(),
    __metadata$39("design:type", Object)
], exports.NbpSpinnerComponent.prototype, "nbpErrorMessage", void 0);
__decorate$43([
    _angular_core.Output(),
    __metadata$39("design:type", _angular_core.EventEmitter)
], exports.NbpSpinnerComponent.prototype, "nbpValueChange", void 0);
__decorate$43([
    _angular_core.Output(),
    __metadata$39("design:type", _angular_core.EventEmitter)
], exports.NbpSpinnerComponent.prototype, "nbpValidation", void 0);
__decorate$43([
    _angular_core.ViewChild(_angular_forms.NgModel),
    __metadata$39("design:type", _angular_forms.NgModel)
], exports.NbpSpinnerComponent.prototype, "model", void 0);
exports.NbpSpinnerComponent = __decorate$43([
    _angular_core.Component({
        selector: 'nbp-spinner',
        template: "<div class=\"spinner-container\"><button class=\"spinner-button left\" (click)=\"_onSubtractClick($event)\" [disabled]=\"value <= min || disabled\">-</button> <input type=\"number\" name=\"spinnerValue\" class=\"spinner-input\" [(ngModel)]=\"value\" [min]=\"min\" [max]=\"max\" readonly=\"readonly\"> <button class=\"spinner-button right\" (click)=\"_onAddClick($event)\" [disabled]=\"value >= max || disabled\">+</button></div>",
        styles: [":host(.ng-dirty.ng-invalid.nbp-show-validation) .spinner-container{background-color:#fff;border:2px solid #c63200;border-radius:2px}.spinner-container{background-color:#fff;border:2px solid #323232;border-radius:2px;overflow:auto;padding:4px;height:50px}.spinner-container:disabled{background-color:#ccc}.spinner-container .spinner-button{width:30px;height:38px;background-color:#258900;font-size:24px;line-height:24px;color:#fff;border:none;border-radius:2px}.spinner-container .spinner-button:disabled{background-color:#ccc}.spinner-container .spinner-button.left{float:left}.spinner-container .spinner-button.right{float:right}.spinner-container .spinner-input{width:calc(100% - 64px);border:none;height:32px;text-align:center;font-size:15px;color:#323232;font-weight:700} /*# sourceMappingURL=nbp-spinner.component.css.map */ "],providers: [NBP_SPINNER_CONTROL_VALUE_ACCESSOR, NBP_INPUT_ELEMENT_BASE$4]
    }),
    __param$7(0, _angular_core.Optional()), __param$7(0, _angular_core.Inject(_angular_forms.NG_VALIDATORS)),
    __param$7(1, _angular_core.Optional()), __param$7(1, _angular_core.Inject(_angular_forms.NG_ASYNC_VALIDATORS)),
    __metadata$39("design:paramtypes", [Array, Array])
], exports.NbpSpinnerComponent);

var __decorate$44 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$40 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Componente che visualizza una barra per la selezione
 * di schede
 */
exports.NbpTabBarComponent = (function () {
    function NbpTabBarComponent() {
        this._selectedTabIndex = 0;
        /**
         * Evento emesso dopo la selezione di una scheda
         */
        this.nbpSelectedIndexChange = new _angular_core.EventEmitter();
    }
    Object.defineProperty(NbpTabBarComponent.prototype, "nbpItems", {
        get: function () {
            return this._tabItems;
        },
        /**
         * Array di oggetti ITabItem che descrivono
         * le schede
         */
        set: function (value) {
            setTimeout(function () {
                this._tabItems = value;
                if (this._tabItems && this._tabItems.length > 0) {
                    this.nbpSelectedIndex = 0;
                }
            }.bind(this), 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbpTabBarComponent.prototype, "nbpSelectedIndex", {
        get: function () {
            return this._selectedTabIndex;
        },
        /**
         * Indice della scheda selezionata
         */
        set: function (value) {
            this._selectedTabIndex = value;
            this.nbpSelectedIndexChange.emit(this._selectedTabIndex);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Metodo per selezionare una scheda
     */
    NbpTabBarComponent.prototype.selectTab = function (index) {
        if (this._selectedTabIndex !== index) {
            this.nbpSelectedIndex = index;
        }
    };
    return NbpTabBarComponent;
}());
__decorate$44([
    _angular_core.Input(),
    __metadata$40("design:type", Array),
    __metadata$40("design:paramtypes", [Array])
], exports.NbpTabBarComponent.prototype, "nbpItems", null);
__decorate$44([
    _angular_core.Input(),
    __metadata$40("design:type", Number),
    __metadata$40("design:paramtypes", [Number])
], exports.NbpTabBarComponent.prototype, "nbpSelectedIndex", null);
__decorate$44([
    _angular_core.Output(),
    __metadata$40("design:type", Object)
], exports.NbpTabBarComponent.prototype, "nbpSelectedIndexChange", void 0);
exports.NbpTabBarComponent = __decorate$44([
    _angular_core.Component({
        selector: 'nbp-tab-bar',template: "<div class=\"tabs-container\"><div *ngFor=\"let tabItem of nbpItems; let i = index\" class=\"tab-container\" [class.selected]=\"nbpSelectedIndex == i\" (click)=\"selectTab(i)\"><i [ngClass]=\"tabItem.icon\"></i> <span class=\"tab-title\">{{tabItem.title}}</span></div></div>",
        styles: [".tabs-container{display:flex}.tabs-container .tab-container{height:87px;border-right:1px solid #ccc;text-align:center;background-color:#f8f8f8;flex-grow:1;flex-basis:0;padding:10px;cursor:pointer}.tabs-container .tab-container:last-of-type{border:0}.tabs-container .tab-container.selected{background-color:#fff;height:86px}.tabs-container .tab-container.selected i{color:#258900}.tabs-container .tab-container.selected .tab-title{color:#258900}.tabs-container .tab-container i{display:block;font-size:24px;color:#6f6f6f}.tabs-container .tab-container .tab-title{text-transform:uppercase;color:#6f6f6f;font-size:12px;display:inline-block;line-height:1;font-weight:600;margin-top:10px;margin-bottom:10px} /*# sourceMappingURL=nbp-tab-bar.component.css.map */ "]
    }),
    __metadata$40("design:paramtypes", [])
], exports.NbpTabBarComponent);

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// COMPONENTI POS
exports.NbpModule = (function () {
    function NbpModule() {
    }
    return NbpModule;
}());
exports.NbpModule = __decorate$1([
    _angular_core.NgModule({
        imports: [
            _angular_common.CommonModule,
            _angular_forms.FormsModule,
            _angular_platformBrowser_animations.BrowserAnimationsModule,
            _ngBootstrap_ngBootstrap.NgbDatepickerModule.forRoot()
        ],
        declarations: [
            exports.NbpButtonComponent,
            exports.NbpLabelComponent,
            exports.NbpInputContainerComponent,
            exports.NbpInputTextComponent,
            exports.NbpCheckboxComponent,
            exports.NbpFooterComponent,
            exports.NbpHeaderComponent,
            exports.NbpNavigationHeaderComponent,
            exports.NbpComboComponent,
            exports.NbpDatepickerHtml5Component,
            exports.NbpTableComponent,
            exports.NbpModalComponent,
            exports.NbpSwitchComponent,
            exports.NbpCustomerInfoComponent,
            exports.NbpAccordionComponent,
            exports.NbpRadioComponent,
            exports.NbpProgressComponent,
            exports.NbpProgressStickyContentComponent,
            exports.NbpFormComponent,
            exports.NbpPagingComponent,
            exports.NbpPaginationComponent,
            exports.NbpLoadingComponent,
            exports.NbpBreadcrumbComponent,
            exports.NbpTooltipComponent,
            exports.NbpBurgerMenuComponent,
            exports.NbpIconComponent,
            exports.NbpLoggedUserComponent,
            exports.NbpPanelComponent,
            exports.NbpCustomerNameComponent,
            exports.NbpTableColumnComponent,
            exports.NbpFeedbackComponent,
            exports.NbpDataContainerComponent,
            exports.NbpDatepickerComponent,
            exports.NbpDividingLineComponent,
            exports.NbpSelectionPanelComponent,
            exports.NbpTitledPanelComponent,
            exports.NbpShadowedPanelComponent,
            exports.NbpSpinnerComponent,
            exports.NbpTabBarComponent
        ],
        providers: [
            _angular_common.CurrencyPipe,
            _angular_common.DatePipe,
            _angular_common.DecimalPipe,
            _angular_common.LowerCasePipe,
            _angular_common.PercentPipe,
            _angular_common.UpperCasePipe,
            exports.NbpLoadingService
        ],
        exports: [
            exports.NbpButtonComponent,
            exports.NbpLabelComponent,
            exports.NbpInputTextComponent,
            exports.NbpInputContainerComponent,
            exports.NbpCheckboxComponent,
            exports.NbpFooterComponent,
            exports.NbpHeaderComponent,
            exports.NbpNavigationHeaderComponent,
            exports.NbpComboComponent,
            exports.NbpDatepickerHtml5Component,
            exports.NbpTableComponent,
            exports.NbpModalComponent,
            exports.NbpSwitchComponent,
            exports.NbpCustomerInfoComponent,
            exports.NbpAccordionComponent,
            exports.NbpRadioComponent,
            exports.NbpProgressComponent,
            exports.NbpProgressStickyContentComponent,
            exports.NbpFormComponent,
            exports.NbpPagingComponent,
            exports.NbpPaginationComponent,
            exports.NbpLoadingComponent,
            exports.NbpBreadcrumbComponent,
            exports.NbpTooltipComponent,
            exports.NbpBurgerMenuComponent,
            exports.NbpIconComponent,
            exports.NbpLoggedUserComponent,
            exports.NbpPanelComponent,
            exports.NbpCustomerNameComponent,
            exports.NbpTableColumnComponent,
            exports.NbpFeedbackComponent,
            exports.NbpDataContainerComponent,
            exports.NbpDatepickerComponent,
            exports.NbpDividingLineComponent,
            exports.NbpSelectionPanelComponent,
            exports.NbpTitledPanelComponent,
            exports.NbpShadowedPanelComponent,
            exports.NbpSpinnerComponent,
            exports.NbpTabBarComponent
        ]
    })
], exports.NbpModule);

var __decorate$48 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$43 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$8 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Client Http per recuperare le informazioni di cjContext
 */
exports.CjContextClientService = (function () {
    function CjContextClientService(config, http) {
        this.config = config;
        this.http = http;
        this.headers = new _angular_common_http.HttpHeaders().set('Content-Type', 'application/json');
    }
    /**
     * Esegue la chiamata http per recupeare il contesto passando come url param il token
     */
    CjContextClientService.prototype.getCjContext = function (token) {
        var _this = this;
        return this.config.getSessionManagerBaseUrl()
            .concatMap(function (url) {
            return _this.http.get(url + ("/npu-sm-v0/api/cjcontext/" + token), { headers: _this.headers });
        });
    };
    /**
     * Esegue la chiamata http per creare un nuovo contesto securizzato a partire da un NDG
     */
    CjContextClientService.prototype.creaCjContext = function (ndg, application, canale) {
        var _this = this;
        return this.config.getSessionManagerBaseUrl()
            .concatMap(function (url) {
            return _this.http.post(url + "/npu-sm-v0/api/cjcontext", { 'ndg': ndg, 'application': application, 'canale': canale }, { headers: _this.headers });
        });
    };
    return CjContextClientService;
}());
exports.CjContextClientService = __decorate$48([
    _angular_core.Injectable(),
    __param$8(0, _angular_core.Inject(APP_CONFIG)),
    __metadata$43("design:paramtypes", [Object, _angular_common_http.HttpClient])
], exports.CjContextClientService);

var __decorate$47 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$42 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Servizio utilizzato per recuperare le informazioni di contesto
 *
 */
exports.CjContextService = (function () {
    // TODO capire come passare l'indirizzo dell'ambiente PUV giusto
    // un idea 'semplice' ma poco elegante potrebbe essere quella di chiederlo in input nei metodi,
    // altrimenti bisogna lavorare a livello di provider
    function CjContextService(cjContextClient) {
        this.cjContextClient = cjContextClient;
        this._contextInfoSource = new rxjs_ReplaySubject.ReplaySubject(1);
    }
    /**
     * Crea un nuovo contesto applicativo
     * @return il token del contesto
     */
    CjContextService.prototype.createNewCjContext = function (ndg, application, canale) {
        return this.cjContextClient.creaCjContext(ndg, application, canale);
    };
    /**
     * Permette di salvare il contesto applicativo all'interno del servizio
     * @param ICjContext cjContext contesto applicativo
     */
    CjContextService.prototype.setCurrentCjContext = function (cjContext) {
        this._contextInfoSource.next(cjContext);
    };
    /**
     * Recupera il contesto applicativo salvato nel servizio
     * @return ICjContext contesto applicativo salvato nel servizio
     */
    CjContextService.prototype.getCurrentCjContext = function () {
        return this._contextInfoSource.asObservable();
    };
    CjContextService.prototype.getCurrentToken = function () {
        return this._token;
    };
    CjContextService.prototype._setCurrentToken = function (token) {
        this._token = token;
        console.debug('Salvato token corrente: ' + this._token);
    };
    /**
     * Restituisce le informazioni di contesto chiamando il servizio rest dedicato.
     * Se il contensto è già stato recuperato restituisce tale contesto
     * @param  string token
     * @return Observable<ICjContext> contesto applicativo da servizio rest
     */
    CjContextService.prototype.getCjContextByToken = function (token) {
        this._setCurrentToken(token);
        if (!this._contextInfo) {
            return this.cjContextClient.getCjContext(token);
        }
        else {
            return rxjs_Observable.Observable.of(this._contextInfo);
        }
    };
    return CjContextService;
}());
exports.CjContextService = __decorate$47([
    _angular_core.Injectable(),
    __metadata$42("design:paramtypes", [exports.CjContextClientService])
], exports.CjContextService);

var __decorate$46 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$41 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.CjBodyComponent = (function () {
    function CjBodyComponent(contextService, route) {
        this.contextService = contextService;
        this.route = route;
        /**
         * Evento lanciato sul click del pulsante "Pagina Precedente"
         */
        this.cjOnPrevPageButtonClicked = new _angular_core.EventEmitter();
        /**
         * Evento emesso quando il contesto applicativo è disponibile.
         * @param {EventEmitter<ICjContext>}  cjOnContextReady
         */
        this.cjOnContextReady = new _angular_core.EventEmitter();
        this._nbpChannel = exports.NbpChannel;
    }
    Object.defineProperty(CjBodyComponent.prototype, "cjShowPrevPageButton", {
        /**
         * Booleano per abilitare il pulsante “Pagina precedente”
         */
        get: function () {
            return this._cjShowPrevPageButton;
        },
        set: function (value) {
            this._cjShowPrevPageButton = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CjBodyComponent.prototype, "disabled", {
        /**
         * Booleano che abilita/disabilita il contenuto ng-content del componente.
         * Header e footer sono sempre abilitati.
         * Attributo "disabled" standard di HTML element
         */
        get: function () { return this._cjDisabled; },
        set: function (value) { this._cjDisabled = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    
    
    CjBodyComponent.prototype.ngOnInit = function () {
        this._getCjContextFromToken();
        this.cjChannel = this.cjChannel ? this.cjChannel : exports.NbpChannel.ABC;
    };
    CjBodyComponent.prototype.setNavigationHeaderSlim = function (isNavigationHeaderSlim) {
        this._isNavigationHeaderSlim = isNavigationHeaderSlim;
    };
    CjBodyComponent.prototype._getCjContextFromToken = function () {
        var _this = this;
        if (!this.cjToken) {
            if (this.cjTokenNameParam) {
                this.sub = this.route.params.subscribe(function (params) {
                    _this.cjToken = params[_this.cjTokenNameParam];
                    _this._obtainContext();
                });
            }
            else {
                console.log('WARNING - Componente CjBody - senza cjToken e senza cjTokenNameParam.');
            }
        }
        else {
            this._obtainContext();
        }
    };
    CjBodyComponent.prototype._obtainContext = function () {
        var _this = this;
        this.contextService.getCjContextByToken(this.cjToken).subscribe(function (context) {
            _this._contextInfo = context;
            _this.contextService.setCurrentCjContext(_this._contextInfo);
            /**
             * se cjApplicationName non presente è popolato con i dato preso dal cjContext
             */
            if (!_this.cjApplicationName) {
                _this.cjApplicationName = _this._contextInfo.application;
            }
            _this.cjOnContextReady.emit(_this._contextInfo);
        });
    };
    CjBodyComponent.prototype._onPrevPageButtonClicked = function () {
        this.cjOnPrevPageButtonClicked.emit('cjOnPrevPageButtonClickedEvent');
    };
    return CjBodyComponent;
}());
__decorate$46([
    _angular_core.Input(),
    __metadata$41("design:type", String)
], exports.CjBodyComponent.prototype, "cjToken", void 0);
__decorate$46([
    _angular_core.Input(),
    __metadata$41("design:type", String)
], exports.CjBodyComponent.prototype, "cjTokenNameParam", void 0);
__decorate$46([
    _angular_core.Input(),
    __metadata$41("design:type", String)
], exports.CjBodyComponent.prototype, "cjApplicationName", void 0);
__decorate$46([
    _angular_core.Input(),
    __metadata$41("design:type", String)
], exports.CjBodyComponent.prototype, "cjSectionTitle", void 0);
__decorate$46([
    _angular_core.Input(),
    __metadata$41("design:type", Number)
], exports.CjBodyComponent.prototype, "cjChannel", void 0);
__decorate$46([
    _angular_core.Input(),
    __metadata$41("design:type", Object),
    __metadata$41("design:paramtypes", [Boolean])
], exports.CjBodyComponent.prototype, "cjShowPrevPageButton", null);
__decorate$46([
    _angular_core.Output(),
    __metadata$41("design:type", _angular_core.EventEmitter)
], exports.CjBodyComponent.prototype, "cjOnPrevPageButtonClicked", void 0);
__decorate$46([
    _angular_core.Input(),
    __metadata$41("design:type", Boolean),
    __metadata$41("design:paramtypes", [Object])
], exports.CjBodyComponent.prototype, "disabled", null);
__decorate$46([
    _angular_core.Output(),
    __metadata$41("design:type", _angular_core.EventEmitter)
], exports.CjBodyComponent.prototype, "cjOnContextReady", void 0);
exports.CjBodyComponent = __decorate$46([
    _angular_core.Component({
        selector: 'cj-body',template: "<nbp-header [nbpName]=\"cjApplicationName\" [nbpChannel]=\"cjChannel\" nbpLogo=\"./cjlib/assets/images/sprite.png\"><nbp-customer-name [nbpCustomer]=\"_contextInfo?.cliente.intestazione\"></nbp-customer-name></nbp-header><div id=\"body-container\" class=\"container-fluid\" [ngClass]=\"{'other-header' : cjChannel !== _nbpChannel.ABC, 'abc-header' : cjChannel === _nbpChannel.ABC}\"><div class=\"row navigation-header-container\"><nbp-navigation-header [ngClass]=\"{'nav-header-slim':_isNavigationHeaderSlim}\" [nbpTitle]=\"cjApplicationName\" [nbpSectionTitle]=\"cjSectionTitle\" [nbpShowPrevPage]=\"cjShowPrevPageButton\" (nbpPrevPage)=\"_onPrevPageButtonClicked()\"></nbp-navigation-header></div><div id=\"body-content\" [ngClass]=\"{'nav-header-slim':_isNavigationHeaderSlim}\"><ng-content></ng-content></div></div><nbp-footer></nbp-footer>",
        styles: [".navigation-header-container{margin-right:-40px;margin-left:-40px}.sticky-default{position:fixed!important;left:0!important;z-index:9999!important}#body-container.other-header ::ng-deep nbp-navigation-header .header-overlay.sticky{top:4.375em!important}#body-container.abc-header ::ng-deep nbp-navigation-header .header-overlay.sticky{top:3.125em!important}#body-container.other-header ::ng-deep cj-wizard nbp-progress .row.nbp-progress-container{position:fixed!important;left:0!important;z-index:9999!important;top:6.6875em!important;width:100%;margin:0!important}#body-container.abc-header ::ng-deep cj-wizard nbp-progress .row.nbp-progress-container{position:fixed!important;left:0!important;z-index:9999!important;top:5.4375em!important;width:100%;margin:0!important}#body-container.other-header #body-content.nav-header-slim ::ng-deep cj-wizard #wizard-content{padding-top:10.75em!important}#body-container.abc-header #body-content.nav-header-slim ::ng-deep cj-wizard #wizard-content{padding-top:9.5em!important}#body-container nbp-navigation-header.nav-header-slim ::ng-deep #navigation-header-title{border-bottom:none!important;height:2em!important;padding-top:.3125em!important}#body-container #body-content.nav-header-slim ::ng-deep cj-wizard #progress-container{border-top:none!important}#body-container #body-content.nav-header-slim ::ng-deep cj-wizard nbp-progress #step-container{height:3.125em!important}#body-container.other-header #body-content:not(.nav-header-slim){padding-top:9.0625em!important}#body-container.abc-header #body-content:not(.nav-header-slim){padding-top:7.8125em!important} /*# sourceMappingURL=cj-body.component.css.map */ "]
    }),
    __metadata$41("design:paramtypes", [exports.CjContextService, _angular_router.ActivatedRoute])
], exports.CjBodyComponent);

var __decorate$50 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$45 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CjWizardHelper = (function () {
    function CjWizardHelper() {
    }
    /**
     * funzione di utility return true se l'array contiene duplicati
     * @param {Array<any>} items set in oggetti in input
     * @return {boolean}         input contains duplicate
     */
    CjWizardHelper.prototype.containsDuplicate = function (items) {
        return items.some(function (item, index) {
            return items.indexOf(item) !== index;
        });
    };
    CjWizardHelper.prototype.stepContainsPage = function (step, page) {
        return step.pages.indexOf(page) !== -1;
    };
    /**
    * controlla che (cjCurrentState.currentStepId, cjCurrentState.currentPageId) esista nella cjConfiguration
    */
    CjWizardHelper.prototype.currentStatusValid = function (statusIndexes) {
        return (statusIndexes.stepIndex !== -1 && statusIndexes.pageIndex !== -1);
    };
    /**
     * controlla univocita' coppia (StepId, pageId) all'interno della configurazione dello wizard
     * @return boolean configuration valid
     */
    CjWizardHelper.prototype.configurationValid = function (wizardConfiguration) {
        var _this = this;
        var stepIds = wizardConfiguration.steps.map(function (step) { return step.id; });
        if (this.containsDuplicate(stepIds)) {
            return false;
        }
        var stepsDuplicateStatus = wizardConfiguration.steps.map(function (step) {
            return _this.containsDuplicate(step.pages.map(function (page) {
                return page.id;
            }));
        });
        var result = (stepsDuplicateStatus.reduce(function (acc, curr) {
            return acc || curr;
        }, false));
        return !result;
    };
    /**
     * Recupera l'indice corrente di Page|Step nell'array a partire dall'id dell'elemento
     * @param  {Array<ICjWizardPage|ICjWizardStep>} elems insieme di step o page
     * @param  string                             id    identificativo di Page|Step
     * @return number                                   array index
     */
    CjWizardHelper.prototype.getCurrentStateIndexById = function (elems, id) {
        var currentIndex = -1;
        for (var elemIndex = 0; elemIndex < elems.length; elemIndex++) {
            if (elems[elemIndex].id === id) {
                currentIndex = elemIndex;
                break;
            }
        }
        return currentIndex;
    };
    /**
     * Recupera l'elemento corrente di Page|Step nell'array a partire dall'id dell'elemento
     * @param  {Array<ICjWizardPage|ICjWizardStep>} elems insieme di step o page
     * @param  string                             id    identificativo di Page|Step
     * @return ICjWizardPage|ICjWizardStep        elemento
     */
    CjWizardHelper.prototype.getCurrentStateById = function (elems, id) {
        for (var elemIndex = 0; elemIndex < elems.length; elemIndex++) {
            if (elems[elemIndex].id === id) {
                return elems[elemIndex];
            }
        }
        return null;
    };
    return CjWizardHelper;
}());
CjWizardHelper = __decorate$50([
    _angular_core.Injectable(),
    __metadata$45("design:paramtypes", [])
], CjWizardHelper);

var stickyElementToggleTrigger = _angular_animations.trigger('stickyElementToggleTrigger', [
    _angular_animations.state('disappear', _angular_animations.style({
        opacity: 0,
        visibility: 'hidden'
    })),
    _angular_animations.state('appear', _angular_animations.style({
        opacity: 1,
        visibility: 'visible'
    })),
    _angular_animations.transition('* => appear', _angular_animations.animate('200ms ease-in')),
    _angular_animations.transition('* => disappear', _angular_animations.animate('200ms ease-out')),
]);
var growShrinkElementHorizontallyTrigger = _angular_animations.trigger('growShrinkElementHorizontallyTrigger', [
    _angular_animations.state('grow', _angular_animations.style({
        width: '*'
    })),
    _angular_animations.state('shrink', _angular_animations.style({
        width: '*'
    })),
    _angular_animations.transition('shrink => grow', _angular_animations.animate('200ms 100ms ease-in')),
    _angular_animations.transition('grow => shrink', _angular_animations.animate('200ms 100ms ease-out')),
]);

var __decorate$49 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$44 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$9 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/** intero autogenerato usato per id unici per cjWizard component */
var nextId$16 = 0;
exports.CjWizardComponent = (function () {
    function CjWizardComponent(helper, cjBody) {
        this.helper = helper;
        this.cjBody = cjBody;
        /**
         * Identificativo univoco per il cjWizard.
         * Se nessun id e' fornito e' auto-generato.
         */
        this.id = "cj-wizard-" + ++nextId$16;
        // --------------------------------------------- //
        // ------     ICjWizardLifecycleEvent     ------ //
        // --------------------------------------------- //
        /**
         * Evento che notifica quando si inizia un nuovo wizard da zero
         */
        this.cjOnWizardStart = new _angular_core.EventEmitter();
        /**
         * Evento che notifica quando si ripristina un wizard con stato
         */
        this.cjOnWizardRestore = new _angular_core.EventEmitter();
        /**
        * Evento che notifica l’abbandono del wizard
        */
        this.cjOnWizardCancel = new _angular_core.EventEmitter();
        /**
        * Evento che notifica il completamento dell’intero wizard
        * Es pressione del tasto continua (tasto finale del wiard)
        */
        this.cjOnWizardComplete = new _angular_core.EventEmitter();
        // ----------------------------------------------//
        // ------    ICjWizardNavigationEvent     ------ //
        // --------------------------------------------- //
        /**
         * Evento che notifica l’aggiornamento della struttura dati che il wizard sta componendo
         */
        this.cjOnDataChange = new _angular_core.EventEmitter();
        /**
         * Evento che notifica l’aggiornamento dello step corrente
         */
        this.cjOnWizardPageChange = new _angular_core.EventEmitter(); // TODO refine type
        /**
        * Evento che notifica l’aggiornamento del modello di avanzamento del wizard
        */
        this.cjOnWizardStateChange = new _angular_core.EventEmitter();
        /**
         * Evento che notifica il toggle della visualizzazione della sidebar del wizard
         * parametro eventEmitter:
         *   TRUE -> wizardSideBar visualizzata,
         *   FALSE -> wizardSideBar non visualizzata
         *
         */
        this.cjOnToggleSideBarView = new _angular_core.EventEmitter();
        this._currentStateIndexes = { stepIndex: -1, pageIndex: -1 };
        this._showSideBar = false;
        this._isWizardInsideBody = false;
        this._buttonsStyles = exports.NbpStyle;
        this._showLoading = false;
        this.wizardReady = false;
        this._hideBorder = false;
        this.cjConfiguration = {
            id: this.id,
            name: this.name,
            steps: new Array()
        };
    }
    Object.defineProperty(CjWizardComponent.prototype, "cjShowPaging", {
        /**
         * (Opzionale) Proprieta' che consente di non visualizzare la seziona relativa ai sotto-step/pagine degli step.
         * Valore di default false.
        */
        get: function () { return this._cjShowPaging; },
        set: function (value) { this._cjShowPaging = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(CjWizardComponent.prototype, "_cjShowSideBar", {
        get: function () { return this._showSideBar; },
        set: function (value) { this._showSideBar = coerceBooleanProperty(value); this.cjOnToggleSideBarView.emit(this._showSideBar); },
        enumerable: true,
        configurable: true
    });
    
    
    /**
     * funzione privata che calcola la percentuale di riempimento dello step nel componente
     * nbpProgress
     * @param number currentStepIndex indice dello step corrente
     * @param ICjWizardStep    currentStep      struttura dati dello step corrente
     */
    CjWizardComponent.prototype._getFillPercentByIndex = function (currentStepIndex, currentStep) {
        var fillPercent;
        if (currentStepIndex < this._currentStateIndexes.stepIndex) {
            fillPercent = 100;
        }
        else if (currentStepIndex > this._currentStateIndexes.stepIndex) {
            fillPercent = 0;
        }
        else {
            var increment = 100 / currentStep.pages.length;
            fillPercent = (this.helper.getCurrentStateIndexById(currentStep.pages, this._pages[this._currentStateIndexes.pageIndex].id) + 1) * increment;
        }
        return fillPercent;
    };
    /**
     * Popola la struttura dati necessaria al componente nbpPaging
     * nbpPaging è visualizzato come secondo elemento del cjWizard sotto al componente
     * nbpProgress
     */
    CjWizardComponent.prototype._fillPagingStructure = function () {
        this._pagingStructure = {
            currentParentLabel: this.cjConfiguration.steps[this._currentStateIndexes.stepIndex].label,
            pages: []
        };
        for (var pageIndex = 0; pageIndex < this._pages.length; pageIndex++) {
            var status_1 = (pageIndex === this._currentStateIndexes.pageIndex
                ? 'active'
                : (pageIndex < this._currentStateIndexes.pageIndex ? 'done' : 'todo'));
            var pagingElem = {
                label: this._pages[pageIndex].label,
                status: status_1
            };
            this._pagingStructure.pages.push(pagingElem);
        }
    };
    /**
     * Aggiorna la struttura dati che contiene lo stato corrente del wizard
     * - step corrente
     * - pagina corrente
     */
    CjWizardComponent.prototype._updateCurrentState = function () {
        this.cjCurrentState.currentStepId = this.cjConfiguration.steps[this._currentStateIndexes.stepIndex].id;
        this.cjCurrentState.currentPageId = this._pages[this._currentStateIndexes.pageIndex].id;
        this._emitCjOnWizardStateChange(this.cjCurrentState);
        this._updateCurrentPageConfig();
    };
    /**
     * Aggiorna la struttura dati che contiene lo stato precedente del wizard
     * - step corrente
     * - pagina corrente
     */
    CjWizardComponent.prototype._updatePreviousState = function () {
        this.cjCurrentState.previousStepId = this.cjConfiguration.steps[this._currentStateIndexes.stepIndex].id;
        this.cjCurrentState.previousPageId = this._pages[this._currentStateIndexes.pageIndex].id;
        console.groupCollapsed("_updatePreviousState Debug Info");
        console.log("state index - step: " + this._currentStateIndexes.stepIndex);
        console.log("stepId: " + this.cjCurrentState.previousStepId);
        console.log("state index - page: " + this._currentStateIndexes.pageIndex);
        console.log("pageId: " + this.cjCurrentState.previousPageId);
        console.groupEnd();
    };
    CjWizardComponent.prototype._updateCurrentPageConfig = function () {
        this._currentPageConfig = this._pages[this._currentStateIndexes.pageIndex].configuration;
        // console.log(JSON.stringify(this._currentPageConfig));
    };
    /**
     * metodo privato utilizzato per:
     * - aggiornare lo stato del wizard (state & data)
     * - emettere gli eventi di lifecycle
     * @param {ICjWizardContext<T>} context
     */
    CjWizardComponent.prototype._resotreWizardStateAndData = function (context) {
        console.log('Wizard ' + context.id + ' restore state and data');
        console.dir(context);
        this.cjCurrentState = context.state;
        this._emitCjOnWizardStateChange(this.cjCurrentState);
        this._emitCjOnWizardRestore(context.data);
    };
    /**
     * Aggiorna il contesto utilizzando la funzione messa a disposizione da
     * ICjWizardContextSource
     */
    CjWizardComponent.prototype._updateWizardContext = function () {
        var _this = this;
        if (this.cjWizardContextSource && this._currentPageConfig.cjContextUpdate) {
            var updatedContext = {
                id: this.cjConfiguration.id,
                state: this.cjCurrentState,
                data: this.cjWizardDataContainer.getWizardData()
            };
            this.cjWizardContextSource.updateWizardContext(updatedContext).subscribe(function (context) {
                _this._handleLoadingSpinner(false);
            }, function (error) {
                console.log('Update wizard context error!!');
                _this._handleLoadingSpinner(false);
            });
        }
    };
    /**
     * Eseguita alla pressione del pulsante AVANTI del wizard
     * @param {Event} event AVANTI button click
     */
    CjWizardComponent.prototype._onAction = function (event) {
        if (this._currentPageConfig.cjActionButtonType === 'next') {
            this._updateProgressStructureOnDirection('next');
        }
        else if (this._currentPageConfig.cjActionButtonType === 'submit') {
            this._handleLoadingSpinner(true);
            this.cjOnWizardComplete.emit();
        }
    };
    /**
     * Disabilita il pulsante AVANTI quando non ci sono più pagine da visualizzare
     * successive a quella corrente
     */
    CjWizardComponent.prototype._isActionDisabled = function () {
        return this._currentStateIndexes.pageIndex === this._pages.length - 1
            || (this._currentPageConfig && this._currentPageConfig.cjDisableActionButton);
    };
    /**
     * Eseguita alla pressione del pulsante INDIETRO del wizard
     * Aggiorna la struttura degli indici del currentState, il currentState, la struttura dati per la
     * progress bar la struttura dati per il paging
     * @param {Event} event INDIETRO/PREV button click
     */
    CjWizardComponent.prototype._onPrev = function (event) {
        this._updateProgressStructureOnDirection('prev');
    };
    /**
     * Disabilita il pulsante INDIETRO quando non ci sono pagine da visualizzare
     * precedenti a quella corrente
     */
    CjWizardComponent.prototype._isPrevDisabled = function () {
        return this._currentStateIndexes.pageIndex === 0
            || (this._currentPageConfig && this._currentPageConfig.cjDisablePrevButton);
    };
    /**
     * Popola la struttura dati necessaria al componente nbpProgress
     * nbpProgress è visualizzato come primo elemento del cjWizard
     */
    CjWizardComponent.prototype._fillProgressStructure = function () {
        if (!this._progressStructure) {
            this._createProgressStructure();
        }
        for (var progressIndex = 0; progressIndex < this._progressStructure.length; progressIndex++) {
            this._progressStructure[progressIndex].active = (this._currentStateIndexes.stepIndex === progressIndex);
            this._progressStructure[progressIndex].fillPercent =
                this._getFillPercentByIndex(progressIndex, this.cjConfiguration.steps[progressIndex]);
        }
    };
    /**
     * Popola la struttura dati necessaria al componente nbpProgress
     * nbpProgress è visualizzato come primo elemento del cjWizard
     */
    CjWizardComponent.prototype._createProgressStructure = function () {
        var _this = this;
        this._progressStructure = this.cjConfiguration.steps.map(function (step, index) {
            var isActive = _this._currentStateIndexes.stepIndex === index;
            var fillPercent = _this._getFillPercentByIndex(index, step);
            return { label: step.label, fillPercent: fillPercent, active: isActive };
        });
    };
    /**
     * Aggiorna la struttura dati necessaria al componente nbpProgress quando
     * si naviga il wizard usando il metodo navigateToPage
     * @param {string} stepId id dello step
     * @param {string} pageId id della page
     */
    CjWizardComponent.prototype._updateProgressStructure = function (stepId, pageId) {
        this._handleLoadingSpinner(true);
        // check se stepId e pageId sono validi
        var step = this.helper.getCurrentStateById(this.cjConfiguration.steps, stepId);
        var page = this.helper.getCurrentStateById(this._pages, pageId);
        if (this.helper.stepContainsPage(step, page)) {
            console.groupCollapsed('Wizard navigate to page');
            if (this._currentStateIndexes.pageIndex !== this._pages.length) {
                this._updatePreviousState();
                this._emitEventsForPageLeave();
                this._currentStateIndexes.stepIndex = this.helper.getCurrentStateIndexById(this.cjConfiguration.steps, stepId);
                this._currentStateIndexes.pageIndex = this.helper.getCurrentStateIndexById(this._pages, pageId);
                this._updateWizardStructures();
                this._handleLoadingSpinner(false);
            }
            console.groupEnd();
        }
        else {
            this._handleLoadingSpinner(false);
            console.log('Lo step con id ' + stepId + ' non contiene una page con id ' + pageId);
        }
    };
    CjWizardComponent.prototype._goToDirection = function (direction) {
        console.groupCollapsed('Wizard navigate to ' + direction + ' page');
        this._updatePreviousState();
        this._emitEventsForPageLeave();
        this._currentStateIndexes.pageIndex = (direction === 'next')
            ? ++this._currentStateIndexes.pageIndex
            : --this._currentStateIndexes.pageIndex;
        if (!this.helper.stepContainsPage(this.cjConfiguration.steps[this._currentStateIndexes.stepIndex], this._pages[this._currentStateIndexes.pageIndex])) {
            this._currentStateIndexes.stepIndex = (direction === 'next')
                ? ++this._currentStateIndexes.stepIndex
                : --this._currentStateIndexes.stepIndex;
        }
        this._updateWizardStructures();
        this._handleLoadingSpinner(false);
        console.groupEnd();
    };
    /**
     * Aggiorna la struttura dati necessaria al componente nbpProgress quando
     * si naviga il wizard usando i pulsanti ACTION (next o submit) e INDIETRO (prev)
     * @param {'next' | 'prev'} direction indica quale pulsante è stato premuto
     */
    CjWizardComponent.prototype._updateProgressStructureOnDirection = function (direction) {
        this._handleLoadingSpinner(true);
        switch (direction) {
            case 'next':
                if (this._currentStateIndexes.pageIndex !== this._pages.length) {
                    this._goToDirection(direction);
                }
                break;
            case 'prev':
                if (this._currentStateIndexes.pageIndex !== 0) {
                    this._goToDirection(direction);
                }
                break;
            default:
                this._handleLoadingSpinner(false);
                break;
        }
    };
    /**
     * metodo pubblico con cui gli step si registrano sul wizard
     * @param ICjWizardStep step step dello wizard
     */
    CjWizardComponent.prototype.addStep = function (step) {
        this.cjConfiguration.steps.push(step);
    };
    CjWizardComponent.prototype.ngOnDestroy = function () {
        if (this.cjBody) {
            this.cjBody.setNavigationHeaderSlim(false);
        }
        if (this._wizardContextStreamSubscribe) {
            this._wizardContextStreamSubscribe.unsubscribe();
        }
    };
    CjWizardComponent.prototype.ngAfterContentInit = function () {
        if (this.cjBody) {
            this.cjBody.setNavigationHeaderSlim(true);
            this._isWizardInsideBody = true;
        }
        if (!this.cjHeaderIcon) {
            this.cjHeaderIcon = {
                icon: 'icomoon-Acquisto_carrello4',
                hide: true
            };
        }
        else if (this.cjHeaderIcon.hide === null || this.cjHeaderIcon.hide === undefined) {
            this.cjHeaderIcon.hide = true;
        }
        this._handleLoadingSpinner(true);
        this.cjConfiguration.id = this.id;
        // creates a flatten array containing all pages of all steps
        this._pages = this.cjConfiguration.steps.reduce(function (prev, curr) { return (prev).concat(curr.pages); }, []);
        if (this.cjWizardContextSource) {
            this._initWizardWithContextSource();
        }
        else {
            this._initWizardWithoutContextSource();
        }
    };
    CjWizardComponent.prototype._handleLoadingSpinner = function (show) {
        if (show !== this._showLoading) {
            this._showLoading = show;
            console.log('Show loading? ' + this._showLoading + ' timestamp: ' + new Date().getTime());
        }
    };
    CjWizardComponent.prototype._initWizardWithContextSource = function () {
        var _this = this;
        // Recupero contesto dal wizardContextSource
        this._wizardContextStream = this.cjWizardContextSource.getWizardContext();
        this._wizardContextStream.subscribe(function (context) {
            console.groupCollapsed('Ricevo context del Wizard ');
            console.dir(context);
            if (context && context.data) {
                _this._resotreWizardStateAndData(context);
            }
            else {
                console.groupCollapsed('Ricevo context null del Wizard ');
                _this._setDefaultState();
            }
            _this.initializeWizardViewModel();
            _this._handleLoadingSpinner(false);
            console.groupEnd();
        }, function (error) {
            // TODO gestire anche eventuali errori
            console.log(JSON.stringify(error));
            _this._handleLoadingSpinner(false);
        });
    };
    CjWizardComponent.prototype._initWizardWithoutContextSource = function () {
        console.groupCollapsed('Wizard without contextSource ');
        if (!this.cjCurrentState) {
            console.log('Wizard without cjCurrentState.');
            this._setDefaultState();
        }
        else {
            console.log('Wizard with cjCurrentState.');
            console.dir(this.cjCurrentState);
            this._emitCjOnWizardRestore(this.cjWizardDataContainer.getWizardData());
            // this._emitCjOnPageEnter();
        }
        this.initializeWizardViewModel();
        this._handleLoadingSpinner(false);
        console.groupEnd();
    };
    CjWizardComponent.prototype._setDefaultState = function () {
        console.log('Wizard si posiziona sul primo step e la prima pagina.');
        this.cjCurrentState = {
            id: this.cjConfiguration.id,
            currentStepId: this.cjConfiguration.steps[0].id,
            currentPageId: this._pages[0].id,
            previousStepId: null,
            previousPageId: null
        };
        this._currentStateIndexes = {
            stepIndex: 0,
            pageIndex: 0
        };
        this._emitCjOnWizardStart(this.cjWizardDataContainer.getWizardData());
        this._emitCjOnWizardStateChange(this.cjCurrentState);
    };
    CjWizardComponent.prototype._emitCjOnWizardStart = function (cjData) {
        this.cjOnWizardStart.emit(cjData);
        console.log('Emit event: cjOnWizardStart');
        console.dir(cjData);
    };
    CjWizardComponent.prototype._emitCjOnWizardRestore = function (cjData) {
        this.cjWizardDataContainer.setWizardData(cjData);
        this.cjOnWizardRestore.emit(cjData);
        console.log('Emit event: cjOnWizardRestore');
        console.dir(cjData);
    };
    CjWizardComponent.prototype._emitCjOnWizardStateChange = function (state$$1) {
        this.cjOnWizardStateChange.emit(state$$1);
        console.log('Emit event: cjOnWizardStateChange');
        console.dir(state$$1);
    };
    CjWizardComponent.prototype._emitCjOnWizardPageChange = function () {
        var page = this._pages[this._currentStateIndexes.pageIndex];
        this.cjOnWizardPageChange.emit(page);
        console.log('Emit event: _emitCjOnWizardPageChange');
        console.dir(page);
    };
    CjWizardComponent.prototype._emitCjOnPageEnter = function () {
        this._emitPageEvent('ENTER');
    };
    CjWizardComponent.prototype._emitEventsForPageLeave = function () {
        this._emitPageEvent('LEAVE');
    };
    CjWizardComponent.prototype._emitPageEvent = function (type) {
        var _this = this;
        if (!type || (type !== 'ENTER' && type !== 'LEAVE')) {
            return;
        }
        var event = type === 'ENTER' ? 'cjOnPageEnter' : 'cjOnPageLeave';
        var currentPageIndex = this._currentStateIndexes.pageIndex;
        if (type === 'ENTER') {
            setTimeout(function () {
                console.log('Emit event: ' + event);
                console.dir(_this._pages[currentPageIndex]);
                _this._pages[currentPageIndex].events.cjOnPageEnter.emit(_this._pages[currentPageIndex]);
            });
        }
        else {
            this._emitCjOnWizardPageChange();
            setTimeout(function () {
                console.log('Emit event: ' + event);
                console.dir(_this._pages[currentPageIndex]);
                _this._pages[currentPageIndex].events.cjOnPageLeave.emit(_this._pages[currentPageIndex]);
            });
        }
    };
    CjWizardComponent.prototype.obtainStateIndexesFromConfiguration = function () {
        this._currentStateIndexes.stepIndex = this.helper.getCurrentStateIndexById(this.cjConfiguration.steps, this.cjCurrentState.currentStepId);
        this._currentStateIndexes.pageIndex = this.helper.getCurrentStateIndexById(this._pages, this.cjCurrentState.currentPageId);
    };
    /**
     * Aggiorna le strutture dati utilizzate nella View per il layout del componente wizard
     */
    CjWizardComponent.prototype.initializeWizardViewModel = function () {
        this.wizardReady = false;
        this.obtainStateIndexesFromConfiguration();
        if (this.helper.currentStatusValid(this._currentStateIndexes) && this.helper.configurationValid(this.cjConfiguration)) {
            this._fillProgressStructure();
            this._fillPagingStructure();
            this._updateCurrentPageConfig();
            this._emitCjOnPageEnter();
        }
        else {
            console.warn('Error configuration Valid: currentStatus invalido o (stepId, pageId) non univoche per wizard');
        }
        this.wizardReady = true;
    };
    CjWizardComponent.prototype._updateWizardStructures = function () {
        this.wizardReady = false;
        this._updateCurrentState();
        this._updateWizardContext();
        this._fillProgressStructure();
        this._fillPagingStructure();
        this._emitCjOnPageEnter();
        this.wizardReady = true;
    };
    CjWizardComponent.prototype._toggleSideBar = function () {
        this._cjShowSideBar = !this._cjShowSideBar;
    };
    /**
     * Funzione pubblica invocabile dall'esterno per andare sulla pagina successiva
     * Aggiorna la struttura degli indici del currentState, il currentState, la struttura dati per la
     * progress bar la struttura dati per il paging
     */
    CjWizardComponent.prototype.navigateToNext = function () {
        this._updateProgressStructureOnDirection('next');
    };
    /**
     * Funzione pubblica invocabile dall'esterno per andare sulla pagina precedente
     * Aggiorna la struttura degli indici del currentState, il currentState, la struttura dati per la
     * progress bar la struttura dati per il paging
     *
     */
    CjWizardComponent.prototype.navigateToPrev = function () {
        this._updateProgressStructureOnDirection('prev');
    };
    CjWizardComponent.prototype.navigateToPage = function (stepId, pageId) {
        this._updateProgressStructure(stepId, pageId);
    };
    CjWizardComponent.prototype.showHeaderIcon = function () {
        this.cjHeaderIcon.hide = false;
    };
    CjWizardComponent.prototype.hideHeaderIcon = function () {
        this.cjHeaderIcon.hide = true;
    };
    CjWizardComponent.prototype.showWizardSideBar = function () {
        this._showSideBar = true;
    };
    CjWizardComponent.prototype.hideWizardSideBar = function () {
        this._showSideBar = false;
    };
    CjWizardComponent.prototype.toggleWizardSideBar = function () {
        this._showSideBar = !this._showSideBar;
    };
    CjWizardComponent.prototype.metodoForDebug = function (data) {
        console.log('metodo for debug wizard...');
        console.dir(data);
    };
    return CjWizardComponent;
}());
__decorate$49([
    _angular_core.Input(),
    __metadata$44("design:type", Object)
], exports.CjWizardComponent.prototype, "id", void 0);
__decorate$49([
    _angular_core.Input(),
    __metadata$44("design:type", String)
], exports.CjWizardComponent.prototype, "name", void 0);
__decorate$49([
    _angular_core.Input(),
    __metadata$44("design:type", Object)
], exports.CjWizardComponent.prototype, "cjCurrentState", void 0);
__decorate$49([
    _angular_core.Input(),
    __metadata$44("design:type", Object)
], exports.CjWizardComponent.prototype, "cjWizardDataContainer", void 0);
__decorate$49([
    _angular_core.Input(),
    __metadata$44("design:type", Object)
], exports.CjWizardComponent.prototype, "cjHeaderIcon", void 0);
__decorate$49([
    _angular_core.Input(),
    __metadata$44("design:type", Boolean),
    __metadata$44("design:paramtypes", [Object])
], exports.CjWizardComponent.prototype, "cjShowPaging", null);
__decorate$49([
    _angular_core.Input(),
    __metadata$44("design:type", Object)
], exports.CjWizardComponent.prototype, "cjWizardContextSource", void 0);
__decorate$49([
    _angular_core.Output(),
    __metadata$44("design:type", _angular_core.EventEmitter)
], exports.CjWizardComponent.prototype, "cjOnWizardStart", void 0);
__decorate$49([
    _angular_core.Output(),
    __metadata$44("design:type", _angular_core.EventEmitter)
], exports.CjWizardComponent.prototype, "cjOnWizardRestore", void 0);
__decorate$49([
    _angular_core.Output(),
    __metadata$44("design:type", _angular_core.EventEmitter)
], exports.CjWizardComponent.prototype, "cjOnWizardCancel", void 0);
__decorate$49([
    _angular_core.Output(),
    __metadata$44("design:type", _angular_core.EventEmitter)
], exports.CjWizardComponent.prototype, "cjOnWizardComplete", void 0);
__decorate$49([
    _angular_core.Output(),
    __metadata$44("design:type", _angular_core.EventEmitter)
], exports.CjWizardComponent.prototype, "cjOnDataChange", void 0);
__decorate$49([
    _angular_core.Output(),
    __metadata$44("design:type", _angular_core.EventEmitter)
], exports.CjWizardComponent.prototype, "cjOnWizardPageChange", void 0);
__decorate$49([
    _angular_core.Output(),
    __metadata$44("design:type", _angular_core.EventEmitter)
], exports.CjWizardComponent.prototype, "cjOnWizardStateChange", void 0);
__decorate$49([
    _angular_core.Output(),
    __metadata$44("design:type", _angular_core.EventEmitter)
], exports.CjWizardComponent.prototype, "cjOnToggleSideBarView", void 0);
exports.CjWizardComponent = __decorate$49([
    _angular_core.Component({
        selector: 'cj-wizard',template: "<div class=\"row\"><nbp-loading [nbpShowAnimation]=\"_showLoading\"></nbp-loading><section [hidden]=\"_showLoading\"><nbp-progress [nbpConfiguration]=\"_progressStructure\"><ng-content select=\"nbp-progress-sticky-content\"></ng-content></nbp-progress><a [hidden]=\"cjHeaderIcon.hide\" class=\"sidebar-button__structure sidebar-button__layout\" [ngClass]=\"{'transfrom-slim': !_isWizardInsideBody}\"><i [class]=\"cjHeaderIcon.icon\" (click)=\"_toggleSideBar()\"></i></a><div class=\"row paging-container\" *ngIf=\"cjShowPaging\"><nbp-paging [nbpConfiguration]=\"_pagingStructure\"></nbp-paging></div><div id=\"wizard-content\" class=\"row\"><div id=\"component-container\" [ngClass]=\"{ 'col-md-20': _cjShowSideBar , 'col-md-24': !_cjShowSideBar }\"><ng-content select=\"cj-wizard-step\"></ng-content></div><div class=\"sidebar__layout\" [style.visibility]=\"!_cjShowSideBar ? 'hidden' : 'visible'\" [@stickyElementToggleTrigger]=\"!_cjShowSideBar ? 'disappear' : 'appear'\"><ng-content select=\"cj-shopping-cart\"></ng-content></div></div><div class=\"row\"><div class=\"col-md-offset-1 col-md-4\"><nbp-button *ngIf=\"_currentPageConfig?.cjShowPrevButton\" [nbpLabel]=\"'Indietro'\" (nbpClick)=\"_onPrev($event)\" [disabled]=\"_isPrevDisabled()\"></nbp-button></div><div class=\"col-md-offset-14 col-md-4\"><nbp-button *ngIf=\"_currentPageConfig?.cjShowActionButton\" class=\"pull-right\" [nbpLabel]=\"_currentPageConfig?.cjActionButtonLabel\" [nbpStyle]=\"_buttonsStyles.PRIMARY\" (nbpClick)=\"_onAction($event)\" [disabled]=\"_isActionDisabled()\"></nbp-button></div></div></section></div>",
        styles: [".paging-container{border-bottom:2px solid #f2f2f2;margin-left:-25px;margin-right:-25px}.sidebar-button__structure{font-size:50px;color:#337a79;text-decoration:none!important;cursor:pointer}.sidebar-button__layout{position:fixed;top:60px;z-index:99999;right:100px}.transfrom-slim{top:50px!important;font-size:35px!important}.sidebar__layout{position:fixed;right:100px}#wizard-content{padding-top:3.125em}#wizard-content #component-container{min-height:55vh}::ng-deep .shopping-cart--content{max-height:50vh!important;overflow:hidden!important}::ng-deep cj-shopping-cart cj-shopping-cart-element:not([cjItemStyle]) nbp-tooltip .nbp-popover .popover-content.left{position:fixed!important;top:inherit!important;right:450px!important;margin-top:-40px!important;margin-right:0!important;transform:inherit!important}::ng-deep cj-shopping-cart cj-shopping-cart-element[cjItemStyle] nbp-tooltip .nbp-popover .popover-content.left{position:fixed!important;top:inherit!important;right:450px!important;margin-top:-40px!important;margin-right:-7px!important;transform:inherit!important} /*# sourceMappingURL=cj-wizard.component.css.map */ "],
        animations: [stickyElementToggleTrigger]
    }),
    __param$9(1, _angular_core.Optional()),
    __metadata$44("design:paramtypes", [CjWizardHelper,
        exports.CjBodyComponent])
], exports.CjWizardComponent);

var __decorate$52 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$47 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var nextId$18 = 0;
exports.CjWizardStepComponent = (function () {
    function CjWizardStepComponent(cjWizard) {
        this.cjWizard = cjWizard;
        /**
         * Proprietà di tipo stringa che rappresentante l'Id dello step
         */
        this.id = "cj-step-wizard " + ++nextId$18;
        /**
         * Evento che viene lanciato quando si entra nello step
         */
        this.onStepEnter = new _angular_core.EventEmitter();
        /**
         * Evento che viene lanciato quando si abbandona lo step
         */
        this.onStepLeave = new _angular_core.EventEmitter();
        this._pages = new Array();
    }
    CjWizardStepComponent.prototype.ngAfterContentInit = function () {
        this._stepInfo = {
            id: this.id,
            label: this.cjLabel,
            pages: this._pages,
        };
        this.cjWizard.addStep(this._stepInfo);
    };
    /**
     * Registra una nuoava Page sullo Step
     * @param {ICjWizardPage} page
     */
    CjWizardStepComponent.prototype.addPage = function (page) {
        this._pages.push(page);
    };
    /**
     * [getStepId description]
     * @return {string} [description]
     */
    CjWizardStepComponent.prototype.getStepId = function () {
        return this._stepInfo.id;
    };
    /**
     * [getWizardCurrentState description]
     * @return {ICjWizardState} [description]
     */
    CjWizardStepComponent.prototype.getWizardCurrentState = function () {
        return this.cjWizard.cjCurrentState;
    };
    return CjWizardStepComponent;
}());
__decorate$52([
    _angular_core.Input(),
    __metadata$47("design:type", Object)
], exports.CjWizardStepComponent.prototype, "id", void 0);
__decorate$52([
    _angular_core.Input(),
    __metadata$47("design:type", String)
], exports.CjWizardStepComponent.prototype, "name", void 0);
__decorate$52([
    _angular_core.Input(),
    __metadata$47("design:type", String)
], exports.CjWizardStepComponent.prototype, "cjLabel", void 0);
__decorate$52([
    _angular_core.Output(),
    __metadata$47("design:type", _angular_core.EventEmitter)
], exports.CjWizardStepComponent.prototype, "onStepEnter", void 0);
__decorate$52([
    _angular_core.Output(),
    __metadata$47("design:type", _angular_core.EventEmitter)
], exports.CjWizardStepComponent.prototype, "onStepLeave", void 0);
exports.CjWizardStepComponent = __decorate$52([
    _angular_core.Component({selector: 'cj-wizard-step',
        template: "<ng-content></ng-content>",
        styles: [" /*# sourceMappingURL=cj-wizard-step.component.css.map */ "]
    }),
    __metadata$47("design:paramtypes", [exports.CjWizardComponent])
], exports.CjWizardStepComponent);

var __decorate$51 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$46 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** intero autogenerato usato per id unici per cjWizardPage component */
var nextId$17 = 0;
exports.CjWizardPageComponent = (function () {
    function CjWizardPageComponent(wizardStep) {
        this.wizardStep = wizardStep;
        /**
         * Identificativo univoco per il cjWizardPage.
         * Se nessun id è fornito e' auto-generato.
         */
        this.id = "cj-wizard-page-" + ++nextId$17;
        /**
         * Abilita/disabilita l'invocazione dell'aggiornamento
         * del context all'uscita dalla pagina.
         */
        this.cjContextUpdate = true;
        /**
         * Tipoligia del pulsante Action, posizionato in basso a destra del wizard:
         * 'next':(Default) definisce un pulsante standard per spostarsi avanti nelle pagine
         * 'submit': definisce il pulsante di completamento del wizard
         */
        this.cjActionButtonType = 'next';
        /**
         * Label da visualizzare all'interno del pulsante Action
         */
        this.cjActionButtonLabel = 'Avanti';
        this._cjDisableActionButton = false;
        this._cjDisablePrevButton = false;
        this._cjShowActionButton = false;
        this._cjShowPrevButton = false;
        /**
         * Evento sollevato nel momento in cui il componente cjWizard entra nella pagina
         */
        this.cjOnPageEnter = new _angular_core.EventEmitter();
        /**
         * Evento sollevato nel momento il cjWizard esce dalla pagina
         */
        this.cjOnPageLeave = new _angular_core.EventEmitter();
    }
    Object.defineProperty(CjWizardPageComponent.prototype, "cjDisableActionButton", {
        /**
         * Permette di disabilitare il pulsante di Action
         */
        get: function () { return this._cjDisableActionButton; },
        set: function (value) { this._cjDisableActionButton = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CjWizardPageComponent.prototype, "cjDisablePrevButton", {
        /**
         * Permette di disabilitare il pulsante Prev
         */
        get: function () { return this._cjDisablePrevButton; },
        set: function (value) { this._cjDisablePrevButton = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(CjWizardPageComponent.prototype, "cjShowActionButton", {
        /**
         * Permette di nascondere il pulsante di Action
         */
        get: function () { return this._cjShowActionButton; },
        set: function (value) { this._cjShowActionButton = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(CjWizardPageComponent.prototype, "cjShowPrevButton", {
        /**
         * Permette di nascondere il pulsante Prev
         */
        get: function () { return this._cjShowPrevButton; },
        set: function (value) { this._cjShowPrevButton = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    
    CjWizardPageComponent.prototype._iAmActive = function () {
        var wizardCurrentState = this.wizardStep.getWizardCurrentState();
        if (!wizardCurrentState) {
            return false;
        }
        var parentStepId = this.wizardStep.getStepId();
        return parentStepId === wizardCurrentState.currentStepId && this.id === wizardCurrentState.currentPageId;
    };
    CjWizardPageComponent.prototype.ngOnInit = function () {
        this._pageInfo = {
            id: this.id,
            label: this.cjLabel,
            configuration: this,
            events: {
                cjOnPageEnter: this.cjOnPageEnter,
                cjOnPageLeave: this.cjOnPageLeave
            }
        };
        this.wizardStep.addPage(this._pageInfo);
    };
    /**
     * Consente di eseguire il toggle sulla visibilità del pulsante di tipo Action
     */
    CjWizardPageComponent.prototype.toggleActionButtonVisibility = function () {
        this.cjShowActionButton = !this.cjShowActionButton;
    };
    /**
     * Consente di impostare la visibilità del pulsante Action
     * - true --> pulsante visibile
     * - false --> pulsante nascosto
     * @param {boolean} value valore della visibilità del pulsante
     */
    CjWizardPageComponent.prototype.setActionButtonVisibility = function (value) {
        this.cjShowActionButton = value;
    };
    /**
     * Consente di eseguire il toggle sulla visibilità del pulsante di tipo PREV
     */
    CjWizardPageComponent.prototype.togglePrevButtonVisibility = function () {
        this.cjShowPrevButton = !this.cjShowPrevButton;
    };
    /**
     * Consente di impostare la visibilità del pulsante PREV
     * - true --> pulsante visibile
     * - false --> pulsante nascosto
     * @param {boolean} value valore della visibilità del pulsante
     */
    CjWizardPageComponent.prototype.setPrevButtonVisibility = function (value) {
        this.cjShowPrevButton = value;
    };
    CjWizardPageComponent.prototype._emitOnPageEnterEvent = function () {
        console.log('Emessa onPageEnter per la page' + this._pageInfo);
        this.cjOnPageEnter.emit();
    };
    return CjWizardPageComponent;
}());
__decorate$51([
    _angular_core.Input(),
    __metadata$46("design:type", Object)
], exports.CjWizardPageComponent.prototype, "id", void 0);
__decorate$51([
    _angular_core.Input(),
    __metadata$46("design:type", String)
], exports.CjWizardPageComponent.prototype, "name", void 0);
__decorate$51([
    _angular_core.Input(),
    __metadata$46("design:type", String)
], exports.CjWizardPageComponent.prototype, "cjLabel", void 0);
__decorate$51([
    _angular_core.Input(),
    __metadata$46("design:type", Boolean)
], exports.CjWizardPageComponent.prototype, "cjContextUpdate", void 0);
__decorate$51([
    _angular_core.Input(),
    __metadata$46("design:type", String)
], exports.CjWizardPageComponent.prototype, "cjActionButtonType", void 0);
__decorate$51([
    _angular_core.Input(),
    __metadata$46("design:type", String)
], exports.CjWizardPageComponent.prototype, "cjActionButtonLabel", void 0);
__decorate$51([
    _angular_core.Input(),
    __metadata$46("design:type", Boolean),
    __metadata$46("design:paramtypes", [Object])
], exports.CjWizardPageComponent.prototype, "cjDisableActionButton", null);
__decorate$51([
    _angular_core.Input(),
    __metadata$46("design:type", Boolean),
    __metadata$46("design:paramtypes", [Object])
], exports.CjWizardPageComponent.prototype, "cjDisablePrevButton", null);
__decorate$51([
    _angular_core.Input(),
    __metadata$46("design:type", Boolean),
    __metadata$46("design:paramtypes", [Object])
], exports.CjWizardPageComponent.prototype, "cjShowActionButton", null);
__decorate$51([
    _angular_core.Input(),
    __metadata$46("design:type", Boolean),
    __metadata$46("design:paramtypes", [Object])
], exports.CjWizardPageComponent.prototype, "cjShowPrevButton", null);
__decorate$51([
    _angular_core.Output(),
    __metadata$46("design:type", _angular_core.EventEmitter)
], exports.CjWizardPageComponent.prototype, "cjOnPageEnter", void 0);
__decorate$51([
    _angular_core.Output(),
    __metadata$46("design:type", _angular_core.EventEmitter)
], exports.CjWizardPageComponent.prototype, "cjOnPageLeave", void 0);
exports.CjWizardPageComponent = __decorate$51([
    _angular_core.Component({
        selector: 'cj-wizard-page',template: "<div [@changePageTrigger]=\"_iAmActive() ? 'enter' : 'leave'\"><ng-content *ngIf=\"_iAmActive()\"></ng-content></div>",
        styles: [" /*# sourceMappingURL=cj-wizard-page.component.css.map */ "],
        animations: [
            _angular_animations.trigger('changePageTrigger', [
                _angular_animations.state('enter', _angular_animations.style({ opacity: 1 })),
                _angular_animations.state('leave', _angular_animations.style({ opacity: .5 })),
                _angular_animations.transition('enter => leave', _angular_animations.animate('1s ease-in')),
                _angular_animations.transition('leave => enter', _angular_animations.animate('1s ease-out'))
            ])
        ]
    }),
    __metadata$46("design:paramtypes", [exports.CjWizardStepComponent])
], exports.CjWizardPageComponent);

var translateElementsTrigger = _angular_animations.trigger('translateElementTrigger', [
    _angular_animations.transition('void => no-animate', []),
    _angular_animations.transition(':leave', [
        _angular_animations.style({ transform: 'translateX(0)', opacity: '*' }),
        _angular_animations.animate(200, _angular_animations.style({ transform: 'translateX(100%)', opacity: '0' }))
    ]),
    _angular_animations.transition(':enter', [
        _angular_animations.style({ transform: 'translateX(100%)', opacity: '0' }),
        _angular_animations.animate(200, _angular_animations.style({ transform: 'translateX(0)', opacity: '*' }))
    ])
]);
var highlightOnAddProduct = _angular_animations.trigger('highlightOnAddProduct', [
    _angular_animations.transition(':enter', [
        _angular_animations.query('.shopping-cart--product', _angular_animations.animate('400ms', _angular_animations.style({ backgroundColor: '#89BC72 ' }))),
        _angular_animations.query('.shopping-cart--product', _angular_animations.animate('200ms 4800ms', _angular_animations.style({ backgroundColor: '*' })))
    ])
]);
var accordionGrowShrinkTrigger = _angular_animations.trigger('accordionGrowShrinkTrigger', [
    _angular_animations.state('closed', _angular_animations.style({ opacity: 0, display: 'none', height: '0px', marginTop: '0px', marginBottom: '0px', paddingTop: '0px', paddingBottom: '0px' })),
    _angular_animations.state('opened', _angular_animations.style({ opacity: 1, display: '*', height: '*', marginTop: '*', marginBottom: '*', paddingTop: '*', paddingBottom: '*' })),
    _angular_animations.transition('opened => closed', _angular_animations.animate('200ms')),
    _angular_animations.transition('closed => opened', _angular_animations.animate('200ms'))
]);

var __decorate$54 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$49 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CjShoppingCartElementComponent = (function () {
    function CjShoppingCartElementComponent() {
        // Lanciare Warning se cjItemStyle non combacia con la classe IShoppingCartItem del model
        this._cjItemStyle = false;
        this.cjOnOpenElement = new _angular_core.EventEmitter();
        this.cjOnCloseElement = new _angular_core.EventEmitter();
        this.cjAnimationPhaseDone = new _angular_core.EventEmitter();
        /**
         * Propaga l'evento di click icona destra (default 'cestino') proveniente dagli elementi cjShoppingCartProduct figli
         * @param EventEmitter<IShoppingCartEvent> cjOnClickProductRightIcon
         */
        this.cjOnClickProductRightIcon = new _angular_core.EventEmitter();
        /**
         * Propaga l'evento di click all'interno del popover dell'icona a sinistra del product
         *  @param EventEmitter<IShoppingCartEvent> cjOnClickProductLeftIconLink
         */
        this.cjOnClickProductLeftIconLink = new _angular_core.EventEmitter();
        /**
         * Propaga l'evento di click del link promozione (default 'promo>') del product
         *  @param EventEmitter<IShoppingCartEvent> cjOnClickProductPromo
         */
        this.cjOnClickProductPromo = new _angular_core.EventEmitter();
        this.animationState = 'no-animation';
        this._collapsed = true;
    }
    Object.defineProperty(CjShoppingCartElementComponent.prototype, "cjReadOnly", {
        /**
         * Booleano che abilita/disabilita la modifica del carrello.
         */
        get: function () {
            return this._cjReadOnly;
        },
        set: function (value) {
            this._cjReadOnly = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CjShoppingCartElementComponent.prototype, "cjIsPanel", {
        get: function () {
            return this._cjIsPanel;
        },
        set: function (value) {
            this._cjIsPanel = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CjShoppingCartElementComponent.prototype, "cjItemStyle", {
        get: function () {
            return this._cjItemStyle;
        },
        set: function (value) {
            this._cjItemStyle = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CjShoppingCartElementComponent.prototype, "collapsed", {
        get: function () { return this._collapsed; },
        set: function (value) {
            this._collapsed = value;
            if (this._collapsed) {
                console.log('CjShoppingCartElementComponent - Emitting: cjOnCloseElement');
                console.dir(this._myEventInfo);
                this.cjOnCloseElement.emit(this._myEventInfo);
            }
            else {
                console.log('CjShoppingCartElementComponent - Emitting: cjOnOpenElement');
                console.dir(this._myEventInfo);
                this.cjOnOpenElement.emit(this._myEventInfo);
            }
        },
        enumerable: true,
        configurable: true
    });
    
    CjShoppingCartElementComponent.prototype._toggleCollapse = function () {
        this.collapsed = !this.collapsed;
    };
    CjShoppingCartElementComponent.prototype._getCollapsedAnimationState = function () {
        return this._collapsed ? 'closed' : 'opened';
    };
    CjShoppingCartElementComponent.prototype._onAnimationPhaseDone = function () {
        this.cjAnimationPhaseDone.emit();
    };
    CjShoppingCartElementComponent.prototype._isCellStroke = function (titleInfoLine) {
        return titleInfoLine ? titleInfoLine.style === 'stroke' : false;
    };
    CjShoppingCartElementComponent.prototype._onOpenItem = function (item) {
        var currentEventInfo = Object.assign({}, this._myEventInfo);
        currentEventInfo['itemId'] = item.id;
        console.log('Nested CjShoppingCartElementComponent (Item) - Emitting: cjOnOpenElement');
        console.dir(currentEventInfo);
        this.cjOnOpenElement.emit(currentEventInfo);
    };
    CjShoppingCartElementComponent.prototype._onCloseItem = function (item) {
        var currentEventInfo = Object.assign({}, this._myEventInfo);
        currentEventInfo['itemId'] = item.id;
        console.log('Nested CjShoppingCartElementComponent (Item) - Emitting: cjOnCloseElement');
        console.dir(currentEventInfo);
        this.cjOnCloseElement.emit(currentEventInfo);
    };
    CjShoppingCartElementComponent.prototype._onClickRightIcon = function (event) {
        var currentEventInfo = Object.assign({}, event);
        if (this._cjItemStyle) {
            currentEventInfo['itemId'] = this._myEventInfo.itemId;
        }
        else {
            currentEventInfo['sectionId'] = this._myEventInfo.sectionId;
        }
        console.log('CjShoppingCartElementComponent - Emit Event: cjOnClickProductRightIcon');
        console.dir(currentEventInfo);
        this.cjOnClickProductRightIcon.emit(currentEventInfo);
    };
    CjShoppingCartElementComponent.prototype._onClickLeftIconLink = function (event) {
        var currentEventInfo = Object.assign({}, event);
        if (this._cjItemStyle) {
            currentEventInfo['itemId'] = this._myEventInfo.itemId;
        }
        else {
            currentEventInfo['sectionId'] = this._myEventInfo.sectionId;
        }
        console.log('CjShoppingCartElementComponent - Emit Event: cjOnClickProductLeftIconLink');
        console.dir(currentEventInfo);
        this.cjOnClickProductLeftIconLink.emit(currentEventInfo);
    };
    CjShoppingCartElementComponent.prototype._onClickPromo = function (event) {
        var currentEventInfo = Object.assign({}, event);
        if (this._cjItemStyle) {
            currentEventInfo['itemId'] = this._myEventInfo.itemId;
        }
        else {
            currentEventInfo['sectionId'] = this._myEventInfo.sectionId;
        }
        console.log('CjShoppingCartElementComponent - Emit Event: cjOnClickProductPromo');
        console.dir(currentEventInfo);
        this.cjOnClickProductPromo.emit(currentEventInfo);
    };
    CjShoppingCartElementComponent.prototype.ngOnInit = function () {
        if (this._cjItemStyle) {
            this._myEventInfo = {
                itemId: this.cjData.id,
                current: this
            };
        }
        else {
            this._myEventInfo = {
                sectionId: this.cjData.id,
                current: this
            };
        }
        if (this.cjIsPanel) {
            this.cjOnOpenElement.emit(this._myEventInfo);
        }
    };
    CjShoppingCartElementComponent.prototype.updateAnimationState = function () {
        if (this.animationState === 'animation') {
            return;
        }
        this.animationState = 'animation';
    };
    CjShoppingCartElementComponent.prototype.trackByItem = function (index, item) { return item.id; };
    CjShoppingCartElementComponent.prototype.trackByProduct = function (index, product) { return product.id; };
    return CjShoppingCartElementComponent;
}());
__decorate$54([
    _angular_core.Input(),
    __metadata$49("design:type", Object)
], CjShoppingCartElementComponent.prototype, "cjData", void 0);
__decorate$54([
    _angular_core.Input(),
    __metadata$49("design:type", Object),
    __metadata$49("design:paramtypes", [Boolean])
], CjShoppingCartElementComponent.prototype, "cjReadOnly", null);
__decorate$54([
    _angular_core.Input(),
    __metadata$49("design:type", Object),
    __metadata$49("design:paramtypes", [Boolean])
], CjShoppingCartElementComponent.prototype, "cjIsPanel", null);
__decorate$54([
    _angular_core.Input(),
    __metadata$49("design:type", Boolean),
    __metadata$49("design:paramtypes", [Boolean])
], CjShoppingCartElementComponent.prototype, "cjItemStyle", null);
__decorate$54([
    _angular_core.Output(),
    __metadata$49("design:type", _angular_core.EventEmitter)
], CjShoppingCartElementComponent.prototype, "cjOnOpenElement", void 0);
__decorate$54([
    _angular_core.Output(),
    __metadata$49("design:type", _angular_core.EventEmitter)
], CjShoppingCartElementComponent.prototype, "cjOnCloseElement", void 0);
__decorate$54([
    _angular_core.Output(),
    __metadata$49("design:type", _angular_core.EventEmitter)
], CjShoppingCartElementComponent.prototype, "cjAnimationPhaseDone", void 0);
__decorate$54([
    _angular_core.Output(),
    __metadata$49("design:type", _angular_core.EventEmitter)
], CjShoppingCartElementComponent.prototype, "cjOnClickProductRightIcon", void 0);
__decorate$54([
    _angular_core.Output(),
    __metadata$49("design:type", _angular_core.EventEmitter)
], CjShoppingCartElementComponent.prototype, "cjOnClickProductLeftIconLink", void 0);
__decorate$54([
    _angular_core.Output(),
    __metadata$49("design:type", _angular_core.EventEmitter)
], CjShoppingCartElementComponent.prototype, "cjOnClickProductPromo", void 0);
CjShoppingCartElementComponent = __decorate$54([
    _angular_core.Component({selector: 'cj-shopping-cart-element',
        template: "<ng-template #emptyRow><div class=\"row\"><div [ngClass]=\"{'cell-section': !cjItemStyle , 'cell-item': cjItemStyle}\" class=\"col-md-24 col-sm-24 col-xs-24 cell__empty\"></div></div></ng-template><div [ngClass]=\"{'shopping-cart-section': !cjItemStyle , 'shopping-cart-item': cjItemStyle}\"><div class=\"row\" [ngClass]=\"{'shopping-cart-section-header': !cjItemStyle , 'shopping-cart-item-header': cjItemStyle , 'shopping-cart-item-header-border': _collapsed }\"><div [ngClass]=\"{ 'col-md-24 col-sm-24 col-xs-24' : cjIsPanel , 'col-md-22 col-sm-22 col-xs-22' : !cjIsPanel }\"><div class=\"row\"><div name=\"sx-col\" [ngClass]=\"{'col-md-14 col-sm-14 col-xs-14':cjData.titleInfoRight , 'col-md-24 col-sm-24 col-xs-24': !cjData.titleInfoRight}\"><div class=\"row\" *ngIf=\"cjData.titleInfoLeft.firstLine && !!(cjData.titleInfoLeft.firstLine.text?.trim()); else emptyRow\"><div id=\"firstLine\" [ngClass]=\"{'cell-section': !cjItemStyle , 'cell-item': cjItemStyle , 'cell__stroke':  _isCellStroke(cjData.titleInfoLeft.firstLine)}\" class=\"col-md-24 col-sm-24 col-xs-24 cell__primary cell__uppercase\">{{cjData.titleInfoLeft.firstLine.text}}</div></div><div class=\"row\" *ngIf=\"cjData.titleInfoLeft.secondLine && !!(cjData.titleInfoLeft.secondLine.text?.trim()); else emptyRow\"><div id=\"secondLine\" [ngClass]=\"{'cell-section': !cjItemStyle , 'cell-item': cjItemStyle ,'cell__stroke':  _isCellStroke(cjData.titleInfoLeft.secondLine) , 'cell__primary': !cjItemStyle}\" class=\"col-md-24 col-sm-24 col-xs-24 cell__font-sm\">{{cjData.titleInfoLeft.secondLine.text}}</div></div><span *ngIf=\" !cjItemStyle\"><div *ngIf=\"cjData.titleInfoLeft.thirdLine && !!(cjData.titleInfoLeft.thirdLine.text?.trim()); else emptyRow\" class=\"row\"><div id=\"thirdLine\" [ngClass]=\"{'cell__stroke':  _isCellStroke(cjData.titleInfoLeft.thirdLine), 'cell-section': !cjItemStyle , 'cell-item': cjItemStyle}\" class=\"col-md-24 col-sm-24 col-xs-24 cell__primary cell__bold cell__font-sm\">{{cjData.titleInfoLeft.thirdLine.text}}</div></div></span></div><div name=\"dx-col\" *ngIf=\"cjData.titleInfoRight\" class=\"col-md-10 col-sm-10 col-xs-10\"><div class=\"row\" *ngIf=\"cjData.titleInfoRight.firstLine && !!(cjData.titleInfoRight.firstLine.text?.trim()); else emptyRow\"><div id=\"firstLine\" [ngClass]=\"{'cell-section': !cjItemStyle , 'cell-item': cjItemStyle , 'cell__stroke': _isCellStroke(cjData.titleInfoRight.firstLine)}\" class=\"col-md-24 col-sm-24 col-xs-24 cell__text-right cell__primary\">{{cjData.titleInfoRight.firstLine.text}}</div></div><div class=\"row\" *ngIf=\"cjData.titleInfoRight.secondLine && !!(cjData.titleInfoRight.secondLine.text?.trim()); else emptyRow\"><div id=\"secondLine\" [ngClass]=\"{'cell-section': !cjItemStyle , 'cell-item': cjItemStyle ,'cell__stroke': _isCellStroke(cjData.titleInfoRight.secondLine)}\" class=\"col-md-24 col-sm-24 col-xs-24 cell__text-right cell__font-sm\">{{cjData.titleInfoRight.secondLine.text}}</div></div><span *ngIf=\" !cjItemStyle\"><div *ngIf=\"cjData.titleInfoRight.thirdLine && !!(cjData.titleInfoRight.thirdLine.text?.trim()); else emptyRow\" class=\"row\"><div id=\"thirdLine\" [ngClass]=\"{'cell__stroke': _isCellStroke(cjData.titleInfoRight.thirdLine), 'cell-section': !cjItemStyle , 'cell-item': cjItemStyle}\" class=\"col-md-24 col-sm-24 col-xs-24 cell-section cell__text-right cell__primary cell__font-sm\">{{cjData.titleInfoRight.thirdLine.text}}</div></div></span></div></div></div><div *ngIf=\"!cjIsPanel\" (click)=\"_toggleCollapse()\" class=\"col-md-2 col-sm-2 col-xs-2 cell-arrow\" [ngClass]=\"{'inverted section-cell-arrow':  !cjItemStyle}\"><span [ngClass]=\"{'icon-arrow-up': _collapsed , 'icon-arrow-down':!_collapsed}\"></span></div></div><div [@accordionGrowShrinkTrigger]=\"(!cjIsPanel && _collapsed) ? 'closed' : 'opened'\" (@accordionGrowShrinkTrigger.done)=\"_onAnimationPhaseDone()\" [ngClass]=\"{'cj-shopping-cart-section-body': !cjItemStyle , 'cj-shopping-cart-item-body': cjItemStyle }\"><div *ngFor=\"let item of cjData.items; trackBy: trackByItem\" [@translateElementTrigger]=\"animationState\" (@translateElementTrigger.done)=\"updateAnimationState()\"><cj-shopping-cart-element [cjData]=\"item\" [cjReadOnly]=\"cjReadOnly\" (cjOnOpenElement)=\"_onOpenItem(item)\" (cjOnCloseElement)=\"_onCloseItem(item)\" (cjAnimationPhaseDone)=\"_onAnimationPhaseDone()\" (cjOnClickProductRightIcon)=\"_onClickRightIcon($event)\" (cjOnClickProductLeftIconLink)=\"_onClickLeftIconLink($event)\" (cjOnClickProductPromo)=\"_onClickPromo($event)\" cjItemStyle></cj-shopping-cart-element></div><div class=\"cj-shopping-cart-products-container\" [ngClass]=\"{'inside-section': !cjItemStyle}\" *ngFor=\"let product of cjData.products; trackBy: trackByProduct\" [@highlightOnAddProduct]=\"animationState\" [@translateElementTrigger]=\"animationState\" (@translateElementTrigger.done)=\"updateAnimationState()\"><cj-shopping-cart-product [cjReadOnly]=\"cjReadOnly\" [cjData]=\"product\" (cjOnClickRightIcon)=\"_onClickRightIcon($event)\" (cjOnClickLeftIconLink)=\"_onClickLeftIconLink($event)\" (cjOnClickPromo)=\"_onClickPromo($event)\" [cjIsParentItem]=\"cjItemStyle\"></cj-shopping-cart-product></div></div></div>",
        styles: ["#secondLine{line-height:1em;padding-bottom:6px}.cell-section.cell__primary{font-weight:700}.cell-section.cell__uppercase{text-transform:uppercase}.cell-section.cell__font-sm{font-size:14px}.cell-section.cell__stroke{text-decoration:line-through}.cell-section.cell__text-right{text-align:right}.cell-section.cell__empty{height:20px}.cell-item{font-size:14px}.cell-item.cell__primary{font-weight:700}.cell-item.cell__uppercase{text-transform:uppercase}.cell-item.cell__font-sm{font-size:12px}.cell-item.cell__stroke{text-decoration:line-through}.cell-item.cell__text-right{text-align:right}.cell-item.cell__empty{height:20px}.shopping-cart-header_base{padding-top:10px;padding-bottom:12px;padding-left:5px;padding-right:5px}.shopping-cart-section{color:#f8f8f8}.shopping-cart-section>.shopping-cart-section-header{padding-top:10px;padding-bottom:12px;padding-left:5px;padding-right:5px;padding-left:10px;padding-right:10px;background-color:#337a79}.shopping-cart-section>.cj-shopping-cart-section-body{background-color:#e3e3e3;padding-left:5px;padding-right:5px}.shopping-cart-item{color:#323232}.shopping-cart-item>.shopping-cart-item-header{padding-top:10px;padding-bottom:12px;padding-left:5px;padding-right:5px;background-color:#e3e3e3}.shopping-cart-item>.shopping-cart-item-header-border{border-bottom:1px solid #6f6f6f}.shopping-cart-item>.shopping-cart-item-header:last-child{border:0 none #fff!important}.shopping-cart-item>.cj-shopping-cart-item-body{background-color:#e3e3e3;margin-left:-5px;margin-right:-5px;padding-left:5px;padding-right:5px;padding-bottom:5px;border-bottom:1px solid #6f6f6f}.cj-shopping-cart-products-container{background-color:#fff}.cj-shopping-cart-products-container cj-shopping-cart-product ::ng-deep .shopping-cart--product{box-sizing:border-box;border-bottom:1px solid #6f6f6f}.cj-shopping-cart-products-container:last-child cj-shopping-cart-product ::ng-deep .shopping-cart--product{box-sizing:border-box;border:0 none transparent!important}.cj-shopping-cart-products-container:first-child cj-shopping-cart-product ::ng-deep .shopping-cart--product{border-top:1px solid #ccc!important}.cj-shopping-cart-products-container.inside-section{margin-left:-5px!important;margin-right:-5px!important}.cell-arrow{position:absolute;top:30%;right:5px;color:#258900;cursor:pointer}.cell-arrow.inverted{color:#f8f8f8}.cell-arrow.section-cell-arrow{right:10px} /*# sourceMappingURL=cj-shopping-cart-element.component.css.map */ "],
        animations: [translateElementsTrigger, accordionGrowShrinkTrigger, highlightOnAddProduct]
    }),
    __metadata$49("design:paramtypes", [])
], CjShoppingCartElementComponent);

var __decorate$53 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$48 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.CjShoppingCartComponent = (function () {
    function CjShoppingCartComponent(currentElement) {
        this.currentElement = currentElement;
        // model: IShoppingCartProduct;
        this.onResizeEvent = rxjs_Observable.Observable.fromEvent(window, 'resize');
        this.animationState = 'no-animation';
        /**
         * (Opzionale) Titolo della finestra del carrello
         * Valore di default "DETTAGLIO PREZZI"
         */
        this.cjHeaderTitle = 'Dettaglio Prezzi';
        /**
         * (Opzionale) Icona visualizzata nella barra del titolo del carrello
         * Valore di default icomoon-Acquisto_carrello1
         * NOTA: l'icona presente nel ppt di spefica non c'è
         */
        this.cjHeaderIcon = 'icomoon-Acquisto_carrello1';
        /**
         * Array che descrive i pulsanti
         * da visualizzare nel componente
         */
        this.cjButtons = [];
        /**
         * evento emesso quando sono modificati i dati di input del componente
         * @param EventEmitter<IShoppingCartProduct> cjOnDataChange dati aggiornati
         */
        this.cjDataChange = new _angular_core.EventEmitter();
        /**
         * evento emesso alla pressione del link presente nel tooltip visualizzato sulla 'lente'
         * @param EventEmitter<IShoppingCartEvent> cjOnGotoCardProduct
         */
        this.cjOnClickProductLeftIconLink = new _angular_core.EventEmitter();
        /**
         * Propaga l'evento di click icona destra (default 'cestino') proveniente dagli elementi cjShoppingCartProduct figli
         * @param EventEmitter<IShoppingCartEvent> cjOnClickProductRightIcon
         */
        this.cjOnClickProductRightIcon = new _angular_core.EventEmitter();
        /**
         * Propaga l'evento di click Promozione (default 'promo >') proveniente dagli elementi cjShoppingCartProduct figli
         * @param EventEmitter<IShoppingCartEvent> cjOnClickProductLink
         */
        this.cjOnClickProduct = new _angular_core.EventEmitter();
        /**
         * evento emesso all'apertura di un element
         * @param EventEmitter<IShoppingCartEvent>  cjOnOpenElement [description]
         */
        this.cjOnOpenElement = new _angular_core.EventEmitter();
        /**
         * Evento lanciato alla pressione di ogni pulsante.
         * Viene passato come parametro il pulsante cliccato.
         */
        this.cjOnClickFooterButton = new _angular_core.EventEmitter();
    }
    Object.defineProperty(CjShoppingCartComponent.prototype, "cjReadOnly", {
        /**
         * Permette di impostare la visualizzazione in sola lettura del prodotto, nascondendo i pulsanti di eliminazione e dettaglio
         */
        get: function () {
            return this._cjReadOnly;
        },
        set: function (value) {
            this._cjReadOnly = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    CjShoppingCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._myEventInfo = {
            shoppingCartId: this.cjData.id,
            current: this
        };
        this._evaluateButtonsAndLayout();
        this._appearDisappearArrowsWaitForAnimation();
        this.onResizeEventUnsubscribe = this.onResizeEvent.forEach(function (evt) { return _this._appearDisappearArrows(); });
    };
    CjShoppingCartComponent.prototype.ngOnChanges = function (changes) {
        this._evaluateButtonsAndLayout();
        this._appearDisappearArrowsWaitForAnimation();
    };
    CjShoppingCartComponent.prototype.ngOnDestroy = function () {
        this.onResizeEventUnsubscribe();
    };
    CjShoppingCartComponent.prototype._getScrollingElementInfo = function () {
        var shoppingCartScrollingElement = this.currentElement
            .nativeElement
            .querySelectorAll('.scrolling-wrapper')[0];
        var scrollingComputedStyle = window.getComputedStyle(shoppingCartScrollingElement, null);
        var scrollingHeight = parseInt(scrollingComputedStyle.height.substring(0, scrollingComputedStyle.height.length - 2), null);
        var scrollingBottom = parseInt(scrollingComputedStyle.bottom.substring(0, scrollingComputedStyle.bottom.length - 2), null);
        return {
            element: shoppingCartScrollingElement,
            computedStyle: scrollingComputedStyle,
            height: scrollingHeight,
            bottom: scrollingBottom
        };
    };
    CjShoppingCartComponent.prototype._getContentElementInfo = function () {
        var shoppingCartContentElement = this.currentElement
            .nativeElement
            .querySelectorAll('.shopping-cart--content')[0];
        var contentComputedStyle = window.getComputedStyle(shoppingCartContentElement, null);
        var contentMaxHeight = parseInt(contentComputedStyle.maxHeight.substring(0, contentComputedStyle.maxHeight.length - 2), null);
        return {
            element: shoppingCartContentElement,
            computedStyle: contentComputedStyle,
            maxHeight: contentMaxHeight
        };
    };
    CjShoppingCartComponent.prototype._getContentScrollingInfo = function () {
        return {
            content: this._getContentElementInfo(),
            scrolling: this._getScrollingElementInfo()
        };
    };
    
    CjShoppingCartComponent.prototype._appearDisappearArrows = function () {
        var contentScrollingStructure = this._getContentScrollingInfo();
        console.log('height:' + contentScrollingStructure.scrolling.height);
        console.log('maxHeight:' + contentScrollingStructure.content.maxHeight);
        this.isMaxHeightExceded = contentScrollingStructure.scrolling.height > contentScrollingStructure.content.maxHeight;
        this._setScrollingWrapperBottomValue(0);
    };
    CjShoppingCartComponent.prototype._appearDisappearArrowsWaitForAnimation = function () {
        var _this = this;
        setTimeout(function () {
            _this._appearDisappearArrows();
        }, 350);
    };
    CjShoppingCartComponent.prototype._getScrollingTresholdValue = function () {
        var contentScrollingInfo = this._getContentScrollingInfo();
        return contentScrollingInfo.scrolling.height - contentScrollingInfo.content.maxHeight;
    };
    CjShoppingCartComponent.prototype._setScrollingWrapperBottomValue = function (bottomValue) {
        this._getScrollingElementInfo().element.style.bottom = bottomValue + 'px';
    };
    CjShoppingCartComponent.prototype._onScrollContent = function (direction) {
        var bottomCurrentValue = this._getScrollingElementInfo().bottom;
        var bottomGap = 50;
        if (direction === 'up') {
            var bottomDecrementedValue = bottomCurrentValue - bottomGap;
            this._scrollTop(bottomDecrementedValue);
        }
        else if (direction === 'down') {
            var bottomIncrementedValue = bottomCurrentValue + bottomGap;
            this._scrollBottom(bottomIncrementedValue);
        }
    };
    CjShoppingCartComponent.prototype._scrollTop = function (bottomDecrementedNextValue) {
        if (bottomDecrementedNextValue >= 0) {
            this._setScrollingWrapperBottomValue(bottomDecrementedNextValue);
        }
        else {
            this._setScrollingWrapperBottomValue(0);
        }
    };
    CjShoppingCartComponent.prototype._scrollBottom = function (bottomIncrementedValue) {
        var maxScrollingValue = this._getScrollingTresholdValue();
        if (bottomIncrementedValue <= maxScrollingValue) {
            this._setScrollingWrapperBottomValue(bottomIncrementedValue);
        }
        else {
            this._setScrollingWrapperBottomValue(maxScrollingValue);
        }
    };
    CjShoppingCartComponent.prototype.setCollapseStatusToSections = function (event) {
        if (this.cjData.sections.length > 1 && !!event.sectionId && !event.itemId) {
            this.childShoppingCartElements.forEach(function (element) {
                if (!element.cjItemStyle) {
                    element._collapsed = event.sectionId !== element.cjData.id;
                }
            });
        }
    };
    CjShoppingCartComponent.prototype._populateFooterButtons = function () {
        this._footerButtons = this.cjButtons.length > 2 ? this.cjButtons.slice(0, 2) : this.cjButtons.slice();
        // this._footerButtons = this.cjButtons;
        console.log('I pulsanti da disegnare sono ', this._footerButtons.length + ': ', JSON.stringify(this._footerButtons));
        console.log('I pulsanti originali sono ', this.cjButtons.length + ': ', JSON.stringify(this.cjButtons));
    };
    CjShoppingCartComponent.prototype._populateStyles = function () {
        switch (this._footerButtons.length) {
            case 1:
                this._footerButtons.map(function (button) {
                    button.layout = 'col-md-24 text-center';
                });
                break;
            case 2:
                this._footerButtons.map(function (button, index) {
                    button.layout = index === 0 ? 'col-md-12 text-center' : 'col-md-12 text-center';
                });
                break;
        }
    };
    CjShoppingCartComponent.prototype._evaluateButtonsAndLayout = function () {
        this._populateFooterButtons();
        this._populateStyles();
        //this._appearDisappearArrows();
    };
    CjShoppingCartComponent.prototype._onOpenElement = function (event) {
        event['shoppingCartId'] = this.cjData.id;
        this.setCollapseStatusToSections(event);
        console.log('CjShoppingCartComponent - Emitting: cjOnOpenElement');
        console.dir(event);
        this.cjOnOpenElement.emit(event);
    };
    CjShoppingCartComponent.prototype._onElementAnimationPhaseDone = function () {
        this._appearDisappearArrows();
    };
    CjShoppingCartComponent.prototype._onClickProductRightIcon = function (event) {
        var currentEventInfo = Object.assign({}, event);
        currentEventInfo['shoppingCartId'] = this._myEventInfo.shoppingCartId;
        console.log('CjShoppingCartComponent - Emit: cjOnClickProductRightIcon');
        console.dir(currentEventInfo);
        this.cjOnClickProductRightIcon.emit(currentEventInfo);
    };
    CjShoppingCartComponent.prototype._onClick = function (button) {
        console.log('CjShoppingCartComponent - Emit: cjOnClickFooterButton');
        console.dir(button);
        this.cjOnClickFooterButton.emit(button);
    };
    CjShoppingCartComponent.prototype._cjOnClickProductLeftIconLink = function (event) {
        var currentEventInfo = Object.assign({}, event);
        currentEventInfo['shoppingCartId'] = this._myEventInfo.shoppingCartId;
        console.log('CjShoppingCartComponent - Emit: cjOnClickProductLeftIconLink');
        console.dir(currentEventInfo);
        this.cjOnClickProductLeftIconLink.emit(currentEventInfo);
    };
    CjShoppingCartComponent.prototype._cjOnClickProduct = function (event) {
        var currentEventInfo = Object.assign({}, event);
        currentEventInfo['shoppingCartId'] = this._myEventInfo.shoppingCartId;
        console.log('CjShoppingCartComponent - Emit: cjOnClickProductLink');
        console.dir(currentEventInfo);
        this.cjOnClickProduct.emit(currentEventInfo);
    };
    CjShoppingCartComponent.prototype.trackBySection = function (index, section) { return section.id; };
    return CjShoppingCartComponent;
}());
__decorate$53([
    _angular_core.ViewChildren(CjShoppingCartElementComponent),
    __metadata$48("design:type", _angular_core.QueryList)
], exports.CjShoppingCartComponent.prototype, "childShoppingCartElements", void 0);
__decorate$53([
    _angular_core.Input(),
    __metadata$48("design:type", String)
], exports.CjShoppingCartComponent.prototype, "cjHeaderTitle", void 0);
__decorate$53([
    _angular_core.Input(),
    __metadata$48("design:type", String)
], exports.CjShoppingCartComponent.prototype, "cjHeaderIcon", void 0);
__decorate$53([
    _angular_core.Input(),
    __metadata$48("design:type", Object)
], exports.CjShoppingCartComponent.prototype, "cjData", void 0);
__decorate$53([
    _angular_core.Input(),
    __metadata$48("design:type", Array)
], exports.CjShoppingCartComponent.prototype, "cjButtons", void 0);
__decorate$53([
    _angular_core.Input(),
    __metadata$48("design:type", Object),
    __metadata$48("design:paramtypes", [Boolean])
], exports.CjShoppingCartComponent.prototype, "cjReadOnly", null);
__decorate$53([
    _angular_core.Output(),
    __metadata$48("design:type", _angular_core.EventEmitter)
], exports.CjShoppingCartComponent.prototype, "cjDataChange", void 0);
__decorate$53([
    _angular_core.Output(),
    __metadata$48("design:type", _angular_core.EventEmitter)
], exports.CjShoppingCartComponent.prototype, "cjOnClickProductLeftIconLink", void 0);
__decorate$53([
    _angular_core.Output(),
    __metadata$48("design:type", _angular_core.EventEmitter)
], exports.CjShoppingCartComponent.prototype, "cjOnClickProductRightIcon", void 0);
__decorate$53([
    _angular_core.Output(),
    __metadata$48("design:type", _angular_core.EventEmitter)
], exports.CjShoppingCartComponent.prototype, "cjOnClickProduct", void 0);
__decorate$53([
    _angular_core.Output(),
    __metadata$48("design:type", _angular_core.EventEmitter)
], exports.CjShoppingCartComponent.prototype, "cjOnOpenElement", void 0);
__decorate$53([
    _angular_core.Output(),
    __metadata$48("design:type", _angular_core.EventEmitter)
], exports.CjShoppingCartComponent.prototype, "cjOnClickFooterButton", void 0);
exports.CjShoppingCartComponent = __decorate$53([
    _angular_core.Component({
        selector: 'cj-shopping-cart',template: "<div class=\"row shopping-cart--container\" style=\"position:relative\"><div class=\"col-md-24 shopping-cart--header text-center\"><span [ngClass]=\"cjHeaderIcon\"></span><span style=\"padding-left:5px\">{{cjHeaderTitle}}</span></div><div class=\"col-md-24 shopping-cart--content\"><div *ngIf=\"isMaxHeightExceded\" class=\"col-md-24 col-sm-24 col-xs-24 shopping-cart--arrow-up\" (click)=\"_onScrollContent('up')\"><div class=\"arrow-up\"></div></div><div class=\"scrolling-wrapper row\"><div *ngFor=\"let section of cjData.sections; trackBy: trackBySection; let last = last\" [ngClass]=\"{'shopping-cart-section-separator':!last}\" @translateElementTrigger class=\"shopping-cart-element-wrapper\"><cj-shopping-cart-element [cjReadOnly]=\"cjReadOnly\" [cjData]=\"section\" (cjOnOpenElement)=\"_onOpenElement($event)\" (cjAnimationPhaseDone)=\"_onElementAnimationPhaseDone()\" (cjOnClickProductRightIcon)=\"_onClickProductRightIcon($event)\" (cjOnClickProductLeftIconLink)=\"_cjOnClickProductLeftIconLink($event)\" (cjOnClickProductPromo)=\"_cjOnClickProduct($event)\" [cjIsPanel]=\"cjData.sections.length === 1\"></cj-shopping-cart-element></div></div><div *ngIf=\"isMaxHeightExceded\" class=\"col-md-24 col-sm-24 col-xs-24 shopping-cart--arrow-down\" (click)=\"_onScrollContent('down')\"><div class=\"arrow-down\"></div></div></div><div *ngIf=\"!cjReadOnly\" class=\"col-md-24 shopping-cart--footer\"><div class=\"row\"><ng-container *ngFor=\"let button of _footerButtons\"><div *ngIf=\"button.visible\" [class]=\"button.layout\"><nbp-button [ngClass]=\"{'single-button': _footerButtons?.length==1}\" [nbpLabel]=\"button.label\" (nbpClick)=\"_onClick(button)\" [disabled]=\"button.disabled\" [nbpStyle]=\"button.style\"></nbp-button></div></ng-container></div></div></div>",
        styles: [".shopping-cart--container{width:350px;outline:#258900 solid 1px;box-shadow:0 0 30px rgba(0,0,0,.2)}.shopping-cart--header{background-color:#005958;text-transform:uppercase;color:#fff;font-weight:700;padding-top:2px;padding-bottom:2px;letter-spacing:.8px}.shopping-cart--header span:nth-child(1){font-size:18px}.shopping-cart--content{min-height:0!important}.scrolling-wrapper{position:relative}.shopping-cart-element-wrapper.shopping-cart-section-separator ::ng-deep .shopping-cart-item-header-border{border-bottom:1px solid #f8f8f8}.shopping-cart--footer{padding:10px;background-color:#fff;border-top:1px solid #258900}.shopping-cart--footer ::ng-deep nbp-button:not(.single-button) .button{width:100%!important}.arrow-container-base{cursor:pointer;position:absolute!important;z-index:999999;height:20px;text-align:center}.arrow-up-icon{position:absolute;border-bottom:15px solid #258900;border-left:15px solid transparent;border-right:15px solid transparent;border-top:0 solid transparent}.shopping-cart--arrow-up{cursor:pointer;position:absolute!important;z-index:999999;height:20px;text-align:center;background-image:linear-gradient(to bottom,#fff,rgba(255,255,255,.5));top:0;left:0}.shopping-cart--arrow-up div.arrow-up{border-bottom:15px solid #258900;border-left:15px solid transparent;border-right:15px solid transparent;border-top:0 solid transparent;height:0;width:0;top:50%;left:50%;transform:translate(-50%,-50%);position:absolute}.arrow-down-icon{position:absolute;border-top:15px solid #258900;border-left:15px solid transparent;border-right:15px solid transparent;border-bottom:0 solid transparent}.shopping-cart--arrow-down{position:absolute!important;z-index:999999;height:20px;text-align:center;background-image:linear-gradient(to top,#fff,rgba(255,255,255,.5));bottom:0;left:0;cursor:pointer}.shopping-cart--arrow-down div.arrow-down{position:absolute;border-top:15px solid #258900;border-left:15px solid transparent;border-right:15px solid transparent;border-bottom:0 solid transparent;height:0;width:0;top:50%;left:50%;transform:translate(-50%,-50%)} /*# sourceMappingURL=cj-shopping-cart.component.css.map */ "],
        animations: [translateElementsTrigger]
    }),
    __metadata$48("design:paramtypes", [_angular_core.ElementRef])
], exports.CjShoppingCartComponent);

var __decorate$56 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$51 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$10 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Client Http per recuperare le informazioni di cjCustomContext
 */
exports.CjCustomContextClientService = (function () {
    function CjCustomContextClientService(config, http) {
        this.config = config;
        this.http = http;
        this.headers = new _angular_common_http.HttpHeaders().set('Content-Type', 'application/json');
    }
    /**
     * Esegue la chiamata http per recupeare il contesto custom passando come url param il token e la key
     */
    CjCustomContextClientService.prototype.getCustomContext = function (token, key) {
        var _this = this;
        return this.config.getSessionManagerBaseUrl()
            .concatMap(function (url) { return _this.http.get(url + ("/npu-sm-v0/api/cjcontext/" + token + "/payload/" + key), { headers: _this.headers }); });
    };
    CjCustomContextClientService.prototype.setCustomContext = function (token, key, data) {
        var _this = this;
        return this.config.getSessionManagerBaseUrl()
            .concatMap(function (url) { return _this.http.post(url + ("/npu-sm-v0/api/cjcontext/" + token + "/payload/" + key), data, {
            headers: _this.headers,
            observe: 'body',
            responseType: 'json'
        }); });
    };
    CjCustomContextClientService.prototype.removeCustomContext = function (token, key) {
        // TODO invoke servizio rest per rimuovere custom context
        return rxjs_Observable.Observable.of({});
    };
    return CjCustomContextClientService;
}());
exports.CjCustomContextClientService = __decorate$56([
    _angular_core.Injectable(),
    __param$10(0, _angular_core.Inject(APP_CONFIG)),
    __metadata$51("design:paramtypes", [Object, _angular_common_http.HttpClient])
], exports.CjCustomContextClientService);

var __extends$9 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$55 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$50 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// il token è memorizzato dal ContextService e utilizzato per recuperare il custom context
// TODO X CARLO --> cabiamo nome alla funzione ???
var ICjCustomContextService = (function () {
    function ICjCustomContextService(contextService) {
        this.contextService = contextService;
    }
    ICjCustomContextService.prototype._getToken = function () {
        return this.contextService.getCurrentToken();
    };
    return ICjCustomContextService;
}());
exports.CjCustomContextService = (function (_super) {
    __extends$9(CjCustomContextService, _super);
    function CjCustomContextService(cjCustomContextClient, contextService) {
        var _this = _super.call(this, contextService) || this;
        _this.cjCustomContextClient = cjCustomContextClient;
        return _this;
    }
    CjCustomContextService.prototype.getCustomContextByTokenAndKey = function (key) {
        return this.cjCustomContextClient.getCustomContext(_super.prototype._getToken.call(this), key);
    };
    // vs update
    CjCustomContextService.prototype.setCustomContextByTokenAndKey = function (key, value) {
        return this.cjCustomContextClient.setCustomContext(_super.prototype._getToken.call(this), key, value);
    };
    CjCustomContextService.prototype.removeCustomContextByTokenAndKey = function (key) {
        return this.cjCustomContextClient.removeCustomContext(_super.prototype._getToken.call(this), key);
    };
    return CjCustomContextService;
}(ICjCustomContextService));
exports.CjCustomContextService = __decorate$55([
    _angular_core.Injectable(),
    __metadata$50("design:paramtypes", [exports.CjCustomContextClientService,
        exports.CjContextService])
], exports.CjCustomContextService);

var TestCjWizardContextSource = (function () {
    function TestCjWizardContextSource(customContextService, wizardId) {
        this.customContextService = customContextService;
        this.wizardId = wizardId;
    }
    TestCjWizardContextSource.prototype.getWizardContext = function () {
        var _this = this;
        var wizardContext = this.customContextService.getCustomContextByTokenAndKey(this.wizardId)
            .map(function (customContext) {
            console.groupCollapsed('Recupero contesto del wizard...');
            if (customContext) {
                console.log('Recuperato contesto custom per il wizard: ' + _this.wizardId);
                console.dir(customContext);
            }
            else {
                console.log('Nessun contesto da recuperare per il wizard: ' + _this.wizardId);
            }
            console.groupEnd();
            return customContext;
        });
        return wizardContext;
    };
    TestCjWizardContextSource.prototype.updateWizardContext = function (context) {
        if (context) {
            console.groupCollapsed('Aggiorno contesto del wizard...');
            console.log('Aggiornato sul server contesto custom per il Wizard:  ' + context.id);
            console.dir(context);
            console.groupEnd();
            return this.customContextService.setCustomContextByTokenAndKey(context.id, context);
        }
    };
    TestCjWizardContextSource.prototype.removeWizardContext = function (context) {
        console.log('TestCjWizardContextSource:removeWizardContext()');
        return rxjs_Observable.Observable.of(true);
    };
    return TestCjWizardContextSource;
}());

var __decorate$57 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$52 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.CjPrivacyFormComponent = (function () {
    function CjPrivacyFormComponent() {
        /**
         * Evento emesso al click sul pulsante 'Stampa'
         * @param {EventEmitter<ICjPrivacy>}  cjOnStampa
         */
        this.cjOnStampa = new _angular_core.EventEmitter();
        /**
         * Evento emesso al click sul pulsante 'Continua'
         * @param {EventEmitter<ICjPrivacy>}  cjOnContinua
         */
        this.cjOnContinua = new _angular_core.EventEmitter();
        /**
         * Evento emesso al click sul pulsante 'Annulla'
         * @param {EventEmitter<>}  cjOnAnnulla
         */
        this.cjOnAnnulla = new _angular_core.EventEmitter();
        this._buttonStyle = exports.NbpStyle;
        this._privacyText = "<b>PROTEZIONE DEI DATI PERSONALI: INFORMATIVA NEI CONFRONTI DI PERSONE FISICHE AI SENSI DELL\u2019ART. 13 DEL D.LGS. 30 giugno 2003 N. 196</b>\n<p>Intesa Sanpaolo S.p.A, appartenente al Gruppo bancario internazionale Intesa Sanpaolo, in qualit\u00E0 di Titolare del trattamento, Le fornisce alcune informazioni circa l\u2019utilizzo dei Suoi dati personali.</p>\n<b>Finalit\u00E0 del trattamento dei dati</b>\n<p>I dati personali, raccolti direttamente presso l\u2019interessato, ovvero presso terzi, sono trattati dalla Banca nell'ambito della sua attivit\u00E0, anche con la direzione e coordinamento della Capogruppo Intesa Sanpaolo, con le seguenti finalit\u00E0: a) prestare i servizi richiesti e gestire i rapporti con la clientela. Il conferimento dei dati personali necessari a tali finalit\u00E0 non \u00E8 obbligatorio, ma il rifiuto a fornirli comporta l\u2019impossibilit\u00E0 di eseguire quanto richiesto: il trattamento di tali dati pu\u00F2 essere effettuato senza necessit\u00E0 del consenso dell\u2019interessato; b) adempiere a prescrizioni dettate da normative nazionali e comunitarie (ad esempio: antiriciclaggio, prevenzione delle frodi sulle carte di pagamento, accertamenti fiscali e tributari, prestazione di servizi di investimento) nonch\u00E9 a disposizioni impartite da Organi di Vigilanza e Controllo (ad esempio: Centrale Rischi, Centrale di Allarme Interbancaria), anche in relazione agli obblighi di monitoraggio dei rischi operativi e creditizi a livello di Gruppo bancario. Il conferimento dei dati personali per tali finalit\u00E0 \u00E8 obbligatorio e per il trattamento di tali dati non \u00E8 richiesto il consenso; c) svolgere attivit\u00E0 funzionali alla promozione e vendita di prodotti e servizi di societ\u00E0 del Gruppo Intesa Sanpaolo o di societ\u00E0 terze attraverso lettere, telefono, Internet, SMS, MMS ed altri sistemi di comunicazione; effettuare indagini di mercato e di customer satisfaction; offrire prodotti e servizi specificamente individuati attraverso l\u2019elaborazione dei dati personali relativi a preferenze, abitudini, scelte di consumo, ecc.: il conferimento dei dati per tali finalit\u00E0 \u00E8 facoltativo e per il trattamento di tali dati \u00E8 richiesto il consenso.</p>\n<b>Modalit\u00E0 di trattamento dei dati</b>\n<p>Il trattamento dei dati personali avviene mediante strumenti manuali, informatici e telematici e in modo da garantire la sicurezza e la riservatezza dei dati stessi sia quando ci si avvalga di strumenti tradizionali che di canali distributivi telematici o comunque innovativi.</p>\n<b>Categorie di soggetti ai quali i dati possono essere comunicati</b>\n<p>Per il perseguimento delle finalit\u00E0 di cui sopra, la Banca necessita di comunicare i Suoi dati personali a societ\u00E0 appartenenti al Gruppo Intesa Sanpaolo quali, ad esempio, la societ\u00E0 consortile, che gestisce a livello accentrato il sistema informativo e alcuni servizi amministrativi, legali e contabili, o comunque a societ\u00E0 controllate o collegate. Nell\u2019ambito del Gruppo Intesa Sanpaolo potranno essere altres\u00EC comunicati informazioni e dati relativi ad operazioni ritenute sospette, ai sensi della normativa antiriciclaggio. Inoltre, direttamente o anche per il tramite della predetta societ\u00E0 consortile, la Banca necessita di comunicare i Suoi dati personali a soggetti esterni operanti, anche all\u2019estero, nell\u2019ambito di: - servizi bancari, finanziari e assicurativi, sistemi di pagamento, emissione di carte di credito, esattorie e tesorerie; - acquisizione, registrazione e trattamento di dati e documenti relativi a pagamenti, effetti, assegni od altri titoli; - rilevazione dei rischi finanziari, a scopo di prevenzione e controllo del rischio di insolvenza; - attivit\u00E0 riguardanti la cessione/copertura dei crediti svolte in qualit\u00E0 di controparti contrattuali della Banca; - servizi di recupero crediti ed attivit\u00E0 collaterali quali contatti e solleciti telefonici e attivit\u00E0 di due diligence; - gestione delle comunicazioni alla clientela, nonch\u00E9 archiviazione di dati e documenti sia in forma cartacea che elettronica; - segnalazioni relative alla normativa antiriciclaggio; - gestione di sistemi nazionali ed internazionali per il controllo delle frodi (ad esempio: MEF-UCAMP; Sistema Pubblico SCIPAFI); - rilevazione della qualit\u00E0 dei servizi, ricerche di mercato, informazione e promozione commerciale di prodotti e/o servizi; - fornitura e gestione di procedure e sistemi informatici, di reti di comunicazione e di sistemi di protezione e sicurezza; - servizi gestione di guardiania, videosorveglianza e videoregistrazione; - attivit\u00E0 di perizia, di revisione contabile, di certificazione di bilancio, di consulenza professionale e assistenza alla clientela. Laddove tali soggetti, per le finalit\u00E0 sopra indicate, trasferiscano dati personali verso un paese non appartenente all\u2019UE, le competenti Autorit\u00E0 giudiziarie o governative potrebbero avervi accesso in base alle locali disposizioni di legge. I soggetti ai quali i dati possono essere comunicati, che non siano stati designati \u201CIncaricati\u201D o \"Responsabili\", utilizzano i dati quali \"Titolari\", effettuando un trattamento autonomo e/o correlato a quello eseguito dalla Banca. L\u2019elenco aggiornato dei soggetti terzi individuati come \u201CTitolari\u201D o \u201CResponsabili\u201D \u00E8 disponibile presso tutte le Filiali. Intesa Sanpaolo S.p.A. designa \u201CIncaricati\u201D del trattamento tutti i lavoratori dipendenti e i collaboratori, anche occasionali, che svolgono mansioni che comportano il trattamento di dati personali, anche delimitandone ambiti ed abilitazioni. La Banca informa che i dati personali contenuti nella messaggistica riguardante trasferimenti finanziari potranno essere forniti, per esclusivi fini di prevenzione e di contrasto del terrorismo e del suo finanziamento, alle autorit\u00E0 pubbliche degli Stati membri dell\u2019Unione Europea e degli Stati Uniti d\u2019America (1). La Banca non diffonde i Suoi dati.</p>\n<b>Dati sensibili</b>\n<p>In relazione al trattamento di dati \"sensibili\" (idonei a rivelare lo stato di salute, l\u2019appartenenza a associazioni a carattere filosofico, politico o sindacale, ecc...) necessario per specifici servizi (mutui assistiti da assicurazione, polizze vita, ecc...) \u00E8 richiesta una specifica manifestazione scritta di consenso, fermo restando che la Banca effettua comunque i servizi richiesti e/o le operazioni disposte a Suo favore che comportano solo indirettamente la conoscenza di tali dati.</p>\n<b>Diritto di accesso ai dati personali ed altri diritti</b>\n<p>La normativa in materia conferisce all\u2019interessato (persona fisica) il diritto di ottenere la conferma dell'esistenza o meno di propri dati personali, le indicazioni circa l\u2019origine, le finalit\u00E0 e le modalit\u00E0 del trattamento, la cancellazione, la trasformazione in forma anonima o il blocco dei dati trattati in violazione di legge nonch\u00E9 l'aggiornamento, la rettifica o, se vi \u00E8 interesse, l'integrazione dei dati. L\u2019interessato, inoltre, pu\u00F2 opporsi al trattamento dei propri dati per finalit\u00E0 di invio di materiale pubblicitario, di vendita diretta, di ricerche di mercato o di comunicazione commerciale. Tutte le informazioni inerenti il diritto di accesso potranno essere richieste, anche per il tramite della propria Filiale di riferimento, rivolgendosi presso:\n<ul><li> Intesa Sanpaolo S.p.A. Tutela Aziendale \u2013 Privacy, Piazza San Carlo, 156 \u2013 10121 Torino;</li>\n<li>Casella di posta elettronica: <a href=\"mailto:privacy@intesasanpaolo.com\">privacy@intesasanpaolo.com</a>. Per ulteriori informazioni sono disponibili il numero verde 800303306 e il sito Internet <a href=\"http://www.intesasanpaolo.com\" target=\"_blank\">www.intesasanpaolo.com</a></li></ul></p>\n<b>INFORMATIVA NEI CONFRONTI DI PERSONE GIURIDICHE, ENTI O ASSOCIAZIONI (D.LGS. 30 giugno 2003 N. 196)</b>\n<p>Intesa Sanpaolo S.p.A. informa che, ai sensi dell\u2019art. 130 del D.Lgs. 196/2003, l\u2019uso di sistemi automatizzati di chiamata o di comunicazione di chiamata senza l\u2019intervento di un operatore e di comunicazioni elettroniche (posta elettronica, telefax, SMS, MMS o di altro tipo) per lo svolgimento di attivit\u00E0 promozionale o il compimento di ricerche di mercato, \u00E8 possibile solo con il consenso dei soggetti parte di un contratto di fornitura di servizi di comunicazione elettronica (\u201Ccontraenti\u201D: definizione che ricomprende anche persone giuridiche, enti o associazioni). Lo svolgimento di dette attivit\u00E0 nei confronti di tali soggetti \u00E8 sottoposto a una specifica manifestazione di consenso.\n1) L\u2019Unione Europea e gli Stati Uniti d\u2019America hanno concluso un Accordo (G.U. Unione Europea L 195/5 del 27.7.2010) sul trasferimento di dati di messaggistica finanziaria dall\u2019Unione Europea agli Stati Uniti ai fini di attuazione del programma di prevenzione e repressione di fenomeni terroristici. L\u2019Accordo prevede che, in relazione a talune transazioni finanziarie (es. bonifici esteri), ad esclusione di quelle effettuate nello spazio unico dei pagamenti in euro (SEPA), il Dipartimento del Tesoro statunitense possa avanzare richieste di acquisizione di dati direttamente ai fornitori di messaggistica finanziaria internazionale di cui la banca si avvale (attualmente la societ\u00E0 SWIFT). A tali trattamenti si applicano le rigorose garanzie previste dall\u2019Accordo sia in relazione all\u2019integrit\u00E0 e sicurezza dei dati che ai tempi di conservazione degli stessi. L\u2019Accordo prevede, inoltre, che il diritto di accesso venga esercitato dall\u2019interessato esclusivamente presso l\u2019Autorit\u00E0 di protezione dei dati personali del proprio Paese: in Italia, l\u2019Autorit\u00E0 Garante per la protezione dei dati personali (sito internet : <a href=\"http://www.garanteprivacy.it\" target=\"_blank\">www.garanteprivacy.it</a>)</p>";
        this._modalPrivacyText = "\n      Se il cliente lo desidera pu\u00F2 aggiornare i consensi privacy espressi. Puoi cogliere l\u2019occasione per presentargli il vantaggio di essere sempre aggiornato sui prodotti e servizi offerti dalle nostre aziende. Ricorda: l\u2019aggiornamento dei consensi privacy \u00E8 facoltativo e non impedisce di portare a termine l\u2019operazione.";
        this._modalPrivacyIsOpened = false;
        this._modalPrivacySize = exports.NbpSize.MD;
        this._buttonAnnullaDisabled = false;
        this._buttonStampaDisabled = true;
        this._buttonConfermaDisabled = false;
    }
    CjPrivacyFormComponent.prototype.ngOnInit = function () {
        this._privacy = Object.assign({}, this.cjPrivacy);
        if (!this._privacy.c2 || !this._privacy.c3 || !this._privacy.c4) {
            this._modalPrivacyIsOpened = true;
        }
        this._modalPrivacyButton = [
            { id: 'okModal', label: 'Ok', disabled: false, visible: true, style: exports.NbpStyle.PRIMARY }
        ];
    };
    CjPrivacyFormComponent.prototype.ngOnChanges = function (changes) {
        this._privacy = Object.assign({}, changes.cjPrivacy.currentValue);
    };
    CjPrivacyFormComponent.prototype._updateButtonDisable = function () {
        this._buttonAnnullaDisabled = false;
        this._buttonStampaDisabled = false;
        this._buttonConfermaDisabled = true;
    };
    CjPrivacyFormComponent.prototype._onClickAnnulla = function (privacy) {
        this._buttonAnnullaDisabled = false;
        this._buttonStampaDisabled = true;
        this._buttonConfermaDisabled = false;
        this.cjOnAnnulla.emit(privacy);
    };
    CjPrivacyFormComponent.prototype._onClickStampa = function (privacy) {
        this._buttonAnnullaDisabled = true;
        this._buttonStampaDisabled = true;
        this._buttonConfermaDisabled = false;
        this.cjOnStampa.emit(privacy);
    };
    CjPrivacyFormComponent.prototype._onClickContinua = function (privacy) {
        this._buttonAnnullaDisabled = false;
        this._buttonStampaDisabled = true;
        this._buttonConfermaDisabled = false;
        this.cjOnContinua.emit(privacy);
    };
    CjPrivacyFormComponent.prototype._modalPrivacyOnOk = function (event) {
        this._modalPrivacyIsOpened = false;
    };
    return CjPrivacyFormComponent;
}());
__decorate$57([
    _angular_core.Input(),
    __metadata$52("design:type", Object)
], exports.CjPrivacyFormComponent.prototype, "cjPrivacy", void 0);
__decorate$57([
    _angular_core.Output(),
    __metadata$52("design:type", _angular_core.EventEmitter)
], exports.CjPrivacyFormComponent.prototype, "cjOnStampa", void 0);
__decorate$57([
    _angular_core.Output(),
    __metadata$52("design:type", _angular_core.EventEmitter)
], exports.CjPrivacyFormComponent.prototype, "cjOnContinua", void 0);
__decorate$57([
    _angular_core.Output(),
    __metadata$52("design:type", _angular_core.EventEmitter)
], exports.CjPrivacyFormComponent.prototype, "cjOnAnnulla", void 0);
exports.CjPrivacyFormComponent = __decorate$57([
    _angular_core.Component({
        selector: 'cj-privacy-form',template: "<div class=\"col-xs-offset-2 col-sm-offset-2 col-md-offset-2 col-xs-20 col-sm-20 col-md-20\"><h3 class=\"text-center green-text\">Informativa Privacy</h3><p class=\"text-center\">Compila il questionario di seguito riportato ai fini della normativa privacy</p><nbp-panel><nbp-dividing-line></nbp-dividing-line><div class=\"row col-xs-offset-2 col-sm-offset-2 col-md-offset-2 col-xs-20 col-sm-20 col-md-20 mrg-b-20\">Dati aggiornati al {{_privacy.date | date: 'dd/MM/yyyy'}}</div><div class=\"row col-xs-offset-2 col-sm-offset-2 col-md-offset-2 col-xs-20 col-sm-20 col-md-20 mrg-b-20 gray-text\"><strong>Per procedere &egrave; necessario prendere visione dell&#180;INFORMATIVA GENERALE AI SENDI DELL&#180;ART. 13 DEL D.LGS. 196&#92;2003 (Codice in materia di protezione dei dati personali)</strong></div><div class=\"row col-xs-offset-2 col-sm-offset-2 col-md-offset-2 col-xs-20 col-sm-20 col-md-20 mrg-b-20 text-box scrollable\" [innerHtml]=\"_privacyText\"></div><div class=\"row col-xs-offset-2 col-sm-offset-2 col-md-offset-2 col-xs-20 col-sm-20 col-md-20 mrg-b-20\"><div class=\"col-xs-24\"><strong>C1</strong></div><div class=\"col-xs-24 mrg-b-10\">Tenuto conto dell&#180;informativa resa ai sensi dell&#180;art. 13 del D.Lgs. 196/2003 sulla protezione dei dati personali prendo atto del trattamento dei miei dati personali effettuato per le finalit&agrave; descritte in informativa alle lettere a) e b) del paragrafo &#8220;Finalit&agrave; del trattamento dei dati&#8221;</div></div><div class=\"row col-xs-offset-2 col-sm-offset-2 col-md-offset-2 col-xs-20 col-sm-20 col-md-20 mrg-b-20\"><div class=\"col-xs-24 col-sm-24 col-md-24\"><strong>C2</strong></div><div class=\"col-xs-24 col-sm-24 col-md-24 mrg-b-10\">Al trattamento dei dati personali ai fini di informazione commerciale, offerte dirette o indagini di mercato relative ai prodotti e servizi della Banca e di societ&agrave; del Gruppo Intesa SanPaolo.</div><div id=\"c2radioContainer\" class=\"col-xs-offset-8 col-sm-offset-8 col-md-offset-8\"><nbp-tooltip nbpPosition=\"Left\" nbpText=\"I consensi commerciali rispondono ad una libera scelta del cliente, sono facoltativi e non bloccanti per l&#180;operativit&agrave; \"><nbp-radio name=\"c2\" nbpLabel=\"Presta il consenso\" [value]=\"true\" [(ngModel)]=\"_privacy.c2\" (change)=\"_updateButtonDisable()\" nbpDisplayInline></nbp-radio></nbp-tooltip><nbp-radio name=\"c2\" nbpLabel=\"Non Presta il consenso\" [value]=\"false\" [(ngModel)]=\"_privacy.c2\" (change)=\"_updateButtonDisable()\" nbpDisplayInline></nbp-radio></div></div><div class=\"row col-xs-offset-2 col-sm-offset-2 col-md-offset-2 col-xs-20 col-sm-20 col-md-20 mrg-b-20\"><div class=\"col-xs-24 col-sm-24 col-md-24\"><strong>C3</strong></div><div class=\"col-xs-24 col-sm-24 col-md-24 mrg-b-10\">Al trattamento dei dati personali ai fini dell&#180;offerta di prodotti e servizi della Banca e di societ&agrave; del Gruppo Intesa SanPaolo specificatamente individuati in base al profilo personale.</div><div id=\"c3radioContainer\" class=\"col-xs-offset-8 col-sm-offset-8 col-md-offset-8\"><nbp-tooltip nbpPosition=\"Left\" nbpText=\"I consensi commerciali rispondono ad una libera scelta del cliente, sono facoltativi e non bloccanti per l&#180;operativit&agrave; \"><nbp-radio name=\"C3\" nbpLabel=\"Presta il consenso\" [value]=\"true\" [(ngModel)]=\"_privacy.c3\" (change)=\"_updateButtonDisable()\" nbpDisplayInline></nbp-radio></nbp-tooltip><nbp-radio name=\"C3\" nbpLabel=\"Non Presta il consenso\" [value]=\"false\" [(ngModel)]=\"_privacy.c3\" (change)=\"_updateButtonDisable()\" nbpDisplayInline></nbp-radio></div></div><div class=\"row col-xs-offset-2 col-sm-offset-2 col-md-offset-2 col-xs-20 col-sm-20 col-md-20 mrg-b-20\"><div class=\"col-xs-24 col-sm-24 col-md-24\"><strong>C4</strong></div><div class=\"col-xs-24 col-sm-24 col-md-24 mrg-b-10\">Al trattamento dei dati personali a fini di informazione commerciale, offerte dirette o indagini di mercato relative a prodotti e servizi di altre societ&agrave;.</div><div id=\"c4radioContainer\" class=\"col-xs-offset-8 col-sm-offset-8 col-md-offset-8\"><nbp-tooltip nbpPosition=\"Left\" nbpText=\"I consensi commerciali rispondono ad una libera scelta del cliente, sono facoltativi e non bloccanti per l&#180;operativit&agrave; \"><nbp-radio name=\"c4\" nbpLabel=\"Presta il consenso\" [value]=\"true\" [(ngModel)]=\"_privacy.c4\" (change)=\"_updateButtonDisable()\" nbpDisplayInline></nbp-radio></nbp-tooltip><nbp-radio name=\"c4\" nbpLabel=\"Non Presta il consenso\" [value]=\"false\" [(ngModel)]=\"_privacy.c4\" (change)=\"_updateButtonDisable()\" nbpDisplayInline></nbp-radio></div></div><div class=\"row col-xs-offset-2 col-sm-offset-2 col-md-offset-2 col-xs-20 col-sm-20 col-md-20 mrg-b-20\"><div class=\"col-xs-24 col-sm-24 col-md-24\"><strong>C6</strong></div><div class=\"col-xs-24 col-sm-24 col-md-24 mrg-b-10\">Al trattamento dei dati sensibili a me riferiti, da parte dei soggetti sopra indicati.</div><div id=\"c6radioContainer\" class=\"col-xs-offset-8 col-sm-offset-8 col-md-offset-8\"><nbp-radio name=\"c6\" nbpLabel=\"Presta il consenso\" [value]=\"true\" [(ngModel)]=\"_privacy.c6\" (change)=\"_updateButtonDisable()\" nbpDisplayInline></nbp-radio><nbp-radio name=\"c6\" nbpLabel=\"Non Presta il consenso\" [value]=\"false\" [(ngModel)]=\"_privacy.c6\" (change)=\"_updateButtonDisable()\" nbpDisplayInline></nbp-radio></div></div></nbp-panel><div class=\"row col-xs-24 col-sm-24 col-md-24\"><div class=\"col-xs-3 col-sm-3 col-md-3 col-xs-offset-2 col-sm-offset-2 col-md-offset-2\"><nbp-button nbpLabel=\"Annulla\" [disabled]=\"_buttonAnnullaDisabled\" [nbpStyle]=\"_buttonStyle.SECONDARY\" (nbpClick)=\"_onClickAnnulla(_privacy)\"></nbp-button></div><div class=\"col-xs-3 col-sm-3 col-md-3 col-xs-offset-10 col-sm-offset-10 col-md-offset-10\"><nbp-tooltip nbpVisibilityStrategy=\"click\" [nbpSize]=\"_modalPrivacySize\" nbpPosition=\"Left\" nbpText=\"In corso di implementazione\"><nbp-button class=\"pull-right\" nbpLabel=\"Stampa\" [disabled]=\"_buttonStampaDisabled\" [nbpStyle]=\"_buttonStyle.PRIMARY\" (nbpClick)=\"_onClickStampa(_privacy)\"></nbp-button></nbp-tooltip></div><div class=\"col-xs-3 col-sm-3 col-md-3 col-xs-offset-1 col-sm-offset-1 col-md-offset-1\"><nbp-tooltip nbpVisibilityStrategy=\"click\" [nbpSize]=\"_modalPrivacySize\" nbpPosition=\"Left\" nbpText=\"In corso di implementazione\"><nbp-button nbpLabel=\"Continua\" [disabled]=\"_buttonConfermaDisabled\" [nbpStyle]=\"_buttonStyle.PRIMARY\" (nbpClick)=\"_onClickContinua(_privacy)\"></nbp-button></nbp-tooltip></div></div><nbp-modal id=\"privacyModal\" [(nbpOpened)]=\"_modalPrivacyIsOpened\" [nbpButtons]=\"_modalPrivacyButton\" [nbpSize]=\"_modalPrivacySize\" (nbpOnButtonClicked)=\"_modalPrivacyOnOk($event)\">{{_modalPrivacyText}}</nbp-modal></div>",
        styles: [".text-box{max-height:200px;background-color:#f8f8f8;padding:5px}.text-box.scrollable{overflow-y:scroll}.gray-text{color:#636060}.green-text{color:#258900} /*# sourceMappingURL=cj-privacy-form.component.css.map */ "]
    }),
    __metadata$52("design:paramtypes", [])
], exports.CjPrivacyFormComponent);

var __decorate$60 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$55 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$12 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Client Http per recuperare le informazioni di privacy
 */
exports.CjNdgClientService = (function () {
    function CjNdgClientService(config, http) {
        this.config = config;
        this.http = http;
        // da usare quando avremo gli indirizzi veri dei servizi rest
        // private cjBaseUrl = '';
        this.headers = new _angular_common_http.HttpHeaders().set('Content-Type', 'application/json');
    }
    CjNdgClientService.prototype.getPrivacyByNdg = function (ndg) {
        var _this = this;
        return this.config.getNpuServicesBaseUrl()
            .concatMap(function (url) {
            return _this.http.get(url + ("clienti/" + ndg + "/privacy"), { headers: _this.headers });
        });
    };
    return CjNdgClientService;
}());
exports.CjNdgClientService = __decorate$60([
    _angular_core.Injectable(),
    __param$12(0, _angular_core.Inject(APP_CONFIG)),
    __metadata$55("design:paramtypes", [Object, _angular_common_http.HttpClient])
], exports.CjNdgClientService);

var __decorate$59 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$54 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Servizio utilizzato per recuperare le informazioni di contesto
 *
 */
exports.CjNdgService = (function () {
    function CjNdgService(cjNdgClient) {
        this.cjNdgClient = cjNdgClient;
        this.privacy = {
            ndg: '',
            date: new Date(),
            c2: null,
            c3: null,
            c4: null,
            c6: null
        };
    }
    /**
     * Restituisce le informazioni di privacy a partire dall'ndg, chiamando il servizio rest dedicato.
     * @param  string ndg
     * @return ICjPrivacy
     */
    CjNdgService.prototype.getPrivacyByNdg = function (ndg) {
        return this.cjNdgClient.getPrivacyByNdg(ndg);
    };
    
    /**
     * Salva i consensi privacy compilati tramite form.
     * @param  {ICjPrivacy} privacy
     * @return ICjPrivacy
     */
    CjNdgService.prototype.savePrivacy = function (privacy) {
        return this.privacy;
    };
    
    /**
     * Stampa i consensi privacy compilati tramite form.
     * @param  {ICjPrivacy} privacy
     * @return any (?)
     */
    CjNdgService.prototype.printPrivacy = function (privacy) {
        return true;
    };
    
    return CjNdgService;
}());
exports.CjNdgService = __decorate$59([
    _angular_core.Injectable(),
    __metadata$54("design:paramtypes", [exports.CjNdgClientService])
], exports.CjNdgService);

var __decorate$58 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$53 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$11 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.CjPrivacyComponent = (function () {
    function CjPrivacyComponent(ndgService, route) {
        this.ndgService = ndgService;
        this.route = route;
        /**
         * Evento emesso al click dei pulsanti
         * @param {EventEmitter<any>}  cjOnDone
         */
        this.cjOnDone = new _angular_core.EventEmitter();
    }
    CjPrivacyComponent.prototype.ngOnInit = function () {
        this._getCjNdg();
        console.log('Parametro NDG: ', this.cjNdgParam);
        console.log('Parametro NDG da url: ', this.cjNdgUrlParam);
    };
    CjPrivacyComponent.prototype._getCjNdg = function () {
        var _this = this;
        if (this.route) {
            if (!this.cjNdgParam) {
                // controllo che esista l'url param
                if (this.cjNdgUrlParam) {
                    // recupero dall'url il parametro da passare al servizio
                    this.route.params.subscribe(function (params) {
                        _this.cjNdgParam = params[_this.cjNdgUrlParam];
                        _this._obtainNdg();
                    });
                }
                else {
                    console.log('WARNING - Componente CjPrivacy - senza cjNdgParam e senza cjNdgUrlParam.');
                }
            }
            else {
                this._obtainNdg();
            }
        }
        else {
            if (!this.cjNdgParam) {
                console.log("WARNING - Recupero ndg da urlParam non disponibile");
            }
            else {
                this._obtainNdg();
            }
        }
    };
    CjPrivacyComponent.prototype._obtainNdg = function () {
        this._privacyDataStream = this.ndgService.getPrivacyByNdg(this.cjNdgParam);
        this._privacyDataStream.subscribe(function (privacy) {
            console.log('dati da service: ', JSON.stringify(privacy));
        });
    };
    CjPrivacyComponent.prototype._onPrint = function (event) {
        // TODO: chiamata al servizio di stampa e salvataggio consensi
        console.log('Click su pulsante Stampa: chiamata alle funzioni di Stampa e Salva');
        this.cjOnDone.emit(event);
    };
    CjPrivacyComponent.prototype._onContinue = function (event) {
        // Chiusura della pagina
        console.log('Click su pulsante Continua: chiusura pagina');
        this.cjOnDone.emit(event);
    };
    CjPrivacyComponent.prototype._onCancel = function (event) {
        // Chiusura della pagina
        console.log('Click su pulsante Annulla: chiusura pagina');
        this.cjOnDone.emit(event);
    };
    return CjPrivacyComponent;
}());
__decorate$58([
    _angular_core.Input(),
    __metadata$53("design:type", String)
], exports.CjPrivacyComponent.prototype, "cjNdgParam", void 0);
__decorate$58([
    _angular_core.Input(),
    __metadata$53("design:type", String)
], exports.CjPrivacyComponent.prototype, "cjNdgUrlParam", void 0);
__decorate$58([
    _angular_core.Output(),
    __metadata$53("design:type", _angular_core.EventEmitter)
], exports.CjPrivacyComponent.prototype, "cjOnDone", void 0);
exports.CjPrivacyComponent = __decorate$58([
    _angular_core.Component({
        selector: 'cj-privacy',template: "<cj-privacy-form [cjPrivacy]=\"_privacyDataStream | async\" (cjOnStampa)=\"_onPrint($event)\" (cjOnContinua)=\"_onContinue($event)\" (cjOnAnnulla)=\"_onCancel($event)\"></cj-privacy-form>"
    }),
    __param$11(1, _angular_core.Optional()),
    __metadata$53("design:paramtypes", [exports.CjNdgService, _angular_router.ActivatedRoute])
], exports.CjPrivacyComponent);

var __decorate$61 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$56 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CjTimingInterceptor = (function () {
    function CjTimingInterceptor() {
    }
    CjTimingInterceptor.prototype.intercept = function (req, next) {
        var started = Date.now();
        return next
            .handle(req)
            .do(function (event) {
            if (event instanceof _angular_common_http.HttpResponse) {
                var elapsed = Date.now() - started;
                console.debug("Request for " + req.urlWithParams + " took " + elapsed + " ms.");
            }
        });
    };
    return CjTimingInterceptor;
}());
CjTimingInterceptor = __decorate$61([
    _angular_core.Injectable(),
    __metadata$56("design:paramtypes", [])
], CjTimingInterceptor);
var CjErrorInterceptor = (function () {
    function CjErrorInterceptor() {
    }
    CjErrorInterceptor.prototype.intercept = function (req, next) {
        return next
            .handle(req)
            .do(function (event) {
            if (event instanceof _angular_common_http.HttpErrorResponse) {
                console.error("Request error " + req.url + " throw error " + event.error + ".");
            }
        });
    };
    return CjErrorInterceptor;
}());
CjErrorInterceptor = __decorate$61([
    _angular_core.Injectable(),
    __metadata$56("design:paramtypes", [])
], CjErrorInterceptor);

var __decorate$62 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$57 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CjShoppingCartProductComponent = (function () {
    function CjShoppingCartProductComponent() {
        var _this = this;
        this._popoverSize = exports.NbpSize;
        /**
         * evento emesso alla pressione del link presente nel tooltip visualizzato sulla 'lente'
         * @param EventEmitter<IShoppingCartProduct>  cjOnGotoCardProduct [description]
         */
        this.cjOnGotoCardProduct = new _angular_core.EventEmitter();
        /**
         * evento emesso alla pressione dell'icona destra (icona di default 'cestino')
         * @param EventEmitter<IShoppingCartEvent> cjOnClickRightIcon
         */
        this.cjOnClickRightIcon = new _angular_core.EventEmitter();
        /**
         * evento emesso al click del link presente nel popover che viene aperto alla pressione del pulsante sinistro
         * (icona di default 'lente ingrandimento zoom').
         * @param EventEmitter<IShoppingCartEvent> cjOnClickLeftIconLink
         */
        this.cjOnClickLeftIconLink = new _angular_core.EventEmitter();
        /**
         * evento emesso alla pressione della link 'promo >' per la visualizzazione delle info dettagliate
         * @param EventEmitter<IShoppingCartEvent> cjOnClickPromo
         */
        this.cjOnClickPromo = new _angular_core.EventEmitter();
        this._iconLeft = this.fillIconStructure('ico-comuni-zoom');
        this._iconRight = this.fillIconStructure('ico-azioni-elimina-cestino');
        this._productStyle = 'standard';
        this._sendEventOnClickPopoverLink = function () {
            console.log('CjShoppingCartProductComponent - Emit evet: cjOnClickLeftIconLink');
            console.dir(_this._myEventInfo);
            _this.cjOnClickLeftIconLink.emit(_this._myEventInfo);
        };
    }
    Object.defineProperty(CjShoppingCartProductComponent.prototype, "cjReadOnly", {
        /**
         * Permette di impostare la visualizzazione in sola lettura del prodotto, nascondendo i pulsanti di eliminazione e dettaglio
         */
        get: function () {
            return this._cjReadOnly;
        },
        set: function (value) {
            this._cjReadOnly = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    CjShoppingCartProductComponent.prototype.ngOnInit = function () {
        if (this.cjData.iconLeft) {
            this._iconLeft = this.fillIconStructure('ico-comuni-zoom', this.cjData.iconLeft);
        }
        if (this.cjData.iconRight) {
            this._iconRight = this.fillIconStructure('ico-azioni-elimina-cestino', this.cjData.iconRight);
        }
        this._myEventInfo = {
            productId: this.cjData.id,
            current: this
        };
        if (this._iconLeft && this._iconLeft.tooltip) {
            this.popoverData = { popoverData: {
                    title: this._iconLeft.tooltip.title,
                    clickableText: this._iconLeft.tooltip.clickableText,
                    text: this._iconLeft.tooltip.text,
                    onClick: this._sendEventOnClickPopoverLink
                }
            };
        }
    };
    CjShoppingCartProductComponent.prototype.fillIconStructure = function (defaultIcon, iconDataSrc) {
        var iconDataDest = {};
        if (iconDataSrc) {
            iconDataDest['icon'] = iconDataSrc.icon ? iconDataSrc.icon : defaultIcon;
            iconDataDest['hide'] = iconDataSrc.hide ? iconDataSrc.hide : false;
            iconDataDest['tooltip'] = iconDataSrc.tooltip ? iconDataSrc.tooltip : null;
        }
        else {
            iconDataDest['icon'] = defaultIcon;
            iconDataDest['hide'] = false;
            iconDataDest['tooltip'] = null;
        }
        return iconDataDest;
    };
    CjShoppingCartProductComponent.prototype._getProductStyle = function () {
        if (!this.cjData) {
            return this._productStyle;
        }
        if (this.cjData.promo) {
            return (this._productStyle = 'promo');
        }
        if (this.cjData.covenant) {
            return (this._productStyle = 'convenant');
        }
        return this._productStyle = 'standard';
    };
    CjShoppingCartProductComponent.prototype._onClickRightIcon = function () {
        console.log('CjShoppingCartProductComponent - Emit evet: cjOnClickRightIcon');
        console.dir(this._myEventInfo);
        this.cjOnClickRightIcon.emit(this._myEventInfo);
    };
    CjShoppingCartProductComponent.prototype._onGotoCardProduct = function () {
        console.log('CjShoppingCartProductComponent - Emit evet: cjOnGotoCardProduct');
        console.dir(this.cjData);
        this.cjOnGotoCardProduct.emit(this.cjData);
    };
    CjShoppingCartProductComponent.prototype._onClickPromo = function () {
        console.log('CjShoppingCartProductComponent - Emitting evet: cjOnClickPromo');
        console.dir(this._myEventInfo);
        this.cjOnClickPromo.emit(this._myEventInfo);
    };
    return CjShoppingCartProductComponent;
}());
__decorate$62([
    _angular_core.Input(),
    __metadata$57("design:type", Object)
], CjShoppingCartProductComponent.prototype, "cjData", void 0);
__decorate$62([
    _angular_core.Input(),
    __metadata$57("design:type", Boolean)
], CjShoppingCartProductComponent.prototype, "cjIsParentItem", void 0);
__decorate$62([
    _angular_core.Input(),
    __metadata$57("design:type", Object),
    __metadata$57("design:paramtypes", [Boolean])
], CjShoppingCartProductComponent.prototype, "cjReadOnly", null);
__decorate$62([
    _angular_core.Output(),
    __metadata$57("design:type", _angular_core.EventEmitter)
], CjShoppingCartProductComponent.prototype, "cjOnGotoCardProduct", void 0);
__decorate$62([
    _angular_core.Output(),
    __metadata$57("design:type", _angular_core.EventEmitter)
], CjShoppingCartProductComponent.prototype, "cjOnClickRightIcon", void 0);
__decorate$62([
    _angular_core.Output(),
    __metadata$57("design:type", _angular_core.EventEmitter)
], CjShoppingCartProductComponent.prototype, "cjOnClickLeftIconLink", void 0);
__decorate$62([
    _angular_core.Output(),
    __metadata$57("design:type", _angular_core.EventEmitter)
], CjShoppingCartProductComponent.prototype, "cjOnClickPromo", void 0);
CjShoppingCartProductComponent = __decorate$62([
    _angular_core.Component({selector: 'cj-shopping-cart-product',
        template: "<ng-template #popoverTemplate let-popoverData=\"popoverData\"><style>.title{ font-weight: bold; text-transform: uppercase; } .link{ color:goldenrod; font-weight: bold; cursor:pointer; user-select: none; }</style><div class=\"container-fluid\"><div class=\"row\"><div class=\"col-md-24 text-center title\">{{popoverData.title}}</div></div><div class=\"row\"><div class=\"col-md-24 content\"><p>{{popoverData.text}}</p></div></div><div class=\"row\"><div class=\"col-md-24 text-center\"><div class=\"link\" (click)=\"popoverData.onClick()\">{{popoverData.clickableText}} <span class=\"icon-arrow-right\"></span></div></div></div></div></ng-template><div [id]=\"cjData.id\" class=\"flexible-row shopping-cart--product\"><div class=\"icon-left-container\"><nbp-tooltip *ngIf=\"!cjReadOnly && !_iconLeft?.hide && !!popoverData\" nbpPosition=\"Left\" [nbpTemplate]=\"popoverTemplate\" [nbpTemplateData]=\"popoverData\" [nbpSize]=\"_popoverSize.MD\" nbpVisibilityStrategy=\"click\"><span *ngIf=\"!_iconLeft?.hide\" class=\"cell__icon\" [ngClass]=\"_iconLeft?.icon\"></span></nbp-tooltip></div><div class=\"center-container cell-product\"><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12 cell-product\"><div *ngIf=\"cjData.titleInfoLeft\" class=\"row firstLine\"><div *ngIf=\"cjData.titleInfoLeft.firstLine\" class=\"col-xs-24 col-sm-24 col-md-24 cell__font-md\" [ngClass]=\"{'cell__stroke':cjData.titleInfoLeft.firstLine.style}\">{{cjData.titleInfoLeft.firstLine.text}}</div></div><div *ngIf=\"cjData.titleInfoLeft\" class=\"row secondLine\"><div *ngIf=\"cjData.titleInfoLeft.secondLine\" class=\"col-xs-24 col-sm-24 col-md-24 cell__font-sm\" [ngClass]=\"{'cell__stroke':cjData.titleInfoLeft.secondLine.style}\">{{cjData.titleInfoLeft.secondLine.text}}</div></div></div><div *ngIf=\"cjData.quantity > 1\" class=\"col-xs-3 col-sm-3 col-md-3 quantity\">x{{cjData.quantity}}</div><div class=\"cell-product cell__text-right col-md-9 col-sm-9 col-xs-9\" [ngClass]=\"{'covenant-colour':!!cjData.covenant}\"><div *ngIf=\"cjData.titleInfoRight\" class=\"row firstLine\"><div *ngIf=\"cjData.titleInfoRight.firstLine\" class=\"col-xs-24 col-sm-24 col-md-24 pull-right cell__font-md\" [ngClass]=\"{'cell__stroke':cjData.titleInfoRight.firstLine.style}\">{{cjData.titleInfoRight.firstLine.text}}</div></div><div *ngIf=\"cjData.titleInfoRight\" class=\"row secondLine\"><div *ngIf=\"cjData.titleInfoRight.secondLine\" class=\"col-xs-24 col-sm-24 col-md-24 pull-right cell__font-sm\" [ngClass]=\"{'cell__stroke':cjData.titleInfoRight.secondLine.style}\">{{cjData.titleInfoRight.secondLine.text}}</div></div></div></div><div [ngSwitch]=\"_getProductStyle()\"><ng-template [ngSwitchCase]=\"'promo'\"><div class=\"row\"><div class=\"col-md-9 col-sm-9 col-xs-9 promo\" (click)=\"_onClickPromo()\">{{cjData.promo.title || 'promo'}} <span class=\"icon-arrow-right\"></span></div><div class=\"col-md-15 col-sm-15 col-xs-15 promo-desc cell__text-right\">{{cjData.promo.description}}</div></div></ng-template><ng-template [ngSwitchCase]=\"'convenant'\"><div class=\"row\"><div class=\"col-md-9 col-sm-9 col-xs-9 covenant covenant-colour\">{{cjData.covenant.title || 'convenzione '}}</div><div class=\"col-md-15 col-sm-15 col-xs-15 covenant-desc covenant-colour cell__text-right\">{{cjData.covenant.description}}</div></div></ng-template></div></div><div class=\"icon-right-container\"><span *ngIf=\"!cjReadOnly && !_iconRight?.hide\" class=\"cell__icon\" [ngClass]=\"_iconRight?.icon\" (click)=\"_onClickRightIcon()\"></span></div></div>",
        styles: [".shopping-cart--product{color:#323232;min-height:50px;padding:5px}.row{display:flex;align-items:center;justify-content:space-around}.flexible-row{display:flex;align-items:center;justify-content:space-around}[class*=col-]:not(.icon-left-container):not(.icon-right-container):not(.quantity){flex:1 1 auto;word-wrap:break-word}flexible-col{flex:1 1 auto;word-wrap:break-word}.quantity{flex:0 0 auto;background-color:#337a79;color:#fff;font-size:16px;height:24px;padding-left:0!important;padding-right:0!important;border-radius:12px;line-height:24px;text-align:center}.icon-left-container{flex:0 1 auto;max-width:35px;padding-right:5px!important;text-align:center}.icon-right-container{flex:0 1 auto;max-width:35px;padding-left:5px!important;text-align:center}.center-container{flex:1 1 auto;max-width:100%;padding:0!important}.cell__primary{font-weight:700}.cell__uppercase{text-transform:uppercase}.cell__font-md{font-size:14px}.cell__font-sm{font-size:12px}.cell__stroke{text-decoration:line-through}.cell__text-right{text-align:right}.cell__icon{font-size:25px;color:#258900;cursor:pointer}.cell__icon::before{vertical-align:middle}.firstLine{overflow:hidden}.secondLine{overflow:hidden}.promo{color:#258900;text-transform:uppercase;font:bold 12px arial;line-height:18px;padding-right:0!important;cursor:pointer}.promo .icon-arrow-right:before{text-align:right;vertical-align:middle;font-size:1em!important;font-weight:900!important}.promo-desc{color:#0094ca;letter-spacing:-.1px;font:bold 12px arial;line-height:16px;text-transform:capitalize}.covenant,.covenant-desc{text-transform:uppercase;font:bold 12px arial;line-height:16px}.covenant-colour{color:#b47dc2} /*# sourceMappingURL=cj-shopping-cart-product.component.css.map */ "]
    }),
    __metadata$57("design:paramtypes", [])
], CjShoppingCartProductComponent);

var __decorate$63 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$58 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.ShoppingCartUtility = (function () {
    function ShoppingCartUtility() {
    }
    ShoppingCartUtility.prototype._cloneObject = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    ShoppingCartUtility.prototype.getCartElementById = function (data, id) {
        if (!data || !id) {
            return null;
        }
        var objects = data.filter(function (object) {
            return object.id === id;
        });
        return objects.length ? objects[0] : null;
    };
    ShoppingCartUtility.prototype.addSection = function (cart, section, insertOnTop) {
        if (!cart || !section) {
            console.log("cjShoppingCartUtility.addSection: invalid parameters.");
            return cart;
        }
        var cartTemp = this._cloneObject(cart);
        if (!cartTemp.sections) {
            cartTemp.sections = new Array();
        }
        if (insertOnTop) {
            cartTemp.sections.unshift(section);
        }
        else {
            cartTemp.sections.push(section);
        }
        return cartTemp;
    };
    ShoppingCartUtility.prototype.removeSection = function (cart, sectionId) {
        if (!cart || !sectionId) {
            console.log("cjShoppingCartUtility.removeSection: invalid parameters.");
            return cart;
        }
        var cartTemp = this._cloneObject(cart);
        var sectionsTemp = cart.sections.filter(function (section) {
            return section.id !== sectionId;
        });
        cartTemp.sections = sectionsTemp;
        return cartTemp;
    };
    ShoppingCartUtility.prototype.addItemToSection = function (cart, sectionId, item, insertOnTop) {
        if (!cart || !sectionId || !item) {
            console.log("cjShoppingCartUtility.addItemToSection: invalid parameters.");
            return cart;
        }
        var cartTemp = this._cloneObject(cart);
        var sectionTemp = this.getCartElementById(cartTemp.sections, sectionId);
        if (sectionTemp) {
            if (!sectionTemp.items) {
                sectionTemp.items = new Array();
            }
            if (insertOnTop) {
                sectionTemp.items.unshift(item);
            }
            else {
                sectionTemp.items.push(item);
            }
        }
        else {
            console.log('CjShoppingCartUtility.addItemToSection: section ' + sectionId + ' not found.');
        }
        return cartTemp;
    };
    ShoppingCartUtility.prototype.removeItemFormSection = function (cart, sectionId, itemId) {
        if (!cart || !sectionId || !itemId) {
            console.log("cjShoppingCartUtility.removeItemFormSection: invalid parameters.");
            return cart;
        }
        var cartTemp = this._cloneObject(cart);
        var selectedSection = this.getCartElementById(cartTemp.sections, sectionId);
        if (selectedSection) {
            selectedSection.items = selectedSection.items.filter(function (item) {
                return item.id !== itemId;
            });
        }
        else {
            console.log('CjShoppingCartUtility.removeItemFromSection: section ' + sectionId + ' not found.');
        }
        return cartTemp;
    };
    ShoppingCartUtility.prototype.addProductToSection = function (cart, sectionId, product) {
        if (!cart || !sectionId || !product) {
            console.log("cjShoppingCartUtility.addProductToSection: invalid parameters.");
            return cart;
        }
        var cartTemp = this._cloneObject(cart);
        var selectedSection = this.getCartElementById(cartTemp.sections, sectionId);
        if (selectedSection) {
            if (!selectedSection.products) {
                selectedSection.products = [];
            }
            selectedSection.products.push(product);
        }
        else {
            console.log('CjShoppingCartUtility.addProductToSection: section ' + sectionId + ' not found.');
        }
        return cartTemp;
    };
    ShoppingCartUtility.prototype.removeProductFromSection = function (cart, sectionId, productId) {
        if (!cart || !sectionId || !productId) {
            console.log('cjShoppingCartUtility.removeProductFromSection: invalid parameters.');
            return cart;
        }
        var cartTemp = this._cloneObject(cart);
        var selectedSection = this.getCartElementById(cartTemp.sections, sectionId);
        if (selectedSection) {
            if (selectedSection.products) {
                var productsLength = selectedSection.products.length;
                selectedSection.products = selectedSection.products.filter(function (prod) {
                    return prod.id !== productId;
                });
                if (productsLength === selectedSection.products.length) {
                    console.log('cjShoppingCartUtility.removeProductFromSection: product ' + productId + 'not found.');
                }
            }
            else {
                console.log('cjShoppingCartUtility.removeProductFromSection: section ' + sectionId + ' does\'t contain any products.');
            }
        }
        else {
            console.log('cjShoppingCartUtility.removeProductFromSection: section ' + sectionId + 'not found.');
        }
        return cartTemp;
    };
    ShoppingCartUtility.prototype.addProductToItem = function (cart, sectionId, itemId, product) {
        if (!cart || !sectionId || !itemId || !product) {
            console.log('cjShoppingCartUtility.addProductToItem: invalid parameters.');
            return cart;
        }
        var cartTemp = this._cloneObject(cart);
        var selectedSection = this.getCartElementById(cartTemp.sections, sectionId);
        if (selectedSection) {
            var selectedItem = this.getCartElementById(selectedSection.items, itemId);
            if (selectedItem) {
                if (!selectedItem.products) {
                    selectedItem.products = new Array();
                }
                selectedItem.products.push(product);
            }
            else {
                console.log('cjShoppingCartUtility.addProductToItem: item ' + itemId + 'not found.');
            }
        }
        else {
            console.log('cjShoppingCartUtility.addProductToItem: section ' + sectionId + 'not found.');
        }
        return cartTemp;
    };
    ShoppingCartUtility.prototype.removeProductFromItem = function (cart, sectionId, itemId, productId) {
        if (!cart || !sectionId || !itemId || !productId) {
            console.log('cjShoppingCartUtility.removeProductFromItem: invalid parameters.');
            return cart;
        }
        var cartTemp = this._cloneObject(cart);
        var selectedSection = this.getCartElementById(cartTemp.sections, sectionId);
        if (selectedSection) {
            var selectedItem = this.getCartElementById(selectedSection.items, itemId);
            if (selectedItem) {
                if (selectedItem.products) {
                    var productsLength = selectedItem.products.length;
                    selectedItem.products = selectedItem.products.filter(function (product) {
                        return product.id !== productId;
                    });
                    if (productsLength === selectedSection.products.length) {
                        console.log('cjShoppingCartUtility.removeProductFromItem: product ' + productId + 'not found.');
                    }
                }
                else {
                    console.log('cjShoppingCartUtility.removeProductFromItem: section ' + sectionId + ' does\'t contain any products.');
                }
            }
            else {
                console.log('cjShoppingCartUtility.removeProductFromItem: item ' + itemId + 'not found.');
            }
        }
        else {
            console.log('cjShoppingCartUtility.removeProductFromItem: section ' + sectionId + 'not found.');
        }
        return cartTemp;
    };
    ShoppingCartUtility.prototype.getObjectById = function (data, id) {
        var objects = data.filter(function (object) {
            return object.id === id;
        });
        return objects.length ? objects[0] : null;
    };
    return ShoppingCartUtility;
}());
exports.ShoppingCartUtility = __decorate$63([
    _angular_core.Injectable(),
    __metadata$58("design:paramtypes", [])
], exports.ShoppingCartUtility);

var __extends$10 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$64 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$59 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.GlobalErrorHandlerService = (function (_super) {
    __extends$10(GlobalErrorHandlerService, _super);
    // TODO iniettare nel costrutture un ErrorNotifierService che sarà utilizzato per la gestione della logica di errore (log sul server e show dialog sul fe)
    function GlobalErrorHandlerService() {
        return _super.call(this) || this;
    }
    GlobalErrorHandlerService.prototype.handleError = function (globalError) {
        _super.prototype.handleError.call(this, globalError);
        console.group('Errore gestito globalmente');
        console.error(globalError);
        if (globalError instanceof _angular_common_http.HttpErrorResponse && globalError.status >= 300) {
            console.warn('TODO Gestire l\'errore http globalmente');
            // TODO fare la gestione dell'errore http
            if (globalError.error.errorMessage) {
                // TODO In questo caso la gestione dell'errore è specifica.
                console.dir(globalError.error);
            }
        }
        else {
            console.warn('TODO Gestire l\'errore di codice globalmente');
            // TODO fare la gestione dell'errore generico (eg. nullpointer)
        }
        console.groupEnd();
    };
    return GlobalErrorHandlerService;
}(_angular_core.ErrorHandler));
exports.GlobalErrorHandlerService = __decorate$64([
    _angular_core.Injectable(),
    __metadata$59("design:paramtypes", [])
], exports.GlobalErrorHandlerService);

var __decorate$65 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$60 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.CjRadioSelectionComponent = (function () {
    function CjRadioSelectionComponent() {
        /**
         * Evento emesso al click sui radio button
         * @param {EventEmitter<any>}  cjOnSelection
         */
        this.cjOnSelection = new _angular_core.EventEmitter();
    }
    CjRadioSelectionComponent.prototype.ngOnInit = function () { };
    CjRadioSelectionComponent.prototype.ngOnChanges = function (changes) {
        if (this.cjRadioList) {
            this._radioList = this.cjRadioList.length > 3 ? this.cjRadioList.slice(0, 3) : this.cjRadioList.slice();
        }
    };
    CjRadioSelectionComponent.prototype._onSelection = function (event) {
        // this.cjOnSelection.emit(event);
        var currentEventInfo = Object.assign({}, event);
        currentEventInfo['selection'] = this.cjData;
        console.log('CjRadioSelectionComponent - Emit: cjOnSelection', currentEventInfo);
        this.cjOnSelection.emit(currentEventInfo);
    };
    return CjRadioSelectionComponent;
}());
__decorate$65([
    _angular_core.Input(),
    __metadata$60("design:type", Array)
], exports.CjRadioSelectionComponent.prototype, "cjRadioList", void 0);
__decorate$65([
    _angular_core.Input(),
    __metadata$60("design:type", Object)
], exports.CjRadioSelectionComponent.prototype, "cjCustomerInfo", void 0);
__decorate$65([
    _angular_core.Input(),
    __metadata$60("design:type", String)
], exports.CjRadioSelectionComponent.prototype, "cjData", void 0);
__decorate$65([
    _angular_core.Output(),
    __metadata$60("design:type", _angular_core.EventEmitter)
], exports.CjRadioSelectionComponent.prototype, "cjOnSelection", void 0);
exports.CjRadioSelectionComponent = __decorate$65([
    _angular_core.Component({
        selector: 'cj-radio-selection',template: "<div *ngIf=\"cjCustomerInfo\" class=\"row\"><div class=\"col-xs-offset-4 col-sm-offset-4 col-md-offset-4\"><div class=\"customer-circle-info\">{{cjCustomerInfo.circleInfo}}</div><div class=\"customer-section-title\">Cliente:</div><div class=\"customer-section-info\">{{cjCustomerInfo.info}}</div></div></div><div class=\"row\"><div *ngFor=\"let elementList of _radioList\" class=\"col-xs-offset-2 col-sm-offset-2 col-md-offset-2\"><div class=\"row\" [hidden]=\"elementList.hide\"><span *ngIf=\"elementList.icon\" class=\"col-xs-4 col-sm-4 col-md-4 sign-icon\" [ngClass]=\"elementList.icon\"></span><nbp-radio name=\"offerta\" nbpSelectionSign=\"spunta\" nbpDisplayInline [disabled]=\"elementList.disabled\" [nbpLabel]=\"elementList.label\" [value]=\"elementList.value\" [(ngModel)]=\"cjData\" (change)=\"_onSelection($event)\"></nbp-radio></div></div></div>",
        styles: [".customer-section-title{font-size:1em;font-weight:700;padding-top:24px}.customer-section-info{font-size:1em;padding-top:6px}.sign-icon{font-size:1.9em}.customer-circle-info{width:40px;height:40px;border:1px solid #ccc;border-radius:40px;background:#fff;position:absolute;top:-20px;text-align:center;font-weight:700;padding-top:8px;color:#89bc72} /*# sourceMappingURL=cj-radio-selection.component.css.map */ "]
    }),
    __metadata$60("design:paramtypes", [])
], exports.CjRadioSelectionComponent);

var __decorate$66 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$61 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.CjSignSelectionComponent = (function () {
    function CjSignSelectionComponent() {
        /**
         * Evento emesso al click sui radio button di scelta modalita' firma
         * @param {EventEmitter<ICjRadioStructure>}  cjOnSignSelection
         */
        this.cjOnSignSelection = new _angular_core.EventEmitter();
    }
    CjSignSelectionComponent.prototype.ngOnInit = function () {
    };
    CjSignSelectionComponent.prototype._onPlaceSelection = function (event) {
        console.log('CjSignSelectionComponent: Luogo offerta. Aggiorno i radio button per la selezione firma.');
        console.log(event);
        this.cjSignRadios = (event.selection === 'sede') ?
            this.cjSignRadios = [
                {
                    label: 'Firma cartacea',
                    value: 'firmacome',
                    disabled: false,
                    hide: false,
                    icon: 'icomoon-Firma_4'
                },
                {
                    label: 'Firma grafometrica',
                    value: 'firmadove',
                    disabled: false,
                    hide: false,
                    icon: 'icomoon-Firma_3'
                }
            ] :
            this.cjSignRadios = [
                {
                    label: 'Firma digitale remota',
                    value: 'firmaDigitaleRemota',
                    disabled: false,
                    hide: false,
                    icon: 'icomoon-Firma_2'
                },
                {
                    label: 'Firma altro',
                    value: 'firmaAltro',
                    disabled: false,
                    hide: false,
                    icon: 'icomoon-Firma_3'
                },
                {
                    label: 'Firma altro remota',
                    value: 'firmaAltroRemota',
                    disabled: false,
                    hide: false,
                    icon: 'icomoon-Firma_2'
                }
            ];
    };
    CjSignSelectionComponent.prototype._onSignSelection = function (event) {
        this.cjOnSignSelection.emit(event);
        console.log('Tipo firma selezionato: ', event);
    };
    return CjSignSelectionComponent;
}());
__decorate$66([
    _angular_core.Input(),
    __metadata$61("design:type", Object)
], exports.CjSignSelectionComponent.prototype, "cjCustomer", void 0);
__decorate$66([
    _angular_core.Input(),
    __metadata$61("design:type", Array)
], exports.CjSignSelectionComponent.prototype, "cjPlaceRadios", void 0);
__decorate$66([
    _angular_core.Input(),
    __metadata$61("design:type", Array)
], exports.CjSignSelectionComponent.prototype, "cjSignRadios", void 0);
__decorate$66([
    _angular_core.Output(),
    __metadata$61("design:type", _angular_core.EventEmitter)
], exports.CjSignSelectionComponent.prototype, "cjOnSignSelection", void 0);
exports.CjSignSelectionComponent = __decorate$66([
    _angular_core.Component({
        selector: 'cj-sign-selection',template: "<div class=\"row sign-container\"><div class=\"col-xs-24 col-sm-6 col-md-6 sign-customer-section\"><cj-radio-selection [cjCustomerInfo]=\"cjCustomer\"></cj-radio-selection></div><div class=\"col-xs-24 col-sm-9 col-md-9 sign-place-section\"><cj-radio-selection [cjRadioList]=\"cjPlaceRadios\" [cjData]=\"_placeDataModel\" (cjOnSelection)=\"_onPlaceSelection($event)\"></cj-radio-selection></div><div class=\"col-xs-24 col-sm-9 col-md-9 sign-type-section\"><cj-radio-selection [cjRadioList]=\"cjSignRadios\" [cjData]=\"_signDataModel\" (cjOnSelection)=\"_onSignSelection($event)\"></cj-radio-selection></div></div>",
        styles: [".sign-container{padding-top:20px;padding-bottom:20px}.sign-customer-section{background-color:#fff;min-height:145px;border:1px solid #ccc}.sign-place-section{background-color:#f2f2f2;min-height:145px;border-top:1px solid #ccc;border-bottom:1px solid #ccc;border-right:1px solid #ccc;border-left:0 solid transparent;padding-top:10px}.sign-place-section:before{content:'';display:block;width:20px;height:20px;background-color:#f2f2f2;border-top:1px solid #ccc;border-left:1px solid #ccc;position:absolute;transform-origin:top left;transform:rotate(-45deg) translateX(-20px);top:34px;left:0}.sign-type-section{background-color:#e3e3e3;min-height:145px;border-top:1px solid #ccc;border-bottom:1px solid #ccc;border-right:1px solid #ccc;border-left:0 solid transparent;padding-top:10px}.sign-type-section:before{content:'';display:block;width:20px;height:20px;background-color:#e3e3e3;border-top:1px solid #ccc;border-left:1px solid #ccc;position:absolute;transform-origin:top left;transform:rotate(-45deg) translateX(-20px);top:34px;left:0}::ng-deep nbp-radio .radio-label{font-weight:300!important;font-size:1em!important;padding-top:10px}@media screen and (max-width:767px){.sign-place-section{border-top:0 solid transparent;border-left:1px solid #ccc!important}.sign-place-section:before{border-top:1px solid #ccc;border-right:1px solid #ccc;border-left:0 solid transparent;top:-15px;left:34px}.sign-type-section{border-top:0 solid transparent;border-left:1px solid #ccc!important}.sign-type-section:before{border-top:1px solid #ccc;border-right:1px solid #ccc;border-left:0 solid transparent;top:-15px;left:34px}} /*# sourceMappingURL=cj-sign-selection.component.css.map */ "]
    }),
    __metadata$61("design:paramtypes", [])
], exports.CjSignSelectionComponent);

var __decorate$45 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.CjModule = (function () {
    function CjModule() {
    }
    return CjModule;
}());
exports.CjModule = __decorate$45([
    _angular_core.NgModule({
        imports: [
            _angular_common.CommonModule,
            _angular_forms.FormsModule,
            exports.NbpModule,
            _angular_router.RouterModule,
            _angular_common_http.HttpClientModule
        ],
        declarations: [
            exports.CjBodyComponent,
            exports.CjWizardComponent,
            exports.CjWizardPageComponent,
            exports.CjWizardStepComponent,
            exports.CjPrivacyComponent,
            exports.CjPrivacyFormComponent,
            exports.CjShoppingCartComponent,
            CjShoppingCartElementComponent,
            CjShoppingCartProductComponent,
            exports.CjRadioSelectionComponent,
            exports.CjSignSelectionComponent
        ],
        entryComponents: [
            exports.CjWizardPageComponent
        ],
        providers: [
            exports.CjContextService,
            exports.CjContextClientService,
            exports.CjCustomContextClientService,
            exports.CjCustomContextService,
            CjWizardHelper,
            exports.CjNdgService,
            exports.CjNdgClientService,
            exports.ShoppingCartUtility,
            {
                provide: _angular_common_http.HTTP_INTERCEPTORS,
                useClass: CjTimingInterceptor,
                multi: true,
            },
            {
                provide: _angular_core.ErrorHandler,
                useClass: exports.GlobalErrorHandlerService
            }
        ],
        exports: [
            exports.CjBodyComponent,
            exports.CjWizardComponent,
            exports.CjWizardPageComponent,
            exports.CjWizardStepComponent,
            exports.CjPrivacyComponent,
            exports.CjPrivacyFormComponent,
            exports.CjShoppingCartComponent,
            exports.CjRadioSelectionComponent,
            exports.CjSignSelectionComponent
        ]
    })
], exports.CjModule);

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CJLIB_MODULES = [
    exports.NbpModule,
    exports.CjModule
];
exports.CjLibModule = (function () {
    function CjLibModule() {
    }
    return CjLibModule;
}());
exports.CjLibModule = __decorate([
    _angular_core.NgModule({
        imports: CJLIB_MODULES,
        exports: CJLIB_MODULES
    })
], exports.CjLibModule);

// export * from './core';
// export * from './forms/index';

exports.APP_CONFIG = APP_CONFIG;
exports.NbpAccordionEvent = NbpAccordionEvent;
exports.NbpDataSource = NbpDataSource;
exports.ICjCustomContextService = ICjCustomContextService;
exports.TestCjWizardContextSource = TestCjWizardContextSource;

Object.defineProperty(exports, '__esModule', { value: true });

})));
