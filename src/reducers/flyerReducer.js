export const SET_FORM_VALUE = 'SET_FORM_VALUE'
export const SET_ERRORS = 'SET_ERRORS'

const initialState = {
  formValues: {
    day: 'Lunes',
    time: '13:00 – 15:00 HRS',
    identifier: '#01',
    title: 'Synth bushwick',
    description: 'Listicle cillum dolor affogato lo-fi four loko normcore pariatur quis. Raclette hell of prism chia typewriter bushwick banjo ethical.',
    color1: '#000000',
    backgroundImageUrl1: '',
    backgroundColor1: '#FFFFFF',
    color2: '#000000',
    backgroundImageUrl2: '',
    backgroundColor2: '#FFFFFF',
  },
  errors: {},
}

const flyerReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_FORM_VALUE:
      const { formValues } = state
      return {
        ...state,
        formValues: {
          ...formValues,
          [action.field]: action.data,
        },
      }

    case SET_ERRORS:
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.data,
        }
      }
    default:
      return state
  }
}

export default flyerReducer
