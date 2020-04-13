import React from 'react';

function DisplayQuotes ({ oneQuote }) {
  return (
    <div className='DisplayQuotes'>
      <img
        src={oneQuote.image}
        alt={oneQuote.character}
      />
      <p>Character: {oneQuote.character}</p>
      <p>Quote: {oneQuote.quote}</p>
    </div>
  );
}

export default DisplayQuotes;
