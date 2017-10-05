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
import { coerceBooleanProperty } from './../../utility/lib-utility';
var NbpNavigationHeaderComponent = (function () {
    function NbpNavigationHeaderComponent() {
        /**
         * Booleano per abilitare il tasto “Pagina precedente”
         */
        this.nbpShowPrevPage = false;
        /**
         * Evento emesso sul click dell'elemento nbpShowPrevPage
         */
        this.nbpPrevPage = new EventEmitter();
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
    ;
    ;
    NbpNavigationHeaderComponent.prototype.ngOnInit = function () {
    };
    NbpNavigationHeaderComponent.prototype.onClick = function () {
        this.nbpPrevPage.emit('nbpPrevPage');
    };
    return NbpNavigationHeaderComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpNavigationHeaderComponent.prototype, "nbpTitle", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpNavigationHeaderComponent.prototype, "nbpSectionTitle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NbpNavigationHeaderComponent.prototype, "nbpShowPrevPage", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpNavigationHeaderComponent.prototype, "nbpDisableSticky", null);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpNavigationHeaderComponent.prototype, "nbpPrevPage", void 0);
NbpNavigationHeaderComponent = __decorate([
    Component({
        selector: 'nbp-navigation-header',
        template: "<div class=\"header-overlay\" [ngClass]=\"{'sticky': !_nbpDisableSticky}\" id=\"header-overlay\"><div id=\"navigation-header-title\" class=\"page-title-container row\" [hidden]=\"!nbpSectionTitle || !nbpTitle\"><div class=\"titles\"><div class=\"page-overtitle\" [innerHTML]=\"nbpSectionTitle \" [hidden]=\"!nbpSectionTitle\"></div><div class=\"page-title\" [innerHTML]=\"nbpTitle \" [hidden]=\"!nbpTitle\"></div></div></div><div class=\"prev-page-btn-container\" [hidden]=\"!nbpShowPrevPage\"><div class=\"container\"><div class=\"prev-page-btn\"><span (click)=\"onClick()\" role=\"button\"><span class=\"prev-page-btn-arrow icomoon-Simboli_Risorsa-12\"></span> <span class=\"prev-page-btn-text\" [innerHTML]=\"'Pagina Precedente'\"></span></span></div></div></div></div>",styles: [".header-overlay{position:relative;top:0;left:0;width:100%;height:100%;background:#f2f2f2}.prev-page-btn-container{position:absolute;top:0;left:0;right:0;margin:0 auto}.prev-page-btn-container .container{display:table}.prev-page-btn-container .prev-page-btn{display:table-cell;height:3.125em;vertical-align:middle;color:#258900}.prev-page-btn-container .prev-page-btn .prev-page-btn-arrow{font-size:1.25em;vertical-align:middle}.prev-page-btn-container .prev-page-btn .prev-page-btn-text{font-size:.875em}.page-title-container{height:3.125em;display:table-cell;vertical-align:middle;border-bottom:1px solid #ccc}.page-title-container .titles{display:table;table-layout:fixed;width:100%}.page-overtitle{position:relative;font-size:.75em;text-align:center;margin-bottom:-.417em;text-transform:uppercase}.page-title{position:relative;font-size:1.125em;text-align:center;font-weight:700;margin:0;text-transform:uppercase}.page-subtitle{position:relative;font-size:.75em;text-align:center;margin-top:-.417em}.header-overlay.sticky{position:fixed;top:0;left:0!important;z-index:9999!important;height:inherit!important;width:inherit!important} /*# sourceMappingURL=nbp-navigation-header.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [])
], NbpNavigationHeaderComponent);
export { NbpNavigationHeaderComponent };
