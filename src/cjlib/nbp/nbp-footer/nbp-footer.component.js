var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Input, Output, Inject, EventEmitter } from '@angular/core';
import { NbpFontSize } from './nbp-footer.enums';
import { DOCUMENT } from '@angular/platform-browser';
var NbpFooterComponent = (function () {
    function NbpFooterComponent(document) {
        this.document = document;
        /**
         * (Opzionale) Evento emesso alla seleziona della lingua
         */
        this.nbpLanguageChange = new EventEmitter();
        /**
         * (Opzionale) Booleano che mostra/nasconde i pulsanti per la gestione del contrasto
         * valore di default false
         */
        this.nbpContrastEnable = false;
        /**
         *  (Opzionale) Booleano che abilita la visualizzazione della dimensione del font
         *  Valore di default false
         */
        this.nbpFontDimensionEnable = false;
        /**
         *  Emissione di un evento per lo zoom del testo
         */
        this.nbpZoom = new EventEmitter();
        this._zoom = NbpFontSize;
        /**
         * Booleano per l'attivazione del contrasto, agisce sui colore nel css della libreria
         */
        this.nbpContrastOn = false;
        /**
         *  Emissione di un evento per l'attivazione del contrasto
         */
        this.nbpContrast = new EventEmitter();
    }
    NbpFooterComponent.prototype._zoomSelected = function (size) {
        this.nbpZoomSize = size;
        if (size === NbpFontSize.SMALL) {
            this.document.body.style.fontSize = '16px';
        }
        else if (size === NbpFontSize.MEDIUM) {
            this.document.body.style.fontSize = '19px';
        }
        else if (size === NbpFontSize.LARGE) {
            this.document.body.style.fontSize = '22px';
        }
        this.nbpZoom.emit(this.document.body.style.fontSize);
    };
    ;
    NbpFooterComponent.prototype._languageChange = function (lang) {
        this.nbpLanguage = lang;
        // console.log(lang.target.innerText);
        this.nbpLanguageChange.emit(this.nbpLanguage);
    };
    ;
    NbpFooterComponent.prototype._changeContrast = function (contrastOn) {
        this.nbpContrastOn = contrastOn;
        /*
        if (contrastOn === true) {
           this.document.getElementsByTagName('body')[0].className = 'contrasto-on';
           console.log("contrast-on");
         } else {
           this.document.getElementsByTagName('body')[0].classList.remove('contrasto-on');
           console.log("contrast-off");
         }
         */
        this.nbpContrast.emit(this.nbpContrastOn);
    };
    ;
    NbpFooterComponent.prototype._isFooterEmpty = function () {
        return !this.nbpLinks
            && !this.nbpLanguages
            && !this.nbpShowCentralBtn
            && !this.nbpFontDimensionEnable
            && !this.nbpContrastEnable;
    };
    return NbpFooterComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array)
], NbpFooterComponent.prototype, "nbpLinks", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], NbpFooterComponent.prototype, "nbpLanguages", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NbpFooterComponent.prototype, "nbpShowCentralBtn", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], NbpFooterComponent.prototype, "nbpZoomSize", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NbpFooterComponent.prototype, "nbpCentralBtn", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpFooterComponent.prototype, "nbpLanguageChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbpFooterComponent.prototype, "nbpLanguage", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NbpFooterComponent.prototype, "nbpContrastEnable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NbpFooterComponent.prototype, "nbpFontDimensionEnable", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpFooterComponent.prototype, "nbpZoom", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NbpFooterComponent.prototype, "nbpContrastOn", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], NbpFooterComponent.prototype, "nbpContrast", void 0);
NbpFooterComponent = __decorate([
    Component({
        selector: 'nbp-footer',template: "<footer class=\"footer\" [ngClass]=\"{'contrasto-on':nbpContrastOn,'empty-footer':_isFooterEmpty()}\"><div [ngClass]=\"{'footer-content':!_isFooterEmpty(),'empty-footer':_isFooterEmpty()}\"><div class=\"footer-content-left col-md-6 col-sm-12 col-xs-24\" [ngClass]=\"{'bottom-right-border':(!!nbpLinks && !nbpLanguages)}\"><div *ngIf=\"!!nbpLinks\"><span *ngFor=\"let link of nbpLinks;let i=index;\"><span class=\"footer-link truncate-link\" [innerText]=\"link.name\" (click)=\"redirectTo(link)\"></span> <span *ngIf=\"i !== nbpLinks.length - 1\">|</span></span></div></div><div class=\"footer-content-center-l col-md-6 col-sm-12 col-xs-24\" [ngClass]=\"{'top-left-border':!nbpLinks && !!nbpLanguages||(!!nbpLinks && !!nbpLanguages),'bottom-right-border':(!!nbpLanguages && !nbpShowCentralBtn) }\"><div class=\"footer-languages\" *ngIf=\"!!nbpLanguages\"><div *ngFor=\"let lang of nbpLanguages; let i=index; let l=last\" (click)=\"_languageChange($event)\"><div><span class=\"footer-lang\" [innerText]=\"lang\"></span> <span class=\"footer-lang\" *ngIf=\"i !== nbpLanguages.length - 1\">|</span> <span class=\"footer-lang\" *ngIf=\"i === nbpLanguages.length - 1\">&nbsp;</span></div><div [ngStyle]=\"{opacity: nbpLanguage === lang ? 1 : 0}\" class=\"footer-languages-selection\">&#9679;</div></div></div></div><div class=\"footer-content-center-r col-md-6 col-sm-12 col-xs-24\" [ngClass]=\"{'top-left-border':(!!nbpShowCentralBtn && !nbpLanguages) || ( !!nbpShowCentralBtn && !!nbpLanguages ), 'bottom-right-border':(!(!!nbpContrastEnable || !!nbpFontDimensionEnable) && !!nbpShowCentralBtn) }\"><div *ngIf=\"nbpShowCentralBtn\"><button (click)=\"nbpCentralBtn.action\" class=\"btn button\"><span class=\"icon button-icon\" [ngClass]=\"nbpCentralBtn.icon\"></span>{{nbpCentralBtn.name}}</button></div></div><div class=\"footer-content-right col-md-6 col-sm-12 col-xs-24\" [ngClass]=\"{'top-left-border':((!!nbpContrastEnable || !!nbpFontDimensionEnable) && !nbpShowCentralBtn)||((!!nbpContrastEnable || !!nbpFontDimensionEnable) && !!nbpShowCentralBtn) }\"><div class=\"footer-contrasto\" *ngIf=\"nbpContrastEnable\"><div (click)=\"_changeContrast(false)\"><div class=\"icon ico-footer-contrasto-1\"></div><div [ngStyle]=\"{opacity: nbpContrastOn === false ? 1 : 0}\" class=\"footer-contrasto-selection\">&#9679;</div></div><div (click)=\"_changeContrast(true)\"><div class=\"icon ico-footer-contrasto-2\"></div><div [ngStyle]=\"{opacity: nbpContrastOn === true ? 1 : 0}\" class=\"footer-contrasto-selection\">&#9679;</div></div></div><div class=\"footer-testo\" *ngIf=\"nbpFontDimensionEnable\"><div (click)=\"_zoomSelected(_zoom.SMALL)\"><div class=\"icon ico-footer-testo-1\"></div><div [ngStyle]=\"{opacity: nbpZoomSize === _zoom.SMALL ? 1 : 0}\" class=\"footer-contrasto-selection\">&#9679;</div></div><div (click)=\"_zoomSelected(zoom.MEDIUM)\"><div class=\"icon ico-footer-testo-2\"></div><div [ngStyle]=\"{opacity: nbpZoomSize === _zoom.MEDIUM ? 1 : 0}\" class=\"footer-contrasto-selection\">&#9679;</div></div><div (click)=\"_zoomSelected(zoom.LARGE)\"><div class=\"icon ico-footer-testo-3\"></div><div [ngStyle]=\"{opacity: nbpZoomSize === _zoom.LARGE ? 1 : 0}\" class=\"footer-contrasto-selection\">&#9679;</div></div></div></div></div></footer>",
        styles: [".footer-content{height:6.25em}.empty-footer{height:3.125em}.top-left-border{border-top:none;border-bottom:none;border-left:1px solid #6f6f6f}.bottom-right-border{border-top:none;border-right:1px solid #6f6f6f;border-bottom:none}.footer-content-center-l,.footer-content-center-r,.footer-content-left,.footer-content-right{display:table;height:inherit;color:#fff}.footer-content-center-l>div,.footer-content-center-r>div,.footer-content-left>div,.footer-content-right>div{display:table-cell;vertical-align:middle;text-align:center}.footer-content-left{padding-left:10px;padding-right:10px;text-transform:uppercase}.footer-content-left span{cursor:pointer}.footer-content-center-r button{background-color:#323232!important;border:none!important}.footer-content-center-r button:hover{background-color:#fff!important;color:#323232!important}.footer-content-right{border-right:none}.footer-link{font-family:Arial;font-size:12px;white-space:nowrap}.footer-link:hover{text-decoration:underline}.truncate-link{display:inline-block;vertical-align:middle;max-width:10em;text-overflow:ellipsis;overflow:hidden}.footer-languages{font-size:1.5em}.footer-languages .ico-footer-contrasto-1{cursor:pointer}.footer-languages .footer-lang{cursor:pointer;font-family:Arial;font-size:12px;margin-left:0 .313em 0 0}.footer-languages .ico-footer-contrasto-2{cursor:pointer}.footer-languages>div{display:inline-block;padding:0 .313em 0 .313em}.footer-contrasto{font-size:1.5em}.footer-contrasto .ico-footer-contrasto-1{cursor:pointer}.footer-contrasto .ico-footer-contrasto-2{cursor:pointer}.footer-contrasto>div{display:inline-block;padding-left:0 .313em 0 .313em}.footer-contrasto>div:hover{background-color:#fff;color:#323232}.footer-testo{font-size:1.5em;cursor:pointer}.footer-testo .ico-footer-testo-1{font-size:.5em}.footer-testo .ico-footer-testo-2{font-size:.8em}.footer-testo>div{display:inline-block;padding:0 .313em 0 .313em}.footer-testo>div:hover{background-color:#fff;color:#323232}.footer-contrasto-selection,.footer-languages-selection,.footer-testo-selection{cursor:pointer;font-size:.625em;margin-top:-.625em}.footer-languages-selection{margin:-.625em 1.313em 0 .313em}.footer{background-color:#323232;margin-top:1.875em!important;color:#fff;border-bottom:.375em solid #000;width:100%;z-index:2;bottom:0;box-sizing:content-box}@media (min-width:768px){.footer{margin-bottom:0;margin-right:2.5em}}@media (min-width:992px){.footer{margin-top:1.25em;margin-right:12.5em}}@media (max-width:767px){.top-left-border{border-top:1px solid #6f6f6f;border-right:none;border-bottom:none;border-left:none}.bottom-right-border{border-top:none;border-right:none;border-bottom:1px solid #6f6f6f;border-left:none}.footer{height:25em}.footer .row{padding:0 15px 0 15px}.empty-footer{height:3.125em!important}.empty-footer>div{display:none}.footer-content-right{padding-top:15px}}@media (min-width:768px) and (max-width:991px){.top-left-border{border-top:1px solid #6f6f6f;border-right:none;border-bottom:none;border-left:1px solid #6f6f6f}.bottom-right-border{border-top:none;border-right:1px solid #6f6f6f;border-bottom:1px solid #6f6f6f;border-left:none}.footer-content-left.bottom-right-border{border-bottom:none!important}.footer-content-center-l.top-left-border{border-top:none!important;border-right:none!important}.footer-content-center-r.top-left-border{border-bottom:none!important;border-left:none!important}.footer-content-right{border-right:none!important;border-bottom:none!important}.footer{height:12.5em}.footer .row{padding:0 15px 0 15px}.empty-footer{height:3.125em!important}.empty-footer>div{display:none}}.contrasto-on{background-color:#000}.contrasto-on .footer-content-left{color:#fff}.contrasto-on .footer-content-center-r button{background-color:#000!important}.contrasto-on .footer-content-center-r button:hover{background-color:#fff!important;color:#6f6f6f!important}.contrasto-on .footer-contrasto{color:#ccc}.contrasto-on .footer-contrasto>div:hover{background-color:#000;color:#fff}.contrasto-on .footer-testo{color:#ccc}.contrasto-on .footer-testo>div:hover{background-color:#000;color:#fff}.button-icon{font-size:1.7em!important;display:inline-block;vertical-align:middle;padding-right:.2em}.button{font-weight:700;font-size:.75em;padding-top:1em;padding-bottom:1em;line-height:1;outline:0!important;text-transform:uppercase;height:3.3334em;min-width:6.875em;box-shadow:none!important} /*# sourceMappingURL=nbp-footer.component.css.map */ "]
    }),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object])
], NbpFooterComponent);
export { NbpFooterComponent };
