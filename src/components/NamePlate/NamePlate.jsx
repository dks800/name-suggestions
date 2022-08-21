import React from 'react'
import './NamePlate.css'

export default function NamePlate({name}) {
    const nameCheapURL = 'https://www.namecheap.com/domains/registration/results/?domain=';
  return (
    <a href={`${nameCheapURL}${name}`} target="_">
        <div className="name-container">
            {name}
        </div>
    </a>
  )
}
