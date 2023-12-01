import { FC } from 'react'

import { links } from '../../config/links-config'

import styles from './Links.module.scss'
import LinksList from './links-list/LinksList'

const Links: FC = () => {
	return (
		<div className={styles.links}>
			{links.map(linkList => (
				<LinksList linkList={linkList} key={linkList.title} />
			))}
		</div>
	)
}

export default Links
