import React from 'react';

const InvestmentPlan = () => {
    return (
        <div className='py-24 lg:mx-20 px-2'>
            <div className='text-center pb-16 px-4'>
                <h1 className='text-4xl lg:text-6xl text-white font-bold py-5 px-2'>Our Investment Plan</h1>
                <p className='text-xl text-white'>Maecenas tempus tellus egets condimentum Rhoncus sem quam semper libero  </p>
                
                
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  '>

                <div
                    className="text-white max-w-full py-16 px-10 lg:leading-relaxed rounded-xl text-center" style={{ backgroundImage: " linear-gradient(0deg, #19C3CC 0%, #076FB3 100%)" }}>
                    <h2 className="text-6xl font-bold text-white lg:leading-tight">10%</h2>
                    <p className='text-3xl text-white py-2'>Hourly</p>
                    <hr />
                    <h2 className='text-xl text-white py-4 font-bold'>FOREVER</h2>
                    <div>
                        <p className='text-xl'>Min : $15 USD</p>
                        <p className='text-xl'>Max : $30 USD</p>
                    </div>
                </div>

                <div
                    className="text-white py-16 px-10 lg:leading-relaxed rounded-xl text-center" style={{ backgroundImage: "linear-gradient(0deg, #e98c5d 0%, #de5c70 100%)" }}>
                    <h2 className="text-6xl font-bold text-white lg:leading-tight">123%</h2>
                    <p className='text-3xl text-white py-2'>Hourly</p>
                    <hr />
                    <h2 className='text-xl text-white py-4 font-bold'>FOREVER</h2>
                    <div>
                        <p className='text-xl'>Min : $15 USD</p>
                        <p className='text-xl'>Max : $30 USD</p>
                    </div>
                </div>

                <div
                    className="text-white py-16 px-10 lg:leading-relaxed rounded-xl text-center" style={{ backgroundImage: " linear-gradient(0deg, #cd2cac 0%, #8628c1 100%)" }}>
                    <h2 className="text-6xl font-bold text-white lg:leading-tight">160%</h2>
                    <p className='text-3xl text-white py-2'>Hourly</p>
                    <hr />
                    <h2 className='text-xl text-white py-4 font-bold'>AFTER 3 DAYS</h2>
                    <div>
                        <p className='text-xl'>Min : $15 USD</p>
                        <p className='text-xl'>Max : $30 USD</p>
                    </div>
                </div>

                <div
                    className="text-white py-16 px-10 lg:leading-relaxed rounded-xl text-center" style={{ backgroundImage: "linear-gradient(0deg, #9bcf36 0%, #39cb4c 100%)" }}>
                    <h2 className="text-6xl font-bold text-white lg:leading-tight">200%</h2>
                    <p className='text-3xl text-white py-2'>Hourly</p>
                    <hr />
                    <h2 className='text-xl text-white py-4 font-bold'>AFTER 3 DAYS</h2>
                    <div>
                        <p className='text-xl'>Min : $15 USD</p>
                        <p className='text-xl'>Max : $30 USD</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvestmentPlan;