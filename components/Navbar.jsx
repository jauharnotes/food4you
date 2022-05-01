import Image from "next/image";
import { IoPhonePortraitOutline } from "react-icons/io5";

import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.nav__logo}>
          <Image src='/logo.png' width={200} height={50.64} alt='logo food for you' />
        </div>
          <div className={styles.phone_wrapper}>
            <div className={styles.phone}>
              <h2>express delivery</h2>
              <h2>1800 258 888</h2>
            </div>
            <IoPhonePortraitOutline size={90}/>
          </div>
      </div>
        <div className={styles.nav__menu}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className={styles.header}>
          <div className={styles.header__left}>
            <h3 className={styles.header__textheading}>Are You Hungry?</h3>
            <h1>DONT WAIT!</h1>
            <h3>LET START TO DO FOOD NOW</h3>
            <hr />
            <div className={styles.header__hours}>
              <h3>THIS MONDAY <br />HAPPY HOURS</h3>
              <h3>1+1=3</h3>
            </div>
            <button className={styles.btn__yellow} type="button">ORDER NOW</button>
          </div>
          <div className={styles.header__right}>
            <Image className={styles.header__image} src="/mie-pasta.png" width={650} height={650} alt="mie pasta"/>
          </div>
        </div>
        <div className={styles.pattern}>
          <img src="/leaf.png" alt="leaf" />
          <img src="/leaf1.png" alt="leaf" />
          <img src="/pasta.png" alt="pasta" />
          <img src="/tomato1.png" alt="tomato" />
        </div>
    </div>
  );
}
