import { FC } from 'react'

import { IService } from '@/shared/model/types/service-type'

import styles from './Service.module.scss'

export const Service: FC<{ service: IService }> = ({ service }) => {
	return (
		<article className={styles.service}>
			<h3 className={styles.name}>{service.name}</h3>
			<p className={styles.text}>{service.description}</p>
		</article>
	)
}
