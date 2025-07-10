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
            Streamline your operations with our comprehensive logistics solutions. 
            From supply chain management to distribution networks, we optimize 
            your logistics for maximum efficiency and cost-effectiveness.
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
