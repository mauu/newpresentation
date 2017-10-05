import { NbpPipe } from './../nbp-commons/nbp-commons.enums';
import { NbpDataSource } from './../nbp-datasource/nbp-datasource.service';
import { NbpComboComponent } from './nbp-combo.component';
export declare class NbpFormatterServiceMock {
    constructor();
    displayValueTransformation(value: any, pipe: NbpPipe, arg?: any): any;
}
export declare class TestHostComponent {
    items: string[];
    itemsDataSource: NbpDataSource<string>;
    selectedItem: string;
    inputDisabled: boolean;
    inputRequired: boolean;
    showEmptyValue: boolean;
    placeholder: string;
    highlightedDefault: boolean;
    itemSelectFromEvent: string;
    innerInputText: NbpComboComponent<string>;
    onItemSelect(item: string): void;
}
