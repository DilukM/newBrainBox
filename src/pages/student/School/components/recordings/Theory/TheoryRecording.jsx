import { Input, Pagination } from "@nextui-org/react";
import { IoSearch,  } from "react-icons/io5";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { useState } from "react";
import RecordingCard from "./TheoryRecordingCard";



const TheoryRecording = () => {
    
         const [showAll, setshowAll] = useState(false)
    return (
        <div className="bg-gray-100 w-full pt-8 flex flex-col lg:flex-row rounded-xl">

            <div className="flex w-full  lg:min-w-[250px] lg:max-w-[250px]  flex-wrap sm:flex-nowrap lg:flex-col pb-5   lg:pb-0 items-center justify-between">


                <div className="flex w-auto sm:h-full flex-col">

                    <div className="px-8 h-fit pt-5">

                        <h2 className="font-medium text-[25px] h-[26px]">Theory</h2>
                        <h2 className="font-bold text-[25px] h-[26px]">Recordings</h2>

                    </div>
                    <div className="sm:h-full px-8 lg:px-6 border-0 lg:border-s-8 rounded-md  border-roseorange">
                        <p className="mt-3 text-[12px] font-medium max-w-[300px] lg:max-w-[250px] w-full">
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

                <div className="bg-blue-200/10 min-h-[250px] w-full  flex">



                    {showAll ?
                        <div className="overflow-x-scroll w-fit  customescroll">

                            <div className="flex max-w-[1500px]  mb-3 w-full gap-x-2 ">
                                {/* <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RecordingCard name={'Travis Fuller'} type={'Employee'} /> */}

                            </div>

                            <div className="flex max-w-[1500px] w-full gap-x-2 ">
                                {/* <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RecordingCard name={'Travis Fuller'} type={'Employee'} /> */}

                            </div>
                        </div>

                        :
                        <div className="flex max-w-[1500px] w-full gap-x-2 overflow-x-scroll customescroll">
                            {/* <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                            <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                            <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                            <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                            <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                            <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                            <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                            <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                            <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                            <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                            <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                            <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                            <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                            <RecordingCard name={'Travis Fuller'} type={'Employee'} />
                            <RecordingCard name={'Travis Fuller'} type={'Employee'} /> */}

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

export default TheoryRecording;
