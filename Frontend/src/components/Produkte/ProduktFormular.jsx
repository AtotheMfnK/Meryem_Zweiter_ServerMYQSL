import React, { useState } from 'react';

const ProduktFormular = ({ onProduktHinzufuegen }) => {
  const [formData, setFormData] = useState({
    typ: '',
    kettentyp: '',
    laenge: '',
    material: '',
    preis: '',
    bestand: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/produkte', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Fehler beim Speichern des Produkts');
      }

      const result = await response.json();
      onProduktHinzufuegen(result.id); // Aktualisiere die Produktliste
      alert('Produkt erfolgreich hinzugefügt!');
    } catch (error) {
      console.error('Fehler:', error);
      alert('Fehler beim Hinzufügen des Produkts');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Typ:
        <input type="text" name="typ" value={formData.typ} onChange={handleChange} required />
      </label>
      <label>
        Kettentyp:
        <input type="text" name="kettentyp" value={formData.kettentyp} onChange={handleChange} required />
      </label>
      <label>
        Länge:
        <input type="text" name="laenge" value={formData.laenge} onChange={handleChange} required />
      </label>
      <label>
        Material:
        <input type="text" name="material" value={formData.material} onChange={handleChange} required />
      </label>
      <label>
        Preis:
        <input type="number" name="preis" value={formData.preis} onChange={handleChange} step="0.01" required />
      </label>
      <label>
        Bestand:
        <input type="number" name="bestand" value={formData.bestand} onChange={handleChange} required />
      </label>
      <button type="submit">Produkt hinzufügen</button>
    </form>
  );
};

export default ProduktFormular;
