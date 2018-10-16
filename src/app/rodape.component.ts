import { Component } from '@angular/core';

@Component({
	selector: 'rodape',
	templateUrl: './rodape.html',
	styles: [`
	small  {
		left: 0;
		position: fixed;
		bottom: 0;
		width: 100%;
		background: #8a2be2;
	    color: #fff;
    	text-align: center;
    	display: block;
    	padding: 5px;
	}
   
	`]
})
export class RodapeComponent {
	ano: number;
	autor: string;


	constructor() {

		let data = new Date();
		let dataAno = parseInt(data.getFullYear()) + 1;

		this.ano = dataAno;
		this.autor = 'Pietro Pinton Rosa';
	}
}