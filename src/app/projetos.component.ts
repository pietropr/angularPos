import { Component } from '@angular/core';

@Component({
	selector: 'projetos',
	templateUrl: './projetos.html'
})

export class ProjetosComponent {

	projetos: any = [

		{
			codigo: 1,
			nome: 'Casa'
		},
		{
			codigo: 2,
			nome: 'Trabalho'
		}
	];
}