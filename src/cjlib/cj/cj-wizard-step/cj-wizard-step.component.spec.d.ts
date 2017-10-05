import { CjWizardComponent } from './../cj-wizard/cj-wizard.component';
import { Observable } from 'rxjs/Observable';
import { ICjWizardState, ICjWizardDataContainer } from './../cj-wizard/cj-wizard.interfaces';
import { CjWizardStepComponent } from './../cj-wizard-step/cj-wizard-step.component';
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
export interface CustomContextPosRequest {
    payload: WizardPosRequest;
}
export declare const CONTEXT: CustomContextPosRequest;
export declare class PosWizardContainer implements ICjWizardDataContainer<PosRequest> {
    data: PosRequest;
    getWizardData(): PosRequest;
    setWizardData(data: PosRequest): void;
}
export declare class CjCustomContextServiceMock<PosRequest> {
    getCustomContextByTokenAndKey(key: string): Observable<CustomContextPosRequest>;
}
export declare class TestHostComponent {
    configuration: {
        id: string;
        name: string;
    };
    currentState: {
        id: string;
        currentStepId: string;
        currentPageId: string;
    };
    showPage: boolean;
    private _cjData;
    cjData: PosRequest;
    dataContainer: PosWizardContainer;
    data: PosRequest;
    innerWizard: CjWizardComponent<PosRequest>;
    innerWizardStep: CjWizardStepComponent<PosRequest>;
    constructor();
}
