import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '8rem',
  },
  logo: {
    width: '3rem',
    height: '3rem',
    [theme.breakpoints.down('sm')]: {
      width: '2.5rem',
      height: '2.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '2rem',
      height: '2rem',
    },
  },
}));

export default function ProjectIcon(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img className={classes.logo} src={props.logo} alt={props.name} />
    </div>
  );
}
