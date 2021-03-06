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
import { NbpPipe } from './../nbp-commons/nbp-commons.enums';
var nextId = 0;
var NbpTableColumnComponent = (function () {
    function NbpTableColumnComponent() {
        /**
         * Identificativo univoco per la colonna. Se non viene passato un valore, l'id viene autogenerato.
         */
        this.nbpId = "nbp-table-column-" + ++nextId;
        /**
          * Proprietà booleana rappresentante la visualizzazione della colonna nella tabella.
          * Default: true;
          */
        this.nbpVisible = true;
    }
    return NbpTableColumnComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpTableColumnComponent.prototype, "nbpId", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpTableColumnComponent.prototype, "nbpTitle", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpTableColumnComponent.prototype, "nbpField", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NbpTableColumnComponent.prototype, "nbpSortable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NbpTableColumnComponent.prototype, "nbpVisible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NbpTableColumnComponent.prototype, "nbpFilter", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NbpTableColumnComponent.prototype, "nbpFilterArg", void 0);
NbpTableColumnComponent = __decorate([
    Component({
        selector: 'nbp-table-column',
        template: '<span></span>',
    }),
    __metadata("design:paramtypes", [])
], NbpTableColumnComponent);
export { NbpTableColumnComponent };
