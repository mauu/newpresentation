import { CjContextClientService } from './cj-context-client.service';
import { ICjContext } from './cj-context.interfaces';
import { Observable } from 'rxjs/Observable';
/**
 * Servizio utilizzato per recuperare le informazioni di contesto
 * Interfaccia esposta all'esterno
 */
export interface ICjContextService {
    getCurrentCjContext(): Observable<ICjContext>;
    getCurrentToken(): string;
}
/**
 * Servizio utilizzato per recuperare le informazioni di contesto
 * Interfaccia utilizzata all'interno della libreria
 */
export interface ICjContextLibService extends ICjContextService {
    getCjContextByToken(token: string): Observable<ICjContext>;
    setCurrentCjContext(context: ICjContext): void;
    createNewCjContext(ndg: string, application: string, canale: string): Observable<ICjContext>;
}
/**
 * Servizio utilizzato per recuperare le informazioni di contesto
 *
 */
export declare class CjContextService implements ICjContextLibService {
    private cjContextClient;
    private _contextInfoSource;
    private _contextInfo;
    private _token;
    constructor(cjContextClient: CjContextClientService);
    /**
     * Crea un nuovo contesto applicativo
     * @return il token del contesto
     */
    createNewCjContext(ndg: string, application: string, canale: string): Observable<ICjContext>;
    /**
     * Permette di salvare il contesto applicativo all'interno del servizio
     * @param ICjContext cjContext contesto applicativo
     */
    setCurrentCjContext(cjContext: ICjContext): void;
    /**
     * Recupera il contesto applicativo salvato nel servizio
     * @return ICjContext contesto applicativo salvato nel servizio
     */
    getCurrentCjContext(): Observable<ICjContext>;
    getCurrentToken(): string;
    private _setCurrentToken(token);
    /**
     * Restituisce le informazioni di contesto chiamando il servizio rest dedicato.
     * Se il contensto è già stato recuperato restituisce tale contesto
     * @param  string token
     * @return Observable<ICjContext> contesto applicativo da servizio rest
     */
    getCjContextByToken(token: string): Observable<ICjContext>;
}
