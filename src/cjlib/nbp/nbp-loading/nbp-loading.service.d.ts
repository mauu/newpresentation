import { Observable } from 'rxjs/Observable';
import { INbpLoadingStatus } from './../nbp-commons/nbp-commons.interface';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
/**
 * Servizio utilizzato per mantenere e recuperare lo stato del loadingSpinner
 */
export interface INbpLoadingService {
    setLoadingSpinnerStatus(id: string, showLoadingSpinner: boolean): void;
    getLoadingSpinnerStatus(id: string): Observable<INbpLoadingStatus>;
}
export declare class NbpLoadingService implements INbpLoadingService {
    /**
     * ReplaySubject -> manda a ogni subscriber anche se si registra dopo tutta la storia dello stream dall'inizio
     *
     * BehaviorSubject -> manda a ogni subscriver solo l'item più recente presente nello stream
     */
    private _loadingSpinnerStatus;
    private statusArray;
    private handleMultipleActivationStatus(key);
    /**
     * Permette di settare la visibilità del componente loadingSpinner
     */
    setLoadingSpinnerStatus(id: string, showLoadingSpinner: boolean): void;
    /**
     * Recupera la visibilità del componente loadingSpinner
     */
    getLoadingSpinnerStatus(id: string): Observable<INbpLoadingStatus>;
}
