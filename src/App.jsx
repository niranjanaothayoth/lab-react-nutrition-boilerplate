import React, { useState } from 'react';
import FoodBox from './components/FoodBox';
import Search from './components/Search';

const foods = [
  { name: 'Pizza', calories: 400, image: 'https://i.imgur.com/eTmWoAN.png' },
  { name: 'Salad', calories: 150, image: 'https://i.imgur.com/DupGBz5.jpg' },
  { name: 'Sweet Potato', calories: 120, image: 'https://i.imgur.com/hGraGyR.jpg' },
  // add more food items as needed
];

const App = () => {
  const [filteredFoods, setFilteredFoods] = useState(foods);
  const [selectedFoods, setSelectedFoods] = useState([]);

  const handleSearch = (searchTerm) => {
    const filtered = foods.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFoods(filtered);
  };

  const handleAddFood = (food, quantity) => {
    const newFood = { ...food, quantity: parseInt(quantity) };
    const foodIndex = selectedFoods.findIndex(item => item.name === newFood.name);
    if (foodIndex === -1) {
      setSelectedFoods([...selectedFoods, newFood]);
    } else {
      const updatedFoods = [...selectedFoods];
      updatedFoods[foodIndex].quantity += newFood.quantity;
      setSelectedFoods(updatedFoods);
    }
  };

  return (
    <div className="App">
      <Search onSearch={handleSearch} />
      {filteredFoods.map((food, index) => (
        <FoodBox key={index} food={food} onAdd={handleAddFood} />
      ))}
      <div>
        <h2>Today's Foods</h2>
        <ul>
          {selectedFoods.map((food, index) => (
            <li key={index}>{food.quantity} {food.name} = {food.calories * food.quantity} cal</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
