import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/Cart.context'
import BusinessOptimaImage from '../assets/businessOptima.png'
import BusinessComfortImage from '../assets/businessComfort.jpg'
import BusinessFlexibleImage from '../assets/businessFlexible.png'
import BusinessFullFlexibleImage from '../assets/businessFullFlexible.jpg'

const BusinessClassPage = () => {
  const { addToCart, removeFromCart } = useContext(CartContext)
  return (
    <div className="business-class-page flex flex-col items-center justify-center h-screen">
      <h2 className="mb-8 text-3xl font-semibold">Seat Selection: </h2>

      <div className="image-container flex space-x-4">
        <Link to="/cart">
          <img
            src={BusinessOptimaImage}
            alt="Airline Example 1"
            className="airline-image"
          />
        </Link>
        <Link to="cart">
          <img
            src={BusinessComfortImage}
            alt="Airline Example 2"
            className="airline-image"
          />
        </Link>
        <Link to="/cart">
          <img
            src={BusinessFlexibleImage}
            alt="Airline Example 3"
            className="airline-image"
          />
        </Link>
        <Link to="/cart">
          <img
            src={BusinessFullFlexibleImage}
            alt="Airline Example 4"
            className="airline-image"
          />
        </Link>
      </div>

      <Link
        to="/cart"
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded"
      >
        View Cart
      </Link>
    </div>
  )
}

export default BusinessClassPage
