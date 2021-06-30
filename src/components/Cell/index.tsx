import React from 'react';
import {CellProps} from './types';
import {Label} from 'semantic-ui-react';

const Cell = ({value}: CellProps): JSX.Element => {
  return isNaN(value) ? <></> : <Label>{value}</Label>;
};

export default Cell;
