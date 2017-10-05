import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ICjContext } from './cj-context.interfaces';
import { ApplicationConfig } from '../../module.config';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
/**
 * Client Http per recuperare le informazioni di cjContext
 */
export declare class CjContextClientService {
    private config;
    private http;
    private headers;
    constructor(config: ApplicationConfig, http: HttpClient);
    /**
     * Esegue la chiamata http per recupeare il contesto passando come url param il token
     */
    getCjContext(token: string): Observable<ICjContext>;
    /**
     * Esegue la chiamata http per creare un nuovo contesto securizzato a partire da un NDG
     */
    creaCjContext(ndg: string, application: string, canale: string): Observable<ICjContext>;
}
