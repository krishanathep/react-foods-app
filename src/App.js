import React, { Component } from "react";
import AddFoodItemForm from "./components/AddFoodItemForm";
import FoodItemList from "./components/FoodItemList";
import EditFoodItemForm from "./components/EditFoodItemForm";

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
    this.setEditing = this.setEditing.bind(this)
    this.editFoodItem = this.editFoodItem.bind(this)
    this.updateFoodItem = this.updateFoodItem.bind(this)
    this.boughtFoodItem = this.boughtFoodItem.bind(this)
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

  boughtFoodItem(currentFood) {
    const updatedCurrentFood = Object.assign({}, currentFood, { status : true })
    const foodItems = this.state.foodItems.map((foodItem, index) => (foodItem.id === currentFood.id ? updatedCurrentFood : foodItem ))
    this.setState({ foodItems : foodItems })
  }

  deleteFoodItem(id) {
    const foodItems = this.state.foodItems.filter( item => item.id !== id )
    this.setState({ foodItems: foodItems })

    if(this.state.editing === true) {
      window.location.reload()
    }
  }

  editFoodItem(foodItem) {
    this.setEditing(true)
    this.setState({
      food: foodItem.food,
      cost: foodItem.cost,
      foodItem: foodItem
    })
  }

  setEditing(value) {
    if(typeof value !== 'boolean') { throw "This value must either be true or false" }
    this.setState({
      editing: value, food: '', cost: ''
    })
  }

  updateFoodItem(event) {
    event.preventDefault()
    const updatedFood = this.state.food
    const updatedCost = this.state.cost
    const updatedFoodItem = Object.assign({}, this.state.foodItem, { food: updatedFood, cost: updatedCost})
    const foodItems = this.state.foodItems.map((foodItem) => (foodItem.id === this.state.foodItem.id ? updatedFoodItem : foodItem ))
    this.setState({ food: '', cost: '', foodItems: foodItems })
  }

  render() {
    return (
      <div className="App container">
        <h2 className="my-5" align="center">
          REACT FOOD ITEMS
        </h2>
        <FoodItemList
          foodItems={this.state.foodItems}
          deleteFoodItem={this.deleteFoodItem}
          editFoodItem={this.editFoodItem}
          boughtFoodItem={this.boughtFoodItem}
        />
        {
          this.state.editing ? (
            <EditFoodItemForm
              setEditing={this.setEditing}
              food={this.state.food}
              cost={this.state.cost}
              handleInputChange={this.handleInputChange}
              updateFoodItem={this.updateFoodItem}
            />
          ) : (
            <AddFoodItemForm
              food={this.state.food}
              cost={this.state.cost}
              handleInputChange={this.handleInputChange}
              addFoodItem={this.addFoodItem}
            />
          )
        }  
      </div>
    );
  }
}

export default App;
