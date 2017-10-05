import { OnInit, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { INbpButton, INbpButtonLib } from './../nbp-commons/nbp-commons.interface';
import { INbpModal } from './nbp-modal.interfaces';
import { NbpSize } from './../nbp-commons/nbp-commons.enums';
/**
 * La Finestra Modale è una pagina che viene visualizzata al di sopra della pagina
 * corrente, la quale viene disabilitata.
 */
export declare class NbpModalComponent implements OnInit, OnChanges, INbpModal {
    id: string;
    _nbpOpened: boolean;
    /**
     * Flag che controlla la visibilità della modale.
     */
    nbpOpened: boolean;
    nbpOpenedChange: EventEmitter<{}>;
    /**
     * (Opzionale) Stringa da utilizzare come titolo della finestra modale
     */
    nbpTitle: string;
    /**
     * (Opzionale) Stringa da utilizzare come sotto-titolo della finestra modale
     */
    nbpSubTitle: string;
    /**
     * Proprietà che definisce la grandezza della modale, tramite l'enum NbpSize
     * valore di default: NbpSize.MD
     */
    nbpSize: NbpSize;
    /**
     * Array che descrive i pulsanti
     * da visualizzare nella modale
     */
    nbpButtons: Array<INbpButton>;
    /**
     * Evento lanciato alla pressione di ogni pulsante.
     * Viene passato come parametro il pulsante cliccato.
     */
    nbpOnButtonClicked: EventEmitter<INbpButton>;
    /**
     * Evento lanciato alla chusura della modale.
     */
    nbpOnClose: EventEmitter<any>;
    /**
     * Evento lanciato all'apertura della modale.
     */
    nbpOnOpen: EventEmitter<any>;
    _modalSize: any;
    _shadowButtons: Array<INbpButtonLib>;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private _populateShadowButtons();
    private _populateStyles();
    private _evaluateButtonsAndLayout();
    _getDisplayStyleValue(): string;
    _onClick(button: INbpButton): void;
    open(): void;
    close(): void;
}
