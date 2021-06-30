const DEFAULT_LIST: number[] = Array.from(new Array(9), (_, i) => i);

const transposeGrid = (sudoku: number[][]): number[][] => sudoku[0].map((elem, idx) => sudoku.map(elem => elem[idx]));
const isSequenceValid = (sequence: number[]): boolean => sequence.every(elem => DEFAULT_LIST.includes(elem));

export function isValid(sudoku: number[][]): boolean {
  return validateRows(sudoku) && validateColumns(sudoku) && validateBoxes(sudoku);
}

export function validateRows(sudoku: number[][]): boolean {
  return sudoku.every(row => isSequenceValid(Array.from(row).map(x => +x)))
}

export function validateColumns(sudoku: number[][]) {
  return transposeGrid(sudoku)
    .every(row => isSequenceValid(Array.from(row).map(x => +x)))
}


export function validateBoxes(sudoku: number[][]) {
  for (let rowIdx = 0; rowIdx < 9; rowIdx+=3) {
    let firstSlice = sudoku.slice(rowIdx, rowIdx + 3);
    for (let columnIdx = 0; columnIdx < 9; columnIdx+=3) {
      let boxList = firstSlice.map(row => row.slice(columnIdx, columnIdx + 3)).flat();
      if (!isSequenceValid(boxList)) {
        return false;
      }
    }
  }
  return true;
}
