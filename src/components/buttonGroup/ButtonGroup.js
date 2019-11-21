import React from "react";
import customChatPizza from '../chatbot/CustomChatbot';

function ButtonGroup(props) {
  const buttonWidth = {
    width: "600px"
  };
  
  var customPizza = [];

  function addIngredient(ing) {
      customPizza.push(ing);
      console.log(customPizza);
  };

  return (
    <div>
      <div  className="d-flex justify-content-center mt-3 mb-3">
        <h2>Custom pizza goes here.{ customChatPizza }</h2>
      </div>
    <div>
      <div className="vegetables">
        <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-success btn-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("corn");
            addIngredient("Tomato");
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
            addIngredient("Mushroom");
          }}
        >
          Add/Remove Mushroom
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-success 1-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("veggie");
            addIngredient("Bell Peppers");
          }}
        >
          Add/Remove Bell Peppers
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-success 1-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("pineapple");
            addIngredient("Pineapple");
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
            addIngredient("Spinach");
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
            addIngredient("Banana Peppers");
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
            addIngredient("Onion");
          }}
        >
          Add/Remove Onion
        </button>
      </div>

      </div>

      <div className="Meats">
        <div className="d-flex justify-content-center mt-3 mb-3">
          <button
            className="btn btn-danger 1-block"
            style={buttonWidth}
            onClick={() => {
              props.eventHandler("ham");
              addIngredient("Ham");
            }}
          >
            Add/Remove Ham
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-danger btn-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("tomato");
            addIngredient("Pepperoni");
          }}
        >
          Add/Remove Pepperoni
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-danger 1-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("sausage");
            addIngredient("Sausage");
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
            addIngredient("Ground Beef");
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
            addIngredient("Chicken");
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
            addIngredient("Bacon");
          }}
        >
          Add/Remove Bacon
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-danger 1-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("sardine");
            addIngredient("Sardine");
          }}
        >
          Add/Remove Sardine
        </button>
      </div>
      </div>
    </div>
  );
}

export default ButtonGroup;
