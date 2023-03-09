import React, { useState } from 'react';
import './tournamentpage.css';
import { BsFillPersonFill } from "react-icons/bs";
import Header from '../header/Header';

function TournamentPage({playerImage, playerNameProps}) {

  const defaultPlayerImage = <BsFillPersonFill size={40} />;
  const playerName = playerNameProps ? playerNameProps : null;

  let players = [
    {
      id:'Player 1',
      name:playerName ,
      img: playerImage? playerImage : defaultPlayerImage,
    },
    {
      id:'Player 2',
      name:playerName,
      img: playerImage? playerImage : defaultPlayerImage,
    },
    {
      id:'Player 3',
      name:playerName,
      img: playerImage? playerImage : defaultPlayerImage,
    },
    {
      id:'Player 4',
      name:playerName,
      img: playerImage? playerImage : defaultPlayerImage,
    },
    {
      id:'Player 5',
      name:playerName,
      img: playerImage? playerImage : defaultPlayerImage,
    },
    {
      id:'Player 6',
      name:playerName,
      img: playerImage? playerImage : defaultPlayerImage,
    },
  ]

  const has6players = players.length === 6;

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

  return (
    <main className={`${has6players ? 'grid-6-p' : ''} 'tournament__container'`}>
        <div className='bracket__container'>
        {matches.map((match) => (
          <div key={match.id} className='bracket'>
            <div className='player__container'>
              {match.player1.img}
              <p>{match.player1.name || match.player1.id}</p>
            </div>
            <p className='vs__text'>vs</p>
            <div className='player__container'>
              {match.player2.img}
              <p>{match.player2.name || match.player2.id}</p>
            </div>
          </div>
        ))}
        </div>
        <div className='bracket__container'>
          <div className='bracket'>
            <div className='player__container'>
              <BsFillPersonFill size={40}/>
              <p>Player ?</p>
            </div>
            <p className='vs__text'>vs</p>
            <div className='player__container'>
              <BsFillPersonFill size={40}/>
              <p>Player ?</p>
            </div>
          </div>
          <div className='bracket'>
            <div className='player__container'>
              <BsFillPersonFill size={40}/>
              <p>Player ?</p>
            </div>
            <p className='vs__text'>vs</p>
            <div className='player__container'>
              <BsFillPersonFill size={40}/>
              <p>Player ?</p>
            </div>
          </div>
        </div>
        <div className='bracket__container'>
          <div className='bracket'>
            <div className='player__container'>
              <BsFillPersonFill size={40} />
              <p>Player ?</p>
            </div>
          </div>
        </div>
    </main>
  )
}

export default TournamentPage