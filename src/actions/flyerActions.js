import { SET_FORM_VALUE, SET_ERRORS } from 'reducers/flyerReducer'

export const setFieldValue = (field, data) => {
	return {
		type: SET_FORM_VALUE,
		field,
		data,
	}
}

export const setErrors = (data) => {
	return {
		type: SET_ERRORS,
		data,
	}
}