import emailIcon from '@/shared/assets/email.svg'
import telegramIcon from '@/shared/assets/telegram.svg'
import whatsappIcon from '@/shared/assets/whatsapp.svg'
import { email, telegram, whatsapp } from '@/shared/config/contacts.config'

import { IContactIcon } from '../model/contact-icon-type'

export const contactsIcons: IContactIcon[] = [
	{
		name: 'Email',
		link: email,
		image: emailIcon,
	},
	{
		name: 'Whatsapp',
		link: whatsapp,
		image: whatsappIcon,
	},
	{
		name: 'Telegram',
		link: telegram,
		image: telegramIcon,
	},
]
