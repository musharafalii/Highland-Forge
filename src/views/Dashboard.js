import React, { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import './Home.css';
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Dashboard = () => {
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
                        <div className="page-title">Escalated orders</div>
                    </div>
                    <div className="searchbar">
                        <input
                            className="search"
                            value={searchQuery}
                            onChange={handleInputChange}
                            placeholder="Search..."
                        />
                        <button>Search</button>
                    </div>
                </div>
                <hr />
                <div className="content-bar" >
                    <div className="itemnum"><b>Order Number</b> </div>
                    <div className="itemtitle"> <b>Order Date</b></div>
                    <div className="itemprice"> <b>Escalation Reason</b></div>
                    <div className="itemstock"> <b>Parts Ordered</b> </div>
                    <div className="btncontainer"> <b>ACTION</b> </div>
                </div>

                {products.length === 0 ? (
                    <div className="not-found pt-4  text-black">No matching products found</div>
                ) : (
                    products
                        .filter((product) =>
                            product.escalationReason.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((product) => (
                            <div className="content-bar" key={product.id}>
                                <div className="itemnum" >{product.orderNumber}</div>
                                <div className="itemtitle">{product.orderDate}</div>
                                <div className="itemprice" >{product.escalationReason}</div>
                                <div className="itemstock">{product.partsOrdered}</div>
                                <div className="btncontainer">
                                    <Link to={`/order-details/${product.id}`}>
                                        <button className="bg-primary updatebtn" onClick={() => handleProductClick(product.id)}>
                                            Update Order
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

export default Dashboard;
