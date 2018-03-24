export interface Cell {
  state: CellState;
  id: number;
}

export enum CellState {
  Unchecked,
  CheckedByPlayer1,
  CheckedByPlayer2
}
