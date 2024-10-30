/* eslint-disable no-unused-vars */
import {  FaGraduationCap, FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import { TiThMenu } from "react-icons/ti";
import { IoClose, IoVideocam } from "react-icons/io5";
import {  MdPayments } from "react-icons/md";
import { GiOpenBook } from "react-icons/gi";
import { GoPackage } from "react-icons/go";
import { HiClipboardDocument } from "react-icons/hi2";

const StudentLeftBar = () => {

    return (
        <Left />
    );
}

const Left = () => {
    const [open, setopen] = useState(false);

    const { pathname } = useLocation();
    const item = [
        {

            icon: <FaHome color="gray" size={20} />,
            name: 'home',
            url: '',
            urlname: '/student/dashboard'
        },
        {

            icon: <HiClipboardDocument color="gray" size={20} />,
            name: 'Exam & Assessment',
            url: 'exam&assessment',
            urlname: '/student/dashboard/exam&assessment'

        },
        {

            icon: <IoVideocam color="gray" size={20} />,
            name: 'Recordings',
            url: 'recordings',
            urlname: '/student/dashboard/recordings'

        },
        {

            icon: <GoPackage color="gray" size={20} />,
            name: 'Package',
            url: 'package',
            urlname: '/student/dashboard/package'

        },
        {

            icon: <GiOpenBook color="gray" size={20} />,
            name: 'Free Courses',
            url: 'free-courses',
            urlname: '/student/dashboard/free-courses'

        },
        {

            icon: <FaGraduationCap color="gray" size={20} />,
            name: 'Higher Education',
            url: 'higher-education',
            urlname: '/student/dashboard/higher-education'

        },
        // {



        //     icon: <MdPayments color="gray" size={20} />,
        //     name: 'Payments',
        //     url: 'payments',
        //     urlname: '/student/dashboard/payments'

        // },
    ]
    return (
        <div className="h-dvh xl:w-[200px] relative z-[49]  mt-[130px]  flex items-center">

            <button onClick={() => setopen(!open)} className="bg-indigo-500 flex cursor-pointer top-[80px]  xl:hidden text-white fixed -left-2 p-3 py-2 rounded-lg">
                <TiThMenu size={20} />



            </button>
            <div className={`h-dvh  w-[200px] top-[78px] fixed  ${open ? 'left-[0]' : '-left-[100%]'} xl:-left-0 transition-all duration-500 flex-col justify-center  flex `}>
                <div className=" h-full flex bg-white w-full   flex-col shadow-[3px_22px_20px_-10px_rgba(0,0,0,0.3)]   p-2 pe-0 ">
                    <div className="w-full flex justify-end">
                        <button onClick={() => setopen(!open)} className="flex bg-indigo-500 items-center cursor-pointer w-fit justify-end  xl:hidden    rounded-lg">
                            <IoClose color="white" size={30} />
                        </button>
                    </div>
                   

                    <div className="flex flex-col mt-5  gap-2">

                        {item.map((item, index) =>
                            <Link key={index} to={`${item.url}`} className="cursor-pointer" onClick={() => setopen(!open)} >


                                <div className={`flex gap-2 py-2 mt5 items-center px-1 ${pathname == item.urlname ? ' border-roseorange border-r-5   bg-gray-200/80  ' : ' bg-white'}  rounded-lg`}>
                                    {item.icon}
                                    <span className="p-0  text-center  text-[14px] mt-1">
                                        {item.name}
                                    </span>

                                </div>
                            </Link>
                        )}
                    </div>

                </div>

            </div>
        </div>
    );
}


export default StudentLeftBar;
