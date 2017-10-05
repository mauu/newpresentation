var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { async, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { NbpProgressComponent } from './nbp-progress.component';
import { By } from '@angular/platform-browser';
var DemoNbpProgressComponent = (function () {
    function DemoNbpProgressComponent() {
        this.steps = [
            { active: false, fillPercent: 100, label: 'step 1' },
            { active: true, fillPercent: 50, label: 'step 2' },
            { active: false, fillPercent: 0, label: 'step 3' }
        ];
    }
    return DemoNbpProgressComponent;
}());
DemoNbpProgressComponent = __decorate([
    Component({
        template: "\n    <nbp-progress \n      [nbpConfiguration]=\"steps\">\n    </nbp-progress>\n    "
    })
], DemoNbpProgressComponent);
describe('NbpProgressComponent', function () {
    var demoComponent;
    var demoFixture;
    var progressElement;
    var progressStepElements;
    var progressStepNameElement;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DemoNbpProgressComponent, NbpProgressComponent]
        })
            .compileComponents();
    }));
    describe('When I instatiate a progress component', function () {
        beforeEach(function () {
            demoFixture = TestBed.createComponent(DemoNbpProgressComponent);
            demoComponent = demoFixture.componentInstance;
            progressElement = demoFixture.debugElement.query(By.css('nbp-progress'));
            demoFixture.detectChanges();
            progressStepElements = demoFixture.debugElement.queryAll(By.css('.progress-steps-container > div'));
            demoFixture.detectChanges();
            progressStepNameElement = demoFixture.debugElement.queryAll(By.css('.progress-step-name'));
            demoFixture.detectChanges();
        });
        it('should be created', function () {
            expect(demoComponent).toBeTruthy();
        });
        it('should has the same step  as configured', function () {
            expect(progressStepElements.length).toEqual(demoComponent.steps.length);
        });
        it('should has all the steps named as configured', function () {
            progressStepNameElement.forEach(function (stepElement, index) {
                expect(stepElement.nativeElement.innerText).toContain(demoComponent.steps[index].label.toUpperCase());
            });
        });
        // describe('When one step is active and progress percent is different from 100%', () => {
        //   let firstProgressStepLabelDiv: HTMLDivElement;
        //   beforeEach(() => {
        //     demoComponent.steps[0].active = true;
        //     demoComponent.steps[0].fillPercent = 50;
        //     firstProgressStepLabelDiv = progressStepNameElement[0].nativeElement;
        //     demoFixture.detectChanges();
        //   });
        //   it('should has the arrow behind', () => {
        //     expect(firstProgressStepLabelDiv.classList.contains('active')).toBeTruthy();
        //     expect(firstProgressStepLabelDiv.classList.contains('arrowStep')).toBeTruthy();
        //   });
        // });
        describe('When one step is not active and progress percent is different from 100%', function () {
            var firstProgressStepLabelDiv;
            beforeEach(function () {
                demoComponent.steps[0].active = false;
                demoComponent.steps[0].fillPercent = 50;
                firstProgressStepLabelDiv = progressStepNameElement[0].nativeElement;
                demoFixture.detectChanges();
            });
            it('should hasn\'t the arrow behind', function () {
                expect(firstProgressStepLabelDiv.classList.contains('arrowStep')).not.toBeTruthy();
            });
        });
        describe('When one step get to 100% and is active', function () {
            var firstProgressStepLabelDiv;
            beforeEach(function () {
                demoComponent.steps[0].fillPercent = 100;
                demoComponent.steps[0].active = true;
                firstProgressStepLabelDiv = progressStepNameElement[0].nativeElement;
            });
            it('should don\'t has the arrow behind', function () {
                expect(firstProgressStepLabelDiv.classList.contains('arrowStep')).not.toBeTruthy();
            });
        });
    });
});
