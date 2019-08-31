import { Component } from '@angular/core';
import { noComponentFactoryError } from '@angular/core/src/linker/component_factory_resolver';

@Component({
  selector: 'has-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  peso:number
  altura:number
  icon = 'favicon.ico';
  

  exibir(): void {
    let imc = this.peso / (Math.pow(this.altura, 2));
    alert(`IMC: ${imc.toFixed(1)}`);
  }

}
