import React from 'react'


const Kontakt = () => {

  const handleClick = () => {
  alert("Danke für deine Nachricht!");
};


  return (
    <>
    <div>Kontakt</div>
    <h3>So kontaktierst Du uns</h3>
    <p>Lass Deine Email Adresse um eine Kontakt reicher werden</p>
    <button onClick={handleClick}>HALL LINDA HIER KLICKEN WENN ES KLICK MACHT</button>
    </>
  )
}

export default Kontakt
