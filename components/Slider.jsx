import styles from "../styles/Slider.module.css";
import Image from "next/image";
import {useState} from "react";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/images/slider1.png",
    "/images/slider2.png",
    "/images/slider3.png",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      {/* ============================== LEFT */}
      <div
        className={styles.arrowContainer}
        style={{left: 5}}
        onClick={() => handleArrow("l")}>
        <Image
          src='/images/arrowl.png'
          alt='arrow_left_image'
          layout='fill'
          objectFit='contain'
          priority={true}
        />
      </div>

      {/* ============================== CENTER */}
      <div
        className={styles.wrapper}
        style={{transform: `translateX(${100 * index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image
              src={img}
              alt='pizza_image'
              layout='fill'
              objectFit='contain'
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* ============================== RIGHT */}
      <div
        className={styles.arrowContainer}
        style={{right: 0}}
        onClick={() => handleArrow("r")}>
        <Image
          src='/images/arrowr.png'
          layout='fill'
          alt='arrow_right_image'
          objectFit='contain'
        />
      </div>
    </div>
  );
};

export default Slider;
