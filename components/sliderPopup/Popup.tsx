import React from "react";
import styles from "../../styles/Carousel.module.css";
import ReactPlayer from "react-player";

interface PopupTypes {
  setPopUp: Function;
  popUp: boolean;
  url: string;
}
function Popup({ setPopUp, popUp, url }: PopupTypes) {
  return (
    <>
      <div onClick={() => setPopUp(!popUp)} className={styles.overlay}></div>
      <div className={styles.modalContent}>
        <ReactPlayer url={url} /> {/* React Player to play youtube video */}
      </div>
    </>
  );
}

export default Popup;
