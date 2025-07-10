import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const currentClients = [
    "Tech Innovation Corp",
    "Global Retail Solutions",
    "Premium Brands Inc",
    "Digital Marketing Pro",
    "Enterprise Solutions Ltd"
  ]

  const services = [
    {
      title: "Promotions",
      description: "Strategic promotional campaigns that drive sales and engagement",
      icon: "🎯"
    },
    {
      title: "Merchandising", 
      description: "Creative merchandising solutions that enhance brand visibility",
      icon: "🏪"
    },
    {
      title: "Events",
      description: "Memorable events that create lasting impressions",
      icon: "🎉"
    },
    {
      title: "Logistics",
      description: "Efficient logistics and supply chain management services",
      icon: "🚚"
    }
    
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title fade-in">
              Elevate Your Business with <span className="highlight">Glam</span>
            </h1>
            <p className="hero-subtitle slide-up">
              Professional solutions in promotions, merchandising, and logistics 
              that transform your business potential into measurable success.
            </p>
            <div className="hero-actions slide-up">
              <Link to="/contact" className="btn btn-primary">
                Get Started Today
              </Link>
              <Link to="/promotions" className="btn btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={`/${service.title.toLowerCase()}`} className="service-link">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About Glam</h2>
              <p>
                At Glam, we specialize in delivering comprehensive business solutions that 
                combine style with substance. Our expertise spans across promotional campaigns, 
                innovative merchandising, and efficient logistics management.
              </p>
              <p>
                With years of experience and a team of dedicated professionals, we help 
                businesses of all sizes achieve their goals through strategic planning, 
                creative execution, and measurable results.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="/api/placeholder/500/400" alt="About Glam" />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients">
        <div className="container">
          <h2 className="section-title">Trusted by Leading Companies</h2>
          <div className="clients-grid">
            {currentClients.map((client, index) => (
              <div key={index} className="client-card fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <h4>{client}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
