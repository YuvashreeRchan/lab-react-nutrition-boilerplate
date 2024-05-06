
import FoodBox from './components/FoodBox';
import FoodData from "../resources/FoodData";
import SearchBar from './components/SearchBar';
import './App.css'

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: FoodData,
      selectedFoods: this.initializeSelectedFoods(FoodData),
    };
  }

  initializeSelectedFoods = (foods) => {
    return foods.map((food) => ({
      ...food,
      quantity: 0,
    }));
  };

  handleSearch = (query) => {
    const filteredFoods = FoodData.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    this.setState({ foods: filteredFoods });
  };

  handleAddFood = (foodId, quantity) => {
    this.setState((prevState) => ({
      selectedFoods: prevState.selectedFoods.map((food) =>
        food.id === foodId ? { ...food, quantity: food.quantity + quantity } : food
      ),
    }));
  };

  handleResetFood = ((foodId) => {
    this.setState((prevState) => ({
      selectedFoods: prevState.selectedFoods.map((food) =>
        food.id === foodId ? { ...food, quantity: 0 } : food
      ),
    }));
  });

  render() {
    const { foods, selectedFoods } = this.state;
    return (
      <div>
        <SearchBar onSearch={this.handleSearch}/>
        <div  className="food-container">
          {foods.map((food) => (
            <div key={food.id} className='food-boxes'>
              <FoodBox 
              key={food.id}
              food={food} 
              selectedFood={selectedFoods.find((selectedFood) => selectedFood.id === food.id)}
              onAddFood={this.handleAddFood} 
              onResetFood={this.handleResetFood}
              />
            </div>
          ))}
          </div>
      </div>
    );
  }
}


export default App;
