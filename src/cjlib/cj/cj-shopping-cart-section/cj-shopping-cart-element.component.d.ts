import { OnInit, EventEmitter } from '@angular/core';
import { IShoppingCartSection, IShoppingCartItem, ILine, IShoppingCartEvent, IShoppingCartProduct } from './../cj-shopping-cart/cj-shopping-cart.interfaces';
export declare class CjShoppingCartElementComponent implements OnInit {
    cjData: IShoppingCartSection | IShoppingCartItem;
    private _cjReadOnly;
    /**
     * Booleano che abilita/disabilita la modifica del carrello.
     */
    cjReadOnly: boolean;
    private _cjIsPanel;
    cjIsPanel: boolean;
    private _cjItemStyle;
    cjItemStyle: boolean;
    cjOnOpenElement: EventEmitter<IShoppingCartEvent>;
    cjOnCloseElement: EventEmitter<IShoppingCartEvent>;
    cjAnimationPhaseDone: EventEmitter<any>;
    /**
     * Propaga l'evento di click icona destra (default 'cestino') proveniente dagli elementi cjShoppingCartProduct figli
     * @param EventEmitter<IShoppingCartEvent> cjOnClickProductRightIcon
     */
    cjOnClickProductRightIcon: EventEmitter<IShoppingCartEvent>;
    /**
     * Propaga l'evento di click all'interno del popover dell'icona a sinistra del product
     *  @param EventEmitter<IShoppingCartEvent> cjOnClickProductLeftIconLink
     */
    cjOnClickProductLeftIconLink: EventEmitter<IShoppingCartEvent>;
    /**
     * Propaga l'evento di click del link promozione (default 'promo>') del product
     *  @param EventEmitter<IShoppingCartEvent> cjOnClickProductPromo
     */
    cjOnClickProductPromo: EventEmitter<IShoppingCartEvent>;
    animationState: 'animation' | 'no-animation';
    _collapsed: boolean;
    collapsed: boolean;
    private _myEventInfo;
    _toggleCollapse(): void;
    _getCollapsedAnimationState(): "closed" | "opened";
    _onAnimationPhaseDone(): void;
    _isCellStroke(titleInfoLine: ILine): boolean;
    _onOpenItem(item: IShoppingCartItem): void;
    _onCloseItem(item: IShoppingCartItem): void;
    _onClickRightIcon(event: IShoppingCartEvent): void;
    _onClickLeftIconLink(event: IShoppingCartEvent): void;
    _onClickPromo(event: IShoppingCartEvent): void;
    constructor();
    ngOnInit(): void;
    updateAnimationState(): void;
    trackByItem(index: number, item: IShoppingCartItem): string;
    trackByProduct(index: number, product: IShoppingCartProduct): string;
}
