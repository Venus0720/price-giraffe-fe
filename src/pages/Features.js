import React from 'react';

import images from 'assets/images';

import Stacked from 'layout/Stacked';
import CommonHero from 'sections/Hero/CommonHero';
import LandingPageCTA from 'components/CTA/LandingPageCTA';

const Features = () => {
  return (
    <Stacked>
      <CommonHero
        header="Features"
        subtext="Get access to a variety of tools, metrics and alerts across various major marketplaces"
      />
      <div className="relative bg-white pt-16 pb-32 overflow-hidden">
        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Full Price Transparency
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Compare prices of over 500 million products across major
                    ecommerce websites in Singapore with a simple search.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
              <div className="pr-4 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-auto mx-auto rounded-xl lg:absolute lg:right-0 lg:h-full lg:max-w-none"
                  src={images.FeatureTransparency}
                  alt="Customer profile user interface"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-1">
              <div>
                <div className="mt-6 lg:text-right text-left">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Set Price Alerts
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Create real-time smart alerts to notify you whenever a
                    product has just been discounted.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 col-start-2">
              <div className="pr-4 sm:pr-6 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-auto rounded-xl lg:absolute lg:left-0 lg:h-full lg:max-w-none"
                  src={images.FeatureAlert}
                  alt="Set price alerts"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Analytics At A Glance
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Get access to vital ecommerce price analytics (including
                    historical data) all in one place.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
              <div className="pr-4 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-auto mx-auto rounded-xl lg:absolute lg:right-0 lg:h-full lg:max-w-none"
                  src={images.FeatureAnalytics}
                  alt="Customer profile user interface"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-1">
              <div>
                <div className="mt-6 lg:text-right text-left">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Always Free
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    PriceGiraffe’s price comparison tools are completely free to
                    use!
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 col-start-2">
              <div className="pr-4 sm:pr-6 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-auto rounded-xl lg:absolute lg:left-0 lg:h-full lg:max-w-none"
                  src={images.FeatureFree}
                  alt="Customer profile user interface"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <LandingPageCTA />
    </Stacked>
  );
};

export default Features;
