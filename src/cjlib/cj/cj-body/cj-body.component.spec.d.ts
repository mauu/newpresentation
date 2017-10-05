import { Observable } from 'rxjs/Observable';
import { ICjContext } from './../cj-context/cj-context.interfaces';
import { CjBodyComponent } from './cj-body.component';
import { ICjContextLibService } from './../cj-context/cj-context.service';
export declare class CjContextServiceMock implements ICjContextLibService {
    private _contextInfo;
    private _token;
    constructor();
    getCjContextByToken(token: string): Observable<ICjContext>;
    getCurrentCjContext(): Observable<ICjContext>;
    setCurrentCjContext(cjContext: ICjContext): void;
    getCurrentToken(): string;
    createNewCjContext(ndg: string, application: string, canale: string): Observable<ICjContext>;
}
export declare class TestHostComponent {
    title: string;
    token: string;
    paramName: string;
    context: ICjContext;
    innerCjBody: CjBodyComponent;
    memorizzaContesto(contesto: ICjContext): void;
}
