import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon, HeartIcon } from '@heroicons/react/outline'

import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import images from 'assets/images'
import LoginModal from 'components/Modals/LoginModal'
import { toggleModal } from 'reducers/modalReducer'
import { logoutUser } from 'reducers/userReducer'

const navigation = [
  // { name: 'Dashboard', href: '#', current: true },
  // { name: 'Team', href: '#', current: false },
  // { name: 'Projects', href: '#', current: false },
  // { name: 'Calendar', href: '#', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  // const user = {
  //   platform_id: null,
  //   avatar: null,
  //   status: 'ACTIVE',
  //   updated_at: '2021-11-03T08:06:56+00:00',
  //   first_name: null,
  //   display_name: null,
  //   platform_type: null,
  //   role: ['USER'],
  //   created_at: '2021-10-18T07:06:29+00:00',
  //   id: 2,
  //   last_name: null,
  //   email: 'dlimsg@hotmail.com'
  // }

  const user = useSelector((state) => state.user || null)
  const dispatch = useDispatch()

  const userNavigation = [
    { name: 'Your Profile', route: '/profile' },
    { name: 'Sign out', onClick: () => dispatch(logoutUser()) }
  ]

  return (
    <>
      <div className="min-h-full sticky top-0 z-10">
        <Disclosure as="nav" className="bg-white shadow-sm">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center">
                      <Link to="/">
                        <img
                          className="block h-10 w-auto"
                          src={images.PriceGiraffeLogoBlueText}
                          alt="PriceGiraffe"
                        />
                      </Link>
                    </div>
                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'border-pink-500 text-gray-900'
                              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                            'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    {/* Profile dropdown */}
                    {user ? (
                      <>
                        <Link to="/profile/alerts">
                          <button
                            type="button"
                            className="bg-white mr-2 p-1 rounded-full text-gray-400 hover:text-primary"
                          >
                            <span className="sr-only">View Alerts</span>
                            <BellIcon className="h-7 w-7" aria-hidden="true" />
                          </button>
                        </Link>

                        <Link to="/profile/favourites">
                          <button
                            type="button"
                            className="bg-white p-1 rounded-full text-gray-400 hover:text-primary"
                          >
                            <span className="sr-only">
                              View favourite items
                            </span>
                            <HeartIcon className="h-7 w-7" aria-hidden="true" />
                          </button>
                        </Link>
                        <Menu as="div" className="ml-3 relative z-30">
                          <div className="ml-4 flex">
                            <div className="border-l-2 h-6 my-auto mr-6"></div>
                            <Menu.Button className="bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                              <span className="sr-only">Open user menu</span>
                              {user.avatar ? (
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src={user.avatar}
                                  alt=""
                                />
                              ) : (
                                <span className="inline-block h-6 w-6 rounded-full overflow-hidden bg-gray-100">
                                  <svg
                                    className="h-full w-full text-gray-300"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                  </svg>
                                </span>
                              )}
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {userNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }) =>
                                    item.route ? (
                                      <Link to={item.route}>
                                        <div
                                          className={classNames(
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm text-gray-700'
                                          )}
                                        >
                                          {item.name}
                                        </div>
                                      </Link>
                                    ) : (
                                      <div
                                        onClick={item.onClick}
                                        className={classNames(
                                          active ? 'bg-gray-100' : '',
                                          'block px-4 py-2 text-sm text-gray-700'
                                        )}
                                      >
                                        {item.name}
                                      </div>
                                    )
                                  }
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </>
                    ) : (
                      <>
                        <div className="ml-4 flex">
                          <div
                            onClick={() => dispatch(toggleModal('LOGIN'))}
                            className="cursor-pointer ml-6 inline-flex items-center px-10 py-2  text-primary font-medium rounded-3xl bg-transparent hover:text-pink-900 sm:text-sm"
                          >
                            Sign in
                          </div>
                          <Link to="/sign-up">
                            <button className="mr-6 inline-flex items-center px-10 py-2 border border-primary text-white shadow-sm font-medium rounded-md bg-primary hover:bg-pink-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:text-sm">
                              Sign up
                            </button>
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="-mr-2 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
              {user ? (
                <Disclosure.Panel className="sm:hidden">
                  <div className="pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-pink-50 border-pink-500 text-pink-700'
                            : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                          'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                  <div className="pt-4 pb-3 border-t border-gray-200">
                    <div className="flex items-center px-4">
                      <div className="flex-shrink-0">
                        <Link to="/profile">
                          {user.avatar ? (
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.avatar}
                              alt=""
                            />
                          ) : (
                            <span className="inline-block h-6 w-6 rounded-full overflow-hidden bg-gray-100">
                              <svg
                                className="h-full w-full text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                              </svg>
                            </span>
                          )}
                        </Link>
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium text-gray-800">
                          {user.first_name}
                        </div>
                        <div className="text-sm font-medium text-gray-500">
                          {user.email}
                        </div>
                      </div>
                      {/* <button
                        type="button"
                        className="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        className="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button> */}
                    </div>
                    <div className="mt-3 space-y-1">
                      {userNavigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </div>
                </Disclosure.Panel>
              ) : (
                <Disclosure.Panel className="sm:hidden">
                  {/* <div className="pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-pink-50 border-pink-500 text-pink-700'
                            : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                          'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div> */}
                  <div className="pt-4 pb-3 border-t border-gray-200">
                    <div className="mt-3 space-y-1">
                      <Disclosure.Button
                        as="a"
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                      >
                        Sign up
                      </Disclosure.Button>
                      <div onClick={() => dispatch(toggleModal('LOGIN'))}>
                        <Disclosure.Button
                          as="a"
                          className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                        >
                          Sign in
                        </Disclosure.Button>
                      </div>
                    </div>
                  </div>
                </Disclosure.Panel>
              )}
            </>
          )}
        </Disclosure>
      </div>
      <LoginModal />
    </>
  )
}

export default Navbar
