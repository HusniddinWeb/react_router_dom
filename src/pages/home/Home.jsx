import React from 'react'
import "./Home.css"
import Card from './Card'
import {car} from "../../datas/products/Products"

function Home() {
  
  
  return (
    <div className='home'>
        <div className="container">
            <div className='home-main'>

              {car.map((item, index) => (
                <Card key={index.id} {...item} />
              ))}
              

            </div>
        </div>
    </div>
  )
}

export default Home