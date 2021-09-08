import { createPortal } from 'react-dom';

import Backdrop from "../Backdrop/Backdrop";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

const portalElement = document.getElementById('overlays') as HTMLElement;

type ModalProps = {
  onClose: () => void,
  children: JSX.Element,
};

const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <>
      {createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;