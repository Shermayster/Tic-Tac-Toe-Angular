import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';
import { Cell, CellState } from './cell';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cellList: Cell[];
  firstPlayerTurn = true;
  winner = '';

  constructor(private gameService: GameService) {
    this.cellList = this.gameService.getCellList();
  }

  /**
   * returns winner or player turn message
   */
  showTitleMessage(): string {
    return this.winner ? `${this.winner} is a winner!` :
    this.firstPlayerTurn ? 'Player 1 Turn' : 'Player 2 Turn';
  }

  /**
   * resets the game
   */
   startNewGame() {
      this.winner = '';
      this.cellList = this.gameService.getCellList();
      this.firstPlayerTurn = true;
   }

   /**
    * checks if player win the game. if not changed the turn
    */
   handlePlayerTurn(cellIndex: number): void {
    if (this.winner) {
      return;
    }
    const isTurn = this.updateCellStateOnTurn(cellIndex);
    if (isTurn) {
      this.getWinner();
      if (!this.winner) { // next turn
        this.firstPlayerTurn = !this.firstPlayerTurn; // change player turn
      }
    }
   }

   private getCellState(): number {
     return this.firstPlayerTurn ? CellState.CheckedByPlayer1 : CellState.CheckedByPlayer2;
   }

   private updateCellStateOnTurn(cellIndex: number) {
    let isTurn = false;
    this.cellList = this.cellList.map((cell, index) => {
      if (index === cellIndex && cell.state === CellState.Unchecked) {
        cell.state = this.getCellState();
        isTurn = true;
      }
      return cell;
    });
    return isTurn;
   }

   private getWinner() {
    const player = this.firstPlayerTurn ? 'Player 1' : 'Player 2';
    this.winner = this.gameService.getWinner(this.cellList, player);
   }
}
