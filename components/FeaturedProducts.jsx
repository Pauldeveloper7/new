import React from 'react'
import Card from   '@components/Card';
import useFetch from '@src/app/hooks/useFetch.js';
import '@styles/featuredProducts.scss';
const featuredProducts = ({type}) => {
    const {data,loading,error} = useFetch(`Products?populate=*&[filters][type][$eq]=${type}`)
  return (
    <div className='featuredProducts'>
    <div className="top">
       <h1 className='poppins-extralight '>{type} footwear</h1>
       <p className='textanim poppins-extralight '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, accusamus inventore vel voluptate debitis minima deleniti repellat consectetur? </p>
    </div>
    <div className="bottom">
    {error
    ?"Error"
    :loading
    ?"loading" 
    : data?.map(item=>{
      return  <Card item={item} key={item.id}/>
      })}
    </div>
    </div> 
  )
}

export default featuredProducts