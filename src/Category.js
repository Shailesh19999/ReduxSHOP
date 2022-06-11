import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu'
import { ADD } from "./action/action"
import { DLT } from './action/action';
import { useDispatch } from 'react-redux';
import "./index.css"
import { NavLink } from 'react-router-dom';

import CardDetails from './CardDetails';



import Categories from './Categories'
const Category = () => {
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();
  const send = (e) => {
    // console.log(e)
    toast.success('Card added successfully.', {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    dispatch(ADD(e));




  }

  const dlt = (ids) => {
    // console.log(e)
    dispatch(DLT(ids));

  }
  const total = () => {
    let price = 0;
    getdata.map((ele, key) => {
      price = ele.price * ele.quantity + price
    });
    setPrice(price);
  }
  useEffect(() => {
    total();
  }, [total])




  // for menu itrem
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // end


  const [data, setdata] = useState(Categories);

  const select = (cartItem) => {
    const newdata = Categories.filter((val) => {

      return val.category === cartItem;
    })
    setdata(newdata);

  }
  const getdata = useSelector((state) => state.cartreducer.carts)





  // console.log(getdata)
  return (
    <>

      <nav class="navbar navbar-light bg-light navbar sticky-top navbar-light bg-light" style={{ height: "60px" }}>
        <div class="container">
          <p1>Shopping cart</p1>
          <Badge badgeContent={getdata.length} color="primary"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <i class="fa-solid fa-cart-shopping mt-2" style={{ fontSize: 30, cursor: "pointer" }}></i>


          </Badge>


        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >

          {
            getdata.length ?
              <div className="card_details" >

                {getdata.map((e) => {
                  const { id, title, price, image, quantity } = e;
                  return (
                    <>



                      <h2 className='text-center mt-2'>{title}</h2>
                      <div className="container">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="col-4">
                              <div class="cards" style={{ width: "20rem" }}>
                                <img src={image} class="card-img-top" alt="..." className='inner' style={{ width: "8rem", height: "8rem", objectFit: "contain" }} />
                                <div class="card-body">

                              

                                  <p><strong>Price:{price}₹</strong></p>
                                  <p><strong>Quantity:</strong>{quantity}</p>
                                  <i class="fa-solid fa-trash text-danger" style={{ fontSize: 30, cursor: "pointer" }}
                                    onClick={() => dlt(id)}

                                  ></i>
                                  {/* <i class="fa-solid fa-person-snowboarding text-success mx-5" style={{fontSize:30,cursor:"pointer"}}></i> */}
                                  <NavLink to={`/cart/${e.id}`}> <button class=" bg-success text-light mx-5" style={{
                                    cursor: "pointer", height: "31px",
                                    width: " 88px",
                                    position: "absolute",
                                    right: "-15px",
                                    border: "none"
                                  }}>view
                                  </button>
                                  </NavLink>
                                </div>
                              </div>
                            </div>

                          </div>

                        </div>
                      </div>



                    </>
                  )
                })}
                <p className="text-center"><strong> Total:</strong>{price}</p>
              </div>

              :
              <p1>Your cart is empty🛒</p1>

          }


        </Menu>

      </nav>
      <h1 className='text-center'>Let's shop</h1>
      <div className="container-fluid mx-2">
        <div className="row mt-5 mx-3">
          <div className="col-md-3">
            <button className="btn btn-warning w-100 mb-4" onClick={() => select("man")}>Men</button>
            <button className="btn btn-warning w-100  mb-4" onClick={() => select("woman")}>Women</button>
            <button className="btn btn-warning w-100  mb-4" onClick={() => select("children")}>Children</button>
            <button className="btn btn-warning w-100  mb-4" onClick={() => select("manT")}>Man T-shirt</button>
            <button className="btn btn-warning w-100  mb-4" onClick={() => select("womank")}>Woman Kurta</button>
            <button className="btn btn-warning w-100  mb-4" onClick={() => setdata(Categories)}>All</button>

          </div>
          <div className="col-md-9">
            <div className="row">


              {data.map((value) => {
                const { id, title, price, image } = value
                return (
                  <>
                    <div className="col-md-4 mb-4">

                      <div class="card" style={{ width: "18rem", border: "none" }}>
                        <img src={image} class="card-img-top" alt="..." className='img-fluid' />
                        <div class="card-body">
                          <h5 class="card-title text-center">{title}</h5>
                          <p class="card-title text-center"><strong>Price:{price}₹</strong></p>
                          <p class="card-text">Shop for latest styles from our wide range of collections. Fast Delivery. Buy now! Great Offers. Best Deals. Top Brands. No Cost EMI Available. Easy & Fast Delivery. Huge Selection. Low Prices.</p>
                          <button class="btn btn-dark" onClick={() => send(value)} style={{width:"100%"}}>Add to card</button>
                        
                          <ToastContainer />
                        </div>
                      </div>
                    </div>
                  </>




                )
              })}







            </div>
          </div>

        </div>

      </div>

    </>
  )
}


export default Category
