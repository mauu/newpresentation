var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { async, TestBed, inject } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CjContextService } from './../cj-context/cj-context.service';
import { CONTEXT } from './../cj-context/mock-cj-context';
import { ActivatedRoute } from '@angular/router';
import { CjBodyComponent } from './cj-body.component';
import { NbpHeaderComponent } from './../../nbp/nbp-header/nbp-header.component';
import { NbpFooterComponent } from './../../nbp/nbp-footer/nbp-footer.component';
import { NbpCustomerNameComponent } from './../../nbp/nbp-customer-name/nbp-customer-name.component';
import { NbpNavigationHeaderComponent } from './../../nbp/nbp-navigation-header/nbp-navigation-header.component';
var urlToken = '12322332233';
var contextService;
var CjContextServiceMock = (function () {
    function CjContextServiceMock() {
    }
    CjContextServiceMock.prototype.getCjContextByToken = function (token) {
        this._token = token;
        return Observable.of(CONTEXT);
    };
    CjContextServiceMock.prototype.getCurrentCjContext = function () {
        return Observable.of(CONTEXT);
    };
    CjContextServiceMock.prototype.setCurrentCjContext = function (cjContext) {
        this._contextInfo = cjContext;
    };
    CjContextServiceMock.prototype.getCurrentToken = function () {
        return this._token;
    };
    CjContextServiceMock.prototype.createNewCjContext = function (ndg, application, canale) {
        return Observable.of(CONTEXT);
    };
    return CjContextServiceMock;
}());
export { CjContextServiceMock };
var TestHostComponent = (function () {
    function TestHostComponent() {
        this.title = 'Test Accordion';
        this.token = null;
        this.paramName = null;
    }
    TestHostComponent.prototype.memorizzaContesto = function (contesto) {
        this.context = contesto;
    };
    return TestHostComponent;
}());
__decorate([
    ViewChild(CjBodyComponent),
    __metadata("design:type", CjBodyComponent)
], TestHostComponent.prototype, "innerCjBody", void 0);
TestHostComponent = __decorate([
    Component({
        selector: 'demo-cjbody',
        template: "\n    <cj-body\n        [cjApplicationName] = \"title\"\n        [cjToken] = \"token\"\n        [cjTokenNameParam] = \"paramName\"\n        (cjOnContextReady) = \"memorizzaContesto($event)\">\n        <section>\n          <h1>\n            NG-CONTENT\n          </h1>\n        </section>\n      </cj-body>\n\n  "
    })
], TestHostComponent);
export { TestHostComponent };
describe('Testing CjBody component', function () {
    var hostComponent;
    var fixture;
    var cjBodyElememt;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [RouterModule],
            providers: [
                {
                    provide: CjContextService,
                    useClass: CjContextServiceMock
                },
                {
                    provide: ActivatedRoute,
                    useValue: {
                        params: Observable.of({ token: urlToken })
                    }
                }
            ],
            declarations: [
                TestHostComponent,
                CjBodyComponent,
                NbpHeaderComponent,
                NbpFooterComponent,
                NbpCustomerNameComponent,
                NbpNavigationHeaderComponent
            ],
        })
            .compileComponents();
    }));
    beforeEach(inject([CjContextService], function (cjContextService) {
        fixture = TestBed.createComponent(TestHostComponent);
        hostComponent = fixture.componentInstance;
        cjBodyElememt = fixture.debugElement.query(By.css('.panel'));
        hostComponent.token = '12343543433';
        hostComponent.paramName = null;
        contextService = cjContextService;
        spyOn(cjContextService, 'getCjContextByToken').and.callThrough();
        fixture.detectChanges();
    }));
    it('should retreive the context', async(function () {
        expect(hostComponent.context).toBe(CONTEXT);
    }));
    it('should invoke getCjContextByToken of contextService to retreive context', async(function () {
        expect(contextService.getCjContextByToken).toHaveBeenCalled();
    }));
    describe('taking token form cjToken attribute', function () {
        beforeEach(function () {
            fixture = TestBed.createComponent(TestHostComponent);
            hostComponent = fixture.componentInstance;
            cjBodyElememt = fixture.debugElement.query(By.css('.panel'));
            hostComponent.token = '12343543433';
            hostComponent.paramName = null;
            fixture.detectChanges();
        });
        it('should create the component', function () {
            expect(hostComponent).toBeTruthy();
        });
        it('should have cjToken setted', function () {
            expect(hostComponent.innerCjBody.cjToken).toBe(hostComponent.token);
        });
    });
    describe('taking token form url params using cjTokenNameParam attribute', function () {
        beforeEach(function () {
            fixture = TestBed.createComponent(TestHostComponent);
            hostComponent = fixture.componentInstance;
            cjBodyElememt = fixture.debugElement.query(By.css('.panel'));
            hostComponent.token = null;
            hostComponent.paramName = 'token';
            fixture.detectChanges();
        });
        it('should create the component', function () {
            expect(hostComponent).toBeTruthy();
        });
    });
});
