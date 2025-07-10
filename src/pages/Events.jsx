import { useState } from 'react'
import Card from '../components/Card'
import { cardData } from '../data/cardData'
import './PageStyles.css'

const Events = () => {
  const [cards] = useState(cardData.events)

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title fade-in">Events</h1>
          <p className="page-subtitle slide-up">
            Create memorable experiences that leave lasting impressions. From corporate 
            events to product launches, we manage every detail to ensure your events 
            achieve their objectives and exceed expectations.
          </p>
        </div>

        <div className="cards-grid">
          {cards.map((card, index) => (
            <Card 
              key={index} 
              card={card} 
              category="events"
              style={{animationDelay: `${index * 0.2}s`}}
            />
          ))}
        </div>

        <div className="page-cta">
          <h2>Ready to Create an Unforgettable Event?</h2>
          <p>Let's bring your vision to life with a perfectly executed event experience.</p>
          <a href="/contact" className="btn btn-primary">
            Plan Your Event
          </a>
        </div>
      </div>
    </div>
  )
}

export default Events
