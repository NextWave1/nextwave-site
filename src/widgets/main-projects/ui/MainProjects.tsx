import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { MainProjectsList } from '@/entities/main-projects-list'

import arrow from '@/shared/assets/long-arrow.svg'
import Title from '@/shared/ui/title/Title'

import styles from './MainProjects.module.scss'

export const MainProjects: FC = () => {
	return (
		<section className={styles.section}>
			<Title text='Наши проекты' />
			<MainProjectsList />
			<div className={styles.buttonWrapper}>
				<Link href='/team' className={styles.button}>
					<div className={styles.img}>
						<Image
							src={arrow}
							fill
							objectFit='cover'
							objectPosition='center'
							alt='Страница портфолио'
						/>
					</div>
				</Link>
			</div>
		</section>
	)
}
