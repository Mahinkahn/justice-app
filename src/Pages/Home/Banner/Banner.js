import React from 'react';
import banner from '../../../assets/images/banner.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero h-[550px] mt-10 max-w-[1440px] mx-auto" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-[50px] text-white font-serif font-bold">We Provide Effective <br /> Legal Solutions</h1>
                    <p className="mb-5 text-lg">There are many variations of passages of Lorem Ipsum available, but the majority <br /> have suffered alteration in some form, by injected humour.</p>
                    <div className=' flex gap-6'>
                        <input type="text" placeholder="email" className="input input-bordered text-black w-[500px] h-[64px]" />
                        <button className="btn btn-primary text-white font-bold text-lg w-[150px] h-[64px]">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;