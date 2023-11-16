import { Variants } from 'framer-motion'

export const waveAnimation: Variants = {
	hidden: {},
	show: {
		transition: {
			delayChildren: 1,
			staggerChildren: 0.02,
		},
	},
}

export const pathAnimation: Variants = {
	hidden: {
		strokeDasharray: 6150,
		strokeDashoffset: 6150,
	},
	show: {
		strokeDashoffset: 0,
		transition: {
			duration: 5,
		},
	},
}
