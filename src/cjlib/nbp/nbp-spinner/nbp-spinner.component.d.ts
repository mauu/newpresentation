import { EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NbpInputElementBase } from './../nbp-commons/nbp-input-element-base';
import { AsyncValidatorArray, ValidatorArray } from './../nbp-commons/nbp-validator';
export declare const NBP_SPINNER_CONTROL_VALUE_ACCESSOR: any;
export declare const NBP_INPUT_ELEMENT_BASE: any;
export declare class NbpSpinnerComponent extends NbpInputElementBase<number> {
    private validatori;
    private asyncValidatori;
    /**
     * Identificativo univoco per il componente NbpSpinner. Se non viene passato un valore, l'id viene autogenerato.
     */
    id: string;
    /**
     * Nome applicato al componente.
     */
    name: string;
    /**
     * (Opzionale)
     * Valore minimo che può assumere il controllo. Valore di default: 0
     */
    min: number;
    /**
     * (Opzionale)
     * Valore massimo che può assumere il controllo. Valore di default: 99
     */
    max: number;
    private _nbpDisabled;
    /**
     * (Opzionale)
     * Flag che abilita/disabilita il componente.
     * Valore di default false
     */
    disabled: boolean;
    private _nbpRequired;
    /**
     * (Opzionale)
     * Flag che abilita/disabilita il required sul componente.
     * Valore di default false
     */
    required: boolean;
    /**
     * (Opzionale)
     * Booleano che consente di visualizzare i messaggi di feedback relativi alla validazione.
     * Valore di default false
     */
    nbpShowValidation: boolean;
    /**
     * (Opzionale) Messaggio di errore da visualizzare in caso di campo non valido
     * Valore di Default: "Campo obbligatorio o invalido"
     */
    nbpErrorMessage: string;
    /**
     * Evento sollevato quando il valore del componente cambia
     */
    nbpValueChange: EventEmitter<number>;
    /**
     * (Opzionale) Funzione custom di validazione del campo
     */
    nbpValidation: EventEmitter<any>;
    model: NgModel;
    constructor(validatori: ValidatorArray, asyncValidatori: AsyncValidatorArray);
    _onSubtractClick(event: Event): void;
    _onAddClick(event: Event): void;
    private _emitChangeEvent(event);
    ngOnInit(): void;
}
