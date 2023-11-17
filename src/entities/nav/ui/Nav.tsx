import { FC } from 'react'

import { navItems } from '@/shared/config/nav.config'

import styles from './Nav.module.scss'
import NavItem from './nav-item/NavItem'

export const Nav: FC = () => {
	return (
		<nav>
			<ul className={styles.nav}>
				{navItems.map(item => (
					<NavItem item={item} key={item.link} />
				))}
			</ul>
		</nav>
	)
}
