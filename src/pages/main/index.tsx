import React from 'react';
import InfoToast from '../../components/InfoToast';
import Board from '../../components/Board';
import {Form, FormButton, FormInput} from 'semantic-ui-react';
import {parseSudoku, unparsedContainsCorrectCharacters} from './util';


const MainPage = () => {
  const defaultList = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  const [sudoku, setSudoku] = React.useState<number[][]>(defaultList);
  const [unparsedSudoku, setUnparsedSudoku] = React.useState<string>();

  const [isModalShown, showModal] = React.useState<boolean>(false);
  const [modalMessage, setModalMessage] = React.useState<string>();

  const showModalWithMessage = React.useCallback((message: string) => {
    setModalMessage(message)
    showModal(true);
  }, [setModalMessage, showModal]);

  const parseSudokuFromInput = React.useCallback(() => {
    if (typeof unparsedSudoku !== "string") {
      console.log("UNPARSED");
      showModalWithMessage("Please enter a sudoku before pressing this button");
      return;
    }

    if (unparsedSudoku.length !== 81) {
      console.log(unparsedSudoku.length);
      showModalWithMessage("This string does not have 81 digits to fill in, please check for spaces");
      return;
    }
    if (!unparsedContainsCorrectCharacters(unparsedSudoku as string)) { //unparsedSudoku must be a string at this point
      showModalWithMessage("Please check if you have filled only numbers and dots for the open spaces");
      return;
    }
    console.log("PARSING SUDOKU: " + unparsedSudoku);
    setSudoku(parseSudoku(unparsedSudoku));

  }, [unparsedSudoku, setSudoku, showModalWithMessage]);

  return (
    <>
      <InfoToast open={isModalShown} setOpen={showModal} message={modalMessage}/>
      <Board grid={sudoku}/>
      <Form onSubmit={parseSudokuFromInput}>
        <FormInput label={"Insert new sudoku here (81 digits line with dots for empty cells)"}
                   onChange={e => setUnparsedSudoku(e.target.value)}/>
        <FormButton content="Submit"/>
      </Form>
    </>

  );
}

export default MainPage;
