import React from 'react'
import TopCart from './TopCart'
import "./Style.css"
const TopCate = () => {
  return (
    <>
        <section className='topCate background'>
            <div className='container'>
                <div className='heading d_flex'>
                    <div className='heading-left row d_flex'>
                        <i className='fa fa-border-all'></i>
                        <h2>Top Category</h2>
                        <div className='heading-right row'>
                        <div className='view'>
                           <span className='content' >View all</span>
                             <i className='fa fa-caret-right'></i>  
                             </div>          
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <TopCart/>
    </>
  )
}

export default TopCate
