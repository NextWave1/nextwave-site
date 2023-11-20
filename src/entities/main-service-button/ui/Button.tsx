import Link from 'next/link'
import { FC } from 'react'

import styles from './Button.module.scss'

export const Button: FC = () => {
	return (
		<Link href='/services' className={styles.button}>
			Подробнее
		</Link>
	)
}
