import React, { createElement, useEffect } from 'react'
import { connect } from 'react-redux'
import Adblock from '../../AdBlock/Adblock';
import CustomCard from '../../Cards/CustomCard/CustomCard';
import Heading from '../../Heading/Heading';

import PrimaryLV from  '../../ListView/PrimaryLV/PrimaryLV';
import SecondaryLV from '../../ListView/SecondaryLV/SecondaryLV';
import StoriesList from '../../ListView/StorisList/StoriesList';
import TopList from '../../ListView/TopList/TopList'

import { setData } from '../../../redux/action';

import './Home.css'

function Home({ blogsData, selectedCategory, selectedCategoryBlogs, setData }) {

   async function getData() {
      const response = await fetch('http://localhost:5000')
      const data = await response.json()
      setData(data)
   }

   useEffect(() => {
      getData()
   }, [])

   if(!blogsData.technology) {
      return <>Loading</>
   }


   if(!selectedCategory) {
      const latestTech = blogsData.technology.slice(0,2)
      const latestBolly = blogsData.bollywood.slice(0,2)
      const data = [...latestTech, ...latestBolly]
      return (
         <div className="home-section">
            <div className="initial-blogs">
               <CustomCard 
                  title="Title of verticle gallery"
                  categoryType="Travel"
                  date="12/3/2020"
                  width="500px"
                  height="300px"
               />
               <div>
                  <CustomCard 
                     title="Title of verticle gallery"
                     categoryType="Travel"
                     date="12/3/2020"
                     width="250px"
                     height="150px"
                  />
                  <hr style={{ visibility: 'hidden', marginTop: '0px', marginBottom: '0px' }} />
                  <CustomCard 
                  title="Title of verticle gallery"
                  categoryType="Travel"
                  date="12/3/2020"
                  width="250px"
                  height="150px"
                  />
               </div>
            </div>
            
            <div className="section-1">
               <Heading title="The Latest" />
               <PrimaryLV data={data} />
            </div>
            <div className="section-2" >
               <div>
                  <Heading title="Latest Article" />
                  <SecondaryLV data={data} />
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                     <CustomCard 
                        title="Title of verticle gallery"
                        categoryType="Travel"
                        date="12/3/2020"
                        width={'70%'} 
                        height="300px"
                     />
                  </div>
               </div>
               <div>
                  <div className="top-list">

                     <Adblock width={'220px'} height={'400px'} />
                     <Heading title="Top List"/>
                     <TopList data={data}/>
                  </div> 
               </div>
            </div>
            <div style={{ marginTop: '30px' }}>
               <Heading title="Latest Stories"/>
               <hr />
               <StoriesList data={data}/>
               <hr />
            </div>
         </div>
         
      )
   }
   
   const categoryName = selectedCategory[0].toUpperCase()+selectedCategory.slice(1)
   const topPosts = selectedCategoryBlogs.slice(0,4)
   
   return (
      <div className="category-section">
         <div className="section-2">
            <div> 
               <Heading title={categoryName} />
               <SecondaryLV data={selectedCategoryBlogs} />
            </div>
            <div>
               <Heading title="Top Posts" />
               <TopList data={topPosts} />
               <Adblock width={'80%'} height={'430px'} marginTop={'40px'} />
            </div>
         </div>
         
         
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      blogsData: state.blogs.blogsData,
      selectedCategory: state.blogs.selectedCategory,
      selectedCategoryBlogs: state.blogs.selectedCategoryBlogs
   }
} 

const mapDispatchToProps = (dispatch) => {
   return {
      setData: (data) => dispatch(setData(data))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)