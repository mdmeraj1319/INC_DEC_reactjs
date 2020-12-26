import React, { useState } from 'react';
import './index.css';
const ToDoList = () => {
  const [val , updateVal] = useState(0);

  const Increm = () =>{
     updateVal(val+1);
  };

  const Decrem = () =>{
    if(val >=1){ updateVal(val-1); }
    else{
      alert("Sorry ,Zero limit reached");
    }
  };

  return(
     <>
      <div className="main_div">
         <div className="centre_div">
           <h1> {val} </h1>
           <div className="btn-div">
              <button onClick = {Increm} >Increm</button>
              <button onClick= {Decrem} >Decrem</button>
           </div>
         </div>

      </div>

     </>
  );
}

export default ToDoList;