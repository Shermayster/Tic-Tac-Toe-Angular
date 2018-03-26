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
  constructor(private gameService: GameService) {
    this.cellList = this.gameService.getCellList();
  }

  showPlayerTurnMsg(): string {
    return this.firstPlayerTurn ? '1 Player Turn' : '2 Player Turn';
  }
   startNewGame() {

   }

   handlePlayerTurn(i: number): void {
    this.cellList = this.cellList.map((cell, index) => {
        if (index === i) {
          cell.state = this.firstPlayerTurn ?
          CellState.CheckedByPlayer1 : CellState.CheckedByPlayer2;
        }
        return cell;
    });
    // change player
    this.firstPlayerTurn = !this.firstPlayerTurn;
   }
}
