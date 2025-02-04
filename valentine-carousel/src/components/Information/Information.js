import React, { useState } from 'react';
import './Information.css';

const Information = () => {
  const [activeSection, setActiveSection] = useState('basics');

  const renderBasics = () => (
    <div className="info-section basics">
      <h2>✨ Urja's Basics ✨</h2>
      <div className="info-grid">
        <div className="info-item">
          <span className="label">Full Name:</span>
          <span className="value">Urja Nandu</span>
        </div>
        <div className="info-item">
          <span className="label">Birthday:</span>
          <span className="value">Dec 24, 2004</span>
        </div>
        <div className="info-item">
          <span className="label">Hometown:</span>
          <span className="value">Santa Clara, CA</span>
        </div>
        <div className="info-item">
          <span className="label">Blood Type:</span>
          <span className="value">O+</span>
        </div>
        <div className="info-item">
          <span className="label">Shoe Size:</span>
          <span className="value">7.5/8</span>
        </div>
        <div className="info-item">
          <span className="label">Heel Size:</span>
          <span className="value">7/7.5</span>
        </div>
        <div className="info-item">
          <span className="label">Ring Size:</span>
          <span className="value">6/7</span>
        </div>
        <div className="info-item">
          <span className="label">Fear:</span>
          <span className="value">Ghosts/Dark</span>
        </div>
        <div className="info-item">
          <span className="label">First Bike:</span>
          <span className="value">Learned at 5 years old (3-wheeled)</span>
        </div>
        <div className="info-item">
          <span className="label">Pet Peeve:</span>
          <span className="value">Lying</span>
        </div>
        <div className="info-item">
          <span className="label">Allergy:</span>
          <span className="value">Pollen in spring</span>
        </div>
        <div className="info-item">
          <span className="label">Love Language:</span>
          <span className="value">Physical Touch, Gifts</span>
        </div>
      </div>
    </div>
  );

  const renderFavorites = () => (
    <div className="info-section favorites">
      <h2>💖 Urja's Favorites 💖</h2>
      <div className="info-grid">
        <div className="info-item">
          <span className="icon">⭐</span>
          <span className="label">Colors:</span>
          <span className="value">Royal Blue, Rose Gold</span>
        </div>
        <div className="info-item">
          <span className="icon">🐬</span>
          <span className="label">Animal:</span>
          <span className="value">Dolphin</span>
        </div>
        <div className="info-item">
          <span className="icon">🌸</span>
          <span className="label">Flowers:</span>
          <span className="value">Tulips, Roses (after 6 months)</span>
        </div>
        <div className="info-item">
          <span className="icon">❄️</span>
          <span className="label">Season:</span>
          <span className="value">Winter</span>
        </div>
        <div className="info-item">
          <span className="icon">🎉</span>
          <span className="label">Holiday:</span>
          <span className="value">Birthday</span>
        </div>
        <div className="info-item">
          <span className="icon">🎵</span>
          <span className="label">Music Genre:</span>
          <span className="value">Indie Pop (Sabrina Carpenter, Lana Del Rey), Hindi Songs</span>
        </div>
        <div className="info-item">
          <span className="icon">🎤</span>
          <span className="label">Favorite Songs:</span>
          <span className="value">Ishq Hua Hai (Jab We Met), Chemtrails Over the Country Club</span>
        </div>
        <div className="info-item">
          <span className="icon">🎬</span>
          <span className="label">Movies:</span>
          <span className="value">YJHD (Hindi), Culpa Mia (English)</span>
        </div>
        <div className="info-item">
          <span className="icon">📺</span>
          <span className="label">TV Shows:</span>
          <span className="value">Bridgerton, Friends, Grey's Anatomy, The Resident</span>
        </div>
        <div className="info-item">
          <span className="icon">📖</span>
          <span className="label">Books:</span>
          <span className="value">Harry Potter, Twisted Series</span>
        </div>
        <div className="info-item">
          <span className="icon">💄</span>
          <span className="label">Makeup Brands:</span>
          <span className="value">Smile, Rare Beauty, Elf, Maybelline, Rhoda, Sephora</span>
        </div>
        <div className="info-item">
          <span className="icon">🏀</span>
          <span className="label">Fitness Activities:</span>
          <span className="value">Dance, Basketball</span>
        </div>
        <div className="info-item">
          <span className="icon">🎨</span>
          <span className="label">Hobbies:</span>
          <span className="value">Dancing, Singing, Reading, Yapping</span>
        </div>
        <div className="info-item">
          <span className="icon">✈️</span>
          <span className="label">Dream Destinations:</span>
          <span className="value">Greece, Paris</span>
        </div>
        <div className="info-item">
          <span className="icon">🏡</span>
          <span className="label">Staycation Activity:</span>
          <span className="value">Baking/Cooking with Tanmay</span>
        </div>
        <div className="info-item">
          <span className="icon">🤫</span>
          <span className="label">Guilty Pleasure:</span>
          <span className="value">Rewatching similar things to what I read</span>
        </div>
      </div>
    </div>
  );

  const renderFood = () => (
    <div className="info-section food">
      <h2>🍽️ Urja's Foodie Favorites 🍽️</h2>
      <div className="info-grid">
        <div className="info-item">
          <span className="icon">🍕</span>
          <span className="label">Favorite Food:</span>
          <span className="value">Veggie Pizza</span>
        </div>
        <div className="info-item">
          <span className="icon">🍰</span>
          <span className="label">Desserts:</span>
          <span className="value">Chocolate Cake, Tres Leches, Jalebi, Flan, Tuxedo Chocolate Mousse Cake (Costco)</span>
        </div>
        <div className="info-item">
          <span className="label">Favorite Cuisine:</span>
          <span className="value">Italian or Chinese (Tahoe - The Traditional Chinese Restaurant)</span>
        </div>
        <div className="info-item">
          <span className="label">Favorite Snacks:</span>
          <span className="value">Cheez-Its, Oreos</span>
        </div>
        <div className="info-item">
          <span className="label">Favorite Drink:</span>
          <span className="value">Coke</span>
        </div>
        <div className="info-item">
          <span className="label">Favorite Fast Food Place:</span>
          <span className="value">In-N-Out</span>
        </div>
        <div className="info-item">
          <span className="label">Weekend with Tanmay:</span>
          <span className="value">Fun activity Saturday, Movie night/date Sunday</span>
        </div>
        <div className="info-item">
          <span className="label">Weekend without Tanmay:</span>
          <span className="value">Sleeping Saturday or hanging out with friends</span>
        </div>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="info-section orders">
      <h2>📋 Orders 📋</h2>
      <div className="order-details">
        <div className="order-item">
          <div className="order-name">Starbucks Order</div>
          <div className="order-list">
            <div className="order-entry">
              <div className="order-label">Drink:</div>
              <div className="order-value">Iced white chocolate mocha with 2 pumps of extra white mocha light whip</div>
            </div>
            <div className="order-entry">
              <div className="order-label">Food:</div>
              <div className="order-value">Cheese Danish, Butter Croissant, or Spinach Feta Wrap</div>
            </div>
          </div>
        </div>
        <div className="order-item">
          <div className="order-name">Taco Bell Order</div>
          <div className="order-list">
            <div className="order-entry">
              <div className="order-value">Bean and Cheese Burrito v/ Veggies</div>
            </div>
            <div className="order-entry">
              <div className="order-value">Nacho Fries</div>
            </div>
            <div className="order-entry">
              <div className="order-value">Baja Blast (Watery no freeze)</div>
            </div>
          </div>
        </div>
        <div className="order-item">
          <div className="order-name">McDonald's Order</div>
          <div className="order-list">
            <div className="order-entry">
              <div className="order-value">Chicken Nuggets and McFlurry or Drink (depends on mood)</div>
            </div>
            <div className="order-entry">
              <div className="order-value">Large Fries and Oreo McFlurry</div>
            </div>
          </div>
        </div>
        <div className="order-item">
          <div className="order-name">In-N-Out Order</div>
          <div className="order-list">
            <div className="order-entry">
              <div className="order-value">Grilled Cheese Animal Style Extra Pickles, Fries, and Chocolate Shake</div>
            </div>
          </div>
        </div>
        <div className="order-item">
          <div className="order-name">Subway Order</div>
          <div className="order-list">
            <div className="order-entry">
              <div className="order-value">Italian Herbs and Cheese w/ Swiss Cheese, Onions, Bell Peppers — Toasted</div>
            </div>
            <div className="order-entry">
              <div className="order-value">Add: Olives, Light Lettuce, Spinach, Tomato, Chipotle, Mayo, Sriracha, Salt, and Pepper</div>
            </div>
          </div>
        </div>
        <div className="order-item">
          <div className="order-name">Chipotle Order</div>
          <div className="order-list">
            <div className="order-entry">
              <div className="order-value">Veggie Bowl with Extra Cheese and Guac, White Rice, Black Beans</div>
            </div>
          </div>
        </div>
        <div className="order-item">
          <div className="order-name">Pizza Toppings</div>
          <div className="order-list">
            <div className="order-entry">
              <div className="order-value">Mushrooms, Olives, Bell Peppers, Spinach, Artichoke</div>
            </div>
          </div>
        </div>
        <div className="order-item">
          <div className="order-name">Breakfast</div>
          <div className="order-list">
            <div className="order-entry">
              <div className="order-value">Avocado Toast with Omelet or Scrambled Eggs and Iced Coffee</div>
            </div>
            <div className="order-entry">
              <div className="order-value">Fundays - Bagel, Donuts, Waffles, or Pancakes</div>
            </div>
            <div className="order-entry">
              <div className="order-label">Omelette:</div>
              <div className="order-value">Mushroom, Bell Peppers, Spinach, Tomatoes, Onions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="urja-info-container">
      <div className="section-tabs">
        <button 
          className={activeSection === 'basics' ? 'active' : ''}
          onClick={() => setActiveSection('basics')}
        >
          Basics
        </button>
        <button 
          className={activeSection === 'favorites' ? 'active' : ''}
          onClick={() => setActiveSection('favorites')}
        >
          Favorites
        </button>
        <button 
          className={activeSection === 'food' ? 'active' : ''}
          onClick={() => setActiveSection('food')}
        >
          Food
        </button>
        <button 
          className={activeSection === 'orders' ? 'active' : ''}
          onClick={() => setActiveSection('orders')}
        >
          Orders
        </button>
      </div>

      <div className="info-content">
        {activeSection === 'basics' && renderBasics()}
        {activeSection === 'favorites' && renderFavorites()}
        {activeSection === 'food' && renderFood()}
        {activeSection === 'orders' && renderOrders()}
      </div>
    </div>
  );
};

export default Information;