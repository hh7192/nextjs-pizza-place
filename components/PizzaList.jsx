import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>خوشمزه، سریع، آسان!</h1>
      <p className={styles.desc}>
        ما توی پیتزا دبل اچ تمام تلاشمون رو میکنیم تا از مجرب ترین پرسنل با
        آموزش های روز دنیا، تازه ترین و مرغوب ترین مواد اولیه و به روز ترین روش
        دلیوری با سرعت بالا استفاده کنیم تا روز به روز بتونیم رضایت شما رو بیشتر
        جلب کنیم!
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaList;
