import React from 'react'

import { QuestionMarkCircleIcon } from '@heroicons/react/solid'
import { useForm } from 'react-hook-form'

import { useSelector } from 'react-redux'

// const user = {
//   platform_id: null,
//   avatar: null,
//   status: 'ACTIVE',
//   updated_at: '2021-11-03T08:06:56+00:00',
//   first_name: 'david',
//   display_name: null,
//   platform_type: null,
//   role: ['USER'],
//   created_at: '2021-10-18T07:06:29+00:00',
//   id: 2,
//   last_name: 'lim',
//   email: 'dlimsg@hotmail.com'
// }

const UpdateProfileForm = () => {
  const user = useSelector((state) => state.user || null)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  return (
    user && (
      <form action="#" method="POST">
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="bg-white py-6 px-4 sm:p-6">
            <div>
              <h2
                id="payment-details-heading"
                className="text-lg leading-6 font-medium text-gray-900"
              >
                Profile details
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Change your display information or update your email.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-6">
              <div className="col-span-4 sm:col-span-2">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  value={user.first_name}
                  disabled
                  autoComplete="cc-given-name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                />
              </div>

              <div className="col-span-4 sm:col-span-2">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  value={user.last_name}
                  disabled
                  autoComplete="cc-family-name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                />
              </div>
            </div>
          </div>
          {/* <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            className="bg-secondary border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-900"
          >
            Save
          </button>
        </div> */}
        </div>
      </form>
    )
  )
}
export default UpdateProfileForm
