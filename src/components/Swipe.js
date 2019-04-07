import React from 'react'
import { Card, CardWrapper } from 'react-swipeable-cards';
import MapComponent from './MapComponent'
import '../App.css';

const Swipe = ({activities}) => {
  return (
      <CardWrapper>
        {activities.map((item, index) =>
          <Card
            key={index}
          >
            <div className="title-div">
              <h2 className="title">{item.title}</h2>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <img className="card-image" src={item.imageUrl} alt="location" />
            </div>
            <div style={{padding: '10px'}}>
              <p>Price: {item.fromPrice}</p>
              <p>Recommendation Score: {item.recommendationScore}</p>

              <p>Categories: {item.categories.join(', ')}</p>
            </div>
          </Card>
        )}
      </CardWrapper>
  )
}

export default Swipe
