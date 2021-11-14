import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserProvider from 'contexts/User';
import Stacked from 'layout/Stacked';
import AlertLimitModal from 'components/Alert/AlertLimitModal';
import BreadcrumbBlock from 'components/Breadcrumb/BreadcrumbBlock';
import ProductConfirmAlertModal from 'components/Product/ProductConfirmAlertModal';
import ProductInfo from 'components/Product/ProductInfo';
import ProductPriceHistory from 'components/Product/ProductPriceHistory';
import ProductSellers from 'components/Product/ProductSellers';
import Tabs from 'components/Tab/Tabs';
import ProductDetail from 'sections/Product/ProductDetail';
import ProductSimilarList from 'sections/Product/ProductSimilarList';
import ProductService from 'services/product';

export default function Product() {
  const productId = +useParams().productId;
  const [category, setCategory] = useState({});
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openLimitModal, setOpenLimitModal] = useState(false);
  const prodSvc = new ProductService();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    fetchProduct(productId);
  }, []);

  async function fetchProduct(productId) {
    setIsLoaded(false);
    try {
      const { data } = await prodSvc.fetchOne(productId);
      const product = data.product;
      setCategory(product.category || {});
      setProduct(product);
      setIsLoaded(true);
    } catch (error) {
      setError(error);
    }
  }

  async function setAlert(productId) {
    try {
      await prodSvc.addAlert(productId);
    } catch (err) {
      if (err.status === 422) {
        return setOpenLimitModal(true);
      }

      if (err.status === 409) {
        return alert('The price alert has been set!');
      }

      alert(err.message);
    }
  }

  function onSetAlert() {
    setOpenModal(true);
  }

  function onConfirmSetAlert() {
    setOpenModal(false);
    setTimeout(() => setAlert(productId), 300);
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <UserProvider>
      <Stacked>
        <BreadcrumbBlock
          items={[
            { name: category.name, path: `/categories/${category.id}` },
            { name: product.brand }
          ]}
          className="mb-3"
        />
        <div className="container mb-12">
          <ProductDetail product={product} onSetAlert={onSetAlert} />
        </div>
        <Tabs
          tabs={[
            { name: 'Prices', content: <ProductSellers product={product} /> },
            {
              name: 'Product Info',
              content: <ProductInfo product={product} />
            },
            { name: 'Price History', content: <ProductPriceHistory /> }
          ]}
        />
        <ProductSimilarList productId={product.id} />
        <ProductConfirmAlertModal
          product={product}
          open={openModal}
          onConfirm={onConfirmSetAlert}
          onClose={() => setOpenModal(false)}
        />
        <AlertLimitModal open={openLimitModal} onClose={() => setOpenLimitModal(false)} />
      </Stacked>
    </UserProvider>
  );
}
