import { FC } from 'react'

import Title from '@/shared/ui/title/Title'

import styles from './MainBlockText.module.scss'

export const MainBlockText: FC = () => {
	return (
		<div className={styles.div}>
			<h1 className={styles.title}>NextWave</h1>
			<span className={styles.text}>IT Group</span>
			<Title text='Закажи сайт с индивидуальным дизайном' />
		</div>
	)
}
