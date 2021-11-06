import React, { useEffect, useLayoutEffect, useState } from 'react'
import UserProvider from 'contexts/User'
import Stacked from 'layout/Stacked'
import Breadcrumb from 'components/Breadcrumb/Breadcrumb'
import ProductGrid from 'components/Product/ProductGrid'
import ProductService from 'services/product'

const x = [
  {
    category_id: 10,
    updated_at: '2021-11-06T08:16:25+00:00',
    id: 474400,
    thumbnail:
      'https://my-test-11.slatic.net/p/4f0587488129084b3e45cd17fd12d2aa.jpg',
    min_price: 42.0,
    brand: 'Globber',
    created_at: '2021-10-22T18:17:47+00:00',
    number_sellers: 1,
    all_platforms: ['Shopee'],
    avg_price: 42.0,
    max_price: 42.0,
    product_name:
      'SPIGEN Band for Apple Watch [Modern Fit Band] 45mm / 44mm / 42mm Apple Watch stainless steel black Band / Apple Watch Band / Apple Watch Strap / Apple Watch 7 Band / Apple Watch 7 Strap / Apple Watch 6 Band / Apple Watch SE Band',
    is_favor: false
  },
  {
    category_id: 13,
    updated_at: '2021-11-06T07:56:22+00:00',
    id: 446072,
    thumbnail:
      'https://my-test-11.slatic.net/p/65a1c06189a00383e764e96fe8fd1fee.jpg',
    min_price: 24.0,
    brand: null,
    created_at: '2021-10-22T18:01:27+00:00',
    number_sellers: 1,
    all_platforms: ['Qoo10'],
    avg_price: 24.0,
    max_price: 24.0,
    product_name:
      'SPIGEN Band for All Apple Watch [Lite Fit Band] Flexible and Soft Nylon Band / Apple Watch 7 Band / Apple Watch 7 Strap / Apple Watch 6 Band / Apple Watch 6 Strap / Apple Watch 5 Band / Apple Watch 5 Strap',
    is_favor: false
  },
  {
    category_id: 13,
    updated_at: '2021-11-03T18:05:08+00:00',
    id: 390909,
    thumbnail:
      'https://my-test-11.slatic.net/p/3c29eb5ec4ce67ff2b21314c4d54ab99.jpg',
    min_price: 18.0,
    brand: null,
    created_at: '2021-10-22T17:32:15+00:00',
    number_sellers: 1,
    all_platforms: ['Qoo10'],
    avg_price: 18.0,
    max_price: 18.0,
    product_name:
      'SPIGEN (44mm) Apple Watch SE / 6 / 5 / 4 Case [Original] Durable Hard PC Slim Profile Matte Finish Design [Thin Fit] Apple Watch 44mm Case / Apple Watch 6 Case / Apple Watch SE Case / Apple Watch 5 Case / Apple Watch 4 Case',
    is_favor: false
  },
  {
    category_id: 13,
    updated_at: '2021-11-06T08:06:21+00:00',
    id: 446082,
    thumbnail:
      'https://laz-img-sg.alicdn.com/p/fbdb48d6a48a6790e18b31f1100575ef.jpg',
    min_price: 32.0,
    brand: null,
    created_at: '2021-10-22T18:01:27+00:00',
    number_sellers: 1,
    all_platforms: ['Qoo10'],
    avg_price: 32.0,
    max_price: 32.0,
    product_name:
      'SPIGEN (44mm) Case for Apple Watch SE / 6 / 5 / 4 / 3 / 2 / 1 [Nano Pop] Case and Starp Unibody design with stylish dual color / Apple Watch Case / Apple Watch SE Case / Apple Watch 6 Case / Apple Watch 5 Case / Apple Watch 4 Case',
    is_favor: false
  },
  {
    category_id: 8,
    updated_at: '2021-11-06T08:16:27+00:00',
    id: 383569,
    thumbnail:
      'https://my-test-11.slatic.net/p/b35b309e121f3fc4592e2ee0db3467f8.jpg',
    min_price: 30.0,
    brand: null,
    created_at: '2021-10-22T17:28:43+00:00',
    number_sellers: 1,
    all_platforms: ['Shopee'],
    avg_price: 30.0,
    max_price: 30.0,
    product_name:
      'SPIGEN (40mm / 44mm) Apple Watch SE / 6 / 5 / 4 Case [Original] with Carbon Fiber Design [Rugged Armor Pro] Flexible and Durable Shock Absorption Compatible with Apple Watch SE Case  / Apple Watch 6 Case / Apple Watch 5 Case / Apple Watch 4 Case',
    is_favor: false
  },
  {
    category_id: 13,
    updated_at: '2021-10-22T18:21:40+00:00',
    id: 480731,
    thumbnail:
      'https://my-test-11.slatic.net/p/b9f7c9be775ddc934e6e897172a5411b.jpg',
    min_price: 2.48,
    brand: 'No Brand',
    created_at: '2021-10-22T18:21:39+00:00',
    number_sellers: 1,
    all_platforms: ['Lazada'],
    avg_price: 2.48,
    max_price: 2.48,
    product_name:
      'Apple watch Band Nylon loop For Apple watch series 6/5/4/3/2/1,Apple watch se Strap for 38mm/40mm/42mm/44mm dial Breathable Sports Apple Watch Strap Soft Replacement strap Newest colors Apple Watch S6 Strap Nylon Watch Strap',
    is_favor: false
  },
  {
    category_id: 12,
    updated_at: '2021-11-06T02:30:31+00:00',
    id: 1116398,
    thumbnail: 'https://cf.shopee.sg/file/0ae6bd2a9877b6844ce3eb53c9a11188_tn',
    min_price: 17.99,
    brand: null,
    created_at: '2021-10-23T02:35:48+00:00',
    number_sellers: 1,
    all_platforms: ['Shopee'],
    avg_price: 17.99,
    max_price: 17.99,
    product_name:
      'Apple Watch strap.  Apple Watch band. Apple Watch Metal Watch Band. Suitable for Apple Watch series SE.6.5.4.3.2.1 (compatible with Apple Watch 38mm/40mm/42mm/44mm)',
    is_favor: false
  },
  {
    category_id: 13,
    updated_at: '2021-11-06T00:46:05+00:00',
    id: 1133601,
    thumbnail: 'https://cf.shopee.sg/file/7e75d0397cec6e6df2a2711da089f713_tn',
    min_price: 8.99,
    brand: 'evo',
    created_at: '2021-10-23T02:53:22+00:00',
    number_sellers: 2,
    all_platforms: ['Toys R Us - Singapore'],
    avg_price: 10.99,
    max_price: 12.99,
    product_name:
      'Apple Watch strap. Apple Watch strap. Apple Watch metal watch strap / high-quality zinc alloy strap. Suitable for Apple Watch series SE.6.5.4.3.2.1 (for Apple Watch38mm/40mm/42mm/44mm)',
    is_favor: false
  }
]

const Search = ({ location }) => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [products, setProducts] = useState([])
  const [total, setTotal] = useState(0)
  const keyword = new URLSearchParams(location.search).get('keyword')

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })

  useEffect(() => {
    if (!keyword) {
      setProducts(x)
      setIsLoaded(true)
      return
    }

    const prodSvc = new ProductService()
    prodSvc
      .fetchMany({ keyword })
      .then((res) => {
        setProducts(res.data.products)
        setTotal(res.data.total)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => setIsLoaded(true))
  }, [keyword])

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <UserProvider>
      <Stacked>
        <div className="bg-gray-100">
          <div className="min-h-screen max-w-7xl mx-auto">
            <div className="">
              <div className="container h-64px flex items-center">
                <Breadcrumb text="Search" />
              </div>
              {keyword && (
                <div className="container h-80px flex items-center">
                  <div className="font-semibold text-20px">
                    You searched for "{keyword}"
                  </div>
                </div>
              )}
            </div>
            <div className="">
              <div className="container py-8">
                <div className="font-bold text-20px mb-22px">
                  Products ({total})
                </div>
                <ProductGrid loading={!isLoaded} products={products} />
              </div>
            </div>
          </div>
        </div>
      </Stacked>
    </UserProvider>
  )
}

export default Search
