import React from 'react';
import people1 from '../../../assets/images/people1.png'
import Rectangle from '../../../assets/images/Rectangle 7.png'

const Service = ({ service }) => {
    const { image, id, prev, next, text } = service;
    return (
        <div id={`service${id}`} className="carousel-item relative w-full" style={{ backgroundImage: `url(${Rectangle})` }}>
            <div className='carousel-img'>
                <img src={image} alt="" className="w-full rounded-xl" />
            </div>
            <div className="absolute  left-[42%] transform -translate-y-1/2 top-[40%]">
                <div className="avatar flex justify-center">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={people1} alt="" />
                    </div>
                </div>
                <h1 className='text-3xl text-center font-bold mt-5 text-white'>
                    {text}
                </h1>
                <h1 className='flex justify-center text-white text-lg'>UIX Designer</h1>
            </div>
            <div className="absolute text-center   transform -translate-y-1/2 left-[15%] top-[60%]">
                <p className='text-xl text-white'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin <br /> literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney <br /> College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#service${prev}`} className="btn btn-circle ">❮</a>
                <a href={`#service${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default Service;