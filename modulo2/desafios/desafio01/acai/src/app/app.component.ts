import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleSize: string = "Tamanho";
  titleAdd: string = "Acréscimos";
  subtitleAdd: string = "Escolha até 3";

  sizesList: Array<string> = ["300ml", "500ml"];
  tastesList: Array<string> = ["Leite condensado", "Banana", "Granola", "Morango", "Leite em pó", "Côco", "Castanha de cajú"];  
  
}
