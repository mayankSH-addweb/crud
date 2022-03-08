import React, { useEffect, useState } from "react";
import styles from "../../styles/Carousel.module.css";

export const CarouselItem = ({
  children,
}: {
  children: JSX.Element | React.FunctionComponent;
}) => {
  return <div className={styles.carouselItem}>{children}</div>;
};

function Carousel({
  children,
  autoplay,
}: {
  children: JSX.Element[];
  autoplay: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0); //current active index or image

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1; // if Index is less than 0 then index = no.OfData - 1
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0; // if Index is greater than no of data than make index = 0
    }
    setActiveIndex(newIndex);
  };

  autoplay
    ? useEffect(() => {
        const interval = setInterval(() => {
          updateIndex(activeIndex + 1);
        }, 3000); //Keep changing pic after 3 seconds

        return () => {
          if (interval) {
            clearInterval(interval);
          }
        };
      })
    : useEffect(() => {
        const interval = setInterval(() => {
          updateIndex(activeIndex + 1);
        }, 3000); //Keep changing pic after 3 seconds

        return () => {
          if (interval) {
            clearInterval(interval);
          }
        };
      }, []);

  return (
    <div className={styles.carousel}>
      <div
        className={styles.inner}
        style={{ transform: `translateX(-${activeIndex * 25}%)` }} //Move Carousel in X direction
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" }); //Clone Element with width = 100%
        })}
      </div>
      <div className={styles.indicators}>
        <button
          onClick={() => updateIndex(activeIndex - 1)} //if clicked on prev than decrease activeIndex by 1
          // style={{ marginRight: "80vw" }}
        >
          Previous
        </button>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={
                activeIndex == index
                  ? `${styles.buttonClass}`
                  : `${styles.buttonClassNormal}`
              }
              onClick={() => updateIndex(index)}
            ></button>
          );
        })}
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>{" "}
        {/* if clicked on prev than decrease activeIndex by 1 */}
      </div>
    </div>
  );
}

export default Carousel;
