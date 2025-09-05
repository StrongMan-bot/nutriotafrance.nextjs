import React from 'react';
import Head from 'next/head';
import ProductDetail from '../src/components/ProductDetail';

export default function Product1Page() {
  return (
    <>
      <Head>
        <title>Nutriota Propolis | 1000 mg (120 Tablets) | Premium Supplements | Nutriota</title>
        <meta name="description" content="Discover Nutriota Propolis - a high-quality dietary supplement with natural propolis extract. 1000mg per tablet, 120 tablets per bottle. Supports immune system and overall wellness." />
        <meta name="keywords" content="propolis, immune support, natural supplement, dietary supplement, Nutriota, supplements" />
      </Head>
      <ProductDetail 
        productId={1}
        amazonLink="https://www.amazon.fr/dp/B08911KNXN"
        productImage="https://m.media-amazon.com/images/I/61A6d2CFcWL._AC_SX522_.jpg"
      />
    </>
  );
}
