import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NbpCustomerInfoComponent } from './nbp-customer-info.component';
var clientInfo = {
    intestazione: 'Rossi Sonia',
    nsg: '987654321',
    gestore: 'Valentino Rossi'
};
var component;
var fixture;
var debug;
var elem;
describe('Testing NbpCustomerInfo Component', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NbpCustomerInfoComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NbpCustomerInfoComponent);
        component = fixture.componentInstance;
        component.nbpCustomer = clientInfo;
        fixture.detectChanges();
        debug = fixture.debugElement.queryAll(By.css('.testo-ident-cliente'));
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
    describe('when it is closed', function () {
        it('should display the client name', function () {
            elem = debug[0].nativeElement;
            expect(elem.innerHTML).toEqual(clientInfo.intestazione);
        });
        it('should display the nsg info', function () {
            elem = debug[1].nativeElement;
            expect(elem.innerHTML).toEqual(clientInfo.nsg);
        });
        it('should display the gestore info', function () {
            elem = debug[2].nativeElement;
            expect(elem.innerHTML).toEqual(clientInfo.gestore);
        });
        it('shouldn\'t display the accordion', function () {
            elem = fixture.debugElement.query(By.css('.info-cliente-open')).nativeElement;
            expect(elem.hidden).toEqual(true);
        });
        it('should open the accordion when click on the arrow element', function () {
            elem = fixture.debugElement.query(By.css('.accordion-arrow')).nativeElement;
            elem.click();
            fixture.detectChanges();
            expect(elem.classList.contains('ico-comuni-freccia-accordion-chiudi')).toEqual(true);
        });
        it('should close the accordion when click twice on the arrow element', function () {
            elem = fixture.debugElement.query(By.css('.accordion-arrow')).nativeElement;
            elem.click();
            elem.click();
            fixture.detectChanges();
            expect(elem.classList.contains('ico-comuni-freccia-accordion-apri')).toEqual(true);
        });
    });
    describe('when it is opened', function () {
        beforeEach(function () {
            fixture.debugElement.query(By.css('.accordion-arrow')).nativeElement.click();
            fixture.detectChanges();
        });
        it('should display the client name', function () {
            elem = debug[0].nativeElement;
            expect(elem.innerHTML).toEqual(clientInfo.intestazione);
        });
        it('should display the nsg info', function () {
            elem = debug[1].nativeElement;
            expect(elem.innerHTML).toEqual(clientInfo.nsg);
        });
        it('should display the gestore info', function () {
            elem = debug[2].nativeElement;
            expect(elem.innerHTML).toEqual(clientInfo.gestore);
        });
        it('should display the accordion', function () {
            elem = fixture.debugElement.query(By.css('.info-cliente-open')).nativeElement;
            expect(elem.hidden).toEqual(false);
        });
        it('should close the accordion when click on the arrow element', function () {
            elem = fixture.debugElement.query(By.css('.accordion-arrow')).nativeElement;
            elem.click();
            fixture.detectChanges();
            expect(elem.classList.contains('ico-comuni-freccia-accordion-apri')).toEqual(true);
        });
        it('should open the accordion when click twice on the arrow element', function () {
            elem = fixture.debugElement.query(By.css('.accordion-arrow')).nativeElement;
            elem.click();
            elem.click();
            fixture.detectChanges();
            expect(elem.classList.contains('ico-comuni-freccia-accordion-chiudi')).toEqual(true);
        });
        it('should show all the client information inside the accordion', function () {
            debug = fixture.debugElement.queryAll(By.css('.panel-body>span'));
            expect(debug[1].nativeElement.innerHTML).toEqual(clientInfo.intestazione);
            expect(debug[3].nativeElement.innerHTML).toEqual(clientInfo.nsg);
            expect(debug[5].nativeElement.innerHTML).toEqual(clientInfo.gestore);
        });
    });
});
