import React from 'react'
import PrimaryCard from '../../Cards/PrimaryCard/PrimaryCard'

import './PrimaryLV.css'

export default function PrimaryLV({ data }) {
   return (
      <div className='primary-list-container'>
         {data.map((item) => {
            return (
               <PrimaryCard item={item} />
            )
         })}
      </div>
   )
}
