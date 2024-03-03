'use client'
import '../styles/navbar.scss';
import '../styles/navigation.scss';
import  { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {useSelector} from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import InfoIcon from '@mui/icons-material/Info';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import HomeIcon from '@mui/icons-material/Home';
import WomanIcon from '@mui/icons-material/Woman';
import ManIcon from '@mui/icons-material/Man';
import SellIcon from '@mui/icons-material/Sell';
import StoreIcon from '@mui/icons-material/Store';
import Person2Icon from '@mui/icons-material/Person2';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
const Navbar = () => {
  const [CartI,setCartI] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const toggle = ()=>{
    setIsOpen(!isOpen);
  }

//   const products = useSelector(state=>state.cart.Products)
  return (
      <div className='navbar poppins-extralight '>
      <>
      <div className="mb wrapper"   >
        <div className="left">
         <Link href='/'><h3 id='logoname' className='poppins-extralight '>A-One Footwear</h3></Link> </div>
          <button type='button' onClick={toggle} id='hamburger'>
          {isOpen ? (
            <CloseIcon />
          ) : (
            <MenuIcon  />
          )}
        </button>
      </div>
      {isOpen && (
          <motion.div className="navigation" initial={{ x: "100vw" }} animate={{ x: 0 }} transition={{ duration: 0.9, type: "spring", stiffness: 40 }}>
            <div className="pages">
              <Link href='/'><li className="items">Home <div className="icons"> <HomeIcon /></div> </li></Link>
              <Link href='/products/1'><li className="items">Women<div className="icons"><WomanIcon /></div></li></Link>
              <Link href='/products/2'><li className="items">Men<div className="icons"><ManIcon /> </div></li></Link>
              <Link href='/products/4'><li className="items">Children<div className="icons"><ChildCareIcon /></div></li></Link>
              <Link href='/about'><li className="items">About us <div className="icons"><InfoIcon /></div></li></Link>
              <Link href='/Sellwithus'><li className="items">Sell with us <div className="icons"><SellIcon /></div></li></Link>
              <Link href='/stores'><li className="items">Our Stores <div className="icons"><StoreIcon /></div></li></Link>
              <Link href='/profile'><li className="items">Profile<div className="icons"><Person2Icon /></div></li></Link>
              <Link href='/wishlist'><li className="items">Wishlist<div className="icons"><FavoriteIcon /></div></li></Link>
              <Link href='/AddToCart'><li className="items">Cart Item<div className="icons"><ShoppingCartIcon /></div></li></Link>
            </div>
          </motion.div>
        )}
      </>
      <>
      <div className="wrapperlpc" id='pc'>
      <div className="left">
      <div className="item">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="Indian flag" width={20} height={20} />
        <KeyboardArrowDownIcon/>
      </div>
      <div className="item">
        <span>IN</span>
        <KeyboardArrowDownIcon/>
      </div>
      <div className="item">
      <Link className='link' href="/products/1">Women</Link>
      </div>
      <div className="item">
      <Link className='link' href="/products/2">Men</Link>
      </div>
      <div className="item">
      <Link className='link' href="/products/4">Children</Link>
      </div>
      </div>
      <div className="center">
        <Link className='link petit-formal' href="/">A-ONE FOOTWEAR</Link>
        
      </div>
      <div className="right">
      <div className="item">
        <Link className='link' href="/">Home</Link>
      </div>
      <div className="item">
        <Link className='link' href="/about">About </Link>
      </div>
      <div className="item">
        <Link className='link' href="/stores">Our Stores</Link>
      </div>
      <div className="item">
        <Link className='link' href="/Sellwithus">Sell With Us</Link>
      </div>
       <div className="icons">
        <SearchIcon/>
         <PersonOutlineOutlinedIcon/>   
          <FavoriteBorderOutlinedIcon/>
      <div className="icons">
        <div className="cardIcon">
      <Link href={'/AddToCart'} className='link'><ShoppingCartOutlinedIcon/></Link>
        <span>{1}</span>
        </div>
      </div>
      </div>
      </div>
      </div>
    </>
    </div>
  )
}
// onClick={()=>{
//     setCartI(!CartI)
export default Navbar