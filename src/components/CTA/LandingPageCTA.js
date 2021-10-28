const LandingPageCTA = () =>  {
  return (
    <div className="bg-gradient">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl text-gray-100 sm:text-4xl">The ultimate ecommerce <span className="inline-block"> analytics tool at your fingertips.</span></h2>
        </div>
        <div className="mt-8 lg:mt-0 w-96" >
          <div className="text-center text-gray-100 mb-3">
            <p>Be the first to get early access!</p>
          </div>
          <form className="sm:block">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email-address"
              type="email"
              autoComplete="email"
              required
              className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-pink-500 focus:border-pink-500 rounded-md"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow  sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Notify me
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LandingPageCTA