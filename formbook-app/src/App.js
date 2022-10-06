// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";
// import React, { useState } from 'react';

function App() {

  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');

  const handleSubmit = (e) =>{
    // console.log('Hello World')
    e.preventDefault();
    if (fullname && email && mobileNo){
      console.log(fullname, email, mobileNo)
    }
    else{
      console.log('Check Values')
    }
  }

  return(
    <>
    <main>
    <article>
      <h1>Book #revs Conference Now</h1>
      <form className="formOne" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="fullname">Your Name</label>
          <input type="text"
          name="" value={fullname}
          placeholder="Full Name" 
          onChange={(e) => setFullName(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email ID</label>
          <input type="text"
          name="" value={email}
          placeholder="Email Id"
          onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="mobileNo">Mobile Number</label>
          <input type="text"
          name="" value={mobileNo}
          placeholder="Mobile No" 
          onChange={(e) => setMobileNo(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="experience">Select Your Package</label>
          <select name="EventTypes" id="EventTypes">
            <option value="VirtualEvents">Virtual Events</option>
            <option value="OnSiteEvents">Onsite Events</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
      <div className="buttonSection">
      <button>Submit</button>
      <div className="complaint">
        <p className="call">or Just Call</p>
        <p className="phone">234-57-87-947</p>
      </div>
      </div>
      </form>
    </article>
    </main>
    </>
  )
}


export default App;
