import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import img from "../assets/images/p2.png"

const RecentProducts = () => {
  return (
    <>
        <section className="product_section layout_padding">
      <div className="container">
         <div className="heading_container heading_center">
            <h2>
               Featured <span>products</span>
            </h2>
         </div>
         <div className="row">

           <ProductCard/> 
           <ProductCard/> 
           <ProductCard/> 
           <ProductCard/> 
           <ProductCard/> 
           <ProductCard/> 

         </div>
         <div className="btn-box">
            <Link to="/products">
               View All products
            </Link>
         </div>
      </div>
   </section>
    </>
  )
}

export default RecentProducts