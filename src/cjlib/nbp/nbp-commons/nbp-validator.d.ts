import { AbstractControl, AsyncValidatorFn, Validator, ValidatorFn } from '@angular/forms';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
/**
 * Type alias for Map<K, V>
 * key = validator name
 * value = result
 * @type { Map<string, string | boolean }
 */
export declare type ValidationResult = {
    [validator: string]: string | boolean;
};
/**
 * Type alias for async validator's array
 * @type { Array<Validator | AsyncValidatorFn> }
 */
export declare type AsyncValidatorArray = Array<Validator | AsyncValidatorFn>;
/**
 * Type alias for async validator's array
 * @type  Array<Validator | ValidatorFn>
 */
export declare type ValidatorArray = Array<Validator | ValidatorFn>;
export declare const composeValidators: (validators: (Validator | ValidatorFn)[]) => ValidatorFn | AsyncValidatorFn;
export declare const validate: (validators: (Validator | ValidatorFn)[], asyncValidators: (Validator | AsyncValidatorFn)[]) => (control: AbstractControl) => any;
/**
 * message list for standard validation error
 */
export declare const message: (validator: ValidationResult, key: string) => string;
