import React, { useEffect, useState } from 'react'
import BlogHeader from '../../BlogHeader/BlogHeader'
import { ImUser } from 'react-icons/im'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'

import { connect } from 'react-redux'

import './Blog.css'
import Heading from '../../Heading/Heading'
import PrimaryCard from '../../Cards/PrimaryCard/PrimaryCard'
import PrimaryLV from '../../ListView/PrimaryLV/PrimaryLV'

function Blog({ location, getRelatedBlogs }) {
   const { title, content, imageURL, writtenBy, categoryType } = location.data

   return (
      <div style={{ backgroundColor: 'rgba(211,211,211,0.1)' }}>
         <BlogHeader />
         <div className="blog-container">
            <h1>{title}</h1>
            <div className="user-details-container">
               <div style={{ display: 'flex', alignItems:'center' }}>
                  <ImUser size={52} color='gray' />
                  <h5>{writtenBy}</h5>
               </div>
               <div style={{ display: 'flex', alignItems:'center' }}> 
                  <AiFillFacebook />
                  <AiFillInstagram />
                  <AiFillTwitterSquare />
               </div>
            </div>
            <img src={imageURL} />
            <p>{content}</p>
         </div>
         <div>
               <Heading title="More By Siren" />
               <PrimaryLV data={getRelatedBlogs(categoryType)} />
         </div>
      </div>
      
   )
}


const mapStateToProps = (state) => {
   return {
      getRelatedBlogs: (categoryType) => state.blogs.blogsData[categoryType]
   }
}

export default connect(mapStateToProps, null)(Blog)