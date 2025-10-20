import { Link } from 'react-router-dom'
import './Home.css'
import glamLogo from '../assets/glamlogo.png'
import thiocellLogo from '../assets/brands assets/thiocelllogo.png'
import jia2CorpLogo from '../assets/brands assets/jia2corplogo.png'
import sjConsoIncLogo from '../assets/brands assets/sjconsoinclogo.jpg'
import organicaNutritionLogo from '../assets/brands assets/organicanutritionlogo.png'
import evyapLogo from '../assets/brands assets/evyaplogo.png'

const Home = () => {
  
  const services = [
    {
      title: "Manpower Deployment",
      description: "On Ground Brand Activity Deployment including Merchandiser, Sampler, Push Girls, Promoter, Brand Ambassador, and Sales Associate.",
      icon: "👥"
    },
    {
      title: "Brand Activation", 
      description: "Creating engaging brand experiences that connect with your target audience and drive meaningful interactions.",
      icon: "⚡"
    },
    {
      title: "Product Launching",
      description: "Strategic product launch campaigns that generate buzz and maximize market impact for your new products.",
      icon: "🚀"
    },
    {
      title: "Dropbox Management",
      description: "Efficient management and distribution of promotional materials and brand assets to ensure seamless operations.",
      icon: "📦"
    },
    {
      title: "Merchandising Installation",
      description: "Professional merchandising installation services for general trade and key accounts to maximize product visibility.",
      icon: "🏪"
    },
    {
      title: "Logistics",
      description: "Comprehensive logistics solutions including warehousing to support your brand operations nationwide.",
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
                <b>We move things upward.</b>
              </p>
              <p>
                We elevate your brand's presence through cutting-edge advertising strategies that drive growth and visibility.
                Our approach ensures that every campaign propels your message to new heights, reaching and resonating with your target
                audience in impactful ways.
              </p>
            </div>
            <div className="about-image">
              <img src={glamLogo} alt="About Glam" />
            </div>
          </div>
          
          {/* Mission & Vision within About Section */}
          <div className="mission-vision-content">
            <div className="mission-section card">
              <h2 className="mission-vision-title">Our Mission</h2>
              <p>
                To elevate brands and ideas with innovative advertising solutions that push boundaries and drive results.
              </p>
            </div>
            <div className="vision-section card">
              <h2 className="mission-vision-title">Our Vision</h2>
              <p>
                To set the standard for excellence in creativity and strategy, fostering a culture of continous growth and forward-thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nationwide Operations Section */}
      <section className="nationwide-operations">
        <div className="container">
          <div className="operations-content">
            <div className="operations-text">
              <h2 className="operations-title">Nationwide Promo Operations</h2>
            </div>
            <div className="operations-services">
              <div className="service-category">
                <h3 className="category-title">Sampling and Push Selling Activation</h3>
                <ul className="service-list">
                  <li>General Trade and Key Account Activation</li>
                  <li>Out-of-store activations i.e schools, offices, bar tours, etc</li>
                </ul>
              </div>
              
              <div className="service-category">
                <h3 className="category-title">Merchandising Activity</h3>
                <ul className="service-list">
                  <li>General Trade and Key Account Merchandising</li>
                  <li>Product evaluation</li>
                  <li>TPOSM Installation (Temporary Point-Of-Sales Merchandising) and Management</li>
                  <li>Dropbox Placement and Management</li>
                </ul>
              </div>
              
              <div className="service-category">
                <h3 className="category-title">Logistics</h3>
                <ul className="service-list">
                  <li>Vehicle hire</li>
                </ul>
              </div>
              
              <div className="service-category">
                <h3 className="category-title">Fabrication</h3>
                <ul className="service-list">
                  <li>Lemonade Booth | Convention Small and Large Size | Festival Booth with Design*</li>
                  <li>Temporary Point-Of-Sale Materials (TPOSM)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workscope Section */}
      <section className="workscope">
        <div className="container">
          <div className="workscope-content">
            <div className="workscope-item">
              <div className="workscope-icon">
                <div className="icon-circle">
                  <span>🎯</span>
                </div>
              </div>
              <div className="workscope-text">
                <h3>Training</h3>
                <p>
                  We make our training as comprehensive as possible. It is our duty as people managers to ensure 
                  proper product knowledge, project mechanics and compliance with certain rules and regulations related 
                  to the products and project we are handling.
                </p>
              </div>
            </div>

            <div className="workscope-item">
              <div className="workscope-icon">
                <div className="icon-circle">
                  <span>⚙️</span>
                </div>
              </div>
              <div className="workscope-text">
                <h3>Managing</h3>
                <p>
                  Seamless deployments, this is our main goal. Our team of dedicated managers and account executive 
                  make sure that each are we operate has zero error.
                </p>
              </div>
            </div>

            <div className="workscope-item">
              <div className="workscope-icon">
                <div className="icon-circle">
                  <span>🔍</span>
                </div>
              </div>
              <div className="workscope-text">
                <h3>Sourcing</h3>
                <p>
                  We have a good number of contacts and agents that provide us a pool of quality candidates in line with 
                  the clients preference and requirements.
                </p>
                <p>
                  Each account executive monitor daily operations and provide effective and efficient solutions to any 
                  situation and challenges that arise in the project. Includes weekly submission of accurate sales report.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands We Worked With Section */}
      <section className="brands-section">
        <div className="container">
          <h2 className="section-title">Brands We've Worked With</h2>
          <p className="brands-subtitle">
            Trusted by industry leaders across various sectors
          </p>
          <div className="brands-grid">
            <div className="brand-item-large">
              <img src={thiocellLogo} alt="Thiocell" className="brand-logo" />
              <span className="brand-name">Thiocell</span>
            </div>
            <div className="brand-item-large">
              <img src={jia2CorpLogo} alt="JIA2 Corporation" className="brand-logo" />
              <span className="brand-name">JIA2 Corporation</span>
            </div>
            <div className="brand-item-large">
              <img src={sjConsoIncLogo} alt="SJ Conso Inc." className="brand-logo" />
              <span className="brand-name">SJ Conso Inc.</span>
            </div>
            <div className="brand-item-large">
              <img src={organicaNutritionLogo} alt="Organica Nutrition" className="brand-logo" />
              <span className="brand-name">Organica Nutrition</span>
            </div>
            <div className="brand-item-large">
              <img src={evyapLogo} alt="Evyap" className="brand-logo" />
              <span className="brand-name">Evyap</span>
            </div>
          </div>
          <div className="brands-cta">
            <p>Ready to join our portfolio of successful brands?</p>
            <Link to="/contact" className="btn btn-primary">
              Start Your Campaign
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
