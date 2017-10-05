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
import { coerceBooleanProperty } from './../../utility/lib-utility';
var NbpProgressComponent = (function () {
    function NbpProgressComponent() {
        var _this = this;
        /**
         * Proprietà che indica lo step corrente
         * Oggetto strutturato che contiene stepId e pageId
         */
        // @Input() nbpCurrentStep: object;
        this._nbpWidth = 'col-xs-8';
        this._nbpOffset = 'col-xs-offset-0';
        this.initializeProgressBar = function () {
            if (_this.nbpConfiguration) {
                switch (_this.nbpConfiguration.length) {
                    case 2:
                        _this._nbpWidth = 'col-xs-16 col-md-4';
                        _this._nbpOffset = 'col-xs-offset-0 col-md-offset-8';
                        break;
                    case 3:
                        _this._nbpWidth = 'col-xs-16 col-md-4';
                        _this._nbpOffset = 'col-xs-offset-0 col-md-offset-6';
                        break;
                    case 4:
                        _this._nbpWidth = 'col-xs-16 col-md-3';
                        _this._nbpOffset = 'col-xs-offset-4 col-md-offset-4';
                        break;
                    case 5:
                        _this._nbpWidth = 'col-xs-16 col-md-4';
                        _this._nbpOffset = 'col-xs-offset-0 col-md-offset-2';
                        break;
                    default:
                        _this._nbpWidth = 'col-xs-16';
                        _this._nbpOffset = 'col-xs-offset-0';
                        break;
                }
            }
        };
    }
    Object.defineProperty(NbpProgressComponent.prototype, "nbpDisableSticky", {
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
    NbpProgressComponent.prototype.ngDoCheck = function () {
        this.initializeProgressBar();
    };
    return NbpProgressComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array)
], NbpProgressComponent.prototype, "nbpConfiguration", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], NbpProgressComponent.prototype, "nbpDisableSticky", null);
NbpProgressComponent = __decorate([
    Component({
        selector: 'nbp-progress',template: "<div id=\"progress-container\" class=\"row nbp-progress-container\" [ngClass]=\"{'sticky':!_nbpDisableSticky}\"><div class=\"progress-container container\"><div id=\"step-container\" class=\"progress-steps-container\"><div *ngFor=\"let stepConf of nbpConfiguration; let stepIndex = index\" class=\"{{_nbpWidth}} pad-l-5 pad-r-5 {{stepIndex === 0 ? _nbpOffset : null}}\"><div class=\"progress\" [ngClass]=\"{'active': stepConf.active || stepConf.fillPercent === 100}\"><div class=\"progress-bar\" [ngStyle]=\"{ width: stepConf.fillPercent + '%' }\"></div></div><div class=\"progress-step-name\" [ngClass]=\"{'active': stepConf.active || stepConf.fillPercent === 100}\">{{stepConf.label}}</div></div></div></div><ng-content></ng-content></div>",
        styles: [".row.nbp-progress-container{background-color:#f2f2f2;margin-left:-25px;margin-right:-25px;border-bottom:1px solid #ccc;border-top:1px solid #ccc}.row.nbp-progress-container.sticky{position:fixed!important;top:0;width:100%!important;z-index:9999!important}.progress-container{display:table}.progress-steps-container{height:5em;display:table-cell;vertical-align:middle}.progress{height:.875em;background-color:#f2f2f2;border-radius:.875em;border:.125em solid #ccc;margin-bottom:.25em;box-shadow:none;overflow:hidden}.progress.active{border:.125em solid #258900}.progress-bar{border-radius:.875em;background-color:#258900;box-shadow:none}.progress-step-name{position:relative;text-align:center;font-size:.625em;font-weight:700;text-transform:uppercase;color:#6f6f6f}.progress-step-name.arrowStep:after{position:absolute;-webkit-transform:rotate(45deg);transform:rotate(45deg);content:\" \";width:15px;height:15px;border:0 solid #ccc;border-width:1px 0 0 1px;background:#fff;left:0;right:0;bottom:-32px;margin:0 auto}.progress-step-name.active{color:#258900}.contrasto-on .progress{background-color:#fff;border:.125em solid #000}.contrasto-on .progress.active{border:.125em solid #000}.contrasto-on .progress-bar{background-color:#000}.contrasto-on .progress-step-name{color:#000}.contrasto-on .progress-step-name.arrowStep:after{transform:rotate(45deg);content:\" \";width:15px;height:15px;border:0 solid #000;border-width:1px 0 0 1px;background:#fff;left:0;right:0;bottom:-32px;margin:0 auto}.contrasto-on .progress-step-name.active{color:#000} /*# sourceMappingURL=nbp-progress.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [])
], NbpProgressComponent);
export { NbpProgressComponent };
