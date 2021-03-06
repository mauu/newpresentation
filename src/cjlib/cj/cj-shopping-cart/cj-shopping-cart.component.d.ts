import { EventEmitter, OnInit, OnChanges, QueryList, SimpleChanges, ElementRef, OnDestroy } from '@angular/core';
import 'rxjs/add/observable/fromEvent';
import { IShoppingCartData, IShoppingCartProduct, IShoppingCartSection, IShoppingCartEvent } from './cj-shopping-cart.interfaces';
import { CjShoppingCartElementComponent } from './../cj-shopping-cart-section/cj-shopping-cart-element.component';
import { INbpButton, INbpButtonLib } from '../../nbp/nbp-commons/nbp-commons.interface';
export declare class CjShoppingCartComponent implements OnInit, OnChanges, OnDestroy {
    private currentElement;
    private onResizeEvent;
    private onResizeEventUnsubscribe;
    animationState: 'animation' | 'no-animation';
    isMaxHeightExceded: boolean;
    childShoppingCartElements: QueryList<CjShoppingCartElementComponent>;
    /**
     * (Opzionale) Titolo della finestra del carrello
     * Valore di default "DETTAGLIO PREZZI"
     */
    cjHeaderTitle: string;
    /**
     * (Opzionale) Icona visualizzata nella barra del titolo del carrello
     * Valore di default icomoon-Acquisto_carrello1
     * NOTA: l'icona presente nel ppt di spefica non c'è
     */
    cjHeaderIcon: string;
    /**
     * dati per popolare il componente
     */
    cjData: IShoppingCartData;
    /**
     * Array che descrive i pulsanti
     * da visualizzare nel componente
     */
    cjButtons: Array<INbpButton>;
    /**
     * Booleano che abilita/disabilita la modifica del carrello.
     */
    private _cjReadOnly;
    /**
     * Permette di impostare la visualizzazione in sola lettura del prodotto, nascondendo i pulsanti di eliminazione e dettaglio
     */
    cjReadOnly: boolean;
    /**
     * evento emesso quando sono modificati i dati di input del componente
     * @param EventEmitter<IShoppingCartProduct> cjOnDataChange dati aggiornati
     */
    cjDataChange: EventEmitter<IShoppingCartProduct>;
    /**
     * evento emesso alla pressione del link presente nel tooltip visualizzato sulla 'lente'
     * @param EventEmitter<IShoppingCartEvent> cjOnGotoCardProduct
     */
    cjOnClickProductLeftIconLink: EventEmitter<IShoppingCartEvent>;
    /**
     * Propaga l'evento di click icona destra (default 'cestino') proveniente dagli elementi cjShoppingCartProduct figli
     * @param EventEmitter<IShoppingCartEvent> cjOnClickProductRightIcon
     */
    cjOnClickProductRightIcon: EventEmitter<IShoppingCartEvent>;
    /**
     * Propaga l'evento di click Promozione (default 'promo >') proveniente dagli elementi cjShoppingCartProduct figli
     * @param EventEmitter<IShoppingCartEvent> cjOnClickProductLink
     */
    cjOnClickProduct: EventEmitter<IShoppingCartEvent>;
    /**
     * evento emesso all'apertura di un element
     * @param EventEmitter<IShoppingCartEvent>  cjOnOpenElement [description]
     */
    cjOnOpenElement: EventEmitter<IShoppingCartEvent>;
    /**
     * Evento lanciato alla pressione di ogni pulsante.
     * Viene passato come parametro il pulsante cliccato.
     */
    cjOnClickFooterButton: EventEmitter<INbpButton>;
    private _myEventInfo;
    sections: Array<CjShoppingCartElementComponent>;
    _footerButtons: Array<INbpButtonLib>;
    constructor(currentElement: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private _getScrollingElementInfo();
    private _getContentElementInfo();
    private _getContentScrollingInfo();
    _appearDisappearArrows(): void;
    _appearDisappearArrowsWaitForAnimation(): void;
    private _getScrollingTresholdValue();
    private _setScrollingWrapperBottomValue(bottomValue);
    _onScrollContent(direction: string): void;
    private _scrollTop(bottomDecrementedNextValue);
    private _scrollBottom(bottomIncrementedValue);
    private setCollapseStatusToSections(event);
    private _populateFooterButtons();
    private _populateStyles();
    private _evaluateButtonsAndLayout();
    _onOpenElement(event: IShoppingCartEvent): void;
    _onElementAnimationPhaseDone(): void;
    _onClickProductRightIcon(event: IShoppingCartEvent): void;
    _onClick(button: INbpButton): void;
    _cjOnClickProductLeftIconLink(event: IShoppingCartEvent): void;
    _cjOnClickProduct(event: IShoppingCartEvent): void;
    trackBySection(index: number, section: IShoppingCartSection): string;
}
