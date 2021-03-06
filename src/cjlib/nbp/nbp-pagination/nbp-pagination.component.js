var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PaginationActions } from './nbp-pagination.enums';
var NbpPaginationComponent = (function () {
    function NbpPaginationComponent() {
        /**
         * Configurazione numerica degli stati del paginatore.
         * Di tipo: IPaginationStatus
         * Valore di default: {pageNumber: 1, pageSize: -1, totalRecords: -1};
         */
        this.nbpPaginationStatus = { pageNumber: 1, pageSize: -1, totalRecords: -1 };
        /**
         * Configurazione per la visualizzazione dei pulsanti del paginatore.
         * Di tipo : INbpPaginationConfiguration
         * Valore di default: { next: true, prev: true, page: true, last: true, first: true };
         */
        this.nbpShowPaginationStatus = { next: true, prev: true, page: true, last: true, first: true };
        /**
         * Configurazione per la disabilitazione dei pulsanti del paginatore.
         * Di tipo : INbpPaginationConfiguration
         * Valore di default: { next: false, prev: false, page: false, last: false, first: false };
         */
        this.nbpDisablePaginationStatus = { next: false, prev: false, page: false, last: false, first: false };
        /**
         * Evento di notifica per pagina cambiata
         */
        this.nbpOnPageChange = new EventEmitter();
        /**
        * Evento di notifica per passaggio alla pagina successiva
        */
        this.nbpOnNext = new EventEmitter();
        /**
        * Evento di notifica per passaggio ad una pagina qualsiasi
        */
        this.nbpOnGoToPage = new EventEmitter();
        /**
        * Evento di notifica per passaggio alla pagina precedente
        */
        this.nbpOnPrev = new EventEmitter();
        /**
        * Evento di notifica per passaggio alla prima pagina
        */
        this.nbpOnFirst = new EventEmitter();
        /**
        * Evento di notifica per passaggio all'ultima pagina
        */
        this.nbpOnLast = new EventEmitter();
        this._windowPages = [];
        this._paginationActions = PaginationActions;
        this._showTooltip = false;
    }
    NbpPaginationComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nbpPaginationStatus) {
            this.nbpPageWindowSize = this.nbpPageWindowSize ? this.nbpPageWindowSize : 5;
            this._internalPageNumber = changes.nbpPaginationStatus.currentValue.pageNumber - 1;
            if (this._isTotalRecordsProvided() && this.nbpPageWindowSize) {
                this._lastPageModelNumber = this._getTotalPages(this.nbpPaginationStatus.pageSize, this.nbpPaginationStatus.totalRecords) - 1;
                this._evaluateWindowPages(this._internalPageNumber);
            }
            else {
                this._setShowTooltipCondition();
            }
        }
    };
    NbpPaginationComponent.prototype._getTotalPages = function (pageSize, totalSize) {
        return Math.trunc(totalSize / pageSize) + (totalSize % pageSize > 0 ? 1 : 0);
    };
    NbpPaginationComponent.prototype._isTotalRecordsProvided = function () {
        return this.nbpPaginationStatus && this.nbpPaginationStatus.totalRecords && this.nbpPaginationStatus.totalRecords !== -1;
    };
    NbpPaginationComponent.prototype._setShowTooltipCondition = function (pagesWindowLimits) {
        if (this._isTotalRecordsProvided()) {
            this._showTooltip = (pagesWindowLimits.min >= 999 || pagesWindowLimits.max >= 999) ? true : false;
        }
        else {
            this._showTooltip = this.nbpPaginationStatus.pageNumber >= 999 ? true : false;
        }
    };
    NbpPaginationComponent.prototype._evaluateTooltipText = function (pageNumber) {
        return this._showTooltip ? pageNumber : null;
    };
    NbpPaginationComponent.prototype._generateRange = function (pageNumber) {
        var min = (Math.floor(pageNumber / this.nbpPageWindowSize) * this.nbpPageWindowSize);
        var max = min + this.nbpPageWindowSize - 1;
        var pagesWindowLimits = { min: min, max: max };
        this._setShowTooltipCondition(pagesWindowLimits);
        return pagesWindowLimits;
    };
    NbpPaginationComponent.prototype._evaluateWindowPages = function (pageNumber) {
        this._windowPages = [];
        var range = this._generateRange(pageNumber);
        for (var i = range.min; i <= range.max; i++) {
            if (i > this._lastPageModelNumber) {
                break;
            }
            this._windowPages.push({ model: i, view: i + 1 });
        }
    };
    NbpPaginationComponent.prototype._isNextPageWindowButtonVisible = function () {
        var _this = this;
        var lastPageFromWindow = this._windowPages.filter(function (page) { return page.model === _this._lastPageModelNumber; });
        return !lastPageFromWindow.length;
    };
    NbpPaginationComponent.prototype._isPrevPageWindowButtonVisible = function () {
        var firstPageFromWindow = this._windowPages.filter(function (page) { return page.model === 0; });
        return !firstPageFromWindow.length;
    };
    NbpPaginationComponent.prototype._getPrevPageNumber = function () {
        var page;
        if (this.nbpPaginationStatus.pageNumber !== 1 && this.nbpPaginationStatus.pageNumber) {
            page = this.nbpPaginationStatus.pageNumber - 1;
        }
        else {
            page = this.nbpPaginationStatus.pageNumber;
        }
        return page;
    };
    NbpPaginationComponent.prototype._setPageNumber = function (windowPage) {
        this._internalPageNumber = windowPage.model;
        this.nbpPaginationStatus.pageNumber = windowPage.view;
    };
    NbpPaginationComponent.prototype.onNext = function () {
        this.nbpPaginationStatus.pageNumber = this.nbpPaginationStatus.pageNumber + 1;
        this.nbpOnNext.emit(this.nbpPaginationStatus);
        this.nbpOnPageChange.emit();
    };
    NbpPaginationComponent.prototype.onPrev = function () {
        this.nbpPaginationStatus.pageNumber = this._getPrevPageNumber();
        this.nbpOnPrev.emit(this.nbpPaginationStatus);
        this.nbpOnPageChange.emit();
    };
    NbpPaginationComponent.prototype.onLast = function () {
        this.nbpOnLast.emit(this.nbpPaginationStatus);
        this.nbpOnPageChange.emit();
    };
    NbpPaginationComponent.prototype.onFirst = function () {
        this.nbpOnFirst.emit(this.nbpPaginationStatus);
        this.nbpOnPageChange.emit();
    };
    NbpPaginationComponent.prototype.onGoToPage = function (action, page) {
        var partialPage;
        var currentPageOnWindow;
        switch (action) {
            case this._paginationActions.ON_WINDOW_NEXT_CLICK:
                partialPage = this._internalPageNumber + this.nbpPageWindowSize;
                this._evaluateWindowPages(partialPage);
                currentPageOnWindow = this._windowPages[0];
                break;
            case this._paginationActions.ON_WINDOW_PREV_CLICK:
                partialPage = this._internalPageNumber - this.nbpPageWindowSize;
                if (partialPage >= 0) {
                    this._evaluateWindowPages(partialPage);
                    currentPageOnWindow = this._windowPages[this._windowPages.length - 1];
                }
                else {
                    partialPage = this._internalPageNumber;
                    this._evaluateWindowPages(partialPage);
                    currentPageOnWindow = { model: this._internalPageNumber, view: this.nbpPaginationStatus.pageNumber };
                }
                break;
            case this._paginationActions.ON_PAGE_CLICK:
                currentPageOnWindow = this._windowPages.filter(function (window) { return window.model === page; })[0];
                partialPage = currentPageOnWindow.model;
                this._evaluateWindowPages(partialPage);
                break;
        }
        this._setPageNumber(currentPageOnWindow);
        this.nbpOnGoToPage.emit(this.nbpPaginationStatus);
        this.nbpOnPageChange.emit();
    };
    return NbpPaginationComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], NbpPaginationComponent.prototype, "nbpPaginationStatus", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NbpPaginationComponent.prototype, "nbpShowPaginationStatus", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NbpPaginationComponent.prototype, "nbpDisablePaginationStatus", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NbpPaginationComponent.prototype, "nbpPageWindowSize", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpPaginationComponent.prototype, "nbpOnPageChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpPaginationComponent.prototype, "nbpOnNext", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpPaginationComponent.prototype, "nbpOnGoToPage", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpPaginationComponent.prototype, "nbpOnPrev", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpPaginationComponent.prototype, "nbpOnFirst", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpPaginationComponent.prototype, "nbpOnLast", void 0);
NbpPaginationComponent = __decorate([
    Component({
        selector: 'nbp-pagination',template: "<div class=\"pagination-container\"><div class=\"row\"><div class=\"col-md-5\"><button id=\"firstButton\" class=\"table-page-btn pull-left\" type=\"button\" (click)=\"onFirst()\" *ngIf=\"nbpShowPaginationStatus.first\" [disabled]=\"nbpDisablePaginationStatus.first\"><span class=\"page-btn-arrow icomoon-Simboli_freccia_sinistra\"></span> <span class=\"page-btn-text\">PRIMO</span></button></div><div class=\"col-md-14\" style=\"text-align:center\"><button id=\"prevButton\" class=\"table-page-btn\" type=\"button\" (click)=\"onPrev()\" *ngIf=\"nbpShowPaginationStatus.prev\" [disabled]=\"nbpDisablePaginationStatus.prev\"><span class=\"page-btn-arrow icomoon-Simboli_Risorsa-12\"></span></button><ng-container *ngIf=\"_isTotalRecordsProvided() && nbpShowPaginationStatus.page\"><button id=\"windowPrevButton\" *ngIf=\"_isPrevPageWindowButtonVisible()\" [disabled]=\"nbpDisablePaginationStatus.page\" class=\"table-page-btn\" type=\"button\" (click)=\"onGoToPage(_paginationActions.ON_WINDOW_PREV_CLICK)\">...</button><ng-container *ngFor=\"let page of _windowPages; let i = index\"><button id=\"windowPageButton\" class=\"table-page-btn\" type=\"button\" [disabled]=\"nbpDisablePaginationStatus.page\" (click)=\"onGoToPage(_paginationActions.ON_PAGE_CLICK, page.model)\"><span class=\"table-page-number\" [ngClass]=\"{'active': nbpPaginationStatus && page.model === _internalPageNumber}\" [attr.tooltip]=\"_evaluateTooltipText(page.view)\">{{page.view}}</span></button></ng-container><button id=\"windowNextButton\" *ngIf=\"_isNextPageWindowButtonVisible()\" [disabled]=\"nbpDisablePaginationStatus.page\" class=\"table-page-btn\" type=\"button\" (click)=\"onGoToPage(_paginationActions.ON_WINDOW_NEXT_CLICK)\">...</button></ng-container><button *ngIf=\"!_isTotalRecordsProvided() && nbpShowPaginationStatus.page\" class=\"table-page-btn\" type=\"button\"><span class=\"table-page-number active\" [attr.tooltip]=\"_evaluateTooltipText(nbpPaginationStatus.pageNumber)\">{{nbpPaginationStatus.pageNumber}}</span></button> <button id=\"nextButton\" class=\"table-page-btn\" type=\"button\" (click)=\"onNext()\" *ngIf=\"nbpShowPaginationStatus.next\" [disabled]=\"nbpDisablePaginationStatus.next\"><span class=\"page-btn-arrow icomoon-Simboli_Risorsa-13\"></span></button></div><div class=\"col-md-5\"><button id=\"lastButton\" class=\"table-page-btn pull-right\" *ngIf=\"_isTotalRecordsProvided() && nbpShowPaginationStatus.last\" (click)=\"onLast()\" [disabled]=\"nbpDisablePaginationStatus.last\"><span class=\"page-btn-text\">ULTIMO</span> <span class=\"page-btn-arrow icomoon-Simboli_freccia_destra\"></span></button></div></div></div>",
        styles: [".truncate{display:inline-block;width:2em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pagination-container{margin-top:.625em}.pagination-container table{width:100%;table-layout:fixed}.pagination-container .table-page-btn{display:inline-block;color:#258900;cursor:pointer;margin-top:.313em;background-color:transparent;border:none}.pagination-container .table-page-btn.disabled{color:#6f6f6f;cursor:auto}.pagination-container .table-page-btn .page-btn-arrow{font-size:1.25em;vertical-align:middle}.pagination-container .table-page-btn .page-btn-text{padding:0 .625em 0 .625em;font-size:.813em;font-weight:700}.pagination-container .table-page-btn .table-page-number{display:inline-block;border:1px solid #258900;font-weight:700;color:#258900;background:#fff;text-align:center;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;width:2em;height:2em;font-size:.938em;line-height:2em;margin:0 .125em 0 .125em}.pagination-container .table-page-btn .table-page-number.backward{margin-right:-.125em}.pagination-container .table-page-btn .table-page-number.forward{margin-left:-.125em}.pagination-container .table-page-btn .table-page-number.active{color:#fff;background:#258900;cursor:default}.pagination-container .pagination-container-center{text-align:center}.pagination-container .pagination-container-center .table-page-btn{margin-top:0}span.table-page-number[tooltip]:hover{position:relative}span.table-page-number[tooltip]:hover:after{content:attr(tooltip);padding:4px 8px;color:#258900;position:absolute;left:0;top:100%;white-space:nowrap;z-index:1000;border-radius:5px;background-image:transparent}.contrasto-on .pagination-container .table-page-btn{color:#000}.contrasto-on .pagination-container .table-page-btn.disabled{color:#6f6f6f}.contrasto-on .pagination-container .table-page-btn .table-page-number{border:1px solid #000;color:#000;background:#fff}.contrasto-on .pagination-container .table-page-btn .table-page-number.active{color:#fff;background:#000} /*# sourceMappingURL=nbp-pagination.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [])
], NbpPaginationComponent);
export { NbpPaginationComponent };
