import React from 'react';

const UserStory = () => {
  return (
    <div>
      <h2>2 - Lietotājstāsta formats (User Story)</h2>
      <p>Lielākā daļa cilvēku izmanto šādu veidni, lai aprakstītu Iezīmes vērtību:</p>
      
      <div>
        <p><strong>As an</strong> [Actor] (Kā [Loma])</p>
        <p><strong>I want</strong> [specific system behavior] (Es vēlos [sistēmas uzvedību])</p>
        <p><strong>So as to achieve</strong> [a goal] (Lai [sasniegtu mērķi])</p>
      </div>

      <p>Tas palīdz lasītājam saprast, <em>kāpēc</em> šī iezīme vispār tiek veidota.</p>
    </div>
  );
};

export default UserStory;