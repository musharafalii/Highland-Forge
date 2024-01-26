import React, { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import './Home.css';
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';

const ManageUsers = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, []);

  const handleProductClick = async (productId) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${productId}`);
      const data = await response.json();
      setSelectedProduct(data);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  return (
    <>
      <div className="main-div">
        <div className="main_dashborad">
          <div className="titlebar">
            <div className="page-title">Manage Users</div>
          </div>
          <div className="useradd-user">

            <button className='useraddbtn'>Add Users</button>
          </div>

        </div>
        <div className="border pt-1">
          <div className="row ">
            <div className="col-md-8">
            </div>
            <div className="col-md-4">
              <div className=" usersearchbar">
                <input
                  className="search"
                  value={searchQuery}
                  onChange={handleInputChange}
                  placeholder="Search..."
                />
                <button className='usersearchbtn'>Search</button>
              </div>
            </div>

          </div>

          <div className="d-flex border mt-2" >
            <div className="usersrno "><b>Sr.No</b> </div>
            <div className="username "> <b>User Name</b></div>
            <div className="usermail "><b>User Email</b> </div>
            <div className="usercontact "> <b>User Contact</b></div>
            <div className="userrole "> <b>Role</b></div>
            <div className="userstatus "><b>Status</b> </div>
            <div className="useractions"> <b>ACTION</b> </div>
          </div>

          {products.length === 0 ? (
            <div className="not-found pt-4  text-black">No matching products found</div>
          ) : (
            products
              .filter((product) =>
                product.escalationReason.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((product) => (
                <div className="d-flex m-0 p-0" key={product.id}>

                  <div className="usersrno ">{product.orderNumber} </div>
                  <div className="username ">{product.orderNumber}</div>
                  <div className="usermail ">{product.orderNumber} </div>
                  <div className="usercontact ">{product.orderNumber}</div>
                  <div className="userrole ">{product.orderNumber}</div>
                  <div className="userstatus "><b>{product.orderNumber}</b> </div>
                  <div className="useractions"> <b>   <Link to={`/order-details/${product.id}`}>
                    <button className="border-0" onClick={() => handleProductClick(product.id)}>
                      <div class="dropdown ">
                        <button class="btn bg-primary text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          ...
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark bg-primary">
                          <li><a class="dropdown-item active" href="#">View</a></li>
                          <li><a class="dropdown-item" href="#">Edit</a></li>
                          <li><a class="dropdown-item" href="#">Delete</a></li>


                        </ul>
                      </div>
                    </button>
                  </Link></b> </div>

                </div>
              ))
          )}

        </div>
      </div>
    </>
  );
};

export default ManageUsers;
