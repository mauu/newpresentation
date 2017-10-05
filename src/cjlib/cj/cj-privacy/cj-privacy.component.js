var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Optional, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CjNdgService } from './cj-ndg.service';
var CjPrivacyComponent = (function () {
    function CjPrivacyComponent(ndgService, route) {
        this.ndgService = ndgService;
        this.route = route;
        /**
         * Evento emesso al click dei pulsanti
         * @param {EventEmitter<any>}  cjOnDone
         */
        this.cjOnDone = new EventEmitter();
    }
    CjPrivacyComponent.prototype.ngOnInit = function () {
        this._getCjNdg();
        console.log('Parametro NDG: ', this.cjNdgParam);
        console.log('Parametro NDG da url: ', this.cjNdgUrlParam);
    };
    CjPrivacyComponent.prototype._getCjNdg = function () {
        var _this = this;
        if (this.route) {
            if (!this.cjNdgParam) {
                // controllo che esista l'url param
                if (this.cjNdgUrlParam) {
                    // recupero dall'url il parametro da passare al servizio
                    this.route.params.subscribe(function (params) {
                        _this.cjNdgParam = params[_this.cjNdgUrlParam];
                        _this._obtainNdg();
                    });
                }
                else {
                    console.log('WARNING - Componente CjPrivacy - senza cjNdgParam e senza cjNdgUrlParam.');
                }
            }
            else {
                this._obtainNdg();
            }
        }
        else {
            if (!this.cjNdgParam) {
                console.log("WARNING - Recupero ndg da urlParam non disponibile");
            }
            else {
                this._obtainNdg();
            }
        }
    };
    CjPrivacyComponent.prototype._obtainNdg = function () {
        this._privacyDataStream = this.ndgService.getPrivacyByNdg(this.cjNdgParam);
        this._privacyDataStream.subscribe(function (privacy) {
            console.log('dati da service: ', JSON.stringify(privacy));
        });
    };
    CjPrivacyComponent.prototype._onPrint = function (event) {
        // TODO: chiamata al servizio di stampa e salvataggio consensi
        console.log('Click su pulsante Stampa: chiamata alle funzioni di Stampa e Salva');
        this.cjOnDone.emit(event);
    };
    CjPrivacyComponent.prototype._onContinue = function (event) {
        // Chiusura della pagina
        console.log('Click su pulsante Continua: chiusura pagina');
        this.cjOnDone.emit(event);
    };
    CjPrivacyComponent.prototype._onCancel = function (event) {
        // Chiusura della pagina
        console.log('Click su pulsante Annulla: chiusura pagina');
        this.cjOnDone.emit(event);
    };
    return CjPrivacyComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], CjPrivacyComponent.prototype, "cjNdgParam", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CjPrivacyComponent.prototype, "cjNdgUrlParam", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjPrivacyComponent.prototype, "cjOnDone", void 0);
CjPrivacyComponent = __decorate([
    Component({
        selector: 'cj-privacy',template: "<cj-privacy-form [cjPrivacy]=\"_privacyDataStream | async\" (cjOnStampa)=\"_onPrint($event)\" (cjOnContinua)=\"_onContinue($event)\" (cjOnAnnulla)=\"_onCancel($event)\"></cj-privacy-form>"
    }),
    __param(1, Optional()),
    __metadata("design:paramtypes", [CjNdgService, ActivatedRoute])
], CjPrivacyComponent);
export { CjPrivacyComponent };
