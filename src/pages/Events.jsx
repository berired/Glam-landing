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
            Your brand deserves to shine in the spotlight -- and we make it happen. Our events team specializes
            in <b>conceptualization, set design, </b> and <b>styling</b> to create immersive experiences that connect with your audience.
            We also deploy top-tier brand ambassadors and event personnel who represent your brand with confidence and professionalism.
            From conventions and fun runs to major brand activations, we turn ideas to unforgettable moments.
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
