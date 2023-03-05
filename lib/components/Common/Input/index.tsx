import Image from 'next/image';
import styles from './Input.module.scss';

export interface IInputProps {
  name: string;
  value: string;
  handleChange: (value: string) => void;
  icon?: any;
  type?: string;
  placeholder?: string;
}

const Input = ({
  name,
  value,
  handleChange,
  icon,
  type = 'text',
  placeholder = 'Text'
}: IInputProps) => {
  const onChange = (e: any) => {
    handleChange(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
      {icon && <Image src={icon} className={styles.icon} alt="search" />}
    </div>
  );
};

export default Input;
