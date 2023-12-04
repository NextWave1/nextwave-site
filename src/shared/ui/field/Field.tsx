import cn from 'clsx'
import { forwardRef } from 'react'

import { IField } from '@/shared/model/types/form-types'

import styles from './Field.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
	({ span, error, type = 'text', textarea, ...rest }, forwardRef: any) => {
		return (
			<label className={styles.label}>
				<span className={styles.span}>{span}</span>
				{textarea ? (
					<textarea
						ref={forwardRef}
						{...rest}
						className={cn(styles.input, styles.textarea, {
							[styles.isError]: error,
						})}
					/>
				) : (
					<input
						type={type}
						ref={forwardRef}
						{...rest}
						className={cn(styles.input, {
							[styles.isError]: error,
						})}
					/>
				)}

				{error && <span className={styles.error}>{error.message}</span>}
			</label>
		)
	}
)
export default Field
