import { Component } from '@angular/core';
import { Tarefa, TarefasService } from './tarefas.service';
import { Projeto, ProjetosService } from './projetos.service';

@Component({
	selector: 'tarefas',
	templateUrl: './tarefas.component.html',
	styles: [

	`

		button {
		    border-radius: 0;
		    padding: 5px 20px;
		    font-weight: 700;
		    color: #fff;
		    box-shadow: none;
		    border: 0;
		    background: #8a2be2;
		    cursor: pointer;
		    margin-right: 20px;	
		}

	`

	]
})
export class TarefasComponent {
	tarefas: Tarefa[] = [];
	projetos: Projeto[] = [];

	n: number = 0;
	incrementa() {
		
		if(this.n >= 20) {
			window.alert('Chegou ao limite');
		
			return false;
		}
		else {
			this.n++;
		}
	}
	zerar() {
		this.n = 0;
	};

	constructor(public ts: TarefasService, public ps: ProjetosService) {
		this.tarefas = ts.getTarefas();
		this.projetos = ps.getProjetos();
	}

	nomeProjeto(cp: number) : string {
		for (var i = 0; i <  this.projetos.length; i++) {
			if(this.projetos[i].codigo == cp) {
				return this.projetos[i].projeto;
			}
		}
	}
}