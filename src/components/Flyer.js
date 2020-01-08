import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import Nopal from 'components/Nopal'

const useStyles = makeStyles(theme => ({
  block: {
    width: 1080,
    height: 1080,
    fontFamily: 'Circular Pro Book',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
		marginBottom: theme.spacing(4),
    position: 'relative',
  },
  block1: {
    padding: 60,
  },
  blockContent1: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 180,

    '& > *': {
      flex: '100% 0 0',
    }


  },
  block2: {
  },
  schedule: {
    fontSize: 30,
  },
  day: {
    background: '#f70011',
    textTransform: 'uppercase',
    color: '#FFF',
    padding: '16px 8px',
    fontSize: 30,
    marginRight: 8,
  },
  titleContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
  },
  title: {
    fontFamily: 'Noah Upper Lower',
    fontSize: 100,
    marginRight: 16,
    whiteSpace: 'pre-line',
    flex: '753px 0 0',
  },
  identifier: {
    fontFamily: 'Noah Upper Lower',
    fontSize: 110,
  },
  description: {
    alignSelf: 'flex-end',
    fontSize: 33,
    whiteSpace: 'pre-line',
  },
  nopalContainer: {
    position: 'absolute',
    top: 60,
    right: 60,
    width: 386,
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
    color: color1,
    backgroundColor: backgroundColor1,
    backgroundImage: `url(${backgroundImageUrl1})`,
  }

  const block2 = {
    color: color2,
    backgroundColor: backgroundColor2,
    backgroundImage: `url(${backgroundImageUrl2})`,
  }

  const blockContent1 = {}

  return (
    <div>
      <Paper elevation={1} className={`${classes.block} ${classes.block1} block1`} style={block1}>
        <div className={classes.nopalContainer}>
          <Nopal fill={color2}/>
        </div>
        <div className={`${classes.blockContent1} block-content-1`} style={blockContent1}>
          <div>
            <div className={classes.schedule}>
              <span className={classes.day}>
                {day}
              </span>
              <span className={classes.time}>
                {time}
              </span>
            </div>

            <div className={classes.titleContainer}>
              <div className={classes.title}>
                {title}
              </div>

              <div className={classes.identifier}>
                {identifier}
              </div>
            </div>
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
