import React from 'react'


const Kontakt = () => {

  const handleClick = () => {
  alert("Oh Angelo. Ich Linda denkt Du bist der größte!");
};


  return (
    <>
    <div>Kontakt</div>
    <h3>So kontaktierst Du uns</h3>
    <p>Lass Deine Email Adresse um eine Kontakt reicher werden</p>
    <button onClick={handleClick}>HALLO LINDA HIER KLICKEN WENN ES KLICK MACHT</button>
    </>
  )
}

export default Kontakt
