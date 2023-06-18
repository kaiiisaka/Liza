import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation, Pagination} from "swiper";

export default function Reviews () {
  return (
    <>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper items-center w-full"
      >
        <SwiperSlide>
          <img src="https://www.lodka-comfort.ru/image/catalog/otz-e1433765236972.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://storum.ru/catalog/view/theme/storum_3/image/information/reviews/top-banner-main.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://artem-iroshnikov.ru/sites/default/files/inline/images/2022-06-30_01-38-09.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
