import React from 'react'
import ProductCard from '../components/ProductCard'

const Products = () => {
  return (
    <>
        <section className="product_section layout_padding pt-5">
         <div className="container mw-75">
            <div className="container d-flex justify-content-end m-0 p-0 ">
               <form className="form-inline">
                  <input className="form-control mr-sm-2 border shadow-none" type="search" placeholder="Search" aria-label="Search" style={{height:"43px",width:"300px"}}/>
                </form>
            </div>
            <div className="heading_container heading_center d-flex">
               <h2 className="d-inline">
                  Our <span>products</span>
               </h2>
            </div>
            <div className="filter_button text-center">
               <button className="btn btn-light rounded-pill px-4 mx-4 my-2">All</button>
               <button className="btn btn-light rounded-pill px-4 mx-4 my-2">Books</button>
               <button className="btn btn-light rounded-pill px-4 mx-4 my-2">Nobels</button>
               <button className="btn btn-light rounded-pill px-4 mx-4 my-2">Story</button>
            </div>
            <div className="row">
               <ProductCard/>
               <ProductCard/>
               <ProductCard/>
               <ProductCard/>
              
            </div>
            <div className="btn-box">
               <a href="">
               View All products
               </a>
            </div>
         </div>
      </section>
    </>
  )
}

export default Products