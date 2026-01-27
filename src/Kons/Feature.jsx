import React from 'react';

const Feature = () => {
  return (
    <div className="feature-container">
      <h2>1 - Kas ir Funkcionālā iezīme (Feature)?</h2>
      <p>
        Iezīme ir sistēmas funkcionalitāte, kas tiek ieviesta, lai atbalstītu kādu biznesa spēju. 
        Tā kalpo kā <strong>izpildāma specifikācija</strong>.
      </p>
      
      <h3>Iezīmes struktūra</h3>
      <ul>
        <li><strong>Nosaukums (Title):</strong> Īss funkcionalitātes apraksts (piem., "Klients izņem naudu no bankomāta").</li>
        <li><strong>Lietotāja stāsts (User Story):</strong> Konteksts (kā/es vēlos/lai).</li>
        <li><strong>Scenāriji:</strong> Konkrēti uzvedības piemēri (Happy path un kļūdu situācijas).</li>
        <li><strong>Fons (Background):</strong> Nosacījumi, kas kopīgi visiem scenārijiem (pēc vajadzības).</li>
      </ul>

      <div>
        <strong>Svarīgi:</strong> Galvenais Iezīmes mērķis ir tikt <em>lasītai</em>. 
        Ja valoda ir pārāk tehniska vai sarežģīta, tā zaudē savu jēgu.
      </div>
    </div>
  );
};

export default Feature;