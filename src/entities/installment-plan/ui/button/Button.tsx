import Link from 'next/link'
import { FC } from 'react'

import styles from './Button.module.scss'

const Button: FC = () => {
	return (
		<Link href={'/'} className={styles.button}>
			Узнать подробнее
		</Link>
	)
}

export default Button
