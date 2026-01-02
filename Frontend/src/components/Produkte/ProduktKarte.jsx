import React from 'react';

const ProduktKarte = ({ produkt }) => {
  return (
    <div>
      <h3>{produkt.typ}</h3>
      <p>Kettentyp: {produkt.kettentyp}</p>
      <p>Länge: {produkt.laenge}</p>
      <p>Material: {produkt.material}</p>
      <p>Preis: {produkt.preis} €</p>
      <p>Bestand: {produkt.bestand}</p>
    </div>
  );
};

export default ProduktKarte;
