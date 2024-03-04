import React from 'react'
import '@styles/featuredProducts.scss';
const featuredProducts = ({type}) => {
  return (
    <div className='featuredProducts'>
    <div className="top">
       <h1 className='poppins-extralight '>{type} footwear</h1>
       <p className='textanim poppins-extralight '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, accusamus inventore vel voluptate debitis minima deleniti repellat consectetur? </p>
    </div>
   
    </div> 
  )
}

export default featuredProducts