import React, { useState, useEffect } from 'react'
import ProductGrid from 'components/Product/ProductGrid'
import ProductService from 'services/product'

const PopularProducts = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [products, setProducts] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const prodSvc = new ProductService()
    prodSvc
      .fetchMany({ keyword: 'apple' })
      .then((res) => {
        setProducts(res.data.products.splice(0, 10))
      })
      .catch((err) => {
        setError(err)
        console.log(error)
      })
      .finally(() => setIsLoaded(true))
  }, [])

  return (
    <div className="bg-gray-100">
      <div className="h-full max-w-7xl mx-auto">
        <div className="">
          <div className="container py-8">
            <div className="mb-5">
              <h2>Popular Products</h2>
            </div>
            <ProductGrid loading={!isLoaded} products={products} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularProducts
