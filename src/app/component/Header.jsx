// import React from 'react'
// import { TiShoppingCart } from "react-icons/ti";
// import Link from 'next/link';
// import Button from '../Button';
// export default function Header() {  
//   let Links =[
//     {name:'Home',Link:''},
//     {name:'Shop',Link:'/'},
//     {name:'Features',Link:'/#'},
//     {name:'Contact',Link:'/#'}
//   ]
//   return (
//     <div className='shadow-md w-full top-0 left-0 z-40'>
//       <div className='md:flex items-center justify-between  py-4 md:px-10 px-7'>
//         <div className='font-bold text-2xl cursor-pointer flex items-center'>
//           Taiwo 
//         </div>
//         <ul className='md:flex md:items-center'>
//          {
//           Links.map((link) => (
//             <li key={link.name} className='md:ml-8 text-xl'>
//               <a href={link.link} className='text-gray-800 hover:text-indigo-600 duration-500 font-bold'>{link.name}</a>
//             </li>
//           ))
//          }
//            <span className='text-3xl text-indigo-600 ml-96 pt-2'>
//             <TiShoppingCart/>
//           </span>
//           <Link href='login'>
//          <Button>
//           Login
//          </Button>
//          </Link>
//         </ul>
//       </div>
//     </div>
//   )
// // }

// import React from 'react'

// export default function Header() {
//   return (
//     <div>
//       <div className='font-bold text-2xl'>
//         Taiwo
//         <div className='flex justify-center'>
//           <p>Home</p>
//           <p>Shop</p>
//           <p>Features</p>
//           <p>Contact</p>
//         </div>
//         </div>
//     </div>
//   )
// }


"use client"
import { useState } from 'react';
import Link from 'next/link';
import { TiShoppingCart } from "react-icons/ti";
import Button from '../Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black font-bold text-2xl">
          <Link href="/">Taiwo</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-20 h-20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
          <Link href="/">
            <p className="block md:inline-block text-black px-3 py-7 rounded  font-bold">Home</p>
          </Link>
          <Link href="/">
            <p className="block md:inline-block text-black px-3 py-7 rounded  font-bold">Shop</p>
          </Link>
          <Link href="/">
            <p className="block md:inline-block text-black px-3 py-7 rounded  font-bold">Features</p>
          </Link>
          <Link href="/contact">
            <p className="block md:inline-block text-black px-3 py-7 rounded font-bold">Contact</p>
          </Link>
          <span className='text-3xl text-indigo-600 ml-96 pt-7'>
            <Link href='cart'>
             <TiShoppingCart/>
             </Link>
          </span>
          <Link href='login' className='mt-7'>
          <Button>
          Login
          </Button>
          </Link>
       </div>

      </div>
    </nav>
  );
}

