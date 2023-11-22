import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Header from "./Header/Header"
import { useState } from "react"
import Cart from "./Cart/Cart"
import Login from "../0auth/Login"
import SignUp from "../0auth/SignUp"
import { baseUrl } from "../../Common/HelperApi"
import { toast } from "react-toastify"
import axios from "axios"
import Footer from "./Cart/Footer/Footer"

const Router = () => {
    const [cart, setCart] = useState([])
    const [data, setData] = useState([])
    const fetchProducts = async () => {
        try {
            const result = await axios.get(`${baseUrl}product/getAllproduct`)
            setData(result.data.data.allProduct)
            console.log(result.data.data.allProduct)
        }
        catch (e) {
            toast.error(e.response.data.message)
            console.log(e)
        }
    }
    const handle = (item) => {
        setCart([...cart, item])
    }
    const handleClick = (item) => {
        let filtered = cart.filter((element) => {
            return element._id !== item._id
        })
        setCart(filtered)
    }
    return <>
        <Header cart={cart} data={data} setData={setData} />
        <Routes>
            <Route path="/" element={<Home cart={cart} handle={handle} handleClick={handleClick} fetchProducts={fetchProducts} data={data} />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign" element={<SignUp />} />
        </Routes>
        {/* <Footer/> */}
    </>
}
export default Router

