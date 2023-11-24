import { useEffect, useState } from 'react';
import { BsCart } from 'react-icons/bs';
import Cart from '../Cart/Cart';
import { navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { baseUrl } from '../../../Common/HelperApi';
import axios from 'axios';
const Header = ({ cart, data, setData }) => {
  const [search, setSearch] = useState("")

  const Search = async (e) => {
    setSearch(e.target.value)
    console.log("knsndnsakdnsa")
    if (!e.target.value) fetchSeacrh(e.target.value)
  }
  const fetchSeacrh = async (value) => {
    try {
      const result = await axios.get(`${baseUrl}product/getAllproduct?limit=7&field=name&search=${value ? search : value}`)
      setData(result.data.data.allProduct)
      console.log(result.data.data.allProduct)
    }
    catch (e) {
      toast.error(e.response.data.message)
      console.log(e)
    }
  }
  const navigate = useNavigate()
  console.log("Cart2222222222", cart)
  return <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" style={{ cursor: 'pointer' }} onClick={() => navigate("/")}>E-cart</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-3 mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="btn btn-outline-success cart_button" type="submit" onClick={() => { navigate("/cart") }}>
                <BsCart />
                <span class="badge badge-pill badge-danger">{cart?.length}</span>
              </button>
            </li>
            <li className="nav-item">
              <a className="nav-link active" style={{ cursor: "pointer" }} aria-current="page" onClick={() => { navigate("/sign") }}>SignIn</a>
            </li>
          </ul>
          {window.location.pathname === "/" && <div className="d-flex" >
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={Search} />
            <button className="btn btn-outline-success" onClick={fetchSeacrh} >Search</button>
          </div>}
        </div>
      </div>
    </nav>
  </>
}
export default Header









