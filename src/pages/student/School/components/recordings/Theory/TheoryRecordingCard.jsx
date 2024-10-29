/* eslint-disable react/prop-types */
import { Avatar, Button } from '@nextui-org/react';
import vimg from '../../../../../../assets/onlineclass.png';

const RecordingCard = ({ name, type }) => {
    return (
        <div className="bg-white min-w-[300px] rounded-lg  ">
            <div className="flex justify-between">
                <div className="flex p-3 pe-0">
                    <div className="mask mask-squircle ">
                        <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" className="rounded-[10px]  w-[40px] h-[40px]" />
                    </div>
                    <div className="ms-3">
                        <h3 className="font-semibold text-[14px]">{name}</h3>
                        <h3 className="text-gray-400 text-[12px]">{type}</h3>
                    </div>
                </div>

                <div className=" p-3 ps-0">
                    <div className="flex">

                        <div className="flex flex-col justify-end font-semibold text-[20px] ">
                            <span className="h-[18px] text-end">08</span>
                            <span className="max-h-[26px] h-full ">DEC</span>
                        </div>
                        <div className="w-[1px] h-[10] mx-1 bg-black">
                        </div>
                        <div className="flex flex-col justify-end ms-1 text-[14px]">
                            <span>Tuesday</span>
                            <span className="font-medium text-[14px]">1:20 PM</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="">
                <img src={vimg} className="w-full h-full object-fill" />


            </div>
       
            <div className="p-3 flex justify-between py-2 ">
                <span>3h : 50m : 05s</span>
                <Button  className='py-1 text-[16px] bg-black text-white rounded-md p h-fit'>Play</Button>
               
            </div>


        </div>
    );
}

export default RecordingCard;
