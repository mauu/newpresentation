import { OnInit, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { ICjRadioStructure, ICjCustomerInfo } from './cj-radio-selection.interfaces';
export declare class CjRadioSelectionComponent implements OnInit, OnChanges {
    /**
    * (Opzionale) Lista dei dati visualizzati nel componente e selezionabili
    */
    cjRadioList: Array<ICjRadioStructure>;
    /**
    * (Opzionale) Informazioni cliente (nome, cognome e iniziali da visualizzare)
    */
    cjCustomerInfo: ICjCustomerInfo;
    /**
    * (Opzionale) Dati per popolare il componente
    */
    cjData: string;
    /**
     * Evento emesso al click sui radio button
     * @param {EventEmitter<any>}  cjOnSelection
     */
    cjOnSelection: EventEmitter<any>;
    _radioList: Array<ICjRadioStructure>;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    _onSelection(event: any): void;
}
