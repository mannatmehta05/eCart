import { useState } from "react"
import Footer from "./Footer/Footer"
const Cart = ({ cart, setCart }) => {
    console.log("abc", cart)
    // const [inc, setInc] = useState(0)
    const incr = (index) => {
        const newCart = [...cart]
        newCart[index].stock += 1
        setCart(newCart)
    }
    const dec = (index) => {
        if (cart[index].stock > 1) {
            const newCart = [...cart]
            newCart[index].stock -= 1
            setCart(newCart)
        }
    }
    const deleted = (index) => {
        let filtered = cart.filter((items, i) => {
            return index !== i
        })
        setCart(filtered)
    }
    return <>
        <div className="Cart-page">
            {cart.length ? cart.map((item, index) => {
                return <div className="cart">
                    <div className="mobile_row">
                        <div className="mobile_col">
                            <ul className="p-0 m-0">
                                <li>
                                    <img style={{ maxWidth: "200px" }} src={item.img} />
                                </li>
                                <li>
                                    {item.name}
                                </li>
                                <li>
                                    {item.price.toLocaleString('en-us')}
                                </li>
                                <li>
                                    {item.stock}
                                </li>
                                <li>
                                    <button className="decrement" onClick={() => { dec(index) }}>-</button>
                                    <button className="increment" onClick={() => { incr(index) }}>+</button>
                                    <button className="delete" onClick={() => { deleted(index) }}>Remove</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row-cart">
                        <div className="col-cart"><img className="image" src={item.img} /></div>
                        <div className="col-cart">{item.name}</div>
                        <div className="col-cart">{item.price.toLocaleString('en-us')}</div>
                        <div className="col-cart">{item.stock}</div>
                        <div className="col-cart">
                            <div className="item">
                                <button className="decrement" onClick={() => { dec(index) }}>-</button>
                                <button className="increment" onClick={() => { incr(index) }}>+</button>
                                <button className="delete" onClick={() => { deleted(index) }}>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            }) : <div className="cart">
                <div className="empty" >
                    Cart is empty
                </div>
            </div>}
        </div>
        <Footer Cart={cart} />
    </>
}
export default Cart



