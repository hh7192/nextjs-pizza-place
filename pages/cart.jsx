import styles from "../styles/Cart.module.css";
import Image from "next/image";

const cart = () => {
  return (
    <div className={styles.container}>
      {/* ============================= RIGHT */}
      <div className={styles.rightContainer}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
              <th>محصول</th>
              <th>نام</th>
              <th>مخلفات</th>
              <th>قیمت</th>
              <th>تعداد</th>
              <th>جمع کل</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src='/images/pizza.png'
                    alert='ordered_pizza'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>کورالزو</span>
              </td>
              <td>
                <span className={styles.extras}>دوبله ، سس آتشین</span>
              </td>
              <td>
                <span className={styles.price}>75.000 تومان</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>150.000 تومان</span>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src='/images/pizza.png'
                    alert='ordered_pizza'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>کورالزو</span>
              </td>
              <td>
                <span className={styles.extras}>دوبله ، سس آتشین</span>
              </td>
              <td>
                <span className={styles.price}>75.000 تومان</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>150.000 تومان</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ============================= LEFT */}
      <div className={styles.leftContainer}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>مجموع سبد</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>جمع: </b> 150.000 تومان
          </div>

          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}> تخفیف: </b> 0.0 تومان
          </div>

          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>جمع کل: </b> 150.000 تومان
          </div>

          <button className={styles.button}>پرداخت آنلاین</button>
        </div>
      </div>
    </div>
  );
};

export default cart;
