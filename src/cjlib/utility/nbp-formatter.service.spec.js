import { TestBed } from '@angular/core/testing';
import { NbpFormatterService } from './nbp-formatter.service';
import { NbpPipe } from './../nbp/nbp-commons/nbp-commons.enums';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
describe('Testing NbpFormatter Service', function () {
    var nbpFormatterService;
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [NbpFormatterService,
                CurrencyPipe,
                DatePipe,
                DecimalPipe,
                LowerCasePipe,
                PercentPipe,
                UpperCasePipe,
            ]
        });
        nbpFormatterService = TestBed.get(NbpFormatterService);
    });
    it('should has displayValueTransformation function ', function () {
        expect(nbpFormatterService.displayValueTransformation).toBeDefined();
    });
    describe('When invoke displayValueTransformation with a value = \'15\' and transformation = \'currency\' value', function () {
        var formattedCurrencyValue;
        beforeEach(function () {
            spyOn(CurrencyPipe.prototype, 'transform').and.callThrough();
            formattedCurrencyValue = nbpFormatterService.displayValueTransformation(15, NbpPipe.CURRENCY);
        });
        it('should has called Currency pipe', function () {
            expect(CurrencyPipe.prototype.transform).toHaveBeenCalled();
        });
        it('should return a formatted \'USD15.00\'', function () {
            expect(formattedCurrencyValue).toBe('USD15.00');
        });
    });
    describe('When invoke displayValueTransformation with a \'15\' currency value', function () {
        var formattedCurrencyValue;
        beforeEach(function () {
            spyOn(CurrencyPipe.prototype, 'transform').and.callThrough();
            formattedCurrencyValue = nbpFormatterService.displayValueTransformation(15, NbpPipe.CURRENCY);
        });
        it('should has called Currency pipe', function () {
            expect(CurrencyPipe.prototype.transform).toHaveBeenCalled();
        });
        it('should return a formatted \'USD15.00\'', function () {
            expect(formattedCurrencyValue).toBe('USD15.00');
        });
    });
    describe('When invoke displayValueTransformation with a \'15\' currency value', function () {
        var formattedCurrencyValue;
        beforeEach(function () {
            spyOn(CurrencyPipe.prototype, 'transform').and.callThrough();
            formattedCurrencyValue = nbpFormatterService.displayValueTransformation(15, NbpPipe.CURRENCY, 'EUR');
        });
        it('should has called the Currency pipe', function () {
            expect(CurrencyPipe.prototype.transform).toHaveBeenCalled();
        });
        it('should return a formatted \'USD15.00\'', function () {
            expect(formattedCurrencyValue).toBe('EUR15.00');
        });
    });
    describe('When invoke displayValueTransformation with the numeric Date value \'266536800000\'', function () {
        var formattedDateValue;
        var dateNumberValue = Date.parse('06 13 1978');
        beforeEach(function () {
            spyOn(DatePipe.prototype, 'transform').and.callThrough();
            formattedDateValue = nbpFormatterService.displayValueTransformation(dateNumberValue, NbpPipe.DATE);
        });
        it('should has called the Data pipe', function () {
            expect(DatePipe.prototype.transform).toHaveBeenCalled();
        });
        it('should return a formatted \'13-06-1978\'', function () {
            expect(formattedDateValue).toBe('13-06-1978');
        });
    });
    describe('When invoke displayValueTransformation with a \'15\' decimal value', function () {
        var formattedDecimalValue;
        beforeEach(function () {
            spyOn(DecimalPipe.prototype, 'transform').and.callThrough();
            formattedDecimalValue = nbpFormatterService.displayValueTransformation(15, NbpPipe.DECIMAL, '3.1-4');
        });
        it('should has called the Decimal pipe', function () {
            expect(DecimalPipe.prototype.transform).toHaveBeenCalled();
        });
        it('should return a formatted \'015.0\'', function () {
            expect(formattedDecimalValue).toBe('015.0');
        });
    });
    describe('When invoke displayValueTransformation with a \'0.30\' number value', function () {
        var formattedPercentValue;
        var decimalNumber = 0.30;
        beforeEach(function () {
            spyOn(PercentPipe.prototype, 'transform').and.callThrough();
            formattedPercentValue = nbpFormatterService.displayValueTransformation(decimalNumber, NbpPipe.PERCENT, '1.0-1');
        });
        it('should has called the Decimal pipe', function () {
            expect(PercentPipe.prototype.transform).toHaveBeenCalled();
        });
        it('should return a formatted \'30%\'', function () {
            expect(formattedPercentValue).toBe('30%');
        });
    });
    describe('When invoke displayValueTransformation with \'HELLO World\' string  ', function () {
        var greetingString = 'HELLO World';
        var formattedgreetingString;
        beforeEach(function () {
            spyOn(LowerCasePipe.prototype, 'transform').and.callThrough();
            formattedgreetingString = nbpFormatterService.displayValueTransformation(greetingString, NbpPipe.LOWERCASE);
        });
        it('should has called the LowerCase pipe', function () {
            expect(LowerCasePipe.prototype.transform).toHaveBeenCalled();
        });
        it('should return a formatted \'hello world\'', function () {
            expect(formattedgreetingString).toBe('hello world');
        });
    });
    describe('When invoke displayValueTransformation with \'hELLO world\' string  ', function () {
        var greetingString = 'hELLO world';
        var formattedgreetingString;
        beforeEach(function () {
            spyOn(UpperCasePipe.prototype, 'transform').and.callThrough();
            formattedgreetingString = nbpFormatterService.displayValueTransformation(greetingString, NbpPipe.UPPERCASE);
        });
        it('should has called the UpperCase pipe', function () {
            expect(UpperCasePipe.prototype.transform).toHaveBeenCalled();
        });
        it('should return a formatted \'HELLO WORLD\'', function () {
            expect(formattedgreetingString).toBe('HELLO WORLD');
        });
    });
});
