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
import { Component, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NbpDatepickerHtml5Component } from './nbp-datepicker-html5.component';
var TestHostComponent = (function () {
    function TestHostComponent() {
        this.inputName = 'inputTextTest';
        this.user = {
            name: 'sonia pini',
            isActive: false,
            toggle: 'toggled'
        };
    }
    return TestHostComponent;
}());
__decorate([
    ViewChild(NbpDatepickerHtml5Component),
    __metadata("design:type", NbpDatepickerHtml5Component)
], TestHostComponent.prototype, "innerInputDate", void 0);
TestHostComponent = __decorate([
    Component({
        selector: 'demo-datepicker',
        template: "\n  \n    <nbp-datepicker-html5 class=\"col-md-4 col-md-offset-1\"\n      name=\"datePicker_1\" \n      [(ngModel)]=\"user.birthDate\" \n      placeholder=\"inserisci data\" \n      [required]=\"required\"></nbp-datepicker-html5>\n    <code>{{ user.birthDate }}</code>\n    \n  "
    })
], TestHostComponent);
export { TestHostComponent };
describe('Testing NbpDatepicker Component', function () {
    var fixture;
    var inputDateDebugElement;
    var testHostComponent;
    var element;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            declarations: [
                TestHostComponent,
                NbpDatepickerHtml5Component
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TestHostComponent);
        testHostComponent = fixture.debugElement.componentInstance;
        inputDateDebugElement = fixture.debugElement.query(By.css('nbp-datepicker-html5'));
        element = fixture.debugElement.query(By.css('input')).nativeElement;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(testHostComponent).toBeTruthy();
    });
});
