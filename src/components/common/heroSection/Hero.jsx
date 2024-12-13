import React from "react";
import Hero1 from "../../assets/images/PHOTO-2024-10-23-00-52-32 (1).jpg";
import Hero2 from "../../assets/images/PHOTO-2024-10-23-00-52-32 (2).jpg";
import Hero3 from "../../assets/images/PHOTO-2024-10-23-00-52-33 (2).jpg";
import ImagesSlider from "./ImagesSlider";

const Hero = ({className}) => {
  const HeroImage = [
    { url: Hero1, alt: "Image One" },
    { url: Hero2, alt: "Image Two" },
    { url: Hero3, alt: "Image Three" },
  ];
  return (
    <>
      <ImagesSlider images={HeroImage} />
    </>
  );
};

export default Hero;
