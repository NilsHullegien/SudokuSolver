import React, {useEffect} from 'react';

import {GridType} from './types';
import {Grid, GridColumn, GridRow} from 'semantic-ui-react';
import Cell from '../Cell';

const Board: (grid: GridType) => JSX.Element = ({grid}) => {
  const [data, setData] = React.useState<number[][]>([[]]);

  useEffect(() => setData(grid), [grid]);

  return <Grid celled columns="equal">
    {data.map(row =>
      <GridRow>
        {row.map(val =>
          <GridColumn>
            <Cell value={val}/>
          </GridColumn>
        )}
      </GridRow>
    )}
  </Grid>;
}

export default Board;
