import styles from './Hero.module.scss';
import classNames from 'classnames';
import Search from '@/components/Search';

const Hero = () => {
  return (
    <div
      className={classNames(
        styles.wrapper,
        styles.flex,
        styles.flexCenter,
        styles.alignCenter
      )}
    >
      <div>
        <h1 className={styles.headerName}>The Blog App</h1>
        <p className={styles.content}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo,
          veritatis!.
        </p>
        <Search />
      </div>
    </div>
  );
};

export default Hero;
