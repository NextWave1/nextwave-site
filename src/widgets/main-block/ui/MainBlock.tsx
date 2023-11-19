import { FC } from 'react'

import { MainBlockText } from '@/entities/main-block-text'

import styles from './MainBlock.module.scss'

export const MainBlock: FC = () => {
	return (
		<section className={styles.block}>
			<div></div>
			<MainBlockText />
		</section>
	)
}
