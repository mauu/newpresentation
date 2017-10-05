import { OnInit, EventEmitter } from '@angular/core';
import { ICjRadioStructure, ICjCustomerInfo } from '../cj-radio-selection/cj-radio-selection.interfaces';
export declare class CjSignSelectionComponent implements OnInit {
    /**
    * stringa contente l'NDG utente
    */
    cjCustomer: ICjCustomerInfo;
    cjPlaceRadios: Array<ICjRadioStructure>;
    cjSignRadios: Array<ICjRadioStructure>;
    /**
     * Evento emesso al click sui radio button di scelta modalita' firma
     * @param {EventEmitter<ICjRadioStructure>}  cjOnSignSelection
     */
    cjOnSignSelection: EventEmitter<ICjRadioStructure>;
    _placeDataModel: string;
    _signDataModel: string;
    constructor();
    ngOnInit(): void;
    _onPlaceSelection(event: any): void;
    _onSignSelection(event: ICjRadioStructure): void;
}
