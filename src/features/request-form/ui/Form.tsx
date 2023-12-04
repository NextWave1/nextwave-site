'use client'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IFormData } from '@/shared/model/types/form-types'
import Field from '@/shared/ui/field/Field'

import styles from './Form.module.scss'

export const Form: FC = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormData>({
		mode: 'all',
	})

	const onSubmit: SubmitHandler<IFormData> = data => {
		console.table(data)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.fields}>
				<Field
					{...register('name', {
						required: 'Введите имя',
					})}
					span='Имя'
					placeholder='Имя'
					error={errors.name}
				/>
			</div>
		</form>
	)
}
