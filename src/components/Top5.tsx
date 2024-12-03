import { Swiper, SwiperSlide } from 'swiper/react';  // 이렇게 한 줄로 수정
import 'swiper/swiper-bundle.css'; 
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules'; // 모듈 가져오기
import Card from './Card';

interface Top5Props {
  movies: Movie[];
}

interface Movie {
  id: number;
  title: string;
  poster_path: string; 
  overview: string; 
  genres: { id: number; name: string }[];
  rating: number;
}

export default function Top5({movies}:Top5Props) {

  const top5Movies = [...movies]
    .sort((a,b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <>
      <div className="flex items-center justify-center ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]} // 커버플로우 효과 추가
          spaceBetween={20}
          slidesPerView={5} // 자동 슬라이드 너비
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }} 
          pagination={{
            clickable: true,
          }}
          effect="coverflow" // 커버플로우 효과 활성화
          grabCursor={true}
          centeredSlides={true}
          initialSlide={2}
          speed={600}
          preventClicks={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 20,
            depth: 350,
            modifier: 1,
            slideShadows: true,
          }}
          onSwiper={(swiper) => {
            // Swiper 이벤트 핸들러
            swiper.on('click', (event) => {
              swiper.slideTo(swiper.clickedIndex);
            });
          }}
          className={`lg:w-[1500px] lg:h-[30rem]
            `}>
          {top5Movies.map((movie, index) => (
            <SwiperSlide 
              key={movie.id} 
              className="flex items-center justify-center"
            >
              <div className={
                `w-[310px] h-[25rem] sm:h-[15rem] md:h-[30rem] lg:h-[30rem] rounded-3xl 
                 shadow-custom-heavy relative
                `}>
                  {index !== 2 && (
                    <div
                      className='absolute top-0 left-0 w-full h-full bg-white opacity-30 rounded-3xl z-20'
                      >

                    </div>
                  )}
                <div className="relative w-full h-full z-10">
                  {/* Card 컴포넌트 삽입 */}
                  <Card movie={movie} />
                </div>
              </div>
            </SwiperSlide>
          ))}
            {/* 좌우 화살표 */}
            <div className="swiper-button-next text-white rounded-full p-2"></div>
            <div className="swiper-button-prev text-white rounded-full p-2"></div>

        </Swiper>
  
      </div>
    </>
  )
}
