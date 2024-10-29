import { Button, Input, Pagination } from "@nextui-org/react";
import { IoSearch } from "react-icons/io5";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import TopEducatorCard from "./TopEducatorCard";
import Cookies from 'js-cookie';



const TopEducators = () => {
    const [showAll, setshowAll] = useState(false)
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
            
            console.log(subjects)

        }
        checkSession();
    }, [])
    return (
        <div className="bg-gray-100 w-full pt-8 flex flex-col lg:flex-row rounded-xl">

            <div className="flex w-full  lg:min-w-[250px]   flex-wrap sm:flex-nowrap lg:flex-col pb-5   lg:pb-0 items-center justify-between">


                <div className="flex w-auto sm:h-full flex-col">

                    <div className="px-8 h-fit pt-5">

                        <h2 className="font-medium text-[25px] h-[26px]">Top Tier</h2>
                        <h2 className="font-bold text-[25px] h-[26px]">Educators</h2>

                    </div>
                    <div className="sm:h-full px-8 lg:px-6 border-0 lg:border-s-8 rounded-md  border-roseorange">
                        <p className="mt-3 text-[12px] font-medium max-w-[300px] lg:max-w-[200px] w-full">
                            BrainBox Edu committedd to delevering high-quality learning experiences and academic excellence.
                        </p>
                    </div>
                </div>

                <div className=" flex min-w-[150px]  px-8 lg:px-0 lg:pb-5 flex-col">
                    <span className="font-medium"> Total Educators</span>
                    <span className="font-bold">2,000</span>

                </div>
            </div>
            <div className=" lg:w-[calc(100%-250px)] px-2 ">
                <div className="flex justify-end w-full">


                    <div className="flex gap-x-2 overflow-x-auto customescroll pb-1">
                        {subjects.map((item,index) => 
                            <Button  key={index}>{item.course_name}</Button>
                        )}
                    {/* <button className="min-w-[150px] px-5 bg-purple-950 py-1 text-[20px] text-white rounded-t-lg"> Maths</button>
                    <button className="min-w-[150px] bg-white  px-5 py-1 text-[20px] text-black rounded-t-lg">Sinhala</button>
                    <button className="min-w-[150px] bg-white  px-5 py-1 text-[20px] text-black rounded-t-lg"> English</button>
                    <button className="min-w-[150px] bg-white  px-5 py-1 text-[20px] text-black rounded-t-lg"> Enviroment</button>
                    <button className="min-w-[150px] bg-white  px-5 py-1 text-[20px] text-black rounded-t-lg"> Tamil</button>
      */}
             
                </div>
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
                        
                        <div>
                            
                        </div>
                        <button className="flex gap-x-2 items-center cursor-pointer" onClick={() => setshowAll(!showAll)}>
                            <span className="font-semibold">Show more</span><FaRegArrowAltCircleDown />
                        </button>

                    </div>
                </div>

                <div className="bg-blue-200/10   flex">



                    {showAll ?
                        <div className="overflow-x-scroll w-fit  customescroll">

                            <div className="flex max-w-[1500px]  mb-3 w-full gap-x-2 ">
                                <TopEducatorCard video={'2'} date={'28'} name={'Mrs. Suranjie Jayasinghe'} subjet={'Maths'} />
                                <TopEducatorCard video={'52'} date={'02'} name={'Mr. Susantha Jayasinghe'} subjet={'English'} />
                                <TopEducatorCard video={'3'} date={'03'} name={'Mr. Ajith Jayatilake'} subjet={'IT'} />
                                <TopEducatorCard video={'21'} date={'04'} name={'Mrs. Kumari Gamage'} subjet={'Sinhala'} />
                                <TopEducatorCard video={'6'} date={'01'} name={'Mr. Mahesh De Silva'} subjet={'Agriculture'} />
                                <TopEducatorCard video={'8'} date={'16'} name={'Mr. Lokesha Kohonage'} subjet={'Biology'} />
                                <TopEducatorCard video={'52'} date={'18'} name={'Dr. Kalinga Hapuhinna'} subjet={'Chemistry'} />
                                <TopEducatorCard video={'17'} date={'25'} name={'Mr. Sasith Nuraj'} subjet={'Accounting'} />
                                <TopEducatorCard video={'3'} date={'06'} name={'Mrs. Piyumi Pramodya'} subjet={'Media'} />
                                <TopEducatorCard video={'4'} date={'23'} name={'Mr. kelum perera'} subjet={'English'} />
                                <TopEducatorCard video={'1'} date={'18'} name={'Mr. Mohamed Ilham'} subjet={'Maths'} />
                                <TopEducatorCard video={'6'} date={'12'} name={'Ms. Nathasha Fernando'} subjet={'Maths'} />
                          

                            </div>

                            <div className="flex max-w-[1500px] w-full gap-x-2 ">
                                {/* <TopEducatorCard name={'Travis Fuller'} type={'Employee'} />
                                <TopEducatorCard name={'Travis Fuller'} type={'Employee'} />
                                <TopEducatorCard name={'Travis Fuller'} type={'Employee'} />
                                <TopEducatorCard name={'Travis Fuller'} type={'Employee'} />
                                <TopEducatorCard name={'Travis Fuller'} type={'Employee'} />
                                <TopEducatorCard name={'Travis Fuller'} type={'Employee'} />
                                <TopEducatorCard name={'Travis Fuller'} type={'Employee'} />
                                <TopEducatorCard name={'Travis Fuller'} type={'Employee'} />
                                <TopEducatorCard name={'Travis Fuller'} type={'Employee'} />
                                <TopEducatorCard name={'Travis Fuller'} type={'Employee'} />
                                <TopEducatorCard name={'Travis Fuller'} type={'Employee'} />
                                <TopEducatorCard name={'Travis Fuller'} type={'Employee'} />
                                <TopEducatorCard name={'Travis Fuller'} type={'Employee'} />
                                <TopEducatorCard name={'Travis Fuller'} type={'Employee'} />
                                <TopEducatorCard name={'Travis Fuller'} type={'Employee'} /> */}

                            </div>
                        </div>

                        :
                        <div className="flex max-w-[1500px] w-full gap-x-2 overflow-x-scroll customescroll">
                            <TopEducatorCard video={'2'} date={'28'} name={'Mrs. Suranjie Jayasinghe'} subjet={'Maths'} />
                            <TopEducatorCard video={'52'} date={'02'} name={'Mr. Susantha Jayasinghe'} subjet={'English'} />
                            <TopEducatorCard video={'3'} date={'03'} name={'Mr. Ajith Jayatilake'} subjet={'IT'} />
                            <TopEducatorCard video={'21'} date={'04'} name={'Mrs. Kumari Gamage'} subjet={'Sinhala'} />
                            <TopEducatorCard video={'6'} date={'01'} name={'Mr. Mahesh De Silva'} subjet={'Agriculture'} />
                            <TopEducatorCard video={'8'} date={'16'} name={'Mr. Lokesha Kohonage'} subjet={'Biology'} />
                            <TopEducatorCard video={'52'} date={'18'} name={'Dr. Kalinga Hapuhinna'} subjet={'Chemistry'} />
                            <TopEducatorCard video={'17'} date={'25'} name={'Mr. Sasith Nuraj'} subjet={'Accounting'} />
                            <TopEducatorCard video={'3'} date={'06'} name={'Mrs. Piyumi Pramodya'} subjet={'Media'} />
                            <TopEducatorCard video={'4'} date={'23'} name={'Mr. kelum perera'} subjet={'English'} />
                            <TopEducatorCard video={'1'} date={'18'} name={'Mr. Mohamed Ilham'} subjet={'Maths'} />
                            <TopEducatorCard video={'6'} date={'12'} name={'Ms. Nathasha Fernando'} subjet={'Maths'} />

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

export default TopEducators;
