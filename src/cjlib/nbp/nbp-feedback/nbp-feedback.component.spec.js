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
import { NbpFeedbackComponent } from './nbp-feedback.component';
import { NbpFeedbackType } from './nbp-feedback.enums';
import { NbpStyle } from './../nbp-commons/nbp-commons.enums';
import { NbpButtonComponent } from './../nbp-button/nbp-button.component';
var TestHostComponent = (function () {
    function TestHostComponent() {
        var _this = this;
        this.feedbackInfo = {
            title: 'Exapmle Title',
            mainMessage: 'Example Main Message',
            boxMessage: 'Example Box Message',
            errorMessage: '500',
            feedbackType: NbpFeedbackType.SUCCESS,
            onButtonClick: function (button) {
                _this.clickedButtonId = button.id;
            },
            buttons: [
                {
                    id: 'id1',
                    label: 'button1',
                    style: NbpStyle.SECONDARY,
                    visible: true,
                    disabled: false
                },
                {
                    id: 'id2',
                    label: 'button2',
                    style: NbpStyle.SECONDARY,
                    visible: true,
                    disabled: false
                },
                {
                    id: 'id3',
                    label: 'button3',
                    style: NbpStyle.SECONDARY,
                    visible: true,
                    disabled: false
                },
                {
                    id: 'id4',
                    label: 'button4',
                    style: NbpStyle.SECONDARY,
                    visible: true,
                    disabled: false
                }
            ]
        };
    }
    return TestHostComponent;
}());
__decorate([
    ViewChild(NbpFeedbackComponent),
    __metadata("design:type", NbpFeedbackComponent)
], TestHostComponent.prototype, "innerFeedbackComponent", void 0);
TestHostComponent = __decorate([
    Component({
        selector: 'demo-feedback',
        template: "\n    <nbp-feedback \n        [nbpTitle]='feedbackInfo.title'\n        [nbpMainMessage]='feedbackInfo.mainMessage'\n        [nbpFeedbackType]='feedbackInfo.feedbackType'\n        [nbpErrorCode]='feedbackInfo.errorMessage'\n        [nbpButtons]='feedbackInfo.buttons'\n        (nbpOnButtonClick)='feedbackInfo.onButtonClick($event)'\n        [nbpBoxMessage]='feedbackInfo.boxMessage' >\n      </nbp-feedback>\n      <div id=\"clickedButtonId\">{{clickedButtonId}}</div>\n  "
    })
], TestHostComponent);
export { TestHostComponent };
describe('NbpFeedback Component', function () {
    var fixture;
    var testHostComponent;
    var firstButton;
    var secondButton;
    var thirdButton;
    var nbpFeedbackComponent;
    var nbpFeedbackElement;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                TestHostComponent,
                NbpFeedbackComponent,
                NbpButtonComponent
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TestHostComponent);
        testHostComponent = fixture.debugElement.componentInstance;
        nbpFeedbackComponent = testHostComponent.innerFeedbackComponent;
        nbpFeedbackElement = fixture.debugElement.query(By.css('nbp-feedback'));
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(testHostComponent).toBeTruthy();
    });
    describe('When i set configuration', function () {
        it('should show title', function () {
            var title = nbpFeedbackElement.query(By.css('#title')).nativeElement.innerHTML;
            expect(title).toContain(testHostComponent.feedbackInfo.title);
        });
        it('should show main message', function () {
            var mainMessage = nbpFeedbackElement.query(By.css('#main-message')).nativeElement.innerHTML;
            expect(mainMessage).toContain(testHostComponent.feedbackInfo.mainMessage);
        });
        it('should show buttons box message', function () {
            var boxMessage = nbpFeedbackElement.query(By.css('#box-message')).nativeElement.innerHTML;
            expect(boxMessage).toContain(testHostComponent.feedbackInfo.boxMessage);
        });
        describe('And set feedback to SUCCESS', function () {
            beforeEach(function () {
                testHostComponent.feedbackInfo.feedbackType = NbpFeedbackType.SUCCESS;
                fixture.detectChanges();
            });
            it('should be positive feedback', function () {
                var classes = nbpFeedbackElement.query(By.css('#icon')).nativeElement.classList;
                expect(classes).toContain('success');
            });
        });
        describe('And set feedback to WARNING', function () {
            beforeEach(function () {
                testHostComponent.feedbackInfo.feedbackType = NbpFeedbackType.WARNING;
                testHostComponent.feedbackInfo.errorMessage += ' internal server error';
                fixture.detectChanges();
            });
            it('should show error code message', function () {
                var errorCode = nbpFeedbackElement.query(By.css('#error-code')).nativeElement.innerHTML;
                expect(errorCode).toContain(testHostComponent.feedbackInfo.errorMessage);
            });
            it('should be warning feedback', function () {
                var classes = nbpFeedbackElement.query(By.css('#icon')).nativeElement.classList;
                expect(classes).toContain('warning');
            });
        });
        describe('And set feedback to ERROR', function () {
            beforeEach(function () {
                testHostComponent.feedbackInfo.feedbackType = NbpFeedbackType.ERROR;
                fixture.detectChanges();
            });
            it('should be negative feedback', function () {
                var classes = nbpFeedbackElement.query(By.css('#icon')).nativeElement.classList;
                expect(classes).toContain('error');
            });
        });
        describe('when has four buttons configured', function () {
            beforeEach(function () {
                testHostComponent.feedbackInfo.feedbackType = NbpFeedbackType.ERROR;
                fixture.detectChanges();
            });
            it('should show only three buttons', function () {
                var buttons = nbpFeedbackElement.queryAll(By.css('nbp-button'));
                expect(buttons.length).not.toBe(testHostComponent.feedbackInfo.buttons);
                expect(buttons.length).toBe(3);
            });
        });
        describe('When configured with buttons', function () {
            describe('And the buttons are more than three', function () {
                it('should show only three buttons', function () {
                    var buttons = nbpFeedbackElement.queryAll(By.css('nbp-button'));
                    expect(buttons.length).not.toBe(testHostComponent.feedbackInfo.buttons);
                    expect(buttons.length).toBe(3);
                });
            });
            describe('And i click the', function () {
                beforeEach(function () {
                    var buttons = nbpFeedbackElement.queryAll(By.css('button'));
                    firstButton = buttons[0].nativeElement;
                    secondButton = buttons[1].nativeElement;
                    thirdButton = buttons[2].nativeElement;
                });
                describe('first button', function () {
                    it('should emit nbpOnButtonClick event', function () {
                        spyOn(testHostComponent.feedbackInfo, 'onButtonClick').and.callThrough();
                        nbpFeedbackComponent.nbpOnButtonClick.subscribe(function (eventData) {
                            expect(eventData).toBeTruthy();
                        });
                        fixture.detectChanges();
                        firstButton.click();
                        fixture.detectChanges();
                        expect(testHostComponent.feedbackInfo.onButtonClick).toHaveBeenCalled();
                    });
                    it('should display \"id1\" string on the page', function () {
                        fixture.detectChanges();
                        firstButton.click();
                        fixture.detectChanges();
                        var clickedButtonIdFromHtml = fixture.debugElement.query(By.css('#clickedButtonId')).nativeElement.innerHTML;
                        expect(clickedButtonIdFromHtml).toBe(testHostComponent.feedbackInfo.buttons[0].id);
                    });
                });
                describe('the second', function () {
                    it('should emit nbpOnButtonClick event', function () {
                        spyOn(testHostComponent.feedbackInfo, 'onButtonClick').and.callThrough();
                        nbpFeedbackComponent.nbpOnButtonClick.subscribe(function (eventData) {
                            expect(eventData).toBeTruthy();
                        });
                        fixture.detectChanges();
                        secondButton.click();
                        fixture.detectChanges();
                        expect(testHostComponent.feedbackInfo.onButtonClick).toHaveBeenCalled();
                    });
                    it('should display \"id2\" string on the page', function () {
                        fixture.detectChanges();
                        secondButton.click();
                        fixture.detectChanges();
                        var clickedButtonIdFromHtml = fixture.debugElement.query(By.css('#clickedButtonId')).nativeElement.innerHTML;
                        expect(clickedButtonIdFromHtml).toBe(testHostComponent.feedbackInfo.buttons[1].id);
                    });
                });
                describe('and the third', function () {
                    it('should emit nbpOnButtonClick event', function () {
                        spyOn(testHostComponent.feedbackInfo, 'onButtonClick').and.callThrough();
                        nbpFeedbackComponent.nbpOnButtonClick.subscribe(function (eventData) {
                            expect(eventData).toBeTruthy();
                        });
                        fixture.detectChanges();
                        thirdButton.click();
                        fixture.detectChanges();
                        expect(testHostComponent.feedbackInfo.onButtonClick).toHaveBeenCalled();
                    });
                    it('should display \"id3\" string on the page', function () {
                        fixture.detectChanges();
                        thirdButton.click();
                        fixture.detectChanges();
                        var clickedButtonIdFromHtml = fixture.debugElement.query(By.css('#clickedButtonId')).nativeElement.innerHTML;
                        expect(clickedButtonIdFromHtml).toBe(testHostComponent.feedbackInfo.buttons[2].id);
                    });
                });
            });
        });
    });
});
