import React from 'react'
import { Link } from 'react-router-dom'
import TopListCard from '../../Cards/TopListCard/TopListCard'

import './TopList.css'

export default function TopList({ data }) {
   return (
      <div className="top-list-container"> 
         {data.map((item, index) => {
            return (
               <Link to={{
                  pathname: '/Blog',
                  data: item
                  }}>
                  <TopListCard item={item} index={index} />
               </Link>
            )
         })}
      </div>
   )
}
