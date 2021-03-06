import { OnInit, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NbpInputElementBase } from './../nbp-commons/nbp-input-element-base';
import { AsyncValidatorArray, ValidatorArray } from './../nbp-commons/nbp-validator';
/**
 * Provider Expression that allows nbp-checkbox to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
export declare const NBP_CHECKBOX_CONTROL_VALUE_ACCESSOR: any;
/**
 * <nbp-checkbox> provides the same functionality as a native <input type="checkbox">
 */
export declare class NbpCheckboxComponent extends NbpInputElementBase<string> implements OnInit {
    private validatori;
    private asyncValidatori;
    /**
     * Rappresenta il model associato alla checkbox.
     * Supporta ngModel.
     */
    /**
     * (Opzionale) testo/label della checkbox.
     */
    nbpLabel: string;
    /**
     * Nome che sara' applicato all'elemento di input se presente
     */
    name: string;
    /**
     * Identificativo univoco per la checkbox.
     * Se nessun id è fornito e' auto-generato.
     */
    id: string;
    private _nbpDisabled;
    /**
     * Se la checkbox è disabled.
     */
    disabled: boolean;
    /**
     * (Opzionale)
     * Booleano che consente di visualizzare i feedback relativi alla validazione.
     * Se non presente sarà automaticamente ereditato dal componente nbpForm.
     */
    nbpShowValidation: boolean;
    private _nbpDisplayInline;
    /**
     * Booleano che imposta, se presente, la proprietà CSS display dell’elemento
     * a inline-block
     */
    nbpDisplayInline: boolean;
    private _nbpYellowBorder;
    /**
     * (Opzionale) Booleano che abilita il bordo giallo della checkbox. Al primo
     * click/focus tornerà alla versione di default.
     * Valore default false
     */
    nbpYellowBorder: boolean;
    private _required;
    /** Whether the checkbox is required. */
    required: boolean;
    private _checked;
    /**
     * Se la checkbox e' checked.
     */
    checked: boolean;
    /**
     * Atributo value dell'elemento nativo input
     */
    value: string;
    /**
     * Evento emesso quando il valore `checked` della checkbox cambia.
     */
    change: EventEmitter<Event>;
    model: NgModel;
    constructor(validatori: ValidatorArray, asyncValidatori: AsyncValidatorArray);
    ngOnInit(): void;
    writeValue(value: any): void;
    private propagateChange;
    registerOnChange(fn: (value: any) => void): void;
    _onChangeEvent(event: Event): void;
    _onClickEvent(event: Event): void;
    private _emitChangeEvent(event);
}
