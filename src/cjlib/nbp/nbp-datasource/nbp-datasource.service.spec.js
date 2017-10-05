import { async } from '@angular/core/testing';
import { NbpDataSource } from './nbp-datasource.service';
var dataSource;
var mockData = [
    {
        id: 0,
        name: 'Bernice',
        surname: 'Kidd',
        date: new Date(2017, 1, 23)
    },
    {
        id: 1,
        name: 'Fannie',
        surname: 'Saunders',
        date: new Date(2017, 4, 22)
    },
    {
        id: 2,
        name: 'Franks',
        surname: 'Duncan',
        date: new Date(2017, 1, 1)
    },
    {
        id: 3,
        name: 'Lane',
        surname: 'Hardy',
        date: new Date(2017, 2, 3)
    },
    {
        id: 4,
        name: 'Fischer',
        surname: 'Rosales',
        date: new Date(2017, 4, 22)
    },
    {
        id: 5,
        name: 'Imelda',
        surname: 'Good',
        date: new Date(2017, 2, 5)
    },
    {
        id: 6,
        name: 'Roberta',
        surname: 'Bonner',
        date: new Date(2017, 7, 3)
    },
    {
        id: 7,
        name: 'Pam',
        surname: 'Hammond',
        date: new Date(2017, 6, 31)
    },
    {
        id: 8,
        name: 'Singleton',
        surname: 'Miranda',
        date: new Date(2017, 9, 2)
    },
    {
        id: 9,
        name: 'Chandler',
        surname: 'Velasquez',
        date: new Date(2017, 12, 9)
    },
    {
        id: 10,
        name: 'Exception',
        surname: 'OfPageSize',
        date: new Date(2017, 11, 1)
    }
];
var pageSize = 5;
var subscriptionToDataSource;
var currentPageObservable;
var currentPage;
describe('NbpDatasourceService', function () {
    beforeEach(async(function () {
        dataSource = new NbpDataSource(mockData, pageSize);
    }));
    it('should instantiate the dataSource', function () {
        expect(dataSource).toBeTruthy();
    });
    it('should implements INbpDatasource', function () {
        var isDataSourceImplementsINbpInterface = dataSource.getPage;
        expect(isDataSourceImplementsINbpInterface).toBeTruthy();
    });
    describe('When i call getPage function', function () {
        beforeEach(async(function () {
            currentPageObservable = dataSource.getPage(1);
        }));
        it('should return an Observable<IDataPage<Person>> type', function () {
            var isCurrentPageAnObservable = currentPageObservable.subscribe;
            expect(isCurrentPageAnObservable).toBeTruthy();
        });
        describe('and ask for the first page', function () {
            beforeEach(async(function () {
                currentPageObservable = dataSource.getPage(1);
            }));
            it('should return 5 objects in data array', async(function () {
                subscriptionToDataSource = currentPageObservable.subscribe(function (value) {
                    currentPage = value;
                });
                expect(currentPage.data.length).toBe(5);
            }));
            it('should return 2 objects in data array equals to the first 2 in the original array', async(function () {
                subscriptionToDataSource = currentPageObservable.subscribe(function (value) {
                    currentPage = value;
                });
                expect(currentPage.data[0]).toBe(mockData[0]);
                expect(currentPage.data[1]).toBe(mockData[1]);
            }));
            describe('and i order for ASC on id', function () {
                it('should display as first row that with lower id', async(function () {
                    dataSource.getPage(1, ['id']).subscribe(function (value) {
                        currentPage = value;
                    });
                    expect(currentPage.data[0].id).toBe(0);
                    expect(currentPage.data[0].id).toBe(mockData[0].id);
                }));
            });
            describe('and i order for DESC on id', function () {
                it('should display as first row that with higher id', async(function () {
                    dataSource.getPage(1, ['-id']).subscribe(function (value) {
                        currentPage = value;
                    });
                    expect(currentPage.data[0].id).toBe(10);
                    expect(currentPage.data[0].id).toBe(mockData[mockData.length - 1].id);
                }));
            });
        });
        describe('and i order for ASC on date', function () {
            it('should display as first row that with lower date', async(function () {
                dataSource.getPage(1, ['date']).subscribe(function (value) {
                    currentPage = value;
                });
                expect(currentPage.data[0].id).toBe(2);
                expect(currentPage.data[0].id).toBe(mockData[2].id);
            }));
        });
        describe('and i order for DESC on date', function () {
            it('should display as first row that with higher date', async(function () {
                dataSource.getPage(1, ['-date']).subscribe(function (value) {
                    currentPage = value;
                });
                expect(currentPage.data[0].id).toBe(9);
                expect(currentPage.data[0].id).toBe(mockData[9].id);
            }));
        });
        describe('and i order for ASC on date with some value null', function () {
            beforeEach(async(function () {
                mockData[4].date = null;
            }));
            it('should display as first row that with lower date', async(function () {
                dataSource.getPage(1, ['date']).subscribe(function (value) {
                    currentPage = value;
                });
                expect(currentPage.data[0].date).toBe(null);
                expect(currentPage.data[0].date).toBe(mockData[4].date);
                expect(currentPage.data[0].id).toBe(4);
                expect(currentPage.data[0].id).toBe(mockData[4].id);
            }));
        });
        describe('and i order for DESC on date with some value null', function () {
            beforeEach(async(function () {
                mockData[4].date = null;
            }));
            it('should display as first row that with higher date', async(function () {
                dataSource.getPage(1, ['-date']).subscribe(function (value) {
                    currentPage = value;
                });
                expect(currentPage.data[0].date).toBe(mockData[9].date);
                expect(currentPage.data[0].id).toBe(9);
                expect(currentPage.data[0].id).toBe(mockData[9].id);
            }));
        });
        describe('and i order for ASC on date with some value null', function () {
            beforeEach(async(function () {
                mockData[4].date = null;
            }));
            it('should display as first row that with lower date', async(function () {
                dataSource.getPage(1, ['date']).subscribe(function (value) {
                    currentPage = value;
                });
                expect(currentPage.data[0].date).toBe(null);
                expect(currentPage.data[0].date).toBe(mockData[4].date);
                expect(currentPage.data[0].id).toBe(4);
                expect(currentPage.data[0].id).toBe(mockData[4].id);
            }));
        });
        describe('and i order for DESC on date with some value null', function () {
            beforeEach(async(function () {
                mockData[4].date = null;
            }));
            it('should display as first row that with higher date', async(function () {
                dataSource.getPage(1, ['-date']).subscribe(function (value) {
                    currentPage = value;
                });
                expect(currentPage.data[0].date).toBe(mockData[9].date);
                expect(currentPage.data[0].id).toBe(9);
                expect(currentPage.data[0].id).toBe(mockData[9].id);
            }));
        });
        describe('and ask for the last page', function () {
            beforeEach(async(function () {
                currentPageObservable = dataSource.getPage(3);
            }));
            it('should return 1 objects in data array', async(function () {
                subscriptionToDataSource = currentPageObservable.subscribe(function (value) {
                    currentPage = value;
                });
                expect(currentPage.data.length).toBe(1);
            }));
            it('should return 1 objects in data array equals to the last in the original array', async(function () {
                subscriptionToDataSource = currentPageObservable.subscribe(function (value) {
                    currentPage = value;
                });
                expect(currentPage.data[0]).toBe(mockData[mockData.length - 1]);
            }));
        });
        describe('and ask for a page that doesn\'t exist', function () {
            beforeEach(async(function () {
                currentPageObservable = dataSource.getPage(15);
            }));
            it('should return an empty array', async(function () {
                subscriptionToDataSource = currentPageObservable.subscribe(function (value) {
                    currentPage = value;
                });
                expect(currentPage.data.length).toBe(0);
            }));
        });
    });
    describe('When i create a new Datasource without pageSize', function () {
        beforeEach(async(function () {
            dataSource = new NbpDataSource(mockData);
        }));
        it('should instantiate the dataSource', function () {
            expect(dataSource).toBeTruthy();
        });
        it('should implements INbpDatasource', function () {
            var isDataSourceImplementsINbpInterface = dataSource.getPage;
            expect(isDataSourceImplementsINbpInterface).toBeTruthy();
        });
        describe('and i call getPage without specifing a page', function () {
            beforeEach(async(function () {
                currentPageObservable = dataSource.getPage();
            }));
            it('should return all data without', function () {
                currentPageObservable.subscribe(function (value) {
                    currentPage = value;
                });
                expect(currentPage.data.length).toBe(mockData.length);
            });
        });
    });
});
