import React from "react";

const EditFoodItemForm = (props) => {
  return (
    <div className="EditFoodItemForm">
        <div className="col-md-12">
          <div className="card my-5">
          <div className="card-header">
              <h5 className='card-title'>UPDATE FOOD ITEM</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Food Name :</label>
                  <input
                    type="text"
                    name="food"
                    className="form-control"
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
                    value={props.cost}
                    onChange={props.handleInputChange}
                  />
                </div>
                <div className='float-right'>
                <button onClick={props.updateFoodItem, () => props.setEditing(false)} className="btn btn-primary mr-1">
                    SUBMIT
                </button>
                <button onClick={ () => props.setEditing(false)} className='btn btn-danger'>
                    CANCEL
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default EditFoodItemForm;