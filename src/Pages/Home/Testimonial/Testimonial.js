import React from 'react';

import location from '../../../assets/images/location.png';
import call from '../../../assets/images/call.png';
import email from '../../../assets/images/email.png';
import time from '../../../assets/images/time.png';
import Review from './Review';


const Testimonial = () => {

    return (
        <section className='max-w-[1440px] mx-auto'>
            <div className=' text-center mt-14'>
                <h1 className=' text-4xl font-bold'>Contact With Us</h1>
                <p className=' text-lg mt-3'>There are many variations of passages of Lorem Ipsum available, but the majority have <br />
                    suffered alteration in some form, by injected humour.
                </p>
            </div>
            <div class="max-w-screen-xl content-center ml-10 px-4 py-16 sm:px-6 lg:px-8">
                <div
                    class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
                >
                    <div class="grid grid-cols-2 sm:grid-cols-2 rounded-lg bg-base-200">
                        <a
                            class="block   w-[285px] h-[285px] border-r-2  p-4 shadow-sm hover:rounded-lg hover:border-gray-200 hover:ring-1 hover:ring-gray-300 focus:outline-none focus:ring"
                            href="/accountant"
                        >
                            <span class="flex justify-center rounded-lg mt-14  p-3">
                                <img src={location} alt="" />
                            </span>

                            <h2 class="mt-4 font-bold text-2xl text-center">Address</h2>

                            <p class="text-center text-lg hidden sm:mt-1 sm:block  sm:text-gray-600">
                                A108 Adam Street, <br />
                                New York,
                                NY 535022
                            </p>
                        </a>

                        <a
                            class="block  w-[285px] h-[285px]  p-4 shadow-sm hover:rounded-lg hover:border-gray-200 hover:ring-1 hover:ring-gray-300 focus:outline-none focus:ring"
                            href="/accountant"
                        >
                            <span class="flex justify-center rounded-lg mt-14  p-3">
                                <img src={call} alt="" />
                            </span>

                            <h2 class="mt-2 font-bold text-2xl text-center">Call Us</h2>

                            <p class="text-center text-lg hidden sm:mt-1 sm:block  sm:text-gray-600">
                                +88 01750 00 00 00 <br />
                                +88 01750 00 00 00
                            </p>
                        </a>

                        <a
                            class="block  w-[285px] h-[285px] border-r-2  p-4 shadow-sm hover:rounded-lg hover:border-gray-200 hover:ring-1 hover:ring-gray-300 focus:outline-none focus:ring"
                            href="/accountant"
                        >
                            <span class="flex justify-center rounded-lg mt-14  p-3">
                                <img src={email} alt="" />
                            </span>

                            <h2 class="mt-2 font-bold text-2xl text-center">Email Us</h2>

                            <p class="text-center text-lg hidden sm:mt-1 sm:block  sm:text-gray-600">
                                info@gmail.com <br />
                                info@gmail.com
                            </p>
                        </a>
                        <a
                            class="block  w-[285px] h-[285px]  p-4 shadow-sm hover:rounded-lg hover:border-gray-200  hover:ring-1 hover:ring-gray-300 focus:outline-none focus:ring"
                            href="/accountant"
                        >
                            <span class="flex justify-center rounded-lg  mt-14 p-3">
                                <img src={time} alt="" />
                            </span>

                            <h2 class="mt-2 font-bold text-2xl text-center">Working Hours</h2>

                            <p class=" text-center text-lg hidden sm:mt-1 sm:block  sm:text-gray-600">
                                Mon-Fri: 9AM to 5PM <br />
                                Sunday: 9AM to 1 PM
                            </p>
                        </a>
                    </div>
                    <div class="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
                        <input
                            placeholder="Your Name"
                            className="input w-full h-[72px] max-w-xl my-3 bg-base-200"
                            type="text"
                        />
                        <input
                            placeholder="Email Address"
                            className="input w-full h-[72px] mt-4 max-w-xl my-3 bg-base-200"
                            type="text"
                        />
                        <input
                            placeholder="Subject"
                            className="input w-full h-[72px] mt-4 max-w-xl mb-3 bg-base-200"
                            type="text"
                        />
                        <textarea
                            placeholder="Your message"
                            className="w-full h-[162px] mt-4 rounded-lg pt-3 pl-3 bg-base-200"
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                        ></textarea>

                        <a
                            class="mt-8 inline-flex w-full h-[72px] items-center justify-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                            href="/get-started"
                        >
                            <span class="text-sm font-medium"> Get Started </span>

                            <svg
                                class="ml-3 h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Testimonial;