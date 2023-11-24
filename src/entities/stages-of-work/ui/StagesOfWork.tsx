import { FC } from 'react'

import Title from '@/shared/ui/title/Title'

import styles from './StagesOfWork.module.scss'
import Stages from './stages/Stages'

export const StagesOfWork: FC = () => {
	return (
		<div>
			<Title text='Как мы работаем' />
			<Stages />
		</div>
	)
}
