import React from 'react'
import { Link } from 'react-router-dom'

import './SecondaryCard.css'

export default function SecondaryCard({ item }) {

   const shortContent = item.content.slice(0, 100)
   const shortTitle = item.title.slice(0,50) 

   return (
      <Link to={{
         pathname: '/Blog',
         data: item
         }} className="secondary-card-container">
         <hr />
         <div className="secondary-card">
            <img src={item.imageURL} />
            <div className="text-container">
               <h4>{shortTitle}</h4>
               <p>{shortContent}...</p>
            </div>
         </div>
      </Link >
   )
}
