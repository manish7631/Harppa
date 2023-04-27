import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./FourthGrid.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ImageSlider = ({ slides }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel
        showDots={true}
        responsive={responsive}
        itemClass="carousel-item-padding-40-px"
      >
        {slides.map((e, index) => {
          return (
            <Card
              key={index}
              sx={{
                backgroundColor: "transparent",
              }}
              className="FourthGrid_Section_Main_Second_Card_Card"
            >
              <CardActionArea
                sx={{
                  cursor: "auto",
                }}
              >
                <CardContent>
                  <h3 className="FourthGrid_Section_Main_First_Card_Card_Heading">
                    {e.title}
                  </h3>
                </CardContent>
                <Link to={e.link}>
                  <CardMedia
                    component="img"
                    className="FourthGrid_Section_Main_Second_Card_Image"
                    image={e.url}
                    alt="green iguana"
                  />
                </Link>
                <CardContent>
                  <p className="FourthGrid_Section_Main_First_Card_Paragraph">
                    {e.content}
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
