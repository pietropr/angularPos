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
		    background: #8a2be2 !important;
			border: none;
			padding: 5px 30px;
			color: white;
		}

	`]
})

export class FormSimplesComponent {
	nome: string = "";
	enviar(n) {
		// HTMLINput... Converte o valor para um html
		this.nome = n;
	}
}