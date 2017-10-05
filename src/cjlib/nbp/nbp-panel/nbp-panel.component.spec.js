import { By } from '@angular/platform-browser';
import { async, TestBed } from '@angular/core/testing';
import { NbpPanelComponent } from './nbp-panel.component';
var panelTitle;
describe('NbpPanelComponent', function () {
    var component;
    var debug;
    var elem;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NbpPanelComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        panelTitle = 'Default - Title';
        fixture = TestBed.createComponent(NbpPanelComponent);
        component = fixture.componentInstance;
        component.nbpTitle = panelTitle;
        fixture.detectChanges();
    });
    it('should create the component', function () {
        expect(component).toBeTruthy();
    });
    it('should display the label if title is present', function () {
        debug = fixture.debugElement.query(By.css('div.panel-heading'));
        elem = debug.nativeElement;
        expect(elem.innerHTML).toEqual(panelTitle);
    });
    it('should not display the label if title is not present', function () {
        component.nbpTitle = null;
        fixture.detectChanges();
        debug = fixture.debugElement.query(By.css('div.panel-heading'));
        expect(debug).toBeNull();
    });
});
