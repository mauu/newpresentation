import { OnInit, EventEmitter } from '@angular/core';
import { INbpBurgerMenu, INbpUser, INbpMenu, INbpItemMenu } from './nbp-burger-menu.interfaces';
export declare class NbpBurgerMenuComponent implements OnInit, INbpBurgerMenu {
    /**
     * elenco voci di menu'
     * TODO definire la struttura dati ... menù è su più livelli
     */
    nbpMenu: INbpMenu;
    /**
     * Oggetto contenente le informazioni relative all’operatore loggato (nome, cognome, immagine),
     * TODO Definire la struttura dati
     */
    nbpUser: INbpUser;
    /**
     * (Opzionale) booleano per disabilitare la possibilità di fare logout.
     * Valore default false
     */
    nbpDisableLogout: boolean;
    /**
     * Evento emesso sulla pressione del logout.
     * @param {EventEmitter<INbpUser>}  nbpOnLogout
     */
    nbpOnLogout: EventEmitter<INbpUser>;
    /**
     * Evento emesso sulla pressione di ogni voce di menu'.
     * @param {EventEmitter<INbpItemMenu>}  nbpOnItemClick
     */
    nbpOnItemClick: EventEmitter<INbpItemMenu>;
    /**
     * Evento emesso all'apertura del burgerMenu.
     * @param {EventEmitter<any>}  nbpOnOpen
     */
    nbpOnOpen: EventEmitter<any>;
    /**
     * Evento emesso alla chiusure del burgerMenu.
     * @param {EventEmitter<any>}  nbpOnOpen
     */
    nbpOnClose: EventEmitter<any>;
    _isOpen: boolean;
    _showSecondLevelMenu: boolean;
    _selectedItem: INbpItemMenu;
    constructor();
    ngOnInit(): void;
    _onClick(item: INbpItemMenu): void;
    _goBack(): void;
    /**
     * Permette apertura programmatica del BurgerMenu
     */
    open(): void;
    /**
     * Permette la chiusura programmatica del BurgerMenu
     */
    close(): void;
    /**
     * Permette di eseguire il toggle del BurgerMenu
     */
    toggle(): void;
}
