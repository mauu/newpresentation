var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbpModule } from './../nbp/nbp.module';
import { CjBodyComponent } from './cj-body/cj-body.component';
export { CjBodyComponent } from './cj-body/cj-body.component';
import { CjWizardComponent } from './cj-wizard/cj-wizard.component';
export { CjWizardComponent } from './cj-wizard/cj-wizard.component';
import { CjWizardPageComponent } from './cj-wizard-page/cj-wizard-page.component';
export { CjWizardPageComponent } from './cj-wizard-page/cj-wizard-page.component';
import { CjWizardStepComponent } from './cj-wizard-step/cj-wizard-step.component';
export { CjWizardStepComponent } from './cj-wizard-step/cj-wizard-step.component';
import { CjShoppingCartComponent } from './cj-shopping-cart/cj-shopping-cart.component';
export { CjShoppingCartComponent } from './cj-shopping-cart/cj-shopping-cart.component';
import { CjContextService } from './cj-context/cj-context.service';
export { CjContextService } from './cj-context/cj-context.service';
import { CjCustomContextService } from './cj-context/cj-custom-context.service';
export { ICjCustomContextService, CjCustomContextService } from './cj-context/cj-custom-context.service';
import { CjContextClientService } from './cj-context/cj-context-client.service';
export { CjContextClientService } from './cj-context/cj-context-client.service';
import { CjCustomContextClientService } from './cj-context/cj-custom-context-client.service';
export { CjCustomContextClientService } from './cj-context/cj-custom-context-client.service';
export { TestCjWizardContextSource } from './cj-wizard-context-source/cj-wizard-context-source.service';
import { CjWizardHelper } from './cj-wizard/cj-wizard-helper.service';
import { CjPrivacyFormComponent } from './cj-privacy-form/cj-privacy-form.component';
export { CjPrivacyFormComponent } from './cj-privacy-form/cj-privacy-form.component';
import { CjPrivacyComponent } from './cj-privacy/cj-privacy.component';
export { CjPrivacyComponent } from './cj-privacy/cj-privacy.component';
import { CjNdgClientService } from './cj-privacy/cj-ndg-client.service';
export { CjNdgClientService } from './cj-privacy/cj-ndg-client.service';
import { CjNdgService } from './cj-privacy/cj-ndg.service';
export { CjNdgService } from './cj-privacy/cj-ndg.service';
import { CjTimingInterceptor } from './cj-logging-interceptor/cj-logging.interceptor';
import { CjShoppingCartElementComponent } from './cj-shopping-cart-section/cj-shopping-cart-element.component';
import { CjShoppingCartProductComponent } from './cj-shopping-cart-product/cj-shopping-cart-product.component';
import { ShoppingCartUtility } from './cj-shopping-cart/cj-shopping-cart.utility';
export { ShoppingCartUtility } from './cj-shopping-cart/cj-shopping-cart.utility';
import { GlobalErrorHandlerService } from './../utility/global-error-handler.service';
import { CjRadioSelectionComponent } from './cj-radio-selection/cj-radio-selection.component';
export { CjRadioSelectionComponent } from './cj-radio-selection/cj-radio-selection.component';
import { CjSignSelectionComponent } from './cj-sign-selection/cj-sign-selection.component';
export { CjSignSelectionComponent } from './cj-sign-selection/cj-sign-selection.component';
var CjModule = (function () {
    function CjModule() {
    }
    return CjModule;
}());
CjModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            NbpModule,
            RouterModule,
            HttpClientModule
        ],
        declarations: [
            CjBodyComponent,
            CjWizardComponent,
            CjWizardPageComponent,
            CjWizardStepComponent,
            CjPrivacyComponent,
            CjPrivacyFormComponent,
            CjShoppingCartComponent,
            CjShoppingCartElementComponent,
            CjShoppingCartProductComponent,
            CjRadioSelectionComponent,
            CjSignSelectionComponent
        ],
        entryComponents: [
            CjWizardPageComponent
        ],
        providers: [
            CjContextService,
            CjContextClientService,
            CjCustomContextClientService,
            CjCustomContextService,
            CjWizardHelper,
            CjNdgService,
            CjNdgClientService,
            ShoppingCartUtility,
            {
                provide: HTTP_INTERCEPTORS,
                useClass: CjTimingInterceptor,
                multi: true,
            },
            {
                provide: ErrorHandler,
                useClass: GlobalErrorHandlerService
            }
        ],
        exports: [
            CjBodyComponent,
            CjWizardComponent,
            CjWizardPageComponent,
            CjWizardStepComponent,
            CjPrivacyComponent,
            CjPrivacyFormComponent,
            CjShoppingCartComponent,
            CjRadioSelectionComponent,
            CjSignSelectionComponent
        ]
    })
], CjModule);
export { CjModule };
