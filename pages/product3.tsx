import React from 'react';
import Head from 'next/head';
import ProductDetail from '../src/components/ProductDetail';

export default function Product3Page() {
  return (
    <>
      <Head>
        <title>Nutriota Alpha Lipoic Acid | 500 mg (180 Capsules) | Premium Supplements | Nutriota</title>
        <meta name="description" content="Discover Nutriota Alpha Lipoic Acid - a powerful antioxidant supplement that supports cellular energy production and helps combat oxidative stress. 500mg per capsule, 180 capsules per bottle." />
        <meta name="keywords" content="alpha lipoic acid, antioxidant, cellular energy, oxidative stress, dietary supplement, Nutriota, supplements" />
      </Head>
      <ProductDetail 
        productId={3}
        amazonLink="https://www.amazon.fr/dp/B08XQLJ78K"
        productImage="https://m.media-amazon.com/images/I/61dx-e6SnyL.__AC_SX300_SY300_QL70_ML2_.jpg"
      />
    </>
  );
}
