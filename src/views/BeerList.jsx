import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { listBeer } from '../Services/beers-api';

class BeerList extends Component {
  state = {
    list: []
  };

  componentDidMount() {
    this.loadBeerList();
  }

  async loadBeerList() {
    const list = await listBeer();
    this.setState({
      list: list
    });
  }
  render() {
    return (
      <div>
        <h1> Beer List </h1>
        <ul>
          {this.state.list.map((beer) => (
            <li key={beer._id}>
              <Link to={'/beers/:beerId'}>
                <img src={beer.image_url} alt={beer.name} />
                <h3>{beer.name}</h3>
                <br />
                <p>{beer.tagline}</p>
                <br />
                <small> Created by : {beer.contributed_by} </small>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BeerList;
