import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [

  	`.content {

  		padding: 0 20px;
  		margin-top: 100px !important;
  		max-width: 1170px !important;
  		width: 100%;
  		margin-left: auto !important;
  		margin-right: auto !important;

  	}` 

  ]
})
export class AppComponent {
  title = 'Meu Aplicativo';
}
