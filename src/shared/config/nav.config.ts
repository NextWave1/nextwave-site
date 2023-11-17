import { INavItem } from '@/shared/model/types/nav-item.type'

import { createPhoneNumber } from '../lib/utils/text/phone-number'

import { phoneNumber } from './contacts.config'

export const navItems: INavItem[] = [
	{
		text: 'О нас',
		link: '/#about-us',
	},
	{
		text: 'Услуги',
		link: '/services',
	},
	{
		text: 'Портфолио',
		link: '/portfolio',
	},
	{
		text: createPhoneNumber(phoneNumber),
		link: 'tel:+78142332211',
	},
]
