import { EventEmitter } from '@angular/core';
import { Link, ButtonFooter } from './nbp-footer.interfaces';
import { NbpFontSize } from './nbp-footer.enums';
export declare class NbpFooterComponent {
    private document;
    /**
     * Array dei Link da visualizzare nella prima sezione del footer
     */
    nbpLinks: Array<Link>;
    /**
     * Array contenente le lingue disponibili presenti nel footer
     */
    nbpLanguages: Array<string>;
    /**
     * (Opzionale) Booleano che mostra/nasconde il pulsante centrale.
     * Valore di default false (pulsante non visibile)
     */
    nbpShowCentralBtn: boolean;
    /**
     * (Opzionale) Percentuale di zoom della pagina, agisce sulla grandezza dei testi nel css della libreria
     * Valore di default NbpFontSize.MEDIUM
     */
    nbpZoomSize: NbpFontSize;
    /**
     * (Opzionale) pulsante centrale del componente
     */
    nbpCentralBtn: ButtonFooter;
    /**
     * (Opzionale) Evento emesso alla seleziona della lingua
     */
    nbpLanguageChange: EventEmitter<string>;
    /**
     * (Opzionale) identifica la lingua selezionata
     * Valore di default impostato ita
     */
    nbpLanguage: string;
    /**
     * (Opzionale) Booleano che mostra/nasconde i pulsanti per la gestione del contrasto
     * valore di default false
     */
    nbpContrastEnable: boolean;
    /**
     *  (Opzionale) Booleano che abilita la visualizzazione della dimensione del font
     *  Valore di default false
     */
    nbpFontDimensionEnable: boolean;
    /**
     *  Emissione di un evento per lo zoom del testo
     */
    nbpZoom: EventEmitter<string>;
    _zoom: any;
    /**
     * Booleano per l'attivazione del contrasto, agisce sui colore nel css della libreria
     */
    nbpContrastOn: boolean;
    /**
     *  Emissione di un evento per l'attivazione del contrasto
     */
    nbpContrast: EventEmitter<boolean>;
    constructor(document: any);
    _zoomSelected(size: NbpFontSize): void;
    _languageChange(lang: string): void;
    _changeContrast(contrastOn: boolean): void;
    _isFooterEmpty(): boolean;
}
