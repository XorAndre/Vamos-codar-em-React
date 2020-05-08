import React from 'react';
import './styles/containers.css';
import './styles/cards.css';

const App = () => {
  return (
    <>
      <main className="wrap">
        <div className="container">
          <div className="card">
            <div className="Card_header">
              <img alt="" src="https://pbs.twimg.com/media/DmBRXVnWsAAb1YY.jpg" />
            </div>
            <div className="card_body">
                <h1>Título</h1>
                <p>Um texto qualquer</p>
                <small>Data: xx/xx/xx</small>
            </div>
          </div>
          <div className="card">
            <div className="Card_header">
              <img alt="" src="https://pbs.twimg.com/media/DmBRXVnWsAAb1YY.jpg" />
            </div>
            <div className="card_body">
                <h1>Título</h1>
                <p>Um texto qualquer</p>
                <small>Data: xx/xx/xx</small>
            </div>
          </div>
          <div className="card">
            <div className="Card_header">
              <img alt="" src="https://pbs.twimg.com/media/DmBRXVnWsAAb1YY.jpg" />
            </div>
            <div className="card_body">
                <h1>Título</h1>
                <p>Um texto qualquer</p>
                <small>Data: xx/xx/xx</small>
            </div>
          </div>
          <div className="card">
            <div className="Card_header">
              <img alt="" src="https://pbs.twimg.com/media/DmBRXVnWsAAb1YY.jpg" />
            </div>
            <div className="card_body">
                <h1>Título</h1>
                <p>Um texto qualquer</p>
                <small>Data: xx/xx/xx</small>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
