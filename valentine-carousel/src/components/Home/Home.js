import React, { useState } from 'react';
import './Home.css';
import janImage from '../../Images/jan.JPG';
import febImage from '../../Images/feb.jpg';
import marImage from '../../Images/mar.jpg';
import aprImage from '../../Images/apr.jpg';
import mayImage from '../../Images/may.jpg';
import junImage from '../../Images/jun.jpg';
import julImage from '../../Images/jul.jpg';
import augImage from '../../Images/aug.JPG';
import sepImage from '../../Images/sep.JPG';
import octImage from '../../Images/oct.JPG';
import novImage from '../../Images/nov.JPG';
import decImage from '../../Images/dec.jpg';

const Home = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const monthlyImages = [
    { month: "January", image: janImage, message: "I love your eyes" },
    { month: "February", image: febImage, message: "I love your smile" },
    { month: "March", image: marImage, message: "I love your kindness" },
    { month: "April", image: aprImage, message: "I love your laughter" },
    { month: "May", image: mayImage, message: "I love your strength" },
    { month: "June", image: junImage, message: "I love your heart" },
    { month: "July", image: julImage, message: "I love your mind" },
    { month: "August", image: augImage, message: "I love your soul" },
    { month: "September", image: sepImage, message: "I love your spirit" },
    { month: "October", image: octImage, message: "I love your passion" },
    { month: "November", image: novImage, message: "I love your dreams" },
    { month: "December", image: decImage, message: "I love everything about you" }
  ];

  const handleClick = (month) => {
    setFlippedCards(prev => ({
      ...prev,
      [month]: !prev[month]
    }));
  };

  return (
    <div className="home-container">
      <h1 className="title">Our Year Together</h1>
      <div className="grid-container">
        {monthlyImages.map((item) => (
          <div 
            key={item.month}
            className={`card ${flippedCards[item.month] ? 'flipped' : ''}`}
            onClick={() => handleClick(item.month)}
          >
            <div className="card-inner">
              <div className="card-front">
                <img
                  src={item.image}
                  alt={item.month}
                  className="month-image"
                />
                <div className="month-label">{item.month}</div>
              </div>
              <div className="card-back">
                <p className="message">{item.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;