import React, { useState, useEffect } from 'react'
import ProductGrid from 'components/Product/ProductGrid'
import ProductService from 'services/product'

const PopularProducts = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [products, setProducts] = useState([])
  const [error, setError] = useState('')
  const prodSvc = new ProductService()

  useEffect(() => {
    async function fetchProducts() {
      setIsLoaded(false)

      try {
        const { data } = await prodSvc.fetchMany({ keyword: 'apple' })
        setProducts(data.products)
        setIsLoaded(true)
      } catch (err) {
        setError(err)
      } finally {
        setIsLoaded(true)
      }
    }
    fetchProducts({ keyword: 'apple' })
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
