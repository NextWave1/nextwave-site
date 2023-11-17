'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IContactIcon } from '../../model/contact-icon-type'

import styles from './ContactIcon.module.scss'
import { contactIconAnimation } from './contact-icon-animation'

const ContactIcon: FC<{ icon: IContactIcon }> = ({ icon }) => {
	return (
		<motion.div variants={contactIconAnimation} initial='hidden' animate='show'>
			<Link href={icon.link}>
				<Image
					src={icon.image}
					width={20}
					height={20}
					alt={icon.name}
					className={styles.icon}
				/>
			</Link>
		</motion.div>
	)
}

export default ContactIcon
