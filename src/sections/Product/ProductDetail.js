import { BellIcon } from '@heroicons/react/outline';
import { useContext } from 'react';
import { UserContext } from 'contexts/User';
import ProductFavorite from 'components/Product/ProductFavorite'
import ProductImages from 'components/Product/ProductImages';
import ProductPriceBox from 'components/Product/ProductPriceBox';
import { fnDefault } from 'helpers';

export default function ProductDetail({ product = {}, onSetAlert = fnDefault }) {
  const [state] = useContext(UserContext);

  function setAlert() {
    if (!state.loggedIn) {
      return alert('You must login first!');
    }

    onSetAlert(product);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-9">
      <div className="relative md:col-span-5 xl:col-span-3">
        <ProductImages images={product.images || []} />
        <ProductFavorite
          productId={product.id}
          isFavorite={product.is_favor}
          top="top-18px"
          right="right-14px"
        />
      </div>
      <div className="md:col-span-7 xl:col-span-6">
        <div className="font-semibold text-20px mb-3">
          {product.product_name}
        </div>
        <div className="font-normal text-sm mb-6">{product.description}</div>
        <div className="grid xl:inline-grid grid-cols-2 xl:grid-cols-4 gap-x-14px gap-y-9px mb-3">
          <ProductPriceBox
            active
            text="Average Price"
            price={`$${product.avg_price}`}
          />
          <ProductPriceBox
            text="Lowest Price"
            price={`$${product.min_price}`}
          />
          <ProductPriceBox
            text="Highest Price"
            price={`$${product.max_price}`}
          />
          <ProductPriceBox
            text="No of Sellers"
            price={product.number_sellers}
          />
        </div>
        <button className="w-full xl:w-max bg-secondary p-4 rounded-lg font-bold text-13px tracking-normal text-white flex items-center justify-center md:justify-start gap-2" onClick={setAlert}>
          <span className="w-22px h-22px md:w-18px md:h-18px">
            <BellIcon />
          </span>
          <span>Set Price Alert</span>
        </button>
      </div>
    </div>
  );
}
