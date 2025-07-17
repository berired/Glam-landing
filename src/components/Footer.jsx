import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-brand">Glam</h3>
            <p>Professional business solutions with style and efficiency.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/promotions">Promotions</a></li>
              <li><a href="/merchandising">Merchandising</a></li>
              <li><a href = "/events"></a>Events</li>
              <li><a href="/logistics">Logistics</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: mail@adtalk.com.ph</p>
            <p>Phone: (555) 123-4567</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘 Facebook </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Glam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
