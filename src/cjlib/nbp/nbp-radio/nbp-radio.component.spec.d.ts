import { NbpRadioComponent } from './nbp-radio.component';
import { NgForm } from '@angular/forms';
export declare class TestHostComponent {
    inputName: string;
    model: {
        name: string;
        selection: string;
    };
    nbpDisplayInline: boolean;
    nbpYellowBorder: boolean;
    disabled: boolean;
    innerInputText: NbpRadioComponent;
    radioForm: NgForm;
}
