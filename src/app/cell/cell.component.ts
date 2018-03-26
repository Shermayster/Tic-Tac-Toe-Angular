import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Cell, CellState } from '../cell';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],
})
export class CellComponent {
  @Input() cellData: Cell;

  /**
   * creates cell content according to state of the cell
   */
  getCellContent() {
    return this.cellData.state === CellState.CheckedByPlayer1 ?
    '✘' : this.cellData.state === CellState.CheckedByPlayer2 ?
    'O' : '';
  }

}
