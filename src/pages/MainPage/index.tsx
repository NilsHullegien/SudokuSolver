import React from 'react';
import InfoToast from '../../components/InfoToast';
import Board from '../../components/Board';
import {Button, Form, FormButton, FormInput} from 'semantic-ui-react';
import {parseSudoku, unparsedContainsCorrectSymbols} from './util';
import {isValid} from './validate';
import '../MainPage/styles.css';

const MainPage = () => {
  const defaultList = React.useMemo(() => {
    return [
      [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
  }, []);

  const DEFAULT_MODAL_HEADER = 'An error has occurred';

  const [sudoku, setSudoku] = React.useState<number[][]>(defaultList);
  const [unparsedSudoku, setUnparsedSudoku] = React.useState<string>();

  const [isModalShown, showModal] = React.useState<boolean>(false);
  const [modalMessage, setModalMessage] = React.useState<string>();
  const [modalHeaderText, setModalHeaderText] = React.useState<string>(DEFAULT_MODAL_HEADER);

  const showModalWithMessage = React.useCallback((message: string, modalHeaderText?: string) => {
    setModalHeaderText(modalHeaderText ?? DEFAULT_MODAL_HEADER);
    setModalMessage(message);
    showModal(true);
  }, [setModalMessage, showModal]);

  const parseSudokuFromInput = React.useCallback(() => {
    if (typeof unparsedSudoku !== 'string') {
      showModalWithMessage('Please enter a sudoku before pressing this button');
      return;
    }

    if (unparsedSudoku.length !== 81) {
      showModalWithMessage('This string does not have 81 digits to fill in, please check for spaces');
      return;
    }
    if (!unparsedContainsCorrectSymbols(unparsedSudoku as string)) { // unparsedSudoku must be a string at this point
      showModalWithMessage('Please check if you have filled only numbers and dots for the open spaces');
      return;
    }
    setSudoku(parseSudoku(unparsedSudoku));
  }, [unparsedSudoku, setSudoku, showModalWithMessage]);

  const isSudokuStillDefault = React.useCallback(() => {
    return sudoku === defaultList;
  }, [sudoku, defaultList]);

  const checkSudoku = React.useCallback(() => {
    return (isValid(sudoku)) ?
      showModalWithMessage('Sudoku is valid!', 'Congratulations!'):
      showModalWithMessage('Sudoku is invalid!');
  }, [sudoku, showModalWithMessage]);

  const solveSudoku = React.useCallback(() => {
    showModalWithMessage('Not yet implemented :)', 'Warning');
  }, [showModalWithMessage]);

  return (
    <div className='content'>
      <InfoToast open={isModalShown} setOpen={showModal} message={modalMessage as string} headerText={modalHeaderText}/>
      <Board grid={sudoku}/>
      <div className='content-grid'>
        <div className='content-grid-left'>
          <Form onSubmit={parseSudokuFromInput}>
            <FormInput label='Insert new sudoku here (81 digits line with dots for empty cells)'
              onChange={(e) => setUnparsedSudoku(e.target.value)}/>
            <FormButton size='large' content="Submit" color='orange'/>
          </Form>
        </div>
        <div className='content-grid-right'>
          <Button size='large' disabled={isSudokuStillDefault()} onClick={solveSudoku} color='orange'>
            Solve loaded sudoku
          </Button>
          <Button size='large' disabled={isSudokuStillDefault()} onClick={checkSudoku} color='orange'>
            Check loaded sudoku
          </Button>
        </div>
      </div>
    </div>

  );
};

export default MainPage;
