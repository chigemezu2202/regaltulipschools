// import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import "./Styles.css";
const ImagesSlider = ({ images, interval = 5000 }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  };

  const showPrevImage = () => {
    setImageIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  // console.log(switchSlide)

  useEffect(() => {
    var myInterval = setInterval(showNextImage, interval);
    return () => clearInterval(myInterval);
  });

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {images.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
            alt={alt}
            // aria-hidden={imageIndex !== index}
          />
        ))}
      </div>
      <button
        aria-label="showPrevImage"
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: "0" }}
        aria-hidden="true"
      >
        {" "}
        {/* <ArrowBigLeft />{" "} */}
      </button>
      <button
        aria-label="showNextImage"
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: "0" }}
        aria-hidden="true"
      >
        {" "}
        {/* <ArrowBigRight />{" "} */}
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {images.map((_, index) => (
          <button
            aria-label={`View Image ${index + 1}`}
            className="img-slider-dot-btn"
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
             ""
            ) : (
             ""
            )}
          </button>
        ))}
      </div>
    </>
  );
};

ImagesSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  interval: PropTypes.number,
};
export default ImagesSlider;
