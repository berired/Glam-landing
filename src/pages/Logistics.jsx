import { useState } from 'react'
import Card from '../components/Card'
import { cardData } from '../data/cardData'
import './PageStyles.css'

const Logistics = () => {
  const [cards] = useState(cardData.logistics)

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title fade-in">Logistics</h1>
          <p className="page-subtitle slide-up">
            Seamless logistics means your campaign runs without a hitch. We provide <b>end-to-end logistics management, </b>ensuring safe and efficient movement of your brand assets
            <b> from client warehouses to subwarehouses, anywhere in the Philippines.</b> With our reliable delivery network, your promotional materials and merchandising tools get to the right place, at the right time, every time.
          </p>
        </div>

        <div className="cards-grid">
          {cards.map((card, index) => (
            <Card 
              key={index} 
              card={card} 
              category="logistics"
              style={{animationDelay: `${index * 0.2}s`}}
            />
          ))}
        </div>

        <div className="page-cta">
          <h2>Ready to Optimize Your Operations?</h2>
          <p>Let's streamline your logistics and supply chain for better efficiency and reduced costs.</p>
          <a href="/contact" className="btn btn-primary">
            Optimize Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default Logistics
