import React from 'react'
import { Link } from 'react-router-dom'
import img from "../assets/images/p2.png"

const ProductCard = () => {
    return (
        <>
            <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="box">
                    <div className="option_container">
                        <div className="options">
                            <Link href="" className="option1">
                                Add To Cart
                            </Link>
                            <Link href="" className="option2">
                                Buy Now
                            </Link>
                        </div>
                    </div>
                    <div className="img-box">
                        <img src={img} alt="" />
                    </div>
                    <div className="detail-box">
                        <h5>
                            Men's Shirt
                        </h5>
                        <h6>
                            $80
                        </h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard