import { async, TestBed } from '@angular/core/testing';
import { NbpHeaderLightComponent } from './nbp-header-light.component';
describe('Testing the NbpHeaderLightComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NbpHeaderLightComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NbpHeaderLightComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
