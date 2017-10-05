/**
 * Struttura dati utilizzabile per descrivere le icone
 */
export interface IIconStructure {
    icon?: string;
    hide?: boolean;
    tooltip?: ITooltipStructure;
}
/**
 * Struttura dati utilizzabile per descrivere i tooltip
 */
export interface ITooltipStructure {
    title?: string;
    text: string;
    clickableText?: string;
    onClick?: () => void;
}
