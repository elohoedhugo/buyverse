import React from 'react'
import "../footer/footer.css"


const Footer = () => {
  return (
    <footer>
      <section>
       <p className='footer-title'>Get to know us</p>
       <div className='footer-content'>
          <p>....About Us</p>
          <p>....Careers</p>
          <p>....Blogs</p>
          <p>....Press Releases</p>
          <p>....Investor Relations</p>
       </div>
      </section>
      <section>
        <p className='footer-title'>Let us help you</p>
        <div className='footer-content'>
          <p>....Your Account</p>
          <p>....Returns Centre</p>
          <p>....Help</p>
          <p>....Shipping Rates</p>
          <p>....Accessibility</p>
       
        </div>
      </section>
      <section>
        <p className='footer-title'>Payment & Security</p>
        <div className='footer-content'>
          <p>....Amazon Wallet</p>
          <p>....Credit/Debit Cards</p>
          <p>....Gift Cards</p>
          <p>....EMI Payment Options</p>
          <p>....Security</p>
          
        </div>
      </section>
      <section>
        <p className='footer-title'>Connect with us</p>
        <div className='footer-content'>
          <p>....Facebook</p>
          <p>....Twitter</p>
          <p>....Instagram</p>
          <p>....Youtube</p>
          <p>....LinkedIn</p>
          
        </div>
      </section>
      </footer>
  )
}

export default Footer