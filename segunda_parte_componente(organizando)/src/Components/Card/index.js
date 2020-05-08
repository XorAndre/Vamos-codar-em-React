import React from 'react';
import './style.css';
//Componente mocado
import CardBody from './cardBody/';
import CardFooter from './cardFooter/';
import CardHeader from './cardHeader/';

const Card = () => {
  return (
    <>
      <div className="card">
        <CardHeader />
        <CardBody />
        <CardFooter />
      </div>
    </>
  );
}

export default Card;
