import { useState } from 'react'
import Card from '../components/Card'
import { cardData } from '../data/cardData'
import './PageStyles.css'

const Promotions = () => {
  const [cards] = useState(cardData.promotions)

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title fade-in">Promotions</h1>
          <p className="page-subtitle slide-up">
            Drive sales and engagement with our strategic promotional campaigns. 
            From seasonal campaigns to product launches, we create compelling 
            promotions that deliver measurable results.
          </p>
        </div>

        <div className="cards-grid">
          {cards.map((card, index) => (
            <Card 
              key={index} 
              card={card} 
              category="promotions"
              style={{animationDelay: `${index * 0.2}s`}}
            />
          ))}
        </div>

        <div className="page-cta">
          <h2>Ready to Boost Your Sales?</h2>
          <p>Let's create a promotional campaign that drives real results for your business.</p>
          <a href="/contact" className="btn btn-primary">
            Start Your Campaign
          </a>
        </div>
      </div>
    </div>
  )
}

export default Promotions
