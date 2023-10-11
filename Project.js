import React from 'react';
import './Project.css';

function Projectk() {
  return (
    <><div className="App">
          <div className="sidebar">
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Courses</a></li>
                  <li><a href="#">Demo</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">About</a></li>
              </ul>
          </div>
          <div className='right'>
              <div className='box'>
                  <h2 style={{textAlign: "center"}}>Enroll Here</h2>
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" placeholder="Enter your first name" name="First name" />

              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" placeholder="Enter your last name" name="Last name" />

              <label htmlFor="email">Email:</label>
              <input type='text' id="email" placeholder='Enter your email' name='Email' />

              <label htmlFor="contactNumber">Contact Number:</label>
              <input type='text' id="contactNumber" placeholder='Enter your mobile number' name='Contact number' />

              <label htmlFor="course">Course:</label>
              <input type='text' id="course" placeholder='Enter your course' name='Course name' />

              <button onClick={() => { } }>Enroll</button>
          </div>
      </div><div className='content-container'>
              <div className='fun'>
                  <h1>Explore Knowledge, Ignite Innovation,<br />and Shape Tomorrow with VCubes Institution's Transformative Courses.</h1>
              </div>

          </div>
      </div>
      </>

  );
}

export default Projectk;