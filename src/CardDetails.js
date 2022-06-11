
import {  useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ADD,REMOVE } from "./action/action"
import { DLT } from './action/action';
import { useDispatch } from 'react-redux';
// import img from "./img/1."
import { width } from '@mui/system';

const CardDetails = () => {
  // add data
  const dispatch = useDispatch();
  const send = (e) => {
    // console.log(e)
    dispatch(ADD(e));
   }
  //  decre
  const dlt = (e) =>{
    
    navigate(-1)
    dispatch(DLT(e));
   }

  // remove one
  
  const remove = (item) => {
    dispatch(REMOVE(item));


    

  }
  const navigate= useNavigate();
  const back=()=>{
    navigate(-1)
  }

  const [data,setData]=useState([]);
  const {id}= useParams();
  const getdata = useSelector((state) => state.cartreducer.carts)
  // console.log(getdata)
  const compare=()=>{
    let comparedata=getdata.filter((e)=>{
      return e.id == id
    })
    // console.log(comparedata)
    setData(comparedata)
  }

  useEffect(()=>{
    compare();
  },[id])
  return (
    <>
  

<h2 className='text-center mt-2'>Your cards</h2>
<hr />
<div className="container">
    <div className="row">
        <div className="col-4">
             <div className="col-4">
             {data.map((ele)=>{
              const { id, title, price, image, quantity } = ele
               return(
                 <>
                 <div class="card" style={{display: "block", margin: "auto", width: "300px", border: "none" }}>
  <img src={image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center"><strong>{title}</strong></h5>
   
   
    <p><strong>Price:{price}₹</strong></p>
    <p><strong>Quantity: {quantity}</strong></p>
    <p><strong>Total: {price*quantity}₹</strong></p>
    <div className='mt-4 mb-4 d-flex justify-content-between align-items-center' style={{width:100, cursor:"pointer", background: "#ddd", color: "#111" }}>
      <span style={{fontSize:28}}
       onClick={()=>remove(ele)} 
      >-</span>
      <span style={{fontSize:20}}>{quantity}</span>
      <span style={{fontSize:28}} 
      
      onClick={()=>send(ele)} >+</span>
    </div>
    {/* <a href="#" class="btn btn-danger">Remove from cart</a> */}
    <i class="fa-solid fa-trash text-danger" style={{ fontSize: 30, cursor: "pointer" }}
     onClick={()=>dlt(id)}
    ></i>
    <i class="fa-solid fa-home text-success mx-5" style={{ fontSize: 30, cursor: "pointer" }}
     onClick={back}
    ></i>
  </div>
</div>
                 </>
               )
             })
             }
       
             </div>
      
        </div>
        
    </div>
</div>


      
    </>
  )
}

export default CardDetails
