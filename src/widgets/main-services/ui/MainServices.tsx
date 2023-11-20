import { FC } from 'react'

import { MainService } from '@/entities/main-service'
import { MainServiceButton } from '@/entities/main-service-button'

import { services } from '@/shared/config/services-config'

import styles from './MainServices.module.scss'

export const MainServices: FC = () => {
	return (
		<section className={styles.block}>
			{services.slice(0, 5).map(service => (
				<MainService service={service} key={service.id} />
			))}
			<MainServiceButton />
		</section>
	)
}
