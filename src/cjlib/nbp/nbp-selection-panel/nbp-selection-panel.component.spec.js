import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NbpSelectionPanelComponent } from './nbp-selection-panel.component';
import { NbpButtonComponent } from '../nbp-button/nbp-button.component';
var component;
var fixture;
var debug;
var elem;
var numberOfClick = 0;
var titolo = 'Titolo';
var notSelectedButtonLabel = 'Not selected';
var selectedButtonLabel = 'Selected';
function htmlElement(cssSelector) {
    debug = fixture.debugElement.query(By.css(cssSelector));
    return debug.nativeElement;
}
;
function htmlElementInnerHtml(cssSelector) {
    return htmlElement(cssSelector).innerHTML;
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
function expectHtmlElementEmitEventClick(cssSelector) {
    component.nbpClick.subscribe(function () {
        numberOfClick += 1;
        expect(numberOfClick).toEqual(1);
    });
    elem = htmlElement(cssSelector);
    fixture.detectChanges();
    elem.click();
}
;
describe('Testing NbpSelectionPanelComponent', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                NbpSelectionPanelComponent,
                NbpButtonComponent
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NbpSelectionPanelComponent);
        component = fixture.componentInstance;
        component.nbpTitle = titolo;
        component.selected = false;
        component.nbpButtonLabel = notSelectedButtonLabel;
        component.nbpSelectedButtonLabel = selectedButtonLabel;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
    it('should display the title', function () {
        fixture.detectChanges();
        var selector = '.selection-panel-title';
        expect(htmlElementInnerHtml(selector)).toEqual(titolo);
    });
    it('should has "btn button" css classes', function () {
        expectHtmlElementContainsClasses('button', ['btn', 'button']);
    });
    it('should display the button with the label not selected', function () {
        fixture.detectChanges();
        var selector = 'button > div > span';
        expect(htmlElementInnerHtml(selector)).toEqual(notSelectedButtonLabel);
    });
    it('should display the button with the label selected after a click', function () {
        elem = htmlElement('button');
        elem.click();
        fixture.detectChanges();
        var selector = 'button > div > span';
        expect(htmlElementInnerHtml(selector)).toEqual(selectedButtonLabel);
    });
    it('should emit the nbpClick event', function () {
        expectHtmlElementEmitEventClick('button');
    });
});
