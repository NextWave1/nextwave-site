import Image from 'next/image'
import { FC } from 'react'

import mainLogo from '@/shared/assets/big-logo.svg'

export const MainLogo: FC = () => {
	return (
		<div>
			<Image src={mainLogo} width={400} height={400} alt='NextWave лого' />
		</div>
	)
}
