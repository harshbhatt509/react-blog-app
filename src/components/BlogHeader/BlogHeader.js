import React from 'react'

import './BlogHeader.css'

export default function BlogHeader() {
   return (
      <div className="blog-header">
         <div className="blog-header-heading-container">
               <h2>The</h2>
               <h1>Siren</h1>   
         </div>
         <div>
            <button className="btn btn-outline-primary">Get Started</button>
         </div>
      </div>
   )
}
