"use client";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
//import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
GiMedicines

import { GiMedicines } from "react-icons/gi";


const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navigatiom() {
    return (
        <div id="app">
            <div class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-3">
                <div class="bg-grey-900">
                    <header class="absolute inset-x-0 top-0 z-50">
                        <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                            <div class="flex lg:flex-1">
                                <a href="#" class="-m-1.5 p-1.5">
                                    <span class="sr-only">Your Company</span><img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" alt="" /></a>
                            </div>
                            <div class="flex lg:hidden">
                                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                                    <span class="sr-only">Open main menu</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                                    </svg>
                                </button>
                            </div>
                            <div class="hidden lg:flex lg:gap-x-12">
                                <a href="#" class="text-sm font-semibold leading-6 text-white-900">Product</a>
                                <a href="#" class="text-sm font-semibold leading-6 text-white-900">Features</a>
                                <a href="#" class="text-sm font-semibold leading-6 text-white-900">Marketplace</a>
                                <a href="#" class="text-sm font-semibold leading-6 text-white-900">Company</a>
                                <a href="#" class="text-sm font-semibold leading-6 text-white-900"><GiMedicines color='white' size={25} /></a>
                                <a href="#" class="text-sm font-semibold leading-6 text-white-900"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg></a>

                            </div>
                            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                                <a href="#" class="text-sm font-semibold leading-6 text-white-900">Log in <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </nav>
                        <div className="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; display: none;"></div>
                    </header>
                    <div class="relative isolate px-6 pt-14 lg:px-8">
                        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                            <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
                        </div>
                        <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                            <div class="text-center">
                                <h1 class="text-4xl font-bold tracking-tight text-white-900 sm:text-6xl">"Say goodbye to waiting rooms, say hello to our platform"</h1>
                                <p class="mt-6 text-lg leading-8 text-gray-600">
                                    Transform your healthcare journey. Book appointments, consult with doctors, and order medicine online - all in one place. Join us today and experience hassle-free healthcare management at your fingertips.
                                </p>
                                <div class="mt-10 flex items-center justify-center gap-x-6"><a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">book an Appointment</a><a href="#" class="text-sm font-semibold leading-6 text-white-900">Join as Doctor <span aria-hidden="true">→</span></a></div>
                            </div>
                        </div>
                        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                            <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
