import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src='/images/telephone.png'
            alt='phone_icon'
            width='32'
            height='32'
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.texts}> سفارش دهید!</div>
          <div className={styles.texts}>09120678588</div>
        </div>
      </div>
      <div className={styles.list}>
        <ul className={styles.list}>
          <li className={styles.listItem}>صفحه اصلی</li>
          <li className={styles.listItem}>محصولات</li>
          <li className={styles.listItem}>منو</li>
          <Image
            src='/images/logo.png'
            alt='logo'
            width='200px'
            height='69px'
          />
          <li className={styles.listItem}>رخدادها</li>
          <li className={styles.listItem}>بلاگ</li>
          <li className={styles.listItem}>تماس</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image
            src='/images/cart.png'
            alt='cart_icon'
            width='30px'
            height='30px'
          />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
