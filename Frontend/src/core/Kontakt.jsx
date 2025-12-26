import React, { useState } from 'react';

const Kontakt = () => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Verhindert das Neuladen der Seite

    // URL deines Backends (anpassen!)
    const url = 'http://localhost:3000/api/saveEmail';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Korrigiert: Großbuchstaben und Bindestrich
        },
        body: JSON.stringify({ email, message }), // Daten aus dem Formular
      });

      const result = await response.json();
      if (response.ok) {
        alert('Erfolg: ' + result.message);
      } else {
        alert('Fehler: ' + result.error);
      }
    } catch (error) {
      console.error('Netzwerkfehler:', error);
      alert('Netzwerkfehler. Bitte später erneut versuchen.');
    }
  };

  return (
    <>
      <div>Kontakt</div>
      <h3>So kontaktierst Du uns</h3>
      <p>Werde einen Kontakt reicher und hinterlasse Deine Email</p>
      <button onClick={handleClick}>Click here</button>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label><br />
            <input
              type="email"
              placeholder="deine@email.de"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Nachricht:</label><br />
            <textarea
              placeholder="Deine Nachricht"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
