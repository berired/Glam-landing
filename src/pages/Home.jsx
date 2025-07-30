import { Link } from 'react-router-dom'
import './Home.css'
import glamLogo from '../assets/glamlogo.png'

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
      description: "We create experiences that move consumers from awareness to action.",
      icon: "🎯"
    },
    {
      title: "Merchandising", 
      description: "Visibility drives sales, and we make sure your brand stands out where it matters most.",
      icon: "🏪"
    },
    {
      title: "Events",
      description: "Your brand deserves to shine in the spotlight — and we make it happen.",
      icon: "🎉"
    },
    {
      title: "Logistics",
      description: "Seamless logistics means your campaign runs without a hitch.",
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
              We bring what you need into life.
              <br />
              The team behind the breakthrough. 
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

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About Glam</h2>
              <p>
                <b>We bring what you need into life.</b>
              </p>
              <p>
                We are the team behind the breakthrough brand experiences - crafting on-ground strategies
                that connect, engage, and drive results. From concept to execution, we specialize in <b>promotions, merchandising, events, </b>and <b>logistics</b> that make your brand stand out where it matters most.
                
              </p>
            </div>
            <div className="about-image">
              <img src={glamLogo} alt="About Glam" />
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

      

    </div>
  )
}

export default Home
