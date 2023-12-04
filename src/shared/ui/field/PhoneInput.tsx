import cn from 'clsx'
import { forwardRef } from 'react'
import InputMask from 'react-input-mask'

import { IField } from '@/shared/model/types/form-types'

import styles from './Field.module.scss'

const PhoneInput = forwardRef<HTMLInputElement, IField>(
	({ span, error, type = 'tel', ...rest }, forwardRef: any) => {
		return (
			<label className={styles.label}>
				<span className={styles.span}>{span}</span>
				<InputMask
					mask={'+7 (999) 999-99-99'}
					ref={forwardRef}
					type={type}
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
export default PhoneInput
