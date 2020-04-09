import React, { Component } from "react";
import AddFoodItemForm from "./components/AddFoodItemForm";
import FoodItemList from "./components/FoodItemList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      userId: 1,
      food: "",
      cost: "",
      status: false,
      foodItem: {
        id: null,
        userId: 1,
        food: "",
        cost: 0,
        state: false,
      },
      foodItems: [
        { id: 1, userId: 1, food: "Rice", cost: 100, status: false },
        { id: 2, userId: 2, food: "Beans", cost: 200, status: false },
      ],
      editing: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addFoodItem = this.addFoodItem.bind(this);
    this.deleteFoodItem = this.deleteFoodItem.bind(this)
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  addFoodItem(event) {
    event.preventDefault();
    if (!this.state.food) return;
    const foodItem = {
      id: this.state.foodItems.length + 1,
      food: this.state.food,
      cost: this.state.cost,
      userId: this.state.userId,
      status: this.state.status,
    };

    this.setState({
      food: "",
      cost: "",
      foodItem: foodItem,
      foodItems: [...this.state.foodItems, foodItem],
    });
  }

  deleteFoodItem(id) {
    const foodItems = this.state.foodItems.filter( item => item.id !== id )
    this.setState({ foodItems: foodItems })

    if(this.state.editing === true) {
      window.location.reload()
    }
  }

  render() {
    return (
      <div className="App container">
        <h2 className="my-5" align="center">
          React Foods App
        </h2>
        <FoodItemList
          foodItems={this.state.foodItems}
          deleteFoodItem={this.deleteFoodItem}
        />
        <AddFoodItemForm
          food={this.state.food}
          cost={this.state.cost}
          handleInputChange={this.handleInputChange}
          addFoodItem={this.addFoodItem}
        />
      </div>
    );
  }
}

export default App;
