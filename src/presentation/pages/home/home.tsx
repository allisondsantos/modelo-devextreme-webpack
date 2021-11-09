import React from 'react';
import './home-styles.scss'

export const Home: React.FC = () => {
  return (    
    <div className = "wrapper">
      <div className = "info">      
        <img src="/img/logo-192x192.png"/>
        <h1>DevExtreme com Webpack</h1>
        <p>Criado utilizando o Modelo DevExtreme com Webpack</p>
      </div>      
    </div>
  );
};