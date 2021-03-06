import { EventEmitter, OnDestroy, AfterContentInit } from '@angular/core';
import { CjWizardHelper } from './cj-wizard-helper.service';
import { INbpProgressConfiguration } from './../../nbp/nbp-progress/nbp-progress.interfaces';
import { INbpPagingConfiguration } from './../../nbp/nbp-paging/nbp-paging.interfaces';
import { ICjWizardState, ICjWizardStep, ICjWizardLifecycleEvent, ICjWizardNavigationEvent, ICjWizardPageConfiguration, ICjWizardDataContainer } from './cj-wizard.interfaces';
import { ICjWizardContextSource } from './../cj-wizard-context-source/cj-wizard-context-source.interfaces';
import { IIconStructure } from './../cj-commons/cj-commons.interface';
import { CjBodyComponent } from './../cj-body/cj-body.component';
export declare class CjWizardComponent<T> implements AfterContentInit, OnDestroy, ICjWizardLifecycleEvent<T>, ICjWizardNavigationEvent<T> {
    private helper;
    private cjBody;
    /**
     * Identificativo univoco per il cjWizard.
     * Se nessun id e' fornito e' auto-generato.
     */
    id: string;
    /**
     * nome della cjWizard
     */
    name: string;
    /**
    * (Opzionale) Stato iniziale del modello di avanzamento del wizard
    */
    cjCurrentState: ICjWizardState;
    cjWizardDataContainer: ICjWizardDataContainer<T>;
    /**
     * (Opzionale) definizione dell'eventuale icona visualizzabile nell'header
     * vicino alla progress bar.
     * Valore di default icona con carrello e hidden
     */
    cjHeaderIcon: IIconStructure;
    private _cjShowPaging;
    /**
     * (Opzionale) Proprieta' che consente di non visualizzare la seziona relativa ai sotto-step/pagine degli step.
     * Valore di default false.
    */
    cjShowPaging: boolean;
    /**
     * Servizio che permette di gestire il customContex, deve estendere la classe astratta ICjCustomContextService
     */
    cjWizardContextSource: ICjWizardContextSource<T>;
    /**
     * Evento che notifica quando si inizia un nuovo wizard da zero
     */
    cjOnWizardStart: EventEmitter<T>;
    /**
     * Evento che notifica quando si ripristina un wizard con stato
     */
    cjOnWizardRestore: EventEmitter<T>;
    /**
    * Evento che notifica l’abbandono del wizard
    */
    cjOnWizardCancel: EventEmitter<T>;
    /**
    * Evento che notifica il completamento dell’intero wizard
    * Es pressione del tasto continua (tasto finale del wiard)
    */
    cjOnWizardComplete: EventEmitter<T>;
    /**
     * Evento che notifica l’aggiornamento della struttura dati che il wizard sta componendo
     */
    cjOnDataChange: EventEmitter<T>;
    /**
     * Evento che notifica l’aggiornamento dello step corrente
     */
    cjOnWizardPageChange: EventEmitter<any>;
    /**
    * Evento che notifica l’aggiornamento del modello di avanzamento del wizard
    */
    cjOnWizardStateChange: EventEmitter<any>;
    /**
     * Evento che notifica il toggle della visualizzazione della sidebar del wizard
     * parametro eventEmitter:
     *   TRUE -> wizardSideBar visualizzata,
     *   FALSE -> wizardSideBar non visualizzata
     *
     */
    cjOnToggleSideBarView: EventEmitter<boolean>;
    /**
     * Oggetto contenente la configurazione iniziale del wizard
     * - dati identificativi
     * - steps
     * - pages di ogni step
     *
     **/
    private cjConfiguration;
    private _currentStateIndexes;
    private _wizardContextStream;
    private _wizardContextStreamSubscribe;
    private _showSideBar;
    _cjShowSideBar: boolean;
    _isWizardInsideBody: boolean;
    _currentPageConfig: ICjWizardPageConfiguration;
    _buttonsStyles: any;
    _showLoading: boolean;
    _progressStructure: Array<INbpProgressConfiguration>;
    _pagingStructure: INbpPagingConfiguration;
    wizardReady: boolean;
    _hideBorder: boolean;
    /**
     * A flatten array containing all pages of all steps
     */
    private _pages;
    /**
     * funzione privata che calcola la percentuale di riempimento dello step nel componente
     * nbpProgress
     * @param number currentStepIndex indice dello step corrente
     * @param ICjWizardStep    currentStep      struttura dati dello step corrente
     */
    private _getFillPercentByIndex(currentStepIndex, currentStep);
    /**
     * Popola la struttura dati necessaria al componente nbpPaging
     * nbpPaging è visualizzato come secondo elemento del cjWizard sotto al componente
     * nbpProgress
     */
    private _fillPagingStructure();
    /**
     * Aggiorna la struttura dati che contiene lo stato corrente del wizard
     * - step corrente
     * - pagina corrente
     */
    private _updateCurrentState();
    /**
     * Aggiorna la struttura dati che contiene lo stato precedente del wizard
     * - step corrente
     * - pagina corrente
     */
    private _updatePreviousState();
    private _updateCurrentPageConfig();
    /**
     * metodo privato utilizzato per:
     * - aggiornare lo stato del wizard (state & data)
     * - emettere gli eventi di lifecycle
     * @param {ICjWizardContext<T>} context
     */
    private _resotreWizardStateAndData(context);
    /**
     * Aggiorna il contesto utilizzando la funzione messa a disposizione da
     * ICjWizardContextSource
     */
    private _updateWizardContext();
    /**
     * Eseguita alla pressione del pulsante AVANTI del wizard
     * @param {Event} event AVANTI button click
     */
    _onAction(event: Event): void;
    /**
     * Disabilita il pulsante AVANTI quando non ci sono più pagine da visualizzare
     * successive a quella corrente
     */
    _isActionDisabled(): boolean;
    /**
     * Eseguita alla pressione del pulsante INDIETRO del wizard
     * Aggiorna la struttura degli indici del currentState, il currentState, la struttura dati per la
     * progress bar la struttura dati per il paging
     * @param {Event} event INDIETRO/PREV button click
     */
    _onPrev(event: Event): void;
    /**
     * Disabilita il pulsante INDIETRO quando non ci sono pagine da visualizzare
     * precedenti a quella corrente
     */
    _isPrevDisabled(): boolean;
    /**
     * Popola la struttura dati necessaria al componente nbpProgress
     * nbpProgress è visualizzato come primo elemento del cjWizard
     */
    private _fillProgressStructure();
    /**
     * Popola la struttura dati necessaria al componente nbpProgress
     * nbpProgress è visualizzato come primo elemento del cjWizard
     */
    private _createProgressStructure();
    /**
     * Aggiorna la struttura dati necessaria al componente nbpProgress quando
     * si naviga il wizard usando il metodo navigateToPage
     * @param {string} stepId id dello step
     * @param {string} pageId id della page
     */
    private _updateProgressStructure(stepId, pageId);
    private _goToDirection(direction);
    /**
     * Aggiorna la struttura dati necessaria al componente nbpProgress quando
     * si naviga il wizard usando i pulsanti ACTION (next o submit) e INDIETRO (prev)
     * @param {'next' | 'prev'} direction indica quale pulsante è stato premuto
     */
    private _updateProgressStructureOnDirection(direction);
    constructor(helper: CjWizardHelper, cjBody: CjBodyComponent);
    /**
     * metodo pubblico con cui gli step si registrano sul wizard
     * @param ICjWizardStep step step dello wizard
     */
    addStep(step: ICjWizardStep): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    private _handleLoadingSpinner(show);
    private _initWizardWithContextSource();
    private _initWizardWithoutContextSource();
    private _setDefaultState();
    private _emitCjOnWizardStart(cjData);
    private _emitCjOnWizardRestore(cjData);
    private _emitCjOnWizardStateChange(state);
    private _emitCjOnWizardPageChange();
    private _emitCjOnPageEnter();
    private _emitEventsForPageLeave();
    private _emitPageEvent(type);
    private obtainStateIndexesFromConfiguration();
    /**
     * Aggiorna le strutture dati utilizzate nella View per il layout del componente wizard
     */
    private initializeWizardViewModel();
    private _updateWizardStructures();
    _toggleSideBar(): void;
    /**
     * Funzione pubblica invocabile dall'esterno per andare sulla pagina successiva
     * Aggiorna la struttura degli indici del currentState, il currentState, la struttura dati per la
     * progress bar la struttura dati per il paging
     */
    navigateToNext(): void;
    /**
     * Funzione pubblica invocabile dall'esterno per andare sulla pagina precedente
     * Aggiorna la struttura degli indici del currentState, il currentState, la struttura dati per la
     * progress bar la struttura dati per il paging
     *
     */
    navigateToPrev(): void;
    navigateToPage(stepId: string, pageId: string): void;
    showHeaderIcon(): void;
    hideHeaderIcon(): void;
    showWizardSideBar(): void;
    hideWizardSideBar(): void;
    toggleWizardSideBar(): void;
    metodoForDebug(data: any): void;
}
