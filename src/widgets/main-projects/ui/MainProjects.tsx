import { FC } from 'react'

import { MainProjectsList } from '@/entities/main-projects-list'

import Title from '@/shared/ui/title/Title'

import styles from './MainProjects.module.scss'

export const MainProjects: FC = () => {
	return (
		<section className={styles.section}>
			<Title text='Наши проекты' />
			<MainProjectsList />
		</section>
	)
}
