import React from 'react';
import ChatBot from 'react-simple-chatbot';

function CustomChatbot (props) {

    const config = {
        width: "300px",
        height: "500px",
        floating: true
    };

    var customPizza = [];

    function addIngredient(ing) {
        customPizza.push(ing);
        console.log(customPizza);
    };

// Display message with all options selected as final order,
// certain builds will trigger pre-named pizzas (meat lovers, veggie lovers, etc) even if custom built. 
    const steps = [
        {
            id: "Greet",
            message: "Hello! Welcome to our pizza shop.",
            trigger: "Ask Name"       
        },
        {
            id: "Ask Name",
            message: "What is your name?",
            trigger: "Waiting user input for name"
        },
        {
            id: "Waiting user input for name",
            user: true,
            trigger: "Asking options to eat"
        },
        {
            id: "Asking options to eat",
            message: "Hi {previousValue}. Glad to know you!",
            trigger: "What do you need"
        },
        {
            id: "What do you need",
            message: "To get started, simply type in 'pizza' below",
            trigger: "Waiting again"
        },
        {
            id: "Waiting again",
            user: true,
            trigger: "Ordering setup"
        },
        {
            id: "Ordering setup",
            message: "Here are our pizza options. Please select one:",
            trigger: "Ordering options"
        },
        {
            id: "Ordering options",
            options: [
                {
                    value: "Meat Lover's Pizza",
                    label: "Meat Lover's Pizza",
                    trigger: "Enjoy Meat"
                },
                {
                    value: "Veggie Lover's Pizza",
                    label: "Veggie Lover's Pizza",
                    trigger: "Enjoy Veggie"
                },
                {
                    value: "Pepperoni Pizza",
                    label: "Pepperoni Pizza",
                    trigger: "Enjoy Pepperoni"
                },
                {
                    value: "Hawaiian Pizza",
                    label: "Hawaiian Pizza",
                    trigger: "Out of that"
                },
                {
                    value: "Build Your Own",
                    label: "Build Your Own",
                    trigger: "Custom Order"
                }
            ]
        },
        {
            id: "Enjoy Meat",
            message: "We hope you enjoy your Meat Lover's Pizza",
            trigger: "Done"
        },
        {
            id: "Enjoy Veggie",
            message: "We hope you enjoy your Veggie Lover's Pizza",
            trigger: "Done"
        },
        {
            id: "Enjoy Pepperoni",
            message: "We hope you enjoy your Pepperoni Pizza",
            trigger: "Done"
        },
        {
            id: "Enjoy Hawaiian",
            message: "We hope you enjoy your Hawaiian Pizza",
            trigger: "Done"
        },
        {
            id: "Out of that",
            message: "Sorry. We are currently out of {previousValue}. Would you like to order another pizza?",
            trigger: "Trying again"
        },
        {
            id: "Custom Order",
            message: "Let's get started on your custom pizza. What type of crust would you like?",
            trigger: "Crust Option"
        },
        {
            id: "Crust Option",
            options: [
                {
                    value: "Regular Crust",
                    label: "Regular Crust",
                    trigger: "Sauce Option"
                },
                {
                    value: "Deep Dish Crust",
                    label: "Deep Dish Crust",
                    trigger: "Sauce Option"
                },
                {
                    value: "Thin Crust",
                    label: "Thin Crust",
                    trigger: "Sauce Option"
                },
                {
                    value: "Garlic-Butter Crust",
                    label: "Garlic-Butter Crust",
                    trigger: "Sauce Option"
                }
            ]
        },
        {
            id: "Sauce Option",
            options: [
                {
                    value: "Regular Sauce",
                    label: "Regular Sauce",
                    trigger: "Cheese Option"
                },
                {
                    value: "Light Sauce",
                    label: "Light Sauce",
                    trigger: "Cheese Option"
                },
                {
                    value: "Extra Sauce",
                    label: "Extra Sauce",
                    trigger: "Cheese Option"
                },
                {
                    value: "BBQ Sauce",
                    label: "BBQ Sauce",
                    trigger: "Cheese Option"
                }
            ]
        },
        {
            id: "Cheese Option",
            options: [
                {
                    value: "Regular Cheese",
                    label: "Regular Cheese",
                    trigger: () => {
                        props.eventHandler("cheese");
                        addIngredient("Cheese");
                        return "Topping Question"
                    }
                },
                {
                    value: "Light Cheese",
                    label: "Light Cheese",
                    trigger: /*() => {
                        addIngredient("Light Cheese");
                        return*/ "Topping Question"
                    //}
                },
                {
                    value: "Extra Cheese",
                    label: "Extra Cheese",
                    trigger: /*() => {
                        addIngredient("Extra Cheese");
                        return*/ "Topping Question"
                    //}
                },
                {
                    value: "No Cheese",
                    label: "No Cheese",
                    trigger: /*() => {
                        addIngredient("No Cheese");
                        return*/ "Topping Question"
                    //}
                }
            ]
        },
        {
            id: "Topping Option Expanded",
            options: [
                {
                    value: true,
                    label: "Pepperoni",
                    trigger: () => {
                        props.eventHandler("tomato");
                        addIngredient("Pepperoni");
                        return "Additional Topping Question"
                    }
                },
                {
                    value: "Ham",
                    label: "Ham",
                    trigger: () => {
                        props.eventHandler("ham");
                        addIngredient("Ham");
                        return "Additional Topping Question"
                    }
                },
                {
                    value: "Pineapple",
                    label: "Pineapple",
                    trigger: () => {
                        props.eventHandler("pineapple");
                        addIngredient("Pineapple");
                        return "Additional Topping Question"
                    }
                },
                {
                    value: "Bacon",
                    label: "Bacon",
                    trigger: () => {
                        props.eventHandler("bacon");
                        addIngredient("Bacon");
                        return "Additional Topping Question"
                    }
                },
                {
                    value: "Other",
                    label: "Other",
                    trigger: "Topping Option Expanded Two"
                }
            ]
        },
        {
            id: "Topping Option Expanded Two",
            options: [
                {
                    value: "Tomato",
                    label: "Tomato",
                    trigger: () => {
                        props.eventHandler("corn");
                        addIngredient("Tomato");
                        return "Additional Topping Question"
                    }
                },
                {
                    value: "Mushroom",
                    label: "Mushroom",
                    trigger: () => {
                        props.eventHandler("mushroom");
                        addIngredient("Mushroom");
                        return "Additional Topping Question"
                    }
                },
                {
                    value: "Bell Peppers",
                    label: "Bell Peppers",
                    trigger: () => {
                        props.eventHandler("bellPeppers");
                        addIngredient("Bell Peppers");
                        return "Additional Topping Question"
                    }
                },
                {
                    value: "Sausage",
                    label: "Sausage",
                    trigger: () => {
                        props.eventHandler("sausage");
                        addIngredient("Sausage");
                        return "Additional Topping Question"
                    }
                },
                {
                    value: "Other",
                    label: "Other",
                    trigger: "Topping Option Expanded Three"
                }
            ]
        },
        {
            id: "Topping Option Expanded Three",
            options: [
                {
                    value: "Ground Beef",
                    label: "Ground Beef",
                    trigger: () => {
                        props.eventHandler("groundBeef");
                        addIngredient("Ground Beef");
                        return "Additional Topping Question"
                    }
                },
                {
                    value: "Chicken",
                    label: "Chicken",
                    trigger: () => {
                        props.eventHandler("chicken");
                        addIngredient("Chicken");
                        return "Additional Topping Question"
                    }
                },
                {
                    value: "Spinach",
                    label: "Spinach",
                    trigger: () => {
                        props.eventHandler("spinach");
                        addIngredient("Spinach");
                        return "Additional Topping Question"
                    }
                },
                {
                    value: "Banana Peppers",
                    label: "Banana Peppers",
                    trigger: () => {
                        props.eventHandler("bananaPeppers");
                        addIngredient("Banana Peppers");
                        return "Additional Topping Question"
                    }
                },
                {
                    value: "Other",
                    label: "Other",
                    trigger: "Topping Option Expanded Four"
                }
            ]
        },
        {
            id: "Topping Option Expanded Four",
            options: [
                {
                    value: "Onion",
                    label: "Onion",
                    trigger: () => {
                        props.eventHandler("onion");
                        addIngredient("Onion");
                        return "Additional Topping Question"
                    }
                },
                {
                    value: "Sardine",
                    label: "Sardine",
                    trigger: () => {
                        props.eventHandler("sardine");
                        addIngredient("Sardine");
                        return "Additional Topping Question"
                    }
                },
                {
                    value: "Done",
                    label: "Done",
                    trigger: "Complete Custom"
                }
            ]
        },
        {
            id: "Topping Question",
            message: "Would you like to add toppings to your pizza?",
            trigger: "Topping Option"
        },
        {
            id: "Topping Option",
            options: [
                {
                    value: true,
                    label: "Yes, please.",
                    trigger: "Topping Option Expanded"
                },
                {
                    value: "false",
                    label: "No, thanks.",
                    trigger: "Complete Custom"
                }
            ]
        },
        {
            id: "Additional Topping Question",
            message: "Would you like to add more toppings to your pizza?",
            trigger: "Topping Option"
        },
        {
            id: "Trying again",
            options: [
                {
                    value: true,
                    label: "Yes, please.",
                    trigger: "Ordering options"
                },
                {
                    value: "false",
                    label: "No, thanks.",
                    trigger: "Done"
                }
            ]
        },
        {
            id: "Complete Custom",
            message: "So that's a custom pizza with {customPizza}, right?",
            trigger: "Done"
        },
        {
            id: "Done",
            message: "Have a great day",
            end: true
        }
    ];

    return <ChatBot steps={steps} {...config}></ChatBot>;
};

export default CustomChatbot;