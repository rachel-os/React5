import React from 'react';

const DisplayQuote = ({ simpsonsQuote }) => {
  return (
    <div className="DisplayQuote">
      <img src={simpsonsQuote.image} alt="image" />
      <ul>
        <li>Character : {simpsonsQuote.character}</li>
        <li>Message : {simpsonsQuote.quote}</li>
      </ul>
    </div>
  );
};

export default DisplayQuote;