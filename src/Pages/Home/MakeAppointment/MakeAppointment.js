import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import faq from '../../../assets/images/faq.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (

        <div className='mt-12 max-w-[1440px] mx-auto'>
            <div className=' text-center'>
                <h1 className=' text-4xl font-bold'>Frequently Asked Any Questions</h1>
                <p className=' text-lg mt-3 mb-10'>There are many variations of passages of Lorem Ipsum available, but the majority have <br /> suffered alteration in some form, by injected humour.</p>
            </div>
            <div className="hero">
                <div className="hero-content gap-10 flex-col lg:flex-row-reverse">
                    <img src={faq} className=" w-[570px] h-[650px] rounded-lg" alt='' />
                    <div className='w-2/3'>
                        <details
                            class="group rounded-lg  bg-base-200 p-6 [&_summary::-webkit-details-marker]:hidden"
                            open
                        >
                            <summary class="flex items-center justify-between cursor-pointer">
                                <h2 class="font-medium text-2xl text-gray-900"><samp className='font-medium text-2xl'>1. </samp>
                                    Are application fee waivers available?
                                </h2>

                                <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <p class="mt-4 leading-relaxed text-gray-700">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, .
                            </p>
                        </details>
                        <details
                            class="group rounded-lg mt-5 bg-base-200 p-6 [&_summary::-webkit-details-marker]:hidden"
                            open
                        >
                            <summary class="flex items-center justify-between cursor-pointer">
                                <h2 class="font-medium text-2xl text-gray-900"><samp className='font-medium text-2xl'>1. </samp>
                                    Are application fee waivers available?
                                </h2>

                                <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <p class="mt-4 leading-relaxed text-gray-700">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, .
                            </p>
                        </details>
                        <details
                            class="group rounded-lg mt-5 bg-base-200 p-6 [&_summary::-webkit-details-marker]:hidden"
                            open
                        >
                            <summary class="flex items-center justify-between cursor-pointer">
                                <h2 class="font-medium text-2xl text-gray-900"><samp className='font-medium text-2xl'>1. </samp>
                                    Are application fee waivers available?
                                </h2>

                                <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <p class="mt-4 leading-relaxed text-gray-700">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, .
                            </p>
                        </details>
                        <details
                            class="group rounded-lg mt-5 bg-base-200  p-6 [&_summary::-webkit-details-marker]:hidden"
                            open
                        >
                            <summary class="flex items-center justify-between cursor-pointer">
                                <h2 class="font-medium text-2xl text-gray-900"><samp className='font-medium text-2xl'>1. </samp>
                                    Are application fee waivers available?
                                </h2>

                                <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <p class="mt-4 leading-relaxed text-gray-700">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, .
                            </p>
                        </details>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MakeAppointment;