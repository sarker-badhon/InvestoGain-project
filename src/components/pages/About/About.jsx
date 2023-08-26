import React from 'react';
import HowWork from './HowWork';

const About = () => {
    return (
        <div>
            <div className='flex justify-center items-center '>
                <div className='text-center'>
                    <img src="https://i.ibb.co/k32VpTB/banner-img.png" alt="" />
                    <h1>hellooo</h1>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:mx-20 py-10 px-3'>
                <div className=' my-10'>
                    <h1 className='text-white text-3xl md:text-5xl font-bold'>Secure Investments Are </h1>
                    <h1 className='text-white text-3xl md:text-5xl font-bold py-3'> Real In Our </h1>
                    <h1 className='text-white text-3xl md:text-5xl font-bold'>Company</h1>
                    <div className=''>
                        <p className='text-white my-5'>Aenean vulputate eleifend tellus. Aenean leo ligul porttitoeu consequat vitae eleifend acenim</p>
                        <p className='text-white'>Maecenas tempus tellus eget condimentum rhoncus seumper libero sit amet adipiscing sem neque sepsumam uam nuandit vel luctus pulvinar hendrerilorem.aecenas necdio et ante dunt tempus. Donec vitae sapien utlibero venenatis faucibus.</p>
                    </div>
                </div>
                <div className=''>
                    <img src="https://i.ibb.co/Cw1ZFPh/about-img-2.png" alt="" />
                </div>
            </div>
            
            <div>
                <HowWork></HowWork>
            </div>
        </div>
    );
};

export default About;