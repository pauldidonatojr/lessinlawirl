import React from 'react'
import { FaStar } from 'react-icons/fa'
import { reviews } from '../utils/data.js'
const ReviewsComponent = () => {
    return (
        <div>
            {reviews.map((review, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <h3>{review.name}</h3>
                    <div  className='stars'>
                        {[...Array(5)].map((_, starIndex) => (
                            <FaStar key={starIndex} size={20} />
                        ))}
                    </div>
                    <p style={{ marginTop: '10px', overflow: 'auto' }}>
                        {review.text}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default ReviewsComponent
