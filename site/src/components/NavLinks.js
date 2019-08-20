import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
	Typography,
	Link,
	IconButton,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	links: {
		color: '#fff !important',
		backgroundColor : 'transparent !important',
		textDecorationLine: 'none',
	},
	iconButton : {
		'& hover': {
			textDecorationLine: 'underline !important'
		}
	}
}));

export default function NavLinks() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<IconButton aria-label="github" color="inherit" className={classes.iconButton}>
				<Typography variant="subtitle1">
					<Link href="https://github.com/unicef/unicef-material-ui" className={classes.links}>
						Github
          			</Link>
				</Typography>
			</IconButton>
		</React.Fragment>
	)
}