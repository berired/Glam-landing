import { Link } from 'react-router-dom'
import './Services.css'

const Services = () => {
  const services = [
    {
      title: "Manpower Deployment",
      description: "On Ground Brand Activity Deployment including Merchandiser, Sampler, Push Girls, Promoter, Brand Ambassador, and Sales Associate.",
      icon: "👥",
      details: [
        "Merchandiser",
        "Sampler",
        "Push Girls",
        "Promoter",
        "Brand Ambassador",
        "Sales Associate"
      ]
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
      title: "Logistics & Warehousing",
      description: "Comprehensive logistics solutions including warehousing to support your brand operations nationwide.",
      icon: "🚚"
    }
  ]

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Our Services</h1>
            <p className="hero-subtitle">
              Comprehensive solutions to elevate your brand and drive business growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card detailed fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                </div>
                <div className="service-content">
                  <p className="service-description">{service.description}</p>
                  {service.details && (
                    <div className="service-details">
                      <ul>
                        {service.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss how our services can help elevate your brand</p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services