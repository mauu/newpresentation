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
import { CjCustomContextService } from './../cj-context/cj-custom-context.service';
import { CjWizardComponent } from './../cj-wizard/cj-wizard.component';
import { CjWizardHelper } from './../cj-wizard/cj-wizard-helper.service';
import { Observable } from 'rxjs/Observable';
import { CjWizardPageComponent } from './../cj-wizard-page/cj-wizard-page.component';
import { CjWizardStepComponent } from './../cj-wizard-step/cj-wizard-step.component';
import { NbpLoadingService } from './../../nbp/nbp-loading/nbp-loading.service';
export var CONTEXT = {
    payload: {
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
    CjCustomContextServiceMock.prototype.getCustomContextByTokenAndKey = function (key) {
        return Observable.of(CONTEXT);
    };
    return CjCustomContextServiceMock;
}());
export { CjCustomContextServiceMock };
var TestHostComponent = (function () {
    function TestHostComponent() {
        this.configuration = {
            id: 'POS_VENDITA',
            name: 'AcquistoPos',
        };
        this.currentState = {
            id: 'POS_VENDITA',
            currentStepId: 'Step_1',
            currentPageId: 'Step_1_Page_1'
        };
        this.showPage = true;
        this.dataContainer = new PosWizardContainer();
        this.data = {
            ragioneSociale: 'InfoGroup s.r.l.',
            quantita: 1,
            autorizzazione: true,
        };
    }
    Object.defineProperty(TestHostComponent.prototype, "cjData", {
        get: function () { return this.dataContainer.getWizardData(); },
        set: function (data) { this._cjData = data; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return TestHostComponent;
}());
__decorate([
    ViewChild(CjWizardComponent),
    __metadata("design:type", CjWizardComponent)
], TestHostComponent.prototype, "innerWizard", void 0);
__decorate([
    ViewChild(CjWizardStepComponent),
    __metadata("design:type", CjWizardStepComponent)
], TestHostComponent.prototype, "innerWizardStep", void 0);
TestHostComponent = __decorate([
    Component({
        selector: 'demo-wizard',
        template: "\n    <cj-wizard\n      [id]=\"configuration.id\" \n      [name]=\"configuration.name\" \n      [cjCurrentState]='currentState'\n      [(cjWizardDataContainer)]=\"dataContainer\" \n      [cjShowPaging]=\"showPaging\">\n      <cj-wizard-step id=\"Step_1\" name=\"Step_1\" cjLabel=\"Dati Cliente\">\n        <cj-wizard-page id=\"Step_1_Page_1\" name=\"Step_1_Page_1\" cjLabel=\"Dati Societ\u00E0\">\n          <p> CONTENUTO PAGINA</p>\n        </cj-wizard-page>\n      </cj-wizard-step>\n    </cj-wizard>\n    "
    }),
    __metadata("design:paramtypes", [])
], TestHostComponent);
export { TestHostComponent };
describe('Testing CjWizardStep Component', function () {
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
                NbpLoadingService
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
        spyOn(hostComponent.innerWizard, 'addStep').and.callThrough();
        cjWizardElement = fixture.debugElement.query(By.css('cj-wizard'));
        cjWizardComponent = hostComponent.innerWizard;
        fixture.detectChanges();
    }));
    it('should be created', function () {
        expect(hostComponent).toBeTruthy();
        expect(hostComponent.innerWizardStep).toBeTruthy();
    });
    it('should call registration from parent component', function () {
        expect(hostComponent.innerWizard.addStep).toHaveBeenCalled();
    });
    it('should passing itself to the parent component registration', function () {
        expect(hostComponent.innerWizard.addStep).toHaveBeenCalledWith(hostComponent.innerWizardStep._stepInfo);
    });
});
