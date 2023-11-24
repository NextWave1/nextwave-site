import { FC } from 'react'

import { IStageWork } from '@/shared/model/types/stage-work-type'

import styles from './Stage.module.scss'

const Stage: FC<{ stage: IStageWork }> = ({ stage }) => {
	return (
		<li className={styles.stage}>
			<span className={styles.number}>{stage.number}</span>
			<span className={styles.text}>{stage.text}</span>
		</li>
	)
}

export default Stage
