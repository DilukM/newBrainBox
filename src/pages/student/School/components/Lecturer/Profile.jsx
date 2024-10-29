/* eslint-disable react/prop-types */
// import { Avatar } from "@nextui-org/react";
import { Avatar, Button } from '@nextui-org/react';
import video from '../../../../../assets/coursevideo.png'
import video2 from '../../../../../assets/coursevideo2.png'
import { FaPlay } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Profile = ({ Close }) => {

    return (
        <div className="w-full flex flex-col rounded-3xl bg-gray-100 ">
            <di className="w-full p-3 flex justify-end">
                <Button onClick={() => Close()} className='bg-transparent'>

                    <IoIosCloseCircleOutline size={30} />
                </Button>

            </di>
            <div className="w-full flex flex-col    justify-between gap-x-2 rounded-3xl bg-gray-100 p-5">

                <div className='w-full justify-around  hfu flex flex-col md:flex-row'>

                    <div className="flex flex-col ">
                        <div className='flex'>

                            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" className="rounded-[10px]  md:rounded-[30px] w-[80px] h-[80px] md:w-[140px]  md:h-[140px]  " />
                            <div className="flex flex-col ms-2  md:ms-5">
                                <h2 className="text-[20px] md:text-[24px] lg:[28px] xl:text-[35px] font-sans  font-medium">Mr.Sanath Nishantha</h2>
                                <span className="md:-translate-y-2 text-[14px]">MBA (Peredeniya) BSc, AMCP</span>
                                <div className="flex gap-x-3 mt-3">
                                    <div className="bg-teal-600 rounded-md w-fit px-6 py-1 text-white">Maths</div>
                                    <div className="bg-teal-600 rounded-md w-fit px-6 py-1 text-white">English</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row w-full  my-3 md:my-0 gap-y-3 border-b-2 border-gray-400 border-t-2 md:border-none justify-center gap-x-3 lg:text-[18px] ">

                            <div className="flex gap-x-3">
                                <h4>4.7 Instructor Rating</h4>
                            </div>
                            <div className="flex gap-x-3">
                                <h4>242,017 Rewviews</h4>
                            </div>
                            <div className="flex gap-x-3">
                                <h4>776,078</h4>
                            </div>
                            <div className="flex gap-x-3">
                                <h4>34 Courses</h4>
                            </div>

                        </div>



                    </div>

                    <div className='flex'>

                        <div className="bg-gray-500 flex h-full w-[3px]">
                        </div>
                    </div>
                    <div className="flex flex-col  md:items-center gap-y-3">
                        <h3 className="font-semibold text-[16px] lg:text-[20px] ">Students</h3>
                        <h2 className="font-semibold text-[20px] lg:text-[40px] ">5,800</h2>
                        <div className="flex w-full my-3 md:justify-center">
                            <svg className=" w-4 h-4 lg:w-6 lg:h-6 text-yellow-700 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className=" w-4 h-4 lg:w-6 lg:h-6 text-yellow-700 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className=" w-4 h-4 lg:w-6 lg:h-6 text-yellow-700 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className=" w-4 h-4 lg:w-6 lg:h-6 text-yellow-700 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className=" w-4 h-4 lg:w-6 lg:h-6 text-yellow-700 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </div>


                    </div>
                </div>




            </div>

            <div className="flex p-5 flex-col md:flex-row bg-sky-300/10">
                <div className="w-full flex  md:w-4/12 lg:w-5/12 h-fit  xl:w-1/3 pe-5">
                    <img src={video} className="rounded-3xl w-full md:w-auto " />
                </div>
                <div className="w-full md:w-8/12 lg:w-7/12 flex justify-center xl:w-2/3">

                    <div className="flex flex-col max-w-[800px] w-full gap-y-3 max-h-[400px]  h-full customescroll scroll-smooth   [&::-webkit-scrollbar]:w-1 overflow-y-auto ">

                        

                        <RecordingLeftCard/>
                        <RecordingLeftCard/>
                        <RecordingLeftCard/>
                        <RecordingLeftCard/>
                        <RecordingLeftCard/>
                    

                      










                    </div>

                </div>

            </div>


        </div>
    );
}

const RecordingLeftCard = () => {
    return (

        <div className=" border-b-2 py-3 border-gray-400  ">

            <div className="flex items-center md:gap-x-3 overflow-x-hidden w-full">

                <div className="md:w-[50px]">
                    <div className="border-3 border-black grid place-content-center p-2  w-fit h-fit rounded-full ">
                        <FaPlay color="red"   className='text-[10px] md:text-[20px]'/>
                    </div>

                </div>
                <div className="bg-white relative w-full rounded-3xl flex overflow-x-hidden">
                    <img src={video2} className="w-8 md:w-12 rounded-xl" />
                    <div className="ps-1 pb-4 pt-1 md:ps-5 flex items-center flex-nowrap ">
                        <span className="text-[12px] md:text-[24px] noto-sans-sinhala text-nowrap">
                            සංඛ්යා පද්ධති
                            <span className="ms-3 noto-sans-sinhala  text-[12px] md:text-[16px] text-nowrap  ">(Number System) mnnnyyyyynn</span>

                        </span>

                    </div>

                    <div className="absolute bottom-0 right-4">
                        <span className="text-[12px]">4.42</span>
                    </div>
                </div>
            </div>
            <div className="w-full flex  mt-2 justify-end">
                <span className="flex font-medium me-4 text-[14px]">5.8M Views <span className="mx-1"></span>{'*'} 1 Years</span>
            </div>
        </div>   
    )
}

export default Profile;
