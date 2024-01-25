import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import './Home.css';
import { FiMenu } from "react-icons/fi";

const UpdateNo = () => {
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products/${Number(params.id)}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [params.id]);

  return (
    <>
    <div className="border p-2"> 
      <div className="main-div  ">
        <div className="main_dashborad">
          <div className="titlebar">

            <div className="page-title">   Escalated orders</div>
            <div className="title-order">Order Number : {product.orderNumber}</div>
            <div className="page-desc">Order Details</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti molestias eaque vel explicabo nobis rem, cum dicta in voluptatibus quos.</p>
          </div>
        </div>
    
        <div className="">
          <div className="">Item Description
          </div>
          <div className="">
            <div className="row pb-2">
              <div className="col-md-4">
                Rod 1 : xxxxxx
              </div>
              <div className="col-md-4">
                Total Length Ordered: 105
              </div>
              <div className="col-md-4">
                Max Rod Length 90
              </div>
            </div>
            <div className="row pb-2">
              <div className="col-md-4">
                Split Rod 1 :
              </div>
              <div className="col-md-4">
                <select className='w-50'>
                  <option value="1">1</option>
                  <option value="3">3</option>
                  <option value="5">5</option>
                  <option value="7">7</option>
                </select>

              </div>
              <div className="col-md-4">

              </div>
            </div>
            <div className="row pb-2">
              <div className="col-md-3">
                Part 1 Length :
                <input type='range' value={80}></input>
              </div>
              <div className="col-md-3">
                <h5 className='p-0 m-0'>Length Selected</h5>
                <p className="border w-50 h-50 bg-white ">
                  80
                </p>
              </div>
              <div className="col-md-3">
                <p className='p-0 m-0'>Select Finial </p>
                <select className='w-50'>
                  <option value="drum">Drum</option>

                </select>
              </div>
              <div className="col-md-3">
                <h5>Notes</h5>
                <h5>84 Inches TC</h5>

              </div>
            </div>
            <div className="row pb-2">
              <div className="col-md-3">
                Part 2 Length :
                <input type='range' value={25}></input>
              </div>
              <div className="col-md-3">
                <h5 className='p-0 m-0'>Length Selected</h5>
                <p className="border w-50 h-50 bg-white ">
                  25
                </p>
              </div>
              <div className="col-md-3">
                <p className='p-0 m-0'>  Select Finial</p>
                <select className='w-50'>
                  <option value="drum">Drum</option>

                </select>
              </div>
              <div className="col-md-3">
                <p className="border w-50 h-50 bg-white ">

                </p>
              </div>
            </div>
          </div>

          <div className=" pt-2">
            <div className="row pb-2">
              <div className="col-md-4">
                Rod 2 : xxxxxx
              </div>
              <div className="col-md-4">
                Total Length Ordered: 105
              </div>
              <div className="col-md-4">
                Max Rod Length 90
              </div>
            </div>
            <div className="row pb-2">
              <div className="col-md-4">
                Split Rod 1 :
              </div>
              <div className="col-md-4">
                <select className='w-50'>
                  <option value="1">1</option>
                  <option value="3">3</option>
                  <option value="5">5</option>
                  <option value="7">7</option>
                </select>

              </div>
              <div className="col-md-4">

              </div>
            </div>
            <div className="row pb-2">
              <div className="col-md-3">
                Part 1 Length :
                <input type='range' value={80}></input>
              </div>
              <div className="col-md-3">
                <h5 className='p-0 m-0'>Length Selected</h5>
                <p className="border w-50 h-50 bg-white ">
                  80
                </p>
              </div>
              <div className="col-md-3">
                <p className='p-0 m-0'>Select Finial </p>
                <select className='w-50'>
                  <option value="drum">Drum</option>

                </select>
              </div>
              <div className="col-md-3">
                <h5>Notes</h5>
                <h5>84 Inches TC</h5>

              </div>
            </div>
            <div className="row pb-2">
              <div className="col-md-3">
                Part 2 Length :
                <input type='range' value={60}></input>
              </div>
              <div className="col-md-3">
                <h5 className='p-0 m-0'>Length Selected</h5>
                <p className="border w-50 h-50 bg-white ">
                  60
                </p>
              </div>
              <div className="col-md-3">
                <p className='p-0 m-0'>  Select Finial</p>
                <select className='w-50'>
                  <option value="drum">Drum</option>

                </select>
              </div>
              <div className="col-md-3">
                <p className="border w-50 h-50 bg-white ">

                </p>
              </div>
            </div>
            <div className="row pb-2">
              <div className="col-md-3">
                Part 3 Length :
                <input type='range' value={10}></input>
              </div>
              <div className="col-md-3">
                <h5 className='p-0 m-0'>Length Selected</h5>
                <p className="border w-50 h-50 bg-white ">
                  10
                </p>
              </div>
              <div className="col-md-3">
                <p className='p-0 m-0'>  Select Finial</p>
                <select className='w-50'>
                  <option value="drum">Drum</option>

                </select>
              </div>
              <div className="col-md-3">
                <p className="border w-50 h-50 bg-white ">
                </p>
              </div>
            </div>
          </div>

          <div className=" pt-2">

            <div className="row pb-2">
              <div className="col-md-4">
                <h5> Client Details </h5>
                <p className='p-0 m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ipsam. </p>
              </div>
              <div className="col-md-4">
                <button className='btn btn-primary'>Contact Client</button>

              </div>
              <div className="col-md-4 p-2 border">
                <h5> Contact Notes: </h5>
                <p className='p-0 m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ipsam. </p>
              </div>

            </div>

          </div>
          <div className="w-100 text-end mb-4">
            <button className='btn btn-primary mt-2'>Save Order</button>
          </div>
        </div>
      </div></div>
    </>
  );
};

export default UpdateNo;
