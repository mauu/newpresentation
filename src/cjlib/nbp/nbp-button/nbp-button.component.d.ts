import { EventEmitter, OnInit } from '@angular/core';
import { NbpStyle, NbpSize } from './../nbp-commons/nbp-commons.enums';
import { NbpButtonType } from './nbp-button.enums';
/**
 * Componente per l’inserimento di pulsanti nella pagina. La prima versione del
 * componente conterrà un insieme minimale delle funzionalità, ad esempio sarà possibile
 * utilizzare solo button senza icona.
 *
 */
export declare class NbpButtonComponent implements OnInit {
    /**
     * Testo visualizzato nel pulsante.
     */
    nbpLabel: string;
    /**
     * (Opzionale) Nome della classe icona da visualizzare nel pulsante
     */
    nbpIcon: string;
    /**
     * Booleano che abilita/disabilita le funzionalità del pulsante
     * Attributo "disabled" standard di HTML element
     */
    private _nbpDisabled;
    disabled: boolean;
    /**
     * (Opzionale) Enum per impostare lo stile del pulsante.
     * "DEFAULT" | "PRIMARY" | "SECONDRY" | "OUTLINE"
     *  Valore default: "DEFAULT"
     */
    nbpStyle: NbpStyle;
    /**
      * (Opzionale) Enum, che indica la dimensione dei pulsanti.
      * Proprietà che agisce solo sui pulsanti di tipo SELECT (vedi Style Guide)
      * “LG” | “MD”
      * Valore default : “MD”
      */
    nbpSize: NbpSize;
    /**
     * (Opzionale) Enum, che indica la tipologia dei pulsanti.
     * "ACTION" | "SELECT" | "GENERATIVE"
     * Valore default : “ACTION”
     */
    nbpType: NbpButtonType;
    /**
     * Evento emesso al click sul pulsante.
     * @param {EventEmitter<any>}  nbpClick
     */
    nbpClick: EventEmitter<any>;
    private _isSelectButtonChecked;
    /**
     * (Opzionale) Agiste solo sui button con nbpType = 'SELECT'
     */
    nbpChecked: boolean;
    private _backgroundColor;
    _style: any;
    _type: any;
    _size: any;
    private _isSelectButtonSizeLarge;
    constructor();
    ngOnInit(): void;
    _onClickButton(): void;
    private _configureButton();
    private _ifSelectButtonPrimarySetDefault();
}
