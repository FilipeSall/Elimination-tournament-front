import React, { useContext, useState } from 'react';
import './tournamentpage.css';
import { BsFillPersonFill } from "react-icons/bs";
import { GlobalContext } from '../../GlobalStorage';


function TournamentPage({ playerImage }) {
  const defaultPlayerImage = <BsFillPersonFill size={38} />;

  const { playerPoints, setPlayerPoints, numPlayers, playerNames } = useContext(GlobalContext);

  const playerName = playerNames;

  if (numPlayers < 2 || numPlayers % 2 !== 0) {
    throw new Error('O número de jogadores deve ser um número par e maior ou igual a 2');
  }

  function generateMatches(players) {
    const matches = [];

    players.forEach((player, index) => {
      if (index % 2 !== 0) {
        const match = {
          id: matches.length + 1,
          player1: players[index - 1],
          player2: player,
          winner: null,
        };
        matches.push(match);
      }
    });

    return matches;
  }
  
  const players = Array.from({ length: numPlayers }).map((_, index) => ({
    id: `Player ${index + 1}`,
    name: playerNames ? playerNames[index] : null,
    img: playerImage ? playerImage : defaultPlayerImage,
  }));
  
  const matches = generateMatches(players);

  const handleClick = (index) => {

    const newPoints = [...playerPoints];
    newPoints[index] += 1;
    setPlayerPoints(newPoints);
    console.log(playerPoints[index])
  };

  return (
    <main className="tournament__container">
      {Array.from({ length: matches.length }).map((_, index) => (
        <div key={matches[index].id} className="bracket__container">
          {matches.slice(index, index + 1).map((match) => (
            <div key={match.id} className="bracket">
              <div
                onClick={() => handleClick(index)}
                className={`player-card ${
                  match.player1.id.startsWith('Player 1') ? 'player-1' : 'player-2'
                }`}
              >
                {match.player1.img}
                <p>{match.player1.name || match.player1.id}</p>
              </div>
              <p className="vs__text">vs</p>
              <div
                onClick={() => handleClick(index)}
                className={`player-card ${
                  match.player1.id.startsWith('Player 1') ? 'player-2' : 'player-1'
                }`}
              >
                {match.player2.img}
                <p>{match.player2.name || match.player2.id}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </main>
  );
}

export default TournamentPage;