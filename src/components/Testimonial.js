import React from 'react'
import Customer from '../assets/customer.jpg'

export const Testimonial = () => {
  return (
    <div className='testimonial'>
        <h2>Rating</h2>
        <div className='customer'>
            <img src={Customer} alt='Testimonial'/>
            <h3>Jayasoorya</h3>
        </div>
        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
    </div>
  )
}
