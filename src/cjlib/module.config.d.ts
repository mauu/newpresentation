import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs/Observable';
export interface ApplicationConfig {
    getSessionManagerBaseUrl(): Observable<string>;
    getNpuServicesBaseUrl(): Observable<string>;
}
export declare let APP_CONFIG: InjectionToken<ApplicationConfig>;
