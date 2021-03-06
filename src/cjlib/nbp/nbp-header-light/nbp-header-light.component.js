var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var NbpHeaderLightComponent = (function () {
    function NbpHeaderLightComponent() {
    }
    return NbpHeaderLightComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpHeaderLightComponent.prototype, "nbpLogo", void 0);
NbpHeaderLightComponent = __decorate([
    Component({
        selector: 'nbp-header-light',template: "<div style=\"position:relative\"><nav class=\"navbar\"><div class=\"container\"><div class=\"navbar-header\"><div class=\"navbar-logo\"><img [src]=\"nbpLogo\" height=\"25\" width=\"225\" alt=\"\"></div></div><div class=\"nav navbar-right\"><ng-content selector=\"nbp-client-info\"></ng-content></div></div></nav></div>",
        styles: ["nav{background-color:#258900;height:50px;border-radius:0}.navbar-absolute-top{position:absolute;border:0!important;margin:0!important;top:0;left:0;right:0}.navbar .container{display:table}.navbar .navbar-header{display:table-row;height:50px}.navbar .navbar-header .navbar-logo{vertical-align:middle;display:table-cell;height:50px} /*# sourceMappingURL=nbp-header-light.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [])
], NbpHeaderLightComponent);
export { NbpHeaderLightComponent };
