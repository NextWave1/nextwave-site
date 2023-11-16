import Link from 'next/link'
import { FC } from 'react'

import { INavItem } from '@/shared/model/types/nav-item.type'

import styles from './NavItem.module.scss'

const NavItem: FC<{ item: INavItem }> = ({ item }) => {
	return (
		<li>
			<Link href={item.link}>{item.text}</Link>
		</li>
	)
}

export default NavItem
