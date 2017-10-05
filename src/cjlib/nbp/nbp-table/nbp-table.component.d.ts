import { EventEmitter } from '@angular/core';
import { QueryList } from '@angular/core';
import { OnDestroy, AfterContentInit, OnInit } from '@angular/core';
import { NbpTableUtilService } from './nbp-table-util.service';
import { NbpFormatterService } from './../../utility/nbp-formatter.service';
import { Actions } from './nbp-table.enums';
import { INbpTableOptions, INbpTableColumn, INbpOnRowActionEvent, INbpOnRowsActionEvent } from './nbp-table.interfaces';
import { INbpDataSource, IPaginationStatus } from './../nbp-datasource/nbp-datasource.interfaces';
import { NbpTableColumnComponent } from './../nbp-table-column/nbp-table-column.component';
export declare class NbpOnRowActionEvent<T> implements INbpOnRowActionEvent<T> {
    item: T;
    action: Actions;
    rowIndex: number;
    globalIndex: number;
    constructor(item: T, action: Actions, rowIndex: number, globalIndex?: number);
}
export declare class NbpOnRowsActionEvent<T> implements INbpOnRowsActionEvent<T> {
    items: Array<T>;
    lastSelectedItem: T;
    constructor(items: Array<T>, lastSelectedItem: T);
}
export declare class NbpTableComponent<T> implements OnDestroy, AfterContentInit, OnInit {
    _tableUtilService: NbpTableUtilService<T>;
    private _nbpFormatter;
    /**
     * Stringa che definisce l'id della tabella del cmponente
     */
    nbpId: string;
    /**
     * Oggetto (INbpTableOptions) di configurazione delle Tabella
     */
    nbpOptions: INbpTableOptions;
    /**
     * Oggetto rappresentante la sorgente dati implementato a partire dall'interfaccia INbpDataSource<T>.
     */
    nbpDataSource: INbpDataSource<T>;
    /**
     * Rappresenta la possibilità di decidere se bindare i dati al momento dell'inizializzazione del componente o no.
     * In caso di nbpAutoBind = false, è necessario richiamare il metodo pubblico "datasourceRead" per popolare la tabella.
     */
    nbpAutoBind: boolean;
    /**
     * Stringa che rappresenta la tipologia di selezione della griglia tra:
     * 'single' | 'multi' | 'none'
     * Default: 'none'
     */
    nbpSelectionType: 'single' | 'multi' | 'none';
    /**
     * Evento che viene emesso al click su una riga singola della tabella (solo nbpSelectionType = 'none').
     * L'evento emesso contiene un insieme di metadati definiti nella INbpClickRowEvent.
     * @param {EventEmitter<INbpOnRowActionEvent<T>>}  nbpOnClickRow
     */
    nbpOnClickRow: EventEmitter<INbpOnRowActionEvent<T>>;
    /**
     * Evento che viene emesso alla selezione singola di un record della table (solo nbpSelectionType = 'single').
     * L'evento emesso contiene il dato selezionato del tipo definito.
     * @param {EventEmitter<INbpOnRowActionEvent<T>>}  nbpOnSelectRow
     */
    nbpOnSelectRow: EventEmitter<INbpOnRowActionEvent<T>>;
    /**
     * Evento che viene emesso al click su una singola della tabella (solo nbpSelectionType = 'multi').
     * L'evento emesso contiene la lista dei record selezionati
     * e l'ultimo elemento selezionato definiti nella INbpClickRowsEvent.
     * @param {EventEmitter<INbpOnRowActionEvent<T>>}  nbpOnMultiSelectRows
     */
    nbpOnMultiSelectRow: EventEmitter<INbpOnRowsActionEvent<T>>;
    /**
     * Evento lanciato ad ogni cambio pagina (utile per il servizio di
     * paginazione lato BE)
     * @param {EventEmitter<any> = new EventEmitter(} ) nbpChangePage
     */
    nbpChangePage: EventEmitter<any>;
    contentChildren: QueryList<NbpTableColumnComponent>;
    _shadowNbpDataSource: Array<T>;
    private _datasourceSubscription;
    private _selectedRowsIndexes;
    private _selectedRows;
    _shadowAutoBind: boolean;
    _pageGapSize: number;
    _overridePaginationDisable: boolean;
    constructor(_tableUtilService: NbpTableUtilService<T>, _nbpFormatter: NbpFormatterService);
    private _initializeTableByChildren(children);
    _onOrder(columnField: string, orderingType?: string): void;
    private _firstPageNavigation();
    private _clearRowsSelections();
    private _emitEmptySelectionEvents();
    private _singleRowSelection(item, rowIndex);
    private _removeItemFromSelectedRows(item);
    private _insertItemIntoSelectedRows(item);
    private _sendMultiSelectionEvent();
    _onSelectRow(item: T, rowIndex: number, checkboxValue?: boolean): void;
    private _onClickRow(item, rowIndex);
    _getCellValueForColumn(obj: Object, column: INbpTableColumn): any;
    private _isCurrentIndexIntoSelected(currentIndex);
    _onNextPage(requestedState: IPaginationStatus): void;
    _onPrevPage(requestedState: IPaginationStatus): void;
    _onFirstPage(): void;
    _onLastPage(requestedState: IPaginationStatus): void;
    private _evaluateLastPage(currentPageStatus);
    _onGoToPage(requestedState: IPaginationStatus): void;
    _onPageChange(): void;
    private _initializePaginationGap();
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    /**
     * Permette di navigare la paginazione della tabella programmaticamente.
     * @param pageNumber (Obbligatotio) Numero della pagina da visualizzare
     * @param sortingFields (Opzionale) array contenente i nomi delle proprietà su cui fare il sorting
     * (e.g. [name]->(ASC name) oppure [-name]->(DESC name) )
     * @param pageSize (Opzionale) serve per il set di un pageSize differente dal defaultPageSize della DataSource
     */
    navigateToPage(pageNumber: number, sortingFields?: Array<string>, pageSize?: number): void;
    /**
     * Permette di bindare i dati alla tabella oppure in caso di dati già bindati di ricaricare i dati e riportare alla prima pagina.
     */
    datasourceRead(): void;
}
