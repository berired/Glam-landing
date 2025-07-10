import { useState } from 'react'
import Card from '../components/Card'
import { cardData } from '../data/cardData'
import './PageStyles.css'

const Merchandising = () => {
  const [cards] = useState(cardData.merchandising)

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title fade-in">Merchandising</h1>
          <p className="page-subtitle slide-up">
            Transform your retail presence with innovative merchandising solutions. 
            From eye-catching displays to strategic product placement, we help 
            you maximize your sales potential.
          </p>
        </div>

        <div className="cards-grid">
          {cards.map((card, index) => (
            <Card 
              key={index} 
              card={card} 
              category="merchandising"
              style={{animationDelay: `${index * 0.2}s`}}
            />
          ))}
        </div>

        <div className="page-cta">
          <h2>Ready to Transform Your Retail Space?</h2>
          <p>Let's create merchandising solutions that enhance your brand visibility and drive sales.</p>
          <a href="/contact" className="btn btn-primary">
            Get Started
          </a>
        </div>
      </div>
    </div>
  )
}

export default Merchandising
