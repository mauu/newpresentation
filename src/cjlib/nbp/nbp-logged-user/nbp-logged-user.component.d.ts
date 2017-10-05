import { OnInit, EventEmitter } from '@angular/core';
import { INbpUser } from './nbp-logged-user.interfaces';
export declare class NbpLoggedUserComponent implements OnInit {
    /**
     * Operatore Loggato
     */
    nbpUser: INbpUser;
    private _nbpDisableLogout;
    /**
     * Flag che abilita/disabilita la possibilità di eseguire il logout
     */
    disableLogout: boolean;
    nbpDisableLogout: boolean;
    nbpLogout: EventEmitter<any>;
    imageLoaded: boolean;
    imageError: boolean;
    largeUserImage: boolean;
    constructor();
    ngOnInit(): void;
    _onLogoutClick(): void;
}
