import { TestCjWizardContextSource } from './../cj-wizard-context-source/cj-wizard-context-source.service';
import { CjCustomContextService } from './../cj-context/cj-custom-context.service';
import { ICjWizardContext } from './../cj-wizard/cj-wizard.interfaces';
import { CjWizardComponent } from './cj-wizard.component';
import { Observable } from 'rxjs/Observable';
import { ICjWizardState, ICjWizardPage, ICjWizardDataContainer } from './cj-wizard.interfaces';
export interface WizardPosRequest {
    id: string;
    state: ICjWizardState;
    data: PosRequest;
}
export interface PosRequest {
    ragioneSociale: string;
    quantita: number;
    autorizzazione: boolean;
}
export declare const CONTEXT: WizardPosRequest;
export declare class PosWizardContainer implements ICjWizardDataContainer<PosRequest> {
    data: PosRequest;
    getWizardData(): PosRequest;
    setWizardData(data: PosRequest): void;
}
export declare class CjCustomContextServiceMock {
    setCustomContextByTokenAndKey(key: string, data: WizardPosRequest): Observable<WizardPosRequest>;
    getCustomContextByTokenAndKey(key: string): Observable<WizardPosRequest>;
}
export declare class TestHostComponent {
    private contextService;
    configuration: {
        id: string;
        name: string;
    };
    currentState: {
        id: string;
        currentStepId: string;
        currentPageId: string;
        previousStepId: string;
        previousPageId: string;
    };
    data: PosRequest;
    showPaging: boolean;
    private _cjData;
    cjData: PosRequest;
    dataContainer: PosWizardContainer;
    innerWizard: CjWizardComponent<PosRequest>;
    wizardContextSource: TestCjWizardContextSource<PosRequest>;
    constructor(contextService: CjCustomContextService<ICjWizardContext<PosRequest>>);
    onPageEnter(page: ICjWizardPage): void;
    onPageLeave(page: ICjWizardPage): void;
    onUpdateComponent(componentName: any): void;
    onComplete(): void;
}
