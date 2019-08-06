import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>Avengers Database</h1>
      <img
        style={{ width: '300px', height: '300px' }}
        src='http://pluspng.com/img-png/avengers-logo-vector-png-avengers-emblem-logo-sign-superhero-icon-512.png'
        alt='test'
      />
      <h4>Classified information</h4>
      <Button variant='contained' color='secondary' className={classes.button}>
        <Link to='/avengers' style={{ textDecoration: 'none', color: 'black' }}>
          Enter!
        </Link>
      </Button>
    </div>
  );
};

export default Home;
