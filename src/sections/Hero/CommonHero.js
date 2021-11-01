import React from 'react'

const CommonHero = (props) => {

  return (
        <div className="bg-secondary">
         <div className="mx-auto max-w-7xl py-32">
          <div className="text-center">
            <div className="max-w-xl mx-auto">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-100 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">{props.header}</span>{' '}
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {props.subtext}
            </p>
            </div>
          </div>
        </div>
        </div>
  )

}

export default CommonHero