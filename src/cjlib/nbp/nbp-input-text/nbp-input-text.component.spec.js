var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
/* tslint:disable:no-unused-variable */
import { async, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NbpInputTextComponent } from './nbp-input-text.component';
var TestHostComponent = (function () {
    function TestHostComponent() {
        this.inputName = 'inputTextTest';
        this.inputPlaceholder = 'Inserisci Nome...';
        this.inputDisabled = false;
        this.inputRequired = false;
        this.roundBorder = false;
        this.inputMinlength = null;
        this.inputMaxlength = null;
        this.testIco = 'ico-comuni-search';
        this.user = {
            firstName: 'Carlo',
            lastName: 'Bonamico'
        };
    }
    return TestHostComponent;
}());
__decorate([
    ViewChild(NbpInputTextComponent),
    __metadata("design:type", NbpInputTextComponent)
], TestHostComponent.prototype, "innerInputText", void 0);
TestHostComponent = __decorate([
    Component({
        selector: 'demo-accordion',
        template: "\n  \n    <nbp-input-text\n      [name]=\"inputName\"\n      [(ngModel)]=\"user.firstName\"\n      [placeholder]=\"inputPlaceholder\" \n      [disabled]=\"inputDisabled\"\n      [required]=\"inputRequired\"\n      [minlength]=\"inputMinlength\"\n      [maxlength]=\"inputMaxlength\"\n      nbpIcon=\"testIco\">\n    </nbp-input-text>\n    <code>{{ user.firstName | uppercase }}</code>\n    \n  "
    })
], TestHostComponent);
export { TestHostComponent };
describe('Testing NbpInputTextComponent', function () {
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
            ],
            declarations: [
                TestHostComponent, NbpInputTextComponent
            ],
            providers: []
        });
        TestBed.compileComponents();
    }));
    describe('basic behaviors', function () {
        var inputTextDebugElement;
        var inputTextNativeElement;
        var testHostComponent;
        var element;
        // let inputTextInstance: NbpInputTextComponent;
        var inputElement;
        beforeEach(function () {
            fixture = TestBed.createComponent(TestHostComponent);
            fixture.detectChanges();
            testHostComponent = fixture.debugElement.componentInstance;
            inputTextDebugElement = fixture.debugElement.query(By.css('nbp-input-text'));
            element = fixture.debugElement.query(By.css('input')).nativeElement;
            // inputTextNativeElement = <HTMLInputElement> inputTextDebugElement.nativeElement;
            // inputTextInstance = inputTextDebugElement.componentInstance;
            // inputElement = <HTMLInputElement>inputTextNativeElement.querySelector('input');
        });
        it('should create the nbpInputTextComponet', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                expect(testHostComponent).toBeTruthy();
                return [2 /*return*/];
            });
        }); });
        it('should be enabled when the nbpInputTextComponet hasn\'t the "disabled" property', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                testHostComponent.inputDisabled = false;
                fixture.detectChanges();
                expect(inputTextDebugElement.nativeElement.attributes.getNamedItem('disabled')).toBe(null);
                return [2 /*return*/];
            });
        }); });
        it('should be disabled when the nbpInputTextComponet has the "disabled" property', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                testHostComponent.inputDisabled = true;
                fixture.detectChanges();
                expect(inputTextDebugElement.nativeElement.attributes.getNamedItem('disabled')).toBe(null);
                return [2 /*return*/];
            });
        }); });
        it('should be not required when the nbpInputTextComponet hasn\'t the "required" property', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                testHostComponent.inputRequired = false;
                fixture.detectChanges();
                expect(inputTextDebugElement.nativeElement.attributes.getNamedItem('required')).toBe(null);
                return [2 /*return*/];
            });
        }); });
        it('should be required when the nbpInputTextComponet has the "required" property', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                testHostComponent.inputRequired = true;
                fixture.detectChanges();
                expect(inputTextDebugElement.nativeElement.attributes.getNamedItem('required')).not.toBe(null);
                return [2 /*return*/];
            });
        }); });
        it('should be invalid when the nbpInputTextComponet has the "required" property and it is empty', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                testHostComponent.inputRequired = true;
                testHostComponent.user.firstName = '';
                inputTextDebugElement = fixture.debugElement.query(By.css('.textfield-box'));
                fixture.detectChanges();
                expect(inputTextDebugElement.nativeElement.classList.contains('ng-invalid')).toBe(true);
                return [2 /*return*/];
            });
        }); });
        it('should be valid when the nbpInputTextComponet has the "required" property and it is not empty', function () { return __awaiter(_this, void 0, void 0, function () {
            var inputText;
            return __generator(this, function (_a) {
                fixture.detectChanges();
                testHostComponent.inputRequired = true;
                inputText = 'S';
                element.value = inputText;
                element.dispatchEvent(new Event('input'));
                fixture.detectChanges();
                expect(testHostComponent.user.firstName).toEqual(inputText);
                expect(inputTextDebugElement.nativeElement.classList.contains('ng-invalid')).toBe(false);
                return [2 /*return*/];
            });
        }); });
        it('should be always valid when the nbpInputTextComponet hasn\'t the "required" property', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                testHostComponent.inputRequired = false;
                testHostComponent.user.firstName = '';
                inputTextDebugElement = fixture.debugElement.query(By.css('.textfield-box'));
                fixture.detectChanges();
                expect(inputTextDebugElement.nativeElement.classList.contains('ng-invalid')).toBe(false);
                return [2 /*return*/];
            });
        }); });
        it('should has the minlength when the nbpInputTextComponet has the "minlength" property', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                testHostComponent.inputMinlength = 2;
                fixture.detectChanges();
                expect(inputTextDebugElement.nativeElement.attributes.getNamedItem('minlength').value).toBe('2');
                return [2 /*return*/];
            });
        }); });
        it('should be invalid when the nbpInputTextComponet has the \'minlength\' property and the ngModel doesn\'t' +
            'respect the minlenght', function () { return __awaiter(_this, void 0, void 0, function () {
            var inputText;
            return __generator(this, function (_a) {
                fixture.detectChanges();
                testHostComponent.inputMinlength = 2;
                inputText = 'S';
                element.value = inputText;
                element.dispatchEvent(new Event('input'));
                fixture.detectChanges();
                expect(inputTextDebugElement.nativeElement.classList.contains('ng-invalid')).toBe(true);
                return [2 /*return*/];
            });
        }); });
        it('should be valid when the nbpInputTextComponet has the \'minlength\' property and the ngModel respects the minlenght', function () { return __awaiter(_this, void 0, void 0, function () {
            var inputText;
            return __generator(this, function (_a) {
                fixture.detectChanges();
                testHostComponent.inputMinlength = 2;
                inputText = 'Sonia';
                element.value = inputText;
                element.dispatchEvent(new Event('input'));
                fixture.detectChanges();
                expect(inputTextDebugElement.nativeElement.classList.contains('ng-invalid')).toBe(false);
                return [2 /*return*/];
            });
        }); });
        it('should has the maxlength when the nbpInputTextComponet has the \'maxlength\' property', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                testHostComponent.inputMaxlength = 10;
                fixture.detectChanges();
                expect(inputTextDebugElement.nativeElement.attributes.getNamedItem('maxlength').value).toBe('10');
                return [2 /*return*/];
            });
        }); });
        it('should be invalid when the nbpInputTextComponet has the \'maxlength\' property and the ngModel doesn\'t' +
            'respect the maxlenght', function () { return __awaiter(_this, void 0, void 0, function () {
            var inputText;
            return __generator(this, function (_a) {
                fixture.detectChanges();
                testHostComponent.inputMaxlength = 3;
                inputText = 'Soni';
                element.value = inputText;
                element.dispatchEvent(new Event('input'));
                fixture.detectChanges();
                expect(inputTextDebugElement.nativeElement.classList.contains('ng-invalid')).toBe(true);
                return [2 /*return*/];
            });
        }); });
        it('should be valid when the nbpInputTextComponet has the \'maxlength\' property and the ngModel respects the manlenght', function () { return __awaiter(_this, void 0, void 0, function () {
            var inputText;
            return __generator(this, function (_a) {
                fixture.detectChanges();
                testHostComponent.inputMaxlength = 10;
                inputText = 'Sonia';
                element.value = inputText;
                element.dispatchEvent(new Event('input'));
                fixture.detectChanges();
                expect(element.classList.contains('ng-invalid')).toBe(false);
                return [2 /*return*/];
            });
        }); });
        it('should show the changed input value in the ngModel', fakeAsync(function () {
            fixture.detectChanges();
            var inputText = 'test';
            element.value = inputText;
            element.dispatchEvent(new Event('input'));
            tick();
            fixture.detectChanges();
            // expect it to be the uppercase version
            expect(fixture.debugElement
                .query(By.css('code'))
                .nativeElement
                .textContent).toEqual(inputText.toUpperCase());
            expect(testHostComponent.user.firstName).toEqual(inputText);
        }));
    });
});
