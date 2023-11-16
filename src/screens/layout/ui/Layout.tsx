import { FC, PropsWithChildren } from 'react'

import Wave from '@/shared/ui/wave/Wave'

import styles from './Layout.module.scss'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Wave />
			{children}
		</div>
	)
}
