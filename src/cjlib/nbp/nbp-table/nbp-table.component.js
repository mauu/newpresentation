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
import { QueryList, ContentChildren } from '@angular/core';
import { NbpTableUtilService } from './nbp-table-util.service';
import { getPropertyValueByPath } from './../../utility/lib-utility';
import { NbpFormatterService } from './../../utility/nbp-formatter.service';
// import { DatePipe, DecimalPipe, CurrencyPipe } from '@angular/common';
import { Actions } from './nbp-table.enums';
import { NbpTableColumnComponent } from './../nbp-table-column/nbp-table-column.component';
var NbpOnRowActionEvent = (function () {
    function NbpOnRowActionEvent(item, action, rowIndex, globalIndex) {
        this.item = item;
        this.action = action;
        this.rowIndex = rowIndex;
        this.globalIndex = globalIndex;
    }
    return NbpOnRowActionEvent;
}());
export { NbpOnRowActionEvent };
var NbpOnRowsActionEvent = (function () {
    function NbpOnRowsActionEvent(items, lastSelectedItem) {
        this.items = items;
        this.lastSelectedItem = lastSelectedItem;
    }
    return NbpOnRowsActionEvent;
}());
export { NbpOnRowsActionEvent };
/** intero autogenerato usato per id unici per checkbox component */
var nextId = 0;
var NbpTableComponent = (function () {
    function NbpTableComponent(_tableUtilService, _nbpFormatter) {
        this._tableUtilService = _tableUtilService;
        this._nbpFormatter = _nbpFormatter;
        /**
         * Stringa che definisce l'id della tabella del cmponente
         */
        this.nbpId = "nbp-table-" + ++nextId;
        /**
         * Rappresenta la possibilità di decidere se bindare i dati al momento dell'inizializzazione del componente o no.
         * In caso di nbpAutoBind = false, è necessario richiamare il metodo pubblico "datasourceRead" per popolare la tabella.
         */
        this.nbpAutoBind = true;
        /**
         * Stringa che rappresenta la tipologia di selezione della griglia tra:
         * 'single' | 'multi' | 'none'
         * Default: 'none'
         */
        this.nbpSelectionType = 'none';
        /**
         * Evento che viene emesso al click su una riga singola della tabella (solo nbpSelectionType = 'none').
         * L'evento emesso contiene un insieme di metadati definiti nella INbpClickRowEvent.
         * @param {EventEmitter<INbpOnRowActionEvent<T>>}  nbpOnClickRow
         */
        this.nbpOnClickRow = new EventEmitter();
        /**
         * Evento che viene emesso alla selezione singola di un record della table (solo nbpSelectionType = 'single').
         * L'evento emesso contiene il dato selezionato del tipo definito.
         * @param {EventEmitter<INbpOnRowActionEvent<T>>}  nbpOnSelectRow
         */
        this.nbpOnSelectRow = new EventEmitter();
        /**
         * Evento che viene emesso al click su una singola della tabella (solo nbpSelectionType = 'multi').
         * L'evento emesso contiene la lista dei record selezionati
         * e l'ultimo elemento selezionato definiti nella INbpClickRowsEvent.
         * @param {EventEmitter<INbpOnRowActionEvent<T>>}  nbpOnMultiSelectRows
         */
        this.nbpOnMultiSelectRow = new EventEmitter();
        /**
         * Evento lanciato ad ogni cambio pagina (utile per il servizio di
         * paginazione lato BE)
         * @param {EventEmitter<any> = new EventEmitter(} ) nbpChangePage
         */
        this.nbpChangePage = new EventEmitter();
        this._selectedRowsIndexes = new Array();
        this._selectedRows = new Array();
    }
    NbpTableComponent.prototype._initializeTableByChildren = function (children) {
        this._tableUtilService.setColumns(this._tableUtilService.getColumnsFromChildren(children));
        this.nbpOptions.columns = this._tableUtilService.getColumns();
        this._tableUtilService.setCurrentPageStatus({ pageNumber: 1, pageSize: -1, totalRecords: -1 });
        this._firstPageNavigation();
    };
    // TODO IMPLEMENTARE POSSIBILITà DI INIZIALIZZARE VIA OPTIONS LE COLONNE
    /*initializeTableFromOptions() {
       this.tableUtilService.setColumns(this.nbpOptions.columns);
       this.tableUtilService.setCurrentPageStatus({ pageNumber: 1, pageSize: null, totalRecords: null });
       this.firstPageNavigation();
     }*/
    NbpTableComponent.prototype._onOrder = function (columnField, orderingType) {
        this._tableUtilService.setColumnOrdering(columnField, orderingType);
        var currentPageStatus = this._tableUtilService.getCurrentPageStatus();
        this.navigateToPage(currentPageStatus.pageNumber, this._tableUtilService.getCurrentOrdering(), this.nbpOptions.pageSize);
    };
    NbpTableComponent.prototype._firstPageNavigation = function () {
        this.navigateToPage(1, this._tableUtilService.getCurrentOrdering(), this.nbpOptions.pageSize);
    };
    NbpTableComponent.prototype._clearRowsSelections = function () {
        this._selectedRowsIndexes.splice(0);
        this._selectedRows.splice(0);
    };
    NbpTableComponent.prototype._emitEmptySelectionEvents = function () {
        this.nbpOnSelectRow.emit();
        this.nbpOnMultiSelectRow.emit();
    };
    NbpTableComponent.prototype._singleRowSelection = function (item, rowIndex) {
        var globalIndex = this._tableUtilService.findGlobalIndex(rowIndex);
        var eventDataSingle = new NbpOnRowActionEvent(item, Actions.SELECTED, rowIndex, globalIndex);
        this.nbpOnSelectRow.emit(eventDataSingle);
        this._clearRowsSelections();
        this._selectedRowsIndexes.push(rowIndex);
        console.debug('singleselect');
    };
    NbpTableComponent.prototype._removeItemFromSelectedRows = function (item) {
        var itemSelectedId = this._tableUtilService.findIndexOfSelectedByItem(item, this._selectedRows);
        this._selectedRows.splice(itemSelectedId, 1);
        console.debug('remove element');
    };
    NbpTableComponent.prototype._insertItemIntoSelectedRows = function (item) {
        this._selectedRows.push(item);
        console.debug('add element');
    };
    NbpTableComponent.prototype._sendMultiSelectionEvent = function () {
        var eventDataMulti = new NbpOnRowsActionEvent(this._selectedRows, this._selectedRows[this._selectedRows.length - 1]);
        this.nbpOnMultiSelectRow.emit(eventDataMulti);
    };
    NbpTableComponent.prototype._onSelectRow = function (item, rowIndex, checkboxValue) {
        switch (this.nbpSelectionType) {
            case 'single':
                this._singleRowSelection(item, rowIndex);
                break;
            case 'multi':
                var eventDataMulti = void 0;
                switch (checkboxValue) {
                    case false:
                        this._removeItemFromSelectedRows(item);
                        break;
                    case true:
                        this._insertItemIntoSelectedRows(item);
                        break;
                }
                this._sendMultiSelectionEvent();
                break;
            case 'none':
                this._onClickRow(item, rowIndex);
                console.debug('none');
                break;
        }
    };
    NbpTableComponent.prototype._onClickRow = function (item, rowIndex) {
        var globalIndex = this._tableUtilService.findGlobalIndex(rowIndex);
        var eventData = new NbpOnRowActionEvent(item, Actions.CLICKED, rowIndex, globalIndex);
        this.nbpOnClickRow.emit(eventData);
    };
    NbpTableComponent.prototype._getCellValueForColumn = function (obj, column) {
        var cellValue = getPropertyValueByPath(obj, column.field);
        var formatteCellValue = this._nbpFormatter.displayValueTransformation(cellValue, column.filter, column.filterArg);
        return formatteCellValue;
    };
    NbpTableComponent.prototype._isCurrentIndexIntoSelected = function (currentIndex) {
        var result = this._selectedRowsIndexes.indexOf(currentIndex);
        return result === -1 ? false : true;
    };
    NbpTableComponent.prototype._onNextPage = function (requestedState) {
        this._clearRowsSelections();
        this._emitEmptySelectionEvents();
        var currentOrder = this._tableUtilService.getCurrentOrdering();
        this.navigateToPage(requestedState.pageNumber, currentOrder, this.nbpOptions.pageSize);
    };
    NbpTableComponent.prototype._onPrevPage = function (requestedState) {
        this._clearRowsSelections();
        this._emitEmptySelectionEvents();
        var currentOrder = this._tableUtilService.getCurrentOrdering();
        this.navigateToPage(requestedState.pageNumber, currentOrder, this.nbpOptions.pageSize);
    };
    NbpTableComponent.prototype._onFirstPage = function () {
        this._clearRowsSelections();
        this._emitEmptySelectionEvents();
        this._tableUtilService.setCurrentPageNumber(1);
        this._firstPageNavigation();
    };
    NbpTableComponent.prototype._onLastPage = function (requestedState) {
        var currentPageStatus = this._tableUtilService.getCurrentPageStatus();
        if (currentPageStatus.totalRecords && currentPageStatus.pageSize) {
            this._clearRowsSelections();
            this._emitEmptySelectionEvents();
            var currentOrder = this._tableUtilService.getCurrentOrdering();
            var lastPage = this._evaluateLastPage(currentPageStatus);
            this.navigateToPage(lastPage, currentOrder, this.nbpOptions.pageSize);
        }
    };
    NbpTableComponent.prototype._evaluateLastPage = function (currentPageStatus) {
        var partialPages = Math.floor((currentPageStatus.totalRecords) / currentPageStatus.pageSize);
        var lastPage = (currentPageStatus.totalRecords) % currentPageStatus.pageSize ? partialPages + 1 : partialPages;
        return lastPage;
    };
    NbpTableComponent.prototype._onGoToPage = function (requestedState) {
        this._clearRowsSelections();
        this._emitEmptySelectionEvents();
        var currentOrder = this._tableUtilService.getCurrentOrdering();
        var currentPageStatus = this._tableUtilService.getCurrentPageStatus();
        if (currentPageStatus && currentPageStatus.totalRecords) {
            var lastPage = this._evaluateLastPage(currentPageStatus);
            var pageToGo = lastPage < requestedState.pageNumber ? lastPage : requestedState.pageNumber;
            this.navigateToPage(pageToGo, currentOrder, this.nbpOptions.pageSize);
        }
    };
    NbpTableComponent.prototype._onPageChange = function () {
        this.nbpChangePage.emit();
        console.debug('changed page');
    };
    NbpTableComponent.prototype._initializePaginationGap = function () {
        if (this.nbpOptions.pageGapSize) {
            this._pageGapSize = this.nbpOptions.pageGapSize;
        }
    };
    NbpTableComponent.prototype.ngOnInit = function () {
        this._shadowAutoBind = this.nbpAutoBind;
    };
    NbpTableComponent.prototype.ngAfterContentInit = function () {
        if (!this.nbpSelectionType) {
            this.nbpSelectionType = 'none';
        }
        if (this.contentChildren) {
            this._initializeTableByChildren(this.contentChildren);
        }
        this._initializePaginationGap();
    };
    NbpTableComponent.prototype.ngOnDestroy = function () {
        if (this._datasourceSubscription) {
            this._datasourceSubscription.unsubscribe();
        }
    };
    /**
     * Permette di navigare la paginazione della tabella programmaticamente.
     * @param pageNumber (Obbligatotio) Numero della pagina da visualizzare
     * @param sortingFields (Opzionale) array contenente i nomi delle proprietà su cui fare il sorting
     * (e.g. [name]->(ASC name) oppure [-name]->(DESC name) )
     * @param pageSize (Opzionale) serve per il set di un pageSize differente dal defaultPageSize della DataSource
     */
    NbpTableComponent.prototype.navigateToPage = function (pageNumber, sortingFields, pageSize) {
        var _this = this;
        if (this.nbpDataSource && this._shadowAutoBind) {
            var currentPageStream = this.nbpDataSource.getPage(pageNumber, sortingFields, pageSize); // TODO prendere i parametri
            this._datasourceSubscription = currentPageStream.subscribe(function (value) {
                _this._tableUtilService.setCurrentPageStatus(value.status);
                _this._clearRowsSelections();
                _this._emitEmptySelectionEvents();
                _this._overridePaginationDisable = value.status.pageSize === value.status.totalRecords;
                if (value.data && value.data.length) {
                    _this._shadowNbpDataSource = value.data.slice();
                    // console.log('Resolve Subscribe');
                }
                else {
                    var pageNumber_1 = _this._tableUtilService.getCurrentPageStatus().pageNumber - 1;
                    _this._tableUtilService.setCurrentPageNumber(pageNumber_1);
                }
                ;
            }, function (error) {
                console.debug(JSON.stringify(error));
            });
        }
    };
    /**
     * Permette di bindare i dati alla tabella oppure in caso di dati già bindati di ricaricare i dati e riportare alla prima pagina.
     */
    NbpTableComponent.prototype.datasourceRead = function () {
        if (this.nbpDataSource && !this._shadowAutoBind) {
            this._shadowAutoBind = true;
        }
        this.navigateToPage(1);
    };
    return NbpTableComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpTableComponent.prototype, "nbpId", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NbpTableComponent.prototype, "nbpOptions", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NbpTableComponent.prototype, "nbpDataSource", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NbpTableComponent.prototype, "nbpAutoBind", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpTableComponent.prototype, "nbpSelectionType", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpTableComponent.prototype, "nbpOnClickRow", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpTableComponent.prototype, "nbpOnSelectRow", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpTableComponent.prototype, "nbpOnMultiSelectRow", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpTableComponent.prototype, "nbpChangePage", void 0);
__decorate([
    ContentChildren(NbpTableColumnComponent),
    __metadata("design:type", QueryList)
], NbpTableComponent.prototype, "contentChildren", void 0);
NbpTableComponent = __decorate([
    Component({
        selector: 'nbp-table',
        template: "<div class=\"table-container\"><table [id]=\"nbpId\" class=\"fixed-width\"><thead><tr id=\"headerRow\" class=\"row-nowrap\"><th *ngIf=\"nbpSelectionType === 'multi'\" class=\"table-label with-checkbox\"></th><th class=\"table-label\" *ngFor=\"let column of nbpOptions?.columns\" [hidden]=\"!column.visible\">{{column.title}}<div class=\"sort-button\" [hidden]=\"!nbpOptions.sortable || !column.sortable\"><div class=\"arrow-down\" (click)=\"_onOrder(column.field,'-');\" [ngClass]=\"{'active':column && column.currentOrder === '-'}\"></div><div class=\"arrow-up\" (click)=\"_onOrder(column.field);\" [ngClass]=\"{'active':column && column.currentOrder === '' }\"></div></div></th></tr></thead><tbody><tr *ngFor=\"let data of _shadowNbpDataSource; let rowIndex=index;\" class=\"table-row\" [ngClass]=\"{'highlighted': _isCurrentIndexIntoSelected(rowIndex), 'clickable': nbpSelectionType === 'single'}\" (click)=\"_onSelectRow(data,rowIndex);\"><td *ngIf=\"nbpSelectionType === 'multi'\" class=\"table-cell text-center selection-cell\"><input type=\"checkbox\" (click)=\"_onSelectRow(data, rowIndex, $event.target.checked);\"></td><td *ngFor=\"let column of nbpOptions?.columns\" class=\"table-cell text-center data-cell\" [hidden]=\"!column.visible\">{{ _getCellValueForColumn(data , column) }}</td></tr></tbody></table><nbp-pagination *ngIf=\"_shadowAutoBind && (!nbpOptions.disablePagination && !_overridePaginationDisable)\" [nbpPaginationStatus]=\"_tableUtilService.currentPageStatus\" [nbpDisablePaginationStatus]=\"_tableUtilService.disablePaginationStatus\" [nbpPageWindowSize]=\"_pageGapSize\" (nbpOnFirst)=\"_onFirstPage($event)\" (nbpOnLast)=\"_onLastPage($event)\" (nbpOnNext)=\"_onNextPage($event)\" (nbpOnGoToPage)=\"_onGoToPage($event)\" (nbpOnPrev)=\"_onPrevPage($event)\" (nbpOnPageChange)=\"_onPageChange()\"></nbp-pagination></div><ng-content selector=\"nbp-table-column\"></ng-content>",
        viewProviders: [NbpTableUtilService, NbpFormatterService],styles: [".table-container{margin-bottom:20px}.table-container table{width:100%}.table-select{border-collapse:separate}.table-scrollbar{overflow-x:scroll}.table-label{padding:10px;color:#6f6f6f;font-weight:700;font-size:.75em;text-transform:uppercase;text-align:center;white-space:normal;height:3.333em;border:1px solid #ccc;background-color:#f2f2f2}.table-label.with-checkbox{width:4.167em;padding:0}.table-label.with-accordion{width:4.167em;padding:0}.table-label .icheckbox-container{margin-right:0!important;display:inline-table!important}.table-label.label-select{color:#6f6f6f;font-weight:700;font-size:.75em;text-transform:uppercase;height:1.875em;text-align:left;padding-left:.625em;border:1px solid #ccc;background-color:#fff}.table-label.label-select.select{background-color:#c4dbbc;border:1px solid #6f6f6f}.table-label.label-select .radio-label{font-size:100%}.table-row{font-size:.875em;height:3.429em;background-color:#fff;color:#323232;border:1px solid #ccc}.table-row.clickable{border-top:0;cursor:pointer}.table-row.clickable:hover{background-color:#89bc72}.table-row.with-checkbox{width:3.429em;padding:0;text-align:center;cursor:auto}.table-row.bold{font-weight:700}.table-row.highlighted{background-color:#89bc72}.table-row .icheckbox-container{margin-right:0!important;display:inline-table!important}.table-row.with-accordion{width:3.429em;padding:0;text-align:center;cursor:auto}.table-row .accordion-arrow{position:relative;font-size:2em;margin-top:-.156em;cursor:pointer}.row-yellow{background-color:#ff0}.cell-red{background-color:red}.content-accordion{background-color:#f8f8f8}.content-accordion .accordion-panel{text-align:center;font-size:.75em;font-family:Arial;font-style:normal;height:6.25em}.table-cell{position:relative;padding:0 .688em 0 .688em}.table-cell.with-borders{border:1px solid #ccc}.table-cell.with-checkbox{width:3.429em;padding:0;text-align:center}.table-cell.with-accordion{width:3.429em;padding:0;text-align:center}.table-cell.cell-select{color:#6f6f6f;height:4.375em;border:1px solid #ccc;background-color:#f2f2f2}.table-cell.cell-select.select{background-color:#c4dbbc;border:1px solid #6f6f6f;border-top:none}.table-cell a{text-overflow:ellipsis;word-wrap:break-word}.table-cell img{width:100%}.table-pagination{margin-top:.625em}.table-pagination table{width:100%;table-layout:fixed}.table-pagination .table-page-btn{display:inline-block;color:#258900;cursor:pointer;margin-top:.313em}.table-pagination .table-page-btn.disabled{color:#6f6f6f;cursor:auto}.table-pagination .table-page-btn .page-btn-arrow{font-size:1.25em;vertical-align:middle}.table-pagination .table-page-btn .page-btn-text{padding:0 .625em 0 .625em;font-size:.813em;font-weight:700}.table-pagination .table-page-btn .table-page-number{display:inline-block;border:1px solid #258900;font-weight:700;color:#258900;background:#fff;text-align:center;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;width:2em;height:2em;font-size:.938em;line-height:2em;margin:0 .125em 0 .125em;cursor:pointer}.table-pagination .table-page-btn .table-page-number.backward{margin-right:-.125em}.table-pagination .table-page-btn .table-page-number.forward{margin-left:-.125em}.table-pagination .table-page-btn .table-page-number.active{color:#fff;background:#258900}.table-pagination .table-pagination-center{text-align:center}.table-pagination .table-pagination-center .table-page-btn{margin-top:0}.sort-button{cursor:pointer}.arrow-up{display:inline-block;position:relative;width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #258900;margin-right:-.125em}.arrow-up::before{content:'';position:absolute;top:1px;left:-5px;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #fff}.arrow-down{display:inline-block;position:relative;width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #258900;margin-left:-.125em}.arrow-down::before{content:'';position:absolute;top:auto;bottom:1px;left:-5px;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #fff}.arrow-up.active::before{display:none}.arrow-down.active::before{display:none}.annulla-check{display:inline-block;color:#258900;cursor:pointer;margin-top:.313em}.annulla-check .page-btn-text{padding:0 .625em 0 .625em;font-size:.813em;font-weight:700}.row-nowrap{white-space:nowrap}.horizontal-scrollbar{overflow-x:scroll;overflow-y:hidden}.table-full-width{width:100%}.auto-width{table-layout:auto!important}.fixed-width{table-layout:fixed!important}.table-image{text-align:center;padding:10px!important}[tooltip-hover]:before{content:attr(tooltip-hover);position:absolute;overflow:none;opacity:0;padding:20px;color:#fff;border-radius:2px;background:#323232;margin-top:0;margin-left:0}[tooltip-hover]:hover:before{opacity:1;overflow:none;background:#323232;margin-top:-50px}[tooltip-hover]:not([tooltip-persistent]):before{pointer-events:none}[tooltip-click]:before{content:attr(tooltip-click);position:absolute;opacity:0;padding:20px;color:#fff;border-radius:2px;background:#323232;margin-top:0;margin-left:0}[tooltip-click]:visited:before{opacity:1;background:#323232;margin-top:-50px}[tooltip-click]:not([tooltip-persistent]):before{pointer-events:none}.tooltipClickLabel{position:absolute;padding:20px;color:#fff;border-radius:2px;background:#323232;margin-top:0;margin-left:0;bottom:40px;z-index:1000}.tooltipClickLabel:after{content:\"\A\";color:#323232;width:0;height:0;border-left:.625em solid transparent;border-right:.625em solid transparent;border-top:.625em solid;position:absolute;margin-top:2.813em;left:50%}.tooltipClickLabel .closeTip{position:absolute;top:2px;right:5px;z-index:1000;color:#fa9600;cursor:pointer}.green-link{color:#258900}.contrasto-on .table-container td{border:1px solid #000}.contrasto-on .table-label{color:#fff;border:1px solid #fff;background-color:#000}.contrasto-on .table-label.label-select{color:#000;border:1px solid #000;background-color:#fff}.contrasto-on .table-label.label-select.select{background-color:#000;border:1px solid #fff}.contrasto-on .table-label.label-select.select .iradio-container.checked .radio-label{color:#fff!important}.contrasto-on .table-row{background-color:#fff;color:#000}.contrasto-on .table-row.clickable{border:1px solid #000}.contrasto-on .table-row.clickable:hover{background-color:#fff;color:#000;border:2px solid #000!important}.contrasto-on .table-row.highlighted{background-color:#fff;color:#000;border:2px solid #000!important}.contrasto-on .content-accordion{background-color:#000;color:#fff}.contrasto-on .content-accordion .table-cell.with-borders{border:1px solid #fff}.contrasto-on .table-cell.with-borders{border:1px solid #000}.contrasto-on .table-cell.cell-select{color:#000;border:2px solid #000;background-color:#fff}.contrasto-on .table-cell.cell-select.select{background-color:#000;border:2px solid #fff;color:#fff}.contrasto-on .table-pagination .table-page-btn{color:#000}.contrasto-on .table-pagination .table-page-btn.disabled{color:#6f6f6f}.contrasto-on .table-pagination .table-page-btn .table-page-number{border:1px solid #000;color:#000;background:#fff}.contrasto-on .table-pagination .table-page-btn .table-page-number.active{color:#fff;background:#000}.contrasto-on .arrow-up{display:inline-block;position:relative;width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #fff;margin-right:-.125em}.contrasto-on .arrow-up::before{content:'';position:absolute;top:1px;left:-5px;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #000}.contrasto-on .arrow-down{display:inline-block;position:relative;width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #fff;margin-left:-.125em}.contrasto-on .arrow-down::before{content:'';position:absolute;top:auto;bottom:1px;left:-5px;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #000}.contrasto-on .arrow-up.active::before{display:none}.contrasto-on .arrow-down.active::before{display:none}.contrasto-on .annulla-check{color:#000}.contrasto-on [tooltip-hover]:before{content:attr(tooltip-hover);position:absolute;overflow:none;opacity:0;padding:20px;color:#fff;border-radius:2px;background:#000;margin-top:0;margin-left:0}.contrasto-on [tooltip-hover]:hover:before{opacity:1;overflow:none;background:#000;margin-top:-50px}.contrasto-on [tooltip-hover]:not([tooltip-persistent]):before{pointer-events:none}.contrasto-on [tooltip-click]:before{content:attr(tooltip-click);position:absolute;opacity:0;padding:20px;color:#fff;border-radius:2px;background:#000;margin-top:0;margin-left:0}.contrasto-on [tooltip-click]:visited:before{opacity:1;background:#000;margin-top:-50px}.contrasto-on [tooltip-click]:not([tooltip-persistent]):before{pointer-events:none}.contrasto-on .tooltipClickLabel{position:absolute;padding:20px;color:#fff;border-radius:2px;background:#323232;margin-top:0;margin-left:0;bottom:40px;z-index:1000}.contrasto-on .tooltipClickLabel:after{content:\"\A\";color:#fff;width:0;height:0;border-left:.625em solid transparent;border-right:.625em solid transparent;border-top:.625em solid;position:absolute;margin-top:2.813em;left:50%}.contrasto-on .tooltipClickLabel .closeTip{position:absolute;top:2px;right:5px;z-index:1000;color:#fff;cursor:pointer}.contrasto-on .green-link{color:#000} /*# sourceMappingURL=nbp-table.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [NbpTableUtilService,
        NbpFormatterService])
], NbpTableComponent);
export { NbpTableComponent };
