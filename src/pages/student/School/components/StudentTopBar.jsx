/* eslint-disable no-unused-vars */
import { Avatar, Button } from "@nextui-org/react";
import { BiSearch } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaCartPlus, FaMessage } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { TiArrowSortedUp } from "react-icons/ti";
import Cookies from 'js-cookie';

const StudentTopBar = () => {
    return (
        <StudentTopBar1 />
    );
}
const StudentTopBar1 = () => {
    const logOut = () => {
        Cookies.remove('user_token');
        window.location.reload()
    }
    return (
        <div className="bg-white shadow-lg w-full fixed z-[49]   p-3 py-2 flex justify-between items-center rounded-b-2xl">
            <div className="flex w-full flex-wrap  justify-between items-center gap-x-3">

                <div className="w-fit ms-3  flex items-center gap-x-2">
                    <img
                        className="h-16 w-16  "
                        src="https://lms.brainbox.lk/images/app-logo-gold.png"
                        alt="logo"
                    />
                    <span className="lg:text-[20px] text-center font-semibold hidden sm:block">Welcome to Brain Box</span>
                </div>



                <div className="flex  justify-end w-fit gap-2 items-center ">

                    <div className="relative flex items-center group gap-2">
                        <h2 className="text-[18px] font-medium">RM. Rashan</h2>

                        <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" className="rounded-full  w-[40px] h-[40px]" />

                        <div className="absolute  top-32 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:top-8  transition-all duration-300 right-0 z-[49] shadow-lg ">
                            <div className="bg-white mt-3 ">
                                <div className="flex justify-end pe-2"><TiArrowSortedUp size={20}/></div>
                                <ul className="py-2 ">
                                    <li className="px-8"><Link to={'profile/#profile'} className="flex gap-x-3 items-center py-1" ><FaUserCircle />Profile</Link></li>
                                    <li className="px-8"><Link to={'profile'} className="flex gap-x-3 items-center py-1" ><FaMessage />Messages</Link></li>
                                    <li className="px-8"><Link to={'profile'} className="flex gap-x-3 items-center py-1" ><FaCartPlus />Cart</Link></li>
                                    <li className="mt-3 border-t-2 pt-1 px-8"><Link to={'profile'} className="flex gap-x-3 items-center py-1"><IoKeySharp />Log Out</Link></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <Button onClick={() => logOut()} className="bg-transparent p-0">

                        <CiLogout size={30} className="cursor-pointer" />
                    </Button>


                </div>
            </div>



        </div>
    );
}

// const StudentTopBar2 = () => {
//     return (
//         <div className="bg-white shadow-lg w-full p-3 py-5 flex justify-between items-center rounded-b-2xl">
//             <div className="flex w-full flex-wrap  justify-between items-center gap-x-3">

//                 <div className="w-fit ms-3 order-1">
//                     <span className="lg:text-[20px] text-center font-semibold">Welcome to Smart</span>
//                 </div>

//                 <div className="flex md:w-1/2 ms-5  w-full justify-center md:max-w-[500px] relative h-fit order-3 md:order-2">
//                     <div className="flex w-full relative  max-w-[500px]  mt-3">
//                         <input placeholder="Search" type="text" className="bg-gray-100 ring-primary focus:ring-purple-950/80  focus:border-purple-950/80 ring-purple-950/80  focus:border-none focus:outline-none focus:ring rounded-full w-full p-3 py-2" />
//                         <butoon className="bg-purple-950/80 rounded-full absolute top-0 h-full grid place-content-center right-0 px-7"><BiSearch size={25} color="white" />  </butoon>
//                     </div>
//                 </div>

//                 <div className="flex justify-end w-fit order-2 md:order-3">
//                     <div>
//                         <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" className="rounded-full  w-[40px] h-[40px]" />
//                     </div>
//                 </div>
//             </div>



//         </div>
//     );
// }

export default StudentTopBar;
