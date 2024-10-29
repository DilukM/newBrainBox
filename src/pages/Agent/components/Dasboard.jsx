/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Avatar } from "@nextui-org/react"

import { FaSchool, FaUsers } from "react-icons/fa"
import { FaLocationDot, FaUsersLine } from "react-icons/fa6"
import QRCode from "react-qr-code"



export default function Dasboard() {



  return (
    <div className="w-full  bg-gray-100 p-2 border-e-8 rounded-r-xl border-roseorange">
      <div className="flex gap-3">
        <ProfileSection name={' rashan'} price={'50000'} />
        <div className="w-[calc(100%-240px)]  ">
          <div className="flex xl:max-h-[75px]  w-full  h-full gap-3">
            <div className="max-w-[500px] w-full">
              <StudentID studentid={"0000"} />
            </div>
            <div className="w-full">

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
            </div>
          </div>
          <div className="my-3">
            <TopAgent />
          </div>
        </div>
      </div>
      <div className="flex">

      </div>

    </div>
  )
}
const ProfileSection = ({ name, }) => {
  return (


    <div className="bg-white sm:max-w-[350px] rounded-xl py-4 shadow-lg h-full flex flex-col min-w-fit  justify-center items-center    px-8">
      <div className="mask mask-squircle  ">
        <Avatar squircle src="https://i.pravatar.cc/150?u=a04258a2462d826712d" className="rounded-[30px]  w-[170px] h-[170px]" />
      </div>
      <h3 className="text-center font-semibold mt-3 text-[22px] text-darkblue">{name}</h3>

    </div>


  )
}
const StudentID = ({ studentid }) => {

  return (

    <div className="w-full h-full  flex rounded-lg   pe-3 bg-white shadow-md border-e-5 border-roseorange">

      <div className="flex w-[550px]  ">

        <div className="bg-roseorange w-fit rounded-l-lg p-5 pe-10 relative 
            after:absolute  after:h-full after:w-[100px]
            after:top-0 after:border-t-white
            
            
            after:border-r-[50px] after:border-b-[75px] after:border-l-[40px] 
            after:border-solid after:border-r-transparent after:border-l-transparent 
            after:border-b-white
              text-white text-[26px] after:z-10 font-medium">AGENT ID</div>
        <div className="w-fit text-black text-[32px] grid place-items-center font-medium z-20"> {studentid}</div>
      </div>
      <div className="w-fit grid place-content-center">
        <QRCode value={studentid} size={60} />
      </div>
    </div>



  )
}
const CustomerCount = ({ count }) => {
  const icon = [
    <FaSchool size={30} />,
    <FaUsers size={30} />

  ]
  return (
    <div className="flex  w-full h-fit  flex-col sm:flex-row gap-2  justify-around  ">
      {count.map((item, index) =>

        <div key={index} className="w-full  sm:max-w-[200px]">
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
const TopAgent = () => {
  return (
    <div className="w-full flex  gap-2 py-2 overflow-x-scroll customescroll">


      <TopAgentCard />
      <TopAgentCard />
      <TopAgentCard />
      <TopAgentCard />
      <TopAgentCard />
      <TopAgentCard />
      <TopAgentCard />
      <TopAgentCard />
      <TopAgentCard />
      <TopAgentCard />
      <TopAgentCard />
      <TopAgentCard />
      <TopAgentCard />
      <TopAgentCard />
    </div>
  )
}
const TopAgentCard = () => {
  return (
    <div className="bg-white border-s-5 border-roseorange shadow-lg w-fit rounded-xl p-2">
      <span className="flex gap-1 items-center text-[14px] font-medium"><FaLocationDot />Anuradhapura</span>

      <div className="flex gap-1">
        <div className="mask mask-squircle ">
          <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" className="rounded-[10px]  w-[50px] h-[50px]" />
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <span className="flex gap-1 items-center text-[16px] font-semibold"><FaUsersLine size={20} />500</span>

        </div>
      </div>

      <div className="flex flex-col">
        <span className="text-[16px] font-medium">R.M Rashan</span>
        <span className="text-[16px] font-semibold">Rs 1000,000</span>
      </div>
    </div>
  )
}