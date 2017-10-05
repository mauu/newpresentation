import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NbpSwitchComponent, NpbSwitchDispalyType } from './nbp-switch.component';
var component;
var debugs;
var elemnts;
var fixture;
var labelHome = 'HOME';
var checkTypeIconText = NpbSwitchDispalyType.ICON_TEXT;
var checkTypeIcon = NpbSwitchDispalyType.ICON;
var checkTypeText = NpbSwitchDispalyType.TEXT;
var demoList = [
    {
        value: 'A',
        name: 'HOME',
        icon: 'ico-comuni-visualizzaricevuta'
    },
    {
        value: 'B',
        name: 'Primo Livello',
        icon: 'ico-comuni-c-persona-n'
    }
];
/** funzioni di utility usante nei test */
var actual;
var numberOfClick = 0;
function htmlElement(cssSelector) {
    debugs = fixture.debugElement.queryAll(By.css(cssSelector));
    var arr = [];
    for (var _i = 0, debugs_1 = debugs; _i < debugs_1.length; _i++) {
        var debugElement = debugs_1[_i];
        arr.push(debugElement.nativeElement);
    }
    return arr;
}
function htmlElementInnerHtml(cssSelector) {
    var arr = [];
    for (var _i = 0, _a = htmlElement(cssSelector); _i < _a.length; _i++) {
        var elemnt = _a[_i];
        arr.push(elemnt.innerHTML);
    }
    return arr;
}
function isHtmlElementContainsClasses(cssSelector, classes) {
    elemnts = htmlElement(cssSelector);
    for (var _i = 0, classes_1 = classes; _i < classes_1.length; _i++) {
        var cl = classes_1[_i];
        for (var _a = 0, _b = htmlElement(cssSelector); _a < _b.length; _a++) {
            var elemnt = _b[_a];
            if (elemnt.classList.contains(cl)) {
                return true;
            }
        }
    }
    return false;
}
function expectHtmlElementEmitEventClick(cssSelector) {
    component.nbpClickFn.subscribe(function () {
        numberOfClick += 1;
        console.log(numberOfClick);
        expect(numberOfClick).toEqual(1);
    });
    elemnts = htmlElement(cssSelector);
    fixture.detectChanges();
    for (var _i = 0, elemnts_1 = elemnts; _i < elemnts_1.length; _i++) {
        var elemnt = elemnts_1[_i];
        elemnt.click();
        break;
    }
}
describe('NbpSwitchComponent', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NbpSwitchComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NbpSwitchComponent);
        component = fixture.componentInstance;
        component.nbpTextUp = true;
        component.nbpOptionList = demoList;
        component.nbpDisplayType = checkTypeText;
        component.defaultValue = 'B';
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('should has \'primary\' css class for NbpButton ', function () {
        actual = isHtmlElementContainsClasses('button', ['primary']);
        expect(actual).toBe(true);
    });
    it('should has br element for spacing text and icon', function () {
        elemnts = htmlElement('button > br ');
        expect(elemnts).not.toBeNull();
    });
    it('should display the label', function () {
        var test = false;
        for (var _i = 0, _a = htmlElementInnerHtml('button > span'); _i < _a.length; _i++) {
            var elementInnerHtml = _a[_i];
            if (elementInnerHtml === labelHome) {
                test = true;
                break;
            }
        }
        return expect(test).toBe(true);
    });
    it('should be \'disabled\' when NbpSwitch has the \'disabled\' property', function () {
        var test = false;
        component.disabled = true;
        fixture.detectChanges();
        for (var _i = 0, _a = htmlElement('button'); _i < _a.length; _i++) {
            var elemnt = _a[_i];
            if (elemnt.attributes.getNamedItem('disabled')) {
                test = true;
                break;
            }
        }
        return expect(test).toBe(true);
    });
    it('should not be \'disabled\' when NbpSwitch hasn\'t the \'disabled\' property', function () {
        var test = true;
        component.disabled = false;
        fixture.detectChanges();
        for (var _i = 0, _a = htmlElement('button'); _i < _a.length; _i++) {
            var elemnt = _a[_i];
            if (elemnt.attributes.getNamedItem('disabled')) {
                test = false;
                break;
            }
        }
        return expect(test).toBe(true);
    });
    it('should have icon  when NbpSwitch has the nbpDisplayType \'ICON\' property set ', function () {
        component.nbpDisplayType = checkTypeIcon;
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('span', ['icon']);
        expect(actual).toBe(true);
    });
    it('should have icon and text  when NbpSwitch has the nbpDisplayType \'ICON_TEXT\' property set ', function () {
        component.nbpDisplayType = checkTypeIconText;
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('span', ['icon']);
        var test = false;
        for (var _i = 0, _a = htmlElementInnerHtml('button > span'); _i < _a.length; _i++) {
            var elementInnerHtml = _a[_i];
            if (elementInnerHtml === labelHome) {
                test = true;
                break;
            }
        }
        return expect(actual && test).toBe(true);
    });
    it('should emit nbpClick event on button click', function () {
        component.nbpOptionList = [{ value: 'A', name: 'HOME', icon: 'ico-comuni-visualizzaricevuta' }];
        fixture.detectChanges();
        expectHtmlElementEmitEventClick('button');
    });
    it('should be selected on first click', function () {
        component.defaultValue = '';
        component.nbpOptionList = [{ value: 'A', name: 'HOME', icon: 'ico-comuni-visualizzaricevuta' }];
        elemnts = htmlElement('button');
        for (var _i = 0, elemnts_2 = elemnts; _i < elemnts_2.length; _i++) {
            var elemnt = elemnts_2[_i];
            elemnt.click();
            break;
        }
        actual = isHtmlElementContainsClasses('button', ['primary']);
        expect(actual).toBe(true);
    });
});
