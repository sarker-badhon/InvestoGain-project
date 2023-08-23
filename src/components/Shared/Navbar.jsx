import React from 'react';
import Banner from '../pages/Home/Home/Banner/Banner';

const Navbar = () => {
    return (
        <div className='bg-blue-950 h-screen' style={{ backgroundImage: "url('https://i.ibb.co/VggPtPN/hero-bg.png')" }}>
            <div className='mx-5 lg:mx-20'>
                <div className="navbar">
                    <div className="navbar">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 text-black rounded-box w-52">
                                {/* ... Mobile menu items ... */}
                                <li className="group">
                                    <a className="hover:text-[#e98c5d] font-bold">Home</a>
                                </li>
                                <li className="group">
                                    <a className="hover:text-[#e98c5d] font-bold">About</a>
                                </li>
                                <li className="group">
                                    <a className="hover:text-[#e98c5d] font-bold">Plan</a>
                                </li>
                                <li className="group relative">
                                    <a className="hover:text-[#e98c5d] font-bold">Pages</a>
                                    <ul className="dropdown-content absolute hidden group-hover:block mt-9 py-4 z-[5] bg-white text-black shadow-lg rounded-md w-44 pr-2 ">
                                        <li className='hover:bg-[#DE606B] rounded   '><a className='hover:text-white'>Dashboard</a></li>
                                        <li className='hover:bg-[#DE606B] rounded  '><a className='hover:text-white'>Blog Post</a></li>
                                        <li className='hover:bg-[#DE606B]  rounded '><a className='hover:text-white'>Blog Details</a></li>
                                        <li className='hover:bg-[#DE606B]  rounded '><a className='hover:text-white'>Create Account</a></li>
                                        <li className='hover:bg-[#DE606B]  rounded '><a className='hover:text-white'>Privacy Policy</a></li>
                                        <li className='hover:bg-[#DE606B]  rounded '><a className='hover:text-white'>Investor</a></li>
                                        <li className='hover:bg-[#DE606B]  rounded '><a className='hover:text-white'>FAQ</a></li>
                                    </ul>
                                </li>
                                <li className="group">
                                    <a className="hover:text-[#e98c5d] font-bold">Blog</a>
                                </li>
                                <li className="group">
                                    <a className="hover:text-[#e98c5d] font-bold">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <a href="/" className="btn btn-ghost normal-case text-3xl font-bold text-white ">InvestoGain</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-xl text-white">
                            {/* ... Desktop menu items ... */}
                            <li className="group">
                                <a className="hover:text-[#e98c5d] font-bold">Home</a>
                            </li>
                            <li className="group">
                                <a className="hover:text-[#e98c5d] font-bold">About</a>
                            </li>
                            <li className="group">
                                <a className="hover:text-[#e98c5d] font-bold">Plan</a>
                            </li>
                            <li className="group relative">
                                <a className="hover:text-[#e98c5d] font-bold">Pages</a>
                                <ul className="dropdown-content absolute hidden group-hover:block mt-9 py-4 bg-white text-black shadow-lg rounded-md w-44 pr-2 ">
                                    <li className='hover:bg-[#DE606B] rounded   '><a className='hover:text-white'>Dashboard</a></li>
                                    <li className='hover:bg-[#DE606B] rounded  '><a className='hover:text-white'>Blog Post</a></li>
                                    <li className='hover:bg-[#DE606B]  rounded '><a className='hover:text-white'>Blog Details</a></li>
                                    <li className='hover:bg-[#DE606B]  rounded '><a className='hover:text-white'>Create Account</a></li>
                                    <li className='hover:bg-[#DE606B]  rounded '><a className='hover:text-white'>Privacy Policy</a></li>
                                    <li className='hover:bg-[#DE606B]  rounded '><a className='hover:text-white'>Investor</a></li>
                                    <li className='hover:bg-[#DE606B]  rounded '><a className='hover:text-white'>FAQ</a></li>
                                </ul>
                            </li>
                            <li className="group">
                                <a className="hover:text-[#e98c5d] font-bold">Blog</a>
                            </li>
                            <li className="group">
                                <a className="hover:text-[#e98c5d] font-bold">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button className="text-white uppercase font-bold border-2 hover:bg-[#DE606B] border-[#DE606B] px-6 py-2 rounded-2xl mr-2 lg:mr-4">SignUp</button>
                        {/* <button style={{ backgroundImage: "linear-gradient(to right, #de5c70 0%, #e98c5d 51%, #de5c70 100%)" }} className="text-white uppercase font-bold px-6 py-2.5 rounded-2xl lg:px-8 lg:py-2.5">Login</button> */}
                    </div>
                </div>
            </div>
            <Banner />
        </div>
    );
};

export default Navbar;
