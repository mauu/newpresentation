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
import { NbpAccordionEvent } from './nbp-accordion.interfaces';
import { NbpStyle } from './../nbp-commons/nbp-commons.enums';
var nextId = 0;
var NbpAccordionComponent = (function () {
    function NbpAccordionComponent() {
        this.id = "nbp-accordion-" + ++nextId;
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
        this.nbpStyle = NbpStyle.PRIMARY;
        /**
         * Evento emesso sul toggle del componente.
         * @param {EventEmitter<NbpAccordionEvent>}  nbpOnToggle
         */
        this.nbpOnToggle = new EventEmitter();
        this._style = NbpStyle;
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
        if (this.nbpStyle === NbpStyle.SECONDARY || this.nbpStyle === NbpStyle.OUTLINE) {
            this.nbpStyle = NbpStyle.PRIMARY;
        }
    };
    return NbpAccordionComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpAccordionComponent.prototype, "id", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpAccordionComponent.prototype, "nbpTitle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NbpAccordionComponent.prototype, "nbpCollapsed", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NbpAccordionComponent.prototype, "nbpStyle", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpAccordionComponent.prototype, "nbpIcon", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpAccordionComponent.prototype, "nbpOnToggle", void 0);
NbpAccordionComponent = __decorate([
    Component({
        selector: 'nbp-accordion',template: "<div class=\"panel nbp-panel-primary\" [ngClass]=\"{'panel-default': _style.DEFAULT === nbpStyle }\"><div class=\"panel-heading\" [ngClass]=\"{'panel-heading-round': isCollapsed()}\" role=\"tab\" [id]=\"id\" (click)=\"_toggleCollapse()\"><h4 class=\"panel-title\"><span class=\"icon accordion-icon\" [ngClass]=\"nbpIcon\" *ngIf=\"!!nbpIcon\"></span> <span class=\"title\" [ngClass]=\"{'accordion-title-icon':!!nbpIcon}\">{{nbpTitle}}</span> <a role=\"button\" class=\"collapsed pull-right\"><span [ngClass]=\"{'icon ico-comuni-freccia-accordion-apri':isCollapsed() , 'icon ico-comuni-freccia-accordion-chiudi':!isCollapsed()}\"></span></a></h4></div><div class=\"panel-collapse\" [ngClass]=\"{'in panel-open':!isCollapsed()}\"><div class=\"panel-body\"><ng-content></ng-content></div></div></div>",
        animations: [],
        styles: [".panel{border:none!important;border-radius:0!important;box-shadow:none}.panel .panel-open{background-color:#6f6f6f!important}.panel-heading{border:none!important;border-radius:2px 2px 0 0!important;box-shadow:none;background-color:#ccc!important;padding:1em 1.25em 1em 1.25em!important}.panel-heading:hover{background-color:#6f6f6f!important}.panel-heading.panel-heading-round{border-radius:2px 2px 2px 2px!important}.panel-heading .panel-title{color:#fff;font-weight:700;font-size:.875em!important;text-transform:uppercase}.panel-heading .accordion-arrow{color:#fff;position:relative;font-size:2em;margin-top:-.156em}.panel-heading .stringa{color:#fff;font-size:.875em!important;margin-right:1.875em;font-weight:700;font-family:arial}.panel-heading h4{margin:0;font-size:1em}.panel-body{border:none!important;box-shadow:none;background-color:#f2f2f2!important;border-radius:0 0 2px 2px!important}.panel-collapse{border:none!important;box-shadow:none;background-color:#f2f2f2!important;border-radius:0 0 2px 2px!important;max-height:0;transition:max-height .15s ease-out;overflow:hidden}.panel-collapse.in{max-height:1000em;transition:max-height .25s ease-in}.panelTitle{font-size:.875em;font-weight:700;text-transform:uppercse}.accordionIcon{font-size:32px;position:absolute;top:9px}.nbp-panel-primary>.panel-heading{background-color:#258900!important;position:relative}.nbp-panel-primary>.panel-heading:hover{background-color:#5ca740!important}.nbp-panel-primary>.panel-heading .accordion-icon{font-size:32px;position:absolute;top:9px}.nbp-panel-primary>.panel-heading>.panel-title{font-size:.875em;font-weight:700;text-transform:uppercse}.nbp-panel-primary>.panel-heading>.panel-title>.title{padding:2px 2px 2px 0}.nbp-panel-primary>.panel-heading>.panel-title .accordion-title-icon{padding:2px 2px 2px 52px!important;margin-bottom:10px}.nbp-panel-primary>.panel-heading>.panel-open{background-color:#5ca740!important}.panel-default>.panel-heading{background-color:#ccc!important}.panel-default>.panel-heading:hover{background-color:#6f6f6f!important}.panel-default>.panel-heading .accordion-icon{font-size:32px;position:absolute;top:9px}.panel-default>.panel-heading>.panel-title{font-size:.875em;font-weight:700;text-transform:uppercse}.panel-default>.panel-heading>.panel-title>.title{padding:2px 2px 2px 20px}.panel-default>.panel-heading>.panel-title .accordion-title-icon{padding:2px 2px 2px 52px!important;margin-bottom:10px}.panel-default>.panel-open{background-color:#6f6f6f!important}.contrasto-on .panel .panel-open{background-color:#fff!important;color:#000;border:1px solid #000!important}.contrasto-on .panel .panel-open .panel-title{color:#000}.contrasto-on .panel .panel-open .stringa{color:#000}.contrasto-on .panel .panel-open .accordion-arrow{color:#000}.contrasto-on .panel-heading{background-color:#000!important}.contrasto-on .panel-heading:hover{background-color:#fff!important;color:#000;border:1px solid #000!important}.contrasto-on .panel-heading:hover .panel-title{color:#000}.contrasto-on .panel-heading:hover .stringa{color:#000}.contrasto-on .panel-heading:hover .accordion-arrow{color:#000}.contrasto-on .panel-heading .panel-title{color:#fff}.contrasto-on .panel-heading .accordion-arrow{color:#fff}.contrasto-on .panel-heading .stringa{color:#fff}.contrasto-on .panel-body{background-color:#fff!important;border-top:none!important;border-right:2px solid #000!important;border-bottom:2px solid #000!important;border-left:2px solid #000!important;color:#000}.contrasto-on .accordion-green-header>.panel-heading{background-color:#000!important}.contrasto-on .accordion-green-header>.panel-heading:hover{background-color:#fff!important;color:#000;border:1px solid #000}.contrasto-on .accordion-green-header>.panel-open{background-color:#fff!important;color:#000;border:1px solid #000!important} /*# sourceMappingURL=nbp-accordion.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [])
], NbpAccordionComponent);
export { NbpAccordionComponent };
