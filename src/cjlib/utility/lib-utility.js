/** Coerces a data-bound value (typically a string) to a boolean. */
/** Coerces a data-bound value (typically a string) to a boolean. */ export function coerceBooleanProperty(value) {
    return value != null && "" + value !== 'false';
}
export function getPropertyValueByPath(obj, stringPath) {
    return stringPath.split('.').reduce(function (objectPartialData, property) { return objectPartialData[property]; }, obj);
}
