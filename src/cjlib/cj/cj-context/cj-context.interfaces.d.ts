/**
 * Struttura dati relativa al contesto applicativo
 */
export interface ICjContext {
    id: string;
    application: string;
    environment: string;
    operatore: IOperatore;
    cliente: ICliente;
    canale: string;
}
/**
 * struttura dati contenente le informazioni dell'operatore collegato all'applicativo
 */
export interface IOperatore {
    abi: string;
    nome: string;
    cognome: string;
    filiale: string;
    ruoli: string[];
    userId: string;
}
/**
 * Struttura dati contenete le informazioni del cliente per cui l'operatore sta lavornado
 */
export interface ICliente {
    cellulare: string;
    codAzienda: string;
    codiceFiscale: string;
    codiceUic: string;
    eMail: string;
    fax: string;
    indirizzo: string;
    intestazione: string;
    ndg: string;
    partitaIva: string;
    provincia: string;
    ramo: string;
    tipoNDG: string;
    telefono: string;
    settore: string;
    rapporti: IRapporto[];
}
/**
 * Struttura dati ....
 */
export interface IRapporto {
    tipo: string;
    dettaglio: string;
    formaTecnica: string;
    stato: string;
}
