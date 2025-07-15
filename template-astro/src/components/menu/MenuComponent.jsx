import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const MenuComponent = () => {
  return (
    <Swiper 
        slidesPerView={1}
        spaceBetween={20}
        pagination={{clickable: true}}
        navigation
    >
        <SwiperSlide><img src="/images/carta1.jpg" alt="carta1" /></SwiperSlide>    
        <SwiperSlide><img src="/images/carta2.jpg" alt="carta2" /></SwiperSlide>    
    </Swiper>


  )
}
