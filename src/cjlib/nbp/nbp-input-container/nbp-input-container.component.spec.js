var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NbpInputContainerComponent } from './nbp-input-container.component';
import { NbpInputTextComponent } from './../nbp-input-text/nbp-input-text.component';
var TestHostComponent = (function () {
    function TestHostComponent() {
        this.testLabel = '';
    }
    return TestHostComponent;
}());
TestHostComponent = __decorate([
    Component({
        selector: 'demo-input-container',
        template: "\n    <nbp-input-container\n      [nbpLabel]=\"testLabel\">\n    </nbp-input-container>\n  "
    })
], TestHostComponent);
export { TestHostComponent };
var TestHostComponentContainer = (function () {
    function TestHostComponentContainer() {
        this.testLabel = '';
        this.required = false;
        this.user = 'Danilo';
        this.showValidation = false;
        this.errorMessage = undefined;
    }
    return TestHostComponentContainer;
}());
TestHostComponentContainer = __decorate([
    Component({
        selector: 'demo-input-container-with-content',
        template: "\n    <nbp-input-container\n      [nbpLabel]=\"testLabel\">\n      <nbp-input-text [nbpShowValidation]=\"showValidation\" [(ngModel)]=\"user\" [required]=\"required\" [nbpErrorMessage]=\"errorMessage\"> \n      </nbp-input-text>\n    </nbp-input-container>\n  "
    })
], TestHostComponentContainer);
export { TestHostComponentContainer };
describe('NbpInputContainerComponent', function () {
    var hostComponent;
    var fixture;
    var nbpInputContainerElement;
    var hostComponentContainer;
    var fixtureContainer;
    var nbpInputContainerWithContentElement;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NbpInputContainerComponent, NbpInputTextComponent, TestHostComponent, TestHostComponentContainer],
            imports: [
                FormsModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TestHostComponent);
        hostComponent = fixture.componentInstance;
        nbpInputContainerElement = fixture.debugElement.query(By.css('nbp-input-container'));
        fixture.detectChanges();
        fixtureContainer = TestBed.createComponent(TestHostComponentContainer);
        hostComponentContainer = fixtureContainer.componentInstance;
        nbpInputContainerElement = fixture.debugElement.query(By.css('nbp-input-container'));
        fixture.detectChanges();
    });
    it('should create demo-input-container', function () {
        expect(hostComponent).toBeTruthy();
    });
    it('it should show empty label when i set nbpLabel property empty', function () {
        hostComponent.testLabel = '';
        fixture.detectChanges();
        var innerLabelElement = fixture.debugElement.query(By.css('label'));
        expect(innerLabelElement.nativeElement.innerText).toBe(hostComponent.testLabel);
    });
    it('it should show label text when i set nbpLable with value', function () {
        hostComponent.testLabel = 'Campo di Test';
        fixture.detectChanges();
        var innerLabelElement = fixture.debugElement.query(By.css('label'));
        expect(innerLabelElement.nativeElement.innerText).toBe(hostComponent.testLabel);
    });
    it('should create demo-input-container-with-content', function () {
        expect(hostComponentContainer).toBeTruthy();
    });
    it('it should show "*" after label, if child component is required', function () {
        hostComponentContainer.testLabel = 'Campo di Test';
        hostComponentContainer.required = true;
        fixtureContainer.detectChanges();
        var innerRequiredCharElement = fixtureContainer.debugElement.query(By.css('label span'));
        expect(innerRequiredCharElement.nativeElement.innerText).toBe('*');
    });
    it('it should highlight error status when child component is invalid', function () {
        hostComponentContainer.testLabel = 'Campo di Test';
        hostComponentContainer.required = true;
        hostComponentContainer.showValidation = true;
        fixtureContainer.detectChanges();
        var innerErrorMessageElement = fixtureContainer.debugElement.query(By.css('.error-message'));
        expect(innerErrorMessageElement).toBeTruthy();
    });
    it('it should show default error messages when child component is invalid', function () {
        hostComponentContainer.testLabel = 'Campo di Test';
        hostComponentContainer.required = true;
        hostComponentContainer.showValidation = true;
        fixtureContainer.detectChanges();
        var innerErrorMessageElement = fixtureContainer.debugElement.query(By.css('.error-message > span'));
        expect(innerErrorMessageElement.nativeElement.innerText.indexOf('Campo obbligatorio') !== -1).toBeTruthy();
    });
    it('it should show custom error message when child component is invalid', function () {
        hostComponentContainer.testLabel = 'Campo di Test';
        hostComponentContainer.required = true;
        hostComponentContainer.showValidation = true;
        hostComponentContainer.errorMessage = 'Messaggio di Errore Custom';
        fixtureContainer.detectChanges();
        var innerErrorMessageElement = fixtureContainer.debugElement.query(By.css('.error-message > span'));
        expect(innerErrorMessageElement.nativeElement.innerText).toBe('Messaggio di Errore Custom');
    });
});
