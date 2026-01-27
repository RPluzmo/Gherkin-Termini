import React from 'react';
import rubike from '../assets/Rubike.png'; 

const Rubiks = () => {
  return (
    <div>
      <h2>4 - Kā Rubika kubs ļauj skatīties uz funkcionālajām iezīmēm</h2>
      
      <div>
         <p><em>Fig. 3.1 – Iezīme kā Rubika kubs</em></p>
      </div>
      <p>
        Iztēlojies savu Iezīmi kā <strong>Rubika kubu</strong>. Tu to grozi rokās un skaties no dažādiem leņķiem.
        Tas ir tas pats kubs, bet katru reizi tu atklāj jaunus rakstus.
      </p>
      <div style={{ textAlign: 'center' }}>
      <img src={rubike} alt="Rubika kubs"  />
      </div>
      <p>
        Tāpat mēs meklējam scenārijus: <strong>Funkcionālā Iezīme nemainās</strong>, bet mainās apstākļi, 
        kādos funkcionalitāte tiek izmantota.
      </p>
    </div>
  );
};

export default Rubiks;