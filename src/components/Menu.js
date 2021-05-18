import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import GetAppIcon from '@material-ui/icons/GetApp'
import IconButton from '@material-ui/core/IconButton'
import { exportFlyer } from 'lib/utilities'

const useStyles = makeStyles(theme => ({
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
  menuButton: {
    marginLeft: theme.spacing(2),
  },
	toolbar: {
		paddingRight: 24, // keep right padding when drawer closed
    display: 'flex',
    justifyContent: 'space-between',
	},
  exportButton: {
  },
}))

const Menu = () => {
	const classes = useStyles()

  return (
    <AppBar position='absolute' className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Box display='flex' alignItems='baseline'>
          <Typography component='h1' variant='h6' color='inherit' noWrap className={classes.title}>
            Radio Nopal - Volantito
          </Typography>
          <Typography variant="caption" display="block">
            v1.0.4
          </Typography>
        </Box>
        <Box>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <GetAppIcon
              onClick={() => exportFlyer('flyer')}
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Menu
