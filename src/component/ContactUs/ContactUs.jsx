import React from 'react'
import './ContactUs.css'
import contact from '../../assets/contact.png'

const ContuctUs = () => {
  return (
    <div className="contact">
      <div className="contact1">
        <div className="contact2">
          <div className="contact3">
            <div className="text"> Let's get in touch</div>
            <img src={contact} alt="" className="image" />
            <div className="socialLink">
              <span className="text4">Connect with us:</span>
              <ul className="socialMedia">
                <li>
                  <a href="#">
                    <i class="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="bx bxl-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="bx bx-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="submit">
            <form action="">
              <h4 className="text5">Contact Us</h4>

              <div className="inputBox">
                
                <input type="text" className="input2" required />
                <label htmlFor="">Name</label>
                
              </div>
              <div className="inputBox">
                
                <input type="email" className="input2" required />
                <label htmlFor="">Email</label>
                
              </div>
              <div className="inputBox">
                
                <input type="tel" className="input2" required/>
                <label htmlFor="">Phone No.</label>
                
              </div>
              <div className="inputBox">
                
                <textarea name="massage" className='input2' required cols="30" rows="10"></textarea>
                <label htmlFor="">Massage</label>
               
              </div>
              <input type="submit" className='btn3' value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContuctUs
