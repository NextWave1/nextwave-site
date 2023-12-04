'use client'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { validTel } from '@/shared/lib/utils/regex/valid-tel'
import { IFormData } from '@/shared/model/types/form-types'
import Field from '@/shared/ui/field/Field'
import PhoneInput from '@/shared/ui/field/PhoneInput'

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
				<PhoneInput
					{...register('tel', {
						required: 'Введите телефон',
						pattern: {
							value: validTel,
							message: 'Введите корректный номер телефона',
						},
					})}
					type='tel'
					span='Телефон'
					placeholder='+7 (___) ___-__-__'
					error={errors.tel}
				/>
				<Field
					{...register('message')}
					span='Сообщение'
					placeholder='Введите сообщение...'
					textarea
					error={errors.message}
				/>
			</div>
			<div className={styles.buttons}>
				<button className={styles.button}>Отправить</button>
			</div>
		</form>
	)
}
