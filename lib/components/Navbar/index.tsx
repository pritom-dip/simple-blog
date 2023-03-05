import styles from './Navbar.module.scss';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const menus = [
  {
    name: 'Home',
    link: '/',
    submenu: [],
    icon: ''
  },
  {
    name: 'Profile',
    link: '/user/:id',
    submenu: [],
    icon: ''
  }
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={classNames(styles.container, styles.flex, styles.flexEnd)}
      >
        {!isMobile ? (
          <ul className={classNames(styles.flex)}>
            {menus?.map(menu => (
              <Link key={menu.name} href={menu.link}>
                <li className={classNames(styles.item)}>
                  <div
                    className={classNames(styles.heading, styles.flexCenter)}
                  >
                    {menu?.icon && (
                      <Image
                        className={styles.iconLeft}
                        src={menu.icon}
                        alt="icon"
                      />
                    )}
                    <span>{menu?.name}</span>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          <>
            <div
              className={classNames(styles.mobileMenu, styles.directionColumn)}
              onClick={handleClick}
            >
              <div className={styles.hamburger}></div>
              <div className={styles.hamburger}></div>
              <div className={styles.hamburger}></div>
            </div>
            {isOpen && (
              <div className={styles.menuOpen}>
                <div onClick={handleClose} className={styles.close}>
                  X
                </div>
                <ul className={styles.mobileMenuUl}>
                  {menus.length > 0 &&
                    menus.map(menu => (
                      <li className={styles.mobileItem} key={menu.name}>
                        <div
                          className={classNames(
                            styles.flex,
                            styles.flexEnd,
                            styles.alignCenter
                          )}
                        >
                          <Link href={menu.link}>{menu.name}</Link>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
