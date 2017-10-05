import { OnInit, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { ICjPrivacy } from './cj-privacy.interfaces';
import { INbpButton } from '../../nbp/nbp-commons/nbp-commons.interface';
export declare class CjPrivacyFormComponent implements OnInit, OnChanges {
    /**
     * struttura dati contenente le informazioni sui consensi
     */
    cjPrivacy: ICjPrivacy;
    /**
     * Evento emesso al click sul pulsante 'Stampa'
     * @param {EventEmitter<ICjPrivacy>}  cjOnStampa
     */
    cjOnStampa: EventEmitter<ICjPrivacy>;
    /**
     * Evento emesso al click sul pulsante 'Continua'
     * @param {EventEmitter<ICjPrivacy>}  cjOnContinua
     */
    cjOnContinua: EventEmitter<ICjPrivacy>;
    /**
     * Evento emesso al click sul pulsante 'Annulla'
     * @param {EventEmitter<>}  cjOnAnnulla
     */
    cjOnAnnulla: EventEmitter<ICjPrivacy>;
    _buttonStyle: any;
    _privacy: ICjPrivacy;
    _privacyText: String;
    _modalPrivacyText: String;
    _modalPrivacyIsOpened: boolean;
    _modalPrivacyButton: Array<INbpButton>;
    _modalPrivacySize: any;
    _buttonAnnullaDisabled: boolean;
    _buttonStampaDisabled: boolean;
    _buttonConfermaDisabled: boolean;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    _updateButtonDisable(): void;
    _onClickAnnulla(privacy: ICjPrivacy): void;
    _onClickStampa(privacy: ICjPrivacy): void;
    _onClickContinua(privacy: ICjPrivacy): void;
    _modalPrivacyOnOk(event: Event): void;
}
