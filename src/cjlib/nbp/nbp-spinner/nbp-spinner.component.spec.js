import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NbpSpinnerComponent } from './nbp-spinner.component';
var debug;
var component;
var fixture;
var elem;
var currentValue;
var minimum = 1;
var maximum = 100;
function htmlElement(cssSelector) {
    debug = fixture.debugElement.query(By.css(cssSelector));
    return debug.nativeElement;
}
;
function expectHtmlElementHaveAttribute(cssSelector, attributeName) {
    elem = htmlElement(cssSelector);
    return expect(elem.attributes.getNamedItem(attributeName));
}
;
describe('Test NbpSpinnerComponent', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [NbpSpinnerComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NbpSpinnerComponent);
        component = fixture.componentInstance;
        component.min = minimum;
        component.max = maximum;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
    it('should increment the value when the right button is clicked', function () {
        currentValue = 5;
        component.value = currentValue;
        elem = htmlElement('button.right');
        elem.click();
        fixture.detectChanges();
        expect(component.value).toBe(currentValue + 1);
    });
    it('should decrement the value when the left button is clicked', function () {
        currentValue = 5;
        component.value = currentValue;
        elem = htmlElement('button.left');
        elem.click();
        fixture.detectChanges();
        expect(component.value).toBe(currentValue - 1);
    });
    it('should disable the left button when value is minimum value', function () {
        component.value = minimum + 1;
        elem = htmlElement('button.left');
        elem.click();
        fixture.detectChanges();
        expectHtmlElementHaveAttribute('button.left', 'disabled').not.toBe(null);
    });
    it('should disable the right button when value is maximum value', function () {
        component.value = maximum - 1;
        elem = htmlElement('button.right');
        elem.click();
        fixture.detectChanges();
        expectHtmlElementHaveAttribute('button.right', 'disabled').not.toBe(null);
    });
});
