// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperExample = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <img src="https://picsum.photos/200/600" alt="picsum" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://picsum.photos/200/301" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://picsum.photos/200/302" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://picsum.photos/200/303" alt="" />
            </SwiperSlide>
        </Swiper>
    )
}

export default SwiperExample