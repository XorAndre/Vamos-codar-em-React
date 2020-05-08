import React from 'react';
import './styles/containers.css';
import './styles/cards.css';

const App = () => {
  return (
    <>
      <main className="wrap">
        <div className="container">
          <div className="card">
            <div className="card_header">
              <img alt="" src="https://pbs.twimg.com/media/DmBRXVnWsAAb1YY.jpg" />
            </div>
            <div className="card_body">
                <h1>Título</h1>
                <p>
                  Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.
                </p>
            </div>
            <div className="card_footer">
                <small>Data: xx / xx / xx</small>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
