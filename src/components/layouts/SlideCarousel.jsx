/* eslint-disable react/prop-types */
import "./slideCarousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-flip";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper/modules";


const SlideCarousel = ({ imageUrls }) => {
  return (
    <Swiper
      effect={"flip"}
      grabCursor={true}
      pagination={true}
      navigation={true}
      modules={[EffectFlip, Pagination, Navigation]}
    >
      {imageUrls.map((imageUrl, index) => (
        <SwiperSlide className="slide" key={index}>
          <img src={imageUrl} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideCarousel;
