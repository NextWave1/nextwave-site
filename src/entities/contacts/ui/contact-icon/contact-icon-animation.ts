import { Variants } from 'framer-motion'

export const contactIconAnimation: Variants = {
	hidden: {
		scale: 0,
	},
	show: {
		scale: 1,
		transition: {
			delay: 0.5,
			duration: 0.5,
		},
	},
}
