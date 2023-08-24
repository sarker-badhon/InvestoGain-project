import React from 'react';

const FAQ = () => {
    return (
        <div className='py-20 px-2 md:mx-20'>

                <div className='text-center mb-7'>
                    <h1 className='text-white font-bold text-4xl  lg:text-5xl py-5 px-2'>Frequently Asked Questions</h1>
                    <p className='text-white'>Curabitur ullamcorper ultricies nisi Nam eget dui. </p>
                    <p className='text-white'>Etiam rhoncus fdsf df vulputate.</p>
                </div>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                
                    <div className=''>

                        <div tabIndex={0} className="collapse collapse-plus border border-blue-900 mb-3">
                            <div className="collapse-title text-xl text-white bg-blue-950 font-medium">
                                Why You should become an Investor?
                            </div>
                            <div className="collapse-content ">
                                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, nam! Beatae odit totam quae. Doloremque ducimus impedit aspernatur eveniet. Delectus neque blanditiis vero dicta molestiae corporis beatae aperiam incidunt consequuntur.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border border-blue-900 mb-3">
                            <div className="collapse-title text-xl text-white bg-blue-950 font-medium">
                                Can I Invest Using Cryptocurrency?
                            </div>
                            <div className="collapse-content ">
                                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, nam! Beatae odit totam quae. Doloremque ducimus impedit aspernatur eveniet. Delectus neque blanditiis vero dicta molestiae corporis beatae aperiam incidunt consequuntur.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border border-blue-900 mb-3">
                            <div className="collapse-title text-xl text-white bg-blue-950 font-medium">
                                Why You should become an Investor?
                            </div>
                            <div className="collapse-content ">
                                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, nam! Beatae odit totam quae. Doloremque ducimus impedit aspernatur eveniet. Delectus neque blanditiis vero dicta molestiae corporis beatae aperiam incidunt consequuntur.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border border-blue-900 mb-3">
                            <div className="collapse-title text-xl text-white bg-blue-950 font-medium">
                                Why You Choose Us?
                            </div>
                            <div className="collapse-content ">
                                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, nam! Beatae odit totam quae. Doloremque ducimus impedit aspernatur eveniet. Delectus neque blanditiis vero dicta molestiae corporis beatae aperiam incidunt consequuntur.</p>
                            </div>
                        </div>

                    </div>
                {/* ------------------ */}

                <div className="card w-full shadow-2xl bg-blue-950">
                    <div className="card-body">
                        <h1 className='text-white text-4xl font-bold'>Ask Your Question</h1>
                        <div className="form-control my-3">
                            <input type="text" placeholder="Full Name" className="input w-full bg-blue-950 border border-blue-900 text-white" />
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="Email" className="input w-full bg-blue-950 border border-blue-900 text-white" />
                        </div>
                        <div className="form-control py-3">
                            <input type="text" placeholder="Phone Number" className="input w-full bg-blue-950 border border-blue-900 text-white" />
                        </div>
                        <textarea placeholder="Ask your Question" className="textarea w-full bg-blue-950 border border-blue-900 text-white textarea-lg"></textarea>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#DE606B] hover:bg-[#b93540] text-xl text-white uppercase font-bold">Send Request</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default FAQ;