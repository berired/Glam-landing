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
            We create experiences that move consumers from awareness to action. Our promotional
            straregies go beyond the ordinary by combining <b>push selling, sampling, flyering, </b> and <b>brand activations</b>
            to put your products directly in the hands of your market. Whether through on-ground engagements, excting promos, or unique brand touchpoints,
            we ensure your audience sees, feels, and remembers your brand.
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
