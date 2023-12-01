import { FC } from 'react'

import styles from './Footer.module.scss'
import Links from './links/Links'
import Text from './text/Text'
import Title from './title/Title'

export const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<Title />
			<Text />
			<Links />
		</footer>
	)
}
