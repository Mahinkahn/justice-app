import React from 'react';
import img1 from '../../../assets/images/slider-1.jpg'
import img2 from '../../../assets/images/slider-2.jpg'
import img3 from '../../../assets/images/slider-3.jpg'
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            image: img2,
            prev: 6,
            id: 1,
            next: 2,
            text: 'Awlad Hossain'
        },
        {
            image: img1,
            prev: 1,
            id: 2,
            next: 3,
            text: 'Awlad Hossain'
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 4,
            text: 'Awlad Hossain'
        },
        {
            image: img2,
            prev: 3,
            id: 4,
            next: 5,
            text: 'Awlad Hossain'
        },
        {
            image: img1,
            prev: 4,
            id: 5,
            next: 6,
            text: 'Awlad Hossain'
        },
        {
            image: img3,
            prev: 5,
            id: 6,
            next: 1,
            text: 'Awlad Hossain'
        },
    ]

    return (
        <div className='mt-16 max-w-[1440px] mx-auto'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='carousel w-full py-10'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;