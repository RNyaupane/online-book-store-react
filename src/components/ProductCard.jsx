import React from 'react'
import { Link } from 'react-router-dom'
import img from "../assets/images/book2.jpg"

const ProductCard = () => {
    return (
        <>
            <div className="col-auto">
                <div className="box shadow-sm " style={{width:"250px"}}>
                    <div className="option_container">
                        <div className="options">
                            <Link href="" className="option1">
                                Add To Cart
                            </Link>
                            <Link href="" className="option2">
                                View
                            </Link>
                        </div>
                    </div>
                    <div className="img-box">
                        <img src={img} alt="" />
                    </div>
                    <div className="detail-box mt-3">
                        <h6 className='text-success font-weight-bold'>
                            $800
                        </h6>
                    </div>
                    <div className="detail-box ">
                        <h5 >
                            Book Name
                        </h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard