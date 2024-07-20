import React from 'react';
import { useNavigate } from 'react-router-dom';

function ShoppingCart({ cart, removeFromCart }) {
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  const handleCheckoutClick = () => {
    // Navigate to the checkout page
    navigate('/checkout');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
      <h2
  className="text-2xl text-gray-800"
  style={{
    fontFamily: "'Dancing Script', 'Playfair Display', cursive",
    fontWeight: 'bold',
    fontSize: '3rem',
    textAlign: 'center',
    marginBottom: '3rem'  // Set margin-bottom to 3rem
  }}
>
  Shopping Cart
</h2>

      <div className="space-y-6 mb-8">
        {cart.map((item, index) => (
          <div key={index} className="flex justify-between items-center pb-4 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <span className="text-gray-700">{item.name}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:text-red-800 font-semibold"
              >
                Remove
              </button>
            </div>
            <span className="font-semibold text-gray-800">${item.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold text-gray-800">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Shipping</span>
          <span className="font-semibold text-gray-800">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
        </div>
      </div>
      <div className="flex justify-between items-center font-bold text-lg mt-6 pt-6 border-t border-gray-200">
        <span className="text-gray-800">Total</span>
        <span className="text-gray-800">${total.toFixed(2)}</span>
      </div>
      <button
        onClick={handleCheckoutClick}
        className="w-full bg-teal-500 text-white px-6 py-4 rounded-lg font-semibold mt-8 hover:bg-teal-600 transition duration-300 ease-in-out transform hover:scale-105"
      >
        CHECKOUT
      </button>
    </div>
  );
}

export default ShoppingCart;
