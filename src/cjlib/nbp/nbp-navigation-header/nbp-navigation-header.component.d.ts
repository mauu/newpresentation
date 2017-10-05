import { OnInit, EventEmitter } from '@angular/core';
export declare class NbpNavigationHeaderComponent implements OnInit {
    /**
     * Titolo della pagina
     */
    nbpTitle: string;
    /**
     * Titolo della sezione
     */
    nbpSectionTitle: string;
    /**
     * Booleano per abilitare il tasto “Pagina precedente”
     */
    nbpShowPrevPage: boolean;
    _nbpDisableSticky: boolean;
    /**
     * Booleano che abilita/disabilita il posizionamento sticky
     * al top della pagina
     */
    nbpDisableSticky: boolean;
    /**
     * Evento emesso sul click dell'elemento nbpShowPrevPage
     */
    nbpPrevPage: EventEmitter<string>;
    constructor();
    ngOnInit(): void;
    onClick(): void;
}
