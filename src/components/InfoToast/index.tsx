import {Button, Modal, ModalActions, ModalContent, ModalHeader} from 'semantic-ui-react';
import React from 'react';
import {InfoToastProps} from './types';

const InfoToast = ({open, setOpen, message}: InfoToastProps) => {
  return <Modal size={'tiny'} open={open}>
    <ModalHeader>Error!</ModalHeader>
    <ModalContent>
      <p>{message}</p>
    </ModalContent>
    <ModalActions>
      <Button positive onClick={() => setOpen(false)}>
        Okay
      </Button>
    </ModalActions>
  </Modal>
}

export default InfoToast;
