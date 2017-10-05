var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { NbpModalComponent } from './nbp-modal.component';
import { NbpStyle, NbpSize } from './../nbp-commons/nbp-commons.enums';
import { NbpButtonComponent } from './../nbp-button/nbp-button.component';
import { By } from '@angular/platform-browser';
var TestHostComponent = (function () {
    function TestHostComponent() {
        this.isOpened = false;
        this.nbpSize = NbpSize;
        this.size = NbpSize.SM;
        this.buttons = [
            {
                id: 'conferma1',
                label: 'Conferma1',
                disabled: false,
                visible: true,
                style: NbpStyle.PRIMARY
            },
            {
                id: 'conferma2',
                label: 'Conferma2',
                disabled: false,
                visible: true,
                style: NbpStyle.PRIMARY
            },
            {
                id: 'conferma3',
                label: 'Conferma3',
                disabled: false,
                visible: true,
                style: NbpStyle.PRIMARY
            },
            {
                id: 'conferma4',
                label: 'Conferma4',
                disabled: false,
                visible: true,
                style: NbpStyle.PRIMARY
            },
            {
                id: 'conferma5',
                label: 'Conferma5',
                disabled: false,
                visible: true,
                style: NbpStyle.PRIMARY
            },
            {
                id: 'annulla',
                label: 'Annulla',
                disabled: false,
                visible: true,
                style: NbpStyle.DEFAULT
            },
        ];
    }
    TestHostComponent.prototype.onClick = function (button) {
        switch (button.id) {
            case 'conferma':
                console.log(button.label + ' premuto');
                break;
            case 'annulla':
                console.log(button.label + ' premuto');
                break;
        }
    };
    TestHostComponent.prototype.openModal = function () {
        this.isOpened = true;
    };
    TestHostComponent.prototype.closeModal = function () {
        this.isOpened = false;
    };
    return TestHostComponent;
}());
__decorate([
    ViewChild('componente'),
    __metadata("design:type", NbpModalComponent)
], TestHostComponent.prototype, "modalComponent", void 0);
TestHostComponent = __decorate([
    Component({
        template: "\n    <nbp-modal #componente\n        [nbpTitle]=\"'Titolo Esempio'\" \n        [(nbpOpened)]='isOpened'\n        [nbpButtons]='buttons'\n        (nbpOnButtonClicked)='onClick($event)'\n        [nbpSize]=\"size\"\n        >\n          Lorem ipsum dolor sit amet, \n    </nbp-modal>\n    "
    }),
    __metadata("design:paramtypes", [])
], TestHostComponent);
describe('NbpModal Component', function () {
    var fixture;
    var modalDebugElement;
    var testHostComponent;
    var element;
    var modal;
    var displayValue;
    var modalContainerElement;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                TestHostComponent,
                NbpModalComponent,
                NbpButtonComponent
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TestHostComponent);
        testHostComponent = fixture.componentInstance;
        modalContainerElement = fixture.debugElement.query(By.css('.nbp-modal-container')).nativeElement;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(testHostComponent).toBeTruthy();
    });
    describe('When I configure a small size', function () {
        beforeEach(function () {
            testHostComponent.size = NbpSize.SM;
            fixture.detectChanges();
        });
        it('should has class \'container__small\' applied', function () {
            expect(modalContainerElement.classList).toContain('container__small');
        });
    });
    describe('When I configure a medium size', function () {
        beforeEach(function () {
            testHostComponent.size = NbpSize.MD;
            fixture.detectChanges();
        });
        it('should has class \'container__medium\' applied', function () {
            expect(modalContainerElement.classList).toContain('container__medium');
        });
    });
    describe('When I configure a large size', function () {
        beforeEach(function () {
            testHostComponent.size = NbpSize.LG;
            fixture.detectChanges();
        });
        it('should has class \'container__large\' applied', function () {
            expect(modalContainerElement.classList).toContain('container__large');
        });
    });
    describe('When the modal is closed', function () {
        beforeEach(function () {
            modal = fixture.debugElement.query(By.css('.nbp-modal')).nativeElement;
            testHostComponent.isOpened = false;
            fixture.detectChanges();
        });
        describe('and I turn nbpOnened to true', function () {
            beforeEach(function () {
                fixture.detectChanges();
                testHostComponent.isOpened = true;
                fixture.detectChanges();
                displayValue = modal.style.display;
            });
            it('should the modal be visible', function () {
                expect(displayValue).not.toContain('none');
                expect(displayValue).toContain('block');
            });
        });
        describe('and I invoke the open() method', function () {
            var eventlaunched = false;
            beforeEach(function () {
                testHostComponent.modalComponent.nbpOnOpen.subscribe(function () {
                    eventlaunched = true;
                });
                testHostComponent.modalComponent.open();
                fixture.detectChanges();
                displayValue = modal.style.display;
            });
            it('should be open the modal', function () {
                expect(displayValue).not.toContain('none');
                expect(displayValue).toContain('block');
            });
            it('should be launch an event', function () {
                expect(eventlaunched).toBeTruthy();
            });
        });
    });
    describe('When the modal is opened', function () {
        beforeEach(function () {
            modal = fixture.debugElement.query(By.css('.nbp-modal')).nativeElement;
            testHostComponent.isOpened = true;
            fixture.detectChanges();
        });
        describe('and I turn nbpOnened to false', function () {
            beforeEach(function () {
                testHostComponent.isOpened = false;
                fixture.detectChanges();
                displayValue = modal.style.display;
            });
            it('should be close the modal', function () {
                expect(displayValue).not.toContain('block');
                expect(displayValue).toBe('none');
            });
        });
        describe('And I invoke the close() public method', function () {
            var eventlaunched = false;
            beforeEach(function () {
                testHostComponent.modalComponent.nbpOnClose.subscribe(function () {
                    eventlaunched = true;
                });
                testHostComponent.modalComponent.close();
                fixture.detectChanges();
                displayValue = modal.style.display;
            });
            it('should be close the modal', function () {
                expect(displayValue).not.toBe('block');
                expect(displayValue).toBe('none');
            });
            it('should be launch an event', function () {
                expect(eventlaunched).toBeTruthy();
            });
        });
        describe(' I press on the X button', function () {
            var xButton;
            beforeEach(function () {
                xButton = fixture.debugElement.query(By.css('.ico-azioni-elimina'));
                xButton.triggerEventHandler('click', null);
                fixture.detectChanges();
                displayValue = modal.style.display;
            });
            it('should be close the modal', function () {
                expect(displayValue).not.toBe('block');
                expect(displayValue).toBe('none');
            });
        });
    });
    describe('When modal is initialized and opened', function () {
        var testComponentButtonsArray;
        var firstButtonLabel;
        var lastButtonLabel;
        beforeEach(function () {
            testHostComponent.isOpened = true;
        });
        describe('And I configure more then 5 button', function () {
            beforeEach(function () {
                testComponentButtonsArray = fixture.debugElement.queryAll(By.css('nbp-button'));
                fixture.detectChanges();
                firstButtonLabel = testComponentButtonsArray[0].queryAll(By.css('span'))[0].nativeElement;
                lastButtonLabel = testComponentButtonsArray[4].queryAll(By.css('span'))[0].nativeElement;
                fixture.detectChanges();
            });
            it('should show just the first 5 button', function () {
                expect(testHostComponent.modalComponent.nbpButtons.length).toBe(6);
                expect(testComponentButtonsArray.length).toBe(5);
                expect(testComponentButtonsArray.length).not.toBe(6);
            });
            it('should show the first button', function () {
                expect(firstButtonLabel.innerText.toLocaleUpperCase).toBe(testHostComponent.buttons[0].label.toLocaleUpperCase);
            });
            it('should show the last button', function () {
                expect(lastButtonLabel.innerText.toLocaleUpperCase).toBe(testHostComponent.buttons[4].label.toLocaleUpperCase);
            });
        });
        describe('and when I press a button', function () {
            var testComponentButton;
            beforeEach(function () {
                testComponentButton = fixture.debugElement.queryAll(By.css('nbp-button button'))[0].nativeElement;
                fixture.detectChanges();
            });
            it('should be launch an \'nbpOnButtonClicked\' event', function () {
                testHostComponent.modalComponent.nbpOnButtonClicked.subscribe(function (eventHandler) {
                    expect(eventHandler.id).toBe(testHostComponent.buttons[0].id);
                });
                testComponentButton.click();
            });
        });
    });
});
