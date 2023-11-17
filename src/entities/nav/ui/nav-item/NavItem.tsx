'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FC } from 'react'

import { INavItem } from '@/shared/model/types/nav-item.type'

import styles from './NavItem.module.scss'
import { navItemAnimation } from './nav-item-animation'

const NavItem: FC<{ item: INavItem }> = ({ item }) => {
	return (
		<motion.li
			variants={navItemAnimation}
			initial='hidden'
			animate='show'
			whileHover='hover'
			className={styles.link}
		>
			<Link href={item.link}>{item.text}</Link>
		</motion.li>
	)
}

export default NavItem
