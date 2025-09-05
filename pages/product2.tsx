import React from 'react';
import Head from 'next/head';
import ProductDetail from '../src/components/ProductDetail';

export default function Product2Page() {
  return (
    <>
      <Head>
        <title>Nutriota Chromium Picolinate | 250 mcg (365 Tablets) | Premium Minerals | Nutriota</title>
        <meta name="description" content="Discover Nutriota Chromium Picolinate - a high-quality dietary supplement designed to support healthy blood sugar metabolism and energy production. 250mcg per tablet, 365 tablets per bottle." />
        <meta name="keywords" content="chromium picolinate, blood sugar support, energy metabolism, dietary supplement, Nutriota, minerals" />
      </Head>
      <ProductDetail 
        productId={2}
        amazonLink="https://www.amazon.fr/dp/B0DDLCNKVX"
        productImage="https://m.media-amazon.com/images/I/61shw96Kl9L.__AC_SX300_SY300_QL70_ML2_.jpg"
      />
    </>
  );
}
