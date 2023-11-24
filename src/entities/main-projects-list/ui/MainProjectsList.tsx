'use client'

import Image from 'next/image'
import { FC } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import { projects } from '@/shared/config/projects-config'

import styles from './MainProjectsList.module.scss'

export const MainProjectsList: FC = () => {
	return (
		<Swiper spaceBetween={40} slidesPerView={3} className={styles.slider}>
			{projects.map(project => (
				<SwiperSlide className={styles.slide} key={project.id}>
					<Image
						src={project.image}
						fill
						objectFit='cover'
						objectPosition='center'
						alt={project.name}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	)
}
