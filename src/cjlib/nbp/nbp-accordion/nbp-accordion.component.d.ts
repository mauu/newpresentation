import { EventEmitter, OnInit } from '@angular/core';
import { NbpAccordionEvent, INbpAccordion } from './nbp-accordion.interfaces';
import { NbpStyle } from './../nbp-commons/nbp-commons.enums';
export declare class NbpAccordionComponent implements INbpAccordion, OnInit {
    id: string;
    /**
     * Label visualizzata come titolo dell’accordion
     */
    nbpTitle: string;
    /**
     * (Opzionale) Booleano che pilota la visualizzazione iniziale dell’accordion collassato o espanso.
     *Default accordion collassato.
     */
    nbpCollapsed: boolean;
    /**
     * (Opzionale) definisce lo stile del componente
     * “DEFAULT” background grigio
     * “PRIMARY” backgroun verde (valore usato come default)
     * @Type NbpStyle
     */
    nbpStyle: NbpStyle;
    /**
     * (Opzionale) Nome della classe icona da visualizzare
     */
    nbpIcon: string;
    /**
     * Evento emesso sul toggle del componente.
     * @param {EventEmitter<NbpAccordionEvent>}  nbpOnToggle
     */
    nbpOnToggle: EventEmitter<NbpAccordionEvent>;
    _style: any;
    /**
     * metodo utilizzabile per l’apertura programmatica
     */
    open(): void;
    /**
     * metodo utilizzabile per la chiusura programmatica
     */
    close(): void;
    /**
     * metodo utilizzabile per verificare se il componente è collassato
     */
    isCollapsed(): boolean;
    constructor();
    ngOnInit(): void;
    _toggleCollapse(): void;
    private _onToggle();
    private _configureAccordion();
    private _configureAccordionStyles();
}
