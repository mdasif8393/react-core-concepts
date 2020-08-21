import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Razzak', 'Jasim', 'Alomgir', 'Salman', 'Bappi', 'Shuvo'];
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Premier EL', price: '$249.99'},
  ];
  return (
    <div className="App">
      <header className="App-header">
        <p> I am a React person </p>
        <Users></Users>
        <Counter></Counter>
        <ul>
         {nayoks.map(nayok => <li>{nayok}</li>)}
         {products.map(product => <li> {product.name} </li>)}
        </ul>
        {
          products.map(p => <Product productInfo = {p}> </Product>)
        }
        {/* <Product product = {products[0]}></Product>
        <Product product = {products[1]}> </Product> */}
        <Person name = 'Munna' job = "Football"></Person>
        <Person name = 'Masum' job = 'Dorshok'></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Users (){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h2>Dymanic Users</h2>
      <ul>
        {users.map(user => <li> {user.name} </li>)}
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick = {() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border : '1px solid gray',
    borderRadius : '5px',
    backgroundColor : 'lightgray',
    height : '200px',
    width : '200px',
    float : 'left',
  }
  const {name, price} =props.productInfo;
  return (
    <div style = {productStyle}>
      <h3>{name} </h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person (props) {
  console.log(props);
  return (
    <div style = {{border: '2px solid gold', width: '400px', margin: '5px'}}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}

export default App;
