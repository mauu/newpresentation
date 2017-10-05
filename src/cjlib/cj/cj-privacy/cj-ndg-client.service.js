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
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
/**
 * Client Http per recuperare le informazioni di privacy
 */
var CjNdgClientService = (function () {
    function CjNdgClientService(config, http) {
        this.config = config;
        this.http = http;
        // da usare quando avremo gli indirizzi veri dei servizi rest
        // private cjBaseUrl = '';
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    CjNdgClientService.prototype.getPrivacyByNdg = function (ndg) {
        var _this = this;
        return this.config.getNpuServicesBaseUrl()
            .concatMap(function (url) {
            return _this.http.get(url + ("clienti/" + ndg + "/privacy"), { headers: _this.headers });
        });
    };
    return CjNdgClientService;
}());
CjNdgClientService = __decorate([
    Injectable(),
    __param(0, Inject(APP_CONFIG)),
    __metadata("design:paramtypes", [Object, HttpClient])
], CjNdgClientService);
export { CjNdgClientService };
