import { OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CjContextService } from './../cj-context/cj-context.service';
import { ICjContext } from './../cj-context/cj-context.interfaces';
import { NbpChannel } from './../../nbp/nbp-commons/nbp-commons.enums';
export declare class CjBodyComponent implements OnInit {
    private contextService;
    private route;
    /**
     * oggetto utilizzato per recuperare il contesto applicativo
     */
    cjToken: string;
    /**
    * stringa utilizzata per recuperare il token dagli url params
    */
    cjTokenNameParam: string;
    /**
     * (Opzionale) titolo applicativo da visualizzare nella sezione di header
     */
    cjApplicationName: string;
    /**
     * (Opzionale) SectionTitle da visualizzare nella sezione di header
     */
    cjSectionTitle: string;
    /**
     * (Opzionale) Canale applicazione da passare all'header
     */
    cjChannel: NbpChannel;
    _cjShowPrevPageButton: boolean;
    /**
     * Booleano per abilitare il pulsante “Pagina precedente”
     */
    cjShowPrevPageButton: boolean;
    /**
     * Evento lanciato sul click del pulsante "Pagina Precedente"
     */
    cjOnPrevPageButtonClicked: EventEmitter<string>;
    private _cjDisabled;
    /**
     * Booleano che abilita/disabilita il contenuto ng-content del componente.
     * Header e footer sono sempre abilitati.
     * Attributo "disabled" standard di HTML element
     */
    disabled: boolean;
    /**
     * Evento emesso quando il contesto applicativo è disponibile.
     * @param {EventEmitter<ICjContext>}  cjOnContextReady
     */
    cjOnContextReady: EventEmitter<ICjContext>;
    private sub;
    _isNavigationHeaderSlim: boolean;
    _nbpChannel: any;
    _contextInfo: ICjContext;
    constructor(contextService: CjContextService, route: ActivatedRoute);
    ngOnInit(): void;
    setNavigationHeaderSlim(isNavigationHeaderSlim: boolean): void;
    private _getCjContextFromToken();
    private _obtainContext();
    _onPrevPageButtonClicked(): void;
}
