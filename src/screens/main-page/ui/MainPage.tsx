import { FC } from 'react'

import { MainBlock } from '@/widgets/main-block'
import { MainServices } from '@/widgets/main-services'
import { MainTeam } from '@/widgets/main-team'

import styles from './MainPage.module.scss'

export const MainPage: FC = () => {
	return (
		<main className={styles.page}>
			<MainBlock />
			<MainServices />
			<MainTeam />
		</main>
	)
}
