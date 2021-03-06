import { ElementRef, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AsyncValidatorArray, ValidatorArray } from './../nbp-commons/nbp-validator';
import { NbpInputElementBase } from './../nbp-commons/nbp-input-element-base';
import { INbpInput } from './../nbp-commons/nbp-commons.interface';
import { Observable } from 'rxjs/Observable';
import { NgbInputDatepicker, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
/**
 * Provider Expression that allows nbp-datepicker to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
export declare const NBP_DATEPICKER_CONTROL_VALUE_ACCESSOR: any;
export declare const NBP_INPUT_ELEMENT_BASE: any;
export declare class NbpDatepickerComponent extends NbpInputElementBase<any> implements INbpInput {
    private validatori;
    private asyncValidatori;
    private element;
    /**
    * Nome del campo di input associato al datepicker.
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
     * testo del placeholder
     * Valore di Default: "dd.mm.yyyy"
     */
    placeholder: string;
    /**
     * (Opzionale) Messaggio di errore da visualizzare in caso di campo non valido
     * Valore di Default: "Cmpo obbligatorio o invalido"
     */
    nbpErrorMessage: string;
    ngbMaxDate: NgbDateStruct;
    nbpMaxDate: Date;
    /**
     * La massima data accettata dal componente e visualizzata nel calendario
     * Valore di Default: 01.01.2050
     */
    maxDate: Date;
    ngbMinDate: NgbDateStruct;
    nbpMinDate: Date;
    /**
     * La minima data accettata dal componente e visualizzata nel calendario
     * Valore di Default: 01.01.1970
     */
    minDate: Date;
    private _nbpDisabled;
    /**
     * Flag che abilita/disabilita le funzionalità associate al datepicker
     */
    disabled: boolean;
    private _nbpRequired;
    /**
     * Flag che imposta come obbligatorio o meno il campo di input (disabilitato) associato al datepicker
     */
    required: boolean;
    nbpOnNavigate: EventEmitter<{
        current: any;
        next: any;
    }>;
    invalid: Observable<boolean>;
    ngbDatepicker: NgbInputDatepicker;
    model: NgModel;
    _ngbModel: any;
    constructor(validatori: ValidatorArray, asyncValidatori: AsyncValidatorArray, element: ElementRef);
    toggleOpening(): void;
    _ngbModelChanged(event: NgbDateStruct): void;
    private parseDateFromDateStruct(event);
    private parseDateStructFromDate(value);
    writeValue(value: Date): void;
    _onNavigate(navigateEvent: {
        current: NgbDateStruct;
        next: NgbDateStruct;
    }): void;
}
