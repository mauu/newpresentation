import { async, TestBed } from '@angular/core/testing';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { NbpDataContainerComponent } from './nbp-data-container.component';
describe('NbpDataContainerComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NbpDataContainerComponent],
            providers: [
                CurrencyPipe,
                DatePipe,
                DecimalPipe,
                LowerCasePipe,
                PercentPipe,
                UpperCasePipe
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NbpDataContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
