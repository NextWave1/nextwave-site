import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logo from '@/shared/assets/logo.svg'

import styles from './Logo.module.scss'

const Logo: FC = () => {
	return (
		<Link href='/'>
			<Image
				src={logo}
				width={64}
				height={52}
				alt='NextWave IT Group'
				className={styles.logo}
			/>
		</Link>
	)
}

export default Logo
