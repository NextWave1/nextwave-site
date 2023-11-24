import { FC } from 'react'

import { stagesWork } from '@/shared/config/stages-work-config'

import styles from './Stages.module.scss'
import Stage from './stage/Stage'

const Stages: FC = () => {
	return (
		<ul className={styles.list}>
			{stagesWork.map(stage => (
				<Stage stage={stage} key={stage.number} />
			))}
		</ul>
	)
}

export default Stages
