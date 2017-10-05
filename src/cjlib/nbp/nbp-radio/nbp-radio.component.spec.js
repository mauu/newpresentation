var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { async, TestBed } from '@angular/core/testing';
import { NbpRadioComponent } from './nbp-radio.component';
import { By } from '@angular/platform-browser';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
var TestHostComponent = (function () {
    function TestHostComponent() {
        this.inputName = 'RadioTest';
        this.model = {
            name: 'formTest',
            selection: ''
        };
        this.nbpDisplayInline = true;
        this.nbpYellowBorder = false;
        this.disabled = false;
    }
    return TestHostComponent;
}());
__decorate([
    ViewChild(NbpRadioComponent),
    __metadata("design:type", NbpRadioComponent)
], TestHostComponent.prototype, "innerInputText", void 0);
__decorate([
    ViewChild('testRadioForm'),
    __metadata("design:type", NgForm)
], TestHostComponent.prototype, "radioForm", void 0);
TestHostComponent = __decorate([
    Component({
        selector: 'demo-checkbox',
        template: "\n        <nbp-radio\n          [(ngModel)]=\"model.selection\" \n          name=\"selectionGroup\" \n          value=\"selection1\"  \n          [nbpDisplayInline]=\"nbpDisplayInline\" \n          [nbpYellowBorder]=\"nbpYellowBorder\" \n        >label Transcuded</nbp-radio>\n\n        <nbp-radio\n          nbpLabel=\"label Configurated\"\n          [(ngModel)]=\"model.selection\" \n          name=\"selectionGroup\" \n          value=\"selection2\"  \n          [nbpDisplayInline]=\"nbpDisplayInline\" \n          [nbpYellowBorder]=\"nbpYellowBorder\" \n          required=\"false\"\n          [disabled]=\"disabled\"\n        ></nbp-radio>      \n  "
    })
], TestHostComponent);
export { TestHostComponent };
describe('Testing NbpRadio Component', function () {
    var component;
    var fixture;
    var firstRadioContainerDisplayCssProperty;
    var secondRadioContainerDisplayCssProperty;
    var firstRadioElement;
    var secondRadioElement;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            declarations: [
                TestHostComponent,
                NbpRadioComponent
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        firstRadioElement = fixture.debugElement.queryAll(By.css('input[type=\'radio\']'))[0].nativeElement;
        secondRadioElement = fixture.debugElement.queryAll(By.css('input[type=\'radio\']'))[1].nativeElement;
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    describe('When inspect the 2 nbp-radio elements', function () {
        var nbpRadioLabelElements;
        var nbpRadioRadioContainerElement;
        beforeEach(function () {
            nbpRadioLabelElements = fixture.debugElement.queryAll(By.css('label'));
            nbpRadioRadioContainerElement = fixture.debugElement.queryAll(By.css('.iradio-container'));
        });
        it('should contains 2 label in total ', function () {
            expect(nbpRadioLabelElements.length).toBe(2);
        });
        it('should contain a label \'label Transcuded\' ', function () {
            expect(nbpRadioLabelElements[0].nativeElement.innerText).toBe('label Transcuded');
        });
        it('should contain a label \'label Transcuded\' ', function () {
            expect(nbpRadioLabelElements[1].nativeElement.innerText).toBe('label Configurated');
        });
        it('should be positioned in one line as configured', function () {
            firstRadioContainerDisplayCssProperty = nbpRadioRadioContainerElement[0].nativeElement.style;
            secondRadioContainerDisplayCssProperty = nbpRadioRadioContainerElement[1].nativeElement.style;
            expect(firstRadioContainerDisplayCssProperty.display).toBe('inline-block');
            expect(secondRadioContainerDisplayCssProperty.display).toBe('inline-block');
        });
        it('should have id auto assigned', function () {
            expect(firstRadioElement.id).toContain('nbp-radio-');
        });
        describe('When click the first radio button', function () {
            beforeEach(function () {
                firstRadioElement.click();
                fixture.detectChanges();
            });
            it('should be selected', function () {
                expect(firstRadioElement.checked).toBeTruthy();
            });
            it('should the other radio button not selected', function () {
                expect(secondRadioElement.checked).toBeFalsy();
            });
            it('should the model has the \'selection1\' value', function () {
                expect(component.model.selection).toContain('selection1');
                expect(component.innerInputText.value).toContain('selection1');
            });
        });
        describe('When configure all nbp-radio to display itself as block element', function () {
            beforeEach(function () {
                component.nbpDisplayInline = false;
                fixture.detectChanges();
            });
            it('should be positioned in vertical direction', function () {
                firstRadioContainerDisplayCssProperty = nbpRadioRadioContainerElement[0].nativeElement.style;
                secondRadioContainerDisplayCssProperty = nbpRadioRadioContainerElement[1].nativeElement.style;
                fixture.detectChanges();
                expect(firstRadioContainerDisplayCssProperty.display).toBe('block');
                expect(secondRadioContainerDisplayCssProperty.display).toBe('block');
            });
        });
        describe('When the second nbp-radio is disabled ', function () {
            beforeEach(function () {
                component.disabled = true;
                firstRadioElement = fixture.debugElement.queryAll(By.css('input[type=\'radio\']'))[0].nativeElement;
                secondRadioElement = fixture.debugElement.queryAll(By.css('input[type=\'radio\']'))[1].nativeElement;
                fixture.detectChanges();
            });
            it('should not be selectable', function () {
                secondRadioElement.click();
                fixture.detectChanges();
                expect(secondRadioElement.checked).toBeFalsy();
            });
        });
    });
});
