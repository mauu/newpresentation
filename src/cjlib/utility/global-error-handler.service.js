var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
var GlobalErrorHandlerService = (function (_super) {
    __extends(GlobalErrorHandlerService, _super);
    // TODO iniettare nel costrutture un ErrorNotifierService che sarà utilizzato per la gestione della logica di errore (log sul server e show dialog sul fe)
    function GlobalErrorHandlerService() {
        return _super.call(this) || this;
    }
    GlobalErrorHandlerService.prototype.handleError = function (globalError) {
        _super.prototype.handleError.call(this, globalError);
        console.group('Errore gestito globalmente');
        console.error(globalError);
        if (globalError instanceof HttpErrorResponse && globalError.status >= 300) {
            console.warn('TODO Gestire l\'errore http globalmente');
            // TODO fare la gestione dell'errore http
            if (globalError.error.errorMessage) {
                // TODO In questo caso la gestione dell'errore è specifica.
                console.dir(globalError.error);
            }
        }
        else {
            console.warn('TODO Gestire l\'errore di codice globalmente');
            // TODO fare la gestione dell'errore generico (eg. nullpointer)
        }
        console.groupEnd();
    };
    return GlobalErrorHandlerService;
}(ErrorHandler));
GlobalErrorHandlerService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], GlobalErrorHandlerService);
export { GlobalErrorHandlerService };
