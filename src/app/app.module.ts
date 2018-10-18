import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TarefasComponent } from './tarefas.component';
import { TarefaComponent } from './tarefa.component';
import { ProjetosComponent } from './projetos.component';
import { HomeComponent } from './home.component';
import { RodapeComponent } from './rodape.component';
import { TopoComponent } from './header.component';

import { ProjetosService } from './projetos.service';
import { TarefasService } from './tarefas.service';

import { AppRouting } from './app-routing';


import { FormSimplesComponent } from './formularios/simples.component';

@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent,
    TarefaComponent,
    ProjetosComponent,
    RodapeComponent,
    TopoComponent,
    HomeComponent,
    FormSimplesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting
  ],
  providers: [
    ProjetosService,
    TarefasService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
