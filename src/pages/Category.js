import React, { useEffect, useLayoutEffect, useState } from 'react';
import { /* useHistory, */ useParams } from 'react-router-dom';
// import images from 'assets/images';
import UserProvider from 'contexts/User';
import Stacked from 'layout/Stacked';
import Breadcrumb from 'components/Breadcrumb/Breadcrumb';
import ProductGrid from 'components/Product/ProductGrid';
// import Input from 'components/Input/Input';
import ProductSort, { ProductSortItems } from 'components/Select/ProductSort';
import CategoryService from 'services/category';
import ProductService from 'services/product';

const Category = (/* { location } */) => {
  // const history = useHistory();
  const { categoryId } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [category, setCategory] = useState({});
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  // const keyword = new URLSearchParams(location.search).get('keyword') || '';
  const categorySvc = new CategoryService();
  const prodSvc = new ProductService();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    const params = fetchProductParams({
      categoryId,
      ...ProductSortItems[0].value
    });

    Promise.allSettled([
      fetchCategory(+categoryId),
      fetchProducts({ /* keyword, */ ...params })
    ]);
  }, []);

  async function fetchCategory(categoryId) {
    try {
      const category = await categorySvc.fetchOne(categoryId);
      setCategory(category);
    } catch (err) {
      setCategory({ name: 'Category not found' });
    }
  }

  async function fetchProducts(params) {
    setIsLoaded(false);

    try {
      const { data } = await prodSvc.fetchMany(params);

      setProducts(data.products);
      setTotal(data.total);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoaded(true);
    }
  }

  function onSortChange(sortParams) {
    const params = fetchProductParams({ ...sortParams, categoryId });
    return fetchProducts(params);
  }

  function fetchProductParams({ categoryId, sortBy, sortType }) {
    return {
      category_id: categoryId,
      sort_by: sortBy,
      sort_type: sortType
    };
  }

  // function onKeywordChange(keyword) {
  //   history.replace({ search: `?keyword=${keyword}` });
  // }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <UserProvider>
      <Stacked>
        <div className="min-h-screen bg-grey-background">
          <div className="bg-white">
            <div className="container h-64px flex items-center">
              <Breadcrumb text={category.name} />
            </div>
          </div>
          <div className="container pt-4 pb-8">
            <div className="flex items-center justify-between gap-4 mb-8">
              {/* <Input
                placeholder="Search your items"
                icon={images.SearchIcon}
                value={keyword}
                onChange={onKeywordChange}
              /> */}
              <div className="font-bold text-20px">Products ({total})</div>
              <div className="flex items-center gap-4">
                <div className="font-semibold text-sm">Sort by:</div>
                <ProductSort onChange={onSortChange} />
              </div>
            </div>
            <ProductGrid loading={!isLoaded} products={products} />
          </div>
        </div>
      </Stacked>
    </UserProvider>
  );
};

export default Category;
