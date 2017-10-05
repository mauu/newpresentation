// import { TestBed, inject, async } from '@angular/core/testing';
// import { InjectionToken } from '@angular/core';
// import { APP_CONFIG, ApplicationConfig } from './../../module.config';
// import { Observable } from 'rxjs/Observable';
// import { CjContextService } from './cj-context.service';
// import { CjContextClientService } from './cj-context-client.service';
// import { ICjContext } from './cj-context.interfaces';
// import { CONTEXT } from './../cj-context/mock-cj-context';
// import { RestHelper } from './../../utility/rest-helper.service';
// export class DemoAppConfigService implements ApplicationConfig {
//   getSessionManagerBaseUrl(): Observable<string> {
//     return Observable.of('./assets/data/npu-sm-v0/api/');
//   }
// }
// export class CjContextClientServiceMock  {
//   getCjContext(token: string): Observable<ICjContext> {
//     return Observable.of(CONTEXT);
//   }
// }
// describe('Testing CjContext Service', () => {
//   let service: CjContextService;
//   let serviceClient: CjContextClientService;
//   let spy: any;
//   let currentContext: Observable<ICjContext>;
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         CjContextService,
//         {
//           provide: CjContextClientService,
//           useClass: CjContextClientServiceMock
//         },
//         RestHelper,
//          { provide: APP_CONFIG, useClass: DemoAppConfigService },
//         InjectionToken,
//       ]
//     });
//   }));
//   beforeEach( inject([CjContextService, CjContextClientService],
//                      (contextService: CjContextService, contextServiceClient: CjContextClientService) => {
//     service =  contextService;
//     serviceClient = contextServiceClient;
//   }));
//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
//   describe('When there isn\'t a previous CjContext stored ', () => {
//     describe('And I invoke getCjContextByToken ', () => {
//       beforeEach( () => {
//         spy = spyOn(serviceClient, 'getCjContext').and.callThrough();
//         currentContext = service.getCjContextByToken('tokenMock');
//       });
//       it('should invoke the getCjContex method of the CjContextClientService', () => {
//         expect(spy).toHaveBeenCalled();
//       });
//       it('should return the right context passed by CJContextClientService ', () => {
//         expect(currentContext).toEqual(Observable.of(CONTEXT));
//       });
//     });
//   });
//   describe('When there is a previous CjContext stored ', () => {
//     let applicationContext: ICjContext;
//     beforeEach( () => {
//       spy = spyOn(serviceClient, 'getCjContext').and.callThrough();
//       currentContext = service.getCjContextByToken('tokenMock');
//       currentContext.subscribe((context: ICjContext) => {
//         applicationContext = context;
//         applicationContext._id.$oid = 'mockId123';
//         service.setCurrentCjContext(applicationContext);
//       });
//     });
//     describe('And I invoke getCjContextByToken ', () => {
//       beforeEach( () => {
//         currentContext = service.getCjContextByToken('tokenMock');
//       });
//       it('shouldn\'t invoke the getCjContex method of the CjContextClientService', () => {
//         expect(spy).toHaveBeenCalledTimes(1);
//       });
//       it('should return the context setted just now', () => {
//         let tokenMock: string;
//         service.getCjContextByToken(tokenMock).subscribe((context: ICjContext) => {
//           expect(context).not.toEqual(currentContext);
//           expect(context).toEqual(applicationContext);
//         });
//       });
//     });
//   });
// });
