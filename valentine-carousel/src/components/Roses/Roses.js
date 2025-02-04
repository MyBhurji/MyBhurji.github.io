import React from 'react';
import './Roses.css';

const Roses = () => {
  return (
    <div className="roses-container">
      <div className="rose-garden">
        <div className="rose rose1">
          <div className="stem"></div>
          

          
          {/* Rose Petals */}
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
        </div>
      </div>
      
      {/* Ground */}
      <div className="ground"></div>
    </div>
  );
};

export default Roses;