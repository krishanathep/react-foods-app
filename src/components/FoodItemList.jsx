import React from "react";

const FoodItemList = (props) => {
  return (
    <div className="FoodItemList">
      <table className="table table-bordered">
        <thead align="center">
          <tr>
            <th>ID</th>
            <th>Food</th>
            <th>Cost</th>
            <th width="25%">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.foodItems.length > 0 ? (
            props.foodItems.map((foodItem) => (
              <tr key={foodItem.id}>
                <td align="center">{foodItem.id}</td>
                <td>{foodItem.food}</td>
                <td>{foodItem.cost}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => props.editFoodItem(foodItem)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger mr-1 ml-1"
                    onClick={() => props.deleteFoodItem(foodItem.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-info"
                    onClick={() => props.boughtFoodItem(foodItem)}
                  >
                    {foodItem.status ? "bought " : "Pending"}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} align='center'>No food for a lazy man!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FoodItemList;
