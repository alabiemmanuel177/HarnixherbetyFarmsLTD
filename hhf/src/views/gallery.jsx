import React from "react";
import { CarouselWrapper } from "react-pretty-carousel";
import "../products.css";
export const Gallery = () => {
  const [images, setimages] = React.useState([
    "https://res.cloudinary.com/manlikeemma/image/upload/v1652779377/Farm/IMG-20220401-WA0040_e7jrso.jpg",
    "https://res.cloudinary.com/manlikeemma/image/upload/v1652779377/Farm/IMG-20220401-WA0040_e7jrso.jpg",
    "https://res.cloudinary.com/manlikeemma/image/upload/v1652779377/Farm/IMG-20220401-WA0040_e7jrso.jpg",
    "https://res.cloudinary.com/manlikeemma/image/upload/v1652779377/Farm/IMG-20220401-WA0040_e7jrso.jpg",
    "https://res.cloudinary.com/manlikeemma/image/upload/v1652779377/Farm/IMG-20220401-WA0040_e7jrso.jpg",
    "https://res.cloudinary.com/manlikeemma/image/upload/v1652779377/Farm/IMG-20220401-WA0040_e7jrso.jpg",
    "https://res.cloudinary.com/manlikeemma/image/upload/v1652779377/Farm/IMG-20220401-WA0040_e7jrso.jpg",
    "https://res.cloudinary.com/manlikeemma/image/upload/v1652779377/Farm/IMG-20220401-WA0040_e7jrso.jpg",
    "https://res.cloudinary.com/manlikeemma/image/upload/v1652779377/Farm/IMG-20220401-WA0040_e7jrso.jpg",
    "https://res.cloudinary.com/manlikeemma/image/upload/v1652779377/Farm/IMG-20220401-WA0040_e7jrso.jpg",
  ]);
  return (
  <div className="gallery">
    <h1 className= "indicator">Gallery</h1>
    <CarouselWrapper items={3} mode="gallery">
        {images.map((image, index) => (
            <img src={image} alt={`pic-${index}`} key={image} className="img-sze"/>
        ))}
    </CarouselWrapper>
  </div>
)};
