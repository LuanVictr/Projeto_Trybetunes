import React from 'react';
import Header from '../Components/Header';

class Favorites extends React.Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Header />
        <p>Página Favoritos</p>
      </div>
    );
  }
}

export default Favorites;
