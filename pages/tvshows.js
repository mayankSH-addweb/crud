import React, { useEffect, useState } from "react";
import Carousel, { carouselItem } from "./Carousel";

function tvshows() {
  const [videosData, setVideosData] = useState([]);
  useEffect(() => {
    fetch("mock.json")
      .then((res) => res.json())
      .then((res) => setVideosData(res));
  }, []);

  // const [i, setI] = useState(0);
  // const [n, setN] = useState(0);
  // var imageToDisplay;
  // while (n <= 2) {
  //   if (i < videosData.length - 1) {
  //     imageToDisplay = (
  //       <img
  //         className={index % 2 == 0 ? `after` : `before`}
  //         draggable={false}
  //         style={{
  //           // position: "absolute",
  //           width: "400px",
  //           height: "250px",
  //           padding: "10px",
  //           // marginBottom: "20px",
  //         }}
  //         src={videosData[i].imageUrl}
  //       />
  //     );
  //     setI(0);
  //   } else {
  //     imageToDisplay = (
  //       <img
  //         className={index % 2 == 0 ? `after` : `before`}
  //         draggable={false}
  //         style={{
  //           // position: "absolute",
  //           width: "400px",
  //           height: "250px",
  //           padding: "10px",
  //           // marginBottom: "20px",
  //         }}
  //         src={videosData[i].imageUrl}
  //       />
  //     );
  //     setI((prev) => prev + 1);
  //   }
  //   setN((prev) => prev + 1);
  // }

  console.log(videosData.length)

  return (
    <>
      <div>
        <img
          style={{ width: "35px", height: "35px" }}
          src="/images/video1.jpg"
        />
      </div>
      <div>
        <h1>TV Shows</h1>
      </div>
      {/* <div className="container">
        {videosData.map((image, index) => {
          return (
            <div
              className={
                index % 2 == 0 ? `videoCarousel-after` : `videoCarousel-before`
              }
            >
              <a href={image.url} target="_blank">
                <img
                  className={index % 2 == 0 ? `after` : `before`}
                  draggable={false}
                  style={{
                    position: "absolute",
                    width: "400px",
                    height: "250px",
                    padding: "10px",
                    // marginBottom: "20px",
                  }}
                  src={image.imageUrl}
                />
              </a>
            </div>
          );
        })}
      </div> */}
      <Carousel data = {videosData}>
        {videosData.map((image)=>{
          return (
            <carouselItem>
              <h3 style={{display: "inline-flex"}}>{image.title}</h3>
              <img
                style={{
                  width: "400px",
                  height: "250px",
                  padding: "10px",
                }}
                alt="panga"
                src={image.imageUrl}
              />
            </carouselItem>
          );
        })}
      </Carousel>
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
