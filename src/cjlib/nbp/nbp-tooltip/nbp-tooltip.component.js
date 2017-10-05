var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, TemplateRef, HostListener, ElementRef } from '@angular/core';
import { NbpSize } from './../nbp-commons/nbp-commons.enums';
import { coerceBooleanProperty } from './../../utility/lib-utility';
var NbpTooltipComponent = (function () {
    function NbpTooltipComponent(element) {
        this.element = element;
        this._tooltipSize = NbpSize;
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
        this.nbpSize = NbpSize.SM;
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
    ;
    ;
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
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpTooltipComponent.prototype, "nbpVisibilityStrategy", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpTooltipComponent.prototype, "nbpPosition", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NbpTooltipComponent.prototype, "nbpSize", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpTooltipComponent.prototype, "nbpText", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], NbpTooltipComponent.prototype, "nbpTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NbpTooltipComponent.prototype, "nbpTemplateData", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpTooltipComponent.prototype, "hidden", null);
__decorate([
    HostListener('document: click', ['$event.target']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HTMLElement]),
    __metadata("design:returntype", void 0)
], NbpTooltipComponent.prototype, "onClick", null);
NbpTooltipComponent = __decorate([
    Component({
        selector: 'nbp-tooltip',template: "<span [ngClass]=\"{ 'nbp-tooltip': _isVisibilityStrategyHover(), 'nbp-popover': !_isVisibilityStrategyHover() }\"><span (click)=\"_toggleVisibility()\" [class.clickable]=\"!_isVisibilityStrategyHover()\"><ng-content></ng-content></span><span [hidden]=\"hidden\" [ngClass]=\"{ 'tooltip-content': _isVisibilityStrategyHover(), 'popover-content': !_isVisibilityStrategyHover(), 'top':nbpPosition=='Top', 'bottom':nbpPosition=='Bottom', 'right':nbpPosition=='Right', 'left':nbpPosition=='Left', 'top-left':nbpPosition=='Top-Left', 'top-right':nbpPosition=='Top-Right', 'bottom-left':nbpPosition=='Bottom-Left', 'bottom-right':nbpPosition=='Bottom-Right',  'sm':nbpSize === _tooltipSize.SM,  'md':nbpSize === _tooltipSize.MD,  'lg':nbpSize === _tooltipSize.LG,  'opened': !_isVisibilityStrategyHover() && _isVisible }\"><span *ngIf=\"!nbpTemplate; else nbpTemplateContainer\" [ngClass]=\"{ 'tooltip-text': _isVisibilityStrategyHover() ,  'popover-text': !_isVisibilityStrategyHover() }\"><div class=\"row\"><div class=\"col-md-24\" [ngClass]=\"{'pad-b-12': !_isVisibilityStrategyHover()}\">{{nbpText}}</div></div></span><ng-template #nbpTemplateContainer [ngTemplateOutlet]=\"nbpTemplate\" [ngTemplateOutletContext]=\"nbpTemplateData\"></ng-template><div class=\"icon-position clickable\" *ngIf=\"!_isVisibilityStrategyHover()\"><span class=\"ico-azioni-elimina\" (click)=\"_close()\"></span></div></span></span>",
        styles: [".bottom .icon-position,.bottom-left .icon-position,.bottom-right .icon-position,.right .icon-position,.top .icon-position,.top-left .icon-position,.top-right .icon-position{position:absolute;top:5px;right:5px;color:#daa520;font-weight:700}.left .icon-position{position:absolute;top:5px;left:5px;color:#daa520;font-weight:700}.nbp-popover,.nbp-tooltip{position:relative;display:inline-block}.clickable{cursor:pointer}.nbp-popover .popover-content,.nbp-tooltip .tooltip-content{visibility:hidden;background-color:#323232;color:#fff;padding:5px 0;position:absolute;z-index:1;display:inline-block!important}.nbp-popover .popover-content .tooltip-text,.nbp-tooltip .tooltip-content .tooltip-text{text-align:center}.nbp-popover .popover-content .popover-text,.nbp-tooltip .tooltip-content .popover-text{text-align:center}.nbp-popover .popover-content.md,.nbp-tooltip .tooltip-content.md{width:350px}.nbp-popover .popover-content.sm,.nbp-tooltip .tooltip-content.sm{width:200px}.nbp-popover .popover-content.lg,.nbp-tooltip .tooltip-content.lg{width:500px}.nbp-popover .popover-content.right,.nbp-tooltip .tooltip-content.right{top:50%!important;left:100%!important;margin-left:10px;transform:translateY(-50%)}.nbp-popover .popover-content.right::after,.nbp-tooltip .tooltip-content.right::after{content:\"\";position:absolute;top:50%;right:100%;transform:translateY(-50%);border-top-width:10px;border-right-width:9px;border-bottom-width:10px;border-left-width:9px;border-style:solid;border-color:transparent #323232 transparent transparent}.nbp-popover .popover-content.left,.nbp-tooltip .tooltip-content.left{top:50%;right:100%;margin-right:10px;transform:translateY(-50%)}.nbp-popover .popover-content.left::after,.nbp-tooltip .tooltip-content.left::after{content:\"\";position:absolute;top:50%;left:100%;transform:translateY(-50%);border-top-width:10px;border-right-width:9px;border-bottom-width:10px;border-left-width:9px;border-style:solid;border-color:transparent transparent transparent #323232}.nbp-popover .popover-content.top,.nbp-tooltip .tooltip-content.top{bottom:100%;left:50%;margin-bottom:13px;transform:translateX(-50%)}.nbp-popover .popover-content.top::after,.nbp-tooltip .tooltip-content.top::after{content:\"\";position:absolute;top:100%;left:50%;transform:translateX(-50%);border-top-width:10px;border-right-width:12px;border-bottom-width:10px;border-left-width:12px;border-style:solid;border-color:#323232 transparent transparent transparent}.nbp-popover .popover-content.bottom,.nbp-tooltip .tooltip-content.bottom{top:100%;left:50%;margin-top:15px;transform:translateX(-50%)}.nbp-popover .popover-content.bottom::after,.nbp-tooltip .tooltip-content.bottom::after{content:\"\";position:absolute;bottom:100%;left:50%;transform:translateX(-50%);border-top-width:10px;border-right-width:12px;border-bottom-width:10px;border-left-width:12px;border-style:solid;border-color:transparent transparent #323232 transparent}.nbp-popover .popover-content.top-left,.nbp-tooltip .tooltip-content.top-left{bottom:100%;left:0;margin-bottom:15px}.nbp-popover .popover-content.top-left::after,.nbp-tooltip .tooltip-content.top-left::after{content:\"\";position:absolute;top:100%;left:5%;border-top-width:10px;border-right-width:12px;border-bottom-width:10px;border-left-width:12px;border-style:solid;border-color:#323232 transparent transparent transparent}.nbp-popover .popover-content.top-right,.nbp-tooltip .tooltip-content.top-right{bottom:100%;right:0;margin-bottom:15px}.nbp-popover .popover-content.top-right::after,.nbp-tooltip .tooltip-content.top-right::after{content:\"\";position:absolute;top:100%;right:5%;border-top-width:10px;border-right-width:12px;border-bottom-width:10px;border-left-width:12px;border-style:solid;border-color:#323232 transparent transparent transparent}.nbp-popover .popover-content.bottom-left,.nbp-tooltip .tooltip-content.bottom-left{top:100%;left:0;margin-top:15px}.nbp-popover .popover-content.bottom-left::after,.nbp-tooltip .tooltip-content.bottom-left::after{content:\"\";position:absolute;bottom:100%;left:5%;border-top-width:10px;border-right-width:12px;border-bottom-width:10px;border-left-width:12px;border-style:solid;border-color:transparent transparent #323232 transparent}.nbp-popover .popover-content.bottom-right,.nbp-tooltip .tooltip-content.bottom-right{top:100%;right:0;margin-top:15px}.nbp-popover .popover-content.bottom-right::after,.nbp-tooltip .tooltip-content.bottom-right::after{content:\"\";position:absolute;bottom:100%;right:5%;border-top-width:10px;border-right-width:12px;border-bottom-width:10px;border-left-width:12px;border-style:solid;border-color:transparent transparent #323232 transparent}.nbp-popover .popover-content.opened,.nbp-tooltip:hover .tooltip-content{visibility:visible} /*# sourceMappingURL=nbp-tooltip.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [ElementRef])
], NbpTooltipComponent);
export { NbpTooltipComponent };
