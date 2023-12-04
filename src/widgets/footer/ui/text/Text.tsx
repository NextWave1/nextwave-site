import { FC } from 'react'

import styles from './Text.module.scss'

const Text: FC = () => {
	return (
		<p className={styles.text}>
			Для современного мира начало повседневной работы по формированию позиции
			выявляет срочную потребность экспериментов, поражающих по своей
			масштабности и грандиозности. С учётом сложившейся международной
			обстановки, современная методология разработки создаёт необходимость
			включения в производственный план
		</p>
	)
}

export default Text