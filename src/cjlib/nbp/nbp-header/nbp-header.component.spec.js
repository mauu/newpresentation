import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NbpHeaderComponent } from './nbp-header.component';
import { NbpChannel } from '../nbp-commons/nbp-commons.enums';
var applicationTitle;
var component;
var fixture;
var debug;
var elem;
var elementInnerHtml;
function htmlElement(cssSelector) {
    debug = fixture.debugElement.query(By.css(cssSelector));
    return debug ? debug.nativeElement : null;
}
function htmlElementInnerHtml(cssSelector) {
    return htmlElement(cssSelector).innerHTML;
}
function isHtmlElementContainsClasses(cssSelector, classes) {
    elem = htmlElement(cssSelector);
    return classes.reduce(function (prev, item) { return prev && elem.classList.contains(item); }, true);
}
describe('Testing NbpHeader Component', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NbpHeaderComponent]
        })
            .compileComponents();
    }));
    describe('when it has nbpName property and application\'s channel is INTRANET', function () {
        beforeEach(function () {
            fixture = TestBed.createComponent(NbpHeaderComponent);
            component = fixture.componentInstance;
            applicationTitle = 'POS Journey';
            component.nbpName = applicationTitle;
            component.nbpChannel = NbpChannel.INTRANET;
            fixture.detectChanges();
            elementInnerHtml = htmlElementInnerHtml('.nome-applicativo');
        });
        it('should create', function () {
            expect(component).toBeTruthy();
        });
        it('should display the application title', function () {
            expect(elementInnerHtml).toEqual(applicationTitle);
        });
        it('should display the small logo', function () {
            elementInnerHtml = htmlElementInnerHtml('.navbar-logo-brand-small');
            expect(elementInnerHtml).not.toBe(null);
        });
    });
    describe('when it hasn\'t nbpName property and application\'s channel is INTRANET', function () {
        beforeEach(function () {
            fixture = TestBed.createComponent(NbpHeaderComponent);
            component = fixture.componentInstance;
            component.nbpChannel = NbpChannel.INTRANET;
            fixture.detectChanges();
        });
        it('should create', function () {
            expect(component).toBeTruthy();
        });
        it('should display the big logo', function () {
            elementInnerHtml = htmlElementInnerHtml('.navbar-logo-brand');
            expect(elementInnerHtml).not.toBe(null);
        });
        it('shouldn\'t display the application title', function () {
            expect(isHtmlElementContainsClasses('.navbar-logo', ['nome-applicativo'])).toBe(false);
        });
    });
    describe('when it hasn\'t nbpName property and application\'s channel is ABC', function () {
        beforeEach(function () {
            fixture = TestBed.createComponent(NbpHeaderComponent);
            component = fixture.componentInstance;
            component.nbpChannel = NbpChannel.ABC;
            fixture.detectChanges();
        });
        it('should create', function () {
            expect(component).toBeTruthy();
        });
        it('should display the small logo', function () {
            elementInnerHtml = htmlElementInnerHtml('.navbar-logo-brand-small');
            expect(elementInnerHtml).not.toBe(null);
        });
        it('shouldn\'t display the application menu', function () {
            expect(htmlElement('.navbar-toggle')).toBe(null);
        });
    });
});
