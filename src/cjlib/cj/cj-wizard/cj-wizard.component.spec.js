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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { NbpProgressComponent } from './../../nbp/nbp-progress/nbp-progress.component';
import { NbpPagingComponent } from './../../nbp/nbp-paging/nbp-paging.component';
import { NbpButtonComponent } from './../../nbp/nbp-button/nbp-button.component';
import { NbpLoadingComponent } from './../../nbp/nbp-loading/nbp-loading.component';
import { TestCjWizardContextSource } from './../cj-wizard-context-source/cj-wizard-context-source.service';
import { CjCustomContextService } from './../cj-context/cj-custom-context.service';
import { CjWizardComponent } from './cj-wizard.component';
import { CjWizardHelper } from './cj-wizard-helper.service';
import { Observable } from 'rxjs/Observable';
import { CjWizardPageComponent } from './../cj-wizard-page/cj-wizard-page.component';
import { CjWizardStepComponent } from './../cj-wizard-step/cj-wizard-step.component';
import { NbpLoadingService } from './../../nbp/nbp-loading/nbp-loading.service';
export var CONTEXT = {
    id: 'POS_VENDITA',
    state: {
        id: 'POS_VENDITA',
        currentStepId: 'Step_1',
        currentPageId: 'Step_1_Page_2',
        previousStepId: 'Step_1',
        previousPageId: 'Step_1_Page_1'
    },
    data: {
        ragioneSociale: 'InfoGroup s.r.l.',
        quantita: 2,
        autorizzazione: true
    }
};
var PosWizardContainer = (function () {
    function PosWizardContainer() {
        this.data = {
            ragioneSociale: 'InfoGroup s.r.l.',
            quantita: 1,
            autorizzazione: true,
        };
    }
    PosWizardContainer.prototype.getWizardData = function () {
        return this.data;
    };
    ;
    PosWizardContainer.prototype.setWizardData = function (data) {
        this.data = data;
    };
    return PosWizardContainer;
}());
export { PosWizardContainer };
;
var CjCustomContextServiceMock = (function () {
    function CjCustomContextServiceMock() {
    }
    CjCustomContextServiceMock.prototype.setCustomContextByTokenAndKey = function (key, data) {
        return Observable.of(data);
    };
    CjCustomContextServiceMock.prototype.getCustomContextByTokenAndKey = function (key) {
        return Observable.of(CONTEXT);
    };
    return CjCustomContextServiceMock;
}());
export { CjCustomContextServiceMock };
var TestHostComponent = (function () {
    function TestHostComponent(contextService) {
        this.contextService = contextService;
        this.configuration = {
            id: 'POS_VENDITA',
            name: 'AcquistoPos',
        };
        this.currentState = {
            id: 'POS_VENDITA',
            currentStepId: 'Step_1',
            currentPageId: 'Step_1_Page_1',
            previousStepId: '',
            previousPageId: ''
        };
        this.data = {
            ragioneSociale: 'InfoGroup s.r.l.',
            quantita: 1,
            autorizzazione: true,
        };
        this.showPaging = true;
        this.dataContainer = new PosWizardContainer();
        this.wizardContextSource = new TestCjWizardContextSource(this.contextService, this.currentState.id);
    }
    Object.defineProperty(TestHostComponent.prototype, "cjData", {
        get: function () { return this.dataContainer.getWizardData(); },
        set: function (data) { this._cjData = data; },
        enumerable: true,
        configurable: true
    });
    ;
    TestHostComponent.prototype.onPageEnter = function (page) {
        console.log('On Page Enter ... ' + page.label);
    };
    TestHostComponent.prototype.onPageLeave = function (page) {
        console.log('On Page Leave ... ' + page.label);
    };
    TestHostComponent.prototype.onUpdateComponent = function (componentName) {
        console.log('updatedComponent');
    };
    TestHostComponent.prototype.onComplete = function () {
        console.log('Wizard Completed');
        var random = Math.random() * 10;
    };
    return TestHostComponent;
}());
__decorate([
    ViewChild(CjWizardComponent),
    __metadata("design:type", CjWizardComponent)
], TestHostComponent.prototype, "innerWizard", void 0);
TestHostComponent = __decorate([
    Component({
        selector: 'demo-wizard',
        template: "\n    <cj-wizard\n      [id]=\"configuration.id\"\n      [name]=\"configuration.name\"\n      [cjCurrentState] = 'currentState'\n      (cjOnWizardStepChange)= 'onUpdateComponent($event)'\n      (cjOnWizardComplete) = 'onComplete($event)'\n      [(cjWizardDataContainer)] = 'dataContainer'\n      [cjWizardContextSource] = 'wizardContextSource'\n      [cjShowPaging]=\"showPaging\">\n\n      <cj-wizard-step id=\"Step_1\" name=\"Step_1\" cjLabel=\"Dati Cliente\">\n        <cj-wizard-page id=\"Step_1_Page_1\" name=\"Step_1_Page_1\" cjLabel=\"Dati Societ\u00E0\" cjShowPrevButton cjShowActionButton>\n          <p> CONTENUTO PAGINA 1</p>\n        </cj-wizard-page>\n        <cj-wizard-page id=\"Step_1_Page_2\" name=\"Step_1_Page_2\" cjLabel=\"Dati Societ\u00E0\"\n          (cjOnPageEnter)=\"onPageEnter($event)\"\n          (cjOnPageLeave)=\"onPageLeave($event)\"\n          cjShowPrevButton cjShowActionButton>\n          <p> CONTENUTO PAGINA 2</p>\n        </cj-wizard-page>\n      </cj-wizard-step>\n      <cj-wizard-step id=\"Step_2\" name=\"Step_2\" cjLabel=\"Scelta Modello\">\n        <cj-wizard-page id=\"Step_2_Page_1\" name=\"Step_2_Page_1\" cjLabel=\"Modello Pos\" cjShowPrevButton cjShowActionButton>\n          <p> CONTENUTO PAGINA 3!</p>\n        </cj-wizard-page>\n      </cj-wizard-step>\n    </cj-wizard>\n    "
    }),
    __metadata("design:paramtypes", [CjCustomContextService])
], TestHostComponent);
export { TestHostComponent };
describe('Testing CjWizard Component', function () {
    var hostComponent;
    var fixture;
    var cjWizardElement;
    var cjWizardComponent;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule
            ],
            providers: [
                CjWizardHelper,
                {
                    provide: CjCustomContextService,
                    useClass: CjCustomContextServiceMock
                },
                NbpLoadingService,
            ],
            declarations: [
                TestHostComponent,
                CjWizardComponent,
                CjWizardPageComponent,
                CjWizardStepComponent,
                NbpProgressComponent,
                NbpPagingComponent,
                NbpButtonComponent,
                NbpLoadingComponent
            ]
        })
            .compileComponents();
    }));
    beforeEach(async(function () {
        fixture = TestBed.createComponent(TestHostComponent);
        hostComponent = fixture.debugElement.componentInstance;
        cjWizardElement = fixture.debugElement.query(By.css('cj-wizard'));
        cjWizardComponent = hostComponent.innerWizard;
        fixture.detectChanges();
    }));
    it('should be created', function () {
        expect(hostComponent).toBeTruthy();
    });
    it('should be configured with 2 steps', async(function () {
        var configuration = cjWizardComponent['cjConfiguration'];
        expect(configuration.steps.length).toBe(2);
    }));
    it('should be configured with 3 total pages', async(function () {
        var pages = cjWizardComponent['_pages'];
        expect(pages.length).toBe(3);
    }));
    it('should be configured with 2 pages inside the first step and 1 page inside the second step', async(function () {
        var steps = cjWizardComponent['cjConfiguration'].steps;
        expect(steps[0].pages.length === 2 && steps[1].pages.length === 1).toBe(true);
    }));
    it('should update the \'cjCurrentState\' using the information coming from the wizard context', async(function () {
        expect(cjWizardComponent.cjCurrentState).toBe(CONTEXT.state);
    }));
    it('should update the \'cjData\' using the information from the wizard context', async(function () {
        // expect(cjWizardComponent.cjData).toBe(CONTEXT.payload.data); TODO fix test
    }));
    describe('when you set \'cjShowPaging\' to FALSE', function () {
        beforeEach(async(function () {
            hostComponent.showPaging = false;
            fixture.detectChanges();
        }));
        it('shouldn\'t display the NbpPaging Component', async(function () {
            fixture.detectChanges();
            var pagingElement = fixture.debugElement.query(By.css('nbp-paging'));
            expect(pagingElement).toBeNull();
        }));
    });
    describe('when you show the wizard\'s first page', function () {
        var buttons;
        it('should disable the \'INDIETRO\' button', async(function () {
            fixture.detectChanges();
            buttons = fixture.debugElement.queryAll(By.css('button'));
            buttons[0].nativeElement.click();
            fixture.detectChanges();
            // tick();
            buttons = fixture.debugElement.queryAll(By.css('nbp-button'));
            expect(buttons[0].nativeElement.classList.contains('nbp-global-disable')).toEqual(true);
        }));
        it('should use public method \'navigateToPage\' to navigate to the second page ', async(function () {
            hostComponent.innerWizard.navigateToPage('Step_2', 'Step_2_Page_1');
            fixture.detectChanges();
            expect(hostComponent.innerWizard.cjCurrentState.currentStepId).toEqual('Step_2');
            expect(hostComponent.innerWizard.cjCurrentState.currentPageId).toEqual('Step_2_Page_1');
        }));
        it('should use public method \'navigateToNext\' to navigate to the second page ', async(function () {
            hostComponent.innerWizard.navigateToPage('Step_1', 'Step_1_Page_1');
            fixture.detectChanges();
            hostComponent.innerWizard.navigateToNext();
            fixture.detectChanges();
            expect(hostComponent.innerWizard.cjCurrentState.currentStepId).toEqual('Step_1');
            expect(hostComponent.innerWizard.cjCurrentState.currentPageId).toEqual('Step_1_Page_2');
        }));
    });
    describe('when you show the wizard\'s last page', function () {
        var buttons;
        it('should disable the \'AVANTI\' button', async(function () {
            hostComponent.innerWizard.navigateToPage('Step_2', 'Step_2_Page_1');
            fixture.detectChanges();
            buttons = fixture.debugElement.queryAll(By.css('button'));
            buttons[1].nativeElement.click();
            fixture.detectChanges();
            buttons[1].nativeElement.click();
            fixture.detectChanges();
            // tick();
            buttons = fixture.debugElement.queryAll(By.css('nbp-button'));
            expect(buttons[1].nativeElement.classList.contains('nbp-global-disable')).toEqual(true);
        }));
        it('should use public method \'navigateToPage\' to navigate to the second page ', async(function () {
            hostComponent.innerWizard.navigateToPage('Step_1', 'Step_1_Page_2');
            fixture.detectChanges();
            expect(hostComponent.innerWizard.cjCurrentState.currentStepId).toEqual('Step_1');
            expect(hostComponent.innerWizard.cjCurrentState.currentPageId).toEqual('Step_1_Page_2');
        }));
        it('should use public method \'navigateToPrev\' to navigate to the second page ', async(function () {
            hostComponent.innerWizard.navigateToPage('Step_2', 'Step_2_Page_1');
            fixture.detectChanges();
            hostComponent.innerWizard.navigateToPrev();
            fixture.detectChanges();
            expect(hostComponent.innerWizard.cjCurrentState.currentStepId).toEqual('Step_1');
            expect(hostComponent.innerWizard.cjCurrentState.currentPageId).toEqual('Step_1_Page_2');
        }));
    });
});
