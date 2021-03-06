var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var NbpTableUtilService = (function () {
    function NbpTableUtilService() {
        this.disablePaginationStatus = {
            first: false,
            last: false,
            next: false,
            page: false,
            prev: false
        };
    }
    NbpTableUtilService.prototype.setColumns = function (columns) {
        this.columns = columns;
    };
    ;
    NbpTableUtilService.prototype.getCurrentPageStatus = function () {
        return this.currentPageStatus;
    };
    NbpTableUtilService.prototype.setCurrentPageStatus = function (currentPageStatus) {
        if (currentPageStatus.totalRecords > 0) {
            this.disablePaginationStatus.last = false;
        }
        else {
            this.disablePaginationStatus.last = true;
        }
        this.currentPageStatus = currentPageStatus;
        if (currentPageStatus.totalRecords && (currentPageStatus.pageNumber) * currentPageStatus.pageSize > currentPageStatus.totalRecords) {
            this.disablePaginationStatus.next = true;
        }
        else {
            this.disablePaginationStatus.next = false;
        }
    };
    ;
    NbpTableUtilService.prototype.setCurrentPageNumber = function (pageNumber) {
        this.currentPageStatus.pageNumber = pageNumber;
    };
    NbpTableUtilService.prototype.getColumns = function () {
        return this.columns;
    };
    NbpTableUtilService.prototype.setColumnOrdering = function (columnField, orderingType) {
        this.columns.map(function (element) {
            element.currentOrder = null;
            if (element.field === columnField) {
                element.currentOrder = orderingType === undefined ? '' : orderingType;
            }
        });
    };
    NbpTableUtilService.prototype.getCurrentOrdering = function () {
        var filteredOrders = this.columns.filter(function (column) { return column.currentOrder !== null; });
        var orders = filteredOrders.map(function (column) { return column.currentOrder + column.field; });
        return orders;
    };
    ;
    NbpTableUtilService.prototype.findGlobalIndex = function (rowIndex) {
        return this.currentPageStatus ? (this.currentPageStatus.pageSize * (this.currentPageStatus.pageNumber - 1)) + (rowIndex) : -1;
    };
    NbpTableUtilService.prototype.findIndexOfSelectedByItem = function (item, selectedRows) {
        var itemSelectedId = -1;
        selectedRows.map(function (row, index) {
            if (row === item) {
                itemSelectedId = index;
            }
        });
        return itemSelectedId;
    };
    NbpTableUtilService.prototype.getColumnsFromChildren = function (children) {
        var columns = children.map(function (child) {
            var column = {
                id: child.nbpId,
                field: child.nbpField,
                title: child.nbpTitle,
                visible: child.nbpVisible,
                sortable: child.nbpSortable,
                filter: child.nbpFilter,
                filterArg: child.nbpFilterArg,
                currentOrder: null
            };
            return column;
        });
        return columns;
    };
    return NbpTableUtilService;
}());
NbpTableUtilService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], NbpTableUtilService);
export { NbpTableUtilService };
