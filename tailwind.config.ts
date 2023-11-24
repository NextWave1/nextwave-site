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
				20: '20px',
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
				184: '184px',
				200: '200px',
				320: '320px',
				400: '400px',
				1200: '1200px',
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
			addComponents({
				'.button-gradient': {
					border: '1px solid #fff',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					borderRadius: '50%',
				},
			}),
				addUtilities({
					'.blue-gradient': {
						background:
							'linear-gradient(100deg, rgba(25, 59, 145, 0.16) 16.8%, rgba(195, 204, 227, 0.05) 100%);',
					},
					'.bg-blur': {
						backdropFilter: 'blur(5px);',
					},
					'.H1': {
						fontWeight: '900',
						fontSize: '32px',
						lineHeight: '38px',
						fontFamily: theme('fontFamily.unbounded'),
					},
					'.H2': {
						fontWeight: '900',
						fontSize: '24px',
						lineHeight: '28px',
						fontFamily: theme('fontFamily.unbounded'),
					},
					'.H3': {
						fontWeight: '900',
						fontSize: '20px',
						lineHeight: '24px',
						fontFamily: theme('fontFamily.unbounded'),
					},
					'.H4': {
						fontWeight: '900',
						fontSize: '18px',
						lineHeight: '22px',
						fontFamily: theme('fontFamily.unbounded'),
					},
					'.T1': {
						fontWeight: '400',
						fontSize: '32px',
						lineHeight: '40px',
					},
					'.T2': {
						fontWeight: '400',
						fontSize: '24px',
						lineHeight: '32px',
					},
					'.T3': {
						fontWeight: '400',
						fontSize: '18px',
						lineHeight: '24px',
					},
				})
		}),
	],
}
export default config
