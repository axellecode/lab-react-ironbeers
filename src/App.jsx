
import React from 'react'
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import beerImage from './assets/beers.png';
import randomBeerImage from './assets/random-beer.png';
import newBeerImage from './assets/new-beer.png'
import Header from './components/Header';
import BeerList from './views/BeerList';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header/>
        <div>
          <img src={beerImage} alt = 'beers'/>
          <Link to="/" component={BeerList}> 
          <h2>All beers</h2> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse justo urna, pharetra vel tristique non, facilisis at diam. </p>
          </Link>
        </div>

        <div>
          <img src={randomBeerImage} alt = 'random beer'/>
          <Link to="/random"> 
          <h2>Random beer</h2> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse justo urna, pharetra vel tristique non, facilisis at diam. </p>
          </Link>
        </div>

        <div>
          <img src={newBeerImage} alt = 'new beer'/>
          <Link to="/new">
          <h2>New beer</h2> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse justo urna, pharetra vel tristique non, facilisis at diam. </p></Link>
        </div>
          
          
          
        
      </BrowserRouter>
    </div>
  );
}

export default App;
