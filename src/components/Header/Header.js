import React from 'react'
import { Navbar, Button, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { setSelectedCategory } from '../../redux/action/index'

import './Header.css'

function Header({ userDetails, setSelectedCategory }) {
   return (
      <div>
         <div className="header-container">
            <div className="heading-container">
               <h2>The</h2>
               <h1>Siren</h1>
               
            </div>
            {userDetails.loggedIn ? 
               null 
            :
               <div className="auth-btn-conatiner">
                  <Button variant='link'>Sign In</Button>
                  <Button variant='link'>Sign Up</Button>
               </div>
         }
            
         </div>
         
         
         
         <Navbar expand='lg'>
            <Nav className="justify-content-center align-items-center nav">
               <div className="nav-links" onClick={() => setSelectedCategory(null)}>
                  <Nav.Link >Home</Nav.Link>
               </div>
               <div to='/' className="nav-links" onClick={() => setSelectedCategory('bollywood')}>
                  <Nav.Link>Bollywood</Nav.Link>
               </div>
               <div to='/' className="nav-links" onClick={() => setSelectedCategory('technology')}>
                  <Nav.Link>Technology</Nav.Link>
               </div>
               <div to='/' className="nav-links" onClick={() => setSelectedCategory('hollywood')}>
                  <Nav.Link>Hollywood</Nav.Link>
               </div>
               <div to='/' className="nav-links" onClick={() => setSelectedCategory('fitness')}>
                  <Nav.Link>Fitness</Nav.Link>
               </div>
               <div to='/' className="nav-links" onClick={() => setSelectedCategory('food')}>
                  <Nav.Link>Food</Nav.Link>
               </div>
            </Nav>
            
      </Navbar>
      <hr />
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      userDetails: state.auth
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      setSelectedCategory: (newCategory) => dispatch(setSelectedCategory(newCategory))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)