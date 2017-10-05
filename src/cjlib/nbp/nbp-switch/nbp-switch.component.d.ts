import { INbpSwitchStructure } from './nbp-switch.interfaces';
import { OnInit, EventEmitter } from '@angular/core';
export declare class NbpSwitchComponent implements OnInit {
    /**
    * Valore preselezionato per lo switch deve appartenere
    * alla lista dei valori che gli vengono passati altrimenti
    * non sara' utilizzato.
    */
    defaultValue: any;
    /**
     * Identificativo univoco per il text field.
     * Se nessun id è fornito e' auto-generato.
     */
    id: string;
    /**
     * Array degli oggetti rappresentanti i pulsanti di switch.
     */
    nbpOptionList: Array<INbpSwitchStructure>;
    /**
     * TEXT: solo testo,
     * ICON: solo icona (non supportato)
     * ICON_TEXT: testo e icona (non supportato)
     * NOTA: Inizialmente supporteremo solo type: TEXT
     */
    nbpDisplayType: NpbSwitchDispalyType;
    private _nbpDisabled;
    /**
     * Booleano che abilita/disabilita le funzionalità del pulsante
     * Attributo "disabled" standard di HTML element
     */
    disabled: boolean;
    /**
     * Rappresenta l’oggetto associato al pulsante di switch selezionato.
     */
    nbpSelected: String;
    /**
     * Funzione associata all’evento di click su un pulsante di switch.
     */
    nbpClickFn: EventEmitter<any>;
    buttonSelectedIndex: number;
    /**
     * Booleano abilita l'andata a capo del testo
     */
    nbpTextUp: boolean;
    constructor();
    ngOnInit(): void;
    onSelectButton(index: number, selectedValue: any): void;
    checkIcon(): boolean;
    checkText(): boolean;
    checkTextUp(): boolean;
}
export declare enum NpbSwitchDispalyType {
    TEXT = 0,
    ICON = 1,
    ICON_TEXT = 2,
}
