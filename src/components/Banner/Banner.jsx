// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'




import bgimg1 from '../../assets/banner3.jpg'
import bgimg2 from '../../assets/banner2.jpg'
import bgimg3 from '../../assets/banner1.jpg'
import Slider from './Slider'

export default function Banner() {



  return (
    <div className='container px-6 py-10 mx-auto rounded-2xl'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide className='rounded-2xl'>
          <Slider
            image={bgimg1}
          />
        </SwiperSlide>
        <SwiperSlide className='rounded-2xl'>
          <Slider
            image={bgimg2}
          />
        </SwiperSlide>
        <SwiperSlide className='rounded-2xl'>
          <Slider
            image={bgimg3}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}