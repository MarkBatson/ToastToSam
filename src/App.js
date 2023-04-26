import React, { useState } from 'react';
import './App.css';

export const App = () => {

  const [reason, setReason] = useState(4);
  const [showIntro, setShowIntro] = useState(true);

  const top10 = [
    "You Love Each Other",
    "He Can be Friends with Anyone",
    "Always Makes Pictures Interesting",
    "Amazing Fashion Sense",
    "Perseveres Through Thick and Thin",

    "Likes to dress up",
    "Natural athlete",
    "Uncontested Champion of Super Smash Bros",
    "Talented Musician",
    "Appreciates Fine Cuisine",
  ];

  const pictures = [
    ["https://i.imgur.com/1TWmtPv.jpg", "https://i.imgur.com/eGCCkER.jpg", "https://i.imgur.com/xPoaiUb.jpg"],
    ["https://i.imgur.com/KOYboql.jpg", "https://i.imgur.com/aXu95HH.jpg", "https://i.imgur.com/unPSDn6.jpg", "https://i.imgur.com/8RVUsmr.jpg"],
    ["https://i.imgur.com/5N1jXr0.jpg"],
    ["https://i.imgur.com/Sz1VLge.jpg", "https://i.imgur.com/LdQyN6z.jpg", "https://i.imgur.com/nens6us.jpg", "https://i.imgur.com/PRvCJxe.jpg"],
    ["https://i.imgur.com/nnL4BE3.jpg", "https://i.imgur.com/QlUdyz0.jpg", "https://i.imgur.com/8C35UZO.jpg"],
  ];

  const rightClick = () => {
    if(reason > 0) {
      setReason(reason - 1);
    }
  }

  const leftClick = () => {
    if (reason < 4) {
      setReason(reason + 1);
    }
  }

  const leftButton = () => {
    return (
      <div onClick={leftClick} >
        <svg height="30" width="30">
          <polygon points="30,0 6,15 30,30" className={reason >= 4 ? 'hidden' : 'triangle-icon'} />
        </svg>
      </div>
    );
  }

  const rightButton = () => {
    return (
      <div onClick={rightClick} >
        <svg height="30" width="30">
          <polygon points="0,0 24,15 0,30" className={reason <=0 ? 'hidden' : 'triangle-icon'} />
        </svg>
      </div>
    );
  }

  const loadPictures = () => {
    return pictures[reason].map((imageUrl) => {
      return (
        <img src={imageUrl} alt={top10[reason]} className="image" />
      );
    });
  }

  const intro = () => {
    return (
      <div className="modal">
        <h1 className="modal-title">
          Top 5 Reasons Why Olivia Made the Right Choice Marrying Sam
        </h1>
        <div className="button" onClick={() => setShowIntro(false)}>
          <p className="button-text">Start</p>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      {showIntro && intro()}
      <div className="flex">
        {leftButton()}
        <h1 className="title">
          {reason+1}
        </h1>
        {rightButton()}
      </div>
      <h1>
        {top10[reason]}
      </h1>
      {loadPictures()}
    </div>
  );
}
