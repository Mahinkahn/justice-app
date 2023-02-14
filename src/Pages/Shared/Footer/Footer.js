import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png';
import logo from '../../../assets/images/logo.png';
import Frame from '../../../assets/images/Frame - Copy.png';

const Footer = () => {
    return (
        <section className='bg-black'>
            <footer className="footer p-14 text-white max-w-[1440px] mx-auto">
                <div className='ml-9'>
                    <img src={logo} alt="" />
                    <p className='w-[259px] h-[130px] mt-8'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                </div>
                <div>
                    <span className="footer-title text-xl">Company</span>
                    <a className="link link-hover text-lg mt-5">Homes</a>
                    <a className="link link-hover text-lg">About Us</a>
                    <a className="link link-hover text-lg">Cases</a>
                    <a className="link link-hover text-lg"> Blog</a>
                    <a className="link link-hover text-lg">  Contact Us</a>

                </div>
                <div>
                    <span className="footer-title text-xl">Legal</span>
                    <div className='w-[216px] h-[188px] mt-5'>
                        <p className=' text-base'>555 4th 5t NW, Washington
                            DC 20530, United States
                        </p>
                        <p className='mt-4'>
                            +88 01750 000 000 <br />
                            +88 01750 000 000
                        </p>
                        <p className='mt-4'>
                            info@gmail.com <br />
                            info@gmail.com</p>
                    </div>
                </div>
                <div>
                    <span className="footer-title text-xl">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className=" text-base text-white">Subscribe for our latest & <br /> Articles. We Won’t Give You <br />  Spam Mails</span>
                        </label>
                        <div className="relative mt-5 text-black">
                            <input type="text" placeholder="username@site.com" className="input input-bordered text-black w-full pr-16 h-[72px]" />
                            <button className="btn btn-primary absolute h-[72px] top-0 right-0 rounded-l-none"><img src={Frame} alt="" /></button>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;