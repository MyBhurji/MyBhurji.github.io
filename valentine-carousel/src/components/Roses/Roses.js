import React from 'react';
import './Roses.css';

const Roses = () => {
  const roses = Array.from({ length: 15 });
  const clouds = Array.from({ length: 5 });

  return (
    <div className="roses-container">
      {/* Add sun */}
      <div className="sun">
        <div className="sun-rays"></div>
      </div>
      
      {/* Add clouds */}
      {clouds.map((_, index) => (
        <div className={`cloud cloud${index + 1}`} key={`cloud-${index}`}>
          <div className="cloud-part"></div>
          <div className="cloud-part"></div>
          <div className="cloud-part"></div>
        </div>
      ))}
      
      <div className="rose-garden">
        {roses.map((_, index) => (
          <div className={`rose rose${index}`} key={index}>
            <div className="flower">
              <div className="petal petal-center"></div>
              <div className="petal petal-1"></div>
              <div className="petal petal-2"></div>
              <div className="petal petal-3"></div>
              <div className="petal petal-4"></div>
              <div className="petal petal-5"></div>
              <div className="petal petal-6"></div>
              <div className="petal petal-7"></div>
              <div className="petal petal-8"></div>
            </div>
            <div className="stem"></div>
            <div className="leaves">
              <div className="leaf leaf1"></div>
              <div className="leaf leaf2"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="ground"></div>
    </div>
  );
};

export default Roses;