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
import { By } from '@angular/platform-browser';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NbpCheckboxComponent } from './nbp-checkbox.component';
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
    ViewChild(NbpCheckboxComponent),
    __metadata("design:type", NbpCheckboxComponent)
], TestHostComponent.prototype, "innerInputText", void 0);
TestHostComponent = __decorate([
    Component({
        selector: 'demo-checkbox',
        template: "\n  \n    <nbp-checkbox class=\"col-md-4 col-md-offset-1\"\n        name=\"checkbox1\"\n        nbpLabel=\"Is Active using nbpLabel\"\n        [(ngModel)] = \"user.isActive\"\n        [required] = required > \n      </nbp-checkbox>\n    <code>{{ user.isActive }}</code>\n    \n  "
    })
], TestHostComponent);
export { TestHostComponent };
describe('Testing NbpCheckbox Component', function () {
    // let component: NbpCheckboxComponent;
    var fixture;
    var inputTextDebugElement;
    var testHostComponent;
    var element;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            declarations: [
                TestHostComponent,
                NbpCheckboxComponent
            ]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TestHostComponent);
        testHostComponent = fixture.debugElement.componentInstance;
        inputTextDebugElement = fixture.debugElement.query(By.css('nbp-checkbox'));
        element = fixture.debugElement.query(By.css('input')).nativeElement;
        testHostComponent.user.isActive = false;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(testHostComponent).toBeTruthy();
    });
    it('should be checked after click onces', function () {
        element.click();
        fixture.detectChanges();
        expect(element.checked).toBeTruthy();
    });
    it('should be unchecked after click twice', function () {
        element.click();
        element.click();
        fixture.detectChanges();
        expect(element.checked).toBeFalsy();
    });
    it('should report check value to the ngModel', function () {
        element.click();
        fixture.detectChanges();
        expect(testHostComponent.user.isActive).toBeTruthy();
    });
    it('should report uncheck value to the ngModel', function () {
        element.click();
        element.click();
        fixture.detectChanges();
        expect(testHostComponent.user.isActive).toBeFalsy();
    });
});
