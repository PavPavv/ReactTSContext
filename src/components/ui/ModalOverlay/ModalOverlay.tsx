import classes from './ModalOverlay.module.css';

type ModalOverlayProps = {
  children: JSX.Element,
};

const ModalOverlay = ({ children }: ModalOverlayProps) => {
  return (
    <div className={classes.modal}>
      <div>{children}</div>
    </div>
  );
};

export default ModalOverlay;