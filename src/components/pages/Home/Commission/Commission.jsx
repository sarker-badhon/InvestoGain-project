import React from 'react';

const Commission = () => {
    return (
        <div className='bg-blue-950'>
            <div className='lg:mx-20 px-2 grid grid-cols-1 lg:grid-cols-2 py-10 lg:py-20 justify-center items-center'>
                <div className="w-full">
                    <img src="https://i.ibb.co/KKTGRsx/commission-img.png" alt="Image" className="w-full h-auto" />
                </div>
                <div className="px-3">
                    <h1 className='text-3xl lg:text-[45px] text-white font-bold  px-2 mb-5'>30% Referral Commission</h1>
                    <div className='text-center'>
                        <p className='text-center text-white'>Aenean vulputate eleifend tellus. Aenean leo ligul porttitoeu consequat vitae eleifend acenim</p>
                        <button className="bg-[#DE606B] text-white py-2 px-4 rounded-lg hover:bg-[#DE5C70] uppercase font-bold mt-5">
                            Get started
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};



export default Commission;