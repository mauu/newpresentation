var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { async, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NbpFormatterService } from './../../utility/nbp-formatter.service';
import { NbpDataSource } from './../nbp-datasource/nbp-datasource.service';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbpComboComponent } from './nbp-combo.component';
var NbpFormatterServiceMock = (function () {
    function NbpFormatterServiceMock() {
    }
    NbpFormatterServiceMock.prototype.displayValueTransformation = function (value, pipe, arg) {
        return value;
    };
    return NbpFormatterServiceMock;
}());
export { NbpFormatterServiceMock };
var TestHostComponent = (function () {
    function TestHostComponent() {
        this.items = ['primo elemento', 'secondo elemento', 'terzo elemento'];
        this.itemsDataSource = new NbpDataSource(this.items);
        this.selectedItem = this.items[1];
        this.inputDisabled = false;
        this.inputRequired = false;
        this.placeholder = 'Combo Box Mock';
        this.highlightedDefault = false;
    }
    TestHostComponent.prototype.onItemSelect = function (item) {
        this.itemSelectFromEvent = item;
    };
    return TestHostComponent;
}());
__decorate([
    ViewChild(NbpComboComponent),
    __metadata("design:type", NbpComboComponent)
], TestHostComponent.prototype, "innerInputText", void 0);
TestHostComponent = __decorate([
    Component({
        selector: 'demo-comobobox',
        template: "\n    <nbp-combo class=\"col-md-2\"\n      [(ngModel)]=\"selectedItem\"\n      [nbpDataSource]=\"itemsDataSource\"\n      [disabled]=\"inputDisabled\"\n      [required]=\"inputRequired\"\n      [nbpShowEmptyValue]=\"showEmptyValue\"\n      [placeholder]= \"placeholder\"\n      [nbpHighlightedDefault]=\"highlightedDefault\"\n      (select)=\"onItemSelect(item)\">\n    </nbp-combo>\n    <code>{{ selectedItem }}</code>\n  "
    })
], TestHostComponent);
export { TestHostComponent };
describe('Testing NbpCombo Component', function () {
    var fixture;
    var inputTextDebugElement;
    var testHostComponent;
    var element;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                BrowserAnimationsModule
            ],
            providers: [
                {
                    provide: NbpFormatterService,
                    useClass: NbpFormatterServiceMock
                },
                CurrencyPipe,
                DatePipe,
                DecimalPipe,
                LowerCasePipe,
                PercentPipe,
                UpperCasePipe
            ],
            declarations: [TestHostComponent, NbpComboComponent]
        })
            .compileComponents();
    }));
    describe('when the component allows to select empty value (nbpShowEmptyValue = true)', function () {
        var options;
        beforeEach(function () {
            fixture = TestBed.createComponent(TestHostComponent);
            inputTextDebugElement = fixture.debugElement.query(By.css('nbp-combo'));
            testHostComponent = fixture.debugElement.componentInstance;
            element = fixture.debugElement.query(By.css('input')).nativeElement;
            testHostComponent.showEmptyValue = true;
            fixture.detectChanges();
            element.click();
            options = fixture.debugElement.queryAll(By.css('li'));
            fixture.detectChanges();
        });
        it('should be created', function () {
            expect(testHostComponent).toBeTruthy();
        });
        it('should have 4 elements into the dropdown, the empty one followed by the real ones', function () {
            expect(testHostComponent.items.length + 1).toBe(options.length);
        });
        it('should show an empty element as first element of the dropdown', function () {
            var firstOptionValue = options[0].nativeElement.innerText;
            expect(firstOptionValue.trim()).toBe('');
        });
        describe('and I select the empty element from the dropdown', function () {
            var optionToSelect;
            beforeEach(function () {
                optionToSelect = options[0].nativeElement;
                optionToSelect.click();
                fixture.detectChanges();
            });
            it('should has null as ngModel', fakeAsync(function () {
                fixture.detectChanges();
                testHostComponent.innerInputText.select.subscribe(function (item) {
                    expect(item).toEqual(null);
                });
            }));
        });
    });
    describe('when the componente doesn\'t allow to select empty value (nbpShowEmptyValue = false)', function () {
        var options;
        beforeEach(function () {
            fixture = TestBed.createComponent(TestHostComponent);
            testHostComponent = fixture.debugElement.componentInstance;
            inputTextDebugElement = fixture.debugElement.query(By.css('nbp-combo'));
            element = fixture.debugElement.query(By.css('input')).nativeElement;
            testHostComponent.showEmptyValue = false;
            fixture.detectChanges();
            element.click();
            options = fixture.debugElement.queryAll(By.css('li'));
            // optionToSelect = fixture.debugElement.queryAll(By.css('li'))[1].nativeElement;
            fixture.detectChanges();
        });
        it('should be created', function () {
            expect(testHostComponent).toBeTruthy();
        });
        it('should have 3 elements into the dropdown', function () {
            expect(testHostComponent.items.length).toBe(options.length);
        });
    });
    describe('when I select an element', function () {
        beforeEach(function () {
            fixture = TestBed.createComponent(TestHostComponent);
            inputTextDebugElement = fixture.debugElement.query(By.css('nbp-combo'));
            testHostComponent = fixture.debugElement.componentInstance;
            element = fixture.debugElement.query(By.css('input')).nativeElement;
            testHostComponent.showEmptyValue = false;
            fixture.detectChanges();
        });
        var optionToSelect;
        beforeEach(function () {
            element.click();
            optionToSelect = fixture.debugElement.queryAll(By.css('li'))[0].nativeElement;
            optionToSelect.click();
            fixture.detectChanges();
        });
        it('should show the changed input value in the ngModel', fakeAsync(function () {
            fixture.detectChanges();
            expect(testHostComponent.selectedItem).toEqual(testHostComponent.items[0]);
        }));
    });
    describe('when disable combo', function () {
        beforeEach(function () {
            fixture = TestBed.createComponent(TestHostComponent);
            inputTextDebugElement = fixture.debugElement.query(By.css('nbp-combo'));
            testHostComponent = fixture.debugElement.componentInstance;
            element = fixture.debugElement.queryAll(By.css('input'))[0].nativeElement;
            testHostComponent.inputDisabled = true;
            fixture.detectChanges();
        });
        var elementDropdownInputBox;
        var elementDropdownButton;
        beforeEach(function () {
            elementDropdownInputBox = fixture.debugElement.queryAll(By.css('input'))[1].nativeElement;
            elementDropdownButton = fixture.debugElement.query(By.css('button')).nativeElement;
        });
        it('should has class \'input-box-disabled\' ', fakeAsync(function () {
            fixture.detectChanges();
            expect(elementDropdownInputBox.classList.contains('input-box-disabled')).toBeTruthy();
        }));
        it('should has disabled drowdown button', function () {
            fixture.detectChanges();
            expect(elementDropdownButton.classList.contains('collapse-disabled')).toBeTruthy();
        });
    });
    describe('when I configure a placeholder in the component', function () {
        beforeEach(function () {
            fixture = TestBed.createComponent(TestHostComponent);
            inputTextDebugElement = fixture.debugElement.query(By.css('nbp-combo'));
            testHostComponent = fixture.debugElement.componentInstance;
            element = fixture.debugElement.queryAll(By.css('input'))[0].nativeElement;
            testHostComponent.placeholder = 'Placeholder Text';
            fixture.detectChanges();
        });
        var elementDropdownInputBox;
        beforeEach(function () {
            elementDropdownInputBox = fixture.debugElement.queryAll(By.css('input'))[1].nativeElement;
        });
        it('should has \'Placeholder Text\' write in it', fakeAsync(function () {
            fixture.detectChanges();
            expect(elementDropdownInputBox.placeholder).toContain('Placeholder Text');
        }));
    });
    describe('when I configure nbpHighlightedDefault', function () {
        beforeEach(function () {
            fixture = TestBed.createComponent(TestHostComponent);
            inputTextDebugElement = fixture.debugElement.query(By.css('nbp-combo'));
            testHostComponent = fixture.debugElement.componentInstance;
            element = fixture.debugElement.queryAll(By.css('input'))[0].nativeElement;
            testHostComponent.highlightedDefault = true;
            fixture.detectChanges();
        });
        var elementDropdownInputBox;
        beforeEach(function () {
            elementDropdownInputBox = fixture.debugElement.queryAll(By.css('input'))[1].nativeElement;
            fixture.detectChanges();
            console.log('!!!' + elementDropdownInputBox.style.borderBottomColor);
        });
        it('should has highlight-default class applied', fakeAsync(function () {
            fixture.detectChanges();
            expect(elementDropdownInputBox.classList.contains('highlight-default')).toBeTruthy();
        }));
    });
});
