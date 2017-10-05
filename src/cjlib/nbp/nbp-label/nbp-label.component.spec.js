/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { NbpLabelComponent } from './nbp-label.component';
describe('NbpLabelComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NbpLabelComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NbpLabelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
