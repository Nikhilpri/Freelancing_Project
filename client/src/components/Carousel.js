import React, { useState, useEffect, useRef } from "react";
import "../App.css";

const ImageCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [imagesToShow, setImagesToShow] = useState(1); // Default to 1 image
  const carouselRef = useRef(null); // Reference to the carousel container

  // Placeholder images array
  const images = [
    "https://picsum.photos/100",
    "https://picsum.photos/200",
    "https://picsum.photos/300",
    "https://picsum.photos/400",
    "https://picsum.photos/500",
    "https://picsum.photos/600",
    "https://picsum.photos/700",
    "https://picsum.photos/800",
    "https://picsum.photos/900",
    "https://picsum.photos/1000",
    "https://picsum.photos/1100",
    "https://picsum.photos/1200",
    "https://picsum.photos/1300",
    "https://picsum.photos/1400",
    "https://picsum.photos/1500",
    "https://picsum.photos/1600",
    "https://picsum.photos/1700",
    "https://picsum.photos/1800",
    "https://picsum.photos/1900",
    "https://picsum.photos/2000",
  ];

  // Define breakpoints for responsive image width
  const breakpoints = [
    { width: 320, imageWidth: 60 },
    { width: 375, imageWidth: 60 },
    { width: 414, imageWidth: 80 },
    { width: 480, imageWidth: 80 },
    { width: 600, imageWidth: 80 },
    { width: 640, imageWidth: 80 },
    { width: 768, imageWidth: 100 },
    { width: 800, imageWidth: 100 },
    { width: 900, imageWidth: 100 },
    { width: 1024, imageWidth: 100 },
    { width: 1200, imageWidth: 100 },
    { width: 1366, imageWidth: 100 },
    { width: 1440, imageWidth: 100 },
    { width: 1600, imageWidth: 100 },
    { width: 1920, imageWidth: 100 },
  ];

  // Function to dynamically set the number of images to show based on container width
  const updateImagesToShow = () => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth; // Get the width of the carousel container
      
      // Find the appropriate imageWidth based on the current window width
      const currentWidth = window.innerWidth;
      const matchedBreakpoint = breakpoints.reduce((acc, bp) => {
        return (currentWidth >= bp.width) ? bp : acc;
      }, breakpoints[0]);

      const imageWidth = matchedBreakpoint.imageWidth; // Use the matched image width
      const gap = 15; // Gap between images in pixels

      // Calculate how many images fit in the container
      const newImagesToShow = Math.floor(
        (containerWidth + gap) / (imageWidth + gap)
      );

      // Ensure at least one image is shown
      setImagesToShow(Math.max(newImagesToShow, 1));
    }
  };

  // Update imagesToShow and reset startIndex on screen resize
  useEffect(() => {
    updateImagesToShow();
    window.addEventListener("resize", updateImagesToShow);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateImagesToShow);
  }, []);

  // Update startIndex whenever imagesToShow changes
  useEffect(() => {
    setStartIndex(0); // Reset startIndex to 0 when imagesToShow changes
  }, [imagesToShow]);

  // Calculate the visible images based on the startIndex and imagesToShow
  const visibleImages = images.slice(startIndex, startIndex + imagesToShow);

  const handleNext = () => {
    if (startIndex < images.length - imagesToShow) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="Sponsors">
      <h2>Sponsors</h2>
      <div className="carousel-container" ref={carouselRef}>
        <div className="carousel-row">
          {visibleImages.map((img, index) => (
            <img
              src={img}
              alt={`Slide ${startIndex + index}`}
              key={index}
              className="carousel-image"
            />
          ))}
        </div>
        <div className="carousel-buttons">
          <button onClick={handlePrev} className="carousel-arrow">
            &lt;
          </button>
          <button onClick={handleNext} className="carousel-arrow">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
