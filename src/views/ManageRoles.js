import React, { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import './Home.css';
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';

const ManageRoles = () => {
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
                        <div className="page-title">Manage Roles</div>
                    </div>
                    <div className="add-user">

                        <button className='addbtn'>Add Users</button>
                    </div>

                </div>

                <div className="row pt-1">
                    <div className="col-md-8">
                    </div>
                    <div className="col-md-4">
                        <div className=" searchbar">
                            <input
                                className="search"
                                value={searchQuery}
                                onChange={handleInputChange}
                                placeholder="Search..."
                            />
                            <button className='searchbtn'>Search</button>
                        </div>
                    </div>

                </div>

                <div className="d-flex border mt-2" >
                    <div className="srno "><b>Sr.No</b> </div>
                    <div className="role "> <b>Role</b></div>

                    <div className="actions"> <b>ACTION</b> </div>
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
                                <div className="srno" >{product.orderNumber}</div>
                                <div className="role">{product.orderDate}</div>

                                <div className="actions">
                                    <Link to={`/order-details/${product.id}`}>
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
                                    </Link>
                                </div>
                            </div>
                        ))
                )}
            </div>
        </>
    );
};

export default ManageRoles;
