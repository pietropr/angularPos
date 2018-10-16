import { Component } from '@angular/core';

@Component({
	selector: 'tarefas',
	templateUrl: './tarefas.component.html'
})
export class TarefasComponent {
	tarefas: string[];

	constructor() {
		this.tarefas = [
			'Comprar Leite',
			'Pagar a conta de luz',
			'Consertar a cafeteira',
			'Dormir'
		]
	}
}