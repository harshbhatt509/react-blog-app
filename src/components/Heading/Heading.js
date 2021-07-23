import React from 'react'

import './Heading.css'

export default function Heading({ title }) {
   return (
      <div className="topic-heading-container">
         <h2 className="topic-heading">{title}</h2>
         <div className="underline"></div>
      </div>
   )
}
