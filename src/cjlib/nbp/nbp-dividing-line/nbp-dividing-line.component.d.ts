import { EventEmitter, OnInit } from '@angular/core';
/**
 * @export
 * @class NbpDividingLineComponent
 * @implements {OnInit}
 * Visualizza una linea di separazione, con un pulsante opzionale e un titolo opzionale
 */
export declare class NbpDividingLineComponent implements OnInit {
    private _showButton;
    /**
     * Identificativo univoco per il cjWizardPage.
     * Se nessun id è fornito e' auto-generato.
     */
    id: string;
    /**
     * (Opzionale) Titolo visualizzato nella linea divisoria.
     */
    nbpTitle: string;
    /**
     * (Opzionale) Nome della classe icona da visualizzare nella linea divisoria
     */
    nbpTitleIcon: string;
    /**
     * (Opzionale) Booleano che mostra/nasconde il pulsante. Default: false
     */
    showButton: boolean;
    /**
     * (Opzionale) Testo visualizzato nel pulsante
     */
    npbButtonLabel: string;
    /**
     * (Opzionale) Nome della classe icona da visualizzare nel pulsante
     */
    nbpButtonIcon: string;
    /**
     * (Opzionale) Evento emesso al click sul pulsante.
     * @param {EventEmitter<any>} nbpClick
     */
    nbpClick: EventEmitter<any>;
    _onClick(): void;
    constructor();
    ngOnInit(): void;
}
