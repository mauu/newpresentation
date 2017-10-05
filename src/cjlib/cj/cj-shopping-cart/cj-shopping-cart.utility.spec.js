import { ShoppingCartUtility } from './cj-shopping-cart.utility';
describe('ShoppingCartUtility Test', function () {
    var shoppingCartUtility;
    var cartDemo = {
        id: 'Carrello Test',
        sections: [
            {
                id: 'Section1',
            },
            {
                id: 'Section2',
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
                        quantity: 3,
                        iconLeft: {
                            hide: true
                        }
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
                                        text: '4.500.000,50 € mese'
                                    },
                                    secondLine: {
                                        text: ''
                                    }
                                },
                                quantity: 10,
                                promo: {
                                    id: 'cj-promo-id-primi-6-mesi',
                                    description: 'descrizione promo Gratuito dopo i primi 6 mesi'
                                }
                            },
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
                                quantity: 10,
                                promo: {
                                    id: 'cj-promo-id-dopo-6-mesi',
                                    description: 'Gratuito dopo 6 mesi'
                                }
                            },
                            {
                                id: 'Section1_Item1_Prod1',
                                insertDate: new Date(),
                                titleInfoRight: {
                                    firstLine: {
                                        text: '4.500,50 € mese'
                                    },
                                    secondLine: {
                                        text: ''
                                    }
                                },
                                quantity: 10,
                                promo: {
                                    id: 'cj-promo-id-dopo-6-mesi',
                                    description: 'descrizione promo Gratuito dopo i primi 6 mesi'
                                }
                            },
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
                                        text: '4,50 € mese',
                                        style: 'stroke'
                                    },
                                    secondLine: {
                                        text: ''
                                    }
                                },
                                quantity: 23,
                                promo: {
                                    id: 'cj-promo-id-primi-6-mesi',
                                    title: 'promozione limitata',
                                    description: 'Gratuito per i primi 6 mesi'
                                }
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
                                quantity: 3,
                                covenant: {
                                    id: 'cj-covenant-id-covenant',
                                    description: 'convenzione'
                                }
                            },
                            {
                                id: 'Section1_Item1_Prod3',
                                insertDate: new Date(),
                                titleInfoLeft: {
                                    firstLine: {
                                        text: 'Forfait 2 bonifici altra banca'
                                    },
                                    secondLine: {
                                        text: 'limitato al banche appartenenti al circuito Congobank'
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
                                quantity: 3,
                                covenant: {
                                    id: 'cj-covenant-id-covenant',
                                    title: 'convenzione',
                                    description: 'In convenzione'
                                }
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
            }
        ]
    };
    var sectionDemotoAdd = {
        id: 'SectionAdded',
        titleInfoLeft: {
            firstLine: {
                text: 'FirstLineLeftTextSection',
                style: 'stroke'
            },
            secondLine: {
                text: 'SecondLineLeftTextSection'
            },
            thirdLine: {
                text: 'ThirdLineLeftTextSection'
            },
        },
        titleInfoRight: {
            firstLine: {
                text: 'FirstLineRightTextSection'
            },
            secondLine: {
                text: 'SecondLineRightTextSection'
            },
            thirdLine: {
                text: 'ThirdLineRightTextSection',
                style: 'stroke'
            }
        }
    };
    var itemDemo = {
        id: 'ItemSectionDemo',
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
                quantity: 3,
                iconLeft: {
                    hide: true
                }
            }
        ]
    };
    var productDemoToAdd = {
        id: 'DemoProd',
        insertDate: new Date(),
        titleInfoLeft: {
            firstLine: {
                text: 'FirstLineProduct',
                style: 'stroke'
            },
            secondLine: {
                text: 'SecondLineProduct',
                style: 'stroke'
            },
            thirdLine: {
                text: 'ThirdLineProduct',
                style: 'stroke'
            },
        },
        titleInfoRight: {
            firstLine: {
                text: 'FirstLineDataProduct',
                style: 'stroke'
            },
            secondLine: {
                text: 'SecondLineDataProduct',
                style: 'stroke'
            },
            thirdLine: {
                text: 'ThirdLine',
                style: 'stroke'
            }
        },
        quantity: 3,
        iconLeft: {
            hide: true
        }
    };
    var sectionDemo;
    var cartDemoModified;
    var insertOnTopDemo;
    beforeEach(function () {
        shoppingCartUtility = new ShoppingCartUtility();
    });
    describe('When invoke addSection method', function () {
        beforeEach(function () {
        });
        it('should be add a section on top if insertOnTop is true', function () {
            cartDemoModified = shoppingCartUtility.addSection(cartDemo, sectionDemotoAdd, true);
            expect(cartDemoModified.sections[0].id).toEqual(sectionDemotoAdd.id);
        });
        it('sholud be add section on bottom if insertOnTop is false', function () {
            cartDemoModified = shoppingCartUtility.addSection(cartDemo, sectionDemotoAdd, false);
            expect(cartDemoModified.sections[(cartDemoModified.sections.length - 1)].id).toEqual(sectionDemotoAdd.id);
        });
        it('sholud be add section on bottom if insertOnTop is missing', function () {
            cartDemoModified = shoppingCartUtility.addSection(cartDemo, sectionDemotoAdd);
            expect(cartDemoModified.sections[(cartDemoModified.sections.length - 1)].id).toEqual(sectionDemotoAdd.id);
        });
    });
    describe('When invoke removeSection method', function () {
        beforeEach(function () {
            sectionDemo = cartDemo.sections[0];
            cartDemoModified = shoppingCartUtility.removeSection(cartDemo, sectionDemo.id);
        });
        it('should remove the selected section', function () {
            expect(cartDemoModified.sections[0].id).not.toEqual(sectionDemo.id);
        });
    });
    describe('When invoke addItemToSection method', function () {
        beforeEach(function () {
        });
        it('should add Item to selected section on top if insertOnTop is true', function () {
            cartDemoModified = shoppingCartUtility.addItemToSection(cartDemo, cartDemo.sections[0].id, itemDemo, true);
            expect(cartDemoModified.sections[0].items[0]).toEqual(itemDemo);
        });
        it('should add Item to selected section on bottom if insertOnTop is false', function () {
            cartDemoModified = shoppingCartUtility.addItemToSection(cartDemo, cartDemo.sections[0].id, itemDemo, false);
            expect(cartDemoModified.sections[0].items[(cartDemoModified.sections[0].items.length - 1)]).toEqual(itemDemo);
        });
        it('should add Item to selected section on bottom if insertOnTop is missing', function () {
            cartDemoModified = shoppingCartUtility.addItemToSection(cartDemo, cartDemo.sections[0].id, itemDemo);
            expect(cartDemoModified.sections[0].items[(cartDemoModified.sections[0].items.length - 1)]).toEqual(itemDemo);
        });
    });
    describe('When invoke removeItemFromSection method', function () {
        var itemId;
        beforeEach(function () {
            sectionDemo = cartDemo.sections[1];
            itemId = sectionDemo.items[0].id;
            cartDemoModified = shoppingCartUtility.removeItemFormSection(cartDemo, sectionDemo.id, itemId);
        });
        it('should remove selected section', function () {
            expect(cartDemoModified.sections[1].items[0].id).not.toEqual(itemId);
        });
    });
    describe('When invoke addProductToSection method', function () {
        beforeEach(function () {
            sectionDemo = cartDemo.sections[1];
        });
        it('should add Product to section on bottom', function () {
            cartDemoModified = shoppingCartUtility.addProductToSection(cartDemo, sectionDemo.id, productDemoToAdd);
            expect(cartDemoModified.sections[1].products[(cartDemoModified.sections[1].items.length - 1)]).toEqual(productDemoToAdd);
        });
    });
});
