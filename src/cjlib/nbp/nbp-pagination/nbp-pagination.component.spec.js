var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NbpPaginationComponent } from './nbp-pagination.component';
var DemoNbpPaginationComponent = (function () {
    function DemoNbpPaginationComponent() {
        this.paginationStatus = { pageNumber: 3, pageSize: 2, totalRecords: 7 };
        this.pageWindowsSize = 3;
        this.showPaginationStatus = { next: true, prev: true, page: true, last: true, first: true };
        this.disablePaginationStatus = { next: false, prev: false, page: false, last: false, first: false };
    }
    DemoNbpPaginationComponent.prototype.onClickFirstEvent = function (onClickFirstEvent) {
        this.eventData = onClickFirstEvent;
    };
    DemoNbpPaginationComponent.prototype.onClickLastEvent = function (onClickLastEvent) {
        this.eventData = onClickLastEvent;
    };
    DemoNbpPaginationComponent.prototype.onClickPrevEvent = function (onClickPrevEvent) {
        this.eventData = onClickPrevEvent;
    };
    DemoNbpPaginationComponent.prototype.onClickNextEvent = function (onClickNextEvent) {
        this.eventData = onClickNextEvent;
    };
    DemoNbpPaginationComponent.prototype.onClickPageChangeEvent = function (onClickPageChangeEvent) {
        this.eventData = onClickPageChangeEvent;
    };
    DemoNbpPaginationComponent.prototype.onClickGoToPageEvent = function (onClickGoToPageEvent) {
        this.eventData = onClickGoToPageEvent;
    };
    return DemoNbpPaginationComponent;
}());
__decorate([
    ViewChild(NbpPaginationComponent),
    __metadata("design:type", NbpPaginationComponent)
], DemoNbpPaginationComponent.prototype, "paginationComponent", void 0);
DemoNbpPaginationComponent = __decorate([
    Component({
        template: "\n    <nbp-pagination \n    [nbpPaginationStatus]=\"paginationStatus\"\n    [nbpPageWindowSize]=\"pageWindowsSize\"\n    [nbpShowPaginationStatus]=\"showPaginationStatus\"\n    [nbpDisablePaginationStatus]=\"disablePaginationStatus\"\n    (nbpOnFirst)=\"onClickFirstEvent($event)\"\n    (nbpOnLast)=\"onClickLastEvent($event)\"\n    (nbpOnPrev)=\"onClickPrevEvent($event)\"\n    (nbpOnNext)=\"onClickNextEvent($event)\"\n    (nbpOnPageChange)=\"onClickPageChangeEvent($event)\"\n    (nbpOnGoToPage)=\"onClickGoToPageEvent($event)\"\n    ></nbp-pagination>\n    "
    })
], DemoNbpPaginationComponent);
describe('NbpPaginationComponent', function () {
    describe('When I have 7 total records, 2 record per page, 3 WindowsPages and I go to the third page', function () {
        var paginationComponent;
        var demoComponent;
        var demoFixture;
        var paginationElement;
        beforeEach(async(function () {
            TestBed.configureTestingModule({
                declarations: [DemoNbpPaginationComponent, NbpPaginationComponent],
            }).compileComponents();
        }));
        beforeEach(async(function () {
            // create TestHostComponent
            demoFixture = TestBed.createComponent(DemoNbpPaginationComponent);
            demoComponent = demoFixture.componentInstance;
            paginationComponent = demoComponent.paginationComponent;
            paginationElement = demoFixture.debugElement.query(By.css('nbp-pagination'));
            demoFixture.detectChanges(); // trigger initial data binding
        }));
        describe('When DemoNbpPaginationComponent is instantiated', function () {
            var activeButton;
            it('should create', function () {
                expect(demoComponent).toBeTruthy();
                expect(paginationComponent).toBeTruthy();
            });
            it('should has the third page selected as I configured', function () {
                activeButton = demoFixture.debugElement.queryAll(By.css('.active'))[0].nativeElement;
                demoFixture.detectChanges();
                expect(activeButton).toBeTruthy();
                expect(activeButton.innerText).toBe('3');
            });
            it('should hasn\'t prev window "..." button', function () {
                var elementWindowBefore = demoFixture.debugElement.queryAll(By.css('#windowPrevButton'));
                expect(elementWindowBefore.length).toBe(0);
            });
            describe('And I click next window "..." element', function () {
                beforeEach(async(function () {
                    var pulsanteWindowNext = demoFixture.debugElement.queryAll(By.css('#windowNextButton'))[0].nativeElement;
                    pulsanteWindowNext.click();
                    demoFixture.detectChanges();
                }));
                it('should has only one page', function () {
                    var pageButtons = demoFixture.debugElement.queryAll(By.css('#windowPageButton'));
                    expect(pageButtons.length).toBe(1);
                });
                it('should hasn\'t next window "..." element due to this is the last window', function () {
                    var elementWindowBefore = demoFixture.debugElement.queryAll(By.css('#windowNextButton'));
                    expect(elementWindowBefore.length).toBe(0);
                });
            });
        });
        describe('When click on "<<PRIMO" button', function () {
            it('should emit a nbpOnFirst event', function () {
                spyOn(demoComponent, 'onClickFirstEvent');
                paginationComponent.nbpOnFirst.subscribe(function (eventData) {
                    expect(eventData).toBeTruthy();
                });
                var pulsanteFirst = demoFixture.debugElement.queryAll(By.css('#firstButton'))[0].nativeElement;
                demoFixture.detectChanges();
                pulsanteFirst.click();
                demoFixture.detectChanges();
                expect(demoComponent.onClickFirstEvent).toHaveBeenCalled();
            });
        });
        describe('When click on "ULTIMO>>" button', function () {
            it('should emit a nbpOnLast event', function () {
                spyOn(demoComponent, 'onClickLastEvent');
                paginationComponent.nbpOnLast.subscribe(function (eventData) {
                    expect(eventData).toBeTruthy();
                });
                var pulsanteLast = demoFixture.debugElement.queryAll(By.css('#lastButton'))[0].nativeElement;
                demoFixture.detectChanges();
                pulsanteLast.click();
                demoFixture.detectChanges();
                expect(demoComponent.onClickLastEvent).toHaveBeenCalled();
            });
        });
        describe('When click on "<" button', function () {
            it('should emit a nbpOnPrev event', function () {
                spyOn(demoComponent, 'onClickPrevEvent');
                paginationComponent.nbpOnPrev.subscribe(function (eventData) {
                    expect(eventData).toBeTruthy();
                });
                var pulsantePrev = demoFixture.debugElement.queryAll(By.css('#prevButton'))[0].nativeElement;
                demoFixture.detectChanges();
                pulsantePrev.click();
                demoFixture.detectChanges();
                expect(demoComponent.onClickPrevEvent).toHaveBeenCalled();
            });
        });
        describe('When click on ">" button', function () {
            it('should emit a nbpOnNext event', function () {
                spyOn(demoComponent, 'onClickNextEvent');
                paginationComponent.nbpOnNext.subscribe(function (eventData) {
                    expect(eventData).toBeTruthy();
                });
                var pulsanteNext = demoFixture.debugElement.queryAll(By.css('#nextButton'))[0].nativeElement;
                demoFixture.detectChanges();
                pulsanteNext.click();
                demoFixture.detectChanges();
                expect(demoComponent.onClickNextEvent).toHaveBeenCalled();
            });
        });
        describe('When click on a button', function () {
            it('should emit a nbpOnPageChange event', function () {
                spyOn(demoComponent, 'onClickPageChangeEvent');
                paginationComponent.nbpOnPageChange.subscribe(function () {
                });
                var pulsanteFirst = demoFixture.debugElement.queryAll(By.css('#firstButton'))[0].nativeElement;
                pulsanteFirst.click();
                demoFixture.detectChanges();
                expect(demoComponent.onClickPageChangeEvent).toHaveBeenCalled();
            });
        });
        describe('When click on "..." Before button', function () {
            it('should emit a nbpOnGoToPage event', function () {
                var countCallsOnClickToPageEvent = 0;
                var spy = spyOn(demoComponent, 'onClickGoToPageEvent');
                paginationComponent.nbpOnGoToPage.subscribe(function (eventData) {
                    expect(eventData).toBeTruthy();
                    countCallsOnClickToPageEvent = countCallsOnClickToPageEvent + 1;
                });
                var pulsanteWindowNext = demoFixture.debugElement.queryAll(By.css('#windowNextButton'))[0].nativeElement;
                pulsanteWindowNext.click();
                demoFixture.detectChanges();
                var pulsanteWindowBefore = demoFixture.debugElement.queryAll(By.css('#windowPrevButton'))[0].nativeElement;
                pulsanteWindowBefore.click();
                demoFixture.detectChanges();
                expect(demoComponent.onClickGoToPageEvent).toHaveBeenCalled();
                expect(countCallsOnClickToPageEvent).toEqual(2);
                expect(spy.calls.count()).toEqual(2);
            });
        });
        describe('When click on "..." Next button', function () {
            it('should emit a nbpOnGoToPage event', function () {
                spyOn(demoComponent, 'onClickGoToPageEvent');
                paginationComponent.nbpOnGoToPage.subscribe(function () {
                });
                var pulsanteWindowNext = demoFixture.debugElement.queryAll(By.css('#windowNextButton'))[0].nativeElement;
                pulsanteWindowNext.click();
                demoFixture.detectChanges();
                expect(demoComponent.onClickGoToPageEvent).toHaveBeenCalled();
            });
        });
        describe('When click on a Page button "1"', function () {
            it('should emit a nbpOnGoToPage event', function () {
                spyOn(demoComponent, 'onClickGoToPageEvent');
                paginationComponent.nbpOnGoToPage.subscribe(function (eventData) {
                    expect(eventData).toBeTruthy();
                    expect(eventData.pageNumber).toEqual(1);
                });
                var pulsanteWindowPageButton = demoFixture.debugElement.queryAll(By.css('#windowPageButton'))[0].nativeElement;
                pulsanteWindowPageButton.click();
                demoFixture.detectChanges();
                expect(demoComponent.onClickGoToPageEvent).toHaveBeenCalled();
            });
        });
        describe('When I disable all button', function () {
            beforeEach(async(function () {
                // paginationComponent.nbpShowPaginationStatus = { next: true, prev: false, page: true, last: true, first: true };
                demoComponent.disablePaginationStatus = { next: true, prev: true, page: true, last: true, first: true };
                demoFixture.detectChanges();
            }));
            describe('And I click on "<<PRIMO" button', function () {
                it('shouldn\'t emit nbpOnFirst event', function () {
                    spyOn(demoComponent, 'onClickFirstEvent');
                    paginationComponent.nbpOnFirst.subscribe(function () {
                    });
                    var pulsanteFirst = demoFixture.debugElement.queryAll(By.css('#firstButton'))[0].nativeElement;
                    demoFixture.detectChanges();
                    pulsanteFirst.click();
                    demoFixture.detectChanges();
                    expect(demoComponent.onClickFirstEvent).not.toHaveBeenCalled();
                });
            });
            describe('And click on "ULTIMO>>" button', function () {
                it('shouldn\'t emit nbpOnLast event', function () {
                    spyOn(demoComponent, 'onClickLastEvent');
                    paginationComponent.nbpOnLast.subscribe(function () {
                    });
                    var pulsanteLast = demoFixture.debugElement.queryAll(By.css('#lastButton'))[0].nativeElement;
                    demoFixture.detectChanges();
                    pulsanteLast.click();
                    demoFixture.detectChanges();
                    expect(demoComponent.onClickLastEvent).not.toHaveBeenCalled();
                });
            });
            describe('And click on "<" button', function () {
                it('shouldn\'t emit nbpOnPrev event', function () {
                    spyOn(demoComponent, 'onClickPrevEvent');
                    paginationComponent.nbpOnPrev.subscribe(function () {
                    });
                    var pulsantePrev = demoFixture.debugElement.queryAll(By.css('#prevButton'))[0].nativeElement;
                    demoFixture.detectChanges();
                    pulsantePrev.click();
                    demoFixture.detectChanges();
                    expect(demoComponent.onClickPrevEvent).not.toHaveBeenCalled();
                });
            });
            describe('And click on ">" button', function () {
                it('shouldn\'t emit nbpOnNext event', function () {
                    spyOn(demoComponent, 'onClickNextEvent');
                    paginationComponent.nbpOnNext.subscribe(function () {
                    });
                    var pulsanteNext = demoFixture.debugElement.queryAll(By.css('#nextButton'))[0].nativeElement;
                    demoFixture.detectChanges();
                    pulsanteNext.click();
                    demoFixture.detectChanges();
                    expect(demoComponent.onClickNextEvent).not.toHaveBeenCalled();
                });
            });
            describe('And click on a button', function () {
                it('shouldn\'t emit nbpOnPageChange event', function () {
                    spyOn(demoComponent, 'onClickPageChangeEvent');
                    paginationComponent.nbpOnPageChange.subscribe(function () {
                    });
                    var pulsanteFirst = demoFixture.debugElement.queryAll(By.css('#firstButton'))[0].nativeElement;
                    pulsanteFirst.click();
                    demoFixture.detectChanges();
                    expect(demoComponent.onClickPageChangeEvent).not.toHaveBeenCalled();
                });
            });
        });
        describe('When I hide all button', function () {
            beforeEach(async(function () {
                // paginationComponent.nbpShowPaginationStatus = { next: true, prev: false, page: true, last: true, first: true };
                demoComponent.showPaginationStatus = { next: false, prev: false, page: false, last: false, first: false };
                demoFixture.detectChanges();
            }));
            it('should first Button not visible', function () {
                var elementWindowBefore = demoFixture.debugElement.queryAll(By.css('#firstButton'));
                expect(elementWindowBefore.length).toBe(0);
            });
            it('should prev Button not visible', function () {
                var elementWindowBefore = demoFixture.debugElement.queryAll(By.css('#prevButton'));
                expect(elementWindowBefore.length).toBe(0);
            });
            it('should windowPageButton Button not visible', function () {
                var elementWindowBefore = demoFixture.debugElement.queryAll(By.css('#windowPageButton'));
                expect(elementWindowBefore.length).toBe(0);
            });
            it('should next Button not visible', function () {
                var elementWindowBefore = demoFixture.debugElement.queryAll(By.css('#nextButton'));
                expect(elementWindowBefore.length).toBe(0);
            });
            it('should last Button not visible', function () {
                var elementWindowBefore = demoFixture.debugElement.queryAll(By.css('#lastButton'));
                expect(elementWindowBefore.length).toBe(0);
            });
        });
    });
});
