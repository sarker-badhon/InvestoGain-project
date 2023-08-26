import React from 'react';

const Banner = () => {
    return (
        <div className='' style={{ backgroundImage: "url('https://i.ibb.co/VggPtPN/hero-bg.png')" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 pt-10 lg:pt-36 pb-16 lg:pb-72 mx-5 lg:mx-20">

                <div className="w-full text-white p-8 lg:leading-relaxed">
                    <h2 className="text-3xl lg:text-[47px] font-bold mb-4 lg:mb-6 lg:leading-tight">
                        InvestoGain Investment & Get <span className='text-[#DE606B]'>You Profit</span>
                    </h2>
                    <p className="mb-4 lg:mb-6 text-base lg:text-xl">
                        Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.
                    </p>
                    <button className="bg-[#DE606B] text-white py-2 px-4 rounded-lg hover:bg-[#DE5C70] uppercase font-bold">
                        Get started
                    </button>
                </div>


                <div className="w-full">
                    <img src="https://i.ibb.co/DbcR4y4/hero-img.png" alt="Image" className="w-full h-auto" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
