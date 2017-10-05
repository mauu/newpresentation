import { Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
// Observable operators
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
var normalizeValidator = function (validator) {
    var func = validator.validate.bind(validator);
    if (typeof func === 'function') {
        return function (c) { return func(c); };
    }
    else {
        return validator;
    }
};
export var composeValidators = function (validators) {
    if (validators == null || validators.length === 0) {
        return null;
    }
    return Validators.compose(validators.map(normalizeValidator));
};
export var validate = function (validators, asyncValidators) {
    return function (control) {
        var synchronousValid = function () { return composeValidators(validators)(control); };
        if (asyncValidators) {
            var asyncValidator = composeValidators(asyncValidators);
            return asyncValidator(control).map(function (v) {
                var secondary = synchronousValid();
                if (secondary || v) {
                    return Object.assign({}, secondary, v);
                }
            });
        }
        if (validators) {
            return Observable.of(synchronousValid());
        }
        return Observable.of(null);
    };
};
/**
 * message list for standard validation error
 */
export var message = function (validator, key) {
    switch (key) {
        case 'required':
            return 'Campo obbligatorio';
        case 'pattern':
            return 'Campo non valido';
        case 'minlength':
            return 'Il campo non rispetta la lunghezza minima';
        case 'maxlength':
            return 'Il campo non rispetta la lunghezza massima';
    }
    switch (typeof validator[key]) {
        case 'string':
            return validator[key];
        default:
            return "Validazione fallita: " + key;
    }
};
