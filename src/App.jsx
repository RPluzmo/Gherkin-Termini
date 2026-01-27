import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Translations from "./Gherkini/Translations";
import Feature from './Kons/Feature';
import UserStory from './Kons/UserStory';
import Scenario from './Kons/Scenario';
import RubiksMetaphor from './Kons/Rubiks';
import HappyPathScenario from './Kons/HappyPathScenario';

function App() {
  return (
    <div>
      <h1>Gherkin termini</h1>
      <h3>Marinētie guŗķi :)</h3>
      <Translations />

      <header style={{textAlign: 'center', padding: '40px 20px'}}>
        <h1>Funkcionālo Iezīmju Konspekts</h1>
      </header>

      <div className="grid-container">

        <div className="card full-width">
          <Feature />
        </div>

        <div className="card">
          <UserStory />
        </div>

        <div className="card">
          <Scenario />
        </div>

        <div className="card">
          <RubiksMetaphor />
        </div>

        <div className="card">
          <HappyPathScenario />
        </div>

      </div>
    </div>
  );
}

export default App
