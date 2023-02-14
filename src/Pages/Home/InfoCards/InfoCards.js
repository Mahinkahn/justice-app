import React from 'react';
import business from '../../../assets/images/business.png';
import criminal from '../../../assets/images/criminal.png';
import child from '../../../assets/images/child.png';
import education from '../../../assets/images/education.png';
import divorce from '../../../assets/images/divorce.png';
import tax from '../../../assets/images/tax.png';
import Frame from '../../../assets/images/Frame.png';
import InfoCard from './InfoCard';
import { Link } from 'react-router-dom';

const InfoCards = () => {


    return (
        <section class="">
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-lg text-center">
                    <h2 class="text-3xl font-bold sm:text-4xl">Kickstart your marketing</h2>

                    <p class="mt-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
                        aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur
                        saepe laborum.
                    </p>
                </div>

                <div class="mt-8 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
                    <a
                        class="block p-8 content-center w-[401px] h-[499px]  border-r-2 border-b-2 transition hover:bg-gray-200"
                        href="/services/digital-campaigns"
                    >
                        <div className='flex justify-center mt-14'>
                            <img src={business} alt="" />
                        </div>

                        <h2 class="mt-4 text-3xl font-bold text-center ">Business Law</h2>

                        <p class="mt-1 text-xl text-center">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                        </p>
                        <div className='flex justify-center mt-8'>
                            <Link><img src={Frame} alt="" /></Link>
                        </div>
                    </a>
                    <a
                        class="block p-8 content-center w-[401px] h-[499px] border-b-2 transition hover:bg-gray-200"
                        href="/services/digital-campaigns"
                    >
                        <div className=' flex justify-center mt-14'>
                            <img src={criminal} alt="" />
                        </div>

                        <h2 class="mt-4 text-3xl  font-bold text-center ">Criminal Law</h2>

                        <p class="mt-1 text-xl text-center">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                        </p>
                        <div className='flex justify-center mt-8'>
                            <Link><img src={Frame} alt="" /></Link>
                        </div>
                    </a>
                    <a
                        class="block p-8 content-center w-[401px] h-[499px] border-b-2 border-l-2  transition hover:bg-gray-200"
                        href="/services/digital-campaigns"
                    >
                        <div className=' flex justify-center mt-14'>
                            <img src={child} alt="" />
                        </div>

                        <h2 class="mt-4 text-3xl font-bold text-center ">Criminal Law</h2>

                        <p class="mt-1 text-xl text-center">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                        </p>
                        <div className='flex justify-center mt-8'>
                            <Link><img src={Frame} alt="" /></Link>
                        </div>
                    </a>
                    <a
                        class="block p-8 content-center w-[401px] h-[499px] border-r-2 transition hover:bg-gray-200"
                        href="/services/digital-campaigns"
                    >
                        <div className=' flex justify-center mt-14'>
                            <img src={education} alt="" />
                        </div>

                        <h2 class="mt-4 text-3xl font-bold text-center ">Criminal Law</h2>

                        <p class="mt-1 text-xl text-center">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                        </p>
                        <div className='flex justify-center mt-8'>
                            <Link><img src={Frame} alt="" /></Link>
                        </div>
                    </a>
                    <a
                        class="block p-8 content-center w-[401px] h-[499px]  transition hover:bg-gray-200"
                        href="/services/digital-campaigns"
                    >
                        <div className=' flex justify-center mt-14'>
                            <img src={divorce} alt="" />
                        </div>

                        <h2 class="mt-4 text-3xl font-bold text-center ">Criminal Law</h2>

                        <p class="mt-1 text-xl text-center">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                        </p>
                        <div className='flex justify-center mt-8'>
                            <Link><img src={Frame} alt="" /></Link>
                        </div>
                    </a>
                    <a
                        class="block p-8 content-center w-[401px] h-[499px] border-l-2 transition hover:bg-gray-200"
                        href="/services/digital-campaigns"
                    >
                        <div className=' flex justify-center mt-14'>
                            <img src={tax} alt="" />
                        </div>

                        <h2 class="mt-4 text-3xl font-bold text-center ">Criminal Law</h2>

                        <p class="mt-1 text-xl text-center">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                        </p>
                        <div className='flex justify-center mt-8'>
                            <Link><img src={Frame} alt="" /></Link>
                        </div>
                    </a>
                </div>
            </div>
        </section>

    );
};

export default InfoCards;