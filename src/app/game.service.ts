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

}
