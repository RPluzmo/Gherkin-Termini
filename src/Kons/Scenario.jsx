import React from 'react';

const Scenario = () => {
  return (
    <div>
      <h2>3 - Scenārijs (Scenario)</h2>
      <p>Scenāriji tiek rakstīti strukturētā veidā, izmantojot <strong>Gherkin</strong> sintaksi.</p>
      
      <h3>Atslēgvārdi</h3>
      <dl>
        <dt><strong>Kad (Given)</strong></dt>
        <dd>Apraksta sākotnējo stāvokli vai kontekstu.</dd>
        
        <dt><strong>Ja (When)</strong></dt>
        <dd>Apraksta notikumu vai lietotāja darbību.</dd>
        
        <dt><strong>Tad (Then)</strong></dt>
        <dd>Apraksta sagaidāmo iznākumu (rezultātu).</dd>
      </dl>
    </div>
  );
};

export default Scenario;