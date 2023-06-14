import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import styles from "./carousel.module.scss";

export default function Carousel({ images = [] }) {
  return (
    <section className={styles.container}>
      <AliceCarousel autoPlay autoPlayInterval={3000}>
        {images.map((image) => {
          return <img src={image.src} alt={image.alt} width={image.width} height={image.height} />;
        })}
      </AliceCarousel>
    </section>
  );
}
