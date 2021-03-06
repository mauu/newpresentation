# Note Generali

> La libreria NBP è formata da un insieme di componenti Angular custom che integrano ed estendono i tag HTML5 standard, facilitandone l’utilizzo e il rispetto delle Visual Interaction GuideLines della New Banking Platform.

La presente sezione riassume i criteri di design e requisiti generali comuni a tutti i componenti descritti nel dettaglio nelle sezioni successive.


## Criteri di design
 * Separazione delle responsabilità
    * ogni componente deve realizzare una responsabilità / funzione specifica, ed eventuali componenti / comportamenti complessi devono essere ottenuti componendo componenti elementari
  * in particolare, viene rispettata una separazione netta tra 
    * componenti stateless, responsabili solo di visualizzare dati e raccogliere l’input utente
    * componenti stateful, in grado di mantenere uno stato applicativo e se necessario di comunicare con il backend
  * Convenzione sui nomi di attributi e metodi

## Requisiti comuni
I componenti saranno implementati in TypeScript 2.2.0, ed esporteranno le corrispondenti Type Definitions. 

I componenti di input custom devono integrarsi con la API per le Template Driven Forms (contenuta nel modulo FormsModule), ed in particolare con la direttiva ngModel, tramite l’implementazione dell’interfaccia ControlValueAccessor.

## Validazione
I componenti pubblicano lo stato di validazione verso l’API ngForm. 

Componente Container - TODO

In generale tutti i componenti / il componente NbpInputContainer supporta una proprietà nbpShowValidation per definire se/quando mostrare all’utente lo stato di validazione, ad esempio solo alla pressione di un pulsante di conferma. 

Tale proprietà può anche essere definita a livello di NbpForm, e di conseguenza ereditata da tutti i controlli contenuti nella form stessa.

## Documentazione

La documentazione di dettaglio dell’API e comportamento dei componenti verrà prodotta in maniera automatizzata durante la build tramite la libreria CompoDoc (https://compodoc.github.io/website/).

Nella documentazione di dettaglio  saranno indicati anche le interfacce TypeScript dei tipi complessi utilizzati dai componenti.

## Librerie terze parti integrate
A livello di CSS la libreria NBP si appoggia agli stili della libreria Bootstrap 3.x o 4.x

A livello di funzionalità e componenti base, ng-bootstrap? 


## Come usare le libreria
Al momento non è ancora pubblòicato su repository il pacchetto NPM di distribuzione della libreria, quindi i passi da seguire per installare e utilizzare al libreria sono i seguenti.

### Scaricare il progetto cjlib dal repository InfoGroup, compilare la libreria con il comando:

```
  gulp build:release
```

### Creare un nuovo progetto ad esempio utilizzando angular Cli:

```
  ng new testApp
```

### Aprire il file package.json e aggiungere la '<i>dependency</i>' della libreria **cjlib** come segue:

```json
 {
  "name": "test-app",
  "version": "0.0.1",
  "license": "MIT",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    ...
    
    "cjlib": "file:../cjlib/dist/cjlib"
  },
```

### Aggiornare i pacchetti **npm** del nuovo progetto testApp

``` 
 npm install
```

<br />
**NOTA**: Dal momento che la libreria non è un pacchetto npm per essere certi di utilizzare l'ultima versione della libreria conviene eliminare fisicamente la cartella <i>cjlib</i> da node_modules del progetto **testApp**.

<br />
### Aprire il file **styles.css** ed aggiungere il seguente import
```css
/* You can add global styles to this file, and also import other style files */
@import "~cjlib/assets/styles/styles.css";
...
```
<br />

**NOTA**: Gli import vanno inseriti nello stesso ordine e devono essere i primi.

<br />
### Aprire il file **angular.cli.json** cercare la proprietà "<i>assets</i>" ed aggiungere quanto segue:
```json
  { "glob": "**/*", "input": "../node_modules/cjlib/assets/images", "output": "./cjlib/assets/images" }
```
<br />

### Aprire il file **app.modules.ts** e importare la libreria <i>cjlib</i>

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CjLibModule } from 'cjlib'; 

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CjLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```


 