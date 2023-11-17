import { Variants } from 'framer-motion'

import { primaryColor } from '@/shared/config/constants-config'

export const navItemAnimation: Variants = {
	hidden: {
		opacity: 0,
		x: '-20%',
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
		},
	},
	hover: {
		scale: 1.1,
	},
}
