import { Component } from '@angular/core';

@Component({
	selector: 'form-simples',
	templateUrl: './simples.html',
	styles: [`

		.formulario .campo label {
			display: block;
		}
		.formulario .campo input:not([type=submit]) {
			height: 25px;
			margin-bottom: 5px;
		}

		button {
			padding: 5px 30px;
			background: #666 !important;
			color: white;
		}

	`]
})

export class FormSimplesComponent {
	nome: string = "";
	enviar() {
		this.nome = <HTMPInputElement>document.querySelector('input').value;
	}
}