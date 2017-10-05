var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NbpButtonComponent } from './nbp-button/nbp-button.component';
export { NbpButtonComponent } from './nbp-button/nbp-button.component';
import { NbpLabelComponent } from './nbp-label/nbp-label.component';
export { NbpLabelComponent } from './nbp-label/nbp-label.component';
import { NbpInputTextComponent } from './nbp-input-text/nbp-input-text.component';
export { NbpInputTextComponent } from './nbp-input-text/nbp-input-text.component';
import { NbpInputContainerComponent } from './nbp-input-container/nbp-input-container.component';
export { NbpInputContainerComponent } from './nbp-input-container/nbp-input-container.component';
import { NbpCheckboxComponent } from './nbp-checkbox/nbp-checkbox.component';
export { NbpCheckboxComponent } from './nbp-checkbox/nbp-checkbox.component';
import { NbpFooterComponent } from './nbp-footer/nbp-footer.component';
export { NbpFooterComponent } from './nbp-footer/nbp-footer.component';
import { NbpHeaderComponent } from './nbp-header/nbp-header.component';
export { NbpHeaderComponent } from './nbp-header/nbp-header.component';
import { NbpNavigationHeaderComponent } from './nbp-navigation-header/nbp-navigation-header.component';
export { NbpNavigationHeaderComponent } from './nbp-navigation-header/nbp-navigation-header.component';
import { NbpTableComponent } from './nbp-table/nbp-table.component';
export { NbpTableComponent } from './nbp-table/nbp-table.component';
import { NbpModalComponent } from './nbp-modal/nbp-modal.component';
export { NbpModalComponent } from './nbp-modal/nbp-modal.component';
import { NbpComboComponent } from './nbp-combo/nbp-combo.component';
export { NbpComboComponent } from './nbp-combo/nbp-combo.component';
import { NbpDatepickerHtml5Component } from './nbp-datepicker-html5/nbp-datepicker-html5.component';
export { NbpDatepickerHtml5Component } from './nbp-datepicker-html5/nbp-datepicker-html5.component';
import { NbpSwitchComponent } from './nbp-switch/nbp-switch.component';
export { NbpSwitchComponent } from './nbp-switch/nbp-switch.component';
export { NpbSwitchDispalyType } from './nbp-switch/nbp-switch.enums';
import { NbpCustomerInfoComponent } from './nbp-customer-info/nbp-customer-info.component';
export { NbpCustomerInfoComponent } from './nbp-customer-info/nbp-customer-info.component';
import { NbpAccordionComponent } from './nbp-accordion/nbp-accordion.component';
export { NbpAccordionComponent } from './nbp-accordion/nbp-accordion.component';
import { NbpRadioComponent } from './nbp-radio/nbp-radio.component';
export { NbpRadioComponent } from './nbp-radio/nbp-radio.component';
import { NbpProgressComponent } from './nbp-progress/nbp-progress.component';
export { NbpProgressComponent } from './nbp-progress/nbp-progress.component';
import { NbpProgressStickyContentComponent } from './nbp-progress/nbp-progress-sticky-content.component';
export { NbpProgressStickyContentComponent } from './nbp-progress/nbp-progress-sticky-content.component';
import { NbpFormComponent } from './nbp-form/nbp-form.component';
export { NbpFormComponent } from './nbp-form/nbp-form.component';
import { NbpPagingComponent } from './nbp-paging/nbp-paging.component';
export { NbpPagingComponent } from './nbp-paging/nbp-paging.component';
import { NbpPaginationComponent } from './nbp-pagination/nbp-pagination.component';
export { NbpPaginationComponent } from './nbp-pagination/nbp-pagination.component';
import { NbpLoadingComponent } from './nbp-loading/nbp-loading.component';
export { NbpLoadingComponent } from './nbp-loading/nbp-loading.component';
import { NbpBreadcrumbComponent } from './nbp-breadcrumb/nbp-breadcrumb.component';
export { NbpBreadcrumbComponent } from './nbp-breadcrumb/nbp-breadcrumb.component';
import { NbpTooltipComponent } from './nbp-tooltip/nbp-tooltip.component';
export { NbpTooltipComponent } from './nbp-tooltip/nbp-tooltip.component';
import { NbpBurgerMenuComponent } from './nbp-burger-menu/nbp-burger-menu.component';
export { NbpBurgerMenuComponent } from './nbp-burger-menu/nbp-burger-menu.component';
import { NbpIconComponent } from './nbp-icon/nbp-icon.component';
export { NbpIconComponent } from './nbp-icon/nbp-icon.component';
import { NbpLoggedUserComponent } from './nbp-logged-user/nbp-logged-user.component';
export { NbpLoggedUserComponent } from './nbp-logged-user/nbp-logged-user.component';
import { NbpPanelComponent } from './nbp-panel/nbp-panel.component';
export { NbpPanelComponent } from './nbp-panel/nbp-panel.component';
import { NbpTableColumnComponent } from './nbp-table-column/nbp-table-column.component';
export { NbpTableColumnComponent } from './nbp-table-column/nbp-table-column.component';
import { NbpCustomerNameComponent } from './nbp-customer-name/nbp-customer-name.component';
export { NbpCustomerNameComponent } from './nbp-customer-name/nbp-customer-name.component';
import { NbpFeedbackComponent } from './nbp-feedback/nbp-feedback.component';
export { NbpFeedbackComponent } from './nbp-feedback/nbp-feedback.component';
import { NbpDataContainerComponent } from './nbp-data-container/nbp-data-container.component';
export { NbpDataContainerComponent } from './nbp-data-container/nbp-data-container.component';
export { NbpStyle, NbpSize, NbpPipe, NbpChannel } from './nbp-commons/nbp-commons.enums';
export { NbpButtonType } from './nbp-button/nbp-button.enums';
export { NbpAccordionEvent } from './nbp-accordion/nbp-accordion.interfaces';
export { NbpDataSource } from './nbp-datasource/nbp-datasource.service';
export { NbpFeedbackType } from './nbp-feedback/nbp-feedback.enums';
export { NbpDatepickerComponent } from './nbp-datepicker/nbp-datepicker.component';
import { NbpDatepickerComponent } from './nbp-datepicker/nbp-datepicker.component';
import { NbpDividingLineComponent } from './nbp-dividing-line/nbp-dividing-line.component';
export { NbpDividingLineComponent } from './nbp-dividing-line/nbp-dividing-line.component';
// COMPONENTI POS
import { NbpTitledPanelComponent } from './nbp-titled-panel/nbp-titled-panel.component';
export { NbpTitledPanelComponent } from './nbp-titled-panel/nbp-titled-panel.component';
import { NbpSelectionPanelComponent } from './nbp-selection-panel/nbp-selection-panel.component';
export { NbpSelectionPanelComponent } from './nbp-selection-panel/nbp-selection-panel.component';
import { NbpShadowedPanelComponent } from './nbp-shadowed-panel/nbp-shadowed-panel.component';
export { NbpShadowedPanelComponent } from './nbp-shadowed-panel/nbp-shadowed-panel.component';
import { NbpSpinnerComponent } from './nbp-spinner/nbp-spinner.component';
export { NbpSpinnerComponent } from './nbp-spinner/nbp-spinner.component';
import { NbpTabBarComponent } from './nbp-tab-bar/nbp-tab-bar.component';
export { NbpTabBarComponent } from './nbp-tab-bar/nbp-tab-bar.component';
import { NbpLoadingService } from './nbp-loading/nbp-loading.service';
export { NbpLoadingService } from './nbp-loading/nbp-loading.service';
var NbpModule = (function () {
    function NbpModule() {
    }
    return NbpModule;
}());
NbpModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            BrowserAnimationsModule,
            NgbDatepickerModule.forRoot()
        ],
        declarations: [
            NbpButtonComponent,
            NbpLabelComponent,
            NbpInputContainerComponent,
            NbpInputTextComponent,
            NbpCheckboxComponent,
            NbpFooterComponent,
            NbpHeaderComponent,
            NbpNavigationHeaderComponent,
            NbpComboComponent,
            NbpDatepickerHtml5Component,
            NbpTableComponent,
            NbpModalComponent,
            NbpSwitchComponent,
            NbpCustomerInfoComponent,
            NbpAccordionComponent,
            NbpRadioComponent,
            NbpProgressComponent,
            NbpProgressStickyContentComponent,
            NbpFormComponent,
            NbpPagingComponent,
            NbpPaginationComponent,
            NbpLoadingComponent,
            NbpBreadcrumbComponent,
            NbpTooltipComponent,
            NbpBurgerMenuComponent,
            NbpIconComponent,
            NbpLoggedUserComponent,
            NbpPanelComponent,
            NbpCustomerNameComponent,
            NbpTableColumnComponent,
            NbpFeedbackComponent,
            NbpDataContainerComponent,
            NbpDatepickerComponent,
            NbpDividingLineComponent,
            NbpSelectionPanelComponent,
            NbpTitledPanelComponent,
            NbpShadowedPanelComponent,
            NbpSpinnerComponent,
            NbpTabBarComponent
        ],
        providers: [
            CurrencyPipe,
            DatePipe,
            DecimalPipe,
            LowerCasePipe,
            PercentPipe,
            UpperCasePipe,
            NbpLoadingService
        ],
        exports: [
            NbpButtonComponent,
            NbpLabelComponent,
            NbpInputTextComponent,
            NbpInputContainerComponent,
            NbpCheckboxComponent,
            NbpFooterComponent,
            NbpHeaderComponent,
            NbpNavigationHeaderComponent,
            NbpComboComponent,
            NbpDatepickerHtml5Component,
            NbpTableComponent,
            NbpModalComponent,
            NbpSwitchComponent,
            NbpCustomerInfoComponent,
            NbpAccordionComponent,
            NbpRadioComponent,
            NbpProgressComponent,
            NbpProgressStickyContentComponent,
            NbpFormComponent,
            NbpPagingComponent,
            NbpPaginationComponent,
            NbpLoadingComponent,
            NbpBreadcrumbComponent,
            NbpTooltipComponent,
            NbpBurgerMenuComponent,
            NbpIconComponent,
            NbpLoggedUserComponent,
            NbpPanelComponent,
            NbpCustomerNameComponent,
            NbpTableColumnComponent,
            NbpFeedbackComponent,
            NbpDataContainerComponent,
            NbpDatepickerComponent,
            NbpDividingLineComponent,
            NbpSelectionPanelComponent,
            NbpTitledPanelComponent,
            NbpShadowedPanelComponent,
            NbpSpinnerComponent,
            NbpTabBarComponent
        ]
    })
], NbpModule);
export { NbpModule };
