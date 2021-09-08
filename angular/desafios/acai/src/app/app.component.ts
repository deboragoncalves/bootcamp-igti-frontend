import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titleSize: string;
  titleTastes: string;
  subtitleTastes: string;

  sizesList: Array<string>;
  tastesList: Array<string>;  
 
  ngOnInit() {
    this.titleSize = "Tamanho";
    this.titleTastes = "Acréscimos";
    this.subtitleTastes = "Escolha até 3";
    this.sizesList = ["300ml", "500ml"];
    this.tastesList = ["Leite condensado", "Banana", "Granola", "Morango", "Leite em pó", "Côco", "Castanha de cajú"];
  }
}
