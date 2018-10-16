import { Component } from '@angular/core';

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
	tarefas: string[];
	n: number = 0;
	incrementa() {
		this.n++;
	}
	zerar() {
		this.n = 0;
	}
	
	constructor() {
		this.tarefas = [
			'Comprar Leite',
			'Pagar a conta de luz',
			'Consertar a cafeteira',
			'Dormir'
		]
	}
}