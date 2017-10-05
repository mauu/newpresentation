import { OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CjNdgService } from './cj-ndg.service';
import { ICjPrivacy } from '../cj-privacy-form/cj-privacy.interfaces';
export declare class CjPrivacyComponent implements OnInit {
    private ndgService;
    private route;
    _privacyDataStream: Observable<ICjPrivacy>;
    /**
    * stringa contente l'NDG utente
    */
    cjNdgParam: string;
    /**
    * stringa utilizzata per recuperare l'NDG utente dagli url params
    */
    cjNdgUrlParam: string;
    /**
     * Evento emesso al click dei pulsanti
     * @param {EventEmitter<any>}  cjOnDone
     */
    cjOnDone: EventEmitter<any>;
    constructor(ndgService: CjNdgService, route: ActivatedRoute);
    ngOnInit(): void;
    private _getCjNdg();
    private _obtainNdg();
    _onPrint(event: Event): void;
    _onContinue(event: Event): void;
    _onCancel(event: Event): void;
}
