import { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import './Swiper.scss'
import Container from '@mui/material/Container'
import Fan from 'assets/Fan.png'

export default () => {
    return (
        <Container className='swiper-container'>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                loop={true}
                cssMode={true}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className="slider-info">
                        <div className="col-1">
                            <div className="naming">
                                <h1>MeItem</h1>
                            </div>
                            <div className="naming-description">
                                Meltem – це гарантовано якісне вентиляційне обладнання від німецького заводу.
                            </div>
                            <div className="production">
                                Продукція
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="production-image">
                                <img src={Fan} alt="" />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="production-naming">
                                Відцентровий витяжний вентилятор
                            </div>
                            <div className="production-model">
                                Meltem V-II 30-N
                            </div>
                            <div className="production-details">
                                Детальніше
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className="slider-info">
                    <div className="col-1">
                        <div className="naming">
                            <h1>MeItem</h1>
                        </div>
                        <div className="naming-description">
                            Meltem – це гарантовано якісне вентиляційне обладнання від німецького заводу.
                        </div>
                        <div className="production">
                            Продукція
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="production-image">
                            <img src={Fan} alt="" />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="production-naming">
                            Відцентровий витяжний вентилятор
                        </div>
                        <div className="production-model">
                            Meltem V-II 30-N
                        </div>
                        <div className="production-details">
                            Детальніше
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide><div className="slider-info">
                    <div className="col-1">
                        <div className="naming">
                            <h1>MeItem</h1>
                        </div>
                        <div className="naming-description">
                            Meltem – це гарантовано якісне вентиляційне обладнання від німецького заводу.
                        </div>
                        <div className="production">
                            Продукція
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="production-image">
                            <img src={Fan} alt="" />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="production-naming">
                            Відцентровий витяжний вентилятор
                        </div>
                        <div className="production-model">
                            Meltem V-II 30-N
                        </div>
                        <div className="production-details">
                            Детальніше
                        </div>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
        </Container>
    )
}