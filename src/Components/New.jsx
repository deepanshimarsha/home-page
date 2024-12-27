import React from 'react'

function New() {
  return (
    <div className='container1'>
      
      <div className='nav'>
        <div className='logo1'>
          <img src="./myImage/loggo.png" alt="Description of imag" />
        </div>
        <div className='list-items'>
          <ul >
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
            <li>Resources</li>
            <li>Company</li>
            <li>App Center</li>
          </ul>
        </div>
        <div className='nav-btn'>
          <p>EN </p>
          <button className='login-btn1'>Log IN</button>
          <button className='signup-btn'>Sign Up</button>
        </div>
      </div>

      <div className='main'>
        <div className='main-heading'>
          <h1>Get measurable results<br></br>
            from online marketing</h1>
           <p>Do SEO, content marketing, competitor research, <br></br> PPC and social media marketing from just one platform.</p>
          <div className='heading-btn'>
              <input type='text' placeholder='enter domain,keyword or url'></input>
              <button className='start-btn'>Start now</button>
          </div>
        </div>
        <div className='brands'>
            <div className='brand-heading'>
               <p>Trusted by the world’s leading brands</p>
          </div>
          <div className='brand-name'>
            <div >
              <img src='./myImage/amazon-logo.png' alt='amazon logo'></img>
              <img src='./myImage/vodafone-logo.png' alt='amazon logo'></img>
              <img src='./myImage/quora-logo.png' alt='amazon logo'></img>
              <img src='./myImage/p&g.png' alt='amazon logo'></img>
              <img src='./myImage/booking.com-logo.png' alt='amazon logo'></img>
           </div>
          </div>
       </div>
          <div className='ai-div'>
              <div className='ai'>
                <h1><span>Yes, A</span>I Can</h1>
                <p>Check out new AI functionality and<br></br>
                  tools in our latest release</p>
                <button>Learn more</button>
              </div>
            </div>

            <div className='frame2'>
              <h1>See what's inside</h1>
              <div className='frame6'>
                <img src='./myImage/frame 6.png' alt="Description of imag"></img>
              </div>
          </div>
        
      </div>
      
    </div>
  )
}

export default New
