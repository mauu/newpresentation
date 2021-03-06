import { EventEmitter, OnInit, ElementRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AsyncValidatorArray, ValidatorArray } from './../nbp-commons/nbp-validator';
import { NbpPipe } from './../nbp-commons/nbp-commons.enums';
import { NbpFormatterService } from './../../utility/nbp-formatter.service';
import { INbpDataSource } from './../nbp-datasource/nbp-datasource.interfaces';
import { NbpInputElementBase } from './../nbp-commons/nbp-input-element-base';
/**
 * Provider Expression that allows nbp-combo to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
export declare const NBP_COMBO_CONTROL_VALUE_ACCESSOR: any;
export declare const NBP_INPUT_ELEMENT_BASE: any;
/**
 * Componente per la implementazione della combobox, supporta tutti gli attributi standard html per il tag input.
 * Personalizzabile per la gestione di currency grazie all'applicaizone di opportuni pipes
 * definiti dalla libreria.
 */
export declare class NbpComboComponent<T> extends NbpInputElementBase<T> implements OnInit {
    private validatori;
    private asyncValidatori;
    private formatterService;
    private element;
    /**
     * nome della combobox
     */
    name: string;
    /**
     * Boleano che mantiene lo stato del focus
     */
    _focusActive: boolean;
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
     * (Opzionale) Messaggio di errore da visualizzare in caso di campo non valido
     * Valore di Default: "Cmpo obbligatorio o invalido"
     */
    nbpErrorMessage: string;
    private _nbpDisabled;
    /**
     * Flag che abilita/disabilita le funzionalità associate alla combobox
     */
    disabled: boolean;
    private _nbpRequired;
    /**
     * Flag che imposta come obbligatorio o meno il campo di input (disabilitato) associato alla combobox
     */
    required: boolean;
    /**
     * Il testo del placeholder.
     */
    placeholder: string;
    private _nbpShowEmptyValue;
    /**
     * Flag che imposta come obbligatorio o meno il campo di input (disabilitato) associato alla combobox
     */
    nbpShowEmptyValue: boolean;
    /**
     * Datasource degli oggetti di tipo T che andranno a popolare la combobox.
     */
    nbpDataSource: INbpDataSource<T>;
    /**
     * Rappresenta il nome del campo presente all’interno di ogni oggetto o l’oggetto stesso
     * che andrà a popolare la combobox e che verrà visualizzato all’interno della lista
     */
    nbpViewField: string;
    /**
   * Rappresenta il nome del campo presente all’interno di ogni oggetto o l’oggetto stesso
   * da usare come chiave nella selezione del valore della combobox */
    nbpKeyField: string;
    private _nbpHighlightedDefault;
    /**
     * (opzionale ) Booleano che gestisce l’attributo  bordo giallo della combobox.
     * Al primo click/focus tornerà alla versione di default.
     * valore default false
     */
    nbpHighlightedDefault: boolean;
    /**
     * (Opzionale) Attributo di tipo NbpPipe(Enum) rappresentante i filtri messi a disposizione dalla
     * libreria per i campi di input, se presente, l’attributo abilita l’utilizzo del filtro indicato
     * "IMPORTO" | "DECIMAL" | "DATE" | "LOWERCASE" | "PERCENT" | "UPPERCASE"
     */
    nbpFilter: NbpPipe;
    /**
    * (Opzionale) argomenti da utilizzare per il filtro
    *
    */
    nbpFilterArg: any;
    private _nbpBindingToKeyField;
    /**
     * Definisce quando il binding del ngModel deve essere fatto sull'attributo nbpKeyField
     *
     */
    nbpBindingToKeyField: boolean;
    /**
     * Evento emesso quando è selezionato un elemento della combobox.
     */
    select: EventEmitter<T>;
    /**
     * Evento emesso quando la dropdown viene chiuda
     */
    dropdownClosed: EventEmitter<{}>;
    /**
     * Evento emesso quando la dropdown viene aperta
     */
    dropdownOpened: EventEmitter<{}>;
    /**
      * (Opzionale) Funzione custom di validazione del campo
      */
    nbpValidation: EventEmitter<any>;
    model: NgModel;
    _nbpShadowData: Array<T>;
    _dropdownVisible: boolean;
    private _arrowClicked;
    private _activeItemIndex;
    private _nbpViewValue;
    private datasourceSubscription;
    private _nbpPipe;
    _getDropdownState(): string;
    ngOnInit(): void;
    private _prepareDataSource();
    constructor(validatori: ValidatorArray, asyncValidatori: AsyncValidatorArray, formatterService: NbpFormatterService, element: ElementRef);
    _getViewValue(item: any): any;
    private _getValue(item);
    private _getDropDownLabel(item);
    _onSelectEvent(item: any): void;
    private _getViewModelElement(item);
    private _getSelectedElement(item);
    _isOptionSelected(item: any): boolean;
    private _onInputFocus(event);
    _onInputClick(event: Event): void;
    private _closeDropDown(target);
    onFocusout(target: HTMLElement): void;
    onClick(target: HTMLElement): void;
}
