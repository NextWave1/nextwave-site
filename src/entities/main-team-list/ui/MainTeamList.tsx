import { FC } from 'react'

import { team } from '@/shared/config/team-config'

import Employee from './Employee/Employee'
import styles from './MainTeamLIst.module.scss'
import Button from './button/Button'

export const MainTeamList: FC = () => {
	return (
		<div className={styles.list}>
			{team.slice(0, 5).map(employee => (
				<Employee employee={employee} key={employee.id} />
			))}
			<Button />
		</div>
	)
}
