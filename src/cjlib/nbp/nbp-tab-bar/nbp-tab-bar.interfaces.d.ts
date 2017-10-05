/**
 * Interfaccia che descrive l'aspetto
 * di una scheda nel componente
 * ITabItem
 */
export interface ITabItem<T> {
    /**
     * Titolo da visualizzare nella scheda
     */
    title: String;
    /**
     * Icona da visualizzare nella scheda (classe css)
     */
    icon: String;
    /**
     * Eventuali dati aggiuntivi associati al tab
     */
    additionalValues?: T;
}
