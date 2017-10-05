import { async, TestBed } from '@angular/core/testing';
import { NbpLoadingComponent } from './nbp-loading.component';
import { NbpLoadingService } from './../../nbp/nbp-loading/nbp-loading.service';
describe('NbpLoadingComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NbpLoadingComponent],
            providers: [
                NbpLoadingService
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NbpLoadingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
