import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface IFormData {
	name: string
	tel: string
	message: string
	files: File[]
}

export interface IFieldProps {
	span: string
	error?: FieldError | undefined
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputPropsField {}
