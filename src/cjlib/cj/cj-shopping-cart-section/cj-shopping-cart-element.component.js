var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { coerceBooleanProperty } from './../../utility/lib-utility';
import { translateElementsTrigger, accordionGrowShrinkTrigger, highlightOnAddProduct } from './../cj-shopping-cart/cj-shopping-cart.animations';
var CjShoppingCartElementComponent = (function () {
    function CjShoppingCartElementComponent() {
        // Lanciare Warning se cjItemStyle non combacia con la classe IShoppingCartItem del model
        this._cjItemStyle = false;
        this.cjOnOpenElement = new EventEmitter();
        this.cjOnCloseElement = new EventEmitter();
        this.cjAnimationPhaseDone = new EventEmitter();
        /**
         * Propaga l'evento di click icona destra (default 'cestino') proveniente dagli elementi cjShoppingCartProduct figli
         * @param EventEmitter<IShoppingCartEvent> cjOnClickProductRightIcon
         */
        this.cjOnClickProductRightIcon = new EventEmitter();
        /**
         * Propaga l'evento di click all'interno del popover dell'icona a sinistra del product
         *  @param EventEmitter<IShoppingCartEvent> cjOnClickProductLeftIconLink
         */
        this.cjOnClickProductLeftIconLink = new EventEmitter();
        /**
         * Propaga l'evento di click del link promozione (default 'promo>') del product
         *  @param EventEmitter<IShoppingCartEvent> cjOnClickProductPromo
         */
        this.cjOnClickProductPromo = new EventEmitter();
        this.animationState = 'no-animation';
        this._collapsed = true;
    }
    Object.defineProperty(CjShoppingCartElementComponent.prototype, "cjReadOnly", {
        /**
         * Booleano che abilita/disabilita la modifica del carrello.
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
    Object.defineProperty(CjShoppingCartElementComponent.prototype, "cjIsPanel", {
        get: function () {
            return this._cjIsPanel;
        },
        set: function (value) {
            this._cjIsPanel = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CjShoppingCartElementComponent.prototype, "cjItemStyle", {
        get: function () {
            return this._cjItemStyle;
        },
        set: function (value) {
            this._cjItemStyle = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CjShoppingCartElementComponent.prototype, "collapsed", {
        get: function () { return this._collapsed; },
        set: function (value) {
            this._collapsed = value;
            if (this._collapsed) {
                console.log('CjShoppingCartElementComponent - Emitting: cjOnCloseElement');
                console.dir(this._myEventInfo);
                this.cjOnCloseElement.emit(this._myEventInfo);
            }
            else {
                console.log('CjShoppingCartElementComponent - Emitting: cjOnOpenElement');
                console.dir(this._myEventInfo);
                this.cjOnOpenElement.emit(this._myEventInfo);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    CjShoppingCartElementComponent.prototype._toggleCollapse = function () {
        this.collapsed = !this.collapsed;
    };
    CjShoppingCartElementComponent.prototype._getCollapsedAnimationState = function () {
        return this._collapsed ? 'closed' : 'opened';
    };
    CjShoppingCartElementComponent.prototype._onAnimationPhaseDone = function () {
        this.cjAnimationPhaseDone.emit();
    };
    CjShoppingCartElementComponent.prototype._isCellStroke = function (titleInfoLine) {
        return titleInfoLine ? titleInfoLine.style === 'stroke' : false;
    };
    CjShoppingCartElementComponent.prototype._onOpenItem = function (item) {
        var currentEventInfo = Object.assign({}, this._myEventInfo);
        currentEventInfo['itemId'] = item.id;
        console.log('Nested CjShoppingCartElementComponent (Item) - Emitting: cjOnOpenElement');
        console.dir(currentEventInfo);
        this.cjOnOpenElement.emit(currentEventInfo);
    };
    CjShoppingCartElementComponent.prototype._onCloseItem = function (item) {
        var currentEventInfo = Object.assign({}, this._myEventInfo);
        currentEventInfo['itemId'] = item.id;
        console.log('Nested CjShoppingCartElementComponent (Item) - Emitting: cjOnCloseElement');
        console.dir(currentEventInfo);
        this.cjOnCloseElement.emit(currentEventInfo);
    };
    CjShoppingCartElementComponent.prototype._onClickRightIcon = function (event) {
        var currentEventInfo = Object.assign({}, event);
        if (this._cjItemStyle) {
            currentEventInfo['itemId'] = this._myEventInfo.itemId;
        }
        else {
            currentEventInfo['sectionId'] = this._myEventInfo.sectionId;
        }
        console.log('CjShoppingCartElementComponent - Emit Event: cjOnClickProductRightIcon');
        console.dir(currentEventInfo);
        this.cjOnClickProductRightIcon.emit(currentEventInfo);
    };
    CjShoppingCartElementComponent.prototype._onClickLeftIconLink = function (event) {
        var currentEventInfo = Object.assign({}, event);
        if (this._cjItemStyle) {
            currentEventInfo['itemId'] = this._myEventInfo.itemId;
        }
        else {
            currentEventInfo['sectionId'] = this._myEventInfo.sectionId;
        }
        console.log('CjShoppingCartElementComponent - Emit Event: cjOnClickProductLeftIconLink');
        console.dir(currentEventInfo);
        this.cjOnClickProductLeftIconLink.emit(currentEventInfo);
    };
    CjShoppingCartElementComponent.prototype._onClickPromo = function (event) {
        var currentEventInfo = Object.assign({}, event);
        if (this._cjItemStyle) {
            currentEventInfo['itemId'] = this._myEventInfo.itemId;
        }
        else {
            currentEventInfo['sectionId'] = this._myEventInfo.sectionId;
        }
        console.log('CjShoppingCartElementComponent - Emit Event: cjOnClickProductPromo');
        console.dir(currentEventInfo);
        this.cjOnClickProductPromo.emit(currentEventInfo);
    };
    CjShoppingCartElementComponent.prototype.ngOnInit = function () {
        if (this._cjItemStyle) {
            this._myEventInfo = {
                itemId: this.cjData.id,
                current: this
            };
        }
        else {
            this._myEventInfo = {
                sectionId: this.cjData.id,
                current: this
            };
        }
        if (this.cjIsPanel) {
            this.cjOnOpenElement.emit(this._myEventInfo);
        }
    };
    CjShoppingCartElementComponent.prototype.updateAnimationState = function () {
        if (this.animationState === 'animation') {
            return;
        }
        this.animationState = 'animation';
    };
    CjShoppingCartElementComponent.prototype.trackByItem = function (index, item) { return item.id; };
    CjShoppingCartElementComponent.prototype.trackByProduct = function (index, product) { return product.id; };
    return CjShoppingCartElementComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], CjShoppingCartElementComponent.prototype, "cjData", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Boolean])
], CjShoppingCartElementComponent.prototype, "cjReadOnly", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Boolean])
], CjShoppingCartElementComponent.prototype, "cjIsPanel", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], CjShoppingCartElementComponent.prototype, "cjItemStyle", null);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjShoppingCartElementComponent.prototype, "cjOnOpenElement", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjShoppingCartElementComponent.prototype, "cjOnCloseElement", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjShoppingCartElementComponent.prototype, "cjAnimationPhaseDone", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjShoppingCartElementComponent.prototype, "cjOnClickProductRightIcon", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjShoppingCartElementComponent.prototype, "cjOnClickProductLeftIconLink", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjShoppingCartElementComponent.prototype, "cjOnClickProductPromo", void 0);
CjShoppingCartElementComponent = __decorate([
    Component({selector: 'cj-shopping-cart-element',
        template: "<ng-template #emptyRow><div class=\"row\"><div [ngClass]=\"{'cell-section': !cjItemStyle , 'cell-item': cjItemStyle}\" class=\"col-md-24 col-sm-24 col-xs-24 cell__empty\"></div></div></ng-template><div [ngClass]=\"{'shopping-cart-section': !cjItemStyle , 'shopping-cart-item': cjItemStyle}\"><div class=\"row\" [ngClass]=\"{'shopping-cart-section-header': !cjItemStyle , 'shopping-cart-item-header': cjItemStyle , 'shopping-cart-item-header-border': _collapsed }\"><div [ngClass]=\"{ 'col-md-24 col-sm-24 col-xs-24' : cjIsPanel , 'col-md-22 col-sm-22 col-xs-22' : !cjIsPanel }\"><div class=\"row\"><div name=\"sx-col\" [ngClass]=\"{'col-md-14 col-sm-14 col-xs-14':cjData.titleInfoRight , 'col-md-24 col-sm-24 col-xs-24': !cjData.titleInfoRight}\"><div class=\"row\" *ngIf=\"cjData.titleInfoLeft.firstLine && !!(cjData.titleInfoLeft.firstLine.text?.trim()); else emptyRow\"><div id=\"firstLine\" [ngClass]=\"{'cell-section': !cjItemStyle , 'cell-item': cjItemStyle , 'cell__stroke':  _isCellStroke(cjData.titleInfoLeft.firstLine)}\" class=\"col-md-24 col-sm-24 col-xs-24 cell__primary cell__uppercase\">{{cjData.titleInfoLeft.firstLine.text}}</div></div><div class=\"row\" *ngIf=\"cjData.titleInfoLeft.secondLine && !!(cjData.titleInfoLeft.secondLine.text?.trim()); else emptyRow\"><div id=\"secondLine\" [ngClass]=\"{'cell-section': !cjItemStyle , 'cell-item': cjItemStyle ,'cell__stroke':  _isCellStroke(cjData.titleInfoLeft.secondLine) , 'cell__primary': !cjItemStyle}\" class=\"col-md-24 col-sm-24 col-xs-24 cell__font-sm\">{{cjData.titleInfoLeft.secondLine.text}}</div></div><span *ngIf=\" !cjItemStyle\"><div *ngIf=\"cjData.titleInfoLeft.thirdLine && !!(cjData.titleInfoLeft.thirdLine.text?.trim()); else emptyRow\" class=\"row\"><div id=\"thirdLine\" [ngClass]=\"{'cell__stroke':  _isCellStroke(cjData.titleInfoLeft.thirdLine), 'cell-section': !cjItemStyle , 'cell-item': cjItemStyle}\" class=\"col-md-24 col-sm-24 col-xs-24 cell__primary cell__bold cell__font-sm\">{{cjData.titleInfoLeft.thirdLine.text}}</div></div></span></div><div name=\"dx-col\" *ngIf=\"cjData.titleInfoRight\" class=\"col-md-10 col-sm-10 col-xs-10\"><div class=\"row\" *ngIf=\"cjData.titleInfoRight.firstLine && !!(cjData.titleInfoRight.firstLine.text?.trim()); else emptyRow\"><div id=\"firstLine\" [ngClass]=\"{'cell-section': !cjItemStyle , 'cell-item': cjItemStyle , 'cell__stroke': _isCellStroke(cjData.titleInfoRight.firstLine)}\" class=\"col-md-24 col-sm-24 col-xs-24 cell__text-right cell__primary\">{{cjData.titleInfoRight.firstLine.text}}</div></div><div class=\"row\" *ngIf=\"cjData.titleInfoRight.secondLine && !!(cjData.titleInfoRight.secondLine.text?.trim()); else emptyRow\"><div id=\"secondLine\" [ngClass]=\"{'cell-section': !cjItemStyle , 'cell-item': cjItemStyle ,'cell__stroke': _isCellStroke(cjData.titleInfoRight.secondLine)}\" class=\"col-md-24 col-sm-24 col-xs-24 cell__text-right cell__font-sm\">{{cjData.titleInfoRight.secondLine.text}}</div></div><span *ngIf=\" !cjItemStyle\"><div *ngIf=\"cjData.titleInfoRight.thirdLine && !!(cjData.titleInfoRight.thirdLine.text?.trim()); else emptyRow\" class=\"row\"><div id=\"thirdLine\" [ngClass]=\"{'cell__stroke': _isCellStroke(cjData.titleInfoRight.thirdLine), 'cell-section': !cjItemStyle , 'cell-item': cjItemStyle}\" class=\"col-md-24 col-sm-24 col-xs-24 cell-section cell__text-right cell__primary cell__font-sm\">{{cjData.titleInfoRight.thirdLine.text}}</div></div></span></div></div></div><div *ngIf=\"!cjIsPanel\" (click)=\"_toggleCollapse()\" class=\"col-md-2 col-sm-2 col-xs-2 cell-arrow\" [ngClass]=\"{'inverted section-cell-arrow':  !cjItemStyle}\"><span [ngClass]=\"{'icon-arrow-up': _collapsed , 'icon-arrow-down':!_collapsed}\"></span></div></div><div [@accordionGrowShrinkTrigger]=\"(!cjIsPanel && _collapsed) ? 'closed' : 'opened'\" (@accordionGrowShrinkTrigger.done)=\"_onAnimationPhaseDone()\" [ngClass]=\"{'cj-shopping-cart-section-body': !cjItemStyle , 'cj-shopping-cart-item-body': cjItemStyle }\"><div *ngFor=\"let item of cjData.items; trackBy: trackByItem\" [@translateElementTrigger]=\"animationState\" (@translateElementTrigger.done)=\"updateAnimationState()\"><cj-shopping-cart-element [cjData]=\"item\" [cjReadOnly]=\"cjReadOnly\" (cjOnOpenElement)=\"_onOpenItem(item)\" (cjOnCloseElement)=\"_onCloseItem(item)\" (cjAnimationPhaseDone)=\"_onAnimationPhaseDone()\" (cjOnClickProductRightIcon)=\"_onClickRightIcon($event)\" (cjOnClickProductLeftIconLink)=\"_onClickLeftIconLink($event)\" (cjOnClickProductPromo)=\"_onClickPromo($event)\" cjItemStyle></cj-shopping-cart-element></div><div class=\"cj-shopping-cart-products-container\" [ngClass]=\"{'inside-section': !cjItemStyle}\" *ngFor=\"let product of cjData.products; trackBy: trackByProduct\" [@highlightOnAddProduct]=\"animationState\" [@translateElementTrigger]=\"animationState\" (@translateElementTrigger.done)=\"updateAnimationState()\"><cj-shopping-cart-product [cjReadOnly]=\"cjReadOnly\" [cjData]=\"product\" (cjOnClickRightIcon)=\"_onClickRightIcon($event)\" (cjOnClickLeftIconLink)=\"_onClickLeftIconLink($event)\" (cjOnClickPromo)=\"_onClickPromo($event)\" [cjIsParentItem]=\"cjItemStyle\"></cj-shopping-cart-product></div></div></div>",
        styles: ["#secondLine{line-height:1em;padding-bottom:6px}.cell-section.cell__primary{font-weight:700}.cell-section.cell__uppercase{text-transform:uppercase}.cell-section.cell__font-sm{font-size:14px}.cell-section.cell__stroke{text-decoration:line-through}.cell-section.cell__text-right{text-align:right}.cell-section.cell__empty{height:20px}.cell-item{font-size:14px}.cell-item.cell__primary{font-weight:700}.cell-item.cell__uppercase{text-transform:uppercase}.cell-item.cell__font-sm{font-size:12px}.cell-item.cell__stroke{text-decoration:line-through}.cell-item.cell__text-right{text-align:right}.cell-item.cell__empty{height:20px}.shopping-cart-header_base{padding-top:10px;padding-bottom:12px;padding-left:5px;padding-right:5px}.shopping-cart-section{color:#f8f8f8}.shopping-cart-section>.shopping-cart-section-header{padding-top:10px;padding-bottom:12px;padding-left:5px;padding-right:5px;padding-left:10px;padding-right:10px;background-color:#337a79}.shopping-cart-section>.cj-shopping-cart-section-body{background-color:#e3e3e3;padding-left:5px;padding-right:5px}.shopping-cart-item{color:#323232}.shopping-cart-item>.shopping-cart-item-header{padding-top:10px;padding-bottom:12px;padding-left:5px;padding-right:5px;background-color:#e3e3e3}.shopping-cart-item>.shopping-cart-item-header-border{border-bottom:1px solid #6f6f6f}.shopping-cart-item>.shopping-cart-item-header:last-child{border:0 none #fff!important}.shopping-cart-item>.cj-shopping-cart-item-body{background-color:#e3e3e3;margin-left:-5px;margin-right:-5px;padding-left:5px;padding-right:5px;padding-bottom:5px;border-bottom:1px solid #6f6f6f}.cj-shopping-cart-products-container{background-color:#fff}.cj-shopping-cart-products-container cj-shopping-cart-product ::ng-deep .shopping-cart--product{box-sizing:border-box;border-bottom:1px solid #6f6f6f}.cj-shopping-cart-products-container:last-child cj-shopping-cart-product ::ng-deep .shopping-cart--product{box-sizing:border-box;border:0 none transparent!important}.cj-shopping-cart-products-container:first-child cj-shopping-cart-product ::ng-deep .shopping-cart--product{border-top:1px solid #ccc!important}.cj-shopping-cart-products-container.inside-section{margin-left:-5px!important;margin-right:-5px!important}.cell-arrow{position:absolute;top:30%;right:5px;color:#258900;cursor:pointer}.cell-arrow.inverted{color:#f8f8f8}.cell-arrow.section-cell-arrow{right:10px} /*# sourceMappingURL=cj-shopping-cart-element.component.css.map */ "],
        animations: [translateElementsTrigger, accordionGrowShrinkTrigger, highlightOnAddProduct]
    }),
    __metadata("design:paramtypes", [])
], CjShoppingCartElementComponent);
export { CjShoppingCartElementComponent };
