import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NbpShadowedPanelComponent } from './nbp-shadowed-panel.component';
var debug;
var component;
var fixture;
var elem;
function htmlElement(cssSelector) {
    debug = fixture.debugElement.query(By.css(cssSelector));
    return debug.nativeElement;
}
;
function isHtmlElementContainsClasses(cssSelector, classes) {
    elem = htmlElement(cssSelector);
    return classes.reduce(function (prev, item) { return prev && elem.classList.contains(item); }, true);
}
;
function expectHtmlElementContainsClasses(cssSelector, classes) {
    elem = htmlElement(cssSelector);
    return expect(isHtmlElementContainsClasses(cssSelector, classes));
}
;
describe('NbpShadowedPanelComponent', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NbpShadowedPanelComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NbpShadowedPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
    it('should has the "shadowed-panel-container" css class', function () {
        expectHtmlElementContainsClasses('div > div', ['shadowed-panel-container']);
    });
});
