import React from "react";

const AddFoodItemForm = (props) => {
  return (
    <div className="AddFoodItemForm">
        <div className="col-md-12">
          <div className="card my-5">
            <div className="card-header">
              <h5 className='card-title'>ADD FOOD ITEM</h5>
            </div>
            <div className="card-body">
              <form onSubmit={props.addFoodItem}>
                <div className="form-group">
                  <label>Food Name :</label>
                  <input
                    type="text"
                    name="food"
                    className="form-control"
                    placeholder="Enter Food Name.."
                    value={props.food}
                    onChange={props.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Food Cost :</label>
                  <input
                    type="text"
                    name="cost"
                    className="form-control"
                    placeholder="Enter Food Cost..."
                    value={props.cost}
                    onChange={props.handleInputChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary float-right">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AddFoodItemForm;