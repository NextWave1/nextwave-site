import { FC } from 'react'

import { contactsIcons } from '../config/contacts-icon-config'

import styles from './Contacts.module.scss'
import ContactIcon from './contact-icon/ContactIcon'

export const Contacts: FC = () => {
	return (
		<div className={styles.contacts}>
			{contactsIcons.map(icon => (
				<ContactIcon icon={icon} key={icon.link} />
			))}
		</div>
	)
}
