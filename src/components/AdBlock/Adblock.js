import React from 'react'

export default function Adblock({ width, height, marginTop=0, marginBottom=0 }) {
   return (
      <div 
         style={{
            width: width,  
            height: height,
            border: 'solid 1px black',
            marginBottom,
            marginTop,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
         }}
      >
         <h4>Advertisement</h4>
      </div>
   )
}
