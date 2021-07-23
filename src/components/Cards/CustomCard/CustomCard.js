import React from 'react'

import './CustomCard.css'

export default function CustomCard({ title, categoryType, date, width, height }) {
   return (
      <div className="custom-card-container" style={{ width, height }}>
         <div className="custom-card">
            <h4>{title}</h4>
            <p>{categoryType}/{date}</p>
         </div>
         
      </div>
   )
}
