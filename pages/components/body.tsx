import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'; 

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

interface BodyProps {
  styles?: string;
}

function Body (props: BodyProps) {
  const classes = useStyles(props);
  
  return (
    <div className="root">
      <Grid container>
        <Grid item xs={6}>
          <Paper className={classes.paper}>code</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>preview</Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Body;
