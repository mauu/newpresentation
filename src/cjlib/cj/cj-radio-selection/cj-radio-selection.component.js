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
var CjRadioSelectionComponent = (function () {
    function CjRadioSelectionComponent() {
        /**
         * Evento emesso al click sui radio button
         * @param {EventEmitter<any>}  cjOnSelection
         */
        this.cjOnSelection = new EventEmitter();
    }
    CjRadioSelectionComponent.prototype.ngOnInit = function () { };
    CjRadioSelectionComponent.prototype.ngOnChanges = function (changes) {
        if (this.cjRadioList) {
            this._radioList = this.cjRadioList.length > 3 ? this.cjRadioList.slice(0, 3) : this.cjRadioList.slice();
        }
    };
    CjRadioSelectionComponent.prototype._onSelection = function (event) {
        // this.cjOnSelection.emit(event);
        var currentEventInfo = Object.assign({}, event);
        currentEventInfo['selection'] = this.cjData;
        console.log('CjRadioSelectionComponent - Emit: cjOnSelection', currentEventInfo);
        this.cjOnSelection.emit(currentEventInfo);
    };
    return CjRadioSelectionComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array)
], CjRadioSelectionComponent.prototype, "cjRadioList", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CjRadioSelectionComponent.prototype, "cjCustomerInfo", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CjRadioSelectionComponent.prototype, "cjData", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjRadioSelectionComponent.prototype, "cjOnSelection", void 0);
CjRadioSelectionComponent = __decorate([
    Component({
        selector: 'cj-radio-selection',template: "<div *ngIf=\"cjCustomerInfo\" class=\"row\"><div class=\"col-xs-offset-4 col-sm-offset-4 col-md-offset-4\"><div class=\"customer-circle-info\">{{cjCustomerInfo.circleInfo}}</div><div class=\"customer-section-title\">Cliente:</div><div class=\"customer-section-info\">{{cjCustomerInfo.info}}</div></div></div><div class=\"row\"><div *ngFor=\"let elementList of _radioList\" class=\"col-xs-offset-2 col-sm-offset-2 col-md-offset-2\"><div class=\"row\" [hidden]=\"elementList.hide\"><span *ngIf=\"elementList.icon\" class=\"col-xs-4 col-sm-4 col-md-4 sign-icon\" [ngClass]=\"elementList.icon\"></span><nbp-radio name=\"offerta\" nbpSelectionSign=\"spunta\" nbpDisplayInline [disabled]=\"elementList.disabled\" [nbpLabel]=\"elementList.label\" [value]=\"elementList.value\" [(ngModel)]=\"cjData\" (change)=\"_onSelection($event)\"></nbp-radio></div></div></div>",
        styles: [".customer-section-title{font-size:1em;font-weight:700;padding-top:24px}.customer-section-info{font-size:1em;padding-top:6px}.sign-icon{font-size:1.9em}.customer-circle-info{width:40px;height:40px;border:1px solid #ccc;border-radius:40px;background:#fff;position:absolute;top:-20px;text-align:center;font-weight:700;padding-top:8px;color:#89bc72} /*# sourceMappingURL=cj-radio-selection.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [])
], CjRadioSelectionComponent);
export { CjRadioSelectionComponent };
