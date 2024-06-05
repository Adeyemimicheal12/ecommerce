// pages/cart.js
import Head from 'next/head';
import Link from 'next/link';

const cartItems = [
//   { id: 1, name: 'Product 1', price: '$10.00', quantity: 2 },
  // Add more cart items as needed
];

export default function Cart() {
  return (
    <div>
      <Head>
        <title>Shopping Cart</title>
        <meta name="description" content="Shopping cart page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 gap-8">
            {cartItems.map(item => (
              <div key={item.id} className="border p-4 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
                <p className="text-xl mb-4">{item.price}</p>
                <p className="text-xl mb-4">Quantity: {item.quantity}</p>
              </div>
            ))}
          </div>
        )}
        <div className="text-center mt-8">
          <Link href="/">
            <p className="text-indigo-600 hover:text-indigo-800">Continue Shopping</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

// context/CartContext.js
// "use client"
// import { createContext, useState, useContext } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existingProduct = prevCart.find((item) => item.id === product.id);
//       if (existingProduct) {
//         return prevCart.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       return [...prevCart, { ...product, quantity: 1 }];
//     });
//   };

//   const updateQuantity = (productId, quantity) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === productId ? { ...item, quantity } : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, updateQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
