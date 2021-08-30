import { Component } from '@angular/core';

@Component({
  selector: 'tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent {

  winner: string;
  currentPlayer: string;
  play: string[][];

  ngOnInit() {
    this.play = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];

    this.winner = "";
    this.currentPlayer = "X";
  }

  playTicTac(row: number, column: number): void {
    if (this.play[row][column] == "" && this.winner == "") {
      this.play[row][column] = this.currentPlayer;
    }

    this.changeCurrentPlayer();
    this.checkWinner();

    if (this.checkWinner() == true) {
      this.winner = this.currentPlayer;
    }
  }

  changeCurrentPlayer(): void {
    if (this.currentPlayer === "X") {
      this.currentPlayer = "O";
    } else if (this.currentPlayer === "O") {
      this.currentPlayer = "X";
    }
  }

  restartPlay(): void {
    this.play = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];

    this.winner = "";
    this.currentPlayer = "X";
  }

  checkWinner(): boolean {

    for (let i = 0; i < this.play.length; i++) {
      // Linhas

      if (this.play[i][0] == this.currentPlayer && this.play[i][1] == this.currentPlayer && this.play[i][2] == this.currentPlayer) {
        return true;
      }
    }

    for (let i = 0; i < this.play.length; i++) {
      // Colunas

      if (this.play[0][i] === this.currentPlayer && this.play[1][i] === this.currentPlayer && this.play[2][i] === this.currentPlayer) {
        return true;
      }
    }

    // Diagonais

    if (this.play[0][0] != "" && (this.play[0][0] === this.play[1][1]) && (this.play[0][0] === this.play[2][2])) {
      return true;
    }


    if (this.play[2][0] != "" && (this.play[2][0] === this.play[1][1]) && (this.play[2][0] === this.play[0][2])) {
      return true;
    }

    // TODO: correção, winner após próxima jogada

  }
}
