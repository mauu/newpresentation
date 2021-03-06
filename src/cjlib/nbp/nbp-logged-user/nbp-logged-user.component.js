var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// DA IMPLEMENTARE TOTALMENTE PER NON FAR FALLIRE I TEST
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { coerceBooleanProperty } from './../../utility/lib-utility';
var NbpLoggedUserComponent = (function () {
    function NbpLoggedUserComponent() {
        this.nbpLogout = new EventEmitter();
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
__decorate([
    Input(),
    __metadata("design:type", Object)
], NbpLoggedUserComponent.prototype, "nbpUser", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpLoggedUserComponent.prototype, "disableLogout", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NbpLoggedUserComponent.prototype, "nbpDisableLogout", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpLoggedUserComponent.prototype, "nbpLogout", void 0);
NbpLoggedUserComponent = __decorate([
    Component({
        selector: 'nbp-logged-user',
        template: "<div class=\"user-button-container\"><span class=\"user-button\"><a (click)=\"_onLogoutClick()\"><table *ngIf=\"!largeUserImage\"><tr><th class=\"user-image-container\"><div class=\"icon ico-navbar-gestore-01\" [hidden]=\"imageLoaded\"></div><img [src]=\"nbpUser.image\" isp-onload=\"imageLoaded = true\" [hidden]=\"imageError\"></th><th class=\"user-info\"><span [innerText]=\"nbpUser.name + ' ' + nbpUser.surname\"></span><br><span class=\"user-info-subtitle\">Utente: <span class=\"user-info-subtitle--content\">{{nbpUser.id}}</span> &#124; </span><span class=\"user-info-subtitle\">Ruolo: <span class=\"user-info-subtitle--content\">{{nbpUser.role}}</span></span></th></tr></table></a></span></div>",
        styles: [".user-button-container{padding:0}[class*=\" ico-\"]:before{vertical-align:middle}.user-button{margin:0}.user-button a{color:#fa9600;display:table;padding:.313em 1.25em .313em 1.25em;margin:1.25em 0 1.25em 0;text-decoration:none;cursor:pointer;width:100%;height:3.75em}.user-button a:active,.user-button a:focus,.user-button a:hover{background-color:#fa9600;color:#323232}.user-button a table{width:100%;display:table-cell;vertical-align:middle}.user-image-container{width:1.75em;height:1.75em}.user-image-container div{vertical-align:middle;font-size:1.75em!important;margin:0!important}.user-image-container img{position:relative;border-radius:50%;width:100%}.user-info{padding-left:.625em;vertical-align:middle;line-height:1;font-weight:400}.user-info-subtitle{display:inline-block;font-size:.75em}.user-info-subtitle .user-info-subtitle--content{text-transform:uppercase;font-weight:700} /*# sourceMappingURL=nbp-logged-user.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [])
], NbpLoggedUserComponent);
export { NbpLoggedUserComponent };
