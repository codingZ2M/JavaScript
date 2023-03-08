// Define an object for the restaurant
const restaurant = {
  name: 'The Delicious Cafe',
  menu: [
    {
      name: 'Pancakes',
      price: 8.99,
      category: 'Breakfast'
    },
    {
      name: 'Burger',
      price: 12.99,
      category: 'Lunch'
    },
    {
      name: 'Salmon',
      price: 19.99,
      category: 'Dinner'
    }
  ]
};

// Define an order function
/* Using Object Destructuring & Rest Pattern
 order function uses the rest pattern to extract the menu property from the restaurant object 
 and assign the rest of the properties to the restaurantProps variable. The rest pattern allows
  us to more easily extract properties from objects without having to manually destructure each 
  property.
 */
const order = ({ menu, ...restaurantProps }, itemName) => {
  const item = menu.find(({ name }) => name === itemName);
  if (!item) {
    return `Sorry, we don't have ${itemName} on the menu.`;
  }
  // Object Destructuring
  const { name, price } = item;

  // Extracting the property from 'restaurantProps' variable
  return `Your order of ${name} has been placed for ${price}.<br><br>Restaurant Details:<br>${restaurantProps.name}`;
}

// Get the HTML element for displaying the results
const resultElement = document.getElementById('result');

// Example usage:
const orderedItem = 'Salmon';

// Using Spread Operator
// Passing shallow copy of the restaurant object that is passed to the order function. 
// The spread operator makes it easier to create copies of objects without mutating the original object.
const orderResult = order({ ...restaurant }, orderedItem);

// Display the order result in HTML
resultElement.innerHTML = `<p>${orderResult}</p>`;
