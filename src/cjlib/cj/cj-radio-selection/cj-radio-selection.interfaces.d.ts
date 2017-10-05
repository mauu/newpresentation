/**
 * Struttura dati contenente la configurazione di selezione del radio button
 * label      - label del radio button
 * value      - identificativo del radio button
 * disabled   - booleano che indica se e' possibile effettuare la selezione sul radio button
 * hide       - booleano che indica se nascondere il radio button
 * icon       - (opzionale) icon visualizzata
 */
export interface ICjRadioStructure {
    label: string;
    value: string;
    disabled: boolean;
    hide: boolean;
    icon?: string;
}
/**
 * Struttura dati contenente le informazioni del cliente da visualizzare
 * info       - nome e cognome del cliente
 * circleInfo - iniziali del cliente da visualizzare nel circoletto in alto della prima sezione
 */
export interface ICjCustomerInfo {
    info: string;
    circleInfo: string;
}
