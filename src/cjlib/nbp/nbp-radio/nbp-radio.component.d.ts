import { OnInit, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NbpInputElementBase } from './../nbp-commons/nbp-input-element-base';
import { AsyncValidatorArray, ValidatorArray } from './../nbp-commons/nbp-validator';
/**
 * Provider Expression that allows nbp-radio to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
export declare const NBP_RADIO_CONTROL_VALUE_ACCESSOR: any;
/**
 * <nbp-radio> provides the same functionality as a native <input type="radio">
 */
export declare class NbpRadioComponent extends NbpInputElementBase<boolean> implements OnInit {
    private validatori;
    private asyncValidatori;
    /**
     * Identificativo univoco per il radio button. Se non viene passato un valore, l'id viene autogenerato.
     */
    id: string;
    /**
      * Nome applicato all'elemento radio. Se non presente nessun nome viene associato.
      */
    name: string;
    private _nbpValue;
    /**
     * Il valore assegnato al model quando viene selezionato il radio button
     */
    value: any;
    private _nbpDisabled;
    /**
     *Booleano che abilita/disabilita le funzionalità del radio button
     */
    disabled: boolean;
    private _nbpRequired;
    /**
    * (Opzionale) Booleano che imposta come obbligatorio o meno del campo associato al radio button.
    * Valore di dafault false.
    */
    required: boolean;
    private _nbpChecked;
    /**
    * (Opzionale) Booleano che imposta come 'checked' o meno il radio button.
    * Valore di dafault false.
    */
    checked: boolean;
    /**
     *  (Opzionale) testo dell'elemento di input radio
     */
    nbpLabel: string;
    /**
     *(Opzionale) Booleano che consente di visualizzare i feedback relativi alla validazione .
     *Valore default false.
     *Se usato nel componente container nbpForm il valore della proprietà sarà automaticamente ereditato da nbpForm.
     */
    nbpShowValidation: boolean;
    private _nbpDisplayInline;
    /**
     *(opzionale)Booleano che imposta, se presente, la proprietà CSS display dell’elemento a inline-block
     *valore default false
     */
    nbpDisplayInline: boolean;
    private _nbpYellowBorder;
    /**
    * (Opzionale) Booleano, se presente, l’attributo abilita il bordo giallo della radio-button.
    * Al primo click/focus tornerà alla versione di default.
    * Valore di default false.
    * Se usato nel componente container nbpForm il valore della proprietà sarà automaticamente
    * ereditato da nbpForm.
    */
    nbpYellowBorder: boolean;
    /**
     * (Opzionale) Nome della classe icona da visualizzare nel radio
     */
    nbpIcon: string;
    /**
     * (Opzionale) Enum per indicare il tipo di spunta da usare per i radio
     */
    nbpSelectionSign: 'dot' | 'spunta';
    /**
     * Il messaggio di errore da visualizzare in fase di validazione
     */
    nbpErrorMessage: string;
    /**
     * Event emitted when the radio's `checked` value changes.
     */
    change: EventEmitter<any>;
    model: NgModel;
    constructor(validatori: ValidatorArray, asyncValidatori: AsyncValidatorArray);
    ngOnInit(): void;
    private _onFocusEvent(event);
    writeValue(value: any): void;
    private propagateChange;
    registerOnChange(fn: (value: any) => void): void;
    _onChangeEvent(event: Event): void;
    _onClickEvent(event: Event): void;
    private _emitChangeEvent(event);
}
