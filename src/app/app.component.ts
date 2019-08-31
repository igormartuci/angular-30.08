import { Component } from '@angular/core';
import { noComponentFactoryError } from '@angular/core/src/linker/component_factory_resolver';

@Component({
  selector: 'has-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  peso = 70;
  altura = 1.70;
  icon = 'favicon.ico';
  imc = this.peso / (Math.pow(this.altura, 2));

  exibir(): void {
    alert(`IMC: ${this.imc.toFixed(1)}`);
  }
}
