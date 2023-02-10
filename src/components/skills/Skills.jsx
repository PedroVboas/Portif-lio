import React from 'react'
import "./Skills.scss"

function Skills (props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} className="card__imag"/>
        <h2 className="card__title">{props.title}</h2>
      </div>
    </div>
  )
}

export default Skills