import axios from 'axios';

export const listBeer = async () => {
  const response = await axios.get(
    'https://ih-beers-api2.herokuapp.com/beers'
  );
  const body = response.data;
  return body.results;
};


/*
export const loadPokemon = async id => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const responseSpecies = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`
    );
    const species = responseSpecies.data;
    const responseEvolutionChain = await axios.get(species.evolution_chain.url);
    const chain = responseEvolutionChain.data.chain;
    const evolutions = chain.evolves_to.map(evolution => evolution.species.name);
    return { ...response.data, evolutions };
  };

  */