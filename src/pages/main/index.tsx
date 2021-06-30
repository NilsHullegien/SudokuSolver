import React from 'react';
import InfoToast from '../../components/InfoToast';
import Board from '../../components/Board';
import {Button, ButtonGroup, Form, FormButton, FormInput} from 'semantic-ui-react';
import {parseSudoku, unparsedContainsCorrectCharacters} from './util';
import {isValid, validateBoxes, validateColumns, validateRows} from './validate';

const MainPage = () => {
  const defaultList = React.useMemo(() => {return [
    [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];}, []);

  const defaultModalHeaderText = "An error has occurred";

  const [sudoku, setSudoku] = React.useState<number[][]>(defaultList);
  const [unparsedSudoku, setUnparsedSudoku] = React.useState<string>();

  const [isModalShown, showModal] = React.useState<boolean>(false);
  const [modalMessage, setModalMessage] = React.useState<string>();
  const [modalHeaderText, setModalHeaderText] = React.useState<string>(defaultModalHeaderText);

  const showModalWithMessage = React.useCallback((message: string, modalHeaderText?: string) => {
    setModalHeaderText(modalHeaderText ?? defaultModalHeaderText);
    setModalMessage(message)
    showModal(true);
  }, [setModalMessage, showModal]);

  const parseSudokuFromInput = React.useCallback(() => {
    if (typeof unparsedSudoku !== "string") {
      showModalWithMessage("Please enter a sudoku before pressing this button");
      return;
    }

    if (unparsedSudoku.length !== 81) {
      showModalWithMessage("This string does not have 81 digits to fill in, please check for spaces");
      return;
    }
    if (!unparsedContainsCorrectCharacters(unparsedSudoku as string)) { //unparsedSudoku must be a string at this point
      showModalWithMessage("Please check if you have filled only numbers and dots for the open spaces");
      return;
    }
    setSudoku(parseSudoku(unparsedSudoku));
  }, [unparsedSudoku, setSudoku, showModalWithMessage]);

  const isSudokuStillDefault = React.useCallback(() => {
    return sudoku === defaultList;
  }, [sudoku, defaultList]);

  const checkSudoku = React.useCallback(() => {
    return (isValid(sudoku)) ?
      showModalWithMessage("Sudoku is valid!", "Congratulations!"):
      showModalWithMessage("Sudoku is invalid!");
  }, [sudoku, showModalWithMessage]);

  const solveSudoku = React.useCallback(() => {
    showModalWithMessage("Not yet implemented :)", "Warning")
  }, []);

  return (
    <>
      <InfoToast open={isModalShown} setOpen={showModal} message={modalMessage as string} headerText={modalHeaderText}/>
      <Board grid={sudoku}/>
      <Form onSubmit={parseSudokuFromInput}>
        <FormInput label={"Insert new sudoku here (81 digits line with dots for empty cells)"}
                   onChange={e => setUnparsedSudoku(e.target.value)}/>
        <FormButton content="Submit"/>
      </Form>
      <ButtonGroup>
        <Button disabled={isSudokuStillDefault()} onClick={solveSudoku}>Solve loaded sudoku</Button>
        <Button disabled={isSudokuStillDefault()} onClick={checkSudoku}>Check loaded sudoku</Button>
      </ButtonGroup>
    </>

  );
};

export default MainPage;
