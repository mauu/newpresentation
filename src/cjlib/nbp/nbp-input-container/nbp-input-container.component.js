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
import { ContentChild } from '@angular/core';
import { NbpInputElementBase } from './../nbp-commons/nbp-input-element-base';
var NbpInputContainerComponent = (function () {
    function NbpInputContainerComponent() {
    }
    return NbpInputContainerComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpInputContainerComponent.prototype, "nbpLabel", void 0);
__decorate([
    ContentChild(NbpInputElementBase),
    __metadata("design:type", Object)
], NbpInputContainerComponent.prototype, "innerNgInput", void 0);
NbpInputContainerComponent = __decorate([
    Component({
        selector: 'nbp-input-container',template: "<div><label [for]=\"innerNgInput?.name\">{{nbpLabel}}<span *ngIf=\"innerNgInput?.required\">*</span></label><ng-content></ng-content><div class=\"error-message\" *ngIf=\"innerNgInput?.nbpShowValidation && (innerNgInput?.invalid | async)\"><span *ngIf=\"innerNgInput?.nbpErrorMessage\">{{innerNgInput?.nbpErrorMessage}}</span> <span *ngIf=\"!innerNgInput?.nbpErrorMessage\">{{innerNgInput?.failures | async}}</span></div></div>",
        styles: [".error-message{color:#c63200;font-size:.75em;margin-top:.625em;margin-bottom:.625em;opacity:1;transition:all ease-out .25s} /*# sourceMappingURL=nbp-input-container.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [])
], NbpInputContainerComponent);
export { NbpInputContainerComponent };
