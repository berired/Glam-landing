import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { cardData } from '../data/cardData'
import './CardDetail.css'

const CardDetail = ({ category }) => {
  const { cardName } = useParams()
  const [card, setCard] = useState(null)

  useEffect(() => {
    const foundCard = cardData[category]?.find(
      item => item.name.toLowerCase().replace(/\s+/g, '-') === cardName
    )
    setCard(foundCard)
  }, [category, cardName])

  if (!card) {
    return (
      <div className="container">
        <div className="card-detail-error">
          <h2>Card not found</h2>
          <Link to={`/${category}`} className="btn btn-primary">
            Back to {category}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="card-detail fade-in">
      <div className="container">
        <div className="card-detail-header">
          <Link to={`/${category}`} className="back-btn">
            ← Back to {category}
          </Link>
          <h1 className="card-detail-title">{card.name}</h1>
        </div>

        <div className="card-detail-content">
          <div className="image-gallery">
            {card.image1 && (
              <div className="image-item">
                <img src={card.image1 || '/api/placeholder/400/300'} alt={`${card.name} - Image 1`} />
              </div>
            )}
            {card.image2 && (
              <div className="image-item">
                <img src={card.image2 || '/api/placeholder/400/300'} alt={`${card.name} - Image 2`} />
              </div>
            )}
            {card.image3 && (
              <div className="image-item">
                <img src={card.image3 || '/api/placeholder/400/300'} alt={`${card.name} - Image 3`} />
              </div>
            )}
          </div>

          <div className="card-detail-info">
            <h2>Description</h2>
            <p className="description">{card.description}</p>
            
            <div className="detail-actions">
              <Link to="/contact" className="btn btn-primary">
                Get In Touch
              </Link>
              <Link to={`/${category}`} className="btn btn-secondary">
                View More {category}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetail
