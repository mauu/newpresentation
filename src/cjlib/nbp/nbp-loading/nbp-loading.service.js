var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
var NbpLoadingService = (function () {
    function NbpLoadingService() {
        /**
         * ReplaySubject -> manda a ogni subscriber anche se si registra dopo tutta la storia dello stream dall'inizio
         *
         * BehaviorSubject -> manda a ogni subscriver solo l'item più recente presente nello stream
         */
        this._loadingSpinnerStatus = new BehaviorSubject({ id: null, status: false });
        this.statusArray = new Array();
    }
    // private handleMultipleActivationStatus = (value: INbpLoadingStatus) => {
    //   console.log(id)
    //   if (value.status ) {
    //     this.statusArray.push(value.id);
    //     let statusForId = this.statusArray.filter((elem) => elem === value.id);
    //     if (statusForId.length === 1) {
    //       return true;
    //     }
    //   } else {
    //     let statusIndex = this.statusArray.indexOf(value.id);
    //     if (statusIndex !== -1) {
    //       this.statusArray.splice(statusIndex, 1);
    //     }
    //     statusIndex = this.statusArray.indexOf(value.id);
    //      if (statusIndex === -1) {
    //        return true;
    //      }
    //   }
    //   return false;
    // }
    NbpLoadingService.prototype.handleMultipleActivationStatus = function (key) {
        var _this = this;
        return function (value) {
            console.log(key);
            if (value.id === key) {
                if (value.status) {
                    _this.statusArray.push(value.id);
                    var statusForId = _this.statusArray.filter(function (elem) { return elem === value.id; });
                    if (statusForId.length === 1) {
                        return true;
                    }
                }
                else {
                    var statusIndex = _this.statusArray.indexOf(value.id);
                    if (statusIndex !== -1) {
                        _this.statusArray.splice(statusIndex, 1);
                    }
                    statusIndex = _this.statusArray.indexOf(value.id);
                    if (statusIndex === -1) {
                        return true;
                    }
                }
            }
            return false;
        };
    };
    /**
     * Permette di settare la visibilità del componente loadingSpinner
     */
    NbpLoadingService.prototype.setLoadingSpinnerStatus = function (id, showLoadingSpinner) {
        var loadingStatus = {
            id: id,
            status: showLoadingSpinner
        };
        this._loadingSpinnerStatus.next(loadingStatus);
    };
    /**
     * Recupera la visibilità del componente loadingSpinner
     */
    NbpLoadingService.prototype.getLoadingSpinnerStatus = function (id) {
        return this._loadingSpinnerStatus.filter(this.handleMultipleActivationStatus(id));
    };
    return NbpLoadingService;
}());
NbpLoadingService = __decorate([
    Injectable()
], NbpLoadingService);
export { NbpLoadingService };
