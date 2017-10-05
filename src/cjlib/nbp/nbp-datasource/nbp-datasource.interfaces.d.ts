import { Observable } from 'rxjs/Observable';
export interface IPaginationStatus {
    pageNumber: number;
    pageSize: number;
    totalRecords: number;
}
export interface IDataPage<T> {
    data: T[];
    status?: IPaginationStatus;
}
export interface INbpDataSource<T> {
    getPage(pageNumber?: number, sorting?: Array<string>, pageSize?: number): Observable<IDataPage<T>>;
}
