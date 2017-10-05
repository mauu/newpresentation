import { Observable } from 'rxjs/Observable';
import { ICjPrivacy } from './../cj-privacy-form/cj-privacy.interfaces';
import { CjNdgClientService } from './cj-ndg-client.service';
/**
 * Servizio utilizzato per recuperare le informazioni di privacy
 * Interfaccia esposta all'esterno
 */
export interface ICjNdgService {
    getPrivacy(ndg: string): ICjPrivacy;
    savePrivacy(privacy: ICjPrivacy): ICjPrivacy;
    printPrivacy(privacy: ICjPrivacy): any;
}
/**
 * Servizio utilizzato per recuperare le informazioni di privacy
 * Interfaccia utilizzata all'interno della libreria
 */
export interface ICjNdgLibService {
    getPrivacyByNdg(ndg: string): Observable<ICjPrivacy>;
    savePrivacy(privacy: ICjPrivacy): ICjPrivacy;
    printPrivacy(privacy: ICjPrivacy): any;
}
/**
 * Servizio utilizzato per recuperare le informazioni di contesto
 *
 */
export declare class CjNdgService implements ICjNdgLibService {
    private cjNdgClient;
    privacy: ICjPrivacy;
    constructor(cjNdgClient: CjNdgClientService);
    /**
     * Restituisce le informazioni di privacy a partire dall'ndg, chiamando il servizio rest dedicato.
     * @param  string ndg
     * @return ICjPrivacy
     */
    getPrivacyByNdg(ndg: string): Observable<ICjPrivacy>;
    /**
     * Salva i consensi privacy compilati tramite form.
     * @param  {ICjPrivacy} privacy
     * @return ICjPrivacy
     */
    savePrivacy(privacy: ICjPrivacy): ICjPrivacy;
    /**
     * Stampa i consensi privacy compilati tramite form.
     * @param  {ICjPrivacy} privacy
     * @return any (?)
     */
    printPrivacy(privacy: ICjPrivacy): any;
}
