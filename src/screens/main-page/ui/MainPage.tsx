import { FC } from 'react'

import { MainBlock } from '@/widgets/main-block'

import styles from './MainPage.module.scss'

export const MainPage: FC = () => {
	return (
		<main className={styles.page}>
			<MainBlock />
		</main>
	)
}
