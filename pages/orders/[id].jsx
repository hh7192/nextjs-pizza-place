import Image from "next/image";
import styles from "../../styles/Order.module.css";

const Order = () => {
  // temporary for design. later we fetch with API
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.nextStep;
  };

  return (
    <div className={styles.container}>
      <div className={styles.rightContainer}>
        <div className={styles.row}>
          {/* =============================== CUSTOMER ORDER TABLE */}
          <table className={styles.table}>
            <thead>
              <tr className={styles.tr}>
                <th>شماره سفارش</th>
                <th>نام مشتری</th>
                <th>آدرس مشتری</th>
                <th>جمع کل</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className={styles.id}>12455987326</span>
                </td>
                <td>
                  <span className={styles.name}>علی محمدی</span>
                </td>
                <td>
                  <span className={styles.address}>
                    تهران، خیابان مطهری، کوچه قائم، پلاک 55
                  </span>
                </td>
                <td>
                  <span className={styles.total}>150.000 تومان</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.row}>
          {/* =============================== CUSTOMER ORDER STATUS */}
          <div className={statusClass(0)}>
            <Image
              src='/images/paid.png'
              alt='paid_icon'
              width={30}
              height={30}
            />
            <span>در مرحله پرداخت</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src='/images/checked.png'
                alt='checked_icon'
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className={statusClass(1)}>
            <Image
              src='/images/bake.png'
              alt='paid_icon'
              width={30}
              height={30}
            />
            <span>در حال آماده سازی</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src='/images/checked.png'
                alt='checked_icon'
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className={statusClass(2)}>
            <Image
              src='/images/bike.png'
              alt='paid_icon'
              width={30}
              height={30}
            />
            <span>در حال ارسال</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src='/images/checked.png'
                alt='checked_icon'
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className={statusClass(3)}>
            <Image
              src='/images/delivered.png'
              alt='paid_icon'
              width={30}
              height={30}
            />
            <span>تحویل شد</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src='/images/checked.png'
                alt='checked_icon'
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
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

          <button className={styles.button} disabled>
            پرداخت شد
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
