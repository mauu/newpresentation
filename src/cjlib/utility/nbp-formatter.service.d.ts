import { NbpPipe } from './../nbp/nbp-commons/nbp-commons.enums';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
export declare class NbpFormatterService {
    private currencyPipe;
    private datePipe;
    private decimalPipe;
    private lowercasePipe;
    private percentPipe;
    private uppercasePipe;
    constructor(currencyPipe: CurrencyPipe, datePipe: DatePipe, decimalPipe: DecimalPipe, lowercasePipe: LowerCasePipe, percentPipe: PercentPipe, uppercasePipe: UpperCasePipe);
    displayValueTransformation(value: any, pipe: NbpPipe, arg?: any): any;
}
