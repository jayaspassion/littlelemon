import React from 'react'
import CallToAction from './CallToAction'
import Specials from './Specials'
import CustomersSay from './CustomersSay'
import Chicago from './Chicago'

const Homepage = () => {
  return (
    <section className='homepage'>
        <CallToAction />
        <Specials />
        <CustomersSay />
        <Chicago />
    </section>
  )
}

export default Homepage