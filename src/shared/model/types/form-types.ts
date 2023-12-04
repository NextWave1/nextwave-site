import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface IFormData {
	name: string
	tel: string
	message: string
	files: File[]
}

export interface IFieldProps {
	span: string
	textarea?: boolean
	error?: FieldError | undefined
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> &
	TextareaHTMLAttributes<HTMLTextAreaElement> &
	IFieldProps

export interface IField extends TypeInputPropsField {}
