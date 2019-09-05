import { Grid, Paper} from '@material-ui/core/';
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

function Body () {
  const classes = useStyles({});
  
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
