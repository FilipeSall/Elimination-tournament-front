import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

const generateName = () => {
  const adjectives = ['delicia', 'pirocudo', 'Emocionado', 'Goy', 'deus grego'];
  const nouns = ['Fijinhu', 'Ricardim', 'Matheuszinhuu', 'Hpape', 'Betinder', 'GusGusGus', 'Bebels'];
  const randomAdjectiveIndex = Math.floor(Math.random() * adjectives.length);
  const randomNounIndex = Math.floor(Math.random() * nouns.length);
  const adjective = adjectives[randomAdjectiveIndex];
  const noun = nouns[randomNounIndex];
  return `${noun} ${adjective}`;
};

export const GlobalStorage = ({ children }) => {
  const numPlayers = 6;
  const [playerPoints, setPlayerPoints] = useState(Array(numPlayers).fill(0));
  const playerNames = Array.from({ length: numPlayers }, (_, index) => generateName());

  return (
    <GlobalContext.Provider value={{ playerPoints, setPlayerPoints, numPlayers, playerNames }}>
      {children}
    </GlobalContext.Provider>
  );
};