import React, { useEffect, useState } from 'react';
import './Registration.css'

function Registration() {
       const data = {name: "", email: "", password: ""}
       const [inputData, setInputData] = useState(data);
       const [flag, setFlag] = useState(false);

       useEffect(()=>{
              console.log("Registered!");
       },[flag])

       function handleData(e){
              setInputData({...inputData,[e.target.name]:e.target.value})
              console.log("inputData",inputData);
       }
       function handleSubmit(e) {
              e.preventDefault();
              if(!inputData.name || !inputData.email || !inputData.password){
                     alert("All fields are mandatory!");
              } else{
                     setFlag(true);
              }
       }
  return (
       <>
       <pre>{(flag)?<h2 className='registered'>Hi,{inputData.name}! You have registered successfully!</h2>: ""}</pre>
       <div className="container">
              <div className="header">
                     <h1>Quick registration form </h1>
              </div>
              <div className="div">
                     <form action="" onSubmit={handleSubmit}>
                            <input type="text" name='name' placeholder='Enter your name' value={inputData.name} onChange={handleData}/>
                            <input type="email" name="email" id="" placeholder='Enter your email' value={inputData.email} onChange={handleData}/>
                            <input type="password" name="password" id="" placeholder='Enter your password' value={inputData.password} onChange={handleData}/>
                            <button type="submit">Register</button>
                     </form>
              </div>
       </div>
       </>
  )
}

export default Registration