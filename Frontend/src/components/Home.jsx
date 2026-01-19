import React from 'react'
import Slider from './slider/Slider'
import Facility from './static/facility/Facility'
import Shortintro from './static/ShortIntro/Shortintro'
import Whychoose from './static/whyschoose/Whychoose'
import Contactmessage from './static/Contact/Contactmessage'

function Home() {
  return (
    <> 
    <Slider/>
    <Facility/>
    <Shortintro/>
    <Whychoose/>
    <Contactmessage/>
    </>
  )
}

export default Home