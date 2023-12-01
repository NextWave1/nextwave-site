import Image from 'next/image'
import { FC } from 'react'

import tinkoffLogo from '@/shared/assets/tinkoff.svg'
import Title from '@/shared/ui/title/Title'

import styles from './InstallmentPlan.module.scss'
import Button from './button/Button'

export const InstallmentPlan: FC = () => {
	return (
		<section className={styles.section}>
			<Image
				src={tinkoffLogo}
				width={112}
				height={112}
				alt='Тинькофф банк'
				className={styles.logo}
			/>
			<Title text='Сайт в рассрочку без переплат' />
			<Button />
		</section>
	)
}
