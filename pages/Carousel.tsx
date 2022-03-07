import React, { useEffect, useState } from "react";
import styles from "../styles/Carousel.module.css";

export const CarouselItem = ({ children }: { children: JSX.Element }) => {
  return <div className={styles.carouselItem}>{children}</div>;
};

function Carousel({ children }: { children: JSX.Element[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div className={styles.carousel}>
      <div
        className={styles.inner}
        style={{ transform: `translateX(-${activeIndex * 30}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className={styles.indicators}>
        <button
          onClick={() => updateIndex(activeIndex - 1)}
          style={{ marginRight: "1094px" }}
        >
          Previous
        </button>
        <button onClick={() => updateIndex(activeIndex + 1)}>Next</button>
      </div>
    </div>
  );
}

export default Carousel;
