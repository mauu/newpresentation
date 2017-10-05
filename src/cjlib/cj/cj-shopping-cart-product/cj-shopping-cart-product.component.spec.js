var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { CjShoppingCartProductComponent } from './cj-shopping-cart-product.component';
import { NbpTooltipComponent } from './../../nbp/nbp-tooltip/nbp-tooltip.component';
var model = {
    id: 'Section1_Prod1',
    insertDate: new Date(),
    titleInfoLeft: {
        firstLine: {
            text: 'cippalippa',
            style: 'stroke'
        },
        secondLine: {
            text: 'cippalippa',
            style: 'stroke'
        },
        thirdLine: {
            text: 'cippalippa',
            style: 'stroke'
        },
    },
    titleInfoRight: {
        firstLine: {
            text: 'cippalippa',
            style: 'stroke'
        },
        secondLine: {
            text: 'cippalippa',
            style: 'stroke'
        },
        thirdLine: {
            text: 'cippalippa',
            style: 'stroke'
        }
    },
    quantity: 1
};
var TestHostComponent = (function () {
    function TestHostComponent() {
        this.model = model;
    }
    return TestHostComponent;
}());
TestHostComponent = __decorate([
    Component({
        selector: 'demo-cjShoppingCartElement',
        template: "\n  <cj-shopping-cart-product\n  [cjData]=\"model\"\n  >\n  </cj-shopping-cart-product>\n  "
    }),
    __metadata("design:paramtypes", [])
], TestHostComponent);
export { TestHostComponent };
describe('CjShoppingCartElementComponent Test', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                TestHostComponent,
                CjShoppingCartProductComponent,
                NbpTooltipComponent
            ]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
