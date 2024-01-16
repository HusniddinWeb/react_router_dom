import React from 'react'
import "./About.css"

function About({name}) {
  console.log(name)
  return (
    <div className="about">
        <div className="container">
            <h1>Ism: {name.ism}</h1>
            <h1>Parol: {name.parol}</h1>
        </div>
    </div>
  )
}

export default About