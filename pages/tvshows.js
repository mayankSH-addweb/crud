import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

function tvshows() {
  const [videosData, setVideosData] = useState([]);
  useEffect(() => {
    fetch("mock.json")
      .then((res) => res.json())
      .then((res) => setVideosData(res));
  }, []);

  return (
    <>
      <Grid item container className={"pageHeader"}>
        <div>
          <img
            style={{ width: "35px", height: "35px" }}
            src="/svg-icons/videos-light-default.svg"
          />
        </div>
        <div>
          <h1>TV Shows</h1>
        </div>
      </Grid>
      <style jsx>
        {`
          @keyframes spin {
            0% {
              width: 400px;
            }
            25% {
              width: 300px;
            }
            75% {
              width: 100px;
            }
            100% {
              width: 0%;
            }
          }
          body{
            display: flex,
            align-items: center,
            justify-content: center,
          }
          .container{
            position: "relative",
          }
          .videosCarousel-before, .videosCarousel-after{ 
            position: absolute,
            width: 400px,
            height: 250px,
            padding: 10px,
            marginBottom: 20px,
          }
          .before {
            width: 200px;
            padding: 20px;
          }
        `}
      </style>
      <div className="container">
        {videosData.map((image, index) => {
          return (
            <div
              className={
                index % 2 == 0 ? `videoCarousel-after` : `videoCarousel-before`
              }
              // style={{
              //   display: "flex",
              //   alignItems: "center",
              //   justifyContent: "center",
              // }}
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
                    marginBottom: "20px",
                  }}
                  src={image.imageUrl}
                />
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default tvshows;

// animation: spin 3s linear infinite;
