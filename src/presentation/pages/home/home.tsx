import React from 'react';
import './home-styles.scss'

export const Home: React.FC = () => {
  return (    
    <div className = "wrapper">
      <div className = "info">
        <h1>Bem Vindo</h1>
        <p>Criado utilizando o  Modelo DevExtreme com Webpack</p>
      </div>      
    </div>
  );
};