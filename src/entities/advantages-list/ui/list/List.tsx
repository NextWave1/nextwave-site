import { FC } from 'react'

import { advantages } from '@/shared/config/advantages-config'

import styles from './List.module.scss'
import ListItem from './list-item/ListItem'

const List: FC = () => {
	return (
		<ul className={styles.list}>
			{advantages.map((advantage, index) => (
				<ListItem advantage={advantage} key={index} />
			))}
		</ul>
	)
}

export default List
