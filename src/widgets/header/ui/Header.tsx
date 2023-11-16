import { FC } from 'react'

import { Contacts } from '@/entities/contacts'
import { Nav } from '@/entities/nav'

import Logo from '@/shared/ui/logo/Logo'

import styles from './Header.module.scss'

export const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<div className={styles.right}>
				<Nav />
				<Contacts />
			</div>
		</header>
	)
}
