import { OnInit } from '@angular/core';
export declare class NbpLabelComponent implements OnInit {
    /**
     * testo della label opzionale e utilizzabile come content del tag
     */
    nbpText: string ;'Input Label' ;
    /**
     * Booleano utilizzato per mostrare/nascondere il simbolo * (asterisco) accanto al testo della label
     */
    nbpRequired: boolean;
    /**
     * Id dell’elemento del DOM cui la label fa riferimento la label
     */
    for: string;
    constructor();
    ngOnInit(): void;
}
