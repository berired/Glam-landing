import './ContactUs.css'
import locationImage from '../assets/contact us asset/location.png'

const ContactUs = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1 className="page-title fade-in">Contact Us</h1>
          <p className="page-subtitle slide-up">
            Ready to transform your business? Get in touch with our team 
            and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-left">
              <div className="info-section">
                <h3>📞 Phone</h3>
                <p>09178468381</p>
              </div>

              <div className="info-section">
                <h3>📧 Email</h3>
                <p>mail@adtalk.com.ph</p>
                <p>loveliecaoile@adtalk.com.ph</p>
              </div>

              <div className="info-section">
                <h3>🌐 Social Media</h3>
                <div className="social-links">
                  <a href="#" className="social-link">Facebook</a>
                </div>
              </div>
            </div>

            <div className="contact-right">
              <div className="info-section">
                <h3>📍 Location</h3>
                <p>283 Sumulong Highway<br />
                   Antipolo City<br />
                   beside Kowloon House
                </p>
                <div className="location-image">
                  <img src={locationImage} alt="Our Location" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
