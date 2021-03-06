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
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { APP_CONFIG } from '../../module.config';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatMap';
/**
 * Client Http per recuperare le informazioni di cjCustomContext
 */
var CjCustomContextClientService = (function () {
    function CjCustomContextClientService(config, http) {
        this.config = config;
        this.http = http;
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    /**
     * Esegue la chiamata http per recupeare il contesto custom passando come url param il token e la key
     */
    CjCustomContextClientService.prototype.getCustomContext = function (token, key) {
        var _this = this;
        return this.config.getSessionManagerBaseUrl()
            .concatMap(function (url) { return _this.http.get(url + ("/npu-sm-v0/api/cjcontext/" + token + "/payload/" + key), { headers: _this.headers }); });
    };
    CjCustomContextClientService.prototype.setCustomContext = function (token, key, data) {
        var _this = this;
        return this.config.getSessionManagerBaseUrl()
            .concatMap(function (url) { return _this.http.post(url + ("/npu-sm-v0/api/cjcontext/" + token + "/payload/" + key), data, {
            headers: _this.headers,
            observe: 'body',
            responseType: 'json'
        }); });
    };
    CjCustomContextClientService.prototype.removeCustomContext = function (token, key) {
        // TODO invoke servizio rest per rimuovere custom context
        return Observable.of({});
    };
    return CjCustomContextClientService;
}());
CjCustomContextClientService = __decorate([
    Injectable(),
    __param(0, Inject(APP_CONFIG)),
    __metadata("design:paramtypes", [Object, HttpClient])
], CjCustomContextClientService);
export { CjCustomContextClientService };
