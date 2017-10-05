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
import { Component, ViewChild } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NbpTableComponent } from './nbp-table.component';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { NbpFormatterService } from './../../utility/nbp-formatter.service';
import { NbpDataSource } from './../nbp-datasource/nbp-datasource.service';
import { NbpPaginationComponent } from './../nbp-pagination/nbp-pagination.component';
import { NbpTableColumnComponent } from './../nbp-table-column/nbp-table-column.component';
import { NbpPipe } from './../nbp-commons/nbp-commons.enums';
var NbpFormatterServiceMock = (function () {
    function NbpFormatterServiceMock() {
    }
    NbpFormatterServiceMock.prototype.displayValueTransformation = function (value, pipe, arg) {
        return value;
    };
    return NbpFormatterServiceMock;
}());
export { NbpFormatterServiceMock };
var DemoNbpTableComponent = (function () {
    function DemoNbpTableComponent() {
        this.clicks = 0;
        this.pageChanges = 0;
        this.nbpPipe = NbpPipe;
        this.selectionMethod = 'single';
        this.mockData = [
            {
                id: 0,
                name: 'Sawyer',
                surname: 'Mckenzie',
                street: 'Agate Court',
                accountInfo: {
                    uid: 'd6cc01f2-aad2-4ca1-b4c3-794a846e34d5',
                    password: '59391bbd502d1788f2d11e8d',
                    accountLastLogin: new Date(),
                    idAuth: 0
                }
            },
            {
                id: 1,
                name: 'Mae',
                surname: 'Watkins',
                street: 'CommercialStreet',
                accountInfo: {
                    uid: 'cc6bc503-341b-410b-83f0-c11912584197',
                    password: '59391bbde5ee69bae5fc249a',
                    accountLastLogin: new Date(),
                    idAuth: 9
                }
            },
            {
                id: 2,
                name: 'Rivers',
                surname: 'Giles',
                street: 'Rutherford Place',
                accountInfo: {
                    uid: '3cbb85bd-0be9-4ac2-b1e4-4092f5326ba5',
                    password: '59391bbd5b2eec4de4a802f5',
                    accountLastLogin: new Date(),
                    idAuth: 2
                }
            },
            {
                id: 3,
                name: 'Clements',
                surname: 'Osborn',
                street: 'Calder Place',
                accountInfo: {
                    uid: '3e0b6ebe-ba7d-480f-98bf-b7d7697083f9',
                    password: '59391bbd36192b641829be54',
                    accountLastLogin: new Date(),
                    idAuth: 4
                }
            },
            {
                id: 4,
                name: 'Lloyd',
                surname: 'Odonnell',
                street: 'Crawford Avenue',
                accountInfo: {
                    uid: '4fa67d9e-60f1-4de0-8e49-5b42fb9d44db',
                    password: '59391bbdb1eb94dff9d4932c',
                    accountLastLogin: new Date(),
                    idAuth: 6
                }
            },
            {
                id: 5,
                name: 'Michelle',
                surname: 'Browning',
                street: 'Seigel Court',
                accountInfo: {
                    uid: '72723e25-927e-4f85-bd8d-6b49cfe8f750',
                    password: '59391bbd6bbae2385eadc2d4',
                    accountLastLogin: new Date(),
                    idAuth: 5
                }
            }
        ];
        this.gridOptions = {
            sortable: true,
            pageSize: 2,
            disablePagination: false
        };
        this.columnConfigurator = {
            id: {
                visible: true,
                sortable: true
            },
            name: {
                visible: false,
                sortable: false
            },
            uid: {
                visible: true,
                sortable: true
            },
            lastLogin: {
                visible: true,
                sortable: true
            }
        };
        this.gridDataSource = new NbpDataSource(this.mockData, 2);
    }
    DemoNbpTableComponent.prototype.onRowActionEvent = function (onRowActionEvent) {
        ++this.clicks;
        this.eventDataItem = onRowActionEvent;
    };
    DemoNbpTableComponent.prototype.onClickRowAction = function (onClickRowActionEvent) {
        ++this.clicks;
        this.eventDataItem = onClickRowActionEvent;
    };
    DemoNbpTableComponent.prototype.onRowsActionEvent = function (onRowsActionEvent) {
        this.eventData = onRowsActionEvent;
    };
    DemoNbpTableComponent.prototype.onPageChange = function () {
        ++this.pageChanges;
    };
    return DemoNbpTableComponent;
}());
__decorate([
    ViewChild(NbpTableComponent),
    __metadata("design:type", NbpTableComponent)
], DemoNbpTableComponent.prototype, "tableComponent", void 0);
DemoNbpTableComponent = __decorate([
    Component({
        template: "\n    <nbp-table \n    [nbpId]='Table1'\n    [nbpOptions]='gridOptions' \n    [nbpDataSource]='gridDataSource' \n    [nbpSelectionType]='selectionMethod' \n    (nbpOnSelectRow)='onRowActionEvent($event)' \n    (nbpOnClickRow)='onClickRowAction($event)'\n    (nbpOnMultiSelectRow)='onRowsActionEvent($event)'\n    (nbpChangePage)=\"onChangePage()\" >\n      <nbp-table-column \n        nbpId='IdColumn' \n        nbpTitle='ID' \n        nbpField='id'\n        [nbpFilter]='nbpPipe.DECIMAL'\n        nbpFilterArgs='1.0'\n        [nbpSortable]='columnConfigurator.id.sortable' \n        [nbpVisible]='columnConfigurator.id.visible'>\n      </nbp-table-column>\n      <nbp-table-column \n        nbpId='NameColumn' \n        nbpTitle='Name' \n        nbpField='name' \n        [nbpSortable]='columnConfigurator.name.sortable' \n        [nbpVisible]='columnConfigurator.name.visible'>\n      </nbp-table-column>\n      <nbp-table-column \n        nbpId='uidColumn' \n        nbpTitle='Uid'\n        nbpField='accountInfo.uid' \n        [nbpSortable]='columnConfigurator.uid.sortable' \n        [nbpVisible]='columnConfigurator.uid.visible'>\n      </nbp-table-column>\n      <nbp-table-column \n        nbpId='lastLoginColumn' \n        nbpTitle='Last login' \n        [nbpFilter]='nbpPipe.DATE'\n        nbpFilterArgs='dd-MM-yyyy'\n        nbpField='accountInfo.accountLastLogin' \n        [nbpSortable]='columnConfigurator.lastLogin.sortable' \n        [nbpVisible]='columnConfigurator.lastLogin.visible'>\n      </nbp-table-column>\n    </nbp-table>"
    })
], DemoNbpTableComponent);
describe('NbpTableComponent', function () {
    var tableComponent;
    var demoComponent;
    var demoFixture;
    var tableElement;
    var currentPageRows;
    var currentPageColumnHeaders;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DemoNbpTableComponent, NbpTableComponent, NbpPaginationComponent, NbpTableColumnComponent],
            providers: [
                {
                    provide: NbpFormatterService,
                    useClass: NbpFormatterServiceMock
                },
                CurrencyPipe,
                DatePipe,
                DecimalPipe,
                LowerCasePipe,
                PercentPipe,
                UpperCasePipe
            ],
        }).compileComponents();
    }));
    beforeEach(async(function () {
        // create TestHostComponent instead of DashboardHeroComponent
        demoFixture = TestBed.createComponent(DemoNbpTableComponent);
        demoComponent = demoFixture.componentInstance;
        tableComponent = demoComponent.tableComponent;
        tableElement = demoFixture.debugElement.query(By.css('table'));
        demoFixture.detectChanges(); // trigger initial data binding
    }));
    describe('When columns are specified through nbp-table-column tags', function () {
        it('should create', function () {
            expect(demoComponent).toBeTruthy();
            expect(tableComponent).toBeTruthy();
        });
        // TODO valutare se dividere i test del parsing dai test del display
        it('should detect the configured columns', function () {
            expect(tableComponent.nbpOptions.columns.length).toEqual(4); //
        });
        it('should render all configured columns', function () {
            var displayedColumns = tableElement.queryAll(By.css('tr > th'));
            expect(displayedColumns.length).toEqual(tableComponent.nbpOptions.columns.length);
        });
        it('should show only columns marked as visibile', function () {
            var visibleCoumns = tableElement.queryAll(By.css('tr > th:not([hidden])'));
            var configuredVisibleColumns = tableComponent.nbpOptions.columns.filter(function (c) { return c.visible; });
            expect(visibleCoumns.length).toEqual(configuredVisibleColumns.length);
        });
        describe('When i don\'t specify selection type', function () {
            beforeEach(async(function () {
                currentPageRows = demoFixture.debugElement.queryAll(By.css('tbody tr'));
                demoComponent.selectionMethod = undefined;
                demoFixture.detectChanges();
            }));
            it('should hasn\'t selectable rows', function () {
                var areAllRowsNotClickable = currentPageRows.reduce(function (a, b) {
                    return a && !b.nativeElement.classList.contains('clickable');
                }, true);
                expect(areAllRowsNotClickable).toBeTruthy();
            });
            describe('And i click on a row', function () {
                beforeEach(async(function () {
                    demoComponent.clicks = 0;
                    demoFixture.detectChanges();
                }));
                it('should emit a clickEvent', function () {
                    tableComponent.nbpOnClickRow.subscribe(function () {
                        expect(demoComponent.clicks).toEqual(1);
                    });
                    var elem = currentPageRows[0].nativeElement;
                    demoFixture.detectChanges();
                    elem.click();
                });
                it('should emit a clickEvent and send second row data', function () {
                    tableComponent.nbpOnClickRow.subscribe(function () {
                        expect(demoComponent.clicks).toEqual(1);
                        expect(demoComponent.eventDataItem.item).toBe(demoComponent.mockData[3]);
                    });
                    var elem = currentPageRows[1].nativeElement;
                    demoFixture.detectChanges();
                    elem.click();
                });
            });
        });
        describe('When i specify \'none\' selection type', function () {
            beforeEach(async(function () {
                currentPageRows = demoFixture.debugElement.queryAll(By.css('tbody tr'));
                demoComponent.selectionMethod = 'none';
                demoFixture.detectChanges();
            }));
            it('should hasn\'t selectable rows', function () {
                var areAllRowsNotClickable = currentPageRows.reduce(function (a, b) {
                    return a && !b.nativeElement.classList.contains('clickable');
                }, true);
                expect(areAllRowsNotClickable).toBeTruthy();
            });
            describe('And i click on one row', function () {
                beforeEach(async(function () {
                    demoComponent.clicks = 0;
                    demoFixture.detectChanges();
                }));
                it('should emit a clickEvent', function () {
                    tableComponent.nbpOnClickRow.subscribe(function () {
                        expect(demoComponent.clicks).toEqual(1);
                    });
                    var elem = currentPageRows[0].nativeElement;
                    demoFixture.detectChanges();
                    elem.click();
                });
                it('should emit a clickEvent and send second row data', function () {
                    tableComponent.nbpOnClickRow.subscribe(function () {
                        expect(demoComponent.clicks).toEqual(1);
                        expect(demoComponent.eventDataItem.item).toBe(demoComponent.mockData[1]);
                    });
                    var elem = currentPageRows[1].nativeElement;
                    demoFixture.detectChanges();
                    elem.click();
                });
            });
        });
        describe('When i specify \'single\' selection type', function () {
            beforeEach(async(function () {
                currentPageRows = demoFixture.debugElement.queryAll(By.css('tbody tr'));
                demoComponent.selectionMethod = 'single';
                demoFixture.detectChanges();
            }));
            it('should has selectable rows', function () {
                var areAllRowsNotClickable = currentPageRows.reduce(function (a, b) {
                    return a && b.nativeElement.classList.contains('clickable');
                }, true);
                expect(areAllRowsNotClickable).toBeTruthy();
            });
            describe('And i select one row by clicking on it', function () {
                beforeEach(async(function () {
                    demoComponent.clicks = 0;
                    demoFixture.detectChanges();
                }));
                it('should emit a nbpOnSelectEvent', function () {
                    tableComponent.nbpOnSelectRow.subscribe(function () {
                        expect(demoComponent.clicks).toEqual(1);
                    });
                    var elem = currentPageRows[0].nativeElement;
                    demoFixture.detectChanges();
                    elem.click();
                });
                it('should emit a nbpOnSelectEvent and send second row data', function () {
                    tableComponent.nbpOnSelectRow.subscribe(function () {
                        expect(demoComponent.clicks).toEqual(1);
                        expect(demoComponent.eventDataItem.item).toBe(demoComponent.mockData[1]);
                    });
                    var elem = currentPageRows[1].nativeElement;
                    demoFixture.detectChanges();
                    elem.click();
                });
            });
        });
        describe('When i specify \'multi\' selection type', function () {
            beforeEach(async(function () {
                currentPageRows = demoFixture.debugElement.queryAll(By.css('tbody tr'));
                demoComponent.selectionMethod = 'multi';
                demoFixture.detectChanges();
            }));
            it('should has checkbox for select rows', function () {
                var rowsWithCheckbox = currentPageRows.map(function (row) { return row.query(By.css('input[type="checkbox"]')); });
                expect(rowsWithCheckbox.length).toBe(demoComponent.gridOptions.pageSize);
            });
            describe('And i click on one checkbox', function () {
                beforeEach(async(function () {
                    demoComponent.eventData = null;
                }));
                it('should emit a nbpOnMultiSelectRow event', function () {
                    spyOn(demoComponent, 'onRowsActionEvent');
                    var subscriber = tableComponent.nbpOnMultiSelectRow.subscribe(function () {
                        expect(demoComponent.onRowsActionEvent).toHaveBeenCalled();
                    });
                    var elem = currentPageRows[0].nativeElement;
                    demoFixture.detectChanges();
                    elem.click();
                });
            });
            describe('And i click on the checkboxes sequentially', function () {
                it('should emit a nbpOnMultiSelectRow and select the first row data', function () {
                    tableComponent.nbpOnMultiSelectRow.subscribe(function () {
                        expect(demoComponent.eventData.items.length).toEqual(1);
                        expect(demoComponent.eventData.items[0]).toBe(demoComponent.mockData[0]);
                    });
                    var rowsWithCheckbox = currentPageRows.map(function (row) { return row.query(By.css('input[type="checkbox"]')); });
                    var elem = rowsWithCheckbox[0].nativeElement;
                    demoFixture.detectChanges();
                    elem.click();
                });
                it('should emit a nbpOnMultiSelectRow and select two rows', function () {
                    var rowsWithCheckbox = currentPageRows.map(function (row) { return row.query(By.css('input[type="checkbox"]')); });
                    demoFixture.detectChanges();
                    rowsWithCheckbox[0].nativeElement.click();
                    rowsWithCheckbox[1].nativeElement.click();
                    demoFixture.detectChanges();
                    expect(demoComponent.eventData.items.length).toEqual(2);
                    expect(demoComponent.eventData.items[0]).toBe(demoComponent.mockData[0]);
                    expect(demoComponent.eventData.items[1]).toBe(demoComponent.mockData[1]);
                });
                it('should remove a rows if chcked two times', function () {
                    var rowsWithCheckbox = currentPageRows.map(function (row) { return row.query(By.css('input[type="checkbox"]')); });
                    demoFixture.detectChanges();
                    rowsWithCheckbox[0].nativeElement.click();
                    rowsWithCheckbox[1].nativeElement.click();
                    demoFixture.detectChanges();
                    expect(demoComponent.eventData.items.length).toEqual(2);
                    expect(demoComponent.eventData.items[0]).toBe(demoComponent.mockData[0]);
                    expect(demoComponent.eventData.items[1]).toBe(demoComponent.mockData[1]);
                    rowsWithCheckbox[0].nativeElement.click();
                    demoFixture.detectChanges();
                    expect(demoComponent.eventData.items.length).toEqual(1);
                    expect(demoComponent.eventData.items[0]).toBe(demoComponent.mockData[1]);
                });
            });
        });
    });
    // TEST PAGINATION
});
