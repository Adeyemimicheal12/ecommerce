// pages/product/[id].js
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

const product = { id: 1, name: 'Product 1', price: '$10.00', description: 'This is a great product.', image: '/product1.jpg' };

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Fetch the product details based on the id, for now we use a static product
  return (
    <div>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto py-8">
        <Link href="/">
          <a className="text-indigo-600 hover:text-indigo-800 mb-8 inline-block">Back to Products</a>
        </Link>
        <div className="flex flex-col md:flex-row">
          <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-64 object-cover rounded-lg" />
          <div className="md:ml-8 mt-4 md:mt-0">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-semibold mb-4">{product.price}</p>
            <p className="mb-4">{product.description}</p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-800">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
