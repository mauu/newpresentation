import { NbpPipe } from './../nbp-commons/nbp-commons.enums';
export declare class NbpTableColumnComponent {
    /**
     * Identificativo univoco per la colonna. Se non viene passato un valore, l'id viene autogenerato.
     */
    nbpId: string;
    /**
      * Proprietà stringa contenente il titolo della colonna visualizzato nell header della tabella.
      */
    nbpTitle: string;
    /**
      * Path, in formato stringa (dot notation), rappresentante la proprietà degli elementi da visualizzare nelle celle della colonna.
      */
    nbpField: string;
    /**
      * Proprietà booleana rappresentante l'abilitazione alla funzionalità di ordinamento per la colonna.
      * Default: false;
      */
    nbpSortable: boolean;
    /**
      * Proprietà booleana rappresentante la visualizzazione della colonna nella tabella.
      * Default: true;
      */
    nbpVisible: boolean;
    /**
     * (Opzionale) Attributo di tipo NbpPipe(Enum) rappresentante i filtri messi a disposizione dalla
     * libreria per i campi di input, se presente, l’attributo abilita l’utilizzo del filtro indicato
     * "IMPORTO" | "DECIMAL" | "DATE" | "LOWERCASE" | "PERCENT" | "UPPERCASE"
     */
    nbpFilter: NbpPipe;
    /**
    * (Opzionale) argomenti da utilizzare per il filtro
    *
    */
    nbpFilterArg: any;
    constructor();
}
