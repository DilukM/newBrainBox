/* eslint-disable react/prop-types */
import { MdOutlineArrowDropDown } from "react-icons/md";
import {  useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import Cookies from 'js-cookie';

const StudentExamAssessment = () => {
    const user_token = import.meta.env.VITE_USER_TOKEN;
    const apiUrl = import.meta.env.VITE_API_URL;
    const token = Cookies.get(user_token)
    const [subjects, setsubjects] = useState([])

 const [grade, setgrade] = useState()
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
                setgrade(data.subjects.grade.grades_or_levels_id)
            }
            console.log(data)
      

        }
        checkSession();
    }, [])

    return (
        <>

            <SchooleLevel subjects={subjects} grade={grade} />
            {/* <OpenGround /> */}
        </>
    );
}

// const OpenGround = () => {
//     return (
//         <div className="w-full bg-white border-1 space-y-5 pb-3 rounded-lg shadow-lg ">

//             <div className="flex gap-x-3 border-b-1 bg-gray-700 p-3">

//                 <h2 className="text-white text-[20px] font-medium "> Exam and Assessment Results (Open Ground)</h2>
//             </div>
//             <NextWeekClassCard thissubject={'Maths'} colour={'bg-purple-500'} date={'Mon'} arrowcolour={'bg-purple-800'} />
//             <NextWeekClassCard thissubject={'Sinhala'} colour={'bg-green-500'} date={'Tue'} arrowcolour={'bg-green-800'} />
//             <NextWeekClassCard thissubject={'English'} colour={'bg-pink-500'} date={'Wed'} arrowcolour={'bg-pink-800'} />
//         </div>
//     )
// }


const SchooleLevel = ({ subjects, grade }) => {
    return (
        <div className="w-full bg-white border-1 space-y-5 pb-3 rounded-lg shadow-lg ">

            <div className="flex gap-x-3 border-b-1 bg-gray-700 p-3">

                <h2 className="text-white text-[20px] font-medium ">Exam and Assessment Results (Schoole Level)</h2>
            </div>
            {subjects.map((item,index)=>
                <NextWeekClassCard key={index} thissubject={item.course_name} grade={grade} colour={` bg-[${item.colour_code}]`} darkcolour={`bg-[${item.colour_code}]/50`} />

            )}

            {/* <NextWeekClassCard thissubject={'Sinhala'} colour={'bg-[#E2F0CB]'} date={'Tue'} darkcolour={'bg-[#E2F0CB]/50'} />
            <NextWeekClassCard thissubject={'English'} colour={'bg-[#E0B0FF]'} date={'Wed'} darkcolour={'bg-[#E0B0FF]/50'} />
            <NextWeekClassCard thissubject={'Science'} colour={'bg-[#B1A0C7]'} date={'Thu'} darkcolour={'bg-[#B1A0C7]/50'} />
            <NextWeekClassCard thissubject={'ICT'} colour={'bg-[#B8E7D3]'} date={'Fri'} darkcolour={'bg-[#B8E7D3]/50'} /> */}

        </div>
    )
}



const NextWeekClassCard = ({ thissubject, colour, darkcolour, grade }) => {
    const [open, setopen] = useState(false)
    return (



        <div className="w-full gap-x-3 flex flex-col border-b-3 border-dashed  border-gray-400 px-5">
            <div className="w-full  flex items-center  md:px-5">

                <span className=" me-3 w-[15px] h-[15px] bg-black ">
                    <div className={` ${darkcolour}   w-full h-full`}>

                    </div>
                </span>
                <div className={` relative ${colour} w-full p-2 cursor-pointer`} onClick={() => setopen(!open)}>

                    <div className="flex items-center justify-between">

                        <span className=" text-[16px] md:text-[20px] font-medium">{thissubject}</span>

                        <span className="bg-white text-[12px] md:text-[14px] font-semibold rounded-full px-3">2024/Grade {grade}</span>
                    </div>
                </div>
                <div className="bg-black">
                    <div className={`  ${darkcolour} h-full py-3 px-1 grid place-content-center w-fit cursor-pointer`} onClick={() => setopen(!open)}>
                        <MdOutlineArrowDropDown color="white" size={30} />

                    </div>
                </div>
            </div>


            <div className={` ${open ? ' h-auto' : ' h-[0px]'} transition-all ease-in-out duration-1000 overflow-hidden `}>

                <div className="md:p-5 md:ps-12  md:pt-0  gap-2 flex-wrap">

                    <div className=" border py-3  w-full">
                        <h2 className="uppercase font-semibold">Current Assigment</h2>
                        <div className="p-5 pt-0">
                            <CurrentAssigment />
                        </div>

                        <h2 className="uppercase font-semibold">Submitted Assigment</h2>
                        <div className="p-5 pt-0">
                            <SubmittedAssigment />
                        </div>


                    </div>


                </div>
            </div>

        </div>



    )
}

const CurrentAssigment = () => {
    return (
        <div className="w-full">

            <div className="relative overflow-x-auto shadow-md  sm:rounded-lg">
                <table className="w-full font-medium table-auto text-sm text-left rtl:text-right  border-separate  text-gray-500 ">
                    <thead className="text-xs text-gray-700 capitalize bg-gray-200  ">
                        <tr>
                            <th scope="col" className="px-6  py-3">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Assignment ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Assignment Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Start Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                End Date
                            </th>
                            <th scope="col" className="px-6 text-center py-3">
                                Download
                            </th>
                            <th scope="col" className="px-6 text-center py-3">
                                Upload
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className="  even:bg-gray-200 border-gray-700">
                            {/* <th scope="row" className="text-center  py-4 font-medium text-gray-900 whitespace-nowrap ">
                                1
                            </th>
                            <td className="px-6 font-sans text-[16px] tracking-wide py-4">
                                MT7 24/AS/01
                            </td>
                            <td className="px-6 py-4">
                                Research about Computer hardware and components
                            </td>
                            <td className="px-6 py-4">
                                2024 - 10 - 21
                            </td>
                            <td className="px-6 py-4">
                                2024 - 11 - 2
                            </td>
                            <td className="px-6 text-center py-4">
                                <Button className="rounded-none p-0 h-fit bg-emerald-500 hover:bg-emerald-700 hover:shadow-lg  shadow-black">
                                    <a href="https://www.javainstitute.org/academic/word_documents/Students_Appeals_Form.docx" download className="py-1 text-white h-full grid place-items-center px-3">Download</a>
                                </Button>
                            </td>
                            <td className="px-6 text-center py-4">
                                <Button className="rounded-none cursor-pointer relative p-0 h-fit bg-teal-500 hover:bg-teal-700 hover:shadow-lg  shadow-black text-white px-3 py-1">
                                    <input type="file" className=" absolute cursor-pointer top-0 left-0 h-full w-full opacity-0" />
                                    Submit
                                </Button>
                            </td> */}
                        </tr>




                    </tbody>
                </table>
            </div>

        </div>
    )
}

const SubmittedAssigment = () => {
    return (
        <div className="w-full">
            <div className="relative overflow-x-auto shadow-md  sm:rounded-lg">
                <table className="w-full font-medium table-auto text-sm text-left rtl:text-right  border-separate  text-gray-500 ">
                    <thead className="text-xs text-gray-700 capitalize bg-gray-200  ">
                        <tr>
                            <th scope="col" className="px-6  py-3">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Assignment ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Assignment Name
                            </th>
                            <th scope="col" className="px-6 u text-center py-3">
                                View Submitted Assignment	
                            </th>
                            <th scope="col" className="px-6 u text-center py-3">
                                Marks
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* <tr className="  even:bg-gray-200 border-gray-700">
                            <th scope="row" className="text-center  py-4 font-medium text-gray-900 whitespace-nowrap ">
                                1
                            </th>
                            <td className="px-6 font-sans text-[16px] tracking-wide py-4">
                                MT7 24/AS/01
                            </td>
                            <td className="px-6 py-4">
                                Research about Computer hardware and components
                            </td>
                           
                            <td className="px-6 text-center py-4">
                                <Button className="rounded-none p-0 h-fit bg-purple-800 hover:bg-purple-950 hover:shadow-lg  shadow-black">
                                    <a href="https://www.javainstitute.org/academic/word_documents/Students_Appeals_Form.pdf" target="_blank"  className="py-1 text-white h-full grid place-items-center px-3">View Assigment</a>
                                </Button>
                            </td>
                            <td className="px-6 text-center py-4">
                                <Button className="rounded-none cursor-pointer relative p-0 h-fit bg-teal-500 hover:bg-teal-700 hover:shadow-lg  shadow-black text-white px-3 py-1">
                                    75
                                </Button>
                            </td>
                        </tr>


                        <tr className="  even:bg-gray-200 border-gray-700">
                            <th scope="row" className="text-center  py-4 font-medium text-gray-900 whitespace-nowrap ">
                                1
                            </th>
                            <td className="px-6 font-sans text-[16px] tracking-wide py-4">
                                MT7 24/AS/01
                            </td>
                            <td className="px-6 py-4">
                                Research about Computer hardware and components
                            </td>
                           
                            <td className="px-6 text-center py-4">
                                <Button className="rounded-none p-0 h-fit bg-purple-800 hover:bg-purple-950 hover:shadow-lg  shadow-black">
                                    <a href="https://www.javainstitute.org/academic/word_documents/Students_Appeals_Form.pdf" target="_blank"  className="py-1 text-white h-full grid place-items-center px-3">View Assigment</a>
                                </Button>
                            </td>
                            <td className="px-6 text-center py-4">
                                <Button className="rounded-none cursor-pointer relative p-0 h-fit bg-teal-500 hover:bg-teal-700 hover:shadow-lg  shadow-black text-white px-3 py-1">
                                    75
                                </Button>
                            </td>
                        </tr>


                        <tr className="  even:bg-gray-200 border-gray-700">
                            <th scope="row" className="text-center  py-4 font-medium text-gray-900 whitespace-nowrap ">
                                1
                            </th>
                            <td className="px-6 font-sans text-[16px] tracking-wide py-4">
                                MT7 24/AS/01
                            </td>
                            <td className="px-6 py-4">
                                Research about Computer hardware and components
                            </td>
                           
                            <td className="px-6 text-center py-4">
                                <Button className="rounded-none p-0 h-fit bg-purple-800 hover:bg-purple-950 hover:shadow-lg  shadow-black">
                                    <a href="https://www.javainstitute.org/academic/word_documents/Students_Appeals_Form.pdf" target="_blank"  className="py-1 text-white h-full grid place-items-center px-3">View Assigment</a>
                                </Button>
                            </td>
                            <td className="px-6 text-center py-4">
                                <Button className="rounded-none cursor-pointer relative p-0 h-fit bg-teal-500 hover:bg-teal-700 hover:shadow-lg  shadow-black text-white px-3 py-1">
                                    75
                                </Button>
                            </td>
                        </tr>


                        <tr className="  even:bg-gray-200 border-gray-700">
                            <th scope="row" className="text-center  py-4 font-medium text-gray-900 whitespace-nowrap ">
                                1
                            </th>
                            <td className="px-6 font-sans text-[16px] tracking-wide py-4">
                                MT7 24/AS/01
                            </td>
                            <td className="px-6 py-4">
                                Research about Computer hardware and components
                            </td>
                           
                            <td className="px-6 text-center py-4">
                                <Button className="rounded-none p-0 h-fit bg-purple-800 hover:bg-purple-950 hover:shadow-lg  shadow-black">
                                    <a href="https://www.javainstitute.org/academic/word_documents/Students_Appeals_Form.pdf" target="_blank"  className="py-1 text-white h-full grid place-items-center px-3">View Assigment</a>
                                </Button>
                            </td>
                            <td className="px-6 text-center py-4">
                                <Button className="rounded-none cursor-pointer relative p-0 h-fit bg-teal-500 hover:bg-teal-700 hover:shadow-lg  shadow-black text-white px-3 py-1">
                                    75
                                </Button>
                            </td>
                        </tr> */}




                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default StudentExamAssessment;
