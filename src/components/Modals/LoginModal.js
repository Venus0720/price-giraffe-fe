import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { Dialog, Transition } from '@headlessui/react'
import { useSelector, useDispatch } from 'react-redux'

import { loginUser } from 'reducers/userReducer'
import ErrorAlert from 'components/Alerts/ErrorAlert'
import { toggleModal } from 'reducers/modalReducer'
import { setNotificationMessage } from 'reducers/notificationReducer'
import images from 'assets/images'

const LoginModal = () => {
  const modal = useSelector((state) => state.modal === 'LOGIN' || null)
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: 'onSubmit' })

  const onFormSubmit = async (credentials) => {
    try {
      dispatch(loginUser(credentials))
      dispatch(toggleModal())
      dispatch(setNotificationMessage('Successfully logged in!'))
    } catch (err) {
      console.log(err)
      dispatch(setNotificationMessage(err))
    }
  }

  const errorsArray = Object.keys(errors).map((key) => errors[key].message)

  return (
    modal && (
      <Transition.Root show={modal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={() => dispatch(toggleModal())}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom overflow-hidden transform transition-all  sm:align-middle sm:w-full sm:max-w-xl">
                <div className="min-h-full flex flex-col justify-center">
                  <div className="sm:mx-auto sm:w-full sm:max-w-xl">
                    <div className="bg-white py-8 px-4 shadow rounded-lg sm:px-10 text-left">
                      <div className="mx-auto mb-6">
                        <img
                          className="block h-32 mx-auto"
                          src={images.PriceGiraffeLogoBlueTextBelow}
                          alt=""
                        />
                      </div>
                      {errorsArray.length > 0 && (
                        <ErrorAlert errors={errorsArray} />
                      )}
                      <form
                        className="space-y-6 mt-6"
                        onSubmit={handleSubmit(onFormSubmit)}
                      >
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email address
                          </label>
                          <div className="mt-1">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              {...register('email', {
                                required: 'Please enter your email',
                                pattern: {
                                  value:
                                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                  message: 'Please enter a valid email'
                                }
                              })}
                              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Password
                          </label>
                          <div className="mt-1">
                            <input
                              id="password"
                              name="password"
                              type="password"
                              {...register('password', {
                                required: 'Please enter your password'
                              })}
                              autoComplete="current-password"
                              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input
                              id="remember-me"
                              name="remember-me"
                              type="checkbox"
                              className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                            />
                            <label
                              htmlFor="remember-me"
                              className="ml-2 block text-sm text-gray-900"
                            >
                              Remember me
                            </label>
                          </div>

                          <div className="text-sm">
                            <a
                              href="#"
                              className="font-medium text-primary hover:text-pink-500"
                            >
                              Forgot your password?
                            </a>
                          </div>
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Sign in
                          </button>
                          <div className="mt-3">
                            <div href="#" className="text-xs">
                              Don't have an account?{' '}
                              <a href="#" className="text-primary">
                                Click to sign up
                              </a>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    )
  )
}

export default LoginModal
