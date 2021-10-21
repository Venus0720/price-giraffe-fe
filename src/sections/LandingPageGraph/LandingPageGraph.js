/* This example requires Tailwind CSS v2.0+ */
import { InboxIcon } from '@heroicons/react/outline'
import Graph from './ExampleGraph'

export default function Example() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols- lg:grid-flow-col-dense lg:gap-24">
          <div className="col-span-2 px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                  <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                 Rich data backlog 
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                    View historical price of any product over a period of up to 6 months
                </p>
           
              </div>
            </div>

          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 col-span-3">
            <div className="pl-4 lg:px-0 lg:m-0 lg:relative lg:h-full m-auto">
                <Graph /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
