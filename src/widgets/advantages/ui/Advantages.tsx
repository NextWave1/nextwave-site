import { FC } from 'react'

import { AdvantagesList } from '@/entities/advantages-list'
import { StagesOfWork } from '@/entities/stages-of-work'

import styles from './Advantages.module.scss'

export const Advantages: FC = () => {
	return (
		<section className={styles.section}>
			<StagesOfWork />
			<AdvantagesList />
		</section>
	)
}
