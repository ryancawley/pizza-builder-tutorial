import React from "react";

function ButtonGroup(props) {
  const buttonWidth = {
    width: "600px"
  };
  return (
   /* <div>
      <div className="vegetables">

      </div>

      <div className="Meats">

      </div>
    </div>*/
    
    <div>
      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-success btn-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("corn");
          }}
        >
          Add/Remove Tomato
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-success btn-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("mushroom");
          }}
        >
          Add/Remove Mushroom
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-danger btn-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("tomato");
          }}
        >
          Add/Remove Pepperoni
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-success 1-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("veggie");
          }}
        >
          Add/Remove Bell Peppers
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-danger 1-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("sausage");
          }}
        >
          Add/Remove Sausage
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-danger 1-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("groundBeef");
          }}
        >
          Add/Remove Ground Beef
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-danger 1-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("chicken");
          }}
        >
          Add/Remove Chicken
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-danger 1-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("bacon");
          }}
        >
          Add/Remove Bacon
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-success 1-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("pineapple");
          }}
        >
          Add/Remove Pineapple
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-success 1-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("spinach");
          }}
        >
          Add/Remove Spinach
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-success 1-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("bananaPeppers");
          }}
        >
          Add/Remove Banana Peppers
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-success 1-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("onion");
          }}
        >
          Add/Remove Onion
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-danger 1-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("sardine");
          }}
        >
          Add/Remove Sardine
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-danger 1-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("ham");
          }}
        >
          Add/Remove Ham
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-warning 1-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("cheese");
          }}
        >
          Add/Remove Cheese
        </button>
      </div>
    </div>
  );
}

export default ButtonGroup;
