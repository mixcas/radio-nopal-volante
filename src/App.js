import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import './App.css'

import Menu from 'components/Menu'
import FlyerForm from 'components/Form'
import Flyer from 'components/Flyer'

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Creado por '}
      <Link color='inherit' href='https://carlossolar.es/'>
				Carlos Solares
			</Link>
			{'. Copyright © '}
      <Link color='inherit' href='http://radionopal.com/'>
				Radio Nopal
			</Link>{' '}
			{new Date().getFullYear()}
		</Typography>
	)
}

const drawerWidth = '25vw'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	toolbar: {
		paddingRight: 24, // keep right padding when drawer closed
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	menuButtonHidden: {
		display: 'none',
	},
	title: {
		flexGrow: 1,
	},
	drawerPaper: {
    paddingLeft: 24,
    paddingRight: 24,
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		height: '100vh',
		overflow: 'auto',
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		width: theme.spacing(7),
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9),
		},
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'hidden',
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
	},
	fixedHeight: {
		height: 240,
	},
}))

const App = () => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<CssBaseline />

      <Menu/>

			<Drawer
				variant='permanent'
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.appBarSpacer} />
        <FlyerForm/>
			</Drawer>

			<main className={classes.content} id='content'>
				<div className={classes.appBarSpacer} />
				<Container maxWidth='lg' className={classes.container}>
          <Flyer/>
					<Box pt={4}>
						<Copyright />
					</Box>
				</Container>
			</main>
		</div>
	)
}

export default App