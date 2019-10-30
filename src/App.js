import React from 'react';
import './App.css';

let shoppingCartItems = [
  {
    item: 'Buzz Lightyear SpaceSuit ',
    image: 'https://bit.ly/2BUwyF7',
    description: 'If you want to fly to Infinity and Beyond, you definitely need this spacesuit. ',
    price: '$99.99',
  },
  {
    item: 'Ice Cream Sandwich ',
    image: 'https://bit.ly/2pqLp7o',
    description: ' The lastest product from Haaaagen Dazs! Twelve flavor to choose! Exclusive on Mars!!! ',
    price: '$2.99',
  },{
    item: 'Foodini 3D Printer for Food ',
    image: 'https://bit.ly/2Jzl9yO',
    description: 'Wanna make food yourself on Mars? With Foodini you can make food from chocolate to STEAK.',
    price: '$199.99',
  },{
    item: 'Anpanman SUV For Kids',
    image: 'https://bit.ly/2qW8YWj',
    description: 'This SUV car is designed exclusively align babies that does not float in the air. ',
    price: '$99.99',
  },{
    item: 'Monocle for Single-Eyed Alien ',
    image: 'https://bit.ly/2BOG0tF',
    description: 'Short-sighted but have no way to find a pair of glass for you? This is your best chioce.',
    price: '$59.99',
  },{
    item: 'Lays Potato Chips (Classic Flavor)',
    image: 'https://bit.ly/2NkAg08',
    description: 'Worry about little chip floating around?  This exclusive design for Mars solves the problem.',
    price: '$0.99',
  },{
    item: 'Beed Bald Head Polish',
    image: 'https://bit.ly/2BUBji0',
    description: 'Bald head polish made from Manuka honey. 100% Organic. Bring you a day of brightness.',
    price: '$19.99',
  },
]



function App() {
  return (
    <div className="App">
      <img id="icon" src="https://bit.ly/36fM9wR"/>
      <h1>Your Shopping Cart</h1>
     <SearchForm />
     {shoppingCartItems.map(ShoppingCart)}
     {/* this line map the value of objects to the next function */}
    </div>
  );
}
//the component inside ShoppingCart which is Product
function ShoppingCart(data) {
  return(
    <div className="cart">
      <Product item={data.item} image={data.image} description={data.description} price={data.price} />
    </div>
  );
}
//the format for each item in the list
function Product(props) {
  return(
    <div className="product">
      <img id="img" src={props.image} width="100"/>
      <div className="description">
      <h3>{props.item}</h3>
      <p>{props.description}</p>
      
      <p id="price">{props.price}</p></div>
    </div>
  )
}

function SearchForm() {
  return(
    <form>
      <label>
        Search:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
