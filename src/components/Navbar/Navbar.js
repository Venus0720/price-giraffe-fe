import React from 'react'
import images from 'assets/images'
import { Disclosure } from '@headlessui/react';

const Navbar = () => {
    return (
        <Disclosure as="nav" className="bg-secondary shadow">
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-24">
                            <div className="flex">
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block h-12 w-auto"
                                        src={images.PriceGiraffeLogoText}
                                        alt="Price Giraffe Logo"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
        </Disclosure>
    );
};
export default Navbar;
