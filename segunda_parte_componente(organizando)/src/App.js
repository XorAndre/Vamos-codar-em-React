import React from 'react';
import './styles/containers.css';
import './styles/cards.css';
//Componentes
import Card from './Components/Card/';

const App = () => {
  return (
    <>
      <main className="wrap">
        <div className="container">
          <Card />
        </div>
      </main>
    </>
  );
}

export default App;
