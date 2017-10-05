import { EventEmitter } from '@angular/core';
import { INbpInput } from './../nbp-commons/nbp-commons.interface';
import { NgModel } from '@angular/forms';
import { NbpInputElementBase } from './../nbp-commons/nbp-input-element-base';
import { AsyncValidatorArray, ValidatorArray } from './../nbp-commons/nbp-validator';
import { Observable } from 'rxjs/Observable';
/**
 * Provider Expression that allows nbp-input to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
export declare const NBP_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare const NBP_INPUT_ELEMENT_BASE: any;
/**
 * Componente per la implementazione dei textfield, supporta tutti gli attributi standard html per il tag input.
 * personalizzabile per la gestione di currency grazie all'applicaizone di opportuni pipes
 * definiti dalla libreria.
 */
export declare class NbpInputTextComponent extends NbpInputElementBase<string> implements INbpInput {
    private validatori;
    private asyncValidatori;
    /**
     * Nome del text field
     */
    name: string;
    /**
     * Identificativo univoco per il text field.
     * Se nessun id è fornito e' auto-generato.
     */
    id: string;
    /**
     * (Opzionale)
     * Booleano che consente di visualizzare i messaggi di feedback relativi alla validazione.
     * Valore di default false
     */
    nbpShowValidation: boolean;
    /**
     * (Opzionale)
     * Attributo HTML standard: definisce il pattern di validazione del campo di input
     */
    pattern: RegExp;
    private _nbpDisabled;
    /**
     * Flag che abilita/disabilita il campo di input.
     */
    disabled: boolean;
    private _nbpRequired;
    /**
     * Flag che abilita/disabilita il required sul campo di input.
     */
    required: boolean;
    /**
     * testo del placeholder
     */
    placeholder: string;
    private _nbpRoundBorder;
    /**
     * Se presente, l’attributo abilita arrotondamento dei bordi del campo di input
     */
    nbpRoundBorder: boolean;
    private _nbpHighlightedDefault;
    /**
     * (opzionale ) Booleano che gestisce  l’attributo  bordo giallo del campo di input.
     * Al primo click/focus tornerà alla versione di default.
     * valore default false
     */
    nbpHighlightedDefault: boolean;
    /**
     * Pipe opzionale,  se presente, l’attributo abilita l’utilizzo del filtro indicato
     * “importo” | “filtro_1” | “filtro_2”
     *
     * enum dei filtri messi a disposizione dalla libreria per i campi di inpu
     */
    nbpFormat: string;
    /**
     * (opzionale) Stringa contenente il nome della classe del file di icone
     */
    nbpIcon: string;
    /**
     * (Opzionale) Messaggio di errore da visualizzare in caso di campo non valido
     * Valore di Default: "Cmpo obbligatorio o invalido"
     */
    nbpErrorMessage: string;
    /**
     * (Opzionale) Funzione custom di validazione del campo
     */
    nbpValidation: EventEmitter<any>;
    invalid: Observable<boolean>;
    model: NgModel;
    _onInputEvent(event: any): void;
    _onFocusEvent(): void;
    constructor(validatori: ValidatorArray, asyncValidatori: AsyncValidatorArray);
}
