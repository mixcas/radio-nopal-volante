import React, { useState, useLayoutEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import Nopal from 'components/Nopal'
import RadioNopalMeta from 'components/RadioNopalMeta'
import Fab from '@material-ui/core/Fab'
import SaveIcon from '@material-ui/icons/Save'
import htmlToImage from 'html-to-image';
import downloadjs from 'downloadjs'
import { useWindowSize } from 'lib/utilities'

const useStyles = makeStyles(theme => ({
  flyerContainer: {
    position: 'relative',
    width: 1080,
  },
  exportButton: {
    position: 'fixed',
    bottom: 16,
    right: 16,
  },
  block: {
    width: 1080,
    height: 960,
    fontFamily: 'Circular Pro Book',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    padding: 60,
  },
  block1: {
    padding: '60px 106px 87px 86px',
  },
  blockContent1: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 216,

    '& > *': {
      flex: '100% 0 0',
    }
  },
  block2: {
  },
  schedule: {
    fontSize: 25,
    marginBottom: 20,
    lineHeight: 1,
  },
  day: {
    background: '#f70011',
    textTransform: 'uppercase',
    color: '#FFF',
    padding: '3px 12px 0',
    fontSize: 25,
    marginRight: 16,
  },
  titleContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
    lineHeight: 1.1,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Noah Upper Lower',
    fontSize: 102,
    marginRight: 32,
    whiteSpace: 'pre-line',
    flex: 'auto 1 1',
  },
  identifier: {
    fontFamily: 'Noah Upper Lower',
    fontSize: 105,
    flex: 'auto 0 0',
  },
  description: {
    alignSelf: 'flex-end',
    fontSize: 38,
    whiteSpace: 'pre-line',
    lineHeight: '44px',
  },
  nopalContainer: {
    position: 'absolute',
    top: 60,
    right: 86,
    width: 386,
  },
  metaCotainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'flex-end',

    '& svg': {
      width: '100%',
      height: 728,
    }
  }
}))


const scrollToFlyer = () => {
  const { y } = document.getElementById('flyer').getBoundingClientRect()
  document.getElementById('content').scrollTop = y - (64 * 1.5)
}

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
  const { height } = useWindowSize()

  const scale = (height - 64 - 64) / 2160

  const classes = useStyles()

  const exportFlyer = (id) => {
    const flyer = document.getElementById('flyer')
    const transform = flyer.style.transform

    // Reset Scale
    flyer.style.transform = ''

    htmlToImage.toPng(document.getElementById(id))
      .then(function (dataUrl) {
        downloadjs(dataUrl, 'volante.png')
        flyer.style.transform = transform

      });
  }

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

  useLayoutEffect( () => {
    scrollToFlyer()
  }, [height])

  return (
    <div className={classes.flyerContainer}>
      <Fab
        color="primary"
        aria-label="export"
        className={classes.exportButton}
        onClick={() => exportFlyer('flyer')}
      >
        <SaveIcon />
      </Fab>
      <div
        id='flyer'
        style={{
          transform: `scale(${scale})`
        }}
      >
        <div
          className={`${classes.block} ${classes.block1} block1`}
          style={block1}
        >
          <div className={classes.nopalContainer}>
            <Nopal fill={color1}/>
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
        </div>
        <div
          className={`${classes.block} ${classes.block2} block2`}
          style={block2}
        >
          <div className={classes.metaCotainer}>
            <RadioNopalMeta fill={color2}/>
          </div>
        </div>
    </div>
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
