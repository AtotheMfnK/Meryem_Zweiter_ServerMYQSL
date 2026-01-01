import React, { useState } from 'react';

const Kontakt = () => {
  // States für Formularfelder
  const [email, setEmail] = useState('');
  const [nachricht, setNachricht] = useState('');

  // State für Formular-Anzeige
  const [showForm, setShowForm] = useState(false);

  // Formular anzeigen
  const handleClick = () => {
    setShowForm(true);
  };

  // Formular absenden
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Daten an das Backend senden
    const response = await fetch('http://localhost:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, nachricht }),
    });

    // Antwort verarbeiten (einfach nur zurücksetzen)
    const result = await response.json();
    console.log(result); // Optional: Antwort in der Konsole anzeigen

    // Formular zurücksetzen
    setEmail('');
    setNachricht('');
  };

  return (
    <>
      <div>Kontakt</div>
      <h3>So kontaktierst Du uns</h3>
      <p>Werde einen Kontakt reicher und hinterlasse Deine E-Mail</p>
      <button onClick={handleClick}>Formular anzeigen</button>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>E-Mail:</label><br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Nachricht:</label><br />
            <textarea
              value={nachricht}
              onChange={(e) => setNachricht(e.target.value)}
              required
            />
          </div>

          <button type="submit">Absenden</button>
        </form>
      )}
    </>
  );
};

export default Kontakt;
