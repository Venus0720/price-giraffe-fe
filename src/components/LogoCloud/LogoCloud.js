import React from 'react'
import images from 'assets/images'

const LogoCloud = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Analyze prices from all major marketplaces in Singapore
          </h2>
        </div>
        <div className="flow-root mt-8 lg:mt-10">
          <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">

            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
              <img
                className="h-10"
                src={images.AmazonLogo}
                alt="Amazon"
              />
            </div>
            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
              <img
                className="h-10"
                src={images.AliExpressLogo}
                alt="Aliexpress"
              />
            </div>
            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
              <img
                className="h-10"
                src={images.LazadaLogo}
                alt="Lazada"
              />
            </div>
            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
              <img
                className="h-10"
                src={images.ShopeeLogo}
                alt="Shopee"
              />
            </div>
            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
              <img
                className="h-10"
                src={images.CarousellLogo}
                alt="Carousell"
              />
            </div>
            <div className="mt-3 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
              <img
                className="h-12"
                src={images.Qoo10Logo}
                alt="Qoo10"
              />
            </div>
            <div className="mt-3 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
              <img
                className="h-12"
                src={images.EbayLogo}
                alt="Ebay"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogoCloud;
