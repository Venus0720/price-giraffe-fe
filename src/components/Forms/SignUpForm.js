import React, { useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import images from 'assets/images'
import ErrorAlert from 'components/Alerts/ErrorAlert'
import userService from 'services/user'

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required('Please enter your password')
    .min(8, 'Password must be as least 8 characters'),
  confirmPassword: Yup.string()
    .required('Please double confirm your password')
    .oneOf([Yup.ref('password')], 'Passwords do not match'),
  email: Yup.string()
    .required('Please enter your email')
    .email('Please enter a valid email')
})

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: 'onSubmit', resolver: yupResolver(validationSchema) })

  const [submitted, setSubmitted] = useState(false)

  const submitSignUpForm = (credentials) => {
    const { email, password } = credentials
    try {
      userService.signUpUser({ email, password })
      setSubmitted(true)
    } catch (err) {
      console.log(err)
    }
  }
  const errorsArray = Object.keys(errors).map((key) => errors[key].message)
  return !submitted ? (
    <div className="min-h-3/4screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 my-auto">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src={images.PriceGiraffeLogo}
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up for your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link to="/" className="inline-block">
              <div className="font-medium text-pink-600 hover:text-pink-500">
                Sign in with an existing account
              </div>
            </Link>
          </p>
        </div>
        {errorsArray.length > 0 && <ErrorAlert errors={errorsArray} />}
        <form
          className="mt-8 space-y-6"
          onSubmit={handleSubmit(submitSignUpForm)}
        >
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                {...register('email')}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                {...register('password')}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                autoComplete="confirmPassword"
                required
                {...register('confirmPassword')}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-white group-hover:text-pink-400"
                  aria-hidden="true"
                />
              </span>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <div>check email for verification!</div>
  )
}

export default SignUpForm
