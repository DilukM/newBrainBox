/* eslint-disable react/prop-types */
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useEffect, useState } from "react";
import { Avatar, Button } from "@nextui-org/react";
import Cookies from 'js-cookie';



const StudentHome = () => {
    const user_token = import.meta.env.VITE_USER_TOKEN;
    const apiUrl = import.meta.env.VITE_API_URL;
    const token = Cookies.get(user_token)
    const [subjects, setsubjects] = useState([])
    useEffect(() => {
        const checkSession = async () => {
            const res = await fetch(
                `${apiUrl}student/exams`,
                {
                    method: "GET",
                    headers: {
                        Authorization: token
                    }

                }
            );
            const data = await res.json();
            if (data.subjects) {
                setsubjects(data.subjects.schoolSylabus)
                // setgrade(data.subjects.grade.grades_or_levels_id)
            }
            console.log(data)


        }
        checkSession();
    }, [])
    return (
        <div className="grid place-items-center gap-y-5 text-3xl">

            <TodayClass />
            <NextClass />

        </div>

    );
}


const TodayClass = () => {
    return (
        <div className="w-full bg-white border-1 rounded-lg shadow-lg ">
            <div className="flex gap-x-3 border-b-1 p-3">

                <h2 className="text-red-500 text-[20px] font-medium ">Your Active TimeTable </h2>
            </div>
            <div className="p-2 md:p-5 flex bg-gray-200  gap-4 flex-wrap">

                <ClassCard
                    date={'15'}
                    month={'DEC'}
                    // classTypeColourtext={'text-[#EFC375]'}
                    classTypeColourbg={'bg-[#EFC375]'}
                    classType={'Theory'}
                    startTime={'8:00 AM'}
                    endTime={'10:00 AM'}
                    lecthurer={'Ms. Nathasha'}
                    subject={'Maths'}
                    unit={'(part 1) - භාග - Fractions '}
                    // link={'true'}

                />
                <ClassCard
                    date={'15'}
                    month={'DEC'}
                    // classTypeColourtext={'text-[#6DFFA1]'}
                    classTypeColourbg={'bg-[#6DFFA1]'}
                    classType={'Theory'}
                    startTime={'8:00 AM'}
                    endTime={'10:00 AM'}
                    lecthurer={'Ms. Nathasha'}
                    subject={'Maths'}
                    unit={'(part 1) - භාග - Fractions '}
                    // link={}

                />


            </div>
        </div>

    )
}



const NextClass = () => {

    return (
        <div className="w-full bg-white border-1 rounded-lg shadow-lg ">
            <div className="flex gap-x-3 border-b-1 p-3">

                <h2 className="text-red-500 text-[20px] font-medium ">Your Next Classes TimeTable </h2>
            </div>


            <NextWeekClass thismonthweek={'1st Week'} />
            <NextWeekClass thismonthweek={'2nd Week'} />
            <NextWeekClass thismonthweek={'3rd Week'} />
            <NextWeekClass thismonthweek={'4th Week'} />




        </div>
    )
}
const NextWeekClass = ({ thismonthweek }) => {
    const [week, setweek] = useState(false);
    return (


        <div className="w-full">
            <div className="w-full flex items-center  p-5" onClick={() => setweek(!week)}>
                <div className="w-[20px] h-[20px] me-2  grid place-content-center bg-black">
                </div>
                <div className="bg-gray-100 w-[150px] px-4 ">

                    <span className="text-whit text-[20px] font-medium">{thismonthweek}</span>
                </div>
                <div className="bg-gray-300 px-2 grid place-content-center w-fit py-2 h-full cursor-pointer">
                    <MdOutlineArrowDropDown color="black" />

                </div>
            </div>

            <div className="w-full">

                <div className={` ${week ? ' h-fit' : 'overflow-hidden  h-[0px]'} transition-all duration-1000 space-y-7 w-full `}>

                    <NextWeekClassCard thissubject={'Maths'} colour={'bg-[#FFD8B1]'} date={'Mon'} darkcolour={'bg-[#FFD8B1]/50'} />
                    <NextWeekClassCard thissubject={'Sinhala'} colour={'bg-[#E2F0CB]'} date={'Tue'} darkcolour={'bg-[#E2F0CB]/50'} />
                    <NextWeekClassCard thissubject={'English'} colour={'bg-[#E0B0FF]'} date={'Wed'} darkcolour={'bg-[#E0B0FF]/50'} />
                    <NextWeekClassCard thissubject={'Science'} colour={'bg-[#B1A0C7]'} date={'Thu'} darkcolour={'bg-[#B1A0C7]/50'} />
                    <NextWeekClassCard thissubject={'ICT'} colour={'bg-[#B8E7D3]'} date={'Fri'} darkcolour={'bg-[#B8E7D3]/50'} />
                </div>
            </div>
        </div>



    )
}
const NextWeekClassCard = ({ thissubject, colour, darkcolour, date }) => {
    const [subject, setsubject] = useState(false)
    return (



        <div className="w-full gap-x-3 z-10 flex flex-col border-b-3 border-dashed  border-gray-400 px-5">
            <div className="w-full  flex items-center  md:px-5">

                <span className=" me-3 w-[15px] h-[15px] bg-black">
                    <div className={` ${darkcolour}   w-full h-full`}>

                    </div>
                </span>
                <div className={` relative ${colour} w-full p-2 cursor-pointer`} onClick={() => setsubject(!subject)}>
                    <div className="  absolute bg-black -top-7 z-40  rounded-t-xl left-0">
                        <div className={` text-white ${darkcolour}  text-[16px]  font-normal  px-3`}>
                            {date}
                        </div>
                    </div>
                    <div className="flex items-center justify-between">

                        <span className="  text-[16px] md:text-[20px] font-medium">{thissubject}</span>

                        <span className="bg-white text-[12px] md:text-[14px] font-semibold rounded-full px-3">2024/Grade 08</span>
                    </div>
                </div>
                <div className="bg-black">
                    <div className={`  ${darkcolour} h-full py-4 px-2 grid place-content-center w-fit cursor-pointer`} onClick={() => setsubject(!subject)}>
                        <MdOutlineArrowDropDown color="white" />

                    </div>
                </div>
            </div>


            <div className={` ${subject ? ' h-auto' : ' h-[0px]'} transition-all ease-in-out duration-1000 overflow-hidden `}>



                <div className="md:p-5 md:ps-12 md:pt-0 flex  ">
                    <div className="p-2 md:p-5 flex bg-gray-200 w-full   gap-2 flex-wrap ">

                        {/* <ClassCard
                            date={'15'}
                            month={'DEC'}
                            classTypeColourtext={'text-[#EFC375]'}
                            classTypeColourbg={'bg-[#EFC375]/10'}
                            classType={'Theory'}
                            startTime={'8:00 AM'}
                            endTime={'10:00 AM'}
                            lecthurer={'Mr.Sharonath'}
                            subject={'Maths'}
                            unit={'(part 1) - භාග - Fractions '}
                            link={'true'}

                        />
                        <ClassCard
                            date={'15'}
                            month={'DEC'}
                            classTypeColourtext={'text-[#EFC375]'}
                            classTypeColourbg={'bg-[#EFC375]/20'}
                            classType={'Theory'}
                            startTime={'8:00 AM'}
                            endTime={'10:00 AM'}
                            lecthurer={'Mr.Sharonath'}
                            subject={'Maths'}
                            unit={'(part 1) - භාග - Fractions '}
                            link={'true'}

                        /> */}

                    </div>


                </div>
            </div>

        </div>



    )
}


const ClassCard = ({ lecthurer, type, link, startTime, endTime, unit, month, date, subject, classTypeColourtext ,classTypeColourbg, classType }) => {

    return (

        <div className="bg-white md:w-[48%]  xl:w-[32%] max-w-[800px] xl:max-w-[300px] flex flex-col justify-between  w-full  rounded-lg p-3 pb-4">


            <div>

                <div className="flex justify-between border-b-2 pb-2 items-center">
                    <div className="flex">
                        <div className="mask mask-squircle ">
                            <Avatar  className="rounded-[10px]  w-[40px] h-[40px]" />
                        </div>
                        <div className="ms-3">
                            <h3 className="font-semibold text-[14px]">{lecthurer}</h3>
                            <h3 className="text-gray-400 text-[12px]">{type}</h3>
                        </div>
                    </div>
                    <div className=" flex flex-col">
                        <button className="text-sky-500 font-semibold text-[14px] leading-tight p-1 px-2 rounded-md bg-sky-100"> { subject}</button>
                   


                    </div>

                </div>

                <div className=" h-fit">
                    <p className="text-[18px] font-medium">Lesson  </p>
                    <p className="text-[18px]">{unit}</p>
                </div>
            </div>

            <div>

                <div className="flex flex-col  items-start  py-3">

                    <div className="justify-end flex flex-col items-end">
                        <div className="flex items-center">
                            <div className="flex flex-col font-semibold text-[28px] border-e-1 pe-2 border-black">

                                <span className="h-[22px]">{date}</span>
                                <span className=" leading-10 ">{month}</span>
                            </div>
                            <div className="flex flex-col leading-tight  ms-1">
                                <div className="flex flex-col justify-center  text-[12px]">
                                    <span className="h-fit text-[15px]">Tuesday</span>
                                    <span className="font-medium text-[16px]"> {startTime} to {endTime}</span>
                                        <span className={`${classTypeColourtext+' '+ classTypeColourbg} px-2 py-1 w-fit rounded-lg font-medium text-[16px] `}> {classType}</span>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                <div className="w-full p-0">
                    {link ?
                        <Button className="w-full font-semibold text-white bg-darkblue">

                            <a src={link} className="hover:underline" >
                                Click to Join

                            </a>
                        </Button>
                        :
                        <Button disabled className="w-full disabled font-semibold text-white bg-darkblue p-2">
                        </Button>

                    }

                </div>
            </div>


        </div>







    );
}
export default StudentHome;
