import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NbpButtonComponent } from './nbp-button.component';
import { NbpStyle, NbpSize } from './../nbp-commons/nbp-commons.enums';
import { NbpButtonType } from './nbp-button.enums';
var buttonLabel;
var buttonStyle;
var buttonSize;
var buttonType;
var buttonIcon;
var component;
var fixture;
var debug;
var elem;
var numberOfClick = 0;
/** funzioni di utility usante nei test */
var elementInnerHtml;
var actual;
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
function expectHtmlElementAfterClickContainClass(cssSelector, classes) {
    elem = htmlElement(cssSelector);
    elem.click();
    fixture.detectChanges();
    return expect(isHtmlElementContainsClasses(cssSelector, classes));
}
function expectHtmlElementAfterSecondClickContainClass(cssSelector, classes) {
    elem = htmlElement(cssSelector);
    elem.click();
    elem.click();
    fixture.detectChanges();
    return expect(isHtmlElementContainsClasses(cssSelector, classes));
}
function expectHtmlElementHaveAttribute(cssSelector, attributeName) {
    elem = htmlElement(cssSelector);
    return expect(elem.attributes.getNamedItem(attributeName));
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
describe('NbpButton with "ACTION" type and with "DEFAULT" style', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NbpButtonComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NbpButtonComponent);
        component = fixture.componentInstance;
        buttonLabel = 'Default - Action';
        buttonType = NbpButtonType.ACTION;
        buttonIcon = 'ico-comuni-visualizzaricevuta';
        component.nbpLabel = buttonLabel;
        component.nbpType = buttonType;
        fixture.detectChanges();
        numberOfClick = 0;
    });
    it('should create the component', function () {
        expect(component).toBeTruthy();
    });
    it('should display the label', function () {
        elementInnerHtml = htmlElementInnerHtml('button > div > span');
        expect(elementInnerHtml).toEqual(buttonLabel);
    });
    it('should has "btn button" css classes', function () {
        actual = isHtmlElementContainsClasses('button', ['btn', 'button']);
        expect(actual).toBe(true);
    });
    it('should has "default" css class when NbpButton has\'t the nbpStyle property', function () {
        actual = isHtmlElementContainsClasses('button', ['default']);
        expect(actual).toBe(true);
    });
    it('should has "default" css class when NbpButton has nbpStyle = "DEFAULT"', function () {
        buttonStyle = NbpStyle.DEFAULT;
        component.nbpStyle = buttonStyle;
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button', ['default']);
        expect(actual).toBe(true);
    });
    it('should be "enabled" when NbpButton hasn\'t the "disabled" property', function () {
        component.disabled = false;
        fixture.detectChanges();
        expectHtmlElementHaveAttribute('button', 'disabled').toBe(null);
    });
    it('should be "disabled" when NbpButton has the "disabled" property', function () {
        component.disabled = true;
        fixture.detectChanges();
        expectHtmlElementHaveAttribute('button', 'disabled').not.toBe(null);
    });
    it('should has "Large" size when NbpButton has nbpSize = "LG"', function () {
        buttonSize = NbpSize.LG;
        component.nbpSize = buttonSize;
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button', ['lg']);
        expect(actual).toBe(true);
    });
    it('should has "Default" size when NbpButton hasn\'t the nbpSize attribute', function () {
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button', ['lg']);
        expect(actual).toBe(false);
    });
    it('should emit nbpClick event on button click', function () {
        expectHtmlElementEmitEventClick('button');
    });
    it('shouldn\'t be selected/deselected on clicks', function () {
        expectHtmlElementAfterClickContainClass('button', ['on']).toBe(false);
    });
    it('should show the icon when NbpButton has nbpIcon attribute', function () {
        component.nbpIcon = buttonIcon;
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button > div > span', ['icon', 'button-icon', buttonIcon]);
        expect(actual).toBe(true);
    });
    it('shouldn\'t show the icon when NbpButton hasn\'t nbpIcon attribute', function () {
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button > div > span', ['icon', 'button-icon', buttonIcon]);
        expect(actual).toBe(false);
    });
});
describe('NbpButton with "ACTION" type and with "PRIMARY" style', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NbpButtonComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NbpButtonComponent);
        component = fixture.componentInstance;
        buttonLabel = 'Primary - Action';
        buttonStyle = NbpStyle.PRIMARY;
        buttonType = NbpButtonType.ACTION;
        component.nbpLabel = buttonLabel;
        component.nbpStyle = buttonStyle;
        component.nbpType = buttonType;
        fixture.detectChanges();
        numberOfClick = 0;
    });
    it('should create the component', function () {
        expect(component).toBeTruthy();
    });
    it('should display the label', function () {
        elementInnerHtml = htmlElementInnerHtml('button > div > span');
        expect(elementInnerHtml).toEqual(buttonLabel);
    });
    it('should has "btn button" css classes', function () {
        actual = isHtmlElementContainsClasses('button ', ['btn', 'button']);
        expect(actual).toBe(true);
    });
    it('should has "primary" css class when NbpButton has nbpStyle = "PRIMARY"', function () {
        actual = isHtmlElementContainsClasses('button', ['primary']);
        expect(actual).toBe(true);
    });
    it('should be "enabled" when NbpButton hasn\'t the "disabled" property', function () {
        component.disabled = false;
        fixture.detectChanges();
        expectHtmlElementHaveAttribute('button', 'disabled').toBe(null);
    });
    it('should be "disabled" when NbpButton has the "disabled" property', function () {
        component.disabled = true;
        fixture.detectChanges();
        expectHtmlElementHaveAttribute('button', 'disabled').not.toBe(null);
    });
    it('should has "Large" size when NbpButton has nbpSize = "LG"', function () {
        buttonSize = NbpSize.LG;
        component.nbpSize = buttonSize;
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button', ['lg']);
        expect(actual).toBe(true);
    });
    it('should has "Default" size when NbpButton hasn\'t the nbpSize attribute', function () {
        buttonSize = NbpSize.MD;
        component.nbpSize = buttonSize;
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button', ['lg']);
        expect(actual).toBe(false);
    });
    it('should emit nbpClick event on button click', function () {
        expectHtmlElementEmitEventClick('button');
    });
    it('shouldn\'t be selected/deselected on clicks', function () {
        expectHtmlElementAfterClickContainClass('button', ['on']).toBe(false);
    });
    it('should show the icon when NbpButton has nbpIcon attribute', function () {
        component.nbpIcon = buttonIcon;
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button > div > span', ['icon', 'button-icon', buttonIcon]);
        expect(actual).toBe(true);
    });
    it('shouldn\'t show the icon when NbpButton hasn\'t nbpIcon attribute', function () {
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button > div > span', ['icon', 'button-icon', buttonIcon]);
        expect(actual).toBe(false);
    });
});
describe('NbpButton with "ACTION" type and with "SECONDARY" style', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NbpButtonComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NbpButtonComponent);
        component = fixture.componentInstance;
        buttonLabel = 'Secondary - Action';
        buttonStyle = NbpStyle.SECONDARY;
        component.nbpLabel = buttonLabel;
        component.nbpStyle = buttonStyle;
        fixture.detectChanges();
        numberOfClick = 0;
    });
    it('should create the component', function () {
        expect(component).toBeTruthy();
    });
    it('should display the label', function () {
        elementInnerHtml = htmlElementInnerHtml('button > div > span');
        expect(elementInnerHtml).toEqual(buttonLabel);
    });
    it('should has "btn button" css classes', function () {
        actual = isHtmlElementContainsClasses('button', ['btn', 'button']);
        expect(actual).toBe(true);
    });
    it('should has "secondary" css class when NbpButton has nbpStyle = "SECONDARY"', function () {
        actual = isHtmlElementContainsClasses('button', ['secondary']);
        expect(actual).toBe(true);
    });
    it('should be "enabled" when NbpButton hasn\'t the "disabled" property', function () {
        component.disabled = false;
        fixture.detectChanges();
        expectHtmlElementHaveAttribute('button', 'disabled').toBe(null);
    });
    it('should be "disabled" when NbpButton has the "disabled" property', function () {
        component.disabled = true;
        fixture.detectChanges();
        expectHtmlElementHaveAttribute('button', 'disabled').not.toBe(null);
    });
    it('should has "Large" size when NbpButton has nbpSize = "LG"', function () {
        buttonSize = NbpSize.LG;
        component.nbpSize = buttonSize;
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button', ['lg']);
        expect(actual).toBe(true);
    });
    it('should has "Default" size when NbpButton hasn\'t the nbpSize attribute', function () {
        buttonSize = NbpSize.MD;
        component.nbpSize = buttonSize;
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button', ['lg']);
        expect(actual).toBe(false);
    });
    it('should emit nbpClick event on button click', function () {
        expectHtmlElementEmitEventClick('button');
    });
    it('shouldn\'t be selected/deselected on clicks', function () {
        expectHtmlElementAfterClickContainClass('button', ['on']).toBe(false);
    });
    it('should show the icon when NbpButton has nbpIcon attribute', function () {
        component.nbpIcon = buttonIcon;
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button > div > span', ['icon', 'button-icon', buttonIcon]);
        expect(actual).toBe(true);
    });
    it('shouldn\'t show the icon when NbpButton hasn\'t nbpIcon attribute', function () {
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button > div > span', ['icon', 'button-icon', buttonIcon]);
        expect(actual).toBe(false);
    });
});
describe('NbpButton with "ACTION" type and with "OUTLINE" style', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NbpButtonComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NbpButtonComponent);
        component = fixture.componentInstance;
        buttonLabel = 'Outline - Action';
        buttonStyle = NbpStyle.OUTLINE;
        component.nbpLabel = buttonLabel;
        component.nbpStyle = buttonStyle;
        fixture.detectChanges();
        numberOfClick = 0;
    });
    it('should create the component', function () {
        expect(component).toBeTruthy();
    });
    it('should display the label', function () {
        elementInnerHtml = htmlElementInnerHtml('button > div > span');
        expect(elementInnerHtml).toEqual(buttonLabel);
    });
    it('should has "btn button" css classes', function () {
        actual = isHtmlElementContainsClasses('button', ['btn', 'button']);
        expect(actual).toBe(true);
    });
    it('should has "outline" css class when NbpButton has nbpStyle = "OUTLINE"', function () {
        actual = isHtmlElementContainsClasses('button', ['outline']);
        expect(actual).toBe(true);
    });
    it('should be "enabled" when NbpButton hasn\'t the "disabled" property', function () {
        component.disabled = false;
        fixture.detectChanges();
        expectHtmlElementHaveAttribute('button', 'disabled').toBe(null);
    });
    it('should be "disabled" when NbpButton has the "disabled" property', function () {
        component.disabled = true;
        fixture.detectChanges();
        expectHtmlElementHaveAttribute('button', 'disabled').not.toBe(null);
    });
    it('should has "Large" size when NbpButton has nbpSize = "LG"', function () {
        buttonSize = NbpSize.LG;
        component.nbpSize = buttonSize;
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button', ['lg']);
        expect(actual).toBe(true);
    });
    it('should has "Default" size when NbpButton hasn\'t the nbpSize attribute', function () {
        buttonSize = NbpSize.MD;
        component.nbpSize = buttonSize;
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button', ['lg']);
        expect(actual).toBe(false);
    });
    it('should emit nbpClick event on button click', function () {
        expectHtmlElementEmitEventClick('button');
    });
    it('shouldn\'t be selected/deselected on clicks', function () {
        expectHtmlElementAfterClickContainClass('button', ['on']).toBe(false);
    });
    it('should show the icon when NbpButton has nbpIcon attribute', function () {
        component.nbpIcon = buttonIcon;
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button > div > span', ['icon', 'button-icon', buttonIcon]);
        expect(actual).toBe(true);
    });
    it('shouldn\'t show the icon when NbpButton hasn\'t nbpIcon attribute', function () {
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button > div > span', ['icon', 'button-icon', buttonIcon]);
        expect(actual).toBe(false);
    });
});
describe('NbpButton with "SELECT" type and with "DEFAULT" style', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NbpButtonComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NbpButtonComponent);
        component = fixture.componentInstance;
        buttonLabel = 'Default - Select';
        buttonStyle = NbpStyle.DEFAULT;
        buttonType = NbpButtonType.SELECT;
        component.nbpLabel = buttonLabel;
        component.nbpStyle = buttonStyle;
        component.nbpType = buttonType;
        fixture.detectChanges();
        numberOfClick = 0;
    });
    it('should create the component', function () {
        expect(component).toBeTruthy();
    });
    it('should display the label', function () {
        elementInnerHtml = htmlElementInnerHtml('button > div > span');
        expect(elementInnerHtml).toEqual(buttonLabel);
    });
    it('should has "select" css classes', function () {
        actual = isHtmlElementContainsClasses('button', ['select']);
        expect(actual).toBe(true);
    });
    it('should has "btn button" css classes', function () {
        actual = isHtmlElementContainsClasses('button', ['btn', 'button']);
        expect(actual).toBe(true);
    });
    it('should has "default" css class when NbpButton has nbpStyle = "DEFAULT"', function () {
        actual = isHtmlElementContainsClasses('button', ['default']);
        expect(actual).toBe(true);
    });
    it('should be "enabled" when NbpButton hasn\'t the "disabled" property', function () {
        component.disabled = false;
        fixture.detectChanges();
        expectHtmlElementHaveAttribute('button', 'disabled').toBe(null);
    });
    it('should be "disabled" when NbpButton has the "disabled" property', function () {
        component.disabled = true;
        fixture.detectChanges();
        expectHtmlElementHaveAttribute('button', 'disabled').not.toBe(null);
    });
    it('should has "Large" size when NbpButton has nbpSize = "LG"', function () {
        buttonSize = NbpSize.LG;
        component.nbpSize = buttonSize;
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button', ['lg']);
        expect(actual).toBe(true);
    });
    it('should has "Default" size when NbpButton hasn\'t the nbpSize attribute', function () {
        buttonSize = NbpSize.MD;
        component.nbpSize = buttonSize;
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button', ['lg']);
        expect(actual).toBe(false);
    });
    it('should emit nbpClick event on button click', function () {
        expectHtmlElementEmitEventClick('button');
    });
    it('should be selected on first click', function () {
        expectHtmlElementAfterClickContainClass('button', ['on']).toBe(true);
    });
    it('should toggle selection on next clicks', function () {
        expectHtmlElementAfterSecondClickContainClass('button', ['on']).toBe(false);
    });
    it('should show the icon when NbpButton has nbpIcon attribute', function () {
        component.nbpIcon = buttonIcon;
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button > div > span', ['icon', 'button-icon', buttonIcon]);
        expect(actual).toBe(true);
    });
    it('shouldn\'t show the icon when NbpButton hasn\'t nbpIcon attribute', function () {
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button > div > span', ['icon', 'button-icon', buttonIcon]);
        expect(actual).toBe(false);
    });
});
describe('NbpButton with "SELECT" type and with "PRIMARY" style', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NbpButtonComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NbpButtonComponent);
        component = fixture.componentInstance;
        buttonLabel = 'Default - Select';
        buttonStyle = NbpStyle.PRIMARY;
        buttonType = NbpButtonType.SELECT;
        component.nbpLabel = buttonLabel;
        component.nbpStyle = buttonStyle;
        component.nbpType = buttonType;
        fixture.detectChanges();
        numberOfClick = 0;
    });
    it('should create the component', function () {
        expect(component).toBeTruthy();
    });
    it('should display the label', function () {
        elementInnerHtml = htmlElementInnerHtml('button > div > span');
        expect(elementInnerHtml).toEqual(buttonLabel);
    });
    it('should has "select" css classes', function () {
        actual = isHtmlElementContainsClasses('button', ['select']);
        expect(actual).toBe(true);
    });
    it('should has "btn button" css classes', function () {
        actual = isHtmlElementContainsClasses('button', ['btn', 'button']);
        expect(actual).toBe(true);
    });
    it('should ignore nbpStyle = "PRIMARY" when NbpButton has nbpType = "SELECT" '
        + 'and should has "default" style', function () {
        expectHtmlElementContainsClasses('button', ['primary']).toBe(false);
        expectHtmlElementContainsClasses('button', ['default']).toBe(true);
    });
    it('should be "enabled" when NbpButton hasn\'t the "disabled" property', function () {
        component.disabled = false;
        fixture.detectChanges();
        expectHtmlElementHaveAttribute('button', 'disabled').toBe(null);
    });
    it('should be "disabled" when NbpButton has the "disabled" property', function () {
        component.disabled = true;
        fixture.detectChanges();
        expectHtmlElementHaveAttribute('button', 'disabled').not.toBe(null);
    });
    it('should has "Large" size when NbpButton has nbpSize = "LG"', function () {
        buttonSize = NbpSize.LG;
        component.nbpSize = buttonSize;
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button', ['lg']);
        expect(actual).toBe(true);
    });
    it('should has "Default" size when NbpButton hasn\'t the nbpSize attribute', function () {
        buttonSize = NbpSize.MD;
        component.nbpSize = buttonSize;
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button', ['lg']);
        expect(actual).toBe(false);
    });
    it('should emit nbpClick event on button click', function () {
        expectHtmlElementEmitEventClick('button');
    });
    it('should be selected on first click', function () {
        expectHtmlElementAfterClickContainClass('button', ['on']).toBe(true);
    });
    it('should toggle selection on next clicks', function () {
        expectHtmlElementAfterSecondClickContainClass('button', ['on']).toBe(false);
    });
    it('should show the icon when NbpButton has nbpIcon attribute', function () {
        component.nbpIcon = buttonIcon;
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button > div > span', ['icon', 'button-icon', buttonIcon]);
        expect(actual).toBe(true);
    });
    it('shouldn\'t show the icon when NbpButton hasn\'t nbpIcon attribute', function () {
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button > div > span', ['icon', 'button-icon', buttonIcon]);
        expect(actual).toBe(false);
    });
});
describe('NbpButton with "SELECT" type and with "SECONDARY" style', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NbpButtonComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NbpButtonComponent);
        component = fixture.componentInstance;
        buttonLabel = 'Default - Select';
        buttonStyle = NbpStyle.SECONDARY;
        buttonType = NbpButtonType.SELECT;
        component.nbpLabel = buttonLabel;
        component.nbpStyle = buttonStyle;
        component.nbpType = buttonType;
        fixture.detectChanges();
        numberOfClick = 0;
    });
    it('should create the component', function () {
        expect(component).toBeTruthy();
    });
    it('should display the label', function () {
        elementInnerHtml = htmlElementInnerHtml('button > div > span');
        expect(elementInnerHtml).toEqual(buttonLabel);
    });
    it('should has "select" css classes', function () {
        actual = isHtmlElementContainsClasses('button', ['select']);
        expect(actual).toBe(true);
    });
    it('should has "btn button" css classes', function () {
        actual = isHtmlElementContainsClasses('button', ['btn', 'button']);
        expect(actual).toBe(true);
    });
    it('should has "secondary" css class', function () {
        expectHtmlElementContainsClasses('button', ['secondary']).toBe(true);
    });
    it('should be "enabled" when NbpButton hasn\'t the "disabled" property', function () {
        component.disabled = false;
        fixture.detectChanges();
        expectHtmlElementHaveAttribute('button', 'disabled').toBe(null);
    });
    it('should be "disabled" when NbpButton has the "disabled" property', function () {
        component.disabled = true;
        fixture.detectChanges();
        expectHtmlElementHaveAttribute('button', 'disabled').not.toBe(null);
    });
    it('should has "Large" size when NbpButton has nbpSize = "LG"', function () {
        buttonSize = NbpSize.LG;
        component.nbpSize = buttonSize;
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button', ['lg']);
        expect(actual).toBe(true);
    });
    it('should has "Default" size when NbpButton hasn\'t the nbpSize attribute', function () {
        buttonSize = NbpSize.MD;
        component.nbpSize = buttonSize;
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button', ['lg']);
        expect(actual).toBe(false);
    });
    it('should emit nbpClick event on button click', function () {
        expectHtmlElementEmitEventClick('button');
    });
    it('should be selected on first click', function () {
        expectHtmlElementAfterClickContainClass('button', ['on']).toBe(true);
    });
    it('should toggle selection on next clicks', function () {
        expectHtmlElementAfterSecondClickContainClass('button', ['on']).toBe(false);
    });
    it('should show the icon when NbpButton has nbpIcon attribute', function () {
        component.nbpIcon = buttonIcon;
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button > div > span', ['icon', 'button-icon', buttonIcon]);
        expect(actual).toBe(true);
    });
    it('shouldn\'t show the icon when NbpButton hasn\'t nbpIcon attribute', function () {
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button > div > span', ['icon', 'button-icon', buttonIcon]);
        expect(actual).toBe(false);
    });
});
describe('NbpButton with "SELECT" type and with "OUTLINE" style', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NbpButtonComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NbpButtonComponent);
        component = fixture.componentInstance;
        buttonLabel = 'Default - Select';
        buttonStyle = NbpStyle.OUTLINE;
        buttonType = NbpButtonType.SELECT;
        component.nbpLabel = buttonLabel;
        component.nbpStyle = buttonStyle;
        component.nbpType = buttonType;
        fixture.detectChanges();
        numberOfClick = 0;
    });
    it('should create the component', function () {
        expect(component).toBeTruthy();
    });
    it('should display the label', function () {
        elementInnerHtml = htmlElementInnerHtml('button > div > span');
        expect(elementInnerHtml).toEqual(buttonLabel);
    });
    it('should has "select" css classes', function () {
        actual = isHtmlElementContainsClasses('button', ['select']);
        expect(actual).toBe(true);
    });
    it('should has "btn button" css classes', function () {
        actual = isHtmlElementContainsClasses('button', ['btn', 'button']);
        expect(actual).toBe(true);
    });
    it('should has "outline" css class', function () {
        expectHtmlElementContainsClasses('button', ['outline']).toBe(true);
    });
    it('should be "enabled" when NbpButton hasn\'t the "disabled" property', function () {
        component.disabled = false;
        fixture.detectChanges();
        expectHtmlElementHaveAttribute('button', 'disabled').toBe(null);
    });
    it('should be "disabled" when NbpButton has the "disabled" property', function () {
        component.disabled = true;
        fixture.detectChanges();
        expectHtmlElementHaveAttribute('button', 'disabled').not.toBe(null);
    });
    it('should has "Large" size when NbpButton has nbpSize = "LG"', function () {
        buttonSize = NbpSize.LG;
        component.nbpSize = buttonSize;
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button', ['lg']);
        expect(actual).toBe(true);
    });
    it('should has "Default" size when NbpButton hasn\'t the nbpSize attribute', function () {
        buttonSize = NbpSize.MD;
        component.nbpSize = buttonSize;
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button', ['lg']);
        expect(actual).toBe(false);
    });
    it('should emit nbpClick event on button click', function () {
        expectHtmlElementEmitEventClick('button');
    });
    it('should be selected on first click', function () {
        expectHtmlElementAfterClickContainClass('button', ['on']).toBe(true);
    });
    it('should toggle selection on next clicks', function () {
        expectHtmlElementAfterSecondClickContainClass('button', ['on']).toBe(false);
    });
    it('should show the icon when NbpButton has nbpIcon attribute', function () {
        component.nbpIcon = buttonIcon;
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button > div > span', ['icon', 'button-icon', buttonIcon]);
        expect(actual).toBe(true);
    });
    it('shouldn\'t show the icon when NbpButton hasn\'t nbpIcon attribute', function () {
        fixture.detectChanges();
        actual = isHtmlElementContainsClasses('button > div > span', ['icon', 'button-icon', buttonIcon]);
        expect(actual).toBe(false);
    });
});
