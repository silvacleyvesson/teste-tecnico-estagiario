import React, { useState, useEffect } from 'react';

export default function Questao2() {
 const [count, setCount] = useState(0);

 useEffect(() => {
    setCount(10);
 }, []);

 const incrementCounter = () => {
    setCount(count + 1);
 };

 const decrementCounter = () => {
    setCount(count - 1);
 };

 return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCounter}>Incremento+</button>
      <button onClick={decrementCounter}>Decremento-</button>
    </div>
 );
}
