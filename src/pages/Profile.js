import { Fragment, useState } from 'react'
import Stacked from 'layout/Stacked'

import { Link, Route } from 'react-router-dom'

import UpdateProfileForm from 'components/Profile/UpdateProfileForm'
import Alerts from 'components/Profile/Alerts'
import Favourites from 'components/Profile/Favourites'

import {
  BellIcon,
  CogIcon,
  MenuIcon,
  UserCircleIcon,
  HeartIcon
} from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Profile = () => {
  console.log(window.location.pathname)
  const subNavigation = [
    {
      name: 'Profile',
      route: '/profile',
      icon: UserCircleIcon,
      current: false
    },
    {
      name: 'My Alerts',
      route: '/profile/alerts',
      icon: BellIcon,
      current: false
    },
    {
      name: 'Liked Items',
      route: '/profile/favourites/',
      icon: HeartIcon,
      current: false
    }
  ]
  const currentComponent = subNavigation.find(
    (item) => item.route === window.location.pathname
  )
  if (currentComponent) currentComponent.current = true

  return (
    <Stacked bgColor={'bg-gray-50'}>
      <div className="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
          <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
            <nav className="space-y-1">
              {subNavigation.map((item) => (
                <Link to={item.route} key={item.name}>
                  <div
                    className={classNames(
                      item.current
                        ? 'bg-gray-200 text-orange-600 cursor-normal'
                        : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                      'group rounded-md px-3 py-2 flex items-center text-sm font-medium'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? 'text-orange-500'
                          : 'text-gray-400 group-hover:text-gray-500',
                        'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    <span className="truncate">{item.name}</span>
                  </div>
                </Link>
              ))}
            </nav>
          </aside>
          <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
            <Route exact path="/profile" component={UpdateProfileForm} />
            <Route exact path="/profile/alerts" component={Alerts} />
            <Route exact path="/profile/favourites" component={Favourites} />
          </div>
        </div>
      </div>
    </Stacked>
  )
}
export default Profile
