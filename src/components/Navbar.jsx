import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faBoxOpen, faClipboardList, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import '@fontsource/roboto';

const Navbar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <nav
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light background with some transparency
        position: 'sticky',
        top: '0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px', // Increased padding for more height
        height: '100px', // Additional height
        zIndex: '1',
        backdropFilter: 'blur(10px)',  // Apply backdrop filter for blur effect
        backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))'  // Apply linear gradient background
      }}
      className="p-4"
    >
      <div
        className="text-gray-800 font-bold text-2xl flex items-center justify-center"
        style={{
          fontFamily: "'Dancing Script', 'Playfair Display', cursive",
          fontWeight: 'bold',
          fontSize: '2rem',
          textAlign: 'center',
          marginBottom: '1rem',
        }}
      >
        <img 
          src="/home/imran/phse4/Shopify/src/assets/strapi-images/shopi.avif"  // Replace with the path to your logo image
          alt="" 
          className="w-12 h-12 mr-2"  // Adjust size and margin as needed
        />
        Shopify
      </div>

      <div className="flex items-center space-x-6">
        <button
          onClick={handleHomeClick}
          style={{
            fontFamily: "'Dancing Script', 'Playfair Display', cursive",
            fontWeight: 'bold',
            fontSize: '1.5rem', // Adjust font size as needed
            color: 'black', // Set color to match the links
            textAlign: 'center',
            background: 'none',
            border: 'none',
            marginBottom: '0rem',
          }}
          className="hover:text-black flex items-center"
        >
          Home
        </button>

        <Link
          to="/cart"
          style={{
            fontFamily: "'Dancing Script', 'Playfair Display', cursive",
            fontWeight: 'bold',
            fontSize: '1.5rem',
            color: 'black', // Set color to match the button
            textAlign: 'center',
          }}
          className="hover:text-black flex items-center"
        >
          
          Cart
        </Link>
        <Link
          to="/checkout"
          style={{
            fontFamily: "'Dancing Script', 'Playfair Display', cursive",
            fontWeight: 'bold',
            fontSize: '1.5rem',
            color: 'black', // Set color to match the button
            textAlign: 'center',
          }}
          className="hover:text-black flex items-center"
        >
          
          Checkout
        </Link>
        <Link
          to="/products"
          style={{
            fontFamily: "'Dancing Script', 'Playfair Display', cursive",
            fontWeight: 'bold',
            fontSize: '1.5rem',
            color: 'black', // Set color to match the button
            textAlign: 'center',
          }}
          className="hover:text-black flex items-center"
        >
         
          Products
        </Link>
        <Link
          to="/orders"
          style={{
            fontFamily: "'Dancing Script', 'Playfair Display', cursive",
            fontWeight: 'bold',
            fontSize: '1.5rem',
            color: 'black', // Set color to match the button
            textAlign: 'center',
          }}
          className="hover:text-black flex items-center"
        >
          
          Orders
        </Link>
        <Link
          to="/login"
          style={{
            fontFamily: "'Dancing Script', 'Playfair Display', cursive",
            fontWeight: 'bold',
            fontSize: '1.5rem',
            color: 'black', // Set color to match the button
            textAlign: 'center',
          }}
          
        >
          
          LogIn
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
