import { IButtonProps } from '@/types/button';
import classNames from 'classnames';
import styles from './Button.module.scss';

const Button = ({
  text = 'submit',
  onClick,
  classes,
  loading
}: IButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div onClick={onClick} className={classNames(styles.wrapper)}>
      {loading && <div className={styles.loading}></div>}
      <button
        onClick={handleClick}
        disabled={loading}
        className={classNames(styles.button, classes)}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
