import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NbpTabBarComponent } from './nbp-tab-bar.component';
var component;
var fixture;
var debug;
var elem;
var items;
var titles;
var icons;
var eventEmitted;
function htmlElement(cssSelector) {
    debug = fixture.debugElement.query(By.css(cssSelector));
    return debug.nativeElement;
}
;
describe('Testing NbpTabBarComponent', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NbpTabBarComponent]
        })
            .compileComponents();
    }));
    beforeEach(function (done) {
        fixture = TestBed.createComponent(NbpTabBarComponent);
        component = fixture.componentInstance;
        titles = ['CALENDARIO', 'DOCUMENTI', 'IMPOSTAZIONI', 'UTENTE'];
        icons = ['icon-calendar', 'icon-document', 'icomoon-Settings_ruota', 'icomoon-Persone_Risorsa-1'];
        items = [
            { icon: icons[0], title: titles[0] },
            { icon: icons[1], title: titles[1] },
            { icon: icons[2], title: titles[2] },
            { icon: icons[3], title: titles[3] },
        ];
        eventEmitted = 0;
        component.nbpItems = items;
        done();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
    it('should dispay the title and the icon for each tab', function () {
        fixture.detectChanges();
        elem = htmlElement('.tabs-container');
        var tabs;
        var iconElement;
        var titleElement;
        tabs = fixture.debugElement.queryAll(By.css('.tab-container'));
        expect(tabs.length).toEqual(4);
        for (var i = 0; i < tabs.length; i++) {
            iconElement = tabs[i].query(By.css('i')).nativeElement;
            expect(iconElement.classList.contains(icons[i])).toBe(true);
            titleElement = tabs[i].query(By.css('span')).nativeElement;
            expect(titleElement.classList.contains('tab-title')).toBe(true);
            expect(titleElement.innerText).toEqual(titles[i]);
        }
    });
    it('should select the tab', function () {
        fixture.detectChanges();
        var selectedIndex = 1;
        var tabs = fixture.debugElement.queryAll(By.css('.tab-container'));
        var tab = tabs[selectedIndex];
        tab.nativeElement.click();
        fixture.detectChanges();
        expect(tab.nativeElement.classList.contains('selected')).toBe(true);
    });
    it('should emit the selectedTabIndexChange event when a tab is selected', function () {
        fixture.detectChanges();
        var selectedIndex = 2;
        component.nbpSelectedIndexChange.subscribe(function (index) {
            eventEmitted++;
            expect(eventEmitted).toEqual(1);
            expect(index).toEqual(selectedIndex);
        });
        var tabs = fixture.debugElement.queryAll(By.css('.tab-container'));
        var tab = tabs[selectedIndex];
        tab.nativeElement.click();
    });
});
