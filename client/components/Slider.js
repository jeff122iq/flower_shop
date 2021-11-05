import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { PageCarousel, SliderItem } from '../styles/slider'
import { sliderItems } from '../variables'

export default function Slider () {
  return (
    <PageCarousel
      autoPlay
      infiniteLoop
      stopOnHover
      showStatus={false}
    >
      {sliderItems.map((item, idx) => {
        return (
          <div key={idx}>
            <SliderItem url={item.image}>
              <p className="legend">{item.name}</p>
            </SliderItem>
          </div>
        )
      })
      }
    </PageCarousel>
  )
}