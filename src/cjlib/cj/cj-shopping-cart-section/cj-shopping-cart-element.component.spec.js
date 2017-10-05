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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CjShoppingCartElementComponent } from './cj-shopping-cart-element.component';
import { CjShoppingCartProductComponent } from '../cj-shopping-cart-product/cj-shopping-cart-product.component';
import { NbpTooltipComponent } from './../../nbp/nbp-tooltip/nbp-tooltip.component';
var model = {
    id: 'Section1',
    titleInfoLeft: {
        firstLine: {
            text: 'Canone Mensile'
        },
        thirdLine: {
            text: 'CANONE MENSILE'
        },
    },
    titleInfoRight: {
        firstLine: {
            text: '5,00 € mese'
        },
        secondLine: {
            text: 'Per i primi 6 mesi'
        },
        thirdLine: {
            text: '6,00 € mese',
            style: 'stroke'
        }
    },
    products: [
        {
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
        }
    ],
    items: [
        {
            id: 'Section1_Item1',
            titleInfoLeft: {
                firstLine: {
                    text: 'Prodotti che Stai Acquistando'
                },
                secondLine: {
                    text: '5 Prodotti',
                }
            },
            products: [
                {
                    id: 'Section1_Item1_Prod1',
                    insertDate: new Date(),
                    titleInfoLeft: {
                        firstLine: {
                            text: 'Conto e servizi'
                        },
                        secondLine: {
                            text: 'inclusi'
                        }
                    },
                    titleInfoRight: {
                        firstLine: {
                            text: '4,50 € mese'
                        },
                        secondLine: {
                            text: ''
                        }
                    },
                    quantity: 1
                },
                {
                    id: 'Section1_Item1_Prod2',
                    insertDate: new Date(),
                    titleInfoLeft: {
                        firstLine: {
                            text: 'Nextcard'
                        },
                        secondLine: {
                            text: ''
                        }
                    },
                    titleInfoRight: {
                        firstLine: {
                            text: '1,50 € mese'
                        },
                        secondLine: {
                            text: ''
                        }
                    },
                    quantity: 1
                },
                {
                    id: 'Section1_Item1_Prod3',
                    insertDate: new Date(),
                    titleInfoLeft: {
                        firstLine: {
                            text: 'JiffyPay'
                        },
                        secondLine: {
                            text: ''
                        }
                    },
                    titleInfoRight: {
                        firstLine: {
                            text: 'Gratuito'
                        },
                        secondLine: {
                            text: ''
                        }
                    },
                    quantity: 1
                },
                {
                    id: 'Section1_Item1_Prod4',
                    insertDate: new Date(),
                    titleInfoLeft: {
                        firstLine: {
                            text: 'Salvadanaio'
                        },
                        secondLine: {
                            text: ''
                        }
                    },
                    titleInfoRight: {
                        firstLine: {
                            text: 'Gratuito'
                        },
                        secondLine: {
                            text: ''
                        }
                    },
                    quantity: 1
                },
                {
                    id: 'Section1_Item1_Prod5',
                    insertDate: new Date(),
                    titleInfoLeft: {
                        firstLine: {
                            text: 'Deposito'
                        },
                        secondLine: {
                            text: 'amministrato'
                        }
                    },
                    titleInfoRight: {
                        firstLine: {
                            text: '0,50 € mese'
                        },
                        secondLine: {
                            text: ''
                        }
                    },
                    quantity: 1
                }
            ]
        },
        {
            id: 'Section1_Item2',
            titleInfoLeft: {
                firstLine: {
                    text: 'Prodotti che puoi Acquistare in seguito'
                },
                secondLine: {
                    text: '2 Prodotti',
                }
            },
            products: [
                {
                    id: 'Section1_Item2_Prod1',
                    insertDate: new Date(),
                    titleInfoLeft: {
                        firstLine: {
                            text: 'Forfait 2 bonifici'
                        },
                        secondLine: {
                            text: 'altra banca'
                        }
                    },
                    titleInfoRight: {
                        firstLine: {
                            text: '1,50 € mese'
                        },
                        secondLine: {
                            text: ''
                        }
                    },
                    quantity: 2
                },
                {
                    id: 'Section1_Item2_Prod2',
                    insertDate: new Date(),
                    titleInfoLeft: {
                        firstLine: {
                            text: 'Lorem Ipsum'
                        },
                        secondLine: {
                            text: 'amministrato'
                        }
                    },
                    titleInfoRight: {
                        firstLine: {
                            text: '16,50 € mese'
                        },
                        secondLine: {
                            text: ''
                        }
                    },
                    quantity: 1
                }
            ]
        }
    ]
};
var TestHostComponent = (function () {
    function TestHostComponent() {
        this.isPanel = true;
        this.model = model;
    }
    return TestHostComponent;
}());
TestHostComponent = __decorate([
    Component({
        selector: 'demo-cjShoppingCartElement',
        template: "\n  <cj-shopping-cart-element\n  [cjData]=\"model\"\n  [cjIsPanel]=\"isPanel\"\n  >\n  </cj-shopping-cart-element>\n  "
    }),
    __metadata("design:paramtypes", [])
], TestHostComponent);
export { TestHostComponent };
describe('CjShoppingCartElementComponent Test', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule
            ],
            declarations: [
                TestHostComponent,
                CjShoppingCartElementComponent,
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
