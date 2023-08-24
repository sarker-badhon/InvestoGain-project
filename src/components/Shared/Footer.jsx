
import React from 'react';
// import { FaGreaterThan } from 'react-icons/fa';
import { FaFacebook, FaYoutube, FaTwitter, FaPinterest } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer style={{ backgroundImage: "url('https://i.ibb.co/VggPtPN/hero-bg.png')" }} className=" py-10 mt-54">
            <div className='text-center py-4'>
                <div className='mb-5'>

                    <h1 className='text-white text-3xl font-bold text-center '>InvestoGain</h1>
                    <p className='text-gray-400 mt-3'>subscribes to our mailing list</p>
                </div>
                <div className="join mb-10">
                    <input className="input input-bordered join-item" placeholder="Your Email" />
                    <button className="btn join-item rounded-full bg-orange-500">Subscribe</button>
                </div>
            </div>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <div className='text-left '>
                        <h2
                            className="text-white font-bold text-xl mb-4" >
                            About InvestoGain
                        </h2>

                        <p className="text-gray-400 flex items-center">
                            Duis lobortis massa imperdiet quam.spendisse potenti. Pellentesque commodo eros a enim. Vestibulum turpis sem, aliquet eget
                        </p>
                        <div className='flex gap-3 mt-4'>
                            <FaFacebook size={30} color="#4267B2" />
                            <FaYoutube size={30} color="#FF0000" />
                            <FaTwitter size={30} color="#1DA1F2" />
                            <FaPinterest size={30} color="#E60023" />
                        </div>


                    </div>

                    <div className='text-left'>
                        <h4 className="text-white font-bold text-xl">Useful Link</h4>
                        <p className="text-gray-400 mt-4">InvestoGain Plan </p>
                        <p className="text-gray-400">Privacy & Policy </p>
                        <p className="text-gray-400">Dashboard </p>
                        <p className="text-gray-400">Login Account </p>
                        <p className="text-gray-400">Teams Of Condition </p>
                    </div>
                    <div className='text-left'>
                        <h4 className="text-white font-bold text-xl">Company</h4>
                        <p className="text-gray-400 mt-4">About Company </p>
                        <p className="text-gray-400">Contact Us</p>
                        <p className="text-gray-400 ">Latest Blog</p>
                        <p className="text-gray-400">FAQ</p>
                        <p className="text-gray-400">Top Investor</p>

                    </div>
                    <div className='text-left '>
                        <h4 className="text-white font-bold text-xl ">Support</h4>
                        <p className="text-gray-400 mt-4">Phone :</p>
                        <p className="text-gray-400">1234 - 567 - 89012</p>
                        <p className="text-gray-400">1234 - 567 - 89013</p>
                        <p className="text-gray-400">Email :</p>
                        <p className="text-gray-400"> demo@gmail.com</p>
                        <p className="text-gray-400">Investogain@gmail.net</p>
                    </div>


                </div>

                <div className="divider divider-vertically w-full h-1 bg-white my-4"></div>
                <div className="text-center">
                    <p className="text-gray-400">&copy; 2023  InvestoGain All rights reserved.</p>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="#" className="text-gray-400">Privacy Policy</a></li>
                        <li className="list-inline-item"><a href="#" className="text-gray-400">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;