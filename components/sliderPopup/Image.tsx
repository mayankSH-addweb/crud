import React from "react";
import styles from "../../styles/Carousel.module.css";

interface ImageData {
  setPopUpToggle: Function;
  setUrl: Function;
  popUpToggle: boolean;
  imageUrl: string;
  url: string;
}

function Image({
  setPopUpToggle,
  setUrl,
  popUpToggle,
  imageUrl,
  url,
}: ImageData) {
  return (
    <img
      className={styles.imageData}
      onClick={() => {
        setPopUpToggle(!popUpToggle); // if clicked on image POP will come
        setUrl(url); //if clicked on image url will be set for ReactPlayer
      }}
      alt="panga"
      src={imageUrl}
    />
  );
}

export default Image;
