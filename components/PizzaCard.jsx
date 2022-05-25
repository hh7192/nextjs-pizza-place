import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";
const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image
        src='/images/pizza.png'
        alt='aizza_icon'
        width='500'
        height='500'
      />
      <h1 className={styles.title}>فیوری دی زوکا</h1>
      <span className={styles.price}>135,000t</span>
      <p className={styles.desc}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از
      </p>
    </div>
  );
};

export default PizzaCard;
