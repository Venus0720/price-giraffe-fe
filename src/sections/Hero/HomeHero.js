import React, { useState, useEffect } from 'react'
import { SearchIcon } from '@heroicons/react/solid'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

import images from 'assets/images'

const HomeHero = () => {
  const { register, handleSubmit } = useForm({ mode: 'onSubmit' })

  const history = useHistory()
  const searchSubmit = (items) => {
    history.push(`/search?keyword=${items.search}`)
  }

  return (
    <div className="bg-white">
      <div>
        {/* Hero card */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="max-w-full">
            <div className="relative">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src={images.HomeHeroImg}
                  alt="People working on laptops"
                />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <div className="max-w-3xl mx-auto">
                  <div className="rounded-lg bg-white shadow-lg px-12 py-8">
                    <div className="mb-5">
                      <h1 className="text-5xl text-gray-700 leading-tight">
                        Every Ecommerce Platform with just{' '}
                        <span className="text-primary">ONE Search</span>
                      </h1>
                      <div className="mt-2">
                        <p className="text-gray-600 text-lg">
                          Compare prices of more than 500 million products!
                        </p>
                      </div>
                    </div>
                    <form onSubmit={handleSubmit(searchSubmit)}>
                      <div className="flex">
                        <div className="flex-grow">
                          <div className="relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <SearchIcon
                                className="h-6 w-6 text-gray-400"
                                aria-hidden="true"
                              />
                            </div>
                            <input
                              type="search"
                              name="search"
                              id="search"
                              {...register('search', {
                                required: 'enter a search'
                              })}
                              className="h-12 focus:ring-pink-500 focus:border-pink-500 block w-full pl-11 sm:text-sm border-gray-300 rounded-md"
                              placeholder="What are you looking for today?"
                            />
                          </div>
                        </div>
                        <div className="mt-0 sm:flex-shrink-0 sm:flex sm:items-center ml-4">
                          <button className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm font-medium rounded-md text-white bg-primary hover:bg-pink-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:text-sm">
                            Search
                          </button>
                        </div>
                      </div>
                    </form>

                    <div className="mt-4">
                      <div className="mt-0">
                        <p className="text-gray-700">Find products from:</p>
                      </div>
                      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                        <div className="col-span-1 flex justify-center px-1 py-1">
                          <img
                            src={images.LazadaLogo}
                            alt="Lazada"
                            className="max-h-12"
                          />
                        </div>
                        <div className="col-span-1 flex justify-center px-1 py-1">
                          <img
                            src={images.ShopeeLogo}
                            alt="Shopee"
                            className="max-h-12"
                          />
                        </div>
                        <div className="col-span-1 flex justify-center px-1 py-1">
                          <img
                            src={images.CarousellLogo}
                            alt="Carousell"
                            className="max-h-12"
                          />
                        </div>
                        <div className="col-span-1 flex justify-center px-1 py-1">
                          <img
                            src={images.AmazonLogo}
                            alt="Amazon"
                            className="max-h-12"
                          />
                        </div>
                        <div className="col-span-1 flex justify-center px-1 py-1">
                          <img
                            src={images.EbayLogo}
                            alt="Ebay"
                            className="max-h-12"
                          />
                        </div>
                        <div className="col-span-1 flex justify-center px-1 py-1">
                          <img
                            src={images.Qoo10Logo}
                            alt="Qoo10"
                            className="max-h-12"
                          />
                        </div>
                        <div className="col-span-1 flex justify-center px-1 py-1">
                          <img
                            src={images.AliExpressLogo}
                            alt="AliExpress"
                            className="max-h-12"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHero
