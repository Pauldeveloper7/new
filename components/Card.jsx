import React from 'react'
import '../styles/card.scss'
import Link from 'next/link'
const Card = ({item}) => {
  return (
   <Link className='link' href={`/product/${item.id}`}>
    <div className="Card">
        <div className="image">
            {item?.attributes?.isNew && <span id='newseason' className='poppins-extralight '>New Season</span>}
            <img src={`http://localhost:1337`+item.attributes?.img?.data.attributes.url} alt="Image here" className="mainImg" />
            <img src={`http://localhost:1337`+item.attributes?.img2?.data.attributes.url} alt="y" className="secondImg" />
        </div> 
        <h2 className='poppins-extralight '>{item?.attributes?.title}</h2>   
        <div className="prices">
            <h3 className='poppins-extralight '>${item.oldPrice || item?.attributes?.Price+20}</h3>
            <h3><img src="https://media.istockphoto.com/id/1350213100/vector/indian-rupee-symbol-currency-inr-black-sign.jpg?s=612x612&w=0&k=20&c=H74b72rrQzE5heBXh_YpMGVCLoEvseUHCcPcp53-Mto=" alt="" height={15} />
            {item?.attributes?.Price}</h3>
        </div>
    </div>
    </Link>
  )
}

export default Card