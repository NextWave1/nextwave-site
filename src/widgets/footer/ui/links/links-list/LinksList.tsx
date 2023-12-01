import { FC } from 'react'

import { ILinkList } from '@/widgets/footer/model/links-types'

import styles from './LinksList.module.scss'
import ListItem from './list-item/ListItem'

const LinksList: FC<{ linkList: ILinkList }> = ({ linkList }) => {
	return (
		<div className={styles.wrapper}>
			<h3>{linkList.title}</h3>
			<ul className={styles.list}>
				{linkList.links.map(linkItem => (
					<ListItem linkItem={linkItem} key={linkItem.text} />
				))}
			</ul>
		</div>
	)
}

export default LinksList
