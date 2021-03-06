import { QueryList } from '@angular/core';
import { INbpTableColumnLib } from './nbp-table.interfaces';
import { IPaginationStatus } from './../nbp-datasource/nbp-datasource.interfaces';
import { NbpTableColumnComponent } from './../nbp-table-column/nbp-table-column.component';
export declare class NbpTableUtilService<T> {
    private columns;
    private currentPageStatus;
    private disablePaginationStatus;
    constructor();
    setColumns(columns: Array<INbpTableColumnLib>): void;
    getCurrentPageStatus(): IPaginationStatus;
    setCurrentPageStatus(currentPageStatus: IPaginationStatus): void;
    setCurrentPageNumber(pageNumber: number): void;
    getColumns(): Array<INbpTableColumnLib>;
    setColumnOrdering(columnField: string, orderingType?: string): void;
    getCurrentOrdering(): string[];
    findGlobalIndex(rowIndex: number): number;
    findIndexOfSelectedByItem(item: T, selectedRows: Array<T>): number;
    getColumnsFromChildren(children: QueryList<NbpTableColumnComponent>): INbpTableColumnLib[];
}
