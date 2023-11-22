import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import arrow from '@/shared/assets/small-arrow.svg'

import styles from './Button.module.scss'

const Button: FC = () => {
	return (
		<Link href='/team' className={styles.button}>
			<div className={styles.img}>
				<Image
					src={arrow}
					fill
					objectFit='cover'
					objectPosition='center'
					alt='Страница команды'
				/>
			</div>
		</Link>
	)
}

export default Button
