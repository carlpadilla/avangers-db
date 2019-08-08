import React from 'react';
import { Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import avengers from '../Data';
import AvengersDetails from './AvengersDetails';
import AvengersMovies from './AvengerMovies';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));

const AvengerPage = props => {
  const id = props.match.params.id;
  const avenger = props.avengers.find(avenger => `${avenger.id}` === id);
  const classes = useStyles();
  // console.log(avenger.description);

  return (
    <div>
      <img className='character-image' src={avenger.img} alt={avenger.name} />
      <div className='character-info-wrapper'>
        <h1>{avenger.name}</h1>
        <h4>({avenger.nickname})</h4>
      </div>
      <Button variant='contained' className={classes.button}>
        <Link
          style={{ textDecoration: 'none', padding: '3px', fontSize: '1.2rem' }}
          to={`/avengers/${id}/details`}
        >
          Bio
        </Link>
      </Button>
      <Button variant='contained' className={classes.button}>
        <Link
          style={{ textDecoration: 'none', padding: '3px', fontSize: '1.2rem' }}
          to={`/avengers/${id}/movies`}
        >
          Movies
        </Link>
      </Button>

      <Route
        path='/avengers/:id/details'
        render={props => <AvengersDetails details={avenger.description} />}
      />
      <Route
        path='/avengers/:id/movies'
        render={props => <AvengersMovies movies={avenger.movies} />}
      />
    </div>
  );
};

export default AvengerPage;
