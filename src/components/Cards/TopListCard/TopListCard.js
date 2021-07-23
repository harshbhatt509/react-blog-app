import React from 'react'
import { Link } from 'react-router-dom'

import './TopListCard.css'

export default function TopListCard({ item, index }) {

   const shortContent = item.content.slice(0, 80)
   const shortTitle = item.title.slice(0,50)
   const rank = index + 1

   if (index === 0) {
      return (
         <div className="top-list-card top-card">
            <img src={item.imageURL} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> 
               <h4>{shortTitle}</h4>
               <h2>{rank}</h2>
            </div>
            
         </div>
      )
   } 
   
   return (
      <div className="top-list-card-container">
         <hr />
         <div className="top-list-card below-card">
            <img src={item.imageURL} />
            <div className="text-container">
               <h4>{shortTitle}</h4>
            </div>
            <h2>{rank}</h2>
         </div>
      </div>
   )
}
