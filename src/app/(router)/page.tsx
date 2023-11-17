import { Metadata } from 'next'
import { FC } from 'react'

import { MainPage } from '@/screens/main-page'

import { createMetaTitle } from '@/shared/lib/utils/meta/create-meta-title'

export const metadata: Metadata = {
	title: createMetaTitle('Главная'),
}

const page: FC = () => {
	return <MainPage />
}

export default page
