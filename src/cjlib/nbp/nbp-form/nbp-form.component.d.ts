import { OnInit, EventEmitter } from '@angular/core';
export declare class NbpFormComponent implements OnInit {
    /**
     * Nome univoco che identifica la form
     */
    nbpFormName: string;
    /**
     * Proprietà che determina la visualizzazione delle informazioni di validazione
     */
    nbpShowValidation: boolean;
    /**
     * Proprietà che forza la disabilitazione di tutti i controlli della form
     */
    disabled: boolean;
    /**
     * evento che notifica il submit della form
     */
    nbpFormSubmit: EventEmitter<any>;
    /**
     * metodo per riportare la form allo stato iniziale
  
     */
    resetForm(): void;
    constructor();
    ngOnInit(): void;
}
