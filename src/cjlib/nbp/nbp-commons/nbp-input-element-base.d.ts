import { NgModel } from '@angular/forms';
import { NbpValueAccessorBase } from './nbp-value-accessor';
import { AsyncValidatorArray, ValidatorArray, ValidationResult } from './nbp-validator';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
/**
 *  Provides observable values to its parent about its validity state.
 *  Each element will need to know its validity state for rendering purposes.
 */
export declare abstract class NbpInputElementBase<T> extends NbpValueAccessorBase<T> {
    private validators;
    private asyncValidators;
    protected abstract model: NgModel;
    constructor(validators: ValidatorArray, asyncValidators: AsyncValidatorArray);
    /**
     * Can be used in the control and it works off of validators
     * injected through hierarchical dependency injection
     * (eg. a required or minlength directive).
     * @return {Observable<ValidationResult>} result of validation chain
     */
    protected validate(): Observable<ValidationResult>;
    /**
     * Array of validator
     * @return Observable<boolean>
     */
    protected readonly invalid: Observable<boolean>;
    /**
     * Array of validation error messages
     * @return { Observable<Array<string>> }
     */
    protected readonly failures: Observable<Array<string>>;
}
