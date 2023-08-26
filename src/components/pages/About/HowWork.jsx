import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChartLine, faDollarSign } from '@fortawesome/free-solid-svg-icons';
const HowWork = () => {
    return (
        <div className='md:mx-20 px-3 my-16'>
            {/* -------------------------------How InvestoGain Works------------------- */}
            <div className='text-center text-white'>
                <h1 className='text-xl md:text-4xl lg:text-5xl my-2 md:my-3'>
                    How InvestoGain Works
                </h1>
                <p className='text-xs md:text-sm lg:text-base'>
                    Get involved in our tremendous platform and Invest. We will utilize your money and give you profit in your wallet automatically.
                </p>
            </div>

            <div class="lg:border-t border-dashed border-[#DE606B] p-4 mt-8 md:mt-32 "></div>

            <div className='flex flex-col md:flex-row justify-between md:-mt-24'>



                <div className='text-center'>
                    <div
                        className="border-4 border-[#DE606B]  w-32 h-28 rounded-full text-white bg-slate-600 flex justify-center items-center text-center shadow-lg shadow-[#DE606B]">
                        <div className='text-white -mt-28 border-4 border-[#DE606B] bg-gray-700 w-10 h-10 rounded-full flex justify-center items-center text-xl '>1</div>
                        <div className=""><FontAwesomeIcon className='w-10 h-10' icon={faUser} /></div>
                    </div>

                    <h1 className='py-5 text-xl text-white font-bold'>Creat Account</h1>
                </div>

                <div className='text-center'>

                    <div
                        className="border-4 border-[#DE606B]  w-36 h-32 rounded-full text-white bg-slate-600 flex justify-center items-center text-center shadow-lg shadow-[#DE606B]">
                        <div className='text-white -mt-32 border-4 border-[#DE606B] bg-gray-700 w-10 h-10 rounded-full flex justify-center items-center text-xl'>2</div>
                        <div className="">
                            <FontAwesomeIcon className='w-10 h-10' icon={faChartLine} /></div>
                    </div>


                    <h1 className='py-5 text-xl text-white font-bold'>Invest To Plan</h1>
                </div>
                <div className='text-center lg:text-center '>

                    <div
                        className="border-4 border-[#DE606B]  w-36 h-32 rounded-full text-white bg-slate-600 flex justify-center items-center text-center shadow-lg shadow-[#DE606B]">
                        <div className='text-white -mt-32 border-4 border-[#DE606B] bg-gray-700 w-10 h-10 rounded-full flex justify-center items-center text-xl'>3</div>
                        <div className="">
                            <FontAwesomeIcon className='w-10 h-10' icon={faDollarSign} />
                        </div>
                    </div>


                    <h1 className='py-5 text-xl text-white font-bold'>Get Profit</h1>
                </div>






            </div>


            {/* -------------------------------How InvestoGain Works----END--------------- */}


            {/* ------------------Get Started Today WithUs----------
                 ------------------------------START ---------------------- */}
            <div className='bg-black bg-opacity-40 rounded-lg text-white h-[300px] md:h-[340px] my-8 md:my-24'>
                <div className="text-center mx-4 md:mx-52">
                    <h1 className='text-xl md:text-4xl lg:text-5xl font-bold text-center py-6 md:py-10'>
                        Get Started Today With Us
                    </h1>
                    <p className='text-sm md:text-base lg:text-lg text-center'>
                        This is a Revolutionary Money Making Platform! Invest for Future in Stable Platform and Make Fast Money. Not only we guarantee the fastest and the most exciting returns on your investments, but we also guarantee the security of your investment.
                    </p>
                    <button className="bg-[#DE606B] text-white py-2 md:py-3 px-4 md:px-8 mt-4 md:mt-8 rounded-lg hover:bg-[#DE5C70] uppercase font-bold">
                        Join us
                    </button>
                </div>
            </div>



            {/* -------------------START----Our Expert Team Members----------------------- */}

            <div className='my-20'>
                <div className='text-center text-white'>
                    <h1 className='text-xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-5'>Our Expert Team Members</h1>
                    <p className='text-xs md:text-sm lg:text-base mx-4 md:mx-32'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse voluptatum eaque earum quos quia? Id aspernatur ratione, voluptas nulla rerum laudantium neque ipsam eaque
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:py-20 px-3 lg:px-16 pt-8 pb-10'>


                    <div className='bg-gray-500 hover:bg-[#DE606B] w-[300px] rounded overflow-hidden shadow-md hover:shadow-lg hover:shadow-blue-400 transition duration-300 ease-in-out p-4'>
                        <img className='h-64 w-full rounded object-cover ' src="https://i.ibb.co/xY5xL54/1671194887274-01.jpg" alt="" />
                        <div className='pt-8'>
                            <h1 className='text-white font-bold lg:text-xl'>Badhon Sarker</h1>
                            <p className='text-white  lg:text-xl'>CEO</p>

                        </div>
                    </div>

                    <div className='bg-gray-500 hover:bg-[#DE606B] w-[300px] rounded overflow-hidden shadow-md hover:shadow-lg hover:shadow-blue-400 transition duration-300 ease-in-out p-4'>
                        <img className='h-64 w-full rounded object-cover ' src="https://i.ibb.co/8DWjLYn/3.jpg" alt="" />
                        <div className='pt-8'>
                            <h1 className='text-white font-bold lg:text-xl'>Danial K.</h1>
                            <p className='text-white  lg:text-xl'>CTO</p>
                        </div>
                    </div>

                    <div className='bg-gray-500 hover:bg-[#DE606B] w-[300px] rounded overflow-hidden shadow-md hover:shadow-lg hover:shadow-blue-400 transition duration-300 ease-in-out p-4'>
                        <img className='h-64 w-full rounded object-cover ' src="https://i.ibb.co/Kjf1K4M/6.jpg" alt="" />
                        <div className='pt-8'>
                            <h1 className='text-white font-bold lg:text-xl'>Alex joe</h1>
                            <p className='text-white  lg:text-xl'>UX Expert</p>

                        </div>
                    </div>
                    <div className='bg-gray-500 hover:bg-[#DE606B] w-[300px] rounded overflow-hidden shadow-md hover:shadow-lg hover:shadow-blue-400 transition duration-300 ease-in-out p-4'>
                        <img className='h-64  w-full rounded object-cover ' src="https://i.ibb.co/fkFDxvc/2.jpg" alt="" />
                        <div className='pt-8'>
                            <h1 className='text-white font-bold lg:text-xl'>Juna Sun</h1>
                            <p className='text-white  lg:text-xl'>Marketing Head</p>

                        </div>
                    </div>
                    <div className='bg-gray-500 hover:bg-[#DE606B] w-[300px] rounded overflow-hidden shadow-md hover:shadow-lg hover:shadow-blue-400 transition duration-300 ease-in-out p-4'>
                        <img className='h-64 w-full rounded object-cover ' src="https://i.ibb.co/235L94v/1671206120570-01.jpg" alt="" />
                        <div className='pt-8'>
                            <h1 className='text-white font-bold lg:text-xl'>Profed Laun</h1>
                            <p className='text-white  lg:text-xl'>SEO</p>

                        </div>
                    </div>

                    <div className='bg-gray-500 w-[300px] rounded overflow-hidden shadow-md hover:bg-[#DE606B] hover:shadow-lg hover:shadow-blue-400 transition duration-300 ease-in-out p-4'>
                        <img className='h-64  w-full rounded' src="https://i.ibb.co/26dBYqb/4.jpg" alt="" />
                        <div className='pt-8'>
                            <h1 className='text-white font-bold lg:text-xl'>Lew Son</h1>
                            <p className='text-white  lg:text-xl'>Manager</p>

                        </div>
                    </div>



                </div>
            </div>
            {/* -------------------END----Our Expert Team Members----------------------- */}




        </div>

    );
};

export default HowWork;