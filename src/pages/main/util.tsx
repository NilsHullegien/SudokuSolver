const defaultList: number[] = Array.from(new Array(9), (_, i) => i);

const transposeGrid = (sudoku: number[][]): number[][] => sudoku[0].map((elem, idx) => sudoku.map(elem => elem[idx]));
const isSequenceValid = (sequence: number[]): boolean => sequence.every(elem => defaultList.includes(elem));

export function unparsedContainsCorrectCharacters(unparsedSudoku: string): boolean {
  return /^[0-9.]*$/.test(unparsedSudoku as string);
}

/**
 * Retrieve 9 rows of 9 values into one grid
 * @param unparsed
 */
export function parseSudoku(unparsed: string): number[][] {
  let rows: number[][] = [[]];
  let idx = 0;
  for (let start = 0; start < unparsed.length; start += 9) {
    rows[idx] = unparsed.substr(start, 9).split("").map(elem => +elem);
    idx++;
  }
  return rows;
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


