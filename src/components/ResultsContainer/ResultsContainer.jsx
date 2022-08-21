import React from 'react'
import NamePlate from '../NamePlate/NamePlate'
import './ResultsContainer.css'


export default function ResultsContainer({resultSet}) {
  return (
    <div className='results-container'>
        {
            resultSet.length > 0 ?
                resultSet.map((name, index) => {
                    return <NamePlate key={index} name={name} />
                })
            :
                "Enter Keywords to suggets"
        }
    </div>
  )
}
