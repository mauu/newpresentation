import { NbpStyle } from './nbp-commons.enums';
import { Observable } from 'rxjs/Observable';
/**
 * Interfaccia per il componente di input text
 */
export interface INbpInput {
    name: string;
    id: string;
    nbpShowValidation: boolean;
    pattern?: RegExp;
    disabled: boolean;
    placeholder: string;
    nbpRoundBorder?: boolean;
    nbpHighlightedDefault?: boolean;
    nbpFormat?: string;
    nbpIcon?: string;
    nbpErrorMessage: string;
    required: boolean;
    invalid: Observable<boolean>;
}
/**
 * struttura che identifica il cliente
 */
export interface INbpHeaderCustomer {
    intestazione: string;
    nsg?: string;
    gestore?: string;
}
export interface INbpButton {
    id: string;
    label: string;
    disabled: boolean;
    visible: boolean;
    style: NbpStyle;
    icon?: string;
}
export interface INbpButtonLib extends INbpButton {
    layout?: string;
}
export interface INbpLoadingStatus {
    id: string;
    status: boolean;
}
