import React, { useEffect, useState } from "react";
import styles from "../styles/Carousel.module.css";

export const CarouselItem = ({ children }: { children: JSX.Element }) => {
  return <div className={styles.carouselItem}>{children}</div>;
};

function Carousel({ children }: { children: JSX.Element[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1; // if Index is less than 0 then index = no.OfData - 1
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0; // if Index is greater than no of data than make index = 0
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1); //Keep changing pic after 3 seconds
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
        style={{ transform: `translateX(-${activeIndex * 30}%)` }} //Move Carousel in X direction
      >
        {React.Children.map(children, (child: JSX.Element, index: number) => {
          return React.cloneElement(child, { width: "100%" }); //Clone Element with width = 100%
        })}
      </div>
      <div className={styles.indicators}>
        <button
          onClick={() => updateIndex(activeIndex - 1)} //if clicked on prev than decrease activeIndex by 1
          style={{ marginRight: "1094px" }}
        >
          Previous
        </button>
        <button
          onClick={() => updateIndex(activeIndex + 1)} // if clicked on prev than decrease activeIndex by 1
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Carousel;
