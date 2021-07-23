import React from 'react'
import SecondaryCard from '../../Cards/SecondaryCard/SecondaryCard'

import './SecondaryLV.css'

export default function SecondaryLV({ data }) {
   return (
      <div className="secondary-list-cotnainer">
         {data.map((item) => {
            return(
               <SecondaryCard item={item} />
            )
            
         })}
      </div>
   )
}
