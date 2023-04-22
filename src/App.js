import React, { useState } from 'react'
import "./App.css"
import Header from './components/header/Header';
import Pages from './pages/Pages';
import Data from './components/FlashDeals/Data';
import Sdata from './components/shop/Sdata';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
const App = () => {

  const {productItems}=Data
  const {shopItems}=Sdata
  const [cartItem,setcartItem]=useState([])
  const addToCart=(product)=>{
    const productExit=cartItem.find((item)=>item.id===product.id)
    if (productExit) {
      setcartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    }
    else{
      setcartItem([...cartItem,{...product,qty:1}])
    }
  }
  const decreaseQty=(product)=>{
   const productExit=cartItem.find((item)=>item.id===product.id)
   if(productExit.qty===1){
    setcartItem(cartItem.filter((item)=> item.id!==product.id))
   }
   else{
    setcartItem(cartItem.map((item)=>(item.id===product.id?{...productExit,qty:productExit.qty-1}:item)))
   }
    }
  return (
<>
<Router>
<Header cartItem={cartItem}/>
<Switch>
  <Route path='/' exact>
  <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems}
  />
  </Route>
  <Route  path='/cart' exact>
  <Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty}/>
  </Route>
</Switch>
</Router>
</>
  )
}

export default App;

