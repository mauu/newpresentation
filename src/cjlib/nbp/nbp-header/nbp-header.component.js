var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ContentChild } from '@angular/core';
import { NbpChannel } from '../nbp-commons/nbp-commons.enums';
import { NbpBurgerMenuComponent } from './../nbp-burger-menu/nbp-burger-menu.component';
import { coerceBooleanProperty } from './../../utility/lib-utility';
var NbpHeaderComponent = (function () {
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
        this._nbpChannel = NbpChannel;
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
    ;
    ;
    NbpHeaderComponent.prototype._toogleMenu = function () {
        this._nbpMenuOpen = !this._nbpMenuOpen;
        if (this.innerMenu) {
            this.innerMenu.toggle();
        }
    };
    NbpHeaderComponent.prototype.ngAfterContentInit = function () {
        if (!this.nbpChannel) {
            this.nbpChannel = NbpChannel.ABC;
        }
        this._checkMenuPresence();
    };
    NbpHeaderComponent.prototype._checkMenuPresence = function () {
        this._nbpHideMenu = this.nbpChannel === NbpChannel.ABC || !this.innerMenu;
    };
    return NbpHeaderComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpHeaderComponent.prototype, "nbpName", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NbpHeaderComponent.prototype, "nbpChannel", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpHeaderComponent.prototype, "nbpDisableSticky", null);
__decorate([
    ContentChild(NbpBurgerMenuComponent),
    __metadata("design:type", NbpBurgerMenuComponent)
], NbpHeaderComponent.prototype, "innerMenu", void 0);
NbpHeaderComponent = __decorate([
    Component({
        selector: 'nbp-header',template: "<div class=\"header\" [ngClass]=\"{'navbar-fixed-top':!_nbpDisableSticky}\"><div class=\"navbar\" id=\"header-navbar\"><div class=\"container\" [ngClass]=\"{'container-slim': (nbpChannel===_nbpChannel.ABC)}\"><div class=\"navbar-logo\" *ngIf=\"nbpName\"><label *ngIf=\"nbpChannel!==_nbpChannel.ABC\" class=\"nome-applicativo\" [innerHTML]=\"nbpName\"></label><a class=\"navbar-logo-brand-small\" href=\"#/\"><span class=\"sr-only\">Intesa San Paolo</span></a></div><div class=\"navbar-logo\" *ngIf=\"!nbpName && nbpChannel!==_nbpChannel.ABC\"><a class=\"navbar-logo-brand\" href=\"#/\"><span class=\"sr-only\">Intesa San Paolo</span></a></div><div class=\"navbar-logo\" *ngIf=\"!nbpName && (nbpChannel===_nbpChannel.ABC)\"><a class=\"navbar-logo-brand-small\" href=\"#/\"><span class=\"sr-only\">Intesa San Paolo</span></a></div><div *ngIf=\"nbpChannel!==_nbpChannel.ABC\" class=\"navbar-hole\"><div><ng-content></ng-content></div></div><div *ngIf=\"nbpChannel===_nbpChannel.ABC\" class=\"navbar-info-cliente pull-right\"><div><ng-content select=\"nbp-customer-name\"></ng-content></div></div><div *ngIf=\"!_nbpHideMenu\" class=\"navbar-toggle\" (click)=\"_toogleMenu()\" ng-class=\"{'navbar-toggle-open': _nbpMenuOpen}\"><button type=\"button\"><span class=\"icon {{_nbpMenuOpen ? 'ico-comuni-chiudi' : 'ico-navbar-menu'}}\"></span></button></div></div></div></div><ng-content select=\"nbp-burger-menu\"></ng-content>",
        styles: [".header{width:100%;background-color:#f2f2f2;box-shadow:0 0 1.25em -.625em rgba(0,0,0,.8)}.header .navbar{position:relative;border:0!important;border-radius:0!important;margin:0!important;left:0;right:0;width:100%;background-color:#258900}.header .navbar .container{display:table;position:relative;padding-right:0;background-color:#258900;height:4.375em}.header .navbar .container-slim{height:3.125em!important}.header .row{margin:0}.header-overlay{position:relative;top:0;left:0;width:100%;height:100%;background:#f2f2f2}.navbar .container .navbar-logo{display:table-cell;vertical-align:middle;width:17em}.navbar .container .navbar-toggle{display:table-cell;vertical-align:middle;width:5em;height:4.375em;background-color:transparent;border:0;border-radius:0;margin:0;padding:0;text-align:center;cursor:pointer}.navbar .container .navbar-toggle:hover{background:#323232}.navbar .container .navbar-toggle:focus{background:#323232}.navbar .container .navbar-toggle:active{background:#323232}.navbar .container .navbar-info-cliente{display:table-cell;vertical-align:middle;width:22.25em;height:3.125em;background-color:transparent;text-align:left;color:#fff;line-height:1em}.navbar .container .navbar-info-cliente .container-arrow{float:right;padding-top:1.25em;padding-right:1.5625em}.navbar .container .navbar-info-cliente .accordion-arrow{cursor:pointer;font-size:1.6em}.navbar .container .navbar-info-cliente .info-cliente-open{position:absolute;background-color:#323232;z-index:1000;width:22.25em;height:9.8125em;border:0;border-radius:0;text-align:center;margin-top:.5625em;display:table}.navbar .container .navbar-info-cliente .info-cliente-open .container-nsg-title{vertical-align:middle;height:2.3125em;display:table-cell}.navbar .container .navbar-info-cliente .info-cliente-open .container-nsg-cliente{vertical-align:middle;height:3.75em;border-top:1px solid #6f6f6f;display:table-cell;cursor:pointer;text-align:left}.navbar .container .navbar-info-cliente .info-cliente-open .container-nsg-cliente-select{vertical-align:middle;height:3.75em;border-top:1px solid #6f6f6f;display:table-cell;cursor:pointer;text-align:left;background-color:#3f3f3f;font-weight:700}.navbar .container .navbar-info-cliente .info-cliente-open .container-nsg-cliente-select .icon{float:right;color:#258900;padding-right:10px}.navbar .container .navbar-info-cliente .info-cliente-open .title-nsg-label{color:#ccc;text-transform:uppercase}.navbar .container .navbar-info-cliente .info-cliente-open .nsg-cliente{margin-left:1em;color:#ccc}.navbar .container .navbar-info-cliente .info-cliente-open .nsg-cliente-selected{margin-left:1em;color:#fff}.navbar .container .navbar-hole{display:table-cell;vertical-align:middle;margin-top:5px;margin-bottom:5px}.navbar-logo-brand{display:block;width:250px;height:30px;background-image:url(/cjlib/assets/images/sprite.png);background-repeat:no-repeat}.navbar-logo-brand-small{display:block;width:225px;height:25px;background-image:url(/cjlib/assets/images/sprite.png);background-repeat:no-repeat}.navbar-toggle button{position:relative;top:50%;transform:translateY(-50%);border:none;background:0 0;outline:0}.navbar-toggle .icon-bar{width:1.875em;height:.125em;margin:.313em auto;background-color:#fff!important}.navbar-toggle .ico-comuni-chiudi,.navbar-toggle .ico-navbar-menu{color:#fff;font-size:1.5em;margin:.313em auto}.navbar-toggle-operation button{position:relative;top:50%;transform:translateY(-50%);border:none;background:0 0;outline:0}.navbar-toggle-operation .icon-bar{width:1.875em;height:.125em;margin:.313em auto;background-color:#fff!important}.navbar-toggle-operation .icomoon-Modifica_matita{color:#fff;font-size:1.5em;margin:.313em auto}.navbar-toggle-operation span.labelOperazioni{color:#fff;font-size:.75em}.navbar-toggle-open{background:#323232!important}.nome-applicativo{position:relative;font-size:1.5em;margin-bottom:-.417em;color:#fff;font-weight:400}.header-paging-container,.header-progress-container{border-bottom:1px solid #ccc}@media (max-width:768px){.navbar .container{width:100%}}@media (-webkit-min-device-pixel-ratio:2){.navbar-logo-brand{background-image:url(/cjlib/assets/images/sprite-x2.png)}}@media (min-resolution:192dpi){.navbar-logo-brand{background-image:url(/cjlib/assets/images/sprite-x2.png)}}.triangolo{width:0;height:0;z-index:100;border-left:.625em solid transparent;border-right:.625em solid transparent;border-bottom:.625em solid #323232;float:right;margin-right:1.75em}.triangolo-hide{width:0;height:0;z-index:100;border-left:.625em solid transparent;border-right:.625em solid transparent;border-bottom:.625em solid transparent;float:right}.container-row{display:table-row}.container-ident-cliente{margin-top:0;margin-bottom:0;font-size:.875em;color:inherit;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:78%;padding-left:.625em;font-weight:400;float:left}.voce-ident-cliente{margin-top:0;margin-bottom:0;font-size:.875em;color:inherit;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-weight:400}.testo-ident-cliente{margin-top:0;margin-bottom:0;font-size:.875em;color:inherit;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-weight:700}@media (max-width:970px){.nome-applicativo{font-size:1.2em}}.contrasto-on .header{background-color:#fff}.contrasto-on .header .navbar .container{background-color:#000}.contrasto-on .header .navbar-tape{background-color:#000}.contrasto-on .header-overlay{background:#fff}.contrasto-on .navbar .container .navbar-toggle{background-color:transparent}.contrasto-on .navbar .container .navbar-toggle:hover{background:#000}.contrasto-on .navbar .container .navbar-toggle:focus{background:#000}.contrasto-on .navbar .container .navbar-toggle:active{background:#000}.contrasto-on .navbar .container .navbar-toggle-operation{background-color:transparent}.contrasto-on .navbar .container .navbar-toggle-operation:hover{background:#fff;color:#000}.contrasto-on .navbar .container .navbar-toggle-operation:hover .icomoon-Modifica_matita{color:#000}.contrasto-on .navbar .container .navbar-toggle-operation:hover span{color:#000}.contrasto-on .navbar .container .navbar-toggle-operation:focus{background:#fff;color:#000}.contrasto-on .navbar .container .navbar-toggle-operation:focus .icomoon-Modifica_matita{color:#000}.contrasto-on .navbar .container .navbar-toggle-operation:focus span{color:#000}.contrasto-on .navbar .container .navbar-toggle-operation:active{background:#fff;color:#000}.contrasto-on .navbar .container .navbar-toggle-operation:active .icomoon-Modifica_matita{color:#000}.contrasto-on .navbar .container .navbar-toggle-operation:active span{color:#000}.contrasto-on .navbar .container .navbar-toggle-operation.navbar-toggle-open{background:#fff!important;color:#000}.contrasto-on .navbar .container .navbar-toggle-operation.navbar-toggle-open .icomoon-Modifica_matita{color:#000}.contrasto-on .navbar .container .navbar-toggle-operation.navbar-toggle-open span{color:#000}.contrasto-on .navbar .container .navbar-info-cliente{background-color:transparent;border-left:1px solid #fff;border-right:1px solid #fff;color:#fff}.contrasto-on .navbar .container .navbar-info-cliente .info-cliente-open{background-color:#000}.contrasto-on .navbar .container .navbar-info-cliente .info-cliente-open .container-nsg-title{border-bottom:1px solid #fff;border-top:1px solid #fff}.contrasto-on .navbar .container .navbar-info-cliente .info-cliente-open .container-nsg-cliente{border-bottom:1px solid #fff;border-top:none}.contrasto-on .navbar .container .navbar-info-cliente .info-cliente-open .container-nsg-cliente-select{border-bottom:1px solid #000;border-top:none;background-color:#fff}.contrasto-on .navbar .container .navbar-info-cliente .info-cliente-open .container-nsg-cliente-select .icon{color:#000}.contrasto-on .navbar .container .navbar-info-cliente .info-cliente-open .title-nsg-label{color:#fff}.contrasto-on .navbar .container .navbar-info-cliente .info-cliente-open .nsg-cliente{color:#fff}.contrasto-on .navbar .container .navbar-info-cliente .info-cliente-open .nsg-cliente-selected{color:#000}.contrasto-on .navbar-toggle .icon-bar{background-color:#fff!important}.contrasto-on .navbar-toggle .ico-comuni-chiudi,.contrasto-on .navbar-toggle .ico-navbar-menu,.contrasto-on .navbar-toggle .icomoon-Modifica_matita{color:#fff}.contrasto-on .navbar-toggle-open{background:#000!important}.contrasto-on .prev-page-btn-container .prev-page-btn{color:#000}.contrasto-on .page-title-container{border-bottom:1px solid #000}.contrasto-on .nome-applicativo{color:#fff}.contrasto-on .header-paging-container,.contrasto-on .header-progress-container{border-bottom:1px solid #000}.contrasto-on .triangolo{position:absolute;-webkit-transform:rotate(45deg);transform:rotate(45deg);content:\" \";width:15px;height:15px;border:0 solid #fff;border-width:1px 0 0 1px;background:#000;right:112px;z-index:1001;bottom:-8px;margin:0 auto}.contrasto-on .container-ident-cliente{color:inherit}.contrasto-on .voce-ident-cliente{color:inherit}.contrasto-on .testo-ident-cliente{color:inherit} /*# sourceMappingURL=nbp-header.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [])
], NbpHeaderComponent);
export { NbpHeaderComponent };
