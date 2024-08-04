import React from 'react'
import './Post.css'

const Post = () => {
  return (
    <>
    <div className='publicPost'>
    <h1 className='publicText'>Public Posts</h1>
    <div className="post">
      <h5><u>Devid Warner</u></h5>
      <h6>USA , California</h6>
      <p className='postContent'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Mollitia sapiente commodi aperiam voluptatibus magnam tenetur blanditiis
        expedita! Doloremque, magnam cumque!</p>
    </div>
    <div className="post">
      <h5><u>Rahul Dey</u></h5>
      <h6>India , Mumbi</h6>
      <p className='postContent'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Mollitia sapiente commodi aperiam voluptatibus magnam tenetur blanditiis
        expedita! Doloremque, magnam cumque!Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Dolores itaque non ea quam maxime fugit,
         doloremque voluptates nihil hic a?</p>
    </div>
    <div className="post">
      <h5><u>Tony Stark</u></h5>
      <h6>USA , California</h6>
      <p className='postContent'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Mollitia sapiente commodi aperiam voluptatibus magnam tenetur blanditiis
        expedita! Doloremque, magnam cumque!</p>
    </div>
    <div className="post">
      <h5><u>Sharlock Holms</u></h5>
      <h6>USA , California</h6>
      <p className='postContent'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Mollitia sapiente commodi aperiam voluptatibus magnam tenetur blanditiis
        expedita! Doloremque, magnam cumque!</p>
    </div>
    </div>
    <div className="yourPost">
      <input type="text" className='YourInput' name="Input" placeholder='Write your post here...' />
      <input type="submit" className='btn4' value="Submit" />
      <div className="post2">
      <h5><u>Ashok Mudduluru</u></h5>
      <h6>India , Banglore</h6>
      <p className='postContent'>Lorem ipsum dolor, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
         hic laboriosam? Quaerat quibusdam quod velit eaque autem possimus! Cupiditate, placeat. sit amet consectetur adipisicing elit.
        Mollitia sapiente commodi aperiam voluptatibus magnam tenetur blanditiis
        expedita! Doloremque, magnam cumque!</p>
        
      </div>
      <div className="post2">
      <h5><u>Sharlock Holms</u></h5>
      <h6>USA , California</h6>
      <p className='postContent'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Mollitia sapiente commodi aperiam voluptatibus magnam tenetur blanditiis
        expedita! Doloremque, magnam cumque!</p>
        
      </div>
      <div className="post2">
      <h5><u>Kameshwar Kumar</u></h5>
      <h6>India , Bihar</h6>
      <p className='postContent'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Mollitia sapiente commodi aperiam voluptatibus magnam tenetur blanditiis
        expedita! Doloremque, magnam cumque!</p>
        
      </div>
    </div>
    </>
  )
}

export default Post
