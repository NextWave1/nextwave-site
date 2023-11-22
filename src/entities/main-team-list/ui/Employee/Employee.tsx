import Image from 'next/image'
import { FC } from 'react'

import person from '@/shared/assets/person.svg'
import { IEmployee } from '@/shared/model/types/employee-type'

import styles from './Employee.module.scss'

const Employee: FC<{ employee: IEmployee }> = ({ employee }) => {
	return (
		<article className={styles.employee}>
			<Image
				src={employee.photo || person}
				width={85}
				height={85}
				alt={employee.name}
			/>
			<span>{employee.name}</span>
		</article>
	)
}

export default Employee
