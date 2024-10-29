/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Input, Pagination } from '@nextui-org/react';
import { useState } from 'react';
import { Avatar, Button } from '@nextui-org/react';
import vimg from '../../../../../assets/onlineclass.png';
import { FaRegArrowAltCircleDown } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';


const Courses = () => {

    const [showAll, setshowAll] = useState(false)
    return (
        <div className="bg-gray-100 w-full pt-8 flex flex-col lg:flex-row rounded-xl">

            <div className="flex w-full  lg:min-w-[250px] max-w-[250px]  flex-wrap sm:flex-nowrap lg:flex-col pb-5   lg:pb-0 items-center justify-between">


                <div className="flex w-auto sm:h-full flex-col">

                    <div className="px-8 h-fit pt-5">

                        <h2 className="font-medium text-[25px] h-[26px]">Free</h2>
                        <h2 className="font-bold text-[25px] h-[26px]">Courses</h2>

                    </div>
                    <div className="sm:h-full px-8 lg:px-6 border-0 lg:border-s-8 rounded-md  border-roseorange">
                        <p className="mt-3 text-[12px] font-medium max-w-[300px] lg:max-w-[250px] w-full">
                            BrainBox Edu committedd to delevering high-quality learning experiences and academic excellence.
                        </p>
                    </div>
                </div>

                <div className=" flex min-w-[150px]  px-8 lg:px-0 lg:pb-5 flex-col">
                    <span className="font-medium"> Total Courses</span>
                    <span className="font-bold">2,000</span>

                </div>
            </div>
            <div className=" lg:w-[calc(100%-250px)] px-2 ">

                <div className="flex   w-full  gap-x-2 overflow-x-auto customescroll pb-1">
                    {/* <button className="min-w-[250px]  py-1 text-[20px] text-black rounded-t-lg"> </button> */}
                    {/* <button className="min-w-[150px] px-5 bg-purple-950 py-1 text-[20px] text-white rounded-t-lg"> Maths</button>
                    <button className="min-w-[150px] bg-white  px-5 py-1 text-[20px] text-black rounded-t-lg"> IT</button>
                    <button className="min-w-[150px] bg-white  px-5 py-1 text-[20px] text-black rounded-t-lg"> Tamil</button>
                    <button className="min-w-[150px] bg-white  px-5 py-1 text-[20px] text-black rounded-t-lg"> Science</button>
                    <button className="min-w-[150px] bg-white  px-5 py-1 text-[20px] text-black rounded-t-lg"> History</button>
                    <button className="min-w-[150px] bg-white  px-5 p-1 text-[20px] text-black rounded-t-lg"> Maths</button>
                    <button className="min-w-[150px] bg-white  px-5 py-1 text-[20px] text-black rounded-t-lg"> IT</button>
                    <button className="min-w-[150px] bg-white  px-5 py-1 text-[20px] text-black rounded-t-lg"> Tamil</button>
                    <button className="min-w-[150px] bg-white  px-5 py-1 text-[20px] text-black rounded-t-lg"> Science</button>
                    <button className="min-w-[150px] bg-white  px-5 py-1 text-[20px] text-black rounded-t-lg"> History</button>
                    <button className="min-w-[150px] bg-white  px-5 p-1 text-[20px] text-black rounded-t-lg"> Maths</button>
                    <button className="min-w-[150px] bg-white  px-5 py-1 text-[20px] text-black rounded-t-lg"> IT</button>
                    <button className="min-w-[150px] bg-white  px-5 py-1 text-[20px] text-black rounded-t-lg"> Tamil</button>
                    <button className="min-w-[150px] bg-white  px-5 py-1 text-[20px] text-black rounded-t-lg"> Science</button>
                    <button className="min-w-[150px] bg-white  px-5 py-1 text-[20px] text-black rounded-t-lg"> History</button>
                    <button className="min-w-[150px] bg-white  px-5 p-1 text-[20px] text-black rounded-t-lg"> Maths</button>
                    <button className="min-w-[150px] bg-white  px-5 py-1 text-[20px] text-black rounded-t-lg"> IT</button>
                    <button className="min-w-[150px] bg-white  px-5 py-1 text-[20px] text-black rounded-t-lg"> Tamil</button>
                    <button className="min-w-[150px] bg-white  px-5 py-1 text-[20px] text-black rounded-t-lg"> Science</button>
                    <button className="min-w-[150px] bg-white  px-5 py-1 text-[20px] text-black rounded-t-lg"> History</button>
                    <button className="min-w-[150px] bg-white  px-5 p-1 text-[20px] text-black rounded-t-lg"> Maths</button> */}


                </div>

                <div className=" w-full flex justify-end  flex-col items-end pt-4 px-3">

                    <div className="max-w-[300px] w-full">

                        <Input
                            // isClearable
                            radius="lg"
                            classNames={{
                                label: "text-black/50 dark:text-white/90",
                                input: [
                                    "bg-transparent",
                                    "text-black ",
                                    "text-[18px] ",

                                    "placeholder:text-black ",
                                ],
                                innerWrapper: "bg-transparent",
                                inputWrapper: [
                                    "shadow-xl",
                                    "bg-default-200/50",
                                    "backdrop-blur-xl",
                                    "backdrop-saturate-200",
                                    "hover:bg-default-200/70",
                                    "group-data-[focus=true]:bg-default-200/50",
                                    "!cursor-text",
                                    "pe-0 ",
                                    "m-0 ",
                                ],
                            }}
                            placeholder="Search by lecthure name..."
                            endContent={
                                <div className="bg-blue-400 rounded-lg w-[40px] grid place-content-center h-full  p-0">
                                    <IoSearch color="white" size={20} />
                                </div>

                            }

                        />
                    </div>

                    <div className="mt-5  mb-2">
                        <button className="flex gap-x-2 items-center cursor-pointer" onClick={() => setshowAll(!showAll)}>
                            <span className="font-semibold">Show more</span><FaRegArrowAltCircleDown />
                        </button>

                    </div>
                </div>

                <div className="bg-blue-200/10  min-h-[250px]  flex">



                    {showAll ?
                        <div className="overflow-x-scroll w-fit  customescroll">

                            <div className="flex max-w-[1500px]  mb-3 w-full gap-x-2 ">
                                {/* <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                                <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                                <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                                <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                                <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                                <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                                <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                                <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                                <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                                <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                                <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                                <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                                <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                                <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                                <CoursesCard name={'Travis Fuller'} type={'Employee'} /> */}

                            </div>

                            <div className="flex max-w-[1500px] w-full gap-x-2 ">
                                {/* <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                                <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                                <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                                <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                                <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                                <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                                <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                                <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                                <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                                <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                                <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                                <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                                <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                                <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                                <CoursesCard name={'Travis Fuller'} type={'Employee'} /> */}

                            </div>
                        </div>

                        :
                        <div className="flex max-w-[1500px] w-full gap-x-2 overflow-x-scroll customescroll">
                            {/* <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                            <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                            <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                            <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                            <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                            <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                            <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                            <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                            <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                            <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                            <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                            <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                            <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                            <CoursesCard name={'Travis Fuller'} type={'Employee'} />
                            <CoursesCard name={'Travis Fuller'} type={'Employee'} /> */}

                        </div>
                    }



                </div>

                <div className=" p-3 flex justify-end p">
                    <Pagination total={10} initialPage={1} className="bg-blue-100 rounded-lg" />

                </div>

            </div>

        </div>
    );

}

const CoursesCard = ({ name, type }) => {
    return (
        <div className="bg-white min-w-[300px] rounded-lg  ">
            <div className="flex justify-between">
                <div className="flex p-3 pe-0">
                    <h2 className='font-bold'>React</h2>

                </div>


            </div>
            <div className="">
                <img src={vimg} className="w-full h-full object-fill" />


            </div>

            <div className="p-3 flex justify-between py-2 ">
                
                <Button className='py-1 text-[16px] bg-yellow-400  p-0 rounded-md  h-fit'>View</Button>
                <div className="flex w-full  items-center md:justify-center">
                    <svg className=" w-4 h-4   text-yellow-600 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className=" w-4 h-4   text-yellow-600 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className=" w-4 h-4   text-yellow-600 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className=" w-4 h-4   text-yellow-600 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className=" w-4 h-4   text-gray-600 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                </div>
            </div>


        </div>
    );
}


export default Courses;
