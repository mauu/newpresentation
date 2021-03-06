/**
 * Definizione della struttura dati degli step del componente NbpProgress
 * per ogni elemento (step) indica
 * active - indica se lo step corrente è attivo
 * fillPercent - indica il valore di riempmento dello step
 * label - label inserita sotto lo step
 */
export interface INbpProgressConfiguration {
    active: boolean;
    fillPercent: number;
    label: string;
}
