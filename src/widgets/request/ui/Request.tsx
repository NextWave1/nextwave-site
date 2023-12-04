import { FC } from 'react'

import { RequestForm } from '@/features/request-form'

import Title from '@/shared/ui/title/Title'

import styles from './Request.module.scss'

export const Request: FC = () => {
	return (
		<section className={styles.section}>
			<Title text='Оставить заявку' />
			<RequestForm />
		</section>
	)
}
