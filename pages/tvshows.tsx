import React, { useEffect, useState } from "react";
import Popup from "../components/sliderPopup/Popup";
import Carousel, { CarouselItem } from "../components/sliderPopup/Carousel";
import Image from "../components/sliderPopup/Image";

function tvshows() {
  const [videosData, setVideosData] = useState([]); //Contains array of data to use in carousel
  const [popUpToggle, setPopUpToggle] = useState(false); //toggle for popup
  const [url, setUrl] = useState(""); //videoUrl
  const [autoplay, setautoplay] = useState(false); //videoUrl
  useEffect(() => {
    fetch("mock.json")
      .then((res) => res.json())
      .then((res) => setVideosData(res));
  }, []); //Fetched mock.json data from public

  interface videoData {
    title: string;
    imageUrl: string;
    url: string;
  }

  return (
    <>
      <div style={{ display: "inline-flex" }}>
        <img
          style={{ width: "35px", height: "35px" }}
          src="/svg-icons/videos-light-default.svg"
        />
      </div>{" "}
      &ensp;
      <div style={{ display: "inline-flex" }}>
        <h1>TV Shows</h1>
      </div>
      <Carousel autoplay={autoplay}>
        {videosData?.map((image: videoData, index: number) => {
          return (
            <CarouselItem key={index}>
              <Image
                setPopUpToggle={setPopUpToggle} // if clicked on image POP will come
                setUrl={setUrl} //if clicked on image url will be set for ReactPlayer
                popUpToggle={popUpToggle}
                imageUrl={image.imageUrl}
                url={image.url}
              />
            </CarouselItem>
          );
        })}
      </Carousel>
      <button onClick={() => setautoplay(!autoplay)}>
        {" "}
        Turn Autoplay {autoplay ? `Off` : `On`}
      </button>
      {popUpToggle ? (
        <Popup setPopUp={setPopUpToggle} url={url} popUp={popUpToggle} />
      ) : (
        <div></div>
      )}
    </>
  );
}

export default tvshows;
