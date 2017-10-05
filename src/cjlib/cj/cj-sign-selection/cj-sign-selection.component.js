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
var CjSignSelectionComponent = (function () {
    function CjSignSelectionComponent() {
        /**
         * Evento emesso al click sui radio button di scelta modalita' firma
         * @param {EventEmitter<ICjRadioStructure>}  cjOnSignSelection
         */
        this.cjOnSignSelection = new EventEmitter();
    }
    CjSignSelectionComponent.prototype.ngOnInit = function () {
    };
    CjSignSelectionComponent.prototype._onPlaceSelection = function (event) {
        console.log('CjSignSelectionComponent: Luogo offerta. Aggiorno i radio button per la selezione firma.');
        console.log(event);
        this.cjSignRadios = (event.selection === 'sede') ?
            this.cjSignRadios = [
                {
                    label: 'Firma cartacea',
                    value: 'firmacome',
                    disabled: false,
                    hide: false,
                    icon: 'icomoon-Firma_4'
                },
                {
                    label: 'Firma grafometrica',
                    value: 'firmadove',
                    disabled: false,
                    hide: false,
                    icon: 'icomoon-Firma_3'
                }
            ] :
            this.cjSignRadios = [
                {
                    label: 'Firma digitale remota',
                    value: 'firmaDigitaleRemota',
                    disabled: false,
                    hide: false,
                    icon: 'icomoon-Firma_2'
                },
                {
                    label: 'Firma altro',
                    value: 'firmaAltro',
                    disabled: false,
                    hide: false,
                    icon: 'icomoon-Firma_3'
                },
                {
                    label: 'Firma altro remota',
                    value: 'firmaAltroRemota',
                    disabled: false,
                    hide: false,
                    icon: 'icomoon-Firma_2'
                }
            ];
    };
    CjSignSelectionComponent.prototype._onSignSelection = function (event) {
        this.cjOnSignSelection.emit(event);
        console.log('Tipo firma selezionato: ', event);
    };
    return CjSignSelectionComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], CjSignSelectionComponent.prototype, "cjCustomer", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], CjSignSelectionComponent.prototype, "cjPlaceRadios", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], CjSignSelectionComponent.prototype, "cjSignRadios", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjSignSelectionComponent.prototype, "cjOnSignSelection", void 0);
CjSignSelectionComponent = __decorate([
    Component({
        selector: 'cj-sign-selection',template: "<div class=\"row sign-container\"><div class=\"col-xs-24 col-sm-6 col-md-6 sign-customer-section\"><cj-radio-selection [cjCustomerInfo]=\"cjCustomer\"></cj-radio-selection></div><div class=\"col-xs-24 col-sm-9 col-md-9 sign-place-section\"><cj-radio-selection [cjRadioList]=\"cjPlaceRadios\" [cjData]=\"_placeDataModel\" (cjOnSelection)=\"_onPlaceSelection($event)\"></cj-radio-selection></div><div class=\"col-xs-24 col-sm-9 col-md-9 sign-type-section\"><cj-radio-selection [cjRadioList]=\"cjSignRadios\" [cjData]=\"_signDataModel\" (cjOnSelection)=\"_onSignSelection($event)\"></cj-radio-selection></div></div>",
        styles: [".sign-container{padding-top:20px;padding-bottom:20px}.sign-customer-section{background-color:#fff;min-height:145px;border:1px solid #ccc}.sign-place-section{background-color:#f2f2f2;min-height:145px;border-top:1px solid #ccc;border-bottom:1px solid #ccc;border-right:1px solid #ccc;border-left:0 solid transparent;padding-top:10px}.sign-place-section:before{content:'';display:block;width:20px;height:20px;background-color:#f2f2f2;border-top:1px solid #ccc;border-left:1px solid #ccc;position:absolute;transform-origin:top left;transform:rotate(-45deg) translateX(-20px);top:34px;left:0}.sign-type-section{background-color:#e3e3e3;min-height:145px;border-top:1px solid #ccc;border-bottom:1px solid #ccc;border-right:1px solid #ccc;border-left:0 solid transparent;padding-top:10px}.sign-type-section:before{content:'';display:block;width:20px;height:20px;background-color:#e3e3e3;border-top:1px solid #ccc;border-left:1px solid #ccc;position:absolute;transform-origin:top left;transform:rotate(-45deg) translateX(-20px);top:34px;left:0}::ng-deep nbp-radio .radio-label{font-weight:300!important;font-size:1em!important;padding-top:10px}@media screen and (max-width:767px){.sign-place-section{border-top:0 solid transparent;border-left:1px solid #ccc!important}.sign-place-section:before{border-top:1px solid #ccc;border-right:1px solid #ccc;border-left:0 solid transparent;top:-15px;left:34px}.sign-type-section{border-top:0 solid transparent;border-left:1px solid #ccc!important}.sign-type-section:before{border-top:1px solid #ccc;border-right:1px solid #ccc;border-left:0 solid transparent;top:-15px;left:34px}} /*# sourceMappingURL=cj-sign-selection.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [])
], CjSignSelectionComponent);
export { CjSignSelectionComponent };
