import { Actions } from './nbp-table.enums';
import { NbpPipe } from './../nbp-commons/nbp-commons.enums';
/**
 * Definizione delle colonne per il componente NbpTable
 */
export interface INbpTableColumn {
    id: string;
    title: string;
    field: string;
    sortable: boolean;
    visible: boolean;
    filter?: NbpPipe;
    filterArg?: any;
}
export interface INbpTableColumnLib extends INbpTableColumn {
    currentOrder: string;
}
/**
 * Definizione delle Opzioni di configurazione del componetne NbpTable
 */
export interface INbpTableOptions {
    sortable: boolean;
    pageSize?: number;
    columns?: Array<INbpTableColumn>;
    disablePagination?: boolean;
    pageGapSize?: number;
}
export interface INbpOnRowActionEvent<T> {
    item: T;
    rowIndex: number;
    globalIndex?: number;
    action: Actions;
}
export interface INbpOnRowsActionEvent<T> {
    items: Array<T>;
    lastSelectedItem: T;
}
