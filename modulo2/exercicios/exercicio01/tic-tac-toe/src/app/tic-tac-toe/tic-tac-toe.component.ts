import { Component } from '@angular/core';

@Component({
  selector: 'tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent {

  currentPlayer: string = "X";
  play: string[][] = [
    ["X", "X", "X"],
    ["", "", ""],
    ["", "", ""]
  ];
  endPlay: boolean;

  playTicTac(row: number, column: number): void {
    console.log(row);
    console.log(column);
  }
}
