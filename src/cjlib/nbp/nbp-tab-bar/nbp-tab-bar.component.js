var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
/**
 * Componente che visualizza una barra per la selezione
 * di schede
 */
var NbpTabBarComponent = (function () {
    function NbpTabBarComponent() {
        this._selectedTabIndex = 0;
        /**
         * Evento emesso dopo la selezione di una scheda
         */
        this.nbpSelectedIndexChange = new EventEmitter();
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
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], NbpTabBarComponent.prototype, "nbpItems", null);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], NbpTabBarComponent.prototype, "nbpSelectedIndex", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], NbpTabBarComponent.prototype, "nbpSelectedIndexChange", void 0);
NbpTabBarComponent = __decorate([
    Component({
        selector: 'nbp-tab-bar',template: "<div class=\"tabs-container\"><div *ngFor=\"let tabItem of nbpItems; let i = index\" class=\"tab-container\" [class.selected]=\"nbpSelectedIndex == i\" (click)=\"selectTab(i)\"><i [ngClass]=\"tabItem.icon\"></i> <span class=\"tab-title\">{{tabItem.title}}</span></div></div>",
        styles: [".tabs-container{display:flex}.tabs-container .tab-container{height:87px;border-right:1px solid #ccc;text-align:center;background-color:#f8f8f8;flex-grow:1;flex-basis:0;padding:10px;cursor:pointer}.tabs-container .tab-container:last-of-type{border:0}.tabs-container .tab-container.selected{background-color:#fff;height:86px}.tabs-container .tab-container.selected i{color:#258900}.tabs-container .tab-container.selected .tab-title{color:#258900}.tabs-container .tab-container i{display:block;font-size:24px;color:#6f6f6f}.tabs-container .tab-container .tab-title{text-transform:uppercase;color:#6f6f6f;font-size:12px;display:inline-block;line-height:1;font-weight:600;margin-top:10px;margin-bottom:10px} /*# sourceMappingURL=nbp-tab-bar.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [])
], NbpTabBarComponent);
export { NbpTabBarComponent };
