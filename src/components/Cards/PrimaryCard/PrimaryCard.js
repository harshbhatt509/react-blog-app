import React from 'react'
import { Link } from 'react-router-dom'

import './PrimaryCard.css'

export default function PrimaryCard({ item }) {
   
   const shortContent = item.content.slice(0, 150)
   const shortTitle = item.title.slice(0,70)

   return (
      <Link to={{
         pathname: '/Blog',
         data: item
      }} className="primary-card">
         <img src={item.imageURL} />
         <h4>{shortTitle}</h4>
         <p>{shortContent}...</p>
      </Link>
   )
}
