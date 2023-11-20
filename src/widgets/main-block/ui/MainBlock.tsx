import { FC } from 'react'

import { MainBlockText } from '@/entities/main-block-text'
import { MainLogo } from '@/entities/main-logo'

import styles from './MainBlock.module.scss'

export const MainBlock: FC = () => {
	return (
		<section className={styles.block}>
			<MainLogo />
			<MainBlockText />
		</section>
	)
}
