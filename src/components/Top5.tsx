import { Swiper, SwiperSlide } from 'swiper/react';  // 이렇게 한 줄로 수정
import 'swiper/swiper-bundle.css'; 
import { Navigation, Pagination } from 'swiper/modules'; // 모듈 가져오기



export default function Top5() {
  return (
    <>
      <div className="flex items-center justify-center ">
      <Swiper
        className="h-64 rounded-lg shadow-lg"
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation
        modules={[Navigation, Pagination]} >
      <SwiperSlide className="bg-blue-500 text-white text-center p-4 rounded-md">
        <div
          className={`
            bg-white 
            sm:hidden md:hidden lg:block 
            sm:w-[10%] md:w-[60%] lg:w-[310px] 
            h-[25rem] sm:h-[15rem] md:h-[30rem] lg:h-[30rem]
            rounded-[30px]
            `}>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-yellow-500 text-white text-center p-4 rounded-md">
        Custom Slide 2
      </SwiperSlide>
      </Swiper>
      
  
      </div>
    </>
  )
}
