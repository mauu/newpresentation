import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NbpTitledPanelComponent } from './nbp-titled-panel.component';
var component;
var fixture;
var debug;
var title;
describe('Testing NbpTitledPanel Component', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NbpTitledPanelComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NbpTitledPanelComponent);
        component = fixture.componentInstance;
        title = 'Esempio titolo';
        component.nbpTitle = title;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
    it('should display the title', function () {
        debug = fixture.debugElement.query(By.css('.titled-panel-title'));
        expect(debug.nativeElement.innerHTML).toEqual(title);
    });
});
