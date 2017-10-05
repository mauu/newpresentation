import { OnInit, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { NbpLoadingService } from './nbp-loading.service';
import { Observable } from 'rxjs/Observable';
import { INbpLoadingStatus } from './../nbp-commons/nbp-commons.interface';
export declare class NbpLoadingComponent implements OnInit, OnChanges {
    private loadingService;
    /**
      * Nome del text field
      */
    name: string;
    /**
     * Identificativo univoco per il text field.
     * Se nessun id è fornito e' auto-generato.
     */
    id: string;
    private _showAnimation;
    /**
     * Flag che definisce la visibilità dell’animazione di caricamento
     */
    nbpShowAnimation: boolean;
    private _animationModeAuto;
    /**
     * Flag che definisce la modalità automatica di visualizzazione dell'animazione
     * quando presente il componente ignora il parametro nbpShowAnimation e l'invocazione
     * dei metodi pubblici, ma si restistra al servizio NbpLoadingService
     */
    nbpAnimationModeAuto: boolean;
    /**
     * Evento lanciato allo stop del loading.
     */
    nbpOnStopAnimation: EventEmitter<any>;
    /**
     * Evento lanciato allo start del laoding.
     */
    nbpOnStartAnimation: EventEmitter<any>;
    /**
     * 	metodo per far visualizzare il loading
     */
    startAnimation(): void;
    /**
     * metodo per spegnere il loading
     */
    stopAnimation(): void;
    _showAutoAnimation: Observable<INbpLoadingStatus>;
    constructor(loadingService: NbpLoadingService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
