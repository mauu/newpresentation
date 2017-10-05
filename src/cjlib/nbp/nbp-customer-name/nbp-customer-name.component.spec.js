import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NbpCustomerNameComponent } from './nbp-customer-name.component';
var clientName = {
    intestazione: 'Rossi Sonia'
};
var component;
var fixture;
var debug;
var elem;
describe('Testing the NbpCustomerName Component', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NbpCustomerNameComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NbpCustomerNameComponent);
        component = fixture.componentInstance;
        component.nbpCustomer = clientName.intestazione;
        fixture.detectChanges();
        debug = fixture.debugElement.query(By.css('.nome-cliente'));
        elem = debug.nativeElement;
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
    it('should display the client name', function () {
        expect(elem.innerHTML).toEqual(clientName.intestazione);
    });
});
