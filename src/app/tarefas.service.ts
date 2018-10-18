import { Injectable } from '@angular/core';

export class Tarefa {
	codigo: number;
	tarefa: string;
	data: Date;
	prioridade: number;
	codigoProjeto: number;

}
@Injectable()
export class TarefasService {
	tarefas: Tarefa[] = [
		{
			codigo: 1,
			tarefa: 'Comprar Leite',
			data: new Date(2018,2,15),
			prioridade: 1,
			codigoProjeto: 2
		},
		{
			codigo: 2,
			tarefa: 'Comprar Feijão',
			data: new Date(2018,2,24),
			prioridade: 2,
			codigoProjeto: 1
		},
		{
			codigo: 3,
			tarefa: 'Consertar a cafeteira',
			data: new Date(2018,2,24),
			prioridade: 3,
			codigoProjeto: 2
		},
		{
			codigo: 4,
			tarefa: 'Torcer pro corinthians',
			data: new Date(2018,2,24),
			prioridade: 3,
			codigoProjeto: 1
		}
	];

	getTarefas(): Tarefa[] {
		return this.tarefas;
	}

	getTarefa(n: number) {
		for (var i = 0; i < this.tarefas.length; i++) {
			if(this.tarefas[i].codigo == n) {
				return this.tarefas[i];
			}
		}
	}
}