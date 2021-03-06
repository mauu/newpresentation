var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var NbpPagingComponent = (function () {
    function NbpPagingComponent() {
    }
    return NbpPagingComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], NbpPagingComponent.prototype, "nbpConfiguration", void 0);
NbpPagingComponent = __decorate([
    Component({
        selector: 'nbp-paging',template: "<div class=\"page-steps-container col-md-24 border-top-white\"><div class=\"container pad-t-12 pad-b-12 pad-l-10 pad-r-10\"><ul class=\"page-steps pull-left\"><ng-container *ngFor=\"let page of nbpConfiguration?.pages; let pageIndex= index\"><li class=\"page-step\" *ngIf=\"page.status !== 'todo'\"><div class=\"col\"><span class=\"page-steps-number\" [ngClass]=\"{'active': page.status === 'active', 'done': page.status === 'done'}\">{{pageIndex + 1}}</span><div class=\"row\"><label class=\"page-step-label\" *ngIf=\"page.status === 'active'\">{{nbpConfiguration.currentParentLabel}}</label><br><label class=\"page-steps-label\" *ngIf=\"page.status === 'active'\">{{page.label}}</label></div></div></li></ng-container></ul><ul class=\"page-steps pull-right\"><ng-container *ngFor=\"let page of nbpConfiguration?.pages; let pageIndex = index\"><li class=\"page-step\" *ngIf=\"page.status === 'todo'\"><span class=\"page-steps-number\" [ngClass]=\"{'active': page.status === 'active', 'done': page.status === 'done'}\">{{pageIndex + 1}}</span><label class=\"page-steps-label\" *ngIf=\"page.status === 'active'\">{{page.label}}</label></li></ng-container></ul></div></div>",
        styles: [".page-steps{list-style:none;padding:0;margin:0;height:2em}.page-steps li{display:inline-block;height:2em;line-height:2em}.page-steps li .row{line-height:0}.page-steps .page-step .col{display:inline-table}.page-steps .page-step .row{display:table-cell}.page-steps .page-steps-number{display:inline-block;border:1px solid #6f6f6f;font-weight:700;color:#6f6f6f;text-align:center;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;width:2em;height:2em;font-size:.785em;line-height:2em;margin:0 .125em 0 .125em}.page-steps .page-steps-number.active{color:#258900;border:1px solid #258900}.page-steps .page-steps-number.done{color:#fff;background-color:#258900;border-color:#258900}.page-steps .page-step-label{font-weight:400;color:#258900;font-size:.6875em;line-height:.5em;text-transform:uppercase;margin-left:.5em;margin-top:.4em}.page-steps .page-steps-label{font-weight:700;color:#258900;font-size:.785em;line-height:1em;text-transform:uppercase;margin-left:.5em}.page-steps-container{background-color:#fff}@media (min-width:768px){.page-steps .page-steps-label{font-size:.938em}.page-steps .page-steps-number{font-size:.938em}}@-moz-document url-prefix(){.page-steps .page-step .col{display:inline-flex}}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){.page-steps .page-step .col .row{top:-10px}}.contrasto-on .page-steps .page-steps-number{color:#000}.contrasto-on .page-steps .page-steps-number.active{color:#000;border:1px solid #000}.contrasto-on .page-steps .page-steps-number.done{color:#fff;background-color:#000;border-color:#000}.contrasto-on .page-steps .page-step-label{color:#000}.contrasto-on .page-steps .page-steps-label{color:#000}.contrasto-on .page-steps-container{background-color:#fff} /*# sourceMappingURL=nbp-paging.component.css.map */ "]
    }),
    __metadata("design:paramtypes", [])
], NbpPagingComponent);
export { NbpPagingComponent };
