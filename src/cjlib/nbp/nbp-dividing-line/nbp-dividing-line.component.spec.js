import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NbpDividingLineComponent } from './nbp-dividing-line.component';
import { NbpButtonComponent } from './../nbp-button/nbp-button.component';
var label;
var buttonIcon;
var title;
var titleIcon;
/** funzioni di utility usante nei test */
var debug;
var elem;
var component;
var fixture;
var numberOfClick = 0;
function htmlElement(cssSelector) {
    debug = fixture.debugElement.query(By.css(cssSelector));
    return debug.nativeElement;
}
function htmlElementInnerHtml(cssSelector) {
    return htmlElement(cssSelector).innerHTML;
}
function isHtmlElementContainsClasses(cssSelector, classes) {
    elem = htmlElement(cssSelector);
    return classes.reduce(function (prev, item) { return prev && elem.classList.contains(item); }, true);
}
function expectHtmlElementContainsClasses(cssSelector, classes) {
    elem = htmlElement(cssSelector);
    return expect(isHtmlElementContainsClasses(cssSelector, classes));
}
function expectHtmlElementEmitEventClick(cssSelector) {
    component.nbpClick.subscribe(function () {
        numberOfClick += 1;
        expect(numberOfClick).toEqual(1);
    });
    elem = htmlElement(cssSelector);
    fixture.detectChanges();
    elem.click();
}
describe('Testing NbpDividingLine Component', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                NbpDividingLineComponent,
                NbpButtonComponent
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NbpDividingLineComponent);
        component = fixture.componentInstance;
        label = 'LabelTest';
        buttonIcon = 'icomoon-Acquisto_borsa1';
        title = 'TitoloTest';
        titleIcon = 'icomoon-Acquisto_borsa1';
        component.nbpButtonIcon = buttonIcon;
        component.npbButtonLabel = label;
        component.nbpTitle = title;
        component.showButton = true;
        component.nbpTitleIcon = titleIcon;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
    it('should display the title', function () {
        var selector = 'div > h4';
        expect(htmlElementInnerHtml(selector)).toEqual(title);
    });
    it('should not display the title when is not provided', function () {
        component.nbpTitle = null;
        fixture.detectChanges();
        var selector = 'div > h4';
        debug = fixture.debugElement.query(By.css(selector));
        expect(debug).toBeNull();
    });
    it('should display the button', function () {
        var selector = 'div > nbp-button >  button > div > span:first-child';
        expectHtmlElementContainsClasses(selector, ['icon', 'button-icon', buttonIcon]);
    });
    it('should display the button label', function () {
        var selector = 'div > nbp-button > button > div > span:last-child';
        expect(htmlElementInnerHtml(selector)).toEqual(label);
    });
    it('should emit nbpClick event on button click', function () {
        expectHtmlElementEmitEventClick('button');
    });
    it('should not display the icon and the button if showbutton is false', function () {
        component.showButton = false;
        fixture.detectChanges();
        var selector = 'div > nbp-button';
        debug = fixture.debugElement.query(By.css(selector));
        expect(debug).toBeNull();
    });
    it('should display the Icon', function () {
        var selector = 'span.dividing-line-title.icomoon-Acquisto_borsa1';
        expect(htmlElement(selector)).toBeTruthy();
    });
    it('should display the Icon and the text', function () {
        var selector = 'span.dividing-line-title + h4.dividing-line-title';
        expect(htmlElement(selector)).toBeTruthy();
    });
});
