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
import { NbpPipe } from './../nbp/nbp-commons/nbp-commons.enums';
import { CjlibSettings } from './../settings';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
var NbpFormatterService = (function () {
    function NbpFormatterService(currencyPipe, datePipe, decimalPipe, lowercasePipe, percentPipe, uppercasePipe) {
        this.currencyPipe = currencyPipe;
        this.datePipe = datePipe;
        this.decimalPipe = decimalPipe;
        this.lowercasePipe = lowercasePipe;
        this.percentPipe = percentPipe;
        this.uppercasePipe = uppercasePipe;
    }
    NbpFormatterService.prototype.displayValueTransformation = function (value, pipe, arg) {
        var transformedValue = value;
        var format;
        switch (pipe) {
            case NbpPipe.CURRENCY:
                transformedValue = this.currencyPipe.transform(value, arg);
                break;
            case NbpPipe.DATE:
                format = arg ? arg : CjlibSettings.DATE_FORMAT;
                transformedValue = this.datePipe.transform(value, format);
                break;
            case NbpPipe.DECIMAL:
                format = arg ? arg : CjlibSettings.DECIMAL_FORMAT;
                transformedValue = this.decimalPipe.transform(value, format);
                break;
            case NbpPipe.LOWERCASE:
                transformedValue = this.lowercasePipe.transform(value);
                break;
            case NbpPipe.PERCENT:
                format = arg ? arg : CjlibSettings.DECIMAL_FORMAT;
                transformedValue = this.percentPipe.transform(value, format);
                break;
            case NbpPipe.UPPERCASE:
                transformedValue = this.uppercasePipe.transform(value);
                break;
            default:
                transformedValue = value;
                break;
        }
        return transformedValue;
    };
    return NbpFormatterService;
}());
NbpFormatterService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [CurrencyPipe,
        DatePipe,
        DecimalPipe,
        LowerCasePipe,
        PercentPipe,
        UpperCasePipe])
], NbpFormatterService);
export { NbpFormatterService };
