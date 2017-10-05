import { SortingDirection, CompareStatus } from './nbp-datasource.enums';
import { getPropertyValueByPath } from './../../utility/lib-utility';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
var NbpDataSource = (function () {
    /*
      Per usare il dataSource senza paginazione non va passato nulla nel defaultPagesize
       e nella get page non specificare valori per pageSize
    */
    function NbpDataSource(arrayData, defaultPageSize) {
        this.arrayData = arrayData;
        this.defaultPageSize = defaultPageSize;
    }
    NbpDataSource.prototype.getSortingDirections = function (sortFields) {
        var sortingDirections = sortFields.map(function (element) {
            var sortingDirection;
            if (element.charAt(0) === '-') {
                sortingDirection = SortingDirection.DESCENDING;
            }
            else {
                sortingDirection = SortingDirection.ASCENDING;
            }
            return sortingDirection;
        });
        return sortingDirections;
    };
    NbpDataSource.prototype.getPage = function (pageNumber, sortFields, pageSize) {
        var shadowData = this.arrayData.slice();
        var currentPageSize = pageSize ? pageSize : (this.defaultPageSize ? this.defaultPageSize : this.arrayData.length);
        var pageToreturn = pageNumber ? pageNumber : 1;
        var start = (pageToreturn - 1) * currentPageSize;
        var end = start + currentPageSize;
        if (sortFields && sortFields.length) {
            shadowData = this.sortData(this.arrayData.slice(), sortFields);
        }
        var data = shadowData.slice(start, end);
        var dataPage = {
            data: data,
            status: {
                pageNumber: pageNumber,
                pageSize: currentPageSize,
                totalRecords: this.arrayData.length
            }
        };
        return Observable.of(dataPage);
    };
    NbpDataSource.prototype.sortData = function (data, sortFields) {
        var sortingDirections = this.getSortingDirections(sortFields);
        var sortField = sortFields[0];
        var sortDirection = sortingDirections[0];
        var sortedData = data.sort(this.dataSortComparator(sortDirection, sortField));
        return sortedData;
    };
    NbpDataSource.prototype.dataSortComparator = function (sortDirection, sortField) {
        return function (a, b) {
            var result;
            var field = sortDirection === SortingDirection.DESCENDING ? sortField.substr(1) : sortField;
            var currentTmp = getPropertyValueByPath(a, field);
            var nextTmp = getPropertyValueByPath(b, field);
            var current = currentTmp instanceof Date ? currentTmp.getTime() : currentTmp;
            var next = nextTmp instanceof Date ? nextTmp.getTime() : nextTmp;
            if (current === null || current === undefined) {
                result = CompareStatus.LOWER;
            }
            else if (next === null || next === undefined) {
                result = CompareStatus.HIGHER;
            }
            else {
                result = (current < next) ? CompareStatus.LOWER : ((current > next) ? CompareStatus.HIGHER : CompareStatus.EQUAL);
            }
            return result * sortDirection;
        };
    };
    NbpDataSource.prototype.refresh = function () {
    };
    return NbpDataSource;
}());
export { NbpDataSource };
