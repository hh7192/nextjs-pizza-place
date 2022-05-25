import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src='/images/bg.png'
          alt='background_image'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            خوشمزه، سریع و آسان پیتزای شما را هر جایی که بخواهید تحویل میدهیم!
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>مراکز ما را پیدا کنید</h1>
          <p className={styles.text}>
            آدرس: زنجان، شهرک صدوقی
            <br /> خیابان گلزار، پلاک 88
            <br /> (024) 3344-7561
          </p>
          <p className={styles.text}>
            آدرس: تهران، شهرک رئوفی
            <br /> خیابان لاله زار پلاک 23
            <br /> (021) 3344-7561
          </p>
          <p className={styles.text}>
            آدرس: اصفهان شهرک مهدوی
            <br /> خیابان علفزار پلاک 65
            <br /> (031) 3344-7561
          </p>
          <p className={styles.text}>
            آدرس: شیراز شهرک علوی
            <br /> خیابان یونجه زار پلاک 12
            <br /> (071) 3344-7561
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>ساعات کاری</h1>
          <p className={styles.text}>
            شنبه تا چهارشنبه:
            <br /> 9:00 الی 22:00
          </p>
          <p className={styles.text}>
            پنجشنبه و جمعه:
            <br /> 12:00 الی 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
