import React from 'react'
import FlashCard from './FlashCard'

const FlashDeals = ({productItems,addToCart}) => {
  return (
    <div>
 <section className='flash_background'>
    <div className='container'>
    <div className='heading f_flex'>
        <i className='fa fa-bolt'></i>
        <h1>FlashDeals</h1>
        </div>
        <FlashCard productItems={productItems} addToCart={addToCart}/>
    </div>
 </section>
    </div>
  )
}

export default FlashDeals;
