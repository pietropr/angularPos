import { Component } from '@angular/core';

@Component({
	selector: 'topo',
	templateUrl: './header.html',
	styles: [`

		nav {
			position: fixed;
			left: 0;
			top: 0;
			width: 100%;
			background: #8a2be2;
		}
		nav ul {
			list-style: none;
			display: flex;
		}
		nav ul li {
			margin-left: 10px;
			color: white;
		}

	`]
})

export class TopoComponent { }