import { useEffect, useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import { baseUrl } from "../../Common/HelperApi"
const Home = ({ cart, handle, handleClick,fetchProducts,data }) => {
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])
    useEffect(() => {
        fetchProducts()
    }, [])
    return <>
        <ToastContainer />
        <div className="Main">
            {data.map((item) => {
                return <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" alt="phone" src={item.img} />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <h6 className="price">{item.price.toLocaleString('en-us')}</h6>
                        <p className="card-text">{item.description}</p>
                        {cart.every((a) => a._id !== item._id) ?
                            <a className="btn btn-primary" onClick={() => handle(item)}>Add to cart</a>
                            :
                            <a className="btn btn-primary" onClick={() => handleClick(item)}>Remove</a>
                        }
                    </div>
                </div>
            })}
        </div>
    </>
}
export default Home
