import React from 'react'
import Home from '../components/mainpage/Home'
import FlashDeals from '../components/FlashDeals/FlashDeals'
import TopCate from '../components/top/TopCate'
import NewArrivals from '../components/newarrivals/NewArrivals/NewArrivals'
import Discount from '../components/discount/Discount'
import Shop from '../components/shop/Shop'
import Annocument from '../components/announcement/Annocument'
import Footer from '../components/footer/Footer'
const Pages = ({productItems,cartItem,addToCart,shopItems}) => {
  return (
    <div>

      <Home cartItem={cartItem}/>
     <FlashDeals productItems={productItems} addToCart={addToCart} />
     <TopCate/>
     <NewArrivals/>
     <Discount/>
     <Shop shopItems={shopItems}  addToCart={addToCart}/>
     <Annocument/>
     <Footer/>
    </div>
  )
}

export default Pages
