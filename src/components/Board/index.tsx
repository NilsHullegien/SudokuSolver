import React, {useEffect} from 'react';

import {GridType} from './types';
import {Grid, GridColumn, GridRow} from 'semantic-ui-react';
import Cell from '../Cell';

const Board: (grid: GridType) => JSX.Element = (grid: GridType) => {
  const [data, setData] = React.useState<number[][]>([[]]);

  useEffect(() => setData(grid.grid), [grid]);

  return <Grid celled columns="equal" textAlign="center">
    {data.map((row, rowIdx) =>
      <GridRow key={rowIdx}>
        {row.map((val, colIdx) =>
          <GridColumn key={colIdx}>
            <Cell value={val}/>
          </GridColumn>,
        )}
      </GridRow>,
    )}
  </Grid>;
};

export default Board;
