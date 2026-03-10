'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './reviews-slider.module.sass'

const reviews = [
    { src: '/reviews/img.png', alt: 'Отзыв Галеа' },
    { src: '/reviews/Благодарственное_письмо_Проектные_Решения-1.png', alt: 'Благодарственное письмо Проектные Решения' },
    { src: '/reviews/Благодарственное_письмо_ЮРОПТИМА-1.png', alt: 'Благодарственное письмо ЮРОПТИМА' },
    { src: '/reviews/Скан_20260310_3-1.png', alt: 'Скан документа' },
]

export default function ReviewsSlider() {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Официальные благодарственные письма от наших клиентов</h3>
            <Swiper
                modules={[Autoplay, Navigation]}
                loop
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                navigation
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 24 },
                    1024: { slidesPerView: 3, spaceBetween: 24 },
                }}
                className={styles.swiper}
            >
                {reviews.map((review, i) => (
                    <SwiperSlide key={i} className={styles.slide}>
                        <Image
                            src={review.src}
                            alt={review.alt}
                            width={500}
                            height={700}
                            className={styles.image}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
