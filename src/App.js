import React, { useState } from 'react';
import './App.css';

export const App = () => {

  const [reason, setReason] = useState(4);
  const [showIntro, setShowIntro] = useState(true);
  const [showClue, setShowClue] = useState(false);
  const [showNextClue, setShowNextClue] = useState(false);
  const [differences, setDifferences] = useState(0);

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
    ["https://i.imgur.com/KOYboql.jpg", "https://i.imgur.com/aXu95HH.jpg", "https://i.imgur.com/HzJUq2x.jpg", "https://i.imgur.com/TwEpj4c.jpg", "https://i.imgur.com/fZsbP8C.jpg", "https://i.imgur.com/U90C22f.jpg", "https://i.imgur.com/PT9IOLQ.jpg", "https://i.imgur.com/2v5hwib.jpg"],
    ["https://i.imgur.com/5N1jXr0.jpg", "https://i.imgur.com/qbTeOBm.jpg", "https://i.imgur.com/3oz5Swk.jpg", "https://i.imgur.com/qTanKp5.jpg", "https://i.imgur.com/zt9Yfnv.jpg"],
    ["https://i.imgur.com/Sz1VLge.jpg", "https://i.imgur.com/LdQyN6z.jpg", "https://i.imgur.com/nens6us.jpg", "https://i.imgur.com/PRvCJxe.jpg"],
    ["https://i.imgur.com/nnL4BE3.jpg", "https://i.imgur.com/QlUdyz0.jpg", "https://i.imgur.com/8C35UZO.jpg"],
  ];

  const originalImage = "https://i.imgur.com/h2hCFA7.jpg";
  const modifiedImage = "https://i.imgur.com/NXgrU9l.jpg";
  const santaIcon = "https://i.imgur.com/B9aGdow.png";
  const nextClue = "https://i.imgur.com/S8qzQJm.jpg";

  const rightClick = () => {
    if(reason > 0) {
      window.scrollTo(0,0);
      setReason(reason - 1);
    }
  }

  const leftClick = () => {
    if (reason < 4) {
      window.scrollTo(0,0);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (differences == 8) {
      setShowNextClue(true);
    } else {
      alert('Not quite...');
    }
  }

  const intro = () => {
    return (
      <div className="modal">
        <img src={santaIcon} width="200px" onClick={() => setShowClue(true)}/>
        <h1 className="modal-title">
          Top 5 Reasons Why Olivia Made the Right Choice Marrying Sam
        </h1>
        <div className="button" onClick={() => setShowIntro(false)}>
          <p className="button-text">Start</p>
        </div>
      </div>
    )
  }

    if (showClue) {
      return (
        <div>
          {showNextClue &&
            <div className="modal">
              <h1>You Got It!</h1>
              <img src={nextClue} className="image" />
            </div>
          }
          <h1 className="modal-title">
            Two pictures that are not quite alike.
          </h1>
          <h1 className="modal-title">
            Enter the number of differences you find.
          </h1>
          <form className="form" onSubmit={handleSubmit}>
            <label>Differences:
              <input 
                type="text" 
                value={differences}
                onChange={(e) => setDifferences(e.target.value)}
              />
              <input type="submit" />
            </label>
          </form>
          <div className="spot-the-difference">
            <img width="500px" src={originalImage} />
            <img width="500px" src={modifiedImage} />
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
      <div className="flex">
        {leftButton()}
        <h1 className="title">
          {reason+1}
        </h1>
        {rightButton()}
      </div>
    </div>
  );
}
