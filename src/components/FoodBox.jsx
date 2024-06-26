import { useState } from 'react';
import PropTypes from 'prop-types';
import './FoodBox.css'; // Import the CSS file

const FoodBox = ({ food, onAdd }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAdd = () => {
    onAdd(food, quantity);
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.image} alt={food.name} className="food-box-image" /> {/* Apply the class here */}
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input 
                className="input" 
                type="number" 
                value={quantity} 
                onChange={handleQuantityChange} 
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick={handleAdd}>
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

FoodBox.propTypes = {
  food: PropTypes.shape({
    name: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  onAdd: PropTypes.func.isRequired
};

export default FoodBox;
