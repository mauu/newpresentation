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
import { NbpStyle } from './../nbp-commons/nbp-commons.enums';
import { NbpAccordionComponent } from './nbp-accordion.component';
var TestHostComponent = (function () {
    function TestHostComponent() {
        this.title = 'Test Accordion';
    }
    return TestHostComponent;
}());
__decorate([
    ViewChild(NbpAccordionComponent),
    __metadata("design:type", NbpAccordionComponent)
], TestHostComponent.prototype, "innerAccordion", void 0);
TestHostComponent = __decorate([
    Component({
        selector: 'demo-accordion',
        template: "\n    <nbp-accordion\n      [nbpTitle]=\"title\"\n      [nbpStyle]=\"accordionStyle\">\n      <h4> LOREM IPSUM</h4>\n      <div class=\"row\"> \n        <div class=\"col-md-12\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \n          ut labore et dolore magna aliqua. \n          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo \n          consequat. \n        </div>\n        <div class=\"col-md-12\">\n          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </div>  \n      </div>\n    </nbp-accordion>\n\n  "
    })
], TestHostComponent);
export { TestHostComponent };
describe('Testing NbpAccordion', function () {
    var hostComponent;
    var fixture;
    var nbpAccordionElememt;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, NbpAccordionComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TestHostComponent);
        hostComponent = fixture.componentInstance;
        nbpAccordionElememt = fixture.debugElement.query(By.css('.panel')); // find nbpAccordion
        fixture.detectChanges();
    });
    it('should create the component', function () {
        expect(hostComponent).toBeTruthy();
    });
    it('should has the title (uppercase)', function () {
        nbpAccordionElememt = fixture.debugElement.query(By.css('.panel .title'));
        var expectedTitle = hostComponent.title.toUpperCase();
        expect(nbpAccordionElememt.nativeElement.innerText).toContain(expectedTitle);
    });
    it('should has the PRIMARY style when nbpAccordion hasn\'t the nbpStyle property', function () {
        expect(nbpAccordionElememt.nativeElement.classList.contains('nbp-panel-primary') &&
            !nbpAccordionElememt.nativeElement.classList.contains('panel-default')).toBe(true);
    });
    it('should has the DEFAULT style when nbpAccordion has nbpStyle = "DEFAULT"', function () {
        hostComponent.accordionStyle = NbpStyle.DEFAULT;
        fixture.detectChanges();
        expect(nbpAccordionElememt.nativeElement.classList.contains('nbp-panel-primary') &&
            nbpAccordionElememt.nativeElement.classList.contains('panel-default')).toBe(true);
    });
    it('should be opened when the parent invoke the open function', function () {
        hostComponent.innerAccordion.open();
        nbpAccordionElememt = fixture.debugElement.query(By.css('.panel .panel-collapse'));
        fixture.detectChanges();
        expect(hostComponent.innerAccordion.isCollapsed()).toBe(false);
        expect(nbpAccordionElememt.nativeElement.classList.contains('in') &&
            nbpAccordionElememt.nativeElement.classList.contains('panel-open')).toBe(true);
    });
    it('should be closed when the parent invoke the close function', function () {
        nbpAccordionElememt = fixture.debugElement.query(By.css('.panel .panel-collapse'));
        hostComponent.innerAccordion.open();
        fixture.detectChanges();
        hostComponent.innerAccordion.close();
        fixture.detectChanges();
        expect(hostComponent.innerAccordion.isCollapsed()).toBe(true);
        expect(nbpAccordionElememt.nativeElement.classList.contains('in') &&
            nbpAccordionElememt.nativeElement.classList.contains('panel-open')).toBe(false);
    });
    it('should emit nbpOnToggle event when the Accordion Title is clicked', function () {
        nbpAccordionElememt = fixture.debugElement.query(By.css('.panel .panel-heading'));
        var numberOfClick = 0;
        hostComponent.innerAccordion.nbpOnToggle.subscribe(function () {
            numberOfClick += 1;
        });
        nbpAccordionElememt.nativeElement.click();
        nbpAccordionElememt.nativeElement.click();
        fixture.detectChanges();
        expect(numberOfClick).toEqual(2);
    });
    it('should be opened when the Accordion Title is clicked one time', function () {
        nbpAccordionElememt = fixture.debugElement.query(By.css('.panel .panel-heading'));
        nbpAccordionElememt.nativeElement.click();
        fixture.detectChanges();
        expect(hostComponent.innerAccordion.isCollapsed()).toEqual(false);
    });
    it('should be closed when the Accordion Title is clicked two time', function () {
        nbpAccordionElememt = fixture.debugElement.query(By.css('.panel .panel-heading'));
        nbpAccordionElememt.nativeElement.click();
        nbpAccordionElememt.nativeElement.click();
        fixture.detectChanges();
        expect(hostComponent.innerAccordion.isCollapsed()).toEqual(true);
    });
});
