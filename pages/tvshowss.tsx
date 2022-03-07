import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Carousel, { CarouselItem } from "./Carousel";

function tvshows() {
  const [videosData, setVideosData] = useState([]);
  const [pop, setPop] = useState(false);
  const [url, setUrl] = useState("");
  useEffect(() => {
    fetch("mock.json")
      .then((res) => res.json())
      .then((res) => setVideosData(res));
  }, []);

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
      <Carousel>
        {videosData?.map((image: videoData, index: number) => {
          return (
            <CarouselItem key={index}>
              {/* <h3 style={{ display: "inline-flex" }}>{image.title}</h3> */}
              <img
                style={{
                  width: "400px",
                  height: "250px",
                  padding: "10px",
                  cursor: "pointer",
                }}
                // onClick={() => <ReactPlayer url={image.url} />}
                onClick={() => {
                  setPop(true);
                  setUrl(image.url);
                }}
                alt="panga"
                src={image.imageUrl}
              />
            </CarouselItem>
          );
        })}
      </Carousel>
      {pop ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ReactPlayer url={url} />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default tvshows;

// animation: spin 3s linear infinite;

// .container{
//   position: "relative",
// }
// .videosCarousel-before, .videosCarousel-after{
//   position: absolute,
//   width: 400px,
//   height: 250px,
//   padding: 10px,
//   marginBottom: 20px,
// }
// .before {
//   width: 200px;
//   padding: 20px;
// }
