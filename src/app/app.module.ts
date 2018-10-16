import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TarefasComponent } from './tarefas.component';
import { RodapeComponent } from './rodape.component';
import { TopoComponent } from './header.component';

import { FormSimplesComponent } from './formularios/simples.component';

@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent,
    RodapeComponent,
    TopoComponent,
    FormSimplesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
