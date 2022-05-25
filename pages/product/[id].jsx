import Image from "next/image";
import {useState} from "react";
import styles from "../../styles/Product.module.css";

const Product = () => {
  const [size, setSize] = useState(0);

  // Temporary for design
  const pizza = {
    id: 1,
    img: "/images/pizza.png",
    name: "کامپانیولا",
    price: [75000, 135000, 170000],
    desc: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از",
  };

  return (
    <div className={styles.container}>
      {/* ============================ RIGHT */}
      <div className={styles.rightContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={pizza.img}
            alt='pizza_image'
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>

      {/* ============================ LEFT */}
      <div className={styles.leftContainer}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>{pizza.price[size]} تومان</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>انتخاب سایز:</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src={"/images/size.png"} alt='size_logo' layout='fill' />
            <span className={styles.sizeTitle}>یک نفره</span>
          </div>

          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src={"/images/size.png"} alt='size_logo' layout='fill' />
            <span className={styles.sizeTitle}>دو نفره</span>
          </div>

          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src={"/images/size.png"} alt='size_logo' layout='fill' />
            <span className={styles.sizeTitle}>خانواده</span>
          </div>
        </div>
        <h3 className={styles.choose}>انتخاب اقلام اضافی:</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type='checkbox'
              id='cheese'
              name='cheese'
            />
            <label htmlFor='cheese'>پنیر اضافه</label>
          </div>

          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type='checkbox'
              id='spicy'
              name='spicy'
            />
            <label htmlFor='spicy'>آتشین!</label>
          </div>

          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type='checkbox'
              id='garlic'
              name='garlic'
            />
            <label htmlFor='garlic'>سس سیر</label>
          </div>
        </div>

        <div className={styles.add}>
          <input type='number' defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>اضافه به سبد</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
