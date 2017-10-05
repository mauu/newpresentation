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
import { Component, ViewChild } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CjPrivacyFormComponent } from './cj-privacy-form.component';
import { NbpPanelComponent } from '../../nbp/nbp-panel/nbp-panel.component';
import { NbpButtonComponent } from '../../nbp/nbp-button/nbp-button.component';
import { NbpRadioComponent } from '../../nbp/nbp-radio/nbp-radio.component';
import { NbpTooltipComponent } from '../../nbp/nbp-tooltip/nbp-tooltip.component';
import { NbpModalComponent } from '../../nbp/nbp-modal/nbp-modal.component';
import { NbpDividingLineComponent } from '../../nbp/nbp-dividing-line/nbp-dividing-line.component';
import { DatePipe } from '@angular/common';
var DemoCjprivacyComponent = (function () {
    function DemoCjprivacyComponent() {
        this.consensiPrivacy = {
            date: new Date(),
            ndg: '123456',
            c2: null,
            c3: null,
            c4: null,
            c6: null
        };
    }
    DemoCjprivacyComponent.prototype.onStampaPrivacy = function (onStampaPrivacy) {
        console.log('onStampaPrivacy event fired');
    };
    DemoCjprivacyComponent.prototype.onContinuaPrivacy = function (onContinuaPrivacy) {
        console.log('onContinuaPrivacy event fired');
    };
    DemoCjprivacyComponent.prototype.onAnnullaPrivacy = function (onAnnullaPrivacy) {
        console.log('onAnnullaPrivacy event fired');
    };
    return DemoCjprivacyComponent;
}());
__decorate([
    ViewChild(CjPrivacyFormComponent),
    __metadata("design:type", CjPrivacyFormComponent)
], DemoCjprivacyComponent.prototype, "privacyComponent", void 0);
DemoCjprivacyComponent = __decorate([
    Component({
        template: "<cj-privacy-form\n      [cjPrivacy]=\"consensiPrivacy\"\n      (cjOnStampa)=\"onStampaPrivacy($event)\"\n      (cjOnContinua)=\"onContinuaPrivacy($event)\"\n      (cjOnAnnulla)=\"onAnnullaPrivacy($event)\">\n    </cj-privacy-form>"
    })
], DemoCjprivacyComponent);
describe('Test filling-in privacy form.', function () {
    var demoComponent;
    var demoFixture;
    var radioContainers = { c2: Array, c3: Array, c4: Array, c6: Array };
    var buttons;
    var modal;
    var modalOkButton;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                CjPrivacyFormComponent,
                DemoCjprivacyComponent,
                NbpPanelComponent,
                NbpButtonComponent,
                NbpRadioComponent,
                NbpTooltipComponent,
                NbpModalComponent,
                NbpDividingLineComponent
            ],
            imports: [
                FormsModule
            ],
            providers: [
                DatePipe
            ],
        }).compileComponents();
    }));
    beforeEach(async(function () {
        // create TestHostComponent instead of DashboardHeroComponent
        demoFixture = TestBed.createComponent(DemoCjprivacyComponent);
        demoComponent = demoFixture.componentInstance;
        demoFixture.detectChanges(); // trigger initial data binding
        radioContainers.c2 = demoFixture.debugElement.query(By.css('#c2radioContainer')).queryAll(By.css('input[type="radio"]'));
        radioContainers.c3 = demoFixture.debugElement.query(By.css('#c3radioContainer')).queryAll(By.css('input[type="radio"]'));
        radioContainers.c4 = demoFixture.debugElement.query(By.css('#c4radioContainer')).queryAll(By.css('input[type="radio"]'));
        radioContainers.c6 = demoFixture.debugElement.query(By.css('#c6radioContainer')).queryAll(By.css('input[type="radio"]'));
        buttons = demoFixture.debugElement.queryAll(By.css('button'));
        modal = demoFixture.debugElement.query(By.css('#privacyModal'));
        modalOkButton = modal.queryAll(By.css('nbp-button'));
    }));
    it('Privacy, modal in shown because C2/C3/C4 are not selected', function () {
        expect(modal).toBeTruthy();
        console.log('Modale aperta');
        modalOkButton[0].nativeElement.click();
    });
    it('Privacy, button and radiobutton components should be created', function () {
        expect(demoComponent).toBeTruthy();
    });
    it('Privacy consent are empty', function () {
        console.log(JSON.stringify(demoComponent.consensiPrivacy));
        expect(demoComponent.consensiPrivacy.c2).toBeNull();
        expect(demoComponent.consensiPrivacy.c3).toBeNull();
        expect(demoComponent.consensiPrivacy.c4).toBeNull();
        expect(demoComponent.consensiPrivacy.c6).toBeNull();
    });
    it('"Continua" and "Annulla" buttons are enabled, "Stampa" is disabled', function () {
        expect(buttons[0].properties.disabled).toBeFalsy(); // Annulla
        expect(buttons[1].properties.disabled).toBeTruthy(); // Stampa
        expect(buttons[2].properties.disabled).toBeFalsy(); // Continua
    });
    describe('User selects the radio button corresponding to "Presta il consenso" on C1 section', function () {
        beforeEach(async(function () {
            radioContainers.c3[0].nativeElement.click();
            demoFixture.detectChanges();
        }));
        it('So "Stampa" and "Annulla" buttons are enabled, "Continua" is disabled', function () {
            demoFixture.detectChanges();
            expect(radioContainers.c2[0].nativeElement.value).toBeTruthy();
            console.log('C1 - presto il consenso: ', demoComponent.consensiPrivacy.c2);
            expect(buttons[0].properties.disabled).toBeFalsy(); // Annulla
            expect(buttons[1].properties.disabled).toBeFalsy(); // Stampa
            expect(buttons[2].properties.disabled).toBeTruthy(); // Continua
        });
    });
    describe('After selection of "Presta il consenso" on C1 section, the user wants to print the form and to save data (click on "Stampa" button)', function () {
        beforeEach(async(function () {
            radioContainers.c2[0].nativeElement.click();
            buttons[1].nativeElement.click();
            demoFixture.detectChanges();
        }));
        it('So "Stampa" and "Annulla" buttons are disabled, "Continua" is enabled', function () {
            demoComponent.privacyComponent.cjOnStampa.subscribe(function () {
                expect(buttons[0].properties.disabled).toBeTruthy(); // Annulla
                expect(buttons[1].properties.disabled).toBeTruthy(); // Stampa
                expect(buttons[2].properties.disabled).toBeFalsy(); // Continua
            });
        });
        describe('Now the user clicks on "Continua" button)', function () {
            beforeEach(async(function () {
                buttons[2].nativeElement.click();
                demoFixture.detectChanges();
            }));
            it('Default button configuration: "Annulla" and "Continua" enabled, "Stampa" is disabled', function () {
                demoComponent.privacyComponent.cjOnContinua.subscribe(function () {
                    expect(buttons[0].properties.disabled).toBeFalsy(); // Annulla
                    expect(buttons[1].properties.disabled).toBeTruthy(); // Stampa
                    expect(buttons[2].properties.disabled).toBeFalsy(); // Continua
                });
            });
        });
    });
    describe('The user selects "Presta il consenso" on all sections', function () {
        beforeEach(async(function () {
            radioContainers.c2[0].nativeElement.click();
            radioContainers.c3[0].nativeElement.click();
            radioContainers.c4[0].nativeElement.click();
            radioContainers.c6[0].nativeElement.click();
            demoFixture.detectChanges();
        }));
        it('All radio buttons are selected', function () {
            expect(radioContainers.c2[0].nativeElement.value).toBeTruthy();
            expect(radioContainers.c3[0].nativeElement.value).toBeTruthy();
            expect(radioContainers.c4[0].nativeElement.value).toBeTruthy();
            expect(radioContainers.c6[0].nativeElement.value).toBeTruthy();
        });
        describe('The user wants to cancel previous selection by clicking on "Annulla" button)', function () {
            beforeEach(async(function () {
                buttons[0].nativeElement.click();
                demoFixture.detectChanges();
            }));
            it('Default button/radiobutton configuration ("Annulla" and "Continua" enabled, "Stampa" is disabled)', function () {
                demoComponent.privacyComponent.cjOnAnnulla.subscribe(function () {
                    expect(buttons[0].properties.disabled).toBeFalsy(); // Annulla
                    expect(buttons[1].properties.disabled).toBeTruthy(); // Stampa
                    expect(buttons[2].properties.disabled).toBeFalsy(); // Continua
                    expect(radioContainers.c2[0].nativeElement.value).toBeNull();
                    expect(radioContainers.c3[0].nativeElement.value).toBeNull();
                    expect(radioContainers.c4[0].nativeElement.value).toBeNull();
                    expect(radioContainers.c6[0].nativeElement.value).toBeNull();
                });
            });
        });
    });
});
