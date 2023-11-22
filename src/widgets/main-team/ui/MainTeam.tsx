import { FC } from 'react'

import { MainTeamList } from '@/entities/main-team-list'

import Title from '@/shared/ui/title/Title'

import styles from './MainTeam.module.scss'

export const MainTeam: FC = () => {
	return (
		<section className={styles.section}>
			<Title text='Наша команда' />
			<MainTeamList />
		</section>
	)
}
