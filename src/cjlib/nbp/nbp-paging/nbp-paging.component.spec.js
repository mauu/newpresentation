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
import { NbpPagingComponent } from './nbp-paging.component';
var TestHostPagingComponent = (function () {
    function TestHostPagingComponent() {
        this.pagingStep = {
            currentParentLabel: 'nome Step',
            pages: [
                {
                    label: 'nome step 1',
                    status: 'done'
                },
                {
                    label: 'nome step 2',
                    status: 'active'
                },
                {
                    label: 'nome step 3',
                    status: 'todo'
                },
                {
                    label: 'nome step 4',
                    status: 'todo'
                }
            ]
        };
    }
    return TestHostPagingComponent;
}());
__decorate([
    ViewChild(NbpPagingComponent),
    __metadata("design:type", NbpPagingComponent)
], TestHostPagingComponent.prototype, "innerPaging", void 0);
TestHostPagingComponent = __decorate([
    Component({
        selector: ' demo-paging',
        template: "\n    <nbp-paging\n      [nbpConfiguration]=\"pagingStep\">\n    </nbp-paging>\n  "
    })
], TestHostPagingComponent);
export { TestHostPagingComponent };
describe('Testing NbpPaging Component', function () {
    var testPagingComponent;
    var fixture;
    var pageStepDebugElements;
    var leftSidePageStepDebugElements;
    var rightSidePageStepDebugElements;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                NbpPagingComponent,
                TestHostPagingComponent
            ]
        })
            .compileComponents();
    }));
    describe('when you instantiate a NbpPaginComponent with 4 step', function () {
        beforeEach(function () {
            fixture = TestBed.createComponent(TestHostPagingComponent);
            testPagingComponent = fixture.componentInstance;
            fixture.detectChanges();
        });
        it('should be created', function () {
            expect(testPagingComponent).toBeTruthy();
        });
        describe('And you configure it with 1 step \'Active\', 1 step \'Done\', and 2 steps \'Todo\' ', function () {
            beforeEach(function () {
                pageStepDebugElements = fixture.debugElement.queryAll(By.css('li'));
                rightSidePageStepDebugElements = fixture.debugElement.queryAll(By.css('ul.pull-right li'));
                leftSidePageStepDebugElements = fixture.debugElement.queryAll(By.css('ul.pull-left li'));
                fixture.detectChanges();
            });
            it('should contain all 4 step configured', function () {
                expect(pageStepDebugElements.length).toBe(4);
            });
            it('should contain 2 steps todo on the right side of the page', function () {
                expect(rightSidePageStepDebugElements.length).toBe(2);
                expect(rightSidePageStepDebugElements[0].parent.nativeElement.classList).toContain('pull-right');
            });
            it('should contain 2 steps on the left side of the page', function () {
                expect(leftSidePageStepDebugElements.length).toBe(2);
                expect(leftSidePageStepDebugElements[0].parent.nativeElement.classList).toContain('pull-left');
            });
            describe('And on the left sideof the page', function () {
                var doneStepDebugElement;
                var activeStepDebugElement;
                var labelsActiveStepDebugElement;
                beforeEach(function () {
                    doneStepDebugElement = leftSidePageStepDebugElements[0].query(By.css('span'));
                    activeStepDebugElement = leftSidePageStepDebugElements[1].query(By.css('span'));
                    fixture.detectChanges();
                    labelsActiveStepDebugElement = activeStepDebugElement.parent.queryAll(By.css('label'));
                    fixture.detectChanges();
                });
                it('should be 1 step with \'Active\' status', function () {
                    expect(activeStepDebugElement.nativeElement.classList).toContain('active');
                    expect(activeStepDebugElement.nativeElement.classList).not.toContain('done');
                });
                it('should be 1 step with \'Done\' status', function () {
                    expect(doneStepDebugElement.nativeElement.classList).toContain('done');
                    expect(doneStepDebugElement.nativeElement.classList).not.toContain('active');
                });
                it('should be 2 label inside the \'Active\' Step', function () {
                    expect(labelsActiveStepDebugElement.length).toBe(2);
                });
                it('should contain step Label and step \'Active\' name as configured', function () {
                    var hostComponentStepLabel = testPagingComponent.innerPaging.nbpConfiguration.currentParentLabel.toLowerCase();
                    var hostComponentActiveStepName = testPagingComponent.innerPaging.nbpConfiguration.pages[1].label.toLowerCase();
                    var stepLabel = labelsActiveStepDebugElement[0].nativeElement;
                    var activeStepName = labelsActiveStepDebugElement[1].nativeElement;
                    expect(hostComponentActiveStepName).toBe(activeStepName.innerText.toLowerCase());
                    expect(hostComponentStepLabel).toBe(stepLabel.innerText.toLowerCase());
                });
            });
            describe('And yuo modify a status step from \'Todo\' to \'Active\' ', function () {
                var stepModified;
                beforeEach(function () {
                    stepModified = testPagingComponent.innerPaging.nbpConfiguration.pages[2];
                    stepModified.status = 'active';
                    fixture.detectChanges();
                    rightSidePageStepDebugElements = fixture.debugElement.queryAll(By.css('ul.pull-right li'));
                    leftSidePageStepDebugElements = fixture.debugElement.queryAll(By.css('ul.pull-left li'));
                    fixture.detectChanges();
                });
                it('should move from right to left side of the page in the thirdh position', function () {
                    expect(leftSidePageStepDebugElements.length).toBe(3);
                    expect(rightSidePageStepDebugElements.length).toBe(1);
                    var stepNameLabelElement = leftSidePageStepDebugElements[2].queryAll(By.css('label'))[1].nativeElement;
                    expect(stepNameLabelElement.innerText.toLowerCase()).toBe(stepModified.label);
                });
            });
            describe('And I modify a status step from \'Active\' to \'Todo\' ', function () {
                var stepModified;
                beforeEach(function () {
                    stepModified = testPagingComponent.innerPaging.nbpConfiguration.pages[1];
                    stepModified.status = 'todo';
                    fixture.detectChanges();
                    rightSidePageStepDebugElements = fixture.debugElement.queryAll(By.css('ul.pull-right li'));
                    leftSidePageStepDebugElements = fixture.debugElement.queryAll(By.css('ul.pull-left li'));
                    fixture.detectChanges();
                });
                it('should moves from left to right side of the page', function () {
                    expect(leftSidePageStepDebugElements.length).toBe(1);
                    expect(rightSidePageStepDebugElements.length).toBe(3);
                });
            });
        });
    });
});
