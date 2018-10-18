import { Component } from '@angular/core';
import { Tarefa, TarefasService } from './tarefas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'tarefa',
	templateUrl: 'tarefa.html',
	styleUrls: ['tarefa.css']
})

export class TarefaComponent {

	tarefa: any = Tarefa;

	constructor(public ts: TarefasService, public rs: ActivatedRoute) {
		const id: number = this.rs.snapshot.paramMap.get('id');
		this.tarefa = this.ts.getTarefa(id);
	}
}