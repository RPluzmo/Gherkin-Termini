import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Translations from "./components/Translations";

function App() {
  return (
    <div>
      <h1>Gherkin termini</h1>
      <h3>Marinētie guŗķi :)</h3>
      <Translations />
    </div>
  );
}

export default App
