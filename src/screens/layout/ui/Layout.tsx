import { FC, PropsWithChildren } from 'react'

import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

import Wave from '@/shared/ui/wave/Wave'

import styles from './Layout.module.scss'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Wave />
			<Header />
			{children}
			<Footer />
		</div>
	)
}
