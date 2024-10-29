import {  Pagination } from "@nextui-org/react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { useState } from "react";
import RevisionRecordingCard from "./RevisionRecordingCard";



const RevisionRecording = () => {
    
         const [showAll, setshowAll] = useState(false)
    return (
        <div className="bg-gray-100 w-full pt-8 flex flex-col lg:flex-row rounded-xl">

            <div className="flex w-full  lg:min-w-[250px] lg:max-w-[250px]  flex-wrap sm:flex-nowrap lg:flex-col pb-5   lg:pb-0 items-center justify-between">


                <div className="flex w-auto sm:h-full flex-col">

                    <div className="px-8 h-fit pt-5">

                        <h2 className="font-medium text-[25px] h-[26px]">Revision</h2>
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

                <div className=" w-full flex justify-end  flex-col items-end pt-4 px-3">

              
                    <div className=" mb-2">
                        <button className="flex gap-x-2 items-center cursor-pointer" onClick={() => setshowAll(!showAll)}>
                            <span className="font-semibold">Show more</span><FaRegArrowAltCircleDown />
                        </button>

                    </div>
                </div>

                <div className="bg-blue-200/10 min-h-[250px]   flex">



                    {showAll ?
                        <div className="overflow-x-scroll w-fit  customescroll">

                            <div className="flex max-w-[1500px]  mb-3 w-full gap-x-2 ">
                                {/* <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} /> */}

                            </div>

                            <div className="flex max-w-[1500px] w-full gap-x-2 ">
                                {/* <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                                <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} /> */}

                            </div>
                        </div>

                        :
                        <div className="flex max-w-[1500px] w-full gap-x-2 overflow-x-scroll customescroll">
                            {/* <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                            <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                            <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                            <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                            <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                            <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                            <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                            <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                            <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                            <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                            <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                            <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                            <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                            <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} />
                            <RevisionRecordingCard name={'Travis Fuller'} type={'Employee'} /> */}

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

export default RevisionRecording;
