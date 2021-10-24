import Graph from './ExampleGraph'
import images from 'assets/images/'

const LandingPageGraph = () => {
  return (
    <div className="relative pt-16 sm:pt-24 lg:pt-32 lg:pb-32">
      <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-base font-semibold tracking-wider text-primary uppercase">Our Platform</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Fast, fresh & easy to use
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Use our platform and track individual products to uncover their trends. Make a better purchase decision by finding your best option
          </p>
        </div>
        <div className="mt-12">
          <img
            className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
            src={images.PriceGiraffeImg}
            alt=""
          />
          {/* <Graph /> */}
        </div>
      </div>
    </div>
  )
}

export default LandingPageGraph