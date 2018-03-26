import { Injectable } from '@angular/core';
import { Cell, CellState } from './cell';

@Injectable()
export class GameService {
  cellState = CellState;
  constructor() { }

  getCellList(): Cell[] {
    const cellList = [];
    for (let i = 0; i < 9; i++) {
      cellList.push(this.createCell(i));
    }
    return cellList;
  }

  private createCell(index: number): Cell {
    return {
      state: this.cellState.Unchecked,
      id: index
    };
  }

  getWinner(cellList: Cell[], player: string): string {
    return this.isWinner(cellList, player) ? player : '';
  }

  private isWinner(cellList: Cell[], player): boolean {
    const playerNumber: number = player === 'Player 1' ?
      CellState.CheckedByPlayer1 : CellState.CheckedByPlayer2;
    const winnerState = [
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // collumns
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 4, 8], [2, 4, 6]
    ];

    let match = false;
    winnerState.forEach(state => {
      if (cellList[state[0]].state === playerNumber &&
          cellList[state[1]].state === playerNumber &&
          cellList[state[2]].state === playerNumber) {
        match = true;
      }
    });
    return match;
  }
}
