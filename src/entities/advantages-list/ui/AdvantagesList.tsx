import { FC } from 'react'

import Title from '@/shared/ui/title/Title'

import List from './list/List'

export const AdvantagesList: FC = () => {
	return (
		<div>
			<Title text='Преимущества' />
			<List />
		</div>
	)
}
