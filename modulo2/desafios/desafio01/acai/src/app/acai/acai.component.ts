import { Component, Input } from '@angular/core';

@Component({
  selector: 'acai',
  templateUrl: './acai.component.html',
  styleUrls: ['./acai.component.css']
})
export class AcaiComponent {

  @Input() titleSize: string;
  @Input() titleAdd: string;
  @Input() subtitleAdd: string;

  @Input() sizesList: Array<string> = new Array();
  @Input() tastesList: Array<string> = new Array();
}
