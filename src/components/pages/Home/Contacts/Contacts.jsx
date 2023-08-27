import React from 'react';

const Contacts = () => {
    return (
        <div>
            <div className='bg-black bg-opacity-40 rounded-lg text-white h-[360px] md:h-[300px] mb-8 md:mb-5'>

                {/* -------------------START-Plans-------------- */}
                <div className="grid grid-cols-1 md:grid-cols-2  md:pl-36 justify-center items-center gap-4 px-3">
                    <div className="text-center mx-4 ">
                        <h1 className='text-xl md:text-4xl lg:text-5xl font-bold text-center py-6 md:py-10'>
                            Contact with Us
                        </h1>
                        <p className='text-sm md:text-base lg:text-lg text-center'>
                            To make a solid investment, you have to know where you are investing. Find a plan which is best for you.
                        </p>

                    </div>
                    <div>
                        <img className='h-72 mt-3' src="https://i.ibb.co/1Gts30b/choose-img.png" alt="" />
                    </div>
                </div>
                {/* ----------------END- Plans--------------------- */}
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:mx-24 mx-5 py-16'>


                <div className="space-y-5">
                    {[
                        { title: 'Office Address', content: '28 Benin, south of Niger #5 San Francisco, United States of America' },
                        { title: 'Email Address', content: 'sarkerbadhon01@gmail.com, investogain02@gmail.com' },
                        { title: 'Phone Number', content: '+8801874081396, +8801874081396' }
                    ].map((info, index) => (
                        <div key={index} className='bg-[#31065B] w-full lg:w-[500px]'>
                            <div className='flex gap-6 md:gap-16 px-3 justify-center items-center py-8'>
                                <h1 className='text-white font-bold'>icon</h1>
                                <div>
                                    <h1 className='text-2xl font-bold text-white mb-2'>{info.title}</h1>
                                    <p className='text-white w-52'>{info.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="card w-full shadow-2xl bg-[#31065B] ">
                    <div className="card-body">
                        <h1 className='text-white text-4xl font-bold'>Ask Your Question</h1>
                        <div className="form-control my-3">
                            <input type="text" placeholder="Full Name" className="input w-full bg-[#31065B] border border-blue-900 text-white" />
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="Email" className="input w-full bg-[#31065B] border border-blue-900 text-white" />
                        </div>
                        <div className="form-control py-3">
                            <input type="text" placeholder="Phone Number" className="input w-full bg-[#31065B] border border-blue-900 text-white" />
                        </div>
                        <textarea placeholder="Ask your Question" className="textarea w-full bg-[#31065B] border border-blue-900 text-white textarea-lg"></textarea>
                        <div className="form-control mt-6">
                            <button
                                style={{ backgroundImage: " linear-gradient(to right, #de5c70 0%, #e98c5d 51%, #de5c70 100%)" }}
                                className="btn border-[#31065B] text-xl text-white uppercase font-bold">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;