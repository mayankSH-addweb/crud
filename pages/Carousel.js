import React, { useEffect, useState } from "react";
import styles from "../styles/Carousel.module.css";

export const carouselItem = ({ children, width }) => {
  return (
    <div className={styles.carouselItem} style={{ width: width }}>
      {children}
    </div>
  );
};

function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(children);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
      //   newIndex = data.length - 1;
    } else if (newIndex >= React.Children.count(children)) {
      // } else if (newIndex >= data.length) {
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
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className={styles.indicators}>
        <button onClick={() => updateIndex(activeIndex - 1)}>Previous</button>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? styles.active : ""}`}
              onClick={() => updateIndex(index)}
            >
              {index + 1}
            </button>
          );
        })}
        <button onClick={() => updateIndex(activeIndex + 1)}>Next</button>
      </div>
    </div>
  );
}

export default Carousel;
