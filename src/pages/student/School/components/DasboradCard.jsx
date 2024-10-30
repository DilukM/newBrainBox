/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Avatar, AvatarGroup, Button } from "@nextui-org/react";
import { CiSettings } from "react-icons/ci";
import { IoWallet } from "react-icons/io5";
import QRCode from "react-qr-code";
import useWindowSize from "../../../../hooks/useWindowSize";
import { FaRegArrowAltCircleDown, FaSchool, FaUsers } from "react-icons/fa";
import { useState } from "react";

const DasboradCard = ({ authuser }) => {
    const size = useWindowSize();
    const [open, setopen] = useState(false)

    console.log(authuser)
    return (
        <div className="bg-gray-50   flex gap-x-3 min-h-[250px] h-fit border-e-[12px] border-roseorange w-full rounded-2xl p-[10px] shadow-[-2px_10px_20px_-0px_rgba(0,0,0,0.3)]  ">



            {size.width <= 639 ?
                <div className="flex flex-col gap-2 w-full">
                    <div className="flex w-full flex-col sm:flex-row gap-2 justify-around">
                        <ProfileSection name={authuser.user.username} price={'000'}  />
                        <StudentID studentid={authuser.id}  />

                        <div className="flex justify-end py-3 pb-0">
                            <Button onClick={() => setopen(!open)}>
                                {open ? 'Close' : 'Show'} More <FaRegArrowAltCircleDown />
                            </Button>

                        </div>
                    </div>

                    {open ?
                        <div className="w-full flex  flex-col gap-3 h-full">
                            <ProjectStatus />
                            <CustomerCount count={[
                                {
                                    count: '600',
                                    name: 'School'
                                },
                                {
                                    count: '24521',
                                    name: 'Students'
                                },
                                {
                                    count: '5000',
                                    name: 'Teachers'
                                },
                                {
                                    count: '10000',
                                    name: 'Parants'
                                }
                            ]} />

                            <div className="flex justify-end py-3 pb-0">
                                <Button onClick={() => setopen(!open)}>
                                    {open ? 'Close' : 'Show'} More <FaRegArrowAltCircleDown />
                                </Button>

                            </div>
                        </div>
                        :
                        ""
                    }

                </div>
                :



                size.width <= 1120 ?

                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex w-full flex-col sm:flex-row  justify-around">
                            <ProfileSection name={authuser.user.username} price={'000'} />
                            <StudentID studentid={authuser.id} />
                        </div>
                        <div className="w-full flex  flex-col gap-3 h-full">
                            <ProjectStatus />
                            <CustomerCount count={[
                                {
                                    count: '136',
                                    name: 'School'
                                },
                                {
                                    count: '2521',
                                    name: 'Students'
                                },
                                {
                                    count: '861',
                                    name: 'Teachers'
                                },
                                {
                                    count: '3896',
                                    name: 'Parants'
                                }
                            ]} />
                        </div>
                    </div>

                    :

                    size.width <= 1310 && size.width >= 1120 ?
                        <>

                            <ProfileSection name={authuser.user.username} price={'000'} />

                            <div className="w-full flex  flex-col gap-3 h-full">
                                <StudentID studentid={authuser.id} />
                                <ProjectStatus />
                                <CustomerCount count={[
                                    {
                                        count: '136',
                                        name: 'School'
                                    },
                                    {
                                        count: '2521',
                                        name: 'Students'
                                    },
                                    {
                                        count: '861',
                                        name: 'Teachers'
                                    },
                                    {
                                        count: '3896',
                                        name: 'Parants'
                                    }
                                ]} />
                            </div>
                        </>
                        :

                        <>
                            <ProfileSection name={authuser.user.username} price={'000'} />
                            <div className="flex flex-col min-w-[250px]">

                                <StudentID studentid={authuser.id} />
                                <Grade />
                            </div>
                            <div className="w-full flex  flex-col gap-3 h-full">
                                <ProjectStatus />
                                <CustomerCount count={[
                                    {
                                        count: '136',
                                        name: 'School'
                                    },
                                    {
                                        count: '2521',
                                        name: 'Students'
                                    },
                                    {
                                        count: '861',
                                        name: 'Teachers'
                                    },
                                    {
                                        count: '3896',
                                        name: 'Parants'
                                    }
                                ]} />
                            </div>
                        </>

            }



        </div>
    );
}

const Grade = () => {
    return (
        <div className="bg-green-950 min-h-[90px] rounded-lg grid place-content-center my-2 mt-3">
            <h2 className="text-white text-[22px]  font-semibold">GRADE : 10</h2>
        </div>
    )
}
const ProfileSection = ({ name, price }) => {
    return (
        <div className="sm:max-w-[350px] shadow-lg h-full flex flex-col min-w-fit">

            <div className="bg-white h-[285px]  shadow-lg flex flex-col justify-center items-center shadow-gray-100 p-5  px-8">
                <div className="mask mask-squircle ">
                    <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" className="rounded-[30px]  w-[170px] h-[170px]" />
                </div>
                <h3 className="text-center font-semibold my-3 text-[22px] text-darkblue">{name}</h3>
            </div>
            <div className="h-[100px] flex  justify-center items-center w-full">
                <div className="rounded-lg justify-center h-[90px] bg-[#0281ff] shadow-blue-500/50 shadow-lg text-white px-3  mt-4 text-[18px] flex flex-col w-full items-center">
                    <div className="flex gap-1 items-center">
                        <IoWallet size={22} className="  me-1" />
                        Balance
                    </div>
                    <span className="font-bold ms-1"> Rs 00.00</span> </div>
            </div>
            {/* <div className="bg-white/70 flex flex-col py-3 h-full  shadow-lg shadow-gray-100  mt-1 justify-center items-center">
                <div className="w-fit flex text-[16px] flex-col gap-y-2">

                    <div className=" flex "><IoLocationOutline size={18} /><span className="ms-2  font-medium">{address}</span></div>
                    <div className=" flex "><HiOutlineMail color="" size={18} /><span className="ms-2  font-medium">{email}</span></div>
                    <div className=" flex "><IoCallOutline size={18} /><span className="ms-2  font-medium">{mobile}</span></div>
                </div>

                <div className="flex w-full pe-2 justify-end">
                    <Link to={'/student/profile'} target="_blank">
                        <BiSolidEdit size={22} />
                    </Link>
                </div>
            </div> */}
        </div>
    )
}


const StudentID = ({ studentid }) => {

    const size = useWindowSize();
    return (
        <>

            {size.width <= 1310 && size.width >= 1120 ?
                <div className="w-full  flex rounded-lg   pe-3 bg-white shadow-md border-e-5 border-roseorange">

                    <div className="flex w-[550px]  ">

                        <div className="bg-roseorange w-fit rounded-l-lg p-5 pe-10 relative 
            after:absolute  after:h-full after:w-[100px]
            after:top-0 after:border-t-white
            after:border-r-[50px] after:border-b-[88px] after:border-l-[40px] 
            after:border-solid after:border-r-transparent after:border-l-transparent 
            after:border-b-white
              text-white text-[32px] after:z-10 font-medium">STUDENT ID</div>
                        <div className="w-fit text-black text-[32px] grid place-items-center font-medium z-20"> {studentid}</div>
                    </div>
                    <div className="w-[calc(100%-500px)] grid place-content-center">
                        <QRCode value={studentid} size={50} />
                    </div>
                </div>
                :
                <>
                    <div className="w-full shadow-lg sm:max-w-[400px] flex flex-col h-full">

                        <div className="bg-roseorange w-full rounded-lg  p-5 text-center text-white text-[15px] md:text-[28px]  font-medium">STUDENT ID</div>

                        <div className="w-full bg-white h-full py-3  grid place-items-center">
                            <QRCode value={studentid} size={70} />
                            <div className="w-fit text-black  px-3 text-[18px] md:text-[28px] grid place-items-center text-center font-medium z-20">{studentid}</div>

                        </div>

                    </div>
                </>
            }


        </>
    )
}

const ProjectStatus = () => {
    return (
        <div className="w-full h-full rounded-lg bg-white shadow-lg">
            <h2 className="px-2 py-3 text-[18px] font-medium">Project Status</h2>
            <div className="flex flex-wrap md:flex-nowrap w-full md:h-[calc(100%-51px)] gap-x-1">

                <ProjectStatusCard date={'May 01 , 2021'} percentage={'55'} subpercentage={'22'} bordercolour={'border-sky-500'} classtype={'Theory Class'} subtitle={'App Development'} subjects={[

                    {
                        subject: 'English',
                        colour: 'text-orange-500',
                        bgcolour: 'bg-orange-500/10'

                    },
                    {
                        subject: 'Maths',
                        colour: 'text-sky-500',
                        bgcolour: 'bg-sky-500/10'
                    },

                ]} />
                <ProjectStatusCard date={'May 01 , 2021'} percentage={'55'} subpercentage={'22'} bordercolour={'border-pink-500'} classtype={'Paper Class'} subtitle={'App Development'} subjects={[

                    {
                        subject: 'English',
                        colour: 'text-orange-500',
                        bgcolour: 'bg-orange-500/10'

                    },
                    {
                        subject: 'Maths',
                        colour: 'text-sky-500',
                        bgcolour: 'bg-sky-500/10'
                    },

                ]} />
                <ProjectStatusCard date={'May 01 , 2021'} percentage={'55'} subpercentage={'22'} bordercolour={'border-orange-500'} classtype={'Revision Class'} subtitle={'App Development'} subjects={[

                    {
                        subject: 'English',
                        colour: 'text-orange-500',
                        bgcolour: 'bg-orange-500/10'

                    },


                ]} />

            </div>

        </div>
    )
}
const ProjectStatusCard = ({ classtype, subtitle, subjects, bordercolour, percentage, subpercentage, date }) => {
    return (


        <div className={`bg-white shadow-md  h-full rounded-lg min-w-[200px] mb-5 w-full border-s-4 p-2 ${bordercolour}`}>

            <h3 className="font-semibold m-0  text-[20px]">{classtype}</h3>
            <span className="text-[12px] text-gray-400">{subtitle}</span>

            <div className="flex gap-x-1 ">
                {subjects.map((item, index) =>
                    <button key={index} className={`${item.bgcolour} font-medium px-5 text-[14px] rounded-md ${item.colour}`}>{item.subject}</button>
                )}

            </div>
            <div className="my-5">
                <span className="font-medium text-[22px]">%{percentage}</span><span className="text-[12px]">.{subpercentage}</span>
                <div>
                    <span className="text-[12px]">{date}</span>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <AvatarGroup isBordered max={3} size="sm" total={10}>
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                    <Avatar src="" name="ns" color="success" />
                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                </AvatarGroup>
                <CiSettings size={18} />

            </div>



        </div>


    )
}

const CustomerCount = ({ count }) => {
    const icon = [
        <FaSchool size={30} />,
        <FaUsers size={30} />,
        <FaUsers size={30} />,
        <FaUsers size={30} />

    ]
    return (
        <div className="flex  w-full h-fit p-3 flex-col sm:flex-row gap-2  justify-around bg-white  ">
            {count.map((item, index) =>

                <div className="w-full  sm:max-w-[200px]">
                    <div className="border-l-4 shadow-lg p-3 flex bg-white border-green-500 rounded-lg">

                        <div className="w-1/3 grid place-content-center">{icon[index]}</div>
                        <div className="w-2/3 flex flex-col items-end " key={item.name}>
                            <div className="text-[12px] font-semibold">
                                {item.name}
                            </div>
                            <div className="text-[20px] font-semibold">
                                {item.count}
                            </div>

                        </div>
                    </div>

                </div>
            )}
        </div>
    )
}
export default DasboradCard;
