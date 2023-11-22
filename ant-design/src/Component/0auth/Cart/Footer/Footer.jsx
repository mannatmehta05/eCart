import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Footer = ({ Cart }) => {
    const navigate = useNavigate()
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        let total = Cart.map((item) => {
            return item.price * item.stock
        }).reduce((acc, CI) => acc + CI, 0)
        setTotalPrice(total)
    }, [Cart])
    return <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary footer">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Total Price:{totalPrice.toLocaleString('en-us')}</a>
                <button className="btn-cart" onClick={() => { navigate("/login") }}>Place Order</button>
            </div>
        </nav >
    </>
}
export default Footer