import { Metadata } from 'next'
import { FC } from 'react'

import { createMetaTitle } from '@/shared/lib/utils/meta/create-meta-title'

export const metadata: Metadata = {
	title: createMetaTitle('Главная'),
}

const page: FC = () => {
	return <main>привsadddddddddddddddddddddddddет</main>
}

export default page
