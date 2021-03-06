var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { CjContextClientService } from './cj-context-client.service';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
/**
 * Servizio utilizzato per recuperare le informazioni di contesto
 *
 */
var CjContextService = (function () {
    // TODO capire come passare l'indirizzo dell'ambiente PUV giusto
    // un idea 'semplice' ma poco elegante potrebbe essere quella di chiederlo in input nei metodi,
    // altrimenti bisogna lavorare a livello di provider
    function CjContextService(cjContextClient) {
        this.cjContextClient = cjContextClient;
        this._contextInfoSource = new ReplaySubject(1);
    }
    /**
     * Crea un nuovo contesto applicativo
     * @return il token del contesto
     */
    CjContextService.prototype.createNewCjContext = function (ndg, application, canale) {
        return this.cjContextClient.creaCjContext(ndg, application, canale);
    };
    /**
     * Permette di salvare il contesto applicativo all'interno del servizio
     * @param ICjContext cjContext contesto applicativo
     */
    CjContextService.prototype.setCurrentCjContext = function (cjContext) {
        this._contextInfoSource.next(cjContext);
    };
    /**
     * Recupera il contesto applicativo salvato nel servizio
     * @return ICjContext contesto applicativo salvato nel servizio
     */
    CjContextService.prototype.getCurrentCjContext = function () {
        return this._contextInfoSource.asObservable();
    };
    CjContextService.prototype.getCurrentToken = function () {
        return this._token;
    };
    CjContextService.prototype._setCurrentToken = function (token) {
        this._token = token;
        console.debug('Salvato token corrente: ' + this._token);
    };
    /**
     * Restituisce le informazioni di contesto chiamando il servizio rest dedicato.
     * Se il contensto è già stato recuperato restituisce tale contesto
     * @param  string token
     * @return Observable<ICjContext> contesto applicativo da servizio rest
     */
    CjContextService.prototype.getCjContextByToken = function (token) {
        this._setCurrentToken(token);
        if (!this._contextInfo) {
            return this.cjContextClient.getCjContext(token);
        }
        else {
            return Observable.of(this._contextInfo);
        }
    };
    return CjContextService;
}());
CjContextService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [CjContextClientService])
], CjContextService);
export { CjContextService };
