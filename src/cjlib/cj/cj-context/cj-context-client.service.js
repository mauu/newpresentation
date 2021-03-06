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
import { APP_CONFIG } from '../../module.config';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
/**
 * Client Http per recuperare le informazioni di cjContext
 */
var CjContextClientService = (function () {
    function CjContextClientService(config, http) {
        this.config = config;
        this.http = http;
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    /**
     * Esegue la chiamata http per recupeare il contesto passando come url param il token
     */
    CjContextClientService.prototype.getCjContext = function (token) {
        var _this = this;
        return this.config.getSessionManagerBaseUrl()
            .concatMap(function (url) {
            return _this.http.get(url + ("/npu-sm-v0/api/cjcontext/" + token), { headers: _this.headers });
        });
    };
    /**
     * Esegue la chiamata http per creare un nuovo contesto securizzato a partire da un NDG
     */
    CjContextClientService.prototype.creaCjContext = function (ndg, application, canale) {
        var _this = this;
        return this.config.getSessionManagerBaseUrl()
            .concatMap(function (url) {
            return _this.http.post(url + "/npu-sm-v0/api/cjcontext", { 'ndg': ndg, 'application': application, 'canale': canale }, { headers: _this.headers });
        });
    };
    return CjContextClientService;
}());
CjContextClientService = __decorate([
    Injectable(),
    __param(0, Inject(APP_CONFIG)),
    __metadata("design:paramtypes", [Object, HttpClient])
], CjContextClientService);
export { CjContextClientService };
