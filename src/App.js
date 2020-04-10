import React, { Component } from "react";
import FoodItemList from "./components/FoodItemList";
import Navbar from "./layouts/Navbar";
import { HashRouter, Switch, Route } from "react-router-dom"
import Users from './components/Users'
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
        state: false
      },
      foodItems: [
        { id: 1, userId: 1, food: "Rice", cost: 100, status: false },
        { id: 2, userId: 2, food: "Beans", cost: 200, status: false },
        { id: 3, userId: 3, food: "Coke", cost: 400, status: false },
        { id: 4, userId: 4, food: "Coffee", cost: 300, status: true },
        { id: 5, userId: 5, food: "Donut", cost: 200, status: false },
        { id: 6, userId: 6, food: "Sushi", cost: 500, status: true }
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
    {/*if(typeof value !== 'boolean') { throw "This value must either be true or false" }*/ }
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
    this.setState({ food: '', cost: '', foodItems: foodItems, editing : false })
  }

  render() {
    return (
      <div className="App">
        <HashRouter basename='/'>
          <Navbar title='REACT FOOD ITEMS' />
          <Switch>
            <div className='container'>
              <Route
                exact
                path='/'
                render={props => (
                  <FoodItemList {...props}
                    foodItems={this.state.foodItems}
                    deleteFoodItem={this.deleteFoodItem}
                    editFoodItem={this.editFoodItem}
                    boughtFoodItem={this.boughtFoodItem}
                    food={this.state.food}
                    cost={this.state.cost}
                    addFoodItem={this.addFoodItem}
                    handleInputChange={this.handleInputChange}
                    updateFoodItem={this.updateFoodItem}
                    setEditing={this.setEditing}
                  />      
                )}
              />
              <Route
                path='/users'
                component={Users}
              />
            </div>
          </Switch>
        </HashRouter>

        <footer className='footer my-5'>
          <div className='container'>
            <span className='text-muted'>&copy; REACT FOOD ITEMS by Full Stack Solution Co.,Ltd.</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
