/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { NbpTableColumnComponent } from './nbp-table-column.component';
describe('NbpTableColumnComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NbpTableColumnComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NbpTableColumnComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
