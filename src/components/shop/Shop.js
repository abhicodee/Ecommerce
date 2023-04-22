import React from 'react'
import Catg from './Catg'
import ShopCart from "./ShopCart"
import "./style.css"
const Shop = ({shopItems,addToCart}) => {
  return (
   <>
    <section className='shop background'>
        <div className='container d_flex'>
            <Catg/>
            <div className='contentWidth'>
            <div className='heading d_flex'>
                    <div className='heading-left row d_flex'>
                    <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
                        <h2 className='mobile_head'>Mobile Phone</h2>
                        </div>
                        <div className='heading-right row'>
                           <span>View all</span>
                             <i className='fa fa-caret-right'></i>            
                        </div>
                    </div>
                    <div className='product-content grid1'>
                        <ShopCart shopItems={shopItems}/>
                    </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default Shop
