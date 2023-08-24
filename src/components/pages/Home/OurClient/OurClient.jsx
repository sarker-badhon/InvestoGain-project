import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const OurClient = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className='py-20 mx-20'>
            <div className="text-white text-center">
                <h1
                    className='text-white font-bold text-4xl lg:text-6xl py-5 px-2'>What's Say Our Happy Client
                </h1>
                <p className='text-xl text-white'>Curabitur ullamcorper ultricies nisi Nam eget dui.</p>
                <p className='text-xl text-white'>Etiam rhoncus fdsf df vulputate. </p>
            </div>

            <div className='h-screen w-full ' style={{ backgroundImage: "url('https://i.ibb.co/3hQFFD3/feedback-bg.png')", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>

                <Slider {...settings}>
                    <div className="h-screen w-full mt-5" >
                        <div className="flex justify-center items-center flex-col h-full ">
                            <img src="https://i.ibb.co/xY5xL54/1671194887274-01.jpg" alt="Image 1" className="h-32 rounded-full" />
                            <h1 className="text-2xl font-bold mt-3 text-white"> Badhon Sarker</h1>
                            <p className='text-white mt-2'>CEO .Telicom</p>
                            <p className="text-lg mt-2 text-white text-center w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ex quibusdam quisquam aspernatur a illo quod non cupiditate magnam beatae iusto commodi nostrum veniam corrupti provident dolorum impedit, ullam quidem. 1</p>
                        </div>
                    </div>
                    <div className="h-screen w-full mt-5" >
                        <div className="flex justify-center items-center flex-col h-full">
                        <img src="https://i.ibb.co/rtWm0DZ/smile-2072907-1280.jpg" alt="Image 1" className="h-32 rounded-full" />
                            <h1 className="text-2xl font-bold mt-3 text-white"> Badhon Sarker</h1>
                            <p className='text-white mt-2'>CEO .Telicom</p>
                            <p className="text-lg mt-2 text-white text-center w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ex quibusdam quisquam aspernatur a illo quod non cupiditate magnam beatae iusto commodi nostrum veniam corrupti provident dolorum impedit, ullam quidem. 1</p>
                        </div>
                    </div>
                    <div className="h-screen w-full mt-5">
                        <div className="flex justify-center items-center flex-col h-full">
                        <img src="https://i.ibb.co/P9YBd8r/guy-3237859-640.webp" alt="Image 1" className="h-32 rounded-full" />
                            <h1 className="text-2xl font-bold mt-3 text-white"> Badhon Sarker</h1>
                            <p className='text-white mt-2'>CEO .Telicom</p>
                            <p className="text-lg mt-2 text-white text-center w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ex quibusdam quisquam aspernatur a illo quod non cupiditate magnam beatae iusto commodi nostrum veniam corrupti provident dolorum impedit, ullam quidem. 1</p>
                        </div>
                    </div>
                    <div className="h-screen w-full mt-5" >
                        <div className="flex justify-center items-center flex-col h-full">
                        <img src="https://i.ibb.co/0s96Ysm/black-man-4699506-640.jpg" alt="Image 1" className="h-32 rounded-full" />
                            <h1 className="text-2xl font-bold mt-3 text-white"> Badhon Sarker</h1>
                            <p className='text-white mt-2'>CEO .Telicom</p>
                            <p className="text-lg mt-2 text-white text-center w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ex quibusdam quisquam aspernatur a illo quod non cupiditate magnam beatae iusto commodi nostrum veniam corrupti provident dolorum impedit, ullam quidem. 1</p>
                        </div>
                    </div>
                    
                    
                </Slider>


            </div>

        </div>
    );
};

export default OurClient;