import React from 'react'
import Slider from './slider/Slider'
import Facility from './static/facility/Facility'
import Shortintro from './static/ShortIntro/Shortintro'
import Whychoose from './static/whyschoose/Whychoose'
import Contactmessage from './static/Contact/Contactmessage'
import Review from './Review/Review'

function Home() {
  return (
    <> 
    <Slider/>
    <Facility/>
    <Shortintro/>
    <Whychoose/>
    <Review/>
    <Contactmessage/>
    </>
  )
}

export default Home