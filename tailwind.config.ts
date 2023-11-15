import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

const primary = '#3A92B7'

const config: Config = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx,mdx,scss}',
		'./src/screens/**/*.{js,ts,jsx,tsx,mdx,scss}',
		'./src/widgets/**/*.{js,ts,jsx,tsx,mdx,scss}',
		'./src/features/**/*.{js,ts,jsx,tsx,mdx,scss}',
		'./src/entities/**/*.{js,ts,jsx,tsx,mdx,scss}',
		'./src/shared/**/*.{js,ts,jsx,tsx,mdx,scss}',
	],
	theme: {
		colors: {
			primary,
			black: colors.black,
			white: colors.white,
			transparent: colors.transparent,
			darkBlue: '#25345B',
			gray: '#212327',
			siren: '#656BA4',
		},
		extend: {
			fontFamily: {
				inter: ['var(--font-inter)'],
				unbounded: ['var(--font-unbounded)'],
			},
			spacing: {
				8: '8px',
				16: '16px',
				24: '24px',
				32: '32px',
				40: '40px',
				48: '48px',
				56: '56px',
				64: '64px',
				72: '72px',
				80: '80px',
				88: '88px',
				96: '96px',
				104: '104px',
				112: '112px',
				120: '120px',
			},
			borderRadius: {
				8: '8px',
				16: '16px',
				24: '24px',
				32: '32px',
				40: '40px',
				48: '48px',
				56: '56px',
				64: '64px',
				half: '50%',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
			},
		},
	},
	plugins: [
		plugin(({ addComponents, addUtilities, theme }) => {
			addUtilities({
				'.blue-gradient': {
					background:
						'linear-gradient(to right, rgba(25, 59, 145, 0.1625), rgba(195, 204, 227, 0.0525));',
				},
			})
		}),
	],
}
export default config
