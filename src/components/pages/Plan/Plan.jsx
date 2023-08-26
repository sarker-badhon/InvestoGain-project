import React from 'react';

const Plan = () => {
    return (
        <div>
            <div className='bg-black bg-opacity-40 rounded-lg text-white h-[360px] md:h-[440px] mb-8 md:mb-24'>

                {/* -------------------START---------------Investment Plans-------------- */}
                <div className="grid grid-cols-1 md:grid-cols-2  md:pl-36 justify-center items-center gap-4 px-3">
                    <div className="text-center mx-4 ">
                        <h1 className='text-xl md:text-4xl lg:text-5xl font-bold text-center py-6 md:py-10'>
                            Investment Plans
                        </h1>
                        <p className='text-sm md:text-base lg:text-lg text-center'>
                            To make a solid investment, you have to know where you are investing. Find a plan which is best for you.
                        </p>

                    </div>
                    <div>
                        <img className='h-80 mt-3' src="https://i.ibb.co/1Gts30b/choose-img.png" alt="" />
                    </div>
                </div>
                {/* ----------------END---------------Investment Plans--------------------- */}
            </div>
            {/* ----------------START---------------InvestmenT CARD--------------------- */}


            <div className='md:mx-20 px-3 mt-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  '>

                    <div
                        className="text-white max-w-full py-10 px-10 lg:leading-relaxed rounded-xl text-center" style={{ backgroundImage: " linear-gradient(0deg, #19C3CC 0%, #076FB3 100%)" }}>
                        <h2 className="text-4xl font-bold text-white lg:leading-tight">Slivesto</h2>
                        <p className='text-2xl text-white py-2'>Return 6%</p>
                        <hr />
                        <p className='text-2xl text-white py-2'>Every Week</p>
                        <hr />
                        <p className='text-2xl text-white py-2'>For 5 Week</p>
                        <hr />
                        <p className='text-2xl text-white py-2'>Total 30% +</p>
                        <hr />
                        <h2 className="text-4xl font-bold text-white lg:leading-tight mt-5">$200</h2>
                        
                        <button className="bg-[#DE606B] text-white py-2 px-4 rounded-lg hover:bg-[#DE5C70] uppercase font-bold mt-5">
                        Invest Now
                    </button>
                    </div>
                    <div
                        className="text-white max-w-full py-10 px-10 lg:leading-relaxed rounded-xl text-center" style={{ backgroundImage: "linear-gradient(0deg, #e98c5d 0%, #de5c70 100%)" }}>
                        <h2 className="text-4xl font-bold text-white lg:leading-tight">Life Time</h2>
                        <p className='text-2xl text-white py-2'>Return 0.2%</p>
                        <hr />
                        <p className='text-2xl text-white py-2'>Every Day</p>
                        <hr />
                        <p className='text-2xl text-white py-2'>For Lifetime</p>
                        <hr />
                        <p className='text-2xl text-white py-2'>Lifetime Earning</p>
                        <hr />
                        <h2 className="text-4xl font-bold text-white lg:leading-tight mt-5">$300</h2>
                        
                        <button className="bg-[#DE606B] text-white py-2 px-4 rounded-lg hover:bg-[#DE5C70] uppercase font-bold mt-5">
                        Invest Now
                    </button>
                    </div>
                    <div
                        className="text-white max-w-full py-10 px-10 lg:leading-relaxed rounded-xl text-center" style={{ backgroundImage: " linear-gradient(0deg, #cd2cac 0%, #8628c1 100%)" }}>
                        <h2 className="text-4xl font-bold text-white lg:leading-tight"> Horse</h2>
                        <p className='text-2xl text-white py-2'>Return 5%</p>
                        <hr />
                        <p className='text-2xl text-white py-2'>Every Week</p>
                        <hr />
                        <p className='text-2xl text-white py-2'>For 40 Week</p>
                        <hr />
                        <p className='text-2xl text-white py-2'>Total 200% +</p>
                        <hr />
                        <h2 className="text-4xl font-bold text-white lg:leading-tight mt-5">$500 </h2>
                        
                        <button className="bg-[#DE606B] text-white py-2 px-4 rounded-lg hover:bg-[#DE5C70] uppercase font-bold mt-5">
                        Invest Now
                    </button>
                    </div>
                    <div
                        className="text-white max-w-full py-10 px-10 lg:leading-relaxed rounded-xl text-center" style={{ backgroundImage: "linear-gradient(0deg, #9bcf36 0%, #39cb4c 100%)" }}>
                        <h2 className="text-4xl font-bold text-white lg:leading-tight">Silver</h2>
                        <p className='text-2xl text-white py-2'>Every Day</p>
                        <hr />
                        <p className='text-2xl text-white py-2'>Every day</p>
                        <hr />
                        <p className='text-2xl text-white py-2'>For 25 day</p>
                        <hr />
                        <p className='text-2xl text-white py-2'>Total 125%</p>
                        <hr />
                        <h2 className="text-4xl font-bold text-white lg:leading-tight mt-5">$500</h2>
                        
                        <button className="bg-[#DE606B] text-white py-2 px-4 rounded-lg hover:bg-[#DE5C70] uppercase font-bold mt-5">
                        Invest Now
                    </button>
                    </div>
                    <div
                        className="text-white max-w-full py-10 px-10 lg:leading-relaxed rounded-xl text-center" style={{ backgroundImage: "linear-gradient(0deg, #9bcf36 0%, #39cb4c 100%)" }}>
                        <h2 className="text-4xl font-bold text-white lg:leading-tight">Elephant</h2>
                        <p className='text-2xl text-white py-2'>Return 1.1USD</p>
                        <hr />
                        <p className='text-2xl text-white py-2'>Every Week</p>
                        <hr />
                        <p className='text-2xl text-white py-2'>For 50 Day</p>
                        <hr />
                        <p className='text-2xl text-white py-2'>Total 55USD + </p>
                        <hr />
                        <h2 className="text-4xl font-bold text-white lg:leading-tight mt-5">$7000</h2>
                        
                        <button className="bg-[#DE606B] text-white py-2 px-4 rounded-lg hover:bg-[#DE5C70] uppercase font-bold mt-5">
                        Invest Now
                    </button>
                    </div>
                    <div
                        className="text-white max-w-full py-10 px-10 lg:leading-relaxed rounded-xl text-center"style={{ backgroundImage: " linear-gradient(0deg, #cd2cac 0%, #8628c1 100%)" }}>
                        <h2 className="text-4xl font-bold text-white lg:leading-tight">Cobra</h2>
                        <p className='text-2xl text-white py-2'>Return 10USD</p>
                        <hr />
                        <p className='text-2xl text-white py-2'>Every Week</p>
                        <hr />
                        <p className='text-2xl text-white py-2'>For 5 Week</p>
                        <hr />
                        <p className='text-2xl text-white py-2'>Total 1500USD + </p>
                        <hr />
                        <h2 className="text-4xl font-bold text-white lg:leading-tight mt-5">$1000</h2>
                        
                        <button className="bg-[#DE606B] text-white py-2 px-4 rounded-lg hover:bg-[#DE5C70] uppercase font-bold mt-5">
                        Invest Now
                    </button>
                    </div>
                    <div
                        className="text-white max-w-full py-10 px-10 lg:leading-relaxed rounded-xl text-center" style={{ backgroundImage: " linear-gradient(0deg, #19C3CC 0%, #076FB3 100%)" }}>
                        <h2 className="text-4xl font-bold text-white lg:leading-tight">Lion</h2>
                        <p className='text-2xl text-white py-2'>Return 0.2%</p>
                        <hr />
                        <p className='text-2xl text-white py-2'>Every day</p>
                        <hr />
                        <p className='text-2xl text-white py-2'>For Lifetime</p>
                        <hr />
                        <p className='text-2xl text-white py-2'>Total 30% +</p>
                        <hr />
                        <h2 className="text-4xl font-bold text-white lg:leading-tight mt-5">$600</h2>
                        
                        <button className="bg-[#DE606B] text-white py-2 px-4 rounded-lg hover:bg-[#DE5C70] uppercase font-bold mt-5">
                        Invest Now
                    </button>
                    </div>
                    <div
                        className="text-white max-w-full py-10 px-10 lg:leading-relaxed rounded-xl text-center" style={{ backgroundImage: "linear-gradient(0deg, #e98c5d 0%, #de5c70 100%)" }}>
                        <h2 className="text-4xl font-bold text-white lg:leading-tight">Tiger</h2>
                        <p className='text-2xl text-white py-2'>Return 6%</p>
                        <hr />
                        <p className='text-2xl text-white py-2'>Every Week</p>
                        <hr />
                        <p className='text-2xl text-white py-2'>For 5 Week</p>
                        <hr />
                        <p className='text-2xl text-white py-2'>Total 30% +</p>
                        <hr />
                        <h2 className="text-4xl font-bold text-white lg:leading-tight mt-5">$1500</h2>
                        
                        <button className="bg-[#DE606B] text-white py-2 px-4 rounded-lg hover:bg-[#DE5C70] uppercase font-bold mt-5">
                        Invest Now
                    </button>
                    </div>

                   

                   

                   
                </div>
            </div>
        </div>
    );
};

export default Plan;