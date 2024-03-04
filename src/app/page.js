'use client'
import  "./page.module.css";
import Slider from '@components/slider';
import FeaturedProducts from '@components/FeaturedProducts';
// import '@styles/app.scss';
const page = () => {
  return (
    <div>
      <Slider/>
      <FeaturedProducts type='Featured'/>
    </div>
  )
}

export default page
