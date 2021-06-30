import {DEFAULT_LIST} from './validate';

export function calculateSolution(newSudoku: number[][]) {
  console.log(getPossibilitiesForCell(0, 0, newSudoku));
  return undefined;
}

function getPossibilitiesForCell(x: number, y: number, sudoku: number[][]): number[] {
  const possibilities: number[] = [];
  const cell = sudoku[x][y];
  const a = DEFAULT_LIST;
  if (!isNaN(cell) && a) {
    return possibilities;
  } else {
    checkRowPossibilities(y, sudoku[x]);
    checkColumnPossibilities(x, y, sudoku);
    checkBoxPossibilities(x, y, sudoku);
  }


  return possibilities;
}

function checkRowPossibilities(idx: number, row: number[]): number[] {

}

function checkColumnPossibilities(x: number, y: number, sudoku: number[][]): number[] {

}

function checkBoxPossibilities(x: number, y: number, sudoku: number[][]): number[] {

}
