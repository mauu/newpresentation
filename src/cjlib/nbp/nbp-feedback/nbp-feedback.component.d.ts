import { OnInit, EventEmitter } from '@angular/core';
import { NbpFeedbackType } from './nbp-feedback.enums';
import { INbpButton, INbpButtonLib } from './../nbp-commons/nbp-commons.interface';
export declare class NbpFeedbackComponent implements OnInit {
    nbpTitle: string;
    nbpErrorCode: string;
    nbpMainMessage: string;
    nbpBoxMessage: string;
    nbpButtons: Array<INbpButton>;
    nbpFeedbackType: NbpFeedbackType;
    _shadowButtons: Array<INbpButtonLib>;
    nbpOnButtonClick: EventEmitter<INbpButton>;
    constructor();
    ngOnInit(): void;
    private _evaluateShadowedButtons();
    private _populateButtonStyles();
    _isSuccess(): boolean;
    _isWarning(): boolean;
    _isError(): boolean;
    _onFeedbackButtonClick(button: INbpButton): void;
}
