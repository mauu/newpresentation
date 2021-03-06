import { AfterContentInit } from '@angular/core';
import { NbpChannel } from '../nbp-commons/nbp-commons.enums';
import { NbpBurgerMenuComponent } from './../nbp-burger-menu/nbp-burger-menu.component';
export declare class NbpHeaderComponent implements AfterContentInit {
    /**
     * (opzionale) Titolo dell'applicativo visualizzato sopra il logo
     */
    nbpName: string;
    /**
     * Canale applicativo
     */
    nbpChannel: NbpChannel;
    _nbpDisableSticky: boolean;
    /**
     * Booleano che abilita/disabilita il posizionamento sticky
     * al top della pagina
     */
    nbpDisableSticky: boolean;
    innerMenu: NbpBurgerMenuComponent;
    /**
     * Booleano che mantiene lo stato del Menu
     */
    _nbpMenuOpen: boolean;
    /**
     * Booleano che permette di mostrare il Menu
     */
    _nbpHideMenu: boolean;
    /**
     * Variabile di appoggio per enum NbpChannel
     */
    _nbpChannel: any;
    _toogleMenu(): void;
    constructor();
    ngAfterContentInit(): void;
    private _checkMenuPresence();
}
