import React from "react";

const FoodItemList = (props) => {
  return (
    <div className="FoodItemList">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <button
                className='btn btn-success mb-2 float-right'
                data-toggle='modal'
                data-target='#addNewModal'
              >
                <i class="fas fa-plus-circle"></i> ADD NEW
              </button>
              <table className="table table-bordered">
                <thead align="center">
                  <tr>
                    <th>ID</th>
                    <th>FOOD</th>
                    <th>COST</th>
                    <th width="30%">ACTIONS</th>
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
                            data-toggle='modal'
                            data-target='#updateModal'
                          >
                            <i class="fas fa-edit"></i>
                          </button>
                          <button
                            className="btn btn-danger mr-1 ml-1"
                            onClick={() => props.deleteFoodItem(foodItem.id)}
                          >
                            <i class="fas fa-trash-alt"></i>
                          </button>
                          <button
                            className="btn btn-info"
                            onClick={() => props.boughtFoodItem(foodItem)}
                          >
                            {foodItem.status ? <i class="fas fa-cart-plus"></i> : <i class="far fa-clock"></i>}
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
          </div>
        </div>
      </div>

      {/* Add New Modal*/}
      <div class="modal fade" id="addNewModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">NEW FOOD ITEM</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div className="form-group">
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
                  <input
                    type="text"
                    name='cost'
                    value={props.cost}
                    className='form-control'
                    placeholder='Enter Food Cost...'
                    onChange={props.handleInputChange}
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button onClick={props.addFoodItem} data-dismiss="modal" type="button" class="btn btn-primary">SUBMIT</button>
              <button onClick={() => props.setEditing(false)} type="button" class="btn btn-secondary" data-dismiss="modal">CLOSE</button>
            </div>
          </div>
        </div>
      </div>

      {/* Update Modal*/}
      <div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">UPDATE FOOD ITEM</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div className="form-group">
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
                  <input
                    type="text"
                    name='cost'
                    value={props.cost}
                    className='form-control'
                    placeholder='Enter Food Cost...'
                    onChange={props.handleInputChange}
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button onClick={props.updateFoodItem} data-dismiss="modal" type="button" class="btn btn-primary">SUBMIT</button>
              <button onClick={() => props.setEditing(false)} type="button" class="btn btn-secondary" data-dismiss="modal">CLOSE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItemList;
