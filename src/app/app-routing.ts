import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetosComponent } from './projetos.component';
import { TarefasComponent } from './tarefas.component';
import { TarefaComponent } from './tarefa.component';
import { HomeComponent } from './home.component';

const rotas: Routes = [
	{path: '', component: HomeComponent},
	{path: 'projetos', component: ProjetosComponent},
	{path: 'tarefas', component: TarefasComponent},
	{path: 'tarefa/:id', component: TarefaComponent}
]

@NgModule({
	imports: [RouterModule.forRoot(rotas)],
	exports: [RouterModule]
})

export class AppRouting { } 