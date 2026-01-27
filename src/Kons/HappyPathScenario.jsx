import React from 'react';

const HappyPathScenario = () => {
  return (
    <div>
      <h2>5 - Veiksmīgs iznākums (HappyPathScenario)</h2>
      <h3>Piemērs: Autors augšupielādē bildi</h3>
      <p>Sākotnēji mēs pieņemam, ka viss strādā ideāli (jebkurš fails, jebkurš izmērs).</p>
      <pre>
{`Scenario: Happy Path
Given the user is logged in as an Author
When the Author selects an image file
And the Author uploads the file
Then the Author sees their uploaded image`}
      </pre>

      <h3>Realitāte</h3>
      <p>
        Pēc konsultācijām ar izstrādātājiem atklājas <strong>NFRs (Nefunkcionālās prasības)</strong>. 
        Mums jāprecizē scenārijs:
      </p>
      <pre>
{`Scenario: Successful image upload 
Given the user is logged in as an Author
...
When the Author selects an image file
And the file is of type: | jpg | gif | png |
And the file is of a size less than "5" MB
And the file is of a resolution higher than "300" by "300" pixels
...
Then the Author sees their uploaded image`}
      </pre>
    </div>
  );
};

export default HappyPathScenario;