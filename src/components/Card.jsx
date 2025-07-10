import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({ card, category }) => {
  const cardName = card.name.toLowerCase().replace(/\s+/g, '-')
  
  return (
    <div className="card fade-in">
      <div className="card-image">
        <img src={card.image1 || '/api/placeholder/300/200'} alt={card.name} />
        <div className="card-overlay">
          <Link 
            to={`/${category}/${cardName}`} 
            className="view-btn"
          >
            View Details
          </Link>
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{card.name}</h3>
        <p className="card-description">
          {card.description ? card.description.substring(0, 100) + '...' : 'Discover more about our services'}
        </p>
      </div>
    </div>
  )
}

export default Card
