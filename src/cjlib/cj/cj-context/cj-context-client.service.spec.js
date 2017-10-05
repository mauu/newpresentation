// import { TestBed, inject, async } from '@angular/core/testing';
// import { InjectionToken } from '@angular/core';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { Response, ResponseOptions, ResponseType } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import { ICjContext } from './cj-context.interfaces';
// import { APP_CONFIG, ApplicationConfig } from './../../module.config';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// import { CjContextClientService } from './cj-context-client.service';
// import { CONTEXT } from './../cj-context/mock-cj-context';
// export class DemoAppConfigService implements ApplicationConfig {
//   getSessionManagerBaseUrl(): Observable<string> {
//     return Observable.of('./assets/data/npu-sm-v0/api/');
//   }
// }
// describe('Testing CjContextClient Service', () => {
//   let serviceContextClient: CjContextClientService;
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientModule],
//       providers: [
//         CjContextClientService,
//         RestHelper,
//         { provide: APP_CONFIG, useClass: DemoAppConfigService },
//         InjectionToken,
//       ]
//     });
//   }));
//   beforeEach ( async() => {
//     serviceContextClient = TestBed.get(CjContextClientService);
//   });
//   it('should be defined', () => {
//     expect(serviceContextClient).toBeDefined();
//   });
//   describe('When I invoke the getCjContext', () => {
//     let http: HttpClient;
//     beforeEach( inject([HttpClient], (serviceHttp: HttpClient) => {
//       http = serviceHttp;
//     }));
//     it('should call the remote service', () => {
//       spyOn(http, 'get').and.callThrough();
//       serviceContextClient.getCjContext('tokenMock');
//       expect(http.get).toHaveBeenCalled();
//     });
//   });
//   // TODO AGGIUSTARE TEST
//   xdescribe('And the remote service reply with context mock data ', () => {
//     beforeEach(inject([HttpClient], (http: HttpClient) => {
//       let response = new Response(new ResponseOptions({ body: JSON.stringify(CONTEXT) }));
//       let observableOfResponse = Observable.of(response);
//       spyOn(http, 'get').and.returnValue(observableOfResponse);
//     }));
//     it('should receive the expected mocked data', () => {
//       serviceContextClient.getCjContext('tokenMock').subscribe((cjContext: ICjContext) => {
//         expect(cjContext).toEqual(CONTEXT);
//       });
//     });
//   });
//   xdescribe('And the remote service reply with defined Error message (status 500)', () => {
//     let body = {errorMsg: 'The server encountered an unexpected condition...'};
//     let options = new ResponseOptions({type: ResponseType.Error, statusText: 'KO', status: 404, body: {body}});
//     let spy: any;
//     let res = new Response(options);
//     beforeEach(inject([HttpClient], (http: HttpClient) => {
//       let observableOfErrorResponse = Observable.of(res);
//       spyOn(http, 'get').and.returnValue(observableOfErrorResponse);
//       spy = spyOn(serviceContextClient, 'handleError').and.callThrough();
//     }));
//     it('should be retrieve the error', () => {
//       serviceContextClient.getCjContext('tokenMock').subscribe((errorResponse ) => {
//            expect(body).toEqual(errorResponse);
//       });
//        expect(spy).toHaveBeenCalled();
//     });
//   });
// });
