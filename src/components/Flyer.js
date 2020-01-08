import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

const useStyles = makeStyles(theme => ({
  block: {
    width: 1080,
    height: 1080,
    fontFamily: 'Circular Pro Book',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
		marginBottom: theme.spacing(4),
  },
  block1: {
    padding: 60,
  },
  blockContent1: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',

    '& > *': {
      flex: '100% 0 0',
    }
  },
  block2: {
  },
  schedule: {

  },
  day: {
    background: '#f70011',
    textTransform: 'uppercase',
    color: '#FFF',
  },
  title: {
    fontFamily: 'Noah Upper Lower',
  },
  identifier: {
    fontFamily: 'Noah Upper Lower',
  }
}))

const Flyer = ({
    day,
    time,
    title,
    identifier,
    description,
    color1,
    backgroundImageUrl1,
    backgroundColor1,
    color2,
    backgroundImageUrl2,
    backgroundColor2,
}) => {
  const classes = useStyles()

  const block1 = {
    backgroundColor: backgroundColor1,
    backgroundImage: `url(${backgroundImageUrl1})`,
  }

  const block2 = {
    backgroundColor: backgroundColor2,
    backgroundImage: `url(${backgroundImageUrl2})`,
  }

  const blockContent1 = {}

  return (
    <div>
      <Paper elevation={1} className={`${classes.block} ${classes.block1} block1`} style={block1}>
        <div className={`${classes.blockContent1} block-content-1`} style={blockContent1}>

          <div className={classes.schedule}>
            <span className={classes.day}>
              {day}
            </span>
            <span className={classes.time}>
              {time}
            </span>
          </div>

          <div className={classes.title}>
            {title}
          </div>

          <div className={classes.identifier}>
            {identifier}
          </div>

          <div className={classes.description}>
            {description}
          </div>
        </div>
      </Paper>
      <Paper elevation={1} className={`${classes.block} ${classes.block2} block2`} style={block2}>
      </Paper>
    </div>
  )
}

const mapStateToProps = ({ flyer }) => {
  const { formValues } = flyer

  const {
    day,
    time,
    title,
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
    title,
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

export default connect(mapStateToProps)(Flyer)
