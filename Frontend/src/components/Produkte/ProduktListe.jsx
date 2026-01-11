import React, { useState, useEffect } from 'react';
import ProduktKarte from './ProduktKarte';

const ProduktListe = () => {
  const [produkte, setProdukte] = useState([]);

  useEffect(() => {
    const fetchProdukte = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/produkte');
        const data = await response.json();
        setProdukte(data);
      } catch (error) {
        console.error('Fehler beim Abrufen der Produkte:', error);
      }
    };

    fetchProdukte();
  }, []);

  return (
    <div>
      <h2>Produktliste</h2>
      {produkte.map((produkt) => (
        <ProduktKarte key={produkt.id} produkt={produkt} />
      ))}
    </div>
  );
};

export default ;
