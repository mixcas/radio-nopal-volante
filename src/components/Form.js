import React from 'react'
import { connect } from 'react-redux'
import { setFieldValue, setErrors } from 'actions/flyerActions'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'

const FlyerForm  = ({
  day,
  time,
  identifier,
  description,
  color1,
  backgroundImageUrl1,
  backgroundColor1,
  color2,
  backgroundImageUrl2,
  backgroundColor2,
  setFieldValue,
}) => {
  console.log('day')

  return (
    <form noValidate autoComplete='off'>

      <div>
        <TextField
          margin='normal'
          fullWidth
          id='day'
          label='Dia'
          name='day'
          onChange={ e => setFieldValue('day', e.target.value) }
          value={day}
        />
      </div>

      <div>
        <TextField
          margin='normal'
          fullWidth
          id='time'
          label='Horario'
          name='time'
          onChange={ e => setFieldValue('time', e.target.value) }
          value={time}
        />
      </div>

      <div>
        <TextField
          margin='normal'
          fullWidth
          id='identifier'
          label='Identificador'
          name='identifier'
          onChange={ e => setFieldValue('identifier', e.target.value) }
          value={identifier}
        />
      </div>

      <div>
        <TextField
          multiline
          margin='normal'
          fullWidth
          id='description'
          label='Descripción'
          name='description'
          onChange={ e => setFieldValue('description', e.target.value) }
          value={description}
        />
      </div>

      <Divider />

      <div>
        <TextField
          margin='normal'
          fullWidth
          id='color1'
          label='Color 1'
          name='color1'
          onChange={ e => setFieldValue('color1', e.target.value) }
          value={color1}
        />
      </div>

      <div>
        <TextField
          margin='normal'
          fullWidth
          id='backgroundColor1'
          label='Color de fondo 1 (URL)'
          name='backgroundColor1'
          onChange={ e => setFieldValue('backgroundColor1', e.target.value) }
          value={backgroundColor1}
        />
      </div>

      <div>
        <TextField
          margin='normal'
          fullWidth
          id='backgroundImageUrl1'
          label='Imagen 1 (URL)'
          name='backgroundImageUrl1'
          onChange={ e => setFieldValue('backgroundImageUrl1', e.target.value) }
          value={backgroundImageUrl1}
        />
      </div>

      <div>
        <TextField
          margin='normal'
          fullWidth
          id='color2'
          label='Color 2'
          name='color2'
          onChange={ e => setFieldValue('color2', e.target.value) }
          value={color2}
        />
      </div>

      <div>
        <TextField
          margin='normal'
          fullWidth
          id='backgroundColor2'
          label='Color de fondo 2 (URL)'
          name='backgroundColor2'
          onChange={ e => setFieldValue('backgroundColor2', e.target.value) }
          value={backgroundColor2}
        />
      </div>

      <div>
        <TextField
          margin='normal'
          fullWidth
          id='backgroundImageUrl2'
          label='Imagen 2 (URL)'
          name='backgroundImageUrl2'
          onChange={ e => setFieldValue('backgroundImageUrl2', e.target.value) }
          value={backgroundImageUrl2}
        />
      </div>
    </form>
  )
}

const mapDispatchToProps = dispatch => {
return {
	setFieldValue: (field,data) => dispatch(setFieldValue(field, data)),
	setErrors: (errors) => dispatch(setErrors(errors)),
}
}

const mapStateToProps = ({ flyer }) => {
  const { formValues } = flyer

  const {
    day,
    time,
    identifier,
    description,
    color1,
    backgroundImageUrl1,
    backgroundColor1,
    color2,
    backgroundImageUrl2,
    backgroundColor2,
  } = formValues

  return {
    day,
    time,
    identifier,
    description,
    color1,
    backgroundImageUrl1,
    backgroundColor1,
    color2,
    backgroundImageUrl2,
    backgroundColor2,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlyerForm)