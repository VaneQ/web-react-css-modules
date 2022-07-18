import React from 'react'
import styles from './Find.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css'
import 'swiper/css/navigation'

import Card from './Card';

const Find = () => {

    const images = [
        {
            id:1,
            src:'https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'
        },
        {   
            id:2,
            src:'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        },
        {
            id:3,
            src:'https://images.unsplash.com/photo-1534093607318-f025413f49cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        },
        {
            id:4,
            src:'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
        },
        {
            id:5,
            src:'https://images.unsplash.com/photo-1566274360936-69fae8dc1d95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        },
        {
            id:6,
            src:'https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1095&q=80'
        }
    ]
    return (
        <div className={styles.find}>
            <div className={styles.heading}>
                <h1>Find your dream car</h1>
                <div className={styles.text_bg}>
                    <p>
                        <span>Explore our extensive roster of last models cars</span>
                    </p>
                </div>
            </div>
            <div className={styles.slider_container}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={5}
                    navigation
                    breakpoints={{
                        340:{
                            width: 200,
                            slidesPerView:1,
                        },
                        768:{
                            width: 768,
                            slidesPerView: 4,
                        },
                        1040:{
                            width: 1040,
                            slidesPerView: 5,
                        },
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        images.map(( image ) => {

                           return <SwiperSlide key={image.id}>
                                    <Card image={image} make='Car'/>      
                                    </SwiperSlide>
                        })
                            
                    }
                    
                </Swiper>
            </div>
        </div>
    )
}

export default Find