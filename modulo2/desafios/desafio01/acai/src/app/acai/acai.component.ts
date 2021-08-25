import { Component, Input } from '@angular/core';

@Component({
  selector: 'acai',
  templateUrl: './acai.component.html',
  styleUrls: ['./acai.component.css']
})
export class AcaiComponent {

  @Input() titleSize: string;
  @Input() titleTastes: string;
  @Input() subtitleTastes: string;

  @Input() sizesList: Array<string> = new Array();
  @Input() tastesList: Array<string> = new Array();

  textInputsChecked: string = " ";

  inputsChecked: number = 0;

  inputChanged(checked: boolean) {
    if (checked) {
      this.inputsChecked++;
    } else {
      this.inputsChecked--;
    }

    if (this.inputsChecked == 1) {
      this.textInputsChecked = " (" + this.inputsChecked + " selecionado)";
    } else {
      this.textInputsChecked = " (" + this.inputsChecked + " selecionados)";
    }
  }
}
