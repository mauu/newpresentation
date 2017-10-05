import { INbpDataSource, IDataPage } from './nbp-datasource.interfaces';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
export declare class NbpDataSource<T> implements INbpDataSource<T> {
    private arrayData;
    private defaultPageSize;
    constructor(arrayData: Array<T>, defaultPageSize?: number);
    private getSortingDirections(sortFields);
    getPage(pageNumber?: number, sortFields?: Array<string>, pageSize?: number): Observable<IDataPage<T>>;
    private sortData(data, sortFields);
    private dataSortComparator(sortDirection, sortField);
    refresh(): void;
}
