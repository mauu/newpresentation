import { DoCheck } from '@angular/core';
import { INbpProgressConfiguration } from './nbp-progress.interfaces';
export declare class NbpProgressComponent implements DoCheck {
    /**
     * Array contenente la struttura da visualizzare
     * per ogni elemento (step) indica
     * active - indica se lo step corrente è attivo
     * fillPercent - indica il valore di riempmento dello step
     * label - label inserita sotto lo step
     */
    nbpConfiguration: Array<INbpProgressConfiguration>;
    _nbpDisableSticky: boolean;
    /**
     * Booleano che abilita/disabilita il posizionamento sticky
     * al top della pagina
     */
    nbpDisableSticky: boolean;
    /**
     * Proprietà che indica lo step corrente
     * Oggetto strutturato che contiene stepId e pageId
     */
    _nbpWidth: string;
    _nbpOffset: string;
    constructor();
    ngDoCheck(): void;
    private initializeProgressBar;
}
