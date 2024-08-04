import React, { useState } from 'react'
import './Donate.css'


const Donate = () => {

  const [inputarr, SetInputarr] = useState([])

  const [inputdata, SetInputdata] = useState({name: "", address:"",people:"" ,phoneNumber: ""})

  function changehandle(e) {
    SetInputdata({...inputdata, [e.target.name]: e.target.value })
  }
  let {name,address,people, phoneNumber}=inputdata;

  function changeHandle(){
    SetInputarr([...inputarr,{name,address,people,phoneNumber}])
    console.log(inputarr)
    console.log(inputdata)
    SetInputdata({name:"",address:"",people:"",phoneNumber:""})

  }
  return (
    <>
    <div className="donate">
     <div className='Form'>
      <input type="text" className='input' autoComplete='off'  name='name' value={inputdata.name} onChange={changehandle} placeholder='Enter Your Name' required/> 
      <input type="text" className='input' name='address' value={inputdata.address} onChange={changehandle} placeholder='Enter Your Address.'required /> 
      <input type="number" className='input' name='people' value={inputdata.people} onChange={changehandle} placeholder='Food For How Many People'required /> 
      <input type="tel" className='input' name='phoneNumber' value={inputdata.phoneNumber} onChange={changehandle} placeholder='Enter Your Phone No.'required />
      <button onClick={changeHandle} className='btn2'>Submit</button>
     </div>
      
      <>
        {inputarr.map((item,index)=>{
          return(
            <div className="list" key={index}>
              <h4>NAME :   {item.name}</h4>
              <h4>ADDRESS :  {item.address}</h4>
              <h4>FOOD FOR :  {item.people} People</h4>
              <h4>PHONE NO :  {item.phoneNumber}</h4>
            </div>
          )
        }
        )}
      
      </>

      <div className="list" >
              <h4>NAME : Manoj Kumar  </h4>
              <h4>ADDRESS : Karnataka, Bangalore, Pin-000000 </h4>
              <h4>FOOD FOR : 10 People</h4>
              <h4>PHONE NO : 9999999999 </h4>
      </div>
      <div className="list" >
              <h4>NAME : Manoj Kumar  </h4>
              <h4>ADDRESS : Karnataka, Bangalore, Pin-000000 </h4>
              <h4>FOOD FOR : 10 People</h4>
              <h4>PHONE NO : 9999999999 </h4>
      </div>
  </div>
    
    </>
    
  )
}

export default Donate

