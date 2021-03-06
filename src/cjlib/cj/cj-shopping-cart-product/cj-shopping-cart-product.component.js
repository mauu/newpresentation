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
import { NbpSize } from './../../nbp/nbp-commons/nbp-commons.enums';
import { coerceBooleanProperty } from './../../utility/lib-utility';
var CjShoppingCartProductComponent = (function () {
    function CjShoppingCartProductComponent() {
        var _this = this;
        this._popoverSize = NbpSize;
        /**
         * evento emesso alla pressione del link presente nel tooltip visualizzato sulla 'lente'
         * @param EventEmitter<IShoppingCartProduct>  cjOnGotoCardProduct [description]
         */
        this.cjOnGotoCardProduct = new EventEmitter();
        /**
         * evento emesso alla pressione dell'icona destra (icona di default 'cestino')
         * @param EventEmitter<IShoppingCartEvent> cjOnClickRightIcon
         */
        this.cjOnClickRightIcon = new EventEmitter();
        /**
         * evento emesso al click del link presente nel popover che viene aperto alla pressione del pulsante sinistro
         * (icona di default 'lente ingrandimento zoom').
         * @param EventEmitter<IShoppingCartEvent> cjOnClickLeftIconLink
         */
        this.cjOnClickLeftIconLink = new EventEmitter();
        /**
         * evento emesso alla pressione della link 'promo >' per la visualizzazione delle info dettagliate
         * @param EventEmitter<IShoppingCartEvent> cjOnClickPromo
         */
        this.cjOnClickPromo = new EventEmitter();
        this._iconLeft = this.fillIconStructure('ico-comuni-zoom');
        this._iconRight = this.fillIconStructure('ico-azioni-elimina-cestino');
        this._productStyle = 'standard';
        this._sendEventOnClickPopoverLink = function () {
            console.log('CjShoppingCartProductComponent - Emit evet: cjOnClickLeftIconLink');
            console.dir(_this._myEventInfo);
            _this.cjOnClickLeftIconLink.emit(_this._myEventInfo);
        };
    }
    Object.defineProperty(CjShoppingCartProductComponent.prototype, "cjReadOnly", {
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
    CjShoppingCartProductComponent.prototype.ngOnInit = function () {
        if (this.cjData.iconLeft) {
            this._iconLeft = this.fillIconStructure('ico-comuni-zoom', this.cjData.iconLeft);
        }
        if (this.cjData.iconRight) {
            this._iconRight = this.fillIconStructure('ico-azioni-elimina-cestino', this.cjData.iconRight);
        }
        this._myEventInfo = {
            productId: this.cjData.id,
            current: this
        };
        if (this._iconLeft && this._iconLeft.tooltip) {
            this.popoverData = { popoverData: {
                    title: this._iconLeft.tooltip.title,
                    clickableText: this._iconLeft.tooltip.clickableText,
                    text: this._iconLeft.tooltip.text,
                    onClick: this._sendEventOnClickPopoverLink
                }
            };
        }
    };
    CjShoppingCartProductComponent.prototype.fillIconStructure = function (defaultIcon, iconDataSrc) {
        var iconDataDest = {};
        if (iconDataSrc) {
            iconDataDest['icon'] = iconDataSrc.icon ? iconDataSrc.icon : defaultIcon;
            iconDataDest['hide'] = iconDataSrc.hide ? iconDataSrc.hide : false;
            iconDataDest['tooltip'] = iconDataSrc.tooltip ? iconDataSrc.tooltip : null;
        }
        else {
            iconDataDest['icon'] = defaultIcon;
            iconDataDest['hide'] = false;
            iconDataDest['tooltip'] = null;
        }
        return iconDataDest;
    };
    CjShoppingCartProductComponent.prototype._getProductStyle = function () {
        if (!this.cjData) {
            return this._productStyle;
        }
        if (this.cjData.promo) {
            return (this._productStyle = 'promo');
        }
        if (this.cjData.covenant) {
            return (this._productStyle = 'convenant');
        }
        return this._productStyle = 'standard';
    };
    CjShoppingCartProductComponent.prototype._onClickRightIcon = function () {
        console.log('CjShoppingCartProductComponent - Emit evet: cjOnClickRightIcon');
        console.dir(this._myEventInfo);
        this.cjOnClickRightIcon.emit(this._myEventInfo);
    };
    CjShoppingCartProductComponent.prototype._onGotoCardProduct = function () {
        console.log('CjShoppingCartProductComponent - Emit evet: cjOnGotoCardProduct');
        console.dir(this.cjData);
        this.cjOnGotoCardProduct.emit(this.cjData);
    };
    CjShoppingCartProductComponent.prototype._onClickPromo = function () {
        console.log('CjShoppingCartProductComponent - Emitting evet: cjOnClickPromo');
        console.dir(this._myEventInfo);
        this.cjOnClickPromo.emit(this._myEventInfo);
    };
    return CjShoppingCartProductComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], CjShoppingCartProductComponent.prototype, "cjData", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CjShoppingCartProductComponent.prototype, "cjIsParentItem", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Boolean])
], CjShoppingCartProductComponent.prototype, "cjReadOnly", null);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjShoppingCartProductComponent.prototype, "cjOnGotoCardProduct", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjShoppingCartProductComponent.prototype, "cjOnClickRightIcon", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjShoppingCartProductComponent.prototype, "cjOnClickLeftIconLink", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CjShoppingCartProductComponent.prototype, "cjOnClickPromo", void 0);
CjShoppingCartProductComponent = __decorate([
    Component({selector: 'cj-shopping-cart-product',
        template: "<ng-template #popoverTemplate let-popoverData=\"popoverData\"><style>.title{ font-weight: bold; text-transform: uppercase; } .link{ color:goldenrod; font-weight: bold; cursor:pointer; user-select: none; }</style><div class=\"container-fluid\"><div class=\"row\"><div class=\"col-md-24 text-center title\">{{popoverData.title}}</div></div><div class=\"row\"><div class=\"col-md-24 content\"><p>{{popoverData.text}}</p></div></div><div class=\"row\"><div class=\"col-md-24 text-center\"><div class=\"link\" (click)=\"popoverData.onClick()\">{{popoverData.clickableText}} <span class=\"icon-arrow-right\"></span></div></div></div></div></ng-template><div [id]=\"cjData.id\" class=\"flexible-row shopping-cart--product\"><div class=\"icon-left-container\"><nbp-tooltip *ngIf=\"!cjReadOnly && !_iconLeft?.hide && !!popoverData\" nbpPosition=\"Left\" [nbpTemplate]=\"popoverTemplate\" [nbpTemplateData]=\"popoverData\" [nbpSize]=\"_popoverSize.MD\" nbpVisibilityStrategy=\"click\"><span *ngIf=\"!_iconLeft?.hide\" class=\"cell__icon\" [ngClass]=\"_iconLeft?.icon\"></span></nbp-tooltip></div><div class=\"center-container cell-product\"><div class=\"row\"><div class=\"col-md-12 col-sm-12 col-xs-12 cell-product\"><div *ngIf=\"cjData.titleInfoLeft\" class=\"row firstLine\"><div *ngIf=\"cjData.titleInfoLeft.firstLine\" class=\"col-xs-24 col-sm-24 col-md-24 cell__font-md\" [ngClass]=\"{'cell__stroke':cjData.titleInfoLeft.firstLine.style}\">{{cjData.titleInfoLeft.firstLine.text}}</div></div><div *ngIf=\"cjData.titleInfoLeft\" class=\"row secondLine\"><div *ngIf=\"cjData.titleInfoLeft.secondLine\" class=\"col-xs-24 col-sm-24 col-md-24 cell__font-sm\" [ngClass]=\"{'cell__stroke':cjData.titleInfoLeft.secondLine.style}\">{{cjData.titleInfoLeft.secondLine.text}}</div></div></div><div *ngIf=\"cjData.quantity > 1\" class=\"col-xs-3 col-sm-3 col-md-3 quantity\">x{{cjData.quantity}}</div><div class=\"cell-product cell__text-right col-md-9 col-sm-9 col-xs-9\" [ngClass]=\"{'covenant-colour':!!cjData.covenant}\"><div *ngIf=\"cjData.titleInfoRight\" class=\"row firstLine\"><div *ngIf=\"cjData.titleInfoRight.firstLine\" class=\"col-xs-24 col-sm-24 col-md-24 pull-right cell__font-md\" [ngClass]=\"{'cell__stroke':cjData.titleInfoRight.firstLine.style}\">{{cjData.titleInfoRight.firstLine.text}}</div></div><div *ngIf=\"cjData.titleInfoRight\" class=\"row secondLine\"><div *ngIf=\"cjData.titleInfoRight.secondLine\" class=\"col-xs-24 col-sm-24 col-md-24 pull-right cell__font-sm\" [ngClass]=\"{'cell__stroke':cjData.titleInfoRight.secondLine.style}\">{{cjData.titleInfoRight.secondLine.text}}</div></div></div></div><div [ngSwitch]=\"_getProductStyle()\"><ng-template [ngSwitchCase]=\"'promo'\"><div class=\"row\"><div class=\"col-md-9 col-sm-9 col-xs-9 promo\" (click)=\"_onClickPromo()\">{{cjData.promo.title || 'promo'}} <span class=\"icon-arrow-right\"></span></div><div class=\"col-md-15 col-sm-15 col-xs-15 promo-desc cell__text-right\">{{cjData.promo.description}}</div></div></ng-template><ng-template [ngSwitchCase]=\"'convenant'\"><div class=\"row\"><div class=\"col-md-9 col-sm-9 col-xs-9 covenant covenant-colour\">{{cjData.covenant.title || 'convenzione '}}</div><div class=\"col-md-15 col-sm-15 col-xs-15 covenant-desc covenant-colour cell__text-right\">{{cjData.covenant.description}}</div></div></ng-template></div></div><div class=\"icon-right-container\"><span *ngIf=\"!cjReadOnly && !_iconRight?.hide\" class=\"cell__icon\" [ngClass]=\"_iconRight?.icon\" (click)=\"_onClickRightIcon()\"></span></div></div>",
        styles: [".shopping-cart--product{color:#323232;min-height:50px;padding:5px}.row{display:flex;align-items:center;justify-content:space-around}.flexible-row{display:flex;align-items:center;justify-content:space-around}[class*=col-]:not(.icon-left-container):not(.icon-right-container):not(.quantity){flex:1 1 auto;word-wrap:break-word}flexible-col{flex:1 1 auto;word-wrap:break-word}.quantity{flex:0 0 auto;background-color:#337a79;color:#fff;font-size:16px;height:24px;padding-left:0!important;padding-right:0!important;border-radius:12px;line-height:24px;text-align:center}.icon-left-container{flex:0 1 auto;max-width:35px;padding-right:5px!important;text-align:center}.icon-right-container{flex:0 1 auto;max-width:35px;padding-left:5px!important;text-align:center}.center-container{flex:1 1 auto;max-width:100%;padding:0!important}.cell__primary{font-weight:700}.cell__uppercase{text-transform:uppercase}.cell__font-md{font-size:14px}.cell__font-sm{font-size:12px}.cell__stroke{text-decoration:line-through}.cell__text-right{text-align:right}.cell__icon{font-size:25px;color:#258900;cursor:pointer}.cell__icon::before{vertical-align:middle}.firstLine{overflow:hidden}.secondLine{overflow:hidden}.promo{color:#258900;text-transform:uppercase;font:bold 12px arial;line-height:18px;padding-right:0!important;cursor:pointer}.promo .icon-arrow-right:before{text-align:right;vertical-align:middle;font-size:1em!important;font-weight:900!important}.promo-desc{color:#0094ca;letter-spacing:-.1px;font:bold 12px arial;line-height:16px;text-transform:capitalize}.covenant,.covenant-desc{text-transform:uppercase;font:bold 12px arial;line-height:16px}.covenant-colour{color:#b47dc2} /*# sourceMappingURL=cj-shopping-cart-product.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [])
], CjShoppingCartProductComponent);
export { CjShoppingCartProductComponent };
