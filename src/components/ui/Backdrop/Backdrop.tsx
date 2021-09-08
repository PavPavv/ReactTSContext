import classes from './Backdrop.module.css';

type BackdropProps = {
  onClose: () => void,
};

const Backdrop = ({ onClose }: BackdropProps) => {
  return <div className={classes.backdrop} onClick={onClose}/>;
};

export default Backdrop;