import Image from "next/image";
import styles from "../styles/Slider.module.css";

const Slider = () => {
  const images = [
    {id: 1, src: "/images/featured.png"},
    {id: 2, src: "/images/featured2.png"},
    {id: 3, src: "/images/featured3.png"},
  ];

  return (
    <div className={styles.container}>
      <Image src='/images/arrowl.png' alt='left_arrow_icon' layout='fill' />
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          {images.map((image, id) => (
            <Image
              src='/images/featured.png'
              key={id}
              alt='right_arrow_icon'
              layout='fill'
            />
          ))}
        </div>
      </div>
      <Image src='/images/arrowr.png' alt='right_arrow_icon' layout='fill' />
    </div>
  );
};

export default Slider;
