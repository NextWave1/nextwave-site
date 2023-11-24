import { FC } from 'react'

import styles from './ListItem.module.scss'

const ListItem: FC<{ advantage: string }> = ({ advantage }) => {
	return (
		<li className={styles.item}>
			<span>•</span>
			<p>{advantage}</p>
		</li>
	)
}

export default ListItem
