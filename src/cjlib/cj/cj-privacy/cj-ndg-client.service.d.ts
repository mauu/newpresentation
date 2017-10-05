import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApplicationConfig } from '../../module.config';
import { ICjPrivacy } from '../cj-privacy-form/cj-privacy.interfaces';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
/**
 * Client Http per recuperare le informazioni di privacy
 */
export declare class CjNdgClientService {
    private config;
    private http;
    private headers;
    constructor(config: ApplicationConfig, http: HttpClient);
    getPrivacyByNdg(ndg: string): Observable<ICjPrivacy>;
}
