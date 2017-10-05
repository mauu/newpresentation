import { NbpFeedbackComponent } from './nbp-feedback.component';
import { INbpButton } from './../nbp-commons/nbp-commons.interface';
export interface FeedbackInfo {
    title: string;
    mainMessage: string;
    boxMessage: string;
    errorMessage: string;
    feedbackType: any;
    buttons: Array<INbpButton>;
    onButtonClick: (button: INbpButton) => void;
}
export declare class TestHostComponent {
    clickedButtonId: string;
    feedbackInfo: FeedbackInfo;
    innerFeedbackComponent: NbpFeedbackComponent;
}
