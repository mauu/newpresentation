var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { translateElementsTrigger } from './cj-shopping-cart.animations';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { CjShoppingCartElementComponent } from './../cj-shopping-cart-section/cj-shopping-cart-element.component';
import { coerceBooleanProperty } from './../../utility/lib-utility';
var CjShoppingCartComponent = (function () {
    function CjShoppingCartComponent(currentElement) {
        this.currentElement = currentElement;
        // model: IShoppingCartProduct;
        this.onResizeEvent = Observable.fromEvent(window, 'resize');
        this.animationState = 'no-animation';
        /**
         * (Opzionale) Titolo della finestra del carrello
         * Valore di default "DETTAGLIO PREZZI"
         */
        this.cjHeaderTitle = 'Dettaglio Prezzi';
        /**
         * (Opzionale) Icona visualizzata nella barra del titolo del carrello
         * Valore di default icomoon-Acquisto_carrello1
         * NOTA: l'icona presente nel ppt di spefica non c'è
         */
        this.cjHeaderIcon = 'icomoon-Acquisto_carrello1';
        /**
         * Array che descrive i pulsanti
         * da visualizzare nel componente
         */
        this.cjButtons = [];
        /**
         * evento emesso quando sono modificati i dati di input del componente
         * @param EventEmitter<IShoppingCartProduct> cjOnDataChange dati aggiornati
         */
        this.cjDataChange = new EventEmitter();
        /**
         * evento emesso alla pressione del link presente nel tooltip visualizzato sulla 'lente'
         * @param EventEmitter<IShoppingCartEvent> cjOnGotoCardProduct
         */
        this.cjOnClickProductLeftIconLink = new EventEmitter();
        /**
         * Propaga l'evento di click icona destra (default 'cestino') proveniente dagli elementi cjShoppingCartProduct figli
         * @param EventEmitter<IShoppingCartEvent> cjOnClickProductRightIcon
         */
        this.cjOnClickProductRightIcon = new EventEmitter();
        /**
         * Propaga l'evento di click Promozione (default 'promo >') proveniente dagli elementi cjShoppingCartProduct figli
         * @param EventEmitter<IShoppingCartEvent> cjOnClickProductLink
         */
        this.cjOnClickProduct = new EventEmitter();
        /**
         * evento emesso all'apertura di un element
         * @param EventEmitter<IShoppingCartEvent>  cjOnOpenElement [description]
         */
        this.cjOnOpenElement = new EventEmitter();
        /**
         * Evento lanciato alla pressione di ogni pulsante.
         * Viene passato come parametro il pulsante cliccato.
         */
        this.cjOnClickFooterButton = new EventEmitter();
    }
    Object.defineProperty(CjShoppingCartComponent.prototype, "cjReadOnly", {
        /**
         * Permette di impostare la visualizzazione in sola lettura del prodotto, nascondendo i pulsanti di eliminazione e dettaglio
         */
        get: function () {
            return this._cjReadOnly;
        },
        set: function (value) {
            this._cjReadOnly = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    CjShoppingCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._myEventInfo = {
            shoppingCartId: this.cjData.id,
            current: this
        };
        this._evaluateButtonsAndLayout();
        this._appearDisappearArrowsWaitForAnimation();
        this.onResizeEventUnsubscribe = this.onResizeEvent.forEach(function (evt) { return _this._appearDisappearArrows(); });
    };
    CjShoppingCartComponent.prototype.ngOnChanges = function (changes) {
        this._evaluateButtonsAndLayout();
        this._appearDisappearArrowsWaitForAnimation();
    };
    CjShoppingCartComponent.prototype.ngOnDestroy = function () {
        this.onResizeEventUnsubscribe();
    };
    CjShoppingCartComponent.prototype._getScrollingElementInfo = function () {
        var shoppingCartScrollingElement = this.currentElement
            .nativeElement
            .querySelectorAll('.scrolling-wrapper')[0];
        var scrollingComputedStyle = window.getComputedStyle(shoppingCartScrollingElement, null);
        var scrollingHeight = parseInt(scrollingComputedStyle.height.substring(0, scrollingComputedStyle.height.length - 2), null);
        var scrollingBottom = parseInt(scrollingComputedStyle.bottom.substring(0, scrollingComputedStyle.bottom.length - 2), null);
        return {
            element: shoppingCartScrollingElement,
            computedStyle: scrollingComputedStyle,
            height: scrollingHeight,
            bottom: scrollingBottom
        };
    };
    CjShoppingCartComponent.prototype._getContentElementInfo = function () {
        var shoppingCartContentElement = this.currentElement
            .nativeElement
            .querySelectorAll('.shopping-cart--content')[0];
        var contentComputedStyle = window.getComputedStyle(shoppingCartContentElement, null);
        var contentMaxHeight = parseInt(contentComputedStyle.maxHeight.substring(0, contentComputedStyle.maxHeight.length - 2), null);
        return {
            element: shoppingCartContentElement,
            computedStyle: contentComputedStyle,
            maxHeight: contentMaxHeight
        };
    };
    CjShoppingCartComponent.prototype._getContentScrollingInfo = function () {
        return {
            content: this._getContentElementInfo(),
            scrolling: this._getScrollingElementInfo()
        };
    };
    ;
    CjShoppingCartComponent.prototype._appearDisappearArrows = function () {
        var contentScrollingStructure = this._getContentScrollingInfo();
        console.log('height:' + contentScrollingStructure.scrolling.height);
        console.log('maxHeight:' + contentScrollingStructure.content.maxHeight);
        this.isMaxHeightExceded = contentScrollingStructure.scrolling.height > contentScrollingStructure.content.maxHeight;
        this._setScrollingWrapperBottomValue(0);
    };
    CjShoppingCartComponent.prototype._appearDisappearArrowsWaitForAnimation = function () {
        var _this = this;
        setTimeout(function () {
            _this._appearDisappearArrows();
        }, 350);
    };
    CjShoppingCartComponent.prototype._getScrollingTresholdValue = function () {
        var contentScrollingInfo = this._getContentScrollingInfo();
        return contentScrollingInfo.scrolling.height - contentScrollingInfo.content.maxHeight;
    };
    CjShoppingCartComponent.prototype._setScrollingWrapperBottomValue = function (bottomValue) {
        this._getScrollingElementInfo().element.style.bottom = bottomValue + 'px';
    };
    CjShoppingCartComponent.prototype._onScrollContent = function (direction) {
        var bottomCurrentValue = this._getScrollingElementInfo().bottom;
        var bottomGap = 50;
        if (direction === 'up') {
            var bottomDecrementedValue = bottomCurrentValue - bottomGap;
            this._scrollTop(bottomDecrementedValue);
        }
        else if (direction === 'down') {
            var bottomIncrementedValue = bottomCurrentValue + bottomGap;
            this._scrollBottom(bottomIncrementedValue);
        }
    };
    CjShoppingCartComponent.prototype._scrollTop = function (bottomDecrementedNextValue) {
        if (bottomDecrementedNextValue >= 0) {
            this._setScrollingWrapperBottomValue(bottomDecrementedNextValue);
        }
        else {
            this._setScrollingWrapperBottomValue(0);
        }
    };
    CjShoppingCartComponent.prototype._scrollBottom = function (bottomIncrementedValue) {
        var maxScrollingValue = this._getScrollingTresholdValue();
        if (bottomIncrementedValue <= maxScrollingValue) {
            this._setScrollingWrapperBottomValue(bottomIncrementedValue);
        }
        else {
            this._setScrollingWrapperBottomValue(maxScrollingValue);
        }
    };
    CjShoppingCartComponent.prototype.setCollapseStatusToSections = function (event) {
        if (this.cjData.sections.length > 1 && !!event.sectionId && !event.itemId) {
            this.childShoppingCartElements.forEach(function (element) {
                if (!element.cjItemStyle) {
                    element._collapsed = event.sectionId !== element.cjData.id;
                }
            });
        }
    };
    CjShoppingCartComponent.prototype._populateFooterButtons = function () {
        this._footerButtons = this.cjButtons.length > 2 ? this.cjButtons.slice(0, 2) : this.cjButtons.slice();
        // this._footerButtons = this.cjButtons;
        console.log('I pulsanti da disegnare sono ', this._footerButtons.length + ': ', JSON.stringify(this._footerButtons));
        console.log('I pulsanti originali sono ', this.cjButtons.length + ': ', JSON.stringify(this.cjButtons));
    };
    CjShoppingCartComponent.prototype._populateStyles = function () {
        switch (this._footerButtons.length) {
            case 1:
                this._footerButtons.map(function (button) {
                    button.layout = 'col-md-24 text-center';
                });
                break;
            case 2:
                this._footerButtons.map(function (button, index) {
                    button.layout = index === 0 ? 'col-md-12 text-center' : 'col-md-12 text-center';
                });
                break;
        }
    };
    CjShoppingCartComponent.prototype._evaluateButtonsAndLayout = function () {
        this._populateFooterButtons();
        this._populateStyles();
        //this._appearDisappearArrows();
    };
    CjShoppingCartComponent.prototype._onOpenElement = function (event) {
        event['shoppingCartId'] = this.cjData.id;
        this.setCollapseStatusToSections(event);
        console.log('CjShoppingCartComponent - Emitting: cjOnOpenElement');
        console.dir(event);
        this.cjOnOpenElement.emit(event);
    };
    CjShoppingCartComponent.prototype._onElementAnimationPhaseDone = function () {
        this._appearDisappearArrows();
    };
    CjShoppingCartComponent.prototype._onClickProductRightIcon = function (event) {
        var currentEventInfo = Object.assign({}, event);
        currentEventInfo['shoppingCartId'] = this._myEventInfo.shoppingCartId;
        console.log('CjShoppingCartComponent - Emit: cjOnClickProductRightIcon');
        console.dir(currentEventInfo);
        this.cjOnClickProductRightIcon.emit(currentEventInfo);
    };
    CjShoppingCartComponent.prototype._onClick = function (button) {
        console.log('CjShoppingCartComponent - Emit: cjOnClickFooterButton');
        console.dir(button);
        this.cjOnClickFooterButton.emit(button);
    };
    CjShoppingCartComponent.prototype._cjOnClickProductLeftIconLink = function (event) {
        var currentEventInfo = Object.assign({}, event);
        currentEventInfo['shoppingCartId'] = this._myEventInfo.shoppingCartId;
        console.log('CjShoppingCartComponent - Emit: cjOnClickProductLeftIconLink');
        console.dir(currentEventInfo);
        this.cjOnClickProductLeftIconLink.emit(currentEventInfo);
    };
    CjShoppingCartComponent.prototype._cjOnClickProduct = function (event) {
        var currentEventInfo = Object.assign({}, event);
        currentEventInfo['shoppingCartId'] = this._myEventInfo.shoppingCartId;
        console.log('CjShoppingCartComponent - Emit: cjOnClickProductLink');
        console.dir(currentEventInfo);
        this.cjOnClickProduct.emit(currentEventInfo);
    };
    CjShoppingCartComponent.prototype.trackBySection = function (index, section) { return section.id; };
    return CjShoppingCartComponent;
}());
__decorate([
    ViewChildren(CjShoppingCartElementComponent),
    __metadata("design:type", QueryList)
], CjShoppingCartComponent.prototype, "childShoppingCartElements", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CjShoppingCartComponent.prototype, "cjHeaderTitle", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CjShoppingCartComponent.prototype, "cjHeaderIcon", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CjShoppingCartComponent.prototype, "cjData", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], CjShoppingCartComponent.prototype, "cjButtons", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Boolean])
], CjShoppingCartComponent.prototype, "cjReadOnly", null);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjShoppingCartComponent.prototype, "cjDataChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjShoppingCartComponent.prototype, "cjOnClickProductLeftIconLink", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjShoppingCartComponent.prototype, "cjOnClickProductRightIcon", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjShoppingCartComponent.prototype, "cjOnClickProduct", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjShoppingCartComponent.prototype, "cjOnOpenElement", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjShoppingCartComponent.prototype, "cjOnClickFooterButton", void 0);
CjShoppingCartComponent = __decorate([
    Component({
        selector: 'cj-shopping-cart',template: "<div class=\"row shopping-cart--container\" style=\"position:relative\"><div class=\"col-md-24 shopping-cart--header text-center\"><span [ngClass]=\"cjHeaderIcon\"></span><span style=\"padding-left:5px\">{{cjHeaderTitle}}</span></div><div class=\"col-md-24 shopping-cart--content\"><div *ngIf=\"isMaxHeightExceded\" class=\"col-md-24 col-sm-24 col-xs-24 shopping-cart--arrow-up\" (click)=\"_onScrollContent('up')\"><div class=\"arrow-up\"></div></div><div class=\"scrolling-wrapper row\"><div *ngFor=\"let section of cjData.sections; trackBy: trackBySection; let last = last\" [ngClass]=\"{'shopping-cart-section-separator':!last}\" @translateElementTrigger class=\"shopping-cart-element-wrapper\"><cj-shopping-cart-element [cjReadOnly]=\"cjReadOnly\" [cjData]=\"section\" (cjOnOpenElement)=\"_onOpenElement($event)\" (cjAnimationPhaseDone)=\"_onElementAnimationPhaseDone()\" (cjOnClickProductRightIcon)=\"_onClickProductRightIcon($event)\" (cjOnClickProductLeftIconLink)=\"_cjOnClickProductLeftIconLink($event)\" (cjOnClickProductPromo)=\"_cjOnClickProduct($event)\" [cjIsPanel]=\"cjData.sections.length === 1\"></cj-shopping-cart-element></div></div><div *ngIf=\"isMaxHeightExceded\" class=\"col-md-24 col-sm-24 col-xs-24 shopping-cart--arrow-down\" (click)=\"_onScrollContent('down')\"><div class=\"arrow-down\"></div></div></div><div *ngIf=\"!cjReadOnly\" class=\"col-md-24 shopping-cart--footer\"><div class=\"row\"><ng-container *ngFor=\"let button of _footerButtons\"><div *ngIf=\"button.visible\" [class]=\"button.layout\"><nbp-button [ngClass]=\"{'single-button': _footerButtons?.length==1}\" [nbpLabel]=\"button.label\" (nbpClick)=\"_onClick(button)\" [disabled]=\"button.disabled\" [nbpStyle]=\"button.style\"></nbp-button></div></ng-container></div></div></div>",
        styles: [".shopping-cart--container{width:350px;outline:#258900 solid 1px;box-shadow:0 0 30px rgba(0,0,0,.2)}.shopping-cart--header{background-color:#005958;text-transform:uppercase;color:#fff;font-weight:700;padding-top:2px;padding-bottom:2px;letter-spacing:.8px}.shopping-cart--header span:nth-child(1){font-size:18px}.shopping-cart--content{min-height:0!important}.scrolling-wrapper{position:relative}.shopping-cart-element-wrapper.shopping-cart-section-separator ::ng-deep .shopping-cart-item-header-border{border-bottom:1px solid #f8f8f8}.shopping-cart--footer{padding:10px;background-color:#fff;border-top:1px solid #258900}.shopping-cart--footer ::ng-deep nbp-button:not(.single-button) .button{width:100%!important}.arrow-container-base{cursor:pointer;position:absolute!important;z-index:999999;height:20px;text-align:center}.arrow-up-icon{position:absolute;border-bottom:15px solid #258900;border-left:15px solid transparent;border-right:15px solid transparent;border-top:0 solid transparent}.shopping-cart--arrow-up{cursor:pointer;position:absolute!important;z-index:999999;height:20px;text-align:center;background-image:linear-gradient(to bottom,#fff,rgba(255,255,255,.5));top:0;left:0}.shopping-cart--arrow-up div.arrow-up{border-bottom:15px solid #258900;border-left:15px solid transparent;border-right:15px solid transparent;border-top:0 solid transparent;height:0;width:0;top:50%;left:50%;transform:translate(-50%,-50%);position:absolute}.arrow-down-icon{position:absolute;border-top:15px solid #258900;border-left:15px solid transparent;border-right:15px solid transparent;border-bottom:0 solid transparent}.shopping-cart--arrow-down{position:absolute!important;z-index:999999;height:20px;text-align:center;background-image:linear-gradient(to top,#fff,rgba(255,255,255,.5));bottom:0;left:0;cursor:pointer}.shopping-cart--arrow-down div.arrow-down{position:absolute;border-top:15px solid #258900;border-left:15px solid transparent;border-right:15px solid transparent;border-bottom:0 solid transparent;height:0;width:0;top:50%;left:50%;transform:translate(-50%,-50%)} /*# sourceMappingURL=cj-shopping-cart.component.css.map */ "],
        animations: [translateElementsTrigger]
    }),
    __metadata("design:paramtypes", [ElementRef])
], CjShoppingCartComponent);
export { CjShoppingCartComponent };
