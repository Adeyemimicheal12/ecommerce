// pages/index.js
import Head from 'next/head';
import Link from 'next/link';

const products = [
  { id: 1, name: 'Product 1', price: '$100.00', image: '/product1.jpg' },
  { id: 2, name: 'Product 2', price: '$200.00', image: '/product2.jpg' },
  { id: 3, name: 'Product 3', price: '$300.00', image: '/product3.jpg' },
  { id: 4, name: 'Product 4', price: '$400.00', image: '/product4.jpg' },
  { id: 5, name: 'Product 5', price: '$500.00', image: '/product5.jpg' },
  { id: 6, name: 'Product 6', price: '$600.00', image: '/product6.jpg' },
  { id: 7, name: 'Product 7', price: '$700.00', image: '/product7.jpg' },
  { id: 8, name: 'Product 8', price: '$750.00', image: '/product8.jpg' },
  { id: 9, name: 'Product 9', price: '$800.00', image: '/product9.jpg' },
  { id: 10, name: 'Product 10', price: '$800.00', image: '/product10.jpg' },
  { id: 11, name: 'Product 11', price: '$600.00', image: '/product11.jpg' },
  { id: 12, name: 'Product 12', price: '$830.00', image: '/product12.jpg' },
  { id: 13, name: 'Product 13', price: '$850.00', image: '/product13.jpg' },
  { id: 14, name: 'Product 14', price: '$1000.00', image: '/product14.jpg' },
  { id: 15, name: 'Product 15', price: '$900.00', image: '/product15.jpg' },
  // Add more products as needed
];

export default function Home() {
  return (
    <div>
      <div className="container mx-auto py-8 bg-black text-white">
        <h1 className="text-4xl font-bold mb-8 text-center">Product Listing</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="border p-4 rounded-lg shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
              <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
              <p className="text-xl mb-4">{product.price}</p>
              <Link href={`/product/${product.id}`}>
                <p className="text-indigo-600 hover:text-indigo-800">View Product</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// // pages/index.js
// import Head from 'next/head';
// import Link from 'next/link';
// import { useCart } from './cart/page';

// const products = [
//   { id: 1, name: 'Product 1', price: 10.00, image: '/product1.jpg' },
//   { id: 2, name: 'Product 2', price: 20.00, image: '/product2.jpg' },
//   // Add more products as needed
// ];

// export default function Home() {
//   const { addToCart } = useCart(false);

//   return (
//     <div>
//       <Head>
//         <title>E-commerce Site</title>
//         <meta name="description" content="An e-commerce site created with Next.js and Tailwind CSS" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <div className="container mx-auto py-8">
//         <h1 className="text-4xl font-bold mb-8 text-center">Product Listing</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.map(product => (
//             <div key={product.id} className="border p-4 rounded-lg shadow-lg">
//               <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
//               <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
//               <p className="text-xl mb-4">${product.price.toFixed(2)}</p>
//               <button
//                 onClick={() => addToCart(product)}
//                 className="text-white bg-indigo-600 hover:bg-indigo-800 px-4 py-2 rounded"
//               >
//                 Add to Cart
//               </button>
//               <Link href={`/product/${product.id}`}>
//                 <a className="text-indigo-600 hover:text-indigo-800 ml-4">View Product</a>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
