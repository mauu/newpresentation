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
import { Component, Input, Output, Optional, Inject, EventEmitter, forwardRef, ViewChild, HostBinding, HostListener, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { coerceBooleanProperty, getPropertyValueByPath } from './../../utility/lib-utility';
import { NbpPipe } from './../nbp-commons/nbp-commons.enums';
import { NbpFormatterService } from './../../utility/nbp-formatter.service';
import { NbpInputElementBase } from './../nbp-commons/nbp-input-element-base';
import { trigger, state, style, animate, transition } from '@angular/animations';
/**
 * Provider Expression that allows nbp-combo to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
export var NBP_COMBO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NbpComboComponent; }),
    multi: true
};
export var NBP_INPUT_ELEMENT_BASE = {
    provide: NbpInputElementBase,
    useExisting: forwardRef(function () { return NbpComboComponent; }),
    multi: true
};
/** intero autogenerato usato per id unici per nbpCombo component */
var nextId = 0;
/**
 * Componente per la implementazione della combobox, supporta tutti gli attributi standard html per il tag input.
 * Personalizzabile per la gestione di currency grazie all'applicaizone di opportuni pipes
 * definiti dalla libreria.
 */
var NbpComboComponent = (function (_super) {
    __extends(NbpComboComponent, _super);
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
        _this.id = "nbp-combo-" + ++nextId;
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
        _this.select = new EventEmitter();
        /**
         * Evento emesso quando la dropdown viene chiuda
         */
        _this.dropdownClosed = new EventEmitter();
        /**
         * Evento emesso quando la dropdown viene aperta
         */
        _this.dropdownOpened = new EventEmitter();
        /**
          * (Opzionale) Funzione custom di validazione del campo
          */
        _this.nbpValidation = new EventEmitter();
        _this._dropdownVisible = false;
        _this._arrowClicked = false;
        _this._nbpPipe = NbpPipe;
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
    ;
    ;
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
    ;
    ;
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
                ;
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
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpComboComponent.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NbpComboComponent.prototype, "id", void 0);
__decorate([
    HostBinding('class.nbp-show-validation'),
    Input(),
    __metadata("design:type", Boolean)
], NbpComboComponent.prototype, "nbpShowValidation", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpComboComponent.prototype, "nbpErrorMessage", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpComboComponent.prototype, "disabled", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpComboComponent.prototype, "required", null);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpComboComponent.prototype, "placeholder", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpComboComponent.prototype, "nbpShowEmptyValue", null);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NbpComboComponent.prototype, "nbpDataSource", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpComboComponent.prototype, "nbpViewField", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpComboComponent.prototype, "nbpKeyField", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpComboComponent.prototype, "nbpHighlightedDefault", null);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NbpComboComponent.prototype, "nbpFilter", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NbpComboComponent.prototype, "nbpFilterArg", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpComboComponent.prototype, "nbpBindingToKeyField", null);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpComboComponent.prototype, "select", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NbpComboComponent.prototype, "dropdownClosed", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NbpComboComponent.prototype, "dropdownOpened", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpComboComponent.prototype, "nbpValidation", void 0);
__decorate([
    ViewChild(NgModel),
    __metadata("design:type", NgModel)
], NbpComboComponent.prototype, "model", void 0);
__decorate([
    HostListener('document: focusout', ['$event.target']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HTMLElement]),
    __metadata("design:returntype", void 0)
], NbpComboComponent.prototype, "onFocusout", null);
__decorate([
    HostListener('document: click', ['$event.target']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HTMLElement]),
    __metadata("design:returntype", void 0)
], NbpComboComponent.prototype, "onClick", null);
NbpComboComponent = __decorate([
    Component({
        selector: 'nbp-combo',template: "<div class=\"dropdown-container\"><input type=\"hidden\" [(ngModel)]=\"value\"><div class=\"dropdown-inner-container\"><input type=\"text\" [id]=\"id\" [name]=\"name\" [placeholder]=\"placeholder\" class=\"dropdown-input-box form-control\" [ngClass]=\"{ 'dropdown-input-box-green': _dropdownVisible || _focusActive, 'highlight-default':nbpHighlightedDefault, 'input-box-disabled': disabled}\" [value]=\"_getViewValue(value)\" [required]=\"required\" disabled=\"disabled\"> <button class=\"dropdown-button\" [ngClass]=\"{'collapse-disabled' : disabled}\" (click)=\"_onInputClick($event)\" (focus)=\"_focusActive = true;\" (focusout)=\"_focusActive = false;\"><span class=\"dropdown-button-border\"></span> <span [ngClass]=\"{'triangolo-bottom' : !_dropdownVisible, 'triangolo-top' : _dropdownVisible}\"></span></button></div><ul [@dropdownAnimationState]=\"_getDropdownState()\" [style.visibility]=\"_dropdownVisible ? 'visible' : 'hidden'\"><li *ngFor=\"let item of _nbpShadowData; let i = index\" (click)=\"_onSelectEvent(item)\" [ngClass]=\"{'active': _isOptionSelected(item), 'last': i === _nbpShadowData.length - 1  }\"><span>{{_getDropDownLabel(item) }}</span></li></ul></div>",
        styles: [":host{position:relative;display:block}:host(.ng-invalid.nbp-show-validation) .dropdown-input-box{border:2px solid #c63200!important;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}:host(.ng-invalid.nbp-show-validation) .dropdown-input-box:focus{border:2px solid #c63200!important}.highlight-default{border:2px solid #fce07f!important;outline:0;box-shadow:none!important}.dropdown-container{display:inline-block;position:relative;width:100%}.dropdown-container ul{opacity:1;background:#fff;border-top-width:0;border-right-color:#323232;border-right-style:solid;border-right-width:1px;border-bottom-color:#323232;border-bottom-style:solid;border-bottom-width:1px;border-left-color:#323232;border-left-style:solid;border-left-width:1px;border-radius:0 0 2px 2px;list-style:none;margin:0 0 .625em 0;padding:0;position:absolute;width:100%;z-index:1000;overflow-y:auto}.dropdown-container ul>li{cursor:pointer;min-height:3.125em;padding:17px 12px;border-bottom:1px solid #f2f2f2}.dropdown-container ul>li:hover{background:#c4dbbc}.dropdown-container ul>li.active{background:#89bc72}.dropdown-container ul>li.last{border-bottom:none}.dropdown-container ul.ng-hide-add{transition:all ease-out .25s}.dropdown-container ul.ng-hide-remove{transition:all ease-out .25s}.dropdown-container ul.ng-hide{opacity:0;max-height:0}.dropdown-inner-container{position:relative;z-index:999}.dropdown-label{color:#6f6f6f;font-size:1em;margin:0 0 0 .75em!important}.dropdown-input-box{margin:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:.375em 2.3em .375em 1em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#6f6f6f;border:1px solid #323232;border-radius:2px;font-size:1em!important;height:3.125em}.dropdown-input-box:focus{border:2px solid #89bc72;outline:0;box-shadow:none!important}.dropdown-input-box::-ms-clear{display:none}.dropdown-input-box:disabled{background-color:#fff!important;cursor:default;box-shadow:none!important}.dropdown-input-box.input-box-disabled{background-color:#fff!important;border:1px solid #6f6f6f;opacity:.5!important;cursor:not-allowed}.dropdown-input-box-green{border:2px solid #89bc72;outline:0;box-shadow:none!important}.dropdown-input-box-disabled{background-color:#fff!important;opacity:.5!important}.dropdown-button{display:table;position:absolute;top:0;right:0;width:2.5em;height:3.125em;text-align:center;color:#ccc;border-color:transparent;background-color:transparent!important}.dropdown-button span{display:table-cell;vertical-align:middle}.dropdown-button[role=\"\"]{cursor:default;opacity:.5}.dropdown-button.collapse-disabled{pointer-events:none}.dropdown-button.collapse-disabled .dropdown-button-border{border-left:1px solid #6f6f6f!important}.dropdown-button.collapse-disabled .triangolo-bottom{border-style:solid;border-width:8px 6.5px 0 6.5px;border-color:#6f6f6f transparent transparent transparent}.dropdown-button.collapse-disabled .triangolo-top{border-style:solid;border-width:0 6.5px 8px 6.5px;border-color:transparent transparent #6f6f6f transparent}.dropdown-button-border{position:absolute;display:inline-block;height:60%;top:20%;left:0;border-left:1px solid #323232}.has-error .dropdown-input-box{border:2px solid #c63200;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-error .dropdown-input-box:focus{border:2px solid #c63200}.dropdown-error-message{color:#c63200;font-size:1em;margin-top:.625em;margin-bottom:.625em;opacity:1}.dropdown-error-message.ng-hide-add{transition:all ease-out .25s}.dropdown-error-message.ng-hide-remove{transition:all ease-out .25s}.dropdown-error-message.ng-hide{opacity:0;margin-top:-.625em}.triangolo-top{width:0;height:0;border-style:solid;border-width:0 10px 10px 10px;border-color:transparent transparent #258900 transparent;display:inline-block!important}.triangolo-bottom{width:0;height:0;border-style:solid;border-width:10px 10px 0 10px;border-color:#258900 transparent transparent transparent;display:inline-block!important}.yellow-border{border:2px solid #fce07f} /*# sourceMappingURL=nbp-combo.component.css.map */ "],
        viewProviders: [NbpFormatterService],
        providers: [NBP_COMBO_CONTROL_VALUE_ACCESSOR, NBP_INPUT_ELEMENT_BASE],
        animations: [
            trigger('dropdownAnimationState', [
                state('expanded', style({ opacity: 1, visibility: 'visible' })),
                state('collapsed, void', style({ opacity: 0, visibility: 'hidden' })),
                transition('expanded => collapsed', animate('100ms ease-in')),
                transition('collapsed => expanded', animate('100ms ease-out'))
            ])
        ]
    }),
    __param(0, Optional()), __param(0, Inject(NG_VALIDATORS)),
    __param(1, Optional()), __param(1, Inject(NG_ASYNC_VALIDATORS)),
    __metadata("design:paramtypes", [Array, Array, NbpFormatterService,
        ElementRef])
], NbpComboComponent);
export { NbpComboComponent };
