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


