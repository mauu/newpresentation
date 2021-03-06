import { TemplateRef, ElementRef } from '@angular/core';
import { NbpSize } from './../nbp-commons/nbp-commons.enums';
export declare class NbpTooltipComponent {
    private element;
    _tooltipSize: any;
    _isVisible: boolean;
    /**
     * Strategia di apertura tooltip, 'click' o 'hover':
     * click -> comportamento popover con apertura e chiusura su click (più pulsante x all'interno del tooltip)
     * hover -> comportamento tooltip classico apertura su hover , chiusura sulla perdita dell'hover
     * Valore di default: hover
    */
    nbpVisibilityStrategy: 'click' | 'hover';
    /**
     * (Opzionale) Enum che definisce il la posizione del tooltip rispetto all’oggetto al quale è ancorato:
     * “Top” | “Right” | “Bottom” | “Left” | “Top-Left” | “Top-Right” | “Bottom-Left” | “Bottom-Right”
     * Default: “Top”
     */
    nbpPosition: 'Top' | 'Right' | 'Bottom' | 'Left' | 'Top-Left' | 'Top-Right' | 'Bottom-Left' | 'Bottom-Right';
    /**
     * (Opzionale) Enum che definisce il tipo di icona da visualizzare nel tooltip:
     * “Warning” | “Help” | ”Info”
     * Default: nessuna icona
     * Funzionante solo se non presente nbpTemplate
     */
    /**
     * Proprietà che definisce la grandezza del tooltip, tramite l'enum NbpSize
     * valore di default: NbpSize.SM
     */
    nbpSize: NbpSize;
    /**
     * Stringa che definisce il testo del tooltip nel caso
     * definito anche nbpTemplate, nbpText non verrà utilizzato
     */
    nbpText: string;
    /**
     * Template (<ng-template #template></ng-template> => TemplateRef<any>)
     * che definisce il contenuto del tooltip nel caso definito anche
     * nbpText quest'ultimo non verrà utilizzato
     */
    nbpTemplate: TemplateRef<any>;
    /**
     * Contesto dei dati da utilizzare nel template.
     * Vedi documentazione per spiegazione approfondita.
     */
    nbpTemplateData: any;
    _nbpHidden: boolean;
    /**
     * Booleano che abilita/disabilita la visualizzazione del tooltip.
    * Attributo "hidden" standard di HTML5 element
     */
    hidden: boolean;
    onClick(target: HTMLElement): void;
    _open(): void;
    _close(): void;
    private _closePopover(target);
    _toggleVisibility(): void;
    _isVisibilityStrategyHover(): boolean;
    constructor(element: ElementRef);
}
