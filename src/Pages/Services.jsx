import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
   return (
      <>
         <div className="container mt-5">
            <div className="heading_container heading_center d-flex mb-3">
               <h2 className="d-inline">
                  Our <span>Services</span>
               </h2>
            </div>
            <div className="row">
               <div className="col-md-4">
                  <div className="card mb-4 ">
                     <div className="card-body">
                        <i className="fas fa-book fa-4x mb-3"></i>
                        <h5 className="card-title">Vast Collection</h5>
                        <p className="card-text">We offer a vast collection of books in various genres, catering to all reading preferences.</p>
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="card mb-4">
                     <div className="card-body">
                        <i className="fas fa-truck fa-4x mb-3"></i>
                        <h5 className="card-title">Fast Delivery</h5>
                        <p className="card-text">Enjoy fast and reliable book deliveries right to your doorstep, anywhere in the country.</p>
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="card mb-4">
                     <div className="card-body">
                        <i className="fas fa-lock fa-4x mb-3"></i>
                        <h5 className="card-title">Secure Payment</h5>
                        <p className="card-text">We ensure secure payment integration options to protect your sensitive information.</p>
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="card mb-4">
                     <div className="card-body">
                        <i className="fas fa-gift fa-4x mb-3"></i>
                        <h5 className="card-title">Gift Cards</h5>
                        <p className="card-text">Surprise your loved ones with our gift cards and let them choose their favorite books.</p>
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="card mb-4">
                     <div className="card-body">
                        <i className="fas fa-user fa-4x mb-3"></i>
                        <h5 className="card-title">Recommendations</h5>
                        <p className="card-text">Get personalized book recommendations based on your reading history and preferences.</p>
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="card mb-4">
                     <div className="card-body">
                        <i className="fas fa-headphones fa-4x mb-3"></i>
                        <h5 className="card-title">Audiobooks</h5>
                        <p className="card-text">Explore our vast collection of audiobooks for an immersive reading experience.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <section className="arrival_section">
            <div className="container">
               <div className="box">
                  <div className="arrival_bg_box">
                     <img src="https://svgsilh.com/svg/1973672.svg" className='h-75 w-50 mt-5' alt="" />
                  </div>
                  <div className="row ">
                     <div className="col-md-6 ml-auto">
                        <div className="heading_container remove_line_bt">
                           <h2>
                              #NewArrivals
                           </h2>
                        </div>
                        <p style={{ marginTop: '20px', marginBottom: "30px" }}>
                           Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!
                        </p>
                        <Link to="/products">
                           Shop Now
                        </Link>
                        
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Services