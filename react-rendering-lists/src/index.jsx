import React from 'react';
import ReactDOM from 'react-dom';

function List(props) {
  const pokedex = props.pokedex;
  const listItems = pokedex.map(pokedex =>
    <li key={pokedex.number}>{pokedex.name}</li>
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<List pokedex={pokedex}/>);
