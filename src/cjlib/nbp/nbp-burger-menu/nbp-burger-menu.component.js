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
var NbpBurgerMenuComponent = (function () {
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
        this.nbpOnLogout = new EventEmitter();
        /**
         * Evento emesso sulla pressione di ogni voce di menu'.
         * @param {EventEmitter<INbpItemMenu>}  nbpOnItemClick
         */
        this.nbpOnItemClick = new EventEmitter();
        /**
         * Evento emesso all'apertura del burgerMenu.
         * @param {EventEmitter<any>}  nbpOnOpen
         */
        this.nbpOnOpen = new EventEmitter();
        /**
         * Evento emesso alla chiusure del burgerMenu.
         * @param {EventEmitter<any>}  nbpOnOpen
         */
        this.nbpOnClose = new EventEmitter();
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
__decorate([
    Input(),
    __metadata("design:type", Object)
], NbpBurgerMenuComponent.prototype, "nbpMenu", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NbpBurgerMenuComponent.prototype, "nbpUser", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NbpBurgerMenuComponent.prototype, "nbpDisableLogout", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpBurgerMenuComponent.prototype, "nbpOnLogout", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpBurgerMenuComponent.prototype, "nbpOnItemClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpBurgerMenuComponent.prototype, "nbpOnOpen", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpBurgerMenuComponent.prototype, "nbpOnClose", void 0);
NbpBurgerMenuComponent = __decorate([
    Component({
        selector: 'nbp-burger-menu',template: "<div class=\"menu\" [ngClass]=\"{'closed': !_isOpen, 'open': _isOpen}\"><div class=\"container first-level-menu\" [ngClass]=\"{'open': !_showSecondLevelMenu}\" [hidden]=\"_showSecondLevelMenu\"><div class=\"row\"><div class=\"col-sm-16\"><div><div class=\"col-sm-12 section-menu\" *ngFor=\"let section of nbpMenu.sections; let i = index\"><ul class=\"main-menu\"><li><a *ngFor=\"let item of section.items\" (click)=\"_onClick(item)\"><span *ngIf=\"item.icon\" class=\"icon {{item.icon}}\"></span> <span>{{item.label}}</span></a></li></ul></div></div></div><div class=\"col-sm-8\"><ng-content selector=\"nbp-logged-user\"></ng-content></div></div></div><div class=\"container second-level-menu\" [ngClass]=\"{'open': _showSecondLevelMenu}\" *ngIf=\"_showSecondLevelMenu\"><div class=\"row upper-bar\"><div class=\"menu-principale pull-left\"><span class=\"glyphicon icon icon-arrow-left\"></span> <span class=\"menu-principale-title\" (click)=\"_goBack()\">Men&ugrave; principale</span></div><div class=\"selected-first-level-menu pull-right\"><span class=\"icon {{_selectedItem.icon}}\"></span> <span>{{_selectedItem.label}}</span></div></div><div class=\"row second-level-buttons\"><div class=\"col-sm-8\" *ngFor=\"let section of _selectedItem.secondLevelMenu.sections; let i = index\" [ngClass]=\"{'main-menu-container-pad-l': i > 0, 'main-menu-container-pad-r': i !== _selectedItem.secondLevelMenu.sections.length - 1}\"><ul class=\"main-menu\"><li><a *ngFor=\"let item of section.items\" (click)=\"_onClick(item)\"><span *ngIf=\"item.icon\" class=\"icon {{item.icon}}\"></span> <span>{{item.label}}</span></a></li></ul></div></div></div></div>",
        styles: [".menu{position:relative;width:100%;height:0;overflow-x:hidden;overflow-y:auto;background-color:#323232;-moz-transition:height .25s ease-out;-o-transition:height .25s ease-out;transition:height .25s ease-out}.menu .icon{margin-right:.313em;font-size:1.75em;vertical-align:middle}.menu.closed{height:0}.menu.open{height:22em}.main-menu-container{padding:0}.section-menu:nth-child(2n+3){clear:left}.main-menu{list-style:none;padding:0 .313em 0 .313em;margin:0}.main-menu a{color:#ccc;display:table;width:100%;padding:.313em 1.25em .313em 1.25em;margin:1.25em 0 1.25em 0;text-decoration:none;cursor:pointer;height:3.75em}.main-menu a:active,.main-menu a:focus,.main-menu a:hover{background-color:#258900;color:#fff}.main-menu a span{display:table-cell;vertical-align:middle;text-align:left}.main-menu a span:nth-child(1){width:1.563em}.main-menu .select{background-color:#258900;color:#fff;border:1px solid #258900}.upper-bar{border-bottom:1px solid #6f6f6f}.menu-principale{color:#ccc;font-size:.875em;padding:1em .625em .625em .625em;cursor:pointer}.menu-principale .icon{font-size:.875em}.menu-principale-title{vertical-align:top}.selected-first-level-menu{color:#6f6f6f;padding:.625em}.first-level-menu{position:absolute;left:0;right:0;opacity:0;left:-6.25em;padding:0 .625em 0 .625em;-moz-transition:all .25s ease-out;-o-transition:all .25s ease-out;transition:all .25s ease-out}.first-level-menu.open{opacity:1;left:0}.second-level-menu{position:absolute;left:0;right:0;opacity:0;left:6.25em;-moz-transition:all .25s ease-out;-o-transition:all .25s ease-out;transition:all .25s ease-out}.second-level-menu.open{opacity:1;left:0}.contrasto-on .menu{background-color:#000}.contrasto-on .menu.open{border-bottom:2px solid #fff}.contrasto-on .main-menu a{color:#fff;border:1px solid #fff}.contrasto-on .main-menu a:active,.contrasto-on .main-menu a:focus,.contrasto-on .main-menu a:hover{background-color:#fff;color:#000;border:1px solid #fff}.contrasto-on .main-menu .select{background-color:#fff;color:#000;border:1px solid #fff}.contrasto-on .upper-bar{border-bottom:1px solid #000}.contrasto-on .menu-principale{color:#fff}.contrasto-on .selected-first-level-menu{color:#fff}.contrasto-on .user-button a{color:#fff;border:1px solid #fff}.contrasto-on .user-button a:active,.contrasto-on .user-button a:focus,.contrasto-on .user-button a:hover{background-color:#fff;color:#000;border:1px solid #fff} /*# sourceMappingURL=nbp-burger-menu.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [])
], NbpBurgerMenuComponent);
export { NbpBurgerMenuComponent };
