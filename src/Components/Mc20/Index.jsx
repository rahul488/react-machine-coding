import React from 'react'
import { CartProvider } from './Context/CartProvider'
import Mc20 from './Mc20'

function Shoffy() {
  return (
   <CartProvider>
    <Mc20 />
   </CartProvider>
  )
}

export default Shoffy