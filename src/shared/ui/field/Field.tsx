import cn from 'clsx'
import { forwardRef } from 'react'

import { IField } from '@/shared/model/types/form-types'

import styles from './Field.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
	({ span, error, type = 'text', ...rest }, forwardRef: any) => {
		return (
			<label className={styles.label}>
				<span className={styles.span}>{span}</span>
				<input
					type={type}
					ref={forwardRef}
					{...rest}
					className={cn(styles.input, {
						[styles.isError]: error,
					})}
				/>
				{error && <span className={styles.error}>{error.message}</span>}
			</label>
		)
	}
)
export default Field
