import { FC } from 'react'

import styles from './Title.module.scss'

const Title: FC<{ text: string }> = ({ text }) => {
	return <h2 className={styles.title}>{text}</h2>
}

export default Title
