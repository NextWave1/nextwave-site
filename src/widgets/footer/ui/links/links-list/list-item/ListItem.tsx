import Link from 'next/link'
import { FC } from 'react'

import { ILink } from '@/widgets/footer/model/links-types'

import styles from './ListItem.module.scss'

const ListItem: FC<{ linkItem: ILink }> = ({ linkItem }) => {
	return (
		<li className={styles.link}>
			<Link href={linkItem.link}>{linkItem.text}</Link>
		</li>
	)
}

export default ListItem
