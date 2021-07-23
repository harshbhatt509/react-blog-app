import React from 'react'
import { Link } from 'react-router-dom'

import './StoriesList.css'

export default function StoriesList({ data }) {
   return (
      <div className="stories-list-container">
         { data.map((item) => {
            const shortContent = item.content.slice(0, 150)
            const shortTitle = item.title.slice(0,70)

            return(
               <Link to={{
                  pathname: '/Blog',
                  data: item }}
                  className="story-card">
                  <h4>{shortTitle}</h4>
                  <p>{shortContent}</p>
               </Link>
            )
         }) }
      </div>
   )
}
