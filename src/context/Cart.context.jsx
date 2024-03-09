/* eslint-disable react/prop-types */
import axios from 'axios'
import { createContext, useState, useEffect } from 'react'

const fetchingData = async () => {
  const response = await axios.get(`http://localhost:5005/api/flights/all`)
  const returnedData = response.data
  return returnedData
}

const CartContext = createContext(null)

const CartContextProvider = (props) => {
  const [initData, setInitData] = useState([])
  const [cart, setCart] = useState(getFlightDefaultCart())

  useEffect(() => {
    const fetchFlightData = async () => {
      const returnedData = await fetchingData()
      setInitData(returnedData)
    }
    fetchFlightData()
  }, [])

  function getFlightDefaultCart() {
    let cartWithId = {}
    for (let i = 0; i < initData.length; i++) {
      cartWithId[initData[i]._id] = 0
    }

    return cartWithId
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0

    for (const ticket in cart) {
      if (cart[ticket] > 0) {
        let ticketPrice

        switch (ticket) {
          case 'businessOptimaId':
            ticketPrice = 990
            break
          case 'businessComfortId':
            ticketPrice = 1100
            break
          case 'businessFlexibleId':
            ticketPrice = 1280
            break
          case 'businessFullFlexibleId':
            ticketPrice = 1480
            break
          default:
            break
        }

        totalAmount += ticketPrice * cart[ticket]
      }
    }

    return totalAmount
  }

  const getCartItems = () => {
    return Object.keys(cart).map((id) => {
      const item = initData.find((f) => f._id === id)
      return {
        ...item,
        quantity: cart[id],
      }
    })
  }

  const addToCart = (id) => {
    setCart({ ...cart, [id]: (cart[id] || 0) + 1 })
  }

  const removeFromCart = (id) => {
    setCart({ ...cart, [id]: (cart[id] || 0) - 1 })
  }

  const checkout = () => {
    setCart(getFlightDefaultCart())
  }

  const contextValue = {
    initData,
    cart,
    getCartItems,
    getTotalCartAmount,
    addToCart,
    removeFromCart,
    checkout,
  }

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  )
}

export { CartContext, CartContextProvider }
