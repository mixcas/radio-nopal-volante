import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import { ChromePicker } from 'react-color'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  colorBox: {
    height: 36,
    borderRadius: '2px',
    border: '1px solid #0000006b',
    marginBottom: 8,
  },
  picker: {
  }
}))

const ColorPicker = ({
  value,
  onChange,
}) => {
  const [showPicker, togglePicker] = useState(false)

  const classes = useStyles()

  const handleOnChange = value => {
    onChange(value.hex)
  }

  const handleClick = () => {
    togglePicker(!showPicker)
  }

  return (
    <>
      <Box
        className={classes.colorBox}
        style={{
          background: value,
        }}
        onClick={handleClick}
      />
      <ChromePicker
        className={classes.picker}
        color={value}
        onChange={handleOnChange}
      />
    </>
  )
}

export default ColorPicker