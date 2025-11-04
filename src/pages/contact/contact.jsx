import'./contact.css'
function Contact() {
  return (
    <>
    <div className="contact">
      <h1>Get in Touch with <span>EShop</span></h1>
      <div className="contener">
        <div className="contact-left">
          <h2>Contact Info</h2>
          <p>Have a questions or need to support? We are here to help you with your product journry.</p>
          <div className="address">
            <p><h4 style = {{display:"inline-block"}}>Address :</h4> 123 jarma kohat kpk pakistan</p>
            <p><h4 style = {{display:"inline-block"}}>Email :</h4> support@EShop.com</p>
            <p><h4 style = {{display:"inline-block"}}>Phone :</h4> +12 123456789</p>
          </div>
        </div>
        <div className="contact-right">
          <label htmlFor="name-input">Your Name</label>
          <input type="text" placeholder="Enter Name" id="name-input" />
          <label htmlFor="email-input">Your Email</label>
          <input type="email" placeholder="Enter Email" id="email-input" />
          <label htmlFor="message-input">Your Message</label>
          <textarea type="text" placeholder="Enter Name" id="message-input" />
          <button>Send Message</button>
        </div>
      </div>
    </div>
    </>
  ) 
}

export default Contact