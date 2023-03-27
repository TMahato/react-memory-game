import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

import messi from '../assets/messi.png';
import ronaldo from '../assets/ronaldo.png';
import mbappe from '../assets/mbappe.png';
import salah from '../assets/mo-salah.png';
import neymar from '../assets/neymar.png';
import pogba from '../assets/pogba.png';
import ramos from '../assets/ramos.png';
import rashford from '../assets/rashford.png';
import maguire from '../assets/maguire.png';
import marcelo from '../assets/marcelo.png';
import beckham from '../assets/beckham.png';
import zidane from '../assets/zidane.png';

const Card = (fruitSrc, handleClickEvt, fruitName, index) => {
  return (
    <div className="card" onClick={handleClickEvt} key={index}>
      <img src={fruitSrc} alt={fruitName} />
      <p className={styles.cardImg}>
        {fruitName.toString().split('')[0].toUpperCase() +
          fruitName.toString().slice(1)}
      </p>
    </div>
  );
};

const Main = (props) => {
  const initialCardArr = [
    {
      src: messi,
      name: 'messi',
      isClicked: false,
    },
    {
      src: ronaldo,
      name: 'ronaldo',
      isClicked: false,
    },
    {
      src: neymar,
      name: 'neymar',
      isClicked: false,
    },
    {
      src: mbappe,
      name: 'mbappe',
      isClicked: false,
    },
    {
      src: pogba,
      name: 'pogba',
      isClicked: false,
    },
    {
      src: rashford,
      name: 'rashford',
      isClicked: false,
    },
    {
      src: maguire,
      name: 'maguire',
      isClicked: false,
    },
    {
      src: ramos,
      name: 'ramos',
      isClicked: false,
    },
    {
      src: salah,
      name: 'salah',
      isClicked: false,
    },
    {
      src: beckham,
      name: 'beckham',
      isClicked: false,
    },
    {
      src: marcelo,
      name: 'marcelo',
      isClicked: false,
    },
    {
      src: zidane,
      name: 'zidane',
      isClicked: false,
    },
  ];

  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [cardsArr, setCardsArr] = useState(initialCardArr);
  

  const playerLose = () => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
    setCurrentScore(0);
    setCardsArr(initialCardArr);
  };

  const playerWin = (card, index) => {
    const tempCopy = [...cardsArr];
    tempCopy.splice(index, 1);
    setCardsArr([
      ...tempCopy,
      {
        src: card.src,
        name: card.name,
        isClicked: true,
      },
    ]);
    setCurrentScore(currentScore + 1);

    if(currentScore === 12){
      console.log("you won");
    }
  };

  const handleClick = (e) => {
    const fruitName = e.target.childNodes[1].textContent.toLowerCase();
    cardsArr.forEach((card, index) => {
      if (card.name === fruitName && card.isClicked === true) {
        playerLose();
      }
      if (card.name === fruitName && card.isClicked === false) {
        playerWin(card, index);
      }
    });
  };

  useEffect(() => {
    const shuffledArray = [...cardsArr].sort((a, b) => 0.5 - Math.random());
    setCardsArr(shuffledArray);
  }, [currentScore]);

  return (
    <div className={styles.mainContent}>
      <div className={styles.firstRow}>
        <div className="current-score">
          <p>Current Score: {currentScore}</p>
        </div>
        <div className="best-score">
          <p>Best Score: {bestScore}</p>
        </div>
      </div>
      <div className={styles.secondRow}>
        {cardsArr.map((card, index) => {
          return Card(card.src, handleClick, card.name, index);
        })}
      </div>
    </div>
  );
};

export default Main;