import { Grid, Paper } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import dynamic from 'next/dynamic'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      marginTop: 16,
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      boxShadow: 'none',
      backgroundColor: 'none'
    },
  }),
)

const Body = () => {
  const classes = useStyles({})
  const CodeEditor = dynamic(() => import('./code-editor'), { ssr: false })
  
  return (
    <div className="root">
      <Grid container>
        <Grid item xs={6}>
          <CodeEditor />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>preview</Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Body
