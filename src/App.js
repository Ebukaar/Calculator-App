import logo from './logo.svg';
import './App.css';
import React from 'react';

import {useState} from 'react'



let App = () =>{

  const [numberone, SetNumberone] = useState(1);
 
  const [numbertwo, SetNumbertwo] = useState(2);

  //Add
  let add = (numa,numb)=>{
console.log(numa+ numb); 
  } 

  //Minus
  let minus = (numa, numb) =>{
    console.log(numa - numb);
  }
 

  //Multiply
 function multiply ( numa, numb) {
   console.log(numa * numb);
  }

  //Divide
  function divide (numa, numb) {
    console.log(numa/numb);
  }

  let handleOnchangeone = (donald)=>{
    SetNumberone(parseInt(donald.target.value))
    

  }

  let handleOnchangetwo = (donald)=>{
    SetNumbertwo(parseInt(donald.target.value))
    

  }



// A calculator that can add, minus, divide and multiply
//For minus, make it bigger number minus smaller number
  
  return (

    <div>
    <input name="a" type="number" onChange={(dammy)=>handleOnchangeone(dammy)}>
    
  </input>
    <input name="b" type="number"  onChange={(e)=>handleOnchangetwo(e)}>
  
    </input>
    =
    <br/>
    <button onClick={()=>add(numberone,numbertwo)}>
      +
    </button>
    
    <button onClick={()=>minus(numberone,numbertwo)}>
      -
    </button>

    <button onClick={()=>multiply(numberone,numbertwo)}>
      x
    </button>
    <button onClick={()=> divide(numberone, numbertwo)}>
      ÷
    </button>
    </div>
  );

}



let GreetDonald = ()=>{
return (
  <h1>
    Hello Donald
  </h1>
)
}

// function App() {  

//   // let x = 5;

//   //    x = "boy";
  


      

//   // console.log(x);
//   // return (
//   //   <div className="App">
//   //     <header className="App-header">
//   //       <img src={logo} className="App-logo" alt="logo" />
//   //       <p>
//   //         Edit <code>src/App.js</code> and save to reload.
//   //       </p>
//   //       <a
//   //         className="App-link"
//   //         href="https://reactjs.org"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         Learn React
//   //       </a>
//   //     </header>
//   //   </div>
//   // );
// }

export default App;
