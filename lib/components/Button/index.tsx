import { IButtonProps } from '@/types/button';
import classNames from 'classnames';
import styles from './Button.module.scss';

const Button = ({
  text = 'submit',
  onClick,
  classes,
  loading,
  loadingIcon
}: IButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={classNames(styles.btn, classes)} onClick={handleClick}>
      {text}
    </div>
  );
};

export default Button;
