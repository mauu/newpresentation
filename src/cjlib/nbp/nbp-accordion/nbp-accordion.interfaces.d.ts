import { NbpAccordionComponent } from './nbp-accordion.component';
/**
 * Metodo pubblici esposti dal componente.
 */
export interface INbpAccordion {
    open: Function;
    close: Function;
    isCollapsed: Function;
}
/**
 * Evento custom emesso dal componente NbpAccordion
 * sull'operazione di toggle
 */
export declare class NbpAccordionEvent {
    /** The source NbpAccordion of the event. */
    source: NbpAccordionComponent;
    /** The new isCollapsed value of the accordion.  */
    isCollapsed: boolean;
}
