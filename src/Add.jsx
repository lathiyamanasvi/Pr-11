import axios from 'axios';
import React, { useState } from 'react'

function Add() {

  const [firstname,setfirstname] = useState('');
  const [lastname,setlastname] = useState('');
  const [email,setemail] = useState('');
  const [Password,setPassword] = useState('');
  const [message,setmessage] = useState('')

  const submit = async(e) => {
    e.preventDefault();
    let {data} = await axios.post('https://contact-page-realtim-default-rtdb.firebaseio.com/user.json',{
      Firstname : firstname,
      lastname : lastname,
      email  : email,
      Password : Password,
      message : message
    });
    setfirstname("");
    setlastname("");
    setemail("");
    setPassword("");
    setPassword("");
    setmessage("");
  }

  return (
      <div className="container">
        <div className="text">Contact us Form</div>
          <form action="#">
            <div className="form-row">
              <div className="input-data">
                <input type="text" required onChange={(e)=>setfirstname(e.target.value)} value={firstname}/>
                <div className="underline" />
                <label htmlFor>First Name</label>
              </div>
              <div className="input-data">
                <input type="text" required onChange={(e)=>setlastname(e.target.value)} value={lastname}/>
                <div className="underline" />
                <label htmlFor>Last Name</label>
              </div>
            </div>
              <div className="form-row">
                <div className="input-data">
                  <input type="text" required onChange={(e)=>setemail(e.target.value)} value={email}/>
                  <div className="underline" />
                  <label htmlFor>Email Address</label>
                </div>
                <div className="input-data">
                  <input type="text" required onChange={(e)=>setPassword(e.target.value)} value={Password}/>
                  <div className="underline" />
                  <label htmlFor>Password</label>
                </div>
            </div>
            <div className="form-row">
              <div className="input-data textarea">
                <textarea rows={8} cols={80} required defaultValue={""} onChange={(e)=>setmessage(e.target.value)} value={message}/>
                <br />
                <div className="underline" />
                <label htmlFor>Write your message</label>
                <br />
                <div className="form-row submit-btn">
                  <div className="input-data">
                    <div className="inner" />
                    <input type="button" defaultValue="submit" onClick={submit}/>
                  </div>
                </div>
              </div>
            </div>
          </form>
          </div>

  )
}

export default Add

