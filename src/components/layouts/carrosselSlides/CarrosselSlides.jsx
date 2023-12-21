// Importações
import "./carrosselSlides.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";


// COmponente titulo (Slide 1)
function SlideTitulo({ titulo }) {
    return (
      <SwiperSlide className="slide">
        <div className="div_titulo">
          <h2>{titulo}</h2>
        </div>
      </SwiperSlide>
    );
  }

// Componente Slide

// function Slide({ imgSrc, altText }) {
//     return (
//       <SwiperSlide className="slide">
//         <img src={imgSrc} alt={altText} />
//       </SwiperSlide>
//     );
//   }

// Componente CarrosselSlides
function CarrosselSlides() {
  return (
    <Swiper
      className="carrosselSlides mySwiper"
      slidesPerView={2} // Número padrão de slides por visualização (mobile)
      centeredSlides={false}
      slidesPerGroupSkip={2}
      grabCursor={true}
      keyboard={{
        enabled: true,
      }}
      breakpoints={{
        650: {
          slidesPerView: 2, // No mobile, abaixo de 650px, exibir 2 slides
        },
        900: {
          slidesPerView: 3, // No tablet, a partir de 900px, exibir 3 slides
        },
        1200: {
          slidesPerView: 4, // No PC, a partir de 1200px, exibir 4 slides
        },
      }}
      scrollbar={true}
      navigation={true}
      //   pagination={{
      //     clickable: true,
      //   }}
      modules={[Keyboard, Scrollbar, Navigation, Pagination]}
    >
      <SlideTitulo className="slide" titulo="Últimos trabalhos"/>

      <SwiperSlide className="slide">
        <img
          src="https://cdn.magloft.com/github/swiper/images/page-001.jpg"
          alt="Slide 1"
        />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <img
          src="https://cdn.magloft.com/github/swiper/images/page-001.jpg"
          alt="Slide 1"
        />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <img
          src="https://cdn.magloft.com/github/swiper/images/page-001.jpg"
          alt="Slide 1"
        />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <img
          src="https://cdn.magloft.com/github/swiper/images/page-001.jpg"
          alt="Slide 1"
        />
      </SwiperSlide>
      {/* Adicione mais SwiperSlides conforme necessário */}
    </Swiper>
  );
}

export default CarrosselSlides;
