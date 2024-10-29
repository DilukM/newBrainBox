/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Avatar, Button, Checkbox, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Progress, useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import Profile from "./Profile";
import { BsFillPinAngleFill } from "react-icons/bs";


const TopEducatorCard = ({ name, video , date,subjet}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [open, setopen] = useState(true)
    return (
        <div className="bg-white min-w-[300px] rounded-lg p-3 pb-4">
            <div className="flex justify-between">
                <div className="flex">
                    <div className="mask mask-squircle ">
                        {/* <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" className="rounded-[10px]  w-[40px] h-[40px]" /> */}
                        <Avatar  className="rounded-[10px]  w-[40px] h-[40px]" />
                    </div>
                    <div className="ms-3">
                        <h3 className="font-semibold text-[14px]">{name}</h3>
                        {/* <h3 className="text-gray-400 text-[12px]">{type}</h3> */}
                    </div>
                </div>
                <div className="">
                    <button className="text-sky-500 font-semibold text-[14px] px-5 rounded-md bg-sky-100"> {subjet}</button>
                </div>

            </div>
            <div className="flex justify-between items-end py-3">
                <div className=" h-fit">
                    <p className="text-gray-600  m-0 p-0 h-[15px] ">Videos</p>
                    <p className="font-bold text-[25px] m-0 p-0 h-[30px] ">{video}</p> 
                </div>
                <div>
                    <div className="text-[12px] text-sky-500">Next Class</div>
                    <div className="flex">

                    <div className="flex flex-col font-semibold text-[28px] border-e-1 border-black">
                            <span className="h-[22px]">{date}</span>
                        <span className="max-h-[35px] h-full ">DEC</span>
                    </div>
                    <div className="flex items-center justify-center flex-col ms-1 text-[12px]">
                        {/* <span>Tuesday</span> */}
                        <span className="font-medium text-[14px]">1:20 PM</span>
                    </div>
                    </div>
                </div>

            </div>
            <div className=" py-5">
                <Progress aria-label="Loading..." color="success" value={60} className="max-w-md" />
                <div className="flex justify-between text-[13px] mt-3">
                    <div className="flex items-center">
                        <div className="h-[6px] w-[6px] rounded-full me-2 bg-emerald-500"></div>
                        <h3>57% Completed</h3>
                    </div>
                    <div className="flex items-center">
                        <div className="h-[6px] w-[6px] rounded-full me-2 bg-gray-200"></div>
                        <h3>Not Completed</h3>
                    </div>
                </div>
            </div>

            {/* <div className="flex gap-x-2 text-red-400">
                <BsFillPinAngleFill color="red" />
                <span>Theory</span>
                <span>Revision</span>
                <span>Paper</span>

            </div> */}
            <div className="flex w-full mt-3 gap-x-3">
                <Button className="bg-emerald-500 rounded-lg m-0 h-fit font-medium py-[2px] w-1/2" onPress={onOpen}>Subscribe</Button>
                <LecthureProfile />
            </div>


            <div className="flex w-full my-3 justify-center">
                <svg className="w-4 h-4 text-yellow-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-gray-400 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="ms-2 text-sm font-bold text-gray-900 ">4.95</p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full "></span>
                <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline">73 reviews</a>
            </div>




            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Subscribe | {name}</ModalHeader>
                            <ModalBody>
                                Are you Confirm subscribe {name}Lecturer ? 
                                <Checkbox  radius="full">Revision</Checkbox>
                                <Checkbox  radius="lg">Theory</Checkbox>
                                <Checkbox  radius="md">Paper</Checkbox>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger"   onPress={onClose}>
                                    No
                                </Button>
                                <Button className="bg-emerald-500 text-white" onPress={onClose}>
                                    Subscribe
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            

        </div>
    );
}

const LecthureProfile = () => {
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
    const Close = () => {
         onClose() 
    }

    return (

        <>
            {/* <Button className="bg-yellow-500 rounded-lg m-0 h-fit font-medium py-[2px] w-1/2" onPress={onOpen}>Profile</Button> */}
            <Button className="bg-yellow-500 rounded-lg m-0 h-fit font-medium py-[2px] w-1/2" >Profile</Button>

            <Modal hideCloseButton isOpen={isOpen}  size="5xl" placement={'top'} onOpenChange={onOpenChange}>
                <ModalContent className="" >
             
                        <ModalBody className="py-0 px-0">
                                <Profile Close={Close} />
                            </ModalBody>
                           
                       
                 
                </ModalContent>
            

        </Modal>
        </>
    )
}

export default TopEducatorCard;
