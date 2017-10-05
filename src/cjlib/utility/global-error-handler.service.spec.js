import { TestBed, inject } from '@angular/core/testing';
import { GlobalErrorHandlerService } from './global-error-handler.service';
describe('GlobalErrorHandlerService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [GlobalErrorHandlerService]
        });
    });
    it('should be created', inject([GlobalErrorHandlerService], function (service) {
        expect(service).toBeTruthy();
    }));
});
