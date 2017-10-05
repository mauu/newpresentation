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
var NbpFormComponent = (function () {
    function NbpFormComponent() {
        /**
         * evento che notifica il submit della form
         */
        this.nbpFormSubmit = new EventEmitter();
    }
    // Methods
    /**
     * metodo per riportare la form allo stato iniziale
  
     */
    NbpFormComponent.prototype.resetForm = function () { };
    NbpFormComponent.prototype.ngOnInit = function () {
    };
    return NbpFormComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpFormComponent.prototype, "nbpFormName", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NbpFormComponent.prototype, "nbpShowValidation", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NbpFormComponent.prototype, "disabled", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpFormComponent.prototype, "nbpFormSubmit", void 0);
NbpFormComponent = __decorate([
    Component({
        selector: 'nbp-form',template: "<p>nbp-form works!</p>",
        styles: [" /*# sourceMappingURL=nbp-form.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [])
], NbpFormComponent);
export { NbpFormComponent };
