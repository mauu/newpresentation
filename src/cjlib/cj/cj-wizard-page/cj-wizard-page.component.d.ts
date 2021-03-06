import { EventEmitter } from '@angular/core';
import { CjWizardStepComponent } from './../cj-wizard-step/cj-wizard-step.component';
import { ICjWizardPage } from './../cj-wizard/cj-wizard.interfaces';
export declare class CjWizardPageComponent<T> {
    private wizardStep;
    /**
     * Identificativo univoco per il cjWizardPage.
     * Se nessun id è fornito e' auto-generato.
     */
    id: string;
    /**
     * nome della cjWizardPage
     */
    name: string;
    /**
     * Titolo della pagina visualizzato nella barra di paging
     * (componente nbpPaging)
     */
    cjLabel: string;
    /**
     * Abilita/disabilita l'invocazione dell'aggiornamento
     * del context all'uscita dalla pagina.
     */
    cjContextUpdate: boolean;
    /**
     * Tipoligia del pulsante Action, posizionato in basso a destra del wizard:
     * 'next':(Default) definisce un pulsante standard per spostarsi avanti nelle pagine
     * 'submit': definisce il pulsante di completamento del wizard
     */
    cjActionButtonType: 'next' | 'submit';
    /**
     * Label da visualizzare all'interno del pulsante Action
     */
    cjActionButtonLabel: string;
    private _cjDisableActionButton;
    /**
     * Permette di disabilitare il pulsante di Action
     */
    cjDisableActionButton: boolean;
    private _cjDisablePrevButton;
    /**
     * Permette di disabilitare il pulsante Prev
     */
    cjDisablePrevButton: boolean;
    private _cjShowActionButton;
    /**
     * Permette di nascondere il pulsante di Action
     */
    cjShowActionButton: boolean;
    private _cjShowPrevButton;
    /**
     * Permette di nascondere il pulsante Prev
     */
    cjShowPrevButton: boolean;
    /**
     * Evento sollevato nel momento in cui il componente cjWizard entra nella pagina
     */
    cjOnPageEnter: EventEmitter<ICjWizardPage>;
    /**
     * Evento sollevato nel momento il cjWizard esce dalla pagina
     */
    cjOnPageLeave: EventEmitter<ICjWizardPage>;
    private _pageInfo;
    constructor(wizardStep: CjWizardStepComponent<T>);
    _iAmActive(): boolean;
    ngOnInit(): void;
    /**
     * Consente di eseguire il toggle sulla visibilità del pulsante di tipo Action
     */
    toggleActionButtonVisibility(): void;
    /**
     * Consente di impostare la visibilità del pulsante Action
     * - true --> pulsante visibile
     * - false --> pulsante nascosto
     * @param {boolean} value valore della visibilità del pulsante
     */
    setActionButtonVisibility(value: boolean): void;
    /**
     * Consente di eseguire il toggle sulla visibilità del pulsante di tipo PREV
     */
    togglePrevButtonVisibility(): void;
    /**
     * Consente di impostare la visibilità del pulsante PREV
     * - true --> pulsante visibile
     * - false --> pulsante nascosto
     * @param {boolean} value valore della visibilità del pulsante
     */
    setPrevButtonVisibility(value: boolean): void;
    _emitOnPageEnterEvent(): void;
}
