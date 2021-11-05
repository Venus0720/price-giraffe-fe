import React, { useEffect, useLayoutEffect, useState } from 'react'
import UserProvider from 'contexts/User'
import Stacked from 'layout/Stacked'
import Breadcrumb from 'components/Breadcrumb/Breadcrumb'
import ProductGrid from 'components/Product/ProductGrid'
import ProductService from 'services/product'

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
      setProducts([])
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
