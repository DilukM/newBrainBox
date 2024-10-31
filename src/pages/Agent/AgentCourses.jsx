/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Avatar, Button, Input, Pagination } from "@nextui-org/react";
import { useEffect, useState } from "react";
import vimg from '../../assets/onlineclass.png';
import { IoSearch } from "react-icons/io5";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import Cookies from 'js-cookie';
import Loading from "../PageLoading/loading";
import { UPGRADE } from "../../utils/assets/images/images";

const AgentCourses = () => {


    const apiUrl = import.meta.env.VITE_API_URL;
    const studentToken = import.meta.env.VITE_USER_TOKEN;
    const token = Cookies.get(studentToken)
    const [grades, setgrades] = useState([''])
    const [gradesID, setgradesID] = useState(0)
    const [school, setschool] = useState([]);
    const [freecourse, setfreecourse] = useState([]);
    const [hecourse, sethecourse] = useState([]);



    useEffect(() => {
        const getGrades = async () => {
            const res = await fetch(
                `${apiUrl}grade`,
                {
                    method: "GET",
                }
            );
            const data = await res.json();
            setgrades(data.grades)
        }
        getGrades();
    }, [])



    useEffect(() => {


        const getSchoolCourses = async () => {
            const res = await fetch(
                `${apiUrl}agent/courses/${gradesID}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: token
                    }

                }
            );
            const data = await res.json();
            console.log(data)
            if (data.school_sylabus) {
                setschool(data.school_sylabus)
            }
            if (data.free_courses) {
                setfreecourse(data.free_courses)
            }
            if (data.he_courses) {
                sethecourse(data.he_courses)
            }
            console.log(data.he_courses)



        }
        getSchoolCourses();
    }, [gradesID])




    return (
        <div className="flex flex-col ">


            <GradeButtonsSection grades={grades} gradesID={gradesID} setgradesID={setgradesID} />

            <div className="flex flex-col gap-10">
                <SchoolCourser school={school} />
                <HigherEducationCourses hecourse={hecourse} />
                <FreeCourses freecourses={freecourse} />
            </div>
            d
        </div>
    );
}

const GradeButtonsSection = ({ grades, gradesID, setgradesID }) => {
    return (
        <div className="w-full bg-gray-100 shadow-xl rounded-b-none rounded-xl p-3 py-10">
            <div className="w-full flex gap-3  overflow-x-auto customescroll py-3">
                <Button onClick={() => setgradesID(0)} className={`${gradesID == 0 ? 'bg-purple-950 text-white' : 'text-black'}  `}>All</Button>

                {grades.map((grade, index) =>
                    <Button className={`${gradesID == grade.id ? 'bg-purple-950 text-white' : 'text-black'}  px-12 `} onClick={() => setgradesID(grade.id)} key={index}>{grade.name}</Button>
                )}

            </div>
            <div className="w-full flex mt-3 justify-end">

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
                        placeholder="Search by Course..."
                        endContent={
                            <div className="bg-blue-400 cursor-pointer rounded-lg w-[40px] grid place-content-center h-full  p-0">
                                <IoSearch color="white" size={20} />
                            </div>

                        }

                    />
                </div>
            </div>

        </div>
    )
}

const SchoolCourser = ({ school }) => {

    const [showAll, setshowAll] = useState(false)
    return (
        <div className="bg-gray-100 w-full pt-0 rounded-t-none shadow-xl rounded-xl">



            <div className="w-full flex flex-col bg-blue-300/20  min-h-[300px] my-3 lg:flex-row">

                <div className="flex w-full  lg:min-w-[250px]  lg:max-w-[250px]   flex-wrap sm:flex-nowrap lg:flex-col pb-5   lg:pb-0 items-center justify-between">


                    <div className="flex w-auto sm:h-full flex-col">

                        <div className="px-8 h-fit pt-0">

                            <h2 className="font-medium text-[25px] h-[26px]">School</h2>
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


                    <div className=" w-full flex justify-end  flex-col items-end pt-0 px-3">

                        <div className="mt-5  mb-2">
                            <button className="flex gap-x-2 items-center cursor-pointer" onClick={() => setshowAll(!showAll)}>
                                <span className="font-semibold">Show more</span><FaRegArrowAltCircleDown />
                            </button>

                        </div>
                    </div>

                    <div className="  pb-3 justify-start flex">



                        {showAll ?
                            <div className="overflow-x-scroll w-fit pb-2  customescroll">

                                <div className="flex max-w-[1500px]  mb-3 w-full gap-x-2 ">
                                    {school.map((item, index) =>
                                        <CoursesCard key={index} name={item.course_name} img={item.image_url} type={'Employee'} />

                                    )}

                                </div>

                                <div className="flex max-w-[1500px] w-full gap-x-2 ">
                                    {school.map((item, index) =>
                                        <CoursesCard key={index} name={item.course_name} img={item.image_url} type={'Employee'} />

                                    )}

                                </div>
                            </div>

                            :
                            <div className="flex max-w-[1500px] w-full gap-x-2 overflow-x-scroll pb-2 customescroll">
                                {school.map((item, index) =>
                                    <CoursesCard key={index} name={item.course_name} img={item.image_url} type={'Employee'} />

                                )}


                            </div>
                        }



                    </div>



                </div>
            </div>

            <div className=" p-3 flex justify-end me-3">
                <Pagination total={10} initialPage={1} className="bg-blue-100 rounded-lg" />

            </div>

        </div>
    );

}

const CoursesCard = ({ name, img }) => {
    const IMAGEURL = import.meta.env.VITE_IMAGE_URL;

    return (
        <div className="bg-white min-w-[300px] rounded-lg  ">
            <div className="flex justify-center">
                <div className="flex text-center p-3 pe-0">
                    <h2 className='font-bold text-center'>{name}</h2>

                </div>


            </div>
                <div className="border-y-2 w-[300px] overflow-hidden h-[250px]">
                    <img src={IMAGEURL + img} className="w-[300px] h-[250px] object-cover" />


                </div>

            <div className="p-3 flex justify-between py-2 text-[14px]">
                <div className="flex w-full  items-center md:justify-center">
                    <Avatar src={UPGRADE} className="shadow-none drop-shadow-none bg-transparent" />
                    <div className="flex flex-col ms-2">
                        <span>Students</span>
                        <span className="font-semibold">2,000</span>
                    </div>
                </div>
                <div className="flex w-full   items-center md:justify-center">
                    <Avatar src={UPGRADE} className="shadow-none drop-shadow-none bg-transparent" />

                    <div className="flex flex-col ms-2">
                        <span>Educators</span>
                        <span className="font-semibold">2,000</span>
                    </div>
                </div>
            </div>


        </div>
    );
}

const HigherEducationCourses = ({ hecourse }) => {

    const [showAll, setshowAll] = useState(false)
    return (
        <div className="bg-gray-100 w-full pt-0  shadow-xl rounded-xl">
            <div className="w-full flex flex-col bg-blue-300/20  min-h-[300px] my-3 lg:flex-row">

                <div className="flex w-full  lg:min-w-[250px]  lg:max-w-[250px]  flex-wrap sm:flex-nowrap lg:flex-col pb-5   lg:pb-0 items-center justify-between">


                    <div className="flex w-auto sm:h-full flex-col">

                        <div className="px-8 h-fit pt-0">

                            <h2 className="font-medium text-[25px] h-[26px]">Higher</h2>
                            <h2 className="font-bold text-[25px] h-[26px]">Education</h2>

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


                    <div className=" w-full flex justify-end  flex-col items-end pt-0 px-3">

                        <div className="mt-5  mb-2">
                            <button className="flex gap-x-2 items-center cursor-pointer" onClick={() => setshowAll(!showAll)}>
                                <span className="font-semibold">Show more</span><FaRegArrowAltCircleDown />
                            </button>

                        </div>
                    </div>

                    <div className="bg-blue-200/10  pb-3  flex">



                        {showAll ?
                            <div className="overflow-x-scroll w-fit  customescroll">

                                <div className="flex max-w-[1500px]  mb-3 w-full gap-x-2 ">
                                    
                                    {hecourse.map((item, index) =>
                                    
                                        <HigherEducationCoursesCard key={index} name={item.course_name} img={item.image_url} type={'Employee'} />

                                    )}

                                </div>

                                <div className="flex max-w-[1500px] w-full gap-x-2 ">
                                    {hecourse.map((item, index) =>
                                        <HigherEducationCoursesCard key={index} name={item.course_name} img={item.image_url} type={'Employee'} />

                                    )}

                                </div>
                            </div>

                            :
                            <div className="flex max-w-[1500px] w-full gap-x-2 overflow-x-scroll customescroll">

                                {hecourse.map((item, index) =>
                                    <HigherEducationCoursesCard key={index} name={item.course_name} img={item.image_url} type={'Employee'} />

                                )}
                            </div>
                        }



                    </div>



                </div>
            </div>

            <div className=" p-3 flex justify-end me-3">
                <Pagination total={10} initialPage={1} className="bg-blue-100 rounded-lg" />

            </div>

        </div>
    );

}

const HigherEducationCoursesCard = ({ name, img, id }) => {
    const IMAGEURL = import.meta.env.VITE_IMAGE_URL;

    return (
        <div className="bg-white min-w-[300px] rounded-lg  ">
            <div className="flex justify-center">
                <div className="flex p-3 pe-0">
                    <h2 className='font-bold'>{name}</h2>

                </div>


            </div>
            <div className="border-y-2 w-[300px] overflow-hidden h-[250px]">
                <img src={IMAGEURL + img} className="w-[300px] h-[250px] object-cover" />


            </div>


            <div className="p-3 flex justify-between py-2 ">

                <Button className='py-1 text-[16px] bg-yellow-400  p-0 rounded-md  h-fit'>View</Button>

            </div>


        </div>
    );
}

const FreeCourses = ({ freecourses }) => {

    const [showAll, setshowAll] = useState(false)
    return (
        <div className="bg-gray-100 w-full pt-0  shadow-xl rounded-xl">

            <div className="w-full flex flex-col bg-blue-300/20 min-h-[300px] my-3 lg:flex-row">

                <div className="flex w-full  lg:min-w-[250px]  lg:max-w-[250px]   flex-wrap sm:flex-nowrap lg:flex-col pb-5   lg:pb-0 items-center justify-between">


                    <div className="flex w-auto sm:h-full flex-col">

                        <div className="px-8 h-fit pt-0">

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


                    <div className=" w-full flex justify-end  flex-col items-end pt-0 px-3">

                        <div className="mt-5  mb-2">
                            <button className="flex gap-x-2 items-center cursor-pointer" onClick={() => setshowAll(!showAll)}>
                                <span className="font-semibold">Show more</span><FaRegArrowAltCircleDown />
                            </button>

                        </div>
                    </div>

                    <div className="bg-blue-200/10  pb-3  flex">



                        {showAll ?
                            <div className="overflow-x-scroll w-fit  customescroll">

                                <div className="flex max-w-[1500px]  mb-3 w-full gap-x-2 ">

                                    {freecourses.map((item, index) =>
                                        <FreeCoursesCard key={index} name={item.course_name} img={item.video_url} type={'Employee'} />

                                    )}

                                </div>

                                <div className="flex max-w-[1500px] w-full gap-x-2 ">
                                    {freecourses.map((item, index) =>
                                        <FreeCoursesCard key={index} name={item.course_name} img={item.video_url} type={'Employee'} />

                                    )}

                                </div>
                            </div>

                            :
                            <div className="flex max-w-[1500px] w-full gap-x-2 overflow-x-scroll customescroll">
                                {freecourses.map((item, index) =>
                                    <FreeCoursesCard key={index} name={item.course_name} img={item.video_url} type={'Employee'} />

                                )}

                            </div>
                        }



                    </div>



                </div>
            </div>

            <div className=" p-3 flex justify-end me-3">
                <Pagination total={10} initialPage={1} className="bg-blue-100 rounded-lg" />

            </div>

        </div>
    );

}

const FreeCoursesCard = ({ name, img, id }) => {
    const IMAGEURL = import.meta.env.VITE_IMAGE_URL;

    return (
        <div className="bg-white min-w-[300px] rounded-lg  ">
            <div className="flex justify-center">
                <div className="flex p-3 pe-0">
                    <h2 className='font-bold'>{name}</h2>

                </div>


            </div>
            <div className="border-y-2 w-[300px] overflow-hidden h-[250px]">
                <img src={IMAGEURL + img} className="w-[300px] h-[250px] object-cover" />


            </div>

            <div className="p-3 flex justify-between py-2 ">

                <Button className='py-1 text-[16px] bg-yellow-400  p-0 rounded-md  h-fit'>View</Button>

            </div>


        </div>
    );
}
export default AgentCourses;
