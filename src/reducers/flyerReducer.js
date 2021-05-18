export const SET_FORM_VALUE = 'SET_FORM_VALUE'
export const SET_ERRORS = 'SET_ERRORS'

const initialState = {
  formValues: {
    day: 'Lunes',
    time: '13:00 – 15:00 HRS',
    identifier: '#01',
    title: 'Synth bushwick',
    description: 'Listicle cillum dolor affogato lo-fi four loko normcore pariatur quis. Raclette hell of prism chia typewriter bushwick banjo ethical.',
    color1: '#FFFFFF',
    backgroundImageUrl1: '',
    backgroundColor1: '#f89a3e',
    color2: '#FFFFFF',
    backgroundImageUrl2: 'https://66.media.tumblr.com/8d4d8f6fea2a45ec29fba53489477ee0/tumblr_ofqlk25c0U1vcxdhvo1_1280.jpg',
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