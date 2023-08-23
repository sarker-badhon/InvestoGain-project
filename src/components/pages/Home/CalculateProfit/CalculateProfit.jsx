import React from 'react';

const CalculateProfit = () => {
    return (
        <div className='bg-blue-950'>
            <div className='lg:mx-20 px-2 grid grid-cols-1 lg:grid-cols-2 py-10 lg:py-20'>
                <div className="px-3">
                    <h1 className='text-3xl lg:text-5xl text-white font-bold py-5 px-2 mb-5'>Calculate Your Profit</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="jell" className='text-white'>
                                Plan
                            </label>
                            <select className="select select-ghost border border-white w-full max-w-xs text-white mt-3">
                                <option disabled selected>Choice Plan</option>
                                <option>Plan-1</option>
                                <option>Plan-2</option>
                                <option>Plan-3</option>
                                <option>Plan-4</option>
                                <option>Plan-5</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="jell" className='text-white'> Compounding
                            </label>
                            <input type="text" placeholder="20%" className="input input-ghost text-white border border-white w-full max-w-xs mt-3 " />
                        </div>
                        <div>
                            <label htmlFor="jell" className='text-white'>  Minimum Investment
                            </label>
                            <input type="text" placeholder="$1500" className="input input-ghost text-white border border-white w-full max-w-xs mt-3 " />
                        </div>
                        <div>
                            <label htmlFor="jell" className='text-white'> Maximum Investment
                            </label>
                            <input type="text" placeholder="$30000" className="input input-ghost text-white border border-white w-full max-w-xs mt-3 " />
                        </div>
                        <div>
                            <label htmlFor="jell" className='text-white'> Investment
                            </label>
                            <input type="text" placeholder="$100000" className="input input-ghost text-white border border-white w-full max-w-xs mt-3 " />
                        </div>
                        <div>
                            <label htmlFor="jell" className='text-white'> Interest
                            </label>
                            <input type="text" placeholder="$750" className="input input-ghost text-white border border-white w-full max-w-xs mt-3 " />
                        </div>
                        <div>
                            <label htmlFor="jell" className='text-white'> Profit
                            </label>
                            <input type="text" placeholder="$590" className="input input-ghost text-white border border-white w-full max-w-xs mt-3 " />
                        </div>
                        <div>
                            <label htmlFor="jell" className='text-white'> Total Return
                            </label>
                            <input type="text" placeholder="$25000" className="input input-ghost text-white border border-white w-full max-w-xs mt-3 " />
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <img src="https://i.ibb.co/3FSf9SX/feature-img.png" alt="Image" className="w-full h-auto" />
                </div>
            </div>
        </div>
    );
};

export default CalculateProfit;