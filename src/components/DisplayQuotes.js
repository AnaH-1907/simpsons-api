import React from 'react';

function DisplayQuotes ({ oneQuote }) {
  return (
    <div className='DisplayQuotes'>
      <img
        src={oneQuote.image}
        alt={oneQuote.character}
      />
      <ul>
        <li>Character: {oneQuote.character}</li>
        <li>Quote: {oneQuote.quote}</li>
      </ul>
    </div>
  );
}

export default DisplayQuotes;
