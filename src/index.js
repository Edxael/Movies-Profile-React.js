import React from 'react';
import ReactDOM from 'react-dom';
import Header from './comps/Header.jsx';
import MovieProf from './comps/Profile.jsx';

const movies = [
  {id:1 , name: "Edge or Tomorrow", year:2014  , rate: "90%", mpic:"https://github.com/Edxael/Images/blob/master/01-movies/edge-of-tomorrow.jpg?raw=true" },
  {id:2 , name: "Gattaca", year: 1997 , rate: "95%", mpic:"https://github.com/Edxael/Images/blob/master/01-movies/gattaca.jpg?raw=true" },
  {id:3 , name: "Salt", year: 2010  , rate: "85", mpic:"https://github.com/Edxael/Images/blob/master/01-movies/salt-2010.jpg?raw=true" },
  {id:4 , name: "Underworl: B.W.", year: 2016  , rate: "80%", mpic:"https://github.com/Edxael/Images/blob/master/01-movies/underworld-blood-wars.jpg?raw=true" },
  {id:5 , name: "Gladiator", year: 2000  , rate: "99%", mpic:"https://github.com/Edxael/Images/blob/master/01-movies/gladiator-10th-anniversary-extended-remastered-edition.jpg?raw=true" },
  {id:6 , name: "The Mummy", year: 2017  , rate: "?", mpic:"https://github.com/Edxael/Images/blob/master/01-movies/the-mummy.jpg?raw=true" },
  {id:6 , name: "Enders Game", year: 2013 , rate: "100%", mpic:"https://github.com/Edxael/Images/blob/master/01-movies/enders-game.jpg?raw=true" },
  {id:6 , name: "Whiplash", year: 2014 , rate: "99%", mpic:"https://github.com/Edxael/Images/blob/master/01-movies/whiplash.jpg?raw=true" },
]

class GatherComp extends React.Component {
  render() {
    const myStl = {background: "black", padding: "30px"}
    return(
      <div style={myStl}>
        <Header />
        <MovieProf data={movies} />
      </div>
    )
  }
}

ReactDOM.render(<GatherComp />, document.getElementById("root"));
